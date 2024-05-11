// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
    apiKey: "AIzaSyDMCCODy73nd-7aUSEHDI3l2QA8G_lEDJM",
    authDomain: "health-a5b6c.firebaseapp.com",
    projectId: "health-a5b6c",
    storageBucket: "health-a5b6c.appspot.com",
    messagingSenderId: "335309217689",
    appId: "1:335309217689:web:3e52d9ad7222f02ae0fd08"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('teste')
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});