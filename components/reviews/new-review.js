import classes from "./new-review.module.css";
import {ArrowSmRightIcon} from '@heroicons/react/solid';

import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://db-travel-page-project.vercel.app';

function NewReview(props) {
  const notificationCtx = useContext(NotificationContext);
  const { tourId } = props;

  const NameInputRef = useRef();
  const EmailInputRef = useRef();
  const CommentInputRef = useRef();

  function submitNewReview(event) {
    event.preventDefault();

    const enteredName = NameInputRef.current.value;
    const enteredEmail = EmailInputRef.current.value;
    const enteredComment = CommentInputRef.current.value;

    const commentData = {
      name: enteredName,
      email: enteredEmail,
      comment: enteredComment,
    };

    notificationCtx.showNotification({
      title: "Đang gửi dữ liệu...",
      message: "Gửi Review cho tour.",
      status: "pending",
    });

    fetch(`${server}/api/reviews/${tourId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Cannot post new Review!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Viết Review thành công!",
          message: "Review của bạn đã được gửi.",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Lỗi mất tiêu rùi!",
          message: "Review của bạn chưa được gửi.",
          status: "error",
        });
      });
  }

  return (
    <div className={classes["new-review"]}>
      <h2>Để lại bình luận</h2>
      <form className={classes["new-review-form"]} onSubmit={submitNewReview}>
        <div className={classes["new-review-form-controls"]}>
          <div className={classes["new-review-form-control"]}>
            <input
              type="text"
              placeholder="Họ và tên*"
              required
              ref={NameInputRef}
            />
            <input
              type="email"
              placeholder="Địa chỉ email*"
              required
              ref={EmailInputRef}
            />
          </div>
          <textarea
            placeholder="Bình luận của bạn..."
            ref={CommentInputRef}
          ></textarea>
        </div>
        <button>
          Submit <ArrowSmRightIcon className="w-6 h-6 inline-block" />
        </button>
      </form>
    </div>
  );
}

export default NewReview;
