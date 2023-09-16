import { Link } from 'react-router-dom';
import { useId } from 'react';

function NavigationBar() {
    return (
        <>
            <nav className="flex sm:justify-center space-x-4">
                {[
                    [useId(), 'Home', '/home'],
                    [useId(), 'About', '/about'],
                ].map(([id, title, url]) => (
                    <Link to={url} key={id}>
                        <span className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</span>
                    </Link>
                ))}
            </nav>  
        </>
    );
}

export default NavigationBar;
