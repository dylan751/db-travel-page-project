import classes from "./contact-form.module.css";

import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import axios from "axios";

function ContactForm() {
  const notificationCtx = useContext(NotificationContext);

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    if (enteredPhone.length > 11 || enteredPhone.length < 10) {
      notificationCtx.showNotification({
        title: "Số điện thoại chứa 10 hoặc 11 ký tự",
        message: "Đặt vé không thành công!",
        status: "error",
      });
      return;
    }

    const newContact = {
      userId: 4,
      name: enteredName,
      phoneNumber: enteredPhone,
      email: enteredEmail,
      title: enteredTitle,
      description: enteredDescription,
    };

    notificationCtx.showNotification({
      title: "Đang gửi dữ liệu...",
      message: "Gửi thông tin của bạn.",
      status: "pending",
    });

    axios
      .post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/contacts`, newContact)
      .then((response) => {
        if (response.data.message === "SUCCESS") {
          notificationCtx.showNotification({
            title: "Gửi thông tin thành công!",
            message: "Chúng tôi sẽ liên lạc cho bạn.",
            status: "success",
          });
          return response.data.data;
        }

        notificationCtx.showNotification({
          title: "Lỗi mất tiêu rùi!",
          message: "Thông tin của bạn chưa được gửi đi",
          status: "error",
        });
        throw new Error(response.data.message || "Cannot post new Review!");
      });
  }

  return (
    <form className={classes["contact-form"]} onSubmit={submitFormHandler}>
      <div className={classes["contact-form-container"]}>
        <div className={classes["contact-header"]}>
          <span>Liên Hệ</span>
          <h2>Giữ Liên Lạc Nào</h2>
        </div>
        <div className={classes["contact-content"]}>
          <input
            type="text"
            placeholder="Họ Và Tên*"
            required
            ref={nameInputRef}
          />
          <input
            type="email"
            placeholder="Địa Chỉ Email*"
            required
            ref={emailInputRef}
          />
          <input
            type="number"
            placeholder="Số Điện Thoại"
            ref={phoneInputRef}
          />
          <input type="text" placeholder="Chủ đề" ref={titleInputRef} />
          <textarea
            placeholder="Nhắn nhủ yêu thương..."
            ref={descriptionInputRef}
          ></textarea>
          <button>Gửi Thông Tin</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
