
import { useEffect } from 'react';
import { activeRoute } from '../../utils/stores/app-store';
import { Link } from 'react-router-dom';

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
      <div className="pricing-container">
        <div className="pricing-header">Simple and flexible pricing</div>

        <div>Please <Link to="/contact"><span className="text-green-500 font-semibold cursor-pointer">contact us</span></Link> for the best price</div>
      </div >
    </>
  );
}

export default Pricing;
