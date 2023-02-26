import '../components/formLogin/formLogin.scss'
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import imgGoogleAuth from '../assets/googleIcon.png'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setUser } from "../store/auth/action";

import FormLogin from "../components/formLogin/formLogin"



const SignUpPage = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegister = (e, email, password) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user

        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          name: null
        }));
      })
      .catch(console.error)
  }

  const handleSubmitGoogle = (e) => {
    e.preventDefault()

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
      })
      .catch((error) => {
        /* 
             const errorCode = error.code;
             const errorMessage = error.message;
             const email = error.customData.email;
             const credential = GoogleAuthProvider.credentialFromError(error);*/
      });
  }

  return (
    <>
      <section className="formLogin container">
        <h1>Регистрация</h1>
        <div className="formLogin__box">
          <FormLogin
            title='Зарегестрироваться'
            handleClick={handleRegister}
          />
          <button
            onClick={handleSubmitGoogle}
            className="formLogin__googleAuth"
          >
            <img src={imgGoogleAuth} alt="google icon" />
            <p>Войти с помощью Google</p>
          </button>
          <div>
            <p className="formLogin__question">Уже есть учётная запись?</p>
            <NavLink className="formLogin__link" to='/login'>Войти</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUpPage