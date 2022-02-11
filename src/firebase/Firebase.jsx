import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

//HINT For vars that is exported WITHOUT the default word it is a "NAMED Export". To import is is like | 'import {auth} from 'path/here/Firebase.jsx'
//ONLY vars with the default keyword can be imported without {} and can be named anything.
//Ex | export default app.
//To import this u can do something like 'import appBlahBlah from 'path/leading/to/app'

export const useSetUserListener = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                return setUser({ userEmail: user.email, userId: user.uid });
            } else {
                setUser({});
            }
        });
        return unsubscribe;
    }, []);
    return user;
};

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.log(
            error.message,
            '-signInWithGoogle, Firebase.jsx| Error Code: ',
            error.code
        );
    }
};
