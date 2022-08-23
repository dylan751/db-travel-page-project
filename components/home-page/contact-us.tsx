import Link from 'next/link';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import classes from './contact-us.module.css';

const ContactUs = () => {
  return (
    <section className={classes['contact-us']}>
      <img src="/images/newsletter-img-1.png" alt="Newsletter Image" />
      <div className={classes['contact-container']}>
        <h3>Liên hệ ngay và luôn</h3>
        <p>Quý vị hãy để lại thông tin liên lạc để nhận chăm sóc khách hàng</p>
        <Link href="/contact-us">
          <a>
            Liên Hệ Thôi{' '}
            <ArrowSmRightIcon className="w-6 h-6 inline-block text-white" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
