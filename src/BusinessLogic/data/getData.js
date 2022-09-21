import axios from 'axios';

const getData = (endPoint) => {
	const URL = `https://dummyapi.io/data/v1/${endPoint}?limit=12`;

	const res = axios.get(URL, {
		headers: {
			'app-id': process.env.REACT_APP_DUMMY_API_KEY,
		},
	});

	return res;
};

export { getData };
