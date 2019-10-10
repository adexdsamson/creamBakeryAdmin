import userImage from './assets/img/users/icon-72x72.png';

import {
  MdWeb
} from 'react-icons/md';


///================= sidebar menu items =================///////////

export const navItems = [
  {
    id: 'hjhjgfh',
    to: '/orderlist',
    name: 'order list',
    exact: true,
    Icon: MdWeb
  },
];

///================= sidebar menu items ends =================////////



///////////// Notification Style System //////////////////

export const NOTIFICATION_SYSTEM_STYLE = {
  NotificationItem: {
    DefaultStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      borderRadius: '4px',
      fontSize: '14px',
    },

    success: {
      borderTop: 0,
      backgroundColor: '#45b649',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    error: {
      borderTop: 0,
      backgroundColor: '#f85032',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    warning: {
      borderTop: 0,
      backgroundColor: '#ffd700',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },

    info: {
      borderTop: 0,
      background: 'linear-gradient(to right, #222222,#222222)',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0,
    },
  },

  Title: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
      paddingRight: 5,
      color: '#fff',
      display: 'inline-flex',
      fontSize: 20,
      fontWeight: 'bold',
      // left: '15px',
      // position: 'absolute',
      // top: '50%',
    },
  },

  MessageWrapper: {
    DefaultStyle: {
      display: 'block',
      color: '#fff',
      width: '100%',
    },
  },

  Dismiss: {
    DefaultStyle: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'inherit',
      fontSize: 20,
      color: '#f2f2f2',
      position: 'relative',
      margin: 0,
      padding: 0,
      background: 'none',
      borderRadius: 0,
      opacity: 1,
      width: 20,
      height: 20,
      textAlign: 'initial',
      float: 'none',
      top: 'unset',
      right: 'unset',
      lineHeight: 'inherit',
    },
  },

  Action: {
    DefaultStyle: {
      background: '#fff',
      borderRadius: '2px',
      padding: '6px 20px',
      fontWeight: 'bold',
      margin: '10px 0 0 0',
      border: 0,
    },

    success: {
      backgroundColor: '#45b649',
      color: '#fff',
    },

    error: {
      backgroundColor: '#f85032',
      color: '#fff',
    },

    warning: {
      backgroundColor: '#ffd700',
      color: '#fff',
    },

    info: {
      backgroundColor: '#00c9ff',
      color: '#fff',
    },
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
    },
  },
};



///////// Notifictaion Data //////




export const notificationsData = [{
    id: 1,
    avatar: userImage,
    message: 'David sent you a message',
    date: '3 min ago',
  },
  {
    id: 2,
    avatar: userImage,
    message: 'Jane mentioned you here',
    date: '1 hour ago',
  },
  {
    id: 3,
    avatar: userImage,
    message: 'Clark sent a pull request',
    date: 'yesterday',
  },
  {
    id: 4,
    avatar: userImage,
    message: 'Alicia signed up',
    date: '3 days ago',
  },
  {
    id: 5,
    avatar: userImage,
    message: 'Keith shared this article',
    date: 'a week ago',
  },
];
