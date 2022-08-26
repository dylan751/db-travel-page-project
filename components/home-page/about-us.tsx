import classes from './about-us.module.css';

import Link from 'next/link';
import Image from 'next/image';

import { TruckIcon, ChatIcon, BookOpenIcon } from '@heroicons/react/solid';

const AboutUs = () => {
  return (
    <section className={classes['about-us']}>
      <div className={classes['about']}>
        <div className={classes['header']}>
          <span>Về Bunichi</span>
          <h2>Chúng tôi đem tới dịch vụ tốt nhất</h2>
          <p>
            Nếu bạn có dự định đi du lịch với người yêu (nếu bạn có) thì Bunichi
            là trang Web dành cho bạn. Ở đây có những địa điểm lãng mạn và dịch
            vụ tuyệt vời
          </p>
        </div>
        <ul className={classes['content']}>
          <li>
            <TruckIcon className="w-12 h-5 inline-block text-clr_jaffa" />
            <div>
              <h4>Chất lượng dịch vụ</h4>
              <p>
                Dịch vụ chúng tôi cung cấp đỉnh như trang Web này vậy! Bạn có
                thể hưởng thụ dịch vụ mát-xa, suối nước nóng, quẩy bar, ...
              </p>
            </div>
          </li>
          <li>
            <ChatIcon className="w-12 h-5 inline-block text-clr_jaffa" />
            <div>
              <h4>Quan tâm khách hàng</h4>
              <p>
                Chúng tôi quan niệm rằng "khách hàng là thượng đế", nếu có bất
                kì băn khoăn gì về chất lượng và giá cả xin vui lòng liên hệ
                <Link href="/contact-us">
                  <a className={classes['contact-link']}> Tại đây</a>
                </Link>
              </p>
            </div>
          </li>
          <li>
            <BookOpenIcon className="w-12 h-5 inline-block text-clr_jaffa" />
            <div>
              <h4>Hướng dẫn viên kinh nghiệm</h4>
              <p>
                Ở Bunichi, chúng tôi tuyển dụng và đào tạo đội ngũ hướng dẫn
                viên dày dặn kinh nghiệm. Bạn có thể yên tâm về sự an toàn khi
                du lịch!
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
              <p>Giám đốc điều hành</p>
              <p>
                Trang Web Bunichi là tinh túy và là niềm tự hào của chúng tôi!
                Hãy tận hưởng Tour du lịch vui vẻ nhé!
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
              <h5>Hoàng Văn Hiển</h5>
              <p>Sinh viên IT-E6</p>
              <p>
                Suốt 4 năm sử dụng, tôi luôn cảm thấy hài lòng về dịch vụ mà
                công ty du lịch Bunichi cung cấp!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
