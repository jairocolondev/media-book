import axios from 'axios';
import { useState } from 'react';
import { getAPI, getAPI_KEY } from '../data/api';

const useOwner = () => {
	const API_URl = getAPI();
	const API_KEY = getAPI_KEY();

	const [owner, setOwner] = useState(true);
	const getOwner = async (param) => {
		setOwner(true);
		const response = await axios.get(`${API_URl}/user/${param}`, {
			headers: { 'app-id': API_KEY },
		});
		setOwner(response.data);
	};
	return [owner, getOwner];
};

export { useOwner };
