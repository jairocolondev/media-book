import { getAuth, signOut } from 'firebase/auth';
export const logoutAction = () => {
	return () => {
		const auth = getAuth();
		signOut(auth)
			.then()
			.catch((error) => console.log(error));
	};
};
