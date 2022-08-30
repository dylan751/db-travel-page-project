import Link from 'next/link';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import classes from './ContactUs.module.css';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className={classes['contact-us']}>
      <Image src="/images/newsletter-img-1.png" alt="Newsletter Image" width={400} height={300} />
      <div className={classes['contact-container']}>
        <h3>Feel free to contact us</h3>
        <p>Please leave your information so that we can support you</p>
        <Link href="/contact-us">
          <a>
            Let's contact{' '}
            <ArrowSmRightIcon className="w-6 h-6 inline-block text-white" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
