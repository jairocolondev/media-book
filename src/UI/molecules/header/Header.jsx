import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../BusinessLogic/firebase/logout';
import { ImExit } from 'react-icons/im';
import Logo from '../../assets/logo/logo_media_book.png';

const Header = () => {
	const { data } = useSelector((store) => store.todos);
	const dispatch = useDispatch();

	return (
		<header>
			<section className="container cabecera">
				<span className="dataUser">
					<img src={data.photoUrl} alt="" />
					<h3>{data.displayName}</h3>
				</span>
				<img className="header-logo" src={Logo} alt="Media Book" />
				<span>
					<button
						onClick={() => dispatch(logoutAction())}
						className="salir"
						type="button"
						value="Salir"
					>
						<ImExit /> Salir
					</button>
				</span>
			</section>
		</header>
	);
};

export { Header };
