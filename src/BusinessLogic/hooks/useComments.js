import axios from 'axios';
import { useState } from 'react';
import { getAPI, getAPI_KEY } from '../data/api';

const useComments = () => {
	const API_URl = getAPI();
	const API_KEY = getAPI_KEY();

	const [comments, setComments] = useState(true);
	const getComments = async (param) => {
		setComments(true);
		const response = await axios.get(`${API_URl}/post/${param}/comment`, {
			headers: { 'app-id': API_KEY },
		});
		setComments(response.data.data);
	};
	return [comments, getComments];
};

export { useComments };
