
import { useEffect } from 'react';
import Hello from '../../utils/components/hello/Hello';
import { activeRoute } from '../../utils/stores/app-store';

function Pricing() {
  useEffect(() => {
    activeRoute('/pricing');
    console.log('Pricing Page Did Mount');
  }, []);

  useEffect(() => {
    return () => {
      console.log('Pricing Page Will UnMount');
    };
  }, []);

  return (
    <>
      <Hello color='Red' />
    </>
  );
}

export default Pricing;
