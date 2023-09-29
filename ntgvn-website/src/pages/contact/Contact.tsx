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
      <div className="contact-container">
        <div className="contact-block">
          <span>Email: </span> hoainhaannguyen@gmail.com
        </div>

        <div className="contact-block">
          <span>Phone number: </span> 0346 528 526
        </div>

        <div className="contact-block">
          <span>Zalo: </span> 0346 528 526
        </div>

        <div className="contact-block">
          <span>Facebook: </span> <a href="https://www.facebook.com/namtiengiangvnoffical"
            className="text-green-500 font-semibold">Nấm Tiền Giang</a>
        </div>

        <div className="contact-block __map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.149591504578!2d106.56694208525957!3d10.307409802271032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31755339c9b12435%3A0x3d9d44bc4eae620b!2zTuG6pW0gVGnhu4FuIEdpYW5n!5e0!3m2!1svi!2s!4v1691989102576!5m2!1svi!2s"
            width="100%" height="100%" style={{ border: 0, borderRadius: 'var(--border-radius)' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </>
  );
}

export default Contact;
