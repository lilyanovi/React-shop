import { useState } from 'react';

const FormLogin = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <form>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
            />
            <div className="formLogin__checkbox">
                <input type="checkbox" id="formLogin-saveMe"/>
                <label htmlFor="formLogin-saveMe">Запомнить меня</label>
            </div>

            <button
                className="formLogin__btn-enter-exit"
                onClick={(e) => {
                    handleClick(e, email, pass);
                    setEmail('');
                    setPass('');
                }}
            >
                {title}
            </button>
        </form>
    )
}

export default FormLogin;