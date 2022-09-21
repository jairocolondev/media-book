import axios from 'axios';
import { useState, useEffect } from 'react';
import { getAPI, getAPI_KEY } from '../data/api';

const useGetInfinite = (tag) => {
	const API_URl = getAPI();
	const API_KEY = getAPI_KEY();

	const [posts, setPosts] = useState([]);
	const [totalPosts, setTotalPosts] = useState(0);
	const [loader, setLoader] = useState(true);
	const [loaderMore, setLoaderMore] = useState(false);
	const [count, setCount] = useState(0);
	const limit = 6;

	const getPost = async (page) => {
		let path =
			tag.length > 0
				? `tag/${tag.trim()}/post?page=${page}&limit=${limit}`
				: `post?page=${page}&limit=${limit}`;
		const response = await axios.get(`${API_URl}/${path}`, {
			headers: { 'app-id': API_KEY },
		});
		setLoader(false);
		setLoaderMore(false);
		return response;
	};

	const more = async () => {
		setLoaderMore(true);
		const newPosts = await getPost(count + 1);
		setCount((count) => count + 1);
		setPosts((posts) => [...posts, ...newPosts.data.data]);
	};

	useEffect(() => {
		const get = async () => {
			const posts = await getPost(0);
			setPosts(posts.data.data);
			setTotalPosts(posts.data.total);
		};
		get();
	}, []);

	useEffect(() => {
		if (posts.length >= 10 || tag.length === 0) {
			setCount(0);
			const get = async () => {
				const posts = await getPost(0);
				setPosts(posts.data.data);
				setTotalPosts(posts.data.total);
			};
			get();
		} else {
		}
	}, [tag]);

	return [posts, more, loader, loaderMore, totalPosts];
};
export { useGetInfinite };
