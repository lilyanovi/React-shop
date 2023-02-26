import '../components/formLogin/formLogin.scss'
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import imgGoogleAuth from '../assets/googleIcon.png'
import FormLogin from "../components/formLogin/formLogin"

import { setUser } from "../store/auth/action";
import { useAuth } from "../hooks/use-auth";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user

        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          name: null
        }));

      })
      .catch(() => console.log('Invalid user!'))
  }

  /*  const {currentUser} = useAuth();

    const rememberUser = () => {
 
  console.log(currentUser)
  localStorage.setItem('currentUser', JSON.stringify(currentUser))
}*/


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

        /*   const errorCode = error.code;
           const errorMessage = error.message;
           const email = error.customData.email;
           const credential = GoogleAuthProvider.credentialFromError(error);*/
      });
  }

  return (
    <>
      <section className="formLogin container">
        <h1>Войти</h1>
        <div className="formLogin__box">
          <FormLogin
            handleClick={handleLogin}
            title='Войти'
          />
          <button
            onClick={handleSubmitGoogle}
            className="formLogin__googleAuth"
          >
            <img src={imgGoogleAuth} alt="google icon" />
            <p>Войти с помощью Google</p>
          </button>
          <div>
            <p className="formLogin__question">Нет учётной записи?</p>
            <NavLink className="formLogin__link" to='/signup'>Зарегестрироваться</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage