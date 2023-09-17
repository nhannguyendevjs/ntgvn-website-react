import { useEffect } from 'react';
import { activeRoute } from '../../utils/stores/app-store';

function Contact() {
  useEffect(() => {
    activeRoute('/contact');
    console.log('Contact Page Did Mount');
  }, []);

  useEffect(() => {
    return () => {
      console.log('Contact Page Will UnMount');
    };
  }, []);

  return (
    <>
      <div>Contact</div>
    </>
  );
}

export default Contact;
