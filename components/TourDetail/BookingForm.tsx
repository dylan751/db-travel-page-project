import classes from './BookingForm.module.css';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

import { useRef, useContext } from 'react';
import NotificationContext from '../../store/NotificationContext';
import axios from 'axios';

interface BookingFormProps {
  tourId: number;
}

const BookingForm = ({ tourId }: BookingFormProps) => {
  const notificationCtx = useContext(NotificationContext);

  const nameInputRef = useRef<HTMLInputElement>();
  const phoneInputRef = useRef<HTMLInputElement>();
  const emailInputRef = useRef<HTMLInputElement>();
  const startDateRef = useRef<HTMLInputElement>();
  const finishDateRef = useRef<HTMLInputElement>();
  const numberOfPeopleRef = useRef<HTMLInputElement>();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredStartDate = startDateRef.current.value; // YYYY-MM-DD
    const enteredFinishDate = finishDateRef.current.value; // YYYY-MM-DD
    const enteredNumberOfPeople = numberOfPeopleRef.current.value;

    const currentDate = new Date().toISOString();

    if (enteredStartDate > enteredFinishDate) {
      notificationCtx.showNotification({
        title: 'Ngày khởi hành phải sau ngày kết thúc! Nhập lại!',
        message: 'Đặt vé không thành công!',
        status: 'error',
      });
      return;
    }
    // -------------------------------- Validate -------------------------------------
    if (enteredStartDate <= currentDate) {
      notificationCtx.showNotification({
        title: 'Không thể đặt Tour đã diễn ra!',
        message: 'Đặt vé không thành công!',
        status: 'error',
      });
      return;
    }

    if (enteredPhone.length > 11 || enteredPhone.length < 10) {
      notificationCtx.showNotification({
        title: 'Số điện thoại chứa 10 hoặc 11 ký tự',
        message: 'Đặt vé không thành công!',
        status: 'error',
      });
      return;
    }

    const newForm = {
      tourId,
      name: enteredName,
      phoneNumber: enteredPhone,
      email: enteredEmail,
      numberOfPeople: enteredNumberOfPeople,
      startTime: enteredStartDate,
      endTime: enteredFinishDate,
    };

    notificationCtx.showNotification({
      title: 'Đang gửi dữ liệu...',
      message: 'Đặt vé tour.',
      status: 'pending',
    });

    axios
      .post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/forms`, newForm)
      .then((response) => {
        if (response.data.message === 'SUCCESS') {
          notificationCtx.showNotification({
            title: 'Đặt vé thành công!',
            message: 'Đã hoàn thành đặt vé.',
            status: 'success',
          });
          return response.data.data;
        }

        notificationCtx.showNotification({
          title: 'Lỗi mất tiêu rùi!',
          message: 'Đặt vé không thành công!',
          status: 'error',
        });
        throw new Error(response.data.message || 'Cannot post new Review!');
      });
  }

  return (
    <form className={classes['form']} onSubmit={submitFormHandler}>
      <div className={classes['form-controls']}>
        <h4>Book Tour</h4>
        <div className={classes['form-control']}>
          <input
            type="text"
            id="name"
            placeholder="Name *"
            ref={nameInputRef}
            required
          />
        </div>
        <div className={classes['form-control']}>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number *"
            ref={phoneInputRef}
            required
          />
        </div>
        <div className={classes['form-control']}>
          <input
            type="email"
            id="email"
            placeholder="Email address *"
            ref={emailInputRef}
            required
          />
        </div>
        <div className={classes['form-control']}>
          <input type="date" id="starting-date" ref={startDateRef} />
        </div>
        <div className={classes['form-control']}>
          <input type="date" id="finishing-date" ref={finishDateRef} />
        </div>
        <div className={classes['form-control']}>
          <input
            type="number"
            id="number-of-people"
            placeholder="Number Of People *"
            ref={numberOfPeopleRef}
            required
          />
        </div>
        <button>
          Book Now <ArrowSmRightIcon className="w-6 h-6 inline-block" />
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
