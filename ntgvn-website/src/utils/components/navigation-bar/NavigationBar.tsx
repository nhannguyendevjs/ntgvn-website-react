import { Link } from 'react-router-dom';
import { useId, useState, useEffect } from 'react';
import { appStore$ } from '../../stores/app-store';
import Clock from '../clock/Clock';

function NavigationBar() {
  let [activatedRoute, setActivatedRoute] = useState('');

  useEffect(() => {
    appStore$.subscribe(res => {
      setActivatedRoute(res.activatedRoute);
    });
  }, []);

  useEffect(() => {
    console.log(activatedRoute);
  }, [activatedRoute]);

  return (
    <>
      <div className='h-[56px] px-4 flex justify-between items-center'>
        <div>
          <Link to='/products'>
            <div className='text-green-500 font-semibold'>NTGVN</div>
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          {[
            [useId(), 'Products', '/products'],
            [useId(), 'Pricing', '/pricing'],
            [useId(), 'Contact', '/contact'],
          ].map(([id, title, url]) => (
            <Link to={url} key={id}>
              <div className={'nav-link font-medium pb-1 transition-all duration-30' + (activatedRoute === url ? ' border-b-2 border-green-500' : ' hover:border-b-2 hover:border-green-500')}>{title}</div>
            </Link>
          ))}
        </div>

        <Clock />
      </div>
    </>
  );
}

export default NavigationBar;
