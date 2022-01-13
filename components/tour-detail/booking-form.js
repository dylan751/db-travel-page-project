import classes from "./booking-form.module.css";
import {ArrowSmRightIcon} from '@heroicons/react/solid';

import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function BookingForm(props) {
  const notificationCtx = useContext(NotificationContext);
  const { tourId } = props;

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const startDateRef = useRef();
  const finishDateRef = useRef();
  const numberOfPeopleRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredStartDate = startDateRef.current.value; // YYYY-MM-DD
    const enteredFinishDate = finishDateRef.current.value; // YYYY-MM-DD
    const enteredNumberOfPeople = numberOfPeopleRef.current.value;

    const newForm = {
      tourId,
      enteredName,
      enteredPhone,
      enteredEmail,
      enteredStartDate,
      enteredFinishDate,
      enteredNumberOfPeople,
    };

    notificationCtx.showNotification({
      title: "Đang gửi dữ liệu...",
      message: "Đặt vé tour.",
      status: "pending",
    });

    fetch("http://localhost:3000/api/forms", {
      method: "POST",
      body: JSON.stringify(newForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Booking failed!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Đặt vé thành công!",
          message: "Đã hoàn thành đặt vé.",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Lỗi mất tiêu rùi!",
          message: "Đặt vé không thành công!",
          status: "error",
        });
      });
  }

  return (
    <form className={classes["form"]} onSubmit={submitFormHandler}>
      <div className={classes["form-controls"]}>
        <h4>Đặt Tour Ngay</h4>
        <div className={classes["form-control"]}>
          <input
            type="text"
            id="name"
            placeholder="Họ và tên"
            ref={nameInputRef}
          />
        </div>
        <div className={classes["form-control"]}>
          <input
            type="number"
            id="phone"
            placeholder="Số điện thoại"
            ref={phoneInputRef}
          />
        </div>
        <div className={classes["form-control"]}>
          <input
            type="email"
            id="email"
            placeholder="Địa chỉ email"
            ref={emailInputRef}
          />
        </div>
        <div className={classes["form-control"]}>
          <input type="date" id="starting-date" ref={startDateRef} />
        </div>
        <div className={classes["form-control"]}>
          <input type="date" id="finishing-date" ref={finishDateRef} />
        </div>
        <div className={classes["form-control"]}>
          <input
            type="number"
            id="number-of-people"
            placeholder="Số lượng người"
            ref={numberOfPeopleRef}
          />
        </div>
        <button>
          Đặt Tour ngay <ArrowSmRightIcon className="w-6 h-6 inline-block" />
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
