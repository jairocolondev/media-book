import React from 'react';
import { useDispatch } from 'react-redux';
import { ButtonLogin } from '../../UI/atoms/button/ButtonLogin';
import { StartWith } from '../../UI/atoms/textSubtitle/StartWith';
import { loginGoogle } from '../../BusinessLogic/firebase/loginGoogle';
import Logo from '../../UI/assets/logo/logo_media_book.png';
import logoGoogle from '../../UI/assets/logo/logoGoogle.png';
import ImageLogin from '../../UI/assets/image/image_login.png';

const Login = () => {
	const dispatch = useDispatch();

	return (
		<section className="container-login">
			<div className="loginOptions">
				<img className="logo" src={Logo} alt="Media Book" />
				<h1 className="login-text">Iniciar sesión</h1>
				<form className="formLogin">
					<input
						className="input-login"
						type="email"
						name=""
            id="email"
						required
						placeholder="Correo Electrónico"
					/>{' '}
					<br />
					<input
						className="input-login"
						type="password"
						name=""
            id="password"
						required
						placeholder="Ingresa una Contraseña"
					/>
					<div className="contLogin">
						{' '}
						<ButtonLogin type="submit" text="Iniciar Sesión" />
					</div>
				</form>
				<h3 className="login-text">O</h3>
				<span onClick={() => dispatch(loginGoogle())}>
					<StartWith img={logoGoogle} text="Google" />
				</span>
			</div>
			<div className="container-img">
				<img className="center" src={ImageLogin} alt="Media Book" />
			</div>
		</section>
	);
};

export { Login };
