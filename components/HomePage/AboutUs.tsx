import classes from './AboutUs.module.css';

import Link from 'next/link';
import Image from 'next/image';

import { TruckIcon, ChatIcon, BookOpenIcon } from '@heroicons/react/solid';

const AboutUs = () => {
  return (
    <section className={classes['about-us']}>
      <div className={classes['about']}>
        <div className={classes['header']}>
          <span>About Bunichi</span>
          <h2>We provide the best services</h2>
          <p>
            If you plan to travel with your partner then Bunichi is the Web site
            for you. Here we have romantic places and great services
          </p>
        </div>
        <ul className={classes['content']}>
          <li>
            <TruckIcon className="w-12 h-5 inline-block text-clr_jaffa" />
            <div>
              <h4>Technology Driven</h4>
              <p>
                The service we provide is as top-notch as this website! This is
                the best Tour guide website you'll ever found
              </p>
            </div>
          </li>
          <li>
            <ChatIcon className="w-12 h-5 inline-block text-clr_jaffa" />
            <div>
              <h4>User Focus</h4>
              <p>
                We believe that "Customer is king", if there is any questions
                about quality and prices feel free contact us
                <Link href="/contact-us">
                  <a className={classes['contact-link']}> Here</a>
                </Link>
              </p>
            </div>
          </li>
          <li>
            <BookOpenIcon className="w-12 h-5 inline-block text-clr_jaffa" />
            <div>
              <h4>Fairness</h4>
              <p>
                In Bunichi, every customers will be treated equally, with the best
                services and care possible
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes['review']}>
        <ul className={classes['review-grid']}>
          <li className={classes['review-item']}>
            <div className={classes['image']}>
              <Image
                src="/images/reviewer-duong.jpg"
                alt="Hai Duong"
                width={400}
                height={340}
              />
            </div>
            <div className={classes['review-content']}>
              <h5>Nguyễn Hải Dương</h5>
              <p>CEO</p>
              <p>
                Bunichi website is our pride! Hope you enjoy the Tours
                we provide
              </p>
            </div>
          </li>
          <li className={classes['review-item']}>
            <div className={classes['image-2']}>
              <Image
                src="/images/reviewer-duong-2.jpg"
                alt="Hai Duong"
                width={400}
                height={340}
              />
            </div>
            <div className={classes['review-content']}>
              <h5>Nguyễn Hải Dương</h5>
              <p>Tech lead</p>
              <p>
                We tried our best to provide the most convienient website
                for travel lovers
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
