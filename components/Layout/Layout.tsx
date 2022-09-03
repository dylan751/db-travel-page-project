import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Notification from '../UI/Notification';
import NotificationContext from '../../store/NotificationContext';
import { useContext } from 'react';

const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
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
    </>
  );
};

export default Layout;
