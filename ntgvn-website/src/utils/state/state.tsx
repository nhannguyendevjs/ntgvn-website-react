import { cloneDeep } from 'lodash';
import { Observable, Subject } from 'rxjs';
import GLOBAL_STATE from '../../global-state';

class State {
  #state;

  #dataSource$: Subject<any> = new Subject();
  stateChanges$: Observable<any> = this.#dataSource$.asObservable();

  get currentState() {
    return cloneDeep(this.#state);
  }

  constructor(initialState) {
    this.#state = new Proxy(initialState, {
      get: this.#stateGetter.bind(this),
      set: this.#stateSetter.bind(this),
    });
  }

  #sideEffect(key, value, newState) {
    const change = {
      key,
      value,
      newState,
    }

    this.#dataSource$.next(change);
  }

  #stateGetter(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  }

  #stateSetter(target, key, receiver) {
    if (key in target && target[key] !== receiver) {
      Reflect.set(target, key, receiver);
      this.#sideEffect(key, receiver, this.currentState);
    }

    return true;
  }

  commit(changes) {
    let commitState = cloneDeep(this.#state);

    commitState = { ...commitState, ...changes };
    Object.keys(commitState).forEach(key => {
      (this.#state)[key] = (commitState)[key];
    });
  }
}

const appState = new State(GLOBAL_STATE);

export default appState;
