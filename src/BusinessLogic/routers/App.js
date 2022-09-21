import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { dataLogin } from '../redux/slice/todo.slice';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { DasboardRouter } from './DasboardRouter';
import { Login } from '../../Pages/authentication/login/Login';
import { app } from '../firebase/firebaseConfig';

function App() {
	const dispatch = useDispatch();
	const [checkAuth, setCheckAuth] = useState(true);
	const [login, setLogin] = useState(false);

	useEffect(() => {
		const auth = getAuth(app);

		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				setLogin(true);
				dispatch(dataLogin(user.reloadUserInfo));
			} else {
				setLogin(false);
			}
			setCheckAuth(false);
		});
	}, [setLogin, setCheckAuth, dispatch]);

	if (checkAuth)
		return <h1 style={{ color: 'black' }}>Espera un momento...</h1>;

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoutes isAuth={login}>
							<Login />
						</PublicRoutes>
					}
				/>
				<Route
					path="/"
					element={
						<PrivateRoutes isAuth={login}>
							<DasboardRouter />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export { App };
