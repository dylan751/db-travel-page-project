import classes from "./new-review.module.css";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import axios from "axios";

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
      userId: 4,
      name: enteredName,
      email: enteredEmail,
      tourId: tourId,
      rating: 5, // TODO: Handle rating form
      content: enteredComment,
    };

    notificationCtx.showNotification({
      title: "Đang gửi dữ liệu...",
      message: "Gửi Review cho tour.",
      status: "pending",
    });

    axios
      .post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/reviews`, commentData)
      .then((response) => {
        if (response.data.message === "SUCCESS") {
          notificationCtx.showNotification({
            title: "Viết Review thành công!",
            message: "Review của bạn đã được gửi.",
            status: "success",
          });
          return response.data.data;
        }

        notificationCtx.showNotification({
          title: "Lỗi mất tiêu rùi!",
          message: "Review của bạn chưa được gửi.",
          status: "error",
        });
        throw new Error(response.data.message || "Cannot post new Review!");
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
