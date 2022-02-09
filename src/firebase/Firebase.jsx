import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: 'AIzaSyC4H9jJIoxcrG1wncWDbh6zxEVuYhXSJKU',
    authDomain: 'todo-reduxtk.firebaseapp.com',
    projectId: 'todo-reduxtk',
    storageBucket: 'todo-reduxtk.appspot.com',
    messagingSenderId: '53096232068',
    appId: '1:53096232068:web:3449ac3e59bc1f70f2fed1',
};

const app = initializeApp({ ...firebaseConfig });
export const auth = getAuth(app);

//HINT For vars that is exported WITHOUT the default word. To import is is like | 'import {auth} from 'path/here/Firebase.jsx'
//ONLY vars with the default keyword can be imported without {} and can be named anything.
//Ex | export default app.
//To import this u can do something like 'import appBlahBlah from 'path/leading/to/app'
