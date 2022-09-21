import axios from 'axios';

const getCommet = (id) => {
	const URL = `https://dummyapi.io/data/v1/post/${id}/comment?limit=10`;

	const res = axios.get(URL, {
		headers: { 'app-id': process.env.REACT_APP_DUMMY_API_KEY },
	});

	return res;
};

export { getCommet };
