import { atom } from 'nanostores';

const appStore$ = atom({
    activatedRoute: '',
});

const activeRoute = activatedRoute => {
    appStore$.set({ ...appStore$.get(), activatedRoute });
};

export {
    appStore$,
    activeRoute,
};
