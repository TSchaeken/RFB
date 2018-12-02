import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDTs1TDnivjXVo-H5PMs8A98RjCr32zrVQ',
  authDomain: 'cotd-2342b.firebaseapp.com',
  databaseURL: 'https://cotd-2342b.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
