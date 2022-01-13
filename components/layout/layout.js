import { Fragment } from "react/cjs/react.production.min";

import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
