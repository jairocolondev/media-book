import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { getAPI_GOOGLE } from '../utils/fuctions';

export const useGetUser = () => {
	const [cookies] = useCookies(['cookie-name']);
	const [user, setUser] = useState({});
	const apiGoogle = getAPI_GOOGLE();
	const getUser = async () => {
		await axios(`${apiGoogle}${cookies.token}`, {
			headers: { Authorization: `Bearer ${cookies.token}` },
		})
			.then((response) => {
				setUser(response.data);
			})
			.catch((error) => console.log(error))
			.finally(() => {});
	};
	const removeUser = () => {
		setUser({});
	};

	return [user, getUser, removeUser];
};
