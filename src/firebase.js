import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA3eAs8dUDQFX6U5W5VXT8dlqzWBB0kEp8',
  authDomain: 'fb-clone-4eab3.firebaseapp.com',
  databaseURL: 'https://fb-clone-4eab3-default-rtdb.firebaseio.com',
  projectId: 'fb-clone-4eab3',
  storageBucket: 'fb-clone-4eab3.appspot.com',
  messagingSenderId: '712435488985',
  appId: '1:712435488985:web:da02c25ea8e9e1f19dc6c8',
});

const db = firebaseApp.fireStore();

export default db;
