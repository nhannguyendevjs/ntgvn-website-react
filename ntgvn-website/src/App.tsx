import { Outlet } from 'react-router-dom';
import { appStore$ } from './utils/stores/app-store.js';
import NavigationBar from './utils/components/navigation-bar/NavigationBar';

function App() {
    appStore$.subscribe(value => {
        console.log('App Store updated ::', value);
    });

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
