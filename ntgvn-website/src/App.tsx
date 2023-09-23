import { useNavigate, Outlet } from 'react-router-dom';
import NavigationBar from './utils/components/navigation-bar/NavigationBar';
import { useEffect } from 'react';
import appState from './utils/state/state';

function App() {
  let state = appState.currentState;
  const navigate = useNavigate();

  useEffect(() => {
    state.ready = true;
    appState.commit(state);
    navigate('/products');
  }, []);

  return (
    <>
      <NavigationBar />
      <div className='w-full h-4' />
      <Outlet />
      <div id='contact-phone-number'>Contact: 0346 528 256</div>
    </>
  );
}

export default App;
