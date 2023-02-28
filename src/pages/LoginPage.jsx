import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react";

import FormLogin from "../components/formLogin"

import { setUser } from "../store/auth/action";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const LoginPage = () => {

  const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    
    const handleLogin = (e, email, password, rememberMe) => {
        e.preventDefault();
        setErrorMessage('');
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

              const user = userCredential.user
              
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    name: null,
                    rememberMe: rememberMe
                }));
              
              if (rememberMe === true) {
                localStorage.setItem('remember', true)        
              }
            })
            .catch((error) => { 
              
              switch (error.code) {
                case "auth/invalid-email":
                  setErrorMessage("Адрес электронной почты указан некорректно");
                  break;
                case "auth/user-disabled":
                  setErrorMessage(
                    "Аккаунт заблокирован"
                  );
                  break;
                case "auth/user-not-found":
                  setErrorMessage("Адрес электронной почты не зарегестрирован");
                  break;
                case "auth/wrong-password":
                  setErrorMessage("Пароль недействителен или у пользователя нет пароля.")
                  break;
                default:
                  setErrorMessage(error.message);
                  break;
              }
            })
    }
 
    const handleSubmitGoogle = (e) => {
        e.preventDefault()    
        setErrorMessage('');
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
        
              const user = result.user;
    
              dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
                name: user.displayName
                }));
                navigate('/account');
                localStorage.setItem('remember', true) 
              })
            
          .catch((error) => {

            switch (error.code) {
              case "auth/user-disabled":
                setErrorMessage(
                  "Аккаунт заблокирован"
                );
                break;           
              default:
                setErrorMessage(error.message);
                break;
            }
          });
    }

    return (
      <>
       {errorMessage ?
          <div>
            {errorMessage}
          </div> : null
        }
        <section className="container">
        <h1>LoginPage</h1>
        <FormLogin handleClick={handleLogin} title='Войти'/>
        <div>
            <button onClick={handleSubmitGoogle}>Войти с помощью Google</button>
        </div>
        <div>
            <p>Нет учётной записи?</p>
            <NavLink to='/signup'>Зарегестрироваться</NavLink>
        </div>
        </section>
      </>
    )
  }
  
  export default LoginPage