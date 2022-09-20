import {
	SET_POST,
	SET_TAGS,
	SET_POST_ID,
	SET_USER_ID,
	TOGGLE_LOADER,
} from './types';

export const setPosts = (payload) => ({
	type: SET_POST,
	payload,
});

export const toggleLoader = () => ({
	type: TOGGLE_LOADER,
});

export const setPostId = (payload) => ({
	type: SET_POST_ID,
	payload,
});

export const setUserId = (payload) => ({
	type: SET_USER_ID,
	payload,
});

export const setTags = (payload) => ({
	type: SET_TAGS,
	payload,
});
