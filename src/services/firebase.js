import { initializeApp } from "firebase/app";
//import { getAuth } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, update, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBU_ZciAuk-2ZjDISns1IIpGcJJBvw3Rgg",
  authDomain: "react-shop-f4b14.firebaseapp.com",
  projectId: "react-shop-f4b14",
  storageBucket: "react-shop-f4b14.appspot.com",
  messagingSenderId: "628260170468",
  appId: "1:628260170468:web:d64193b07f15d26c5c5af1",
  databaseURL: "https://react-shop-f4b14-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

const db = getDatabase(app);


// получить всю информацию о пользователе
export const getUserValue = (user) => {
  const uid = user.uid;
  onValue(ref(db, 'users/' + uid), (data) => {
    const dataUser = data.val();
    console.log(dataUser)
});
}

//записать e-mail 
export const writeUserEmail = (user) => {
  const uid = user.uid;
  set(ref(db, 'users/' + uid + '/email'), {
    email: user.email,
  });
}

//записать имя
export const writeUserName = (user) => {
  const uid = user.uid;
  set(ref(db, 'users/' + uid + '/name'), {
    email: user.displayName,
  });
}

//записать статус подписки
export const writeUserSubscribe = (user, subscribeVal) => {
  const uid = user.uid;
  set(ref(db, 'users/' + uid + '/subscribe'), {
    subscribe: subscribeVal
  });
}


//добавить пользователя в список подписавшихся
export const writeSubscribeList = (user) => {
  const uid = user.uid;
  set(ref(db, 'subscribeList/' + uid ), {
    email: user.email
  });
}

//удалить пользователя из списка подписавшихся
export const deliteInSubscribeList = (user) => {
  const uid = user.uid;
  set(ref(db, 'subscribeList/' + uid ), {
    email: null
  });
}

//отправить заявку с авторизацией
export const writeUserApplication = (user, idApplication, application) => {
  const uid = user.uid;
  set(ref(db, 'users/' + uid + '/applications'+ idApplication), {
    application
  });
}


//отправить заявку без авторизации
export const writeApplicationWithoutLogin = (idApplication, name, phone, commit) => {
  set(ref(db, 'applicationsWithoutLogin/'+idApplication), {
    name: name,
    phone: phone,
    commit: commit
  });
}
