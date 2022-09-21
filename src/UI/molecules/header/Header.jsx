import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../BusinessLogic/firebase/logout';
import { MdExitToApp } from 'react-icons/md';
import LogoWhite from '../../assets/logo/logoWhite_media_book.png';
import '../../assets/styles/header.css'

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
				<img className="header-logo" src={LogoWhite} alt="Media Book" />
				<span>
					<button
						onClick={() => dispatch(logoutAction())}
						className="salir"
						type="button"
						value="Salir"
					>
						<MdExitToApp style={{marginTop: '5px'}}/> Salir
					</button>
				</span>
			</section>
		</header>
	);
};

export { Header };
