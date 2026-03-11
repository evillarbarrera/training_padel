importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBcqEBtoe4h_0IVt6-Rjc2Y8VQdswfCuUg",
    authDomain: "academia-padel.firebaseapp.com",
    projectId: "academia-padel",
    storageBucket: "academia-padel.firebasestorage.app",
    messagingSenderId: "786145270372",
    appId: "1:786145270372:web:4e28cab679ac103d199d71"
});

const messaging = firebase.messaging();
