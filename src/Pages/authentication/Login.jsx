import React from 'react';
import { useDispatch } from 'react-redux';
import { StartWith } from '../../UI/atoms/textSubtitle/StartWith';
import { loginGoogle } from '../../BusinessLogic/firebase/loginGoogle';
import Logo from '../../UI/assets/logo/logo_media_book.png';
import logoGoogle from '../../UI/assets/logo/logoGoogle.png';
import ImageLogin from '../../UI/assets/image/image_login.png';
import '../../UI/assets/styles/login.css'

const Login = () => {
	const dispatch = useDispatch();

	return (
		<section className="container-login">
			<div className="loginOptions">
				<img className="logo" src={Logo} alt="Media Book" />
				<span onClick={() => dispatch(loginGoogle())}>
					<StartWith img={logoGoogle} text="Google" />
				</span>
			</div>
			<div className="container-img">
				<img className='imageLogin' src={ImageLogin} alt="Media Book" />
			</div>
		</section>
	);
};

export { Login };
