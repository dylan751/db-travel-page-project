import classes from "./contact-form.module.css";

import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function ContactForm() {
  const notificationCtx = useContext(NotificationContext);

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const newContact = {
      enteredName,
      enteredPhone,
      enteredEmail,
      enteredSubject,
      enteredMessage,
    };

    notificationCtx.showNotification({
      title: "Đang gửi dữ liệu...",
      message: "Gửi thông tin của bạn.",
      status: "pending",
    });

    fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Gửi thông tin thành công!",
          message: "Chúng tôi sẽ liên lạc cho bạn.",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Lỗi mất tiêu rùi!",
          message: "Thông tin của bạn chưa được gửi đi",
          status: "error",
        });
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
          <input type="text" placeholder="Chủ đề" ref={subjectInputRef} />
          <textarea
            placeholder="Nhắn nhủ yêu thương..."
            ref={messageInputRef}
          ></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
