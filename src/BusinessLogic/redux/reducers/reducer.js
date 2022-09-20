import {
	SET_POST,
	SET_TAGS,
	SET_POST_ID,
	SET_USER_ID,
	TOGGLE_LOADER,
} from '../actions/types';

const initialState = {
	posts: null,
	tags: [],
	postId: '',
	userId: '',
	loading: false,
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POST:
			return { ...state, posts: action.payload };
		case SET_POST_ID:
			return { ...state, postId: action.payload };
		case SET_USER_ID:
			return { ...state, userId: action.payload };
		case SET_TAGS:
			return { ...state, tags: action.payload };
		case TOGGLE_LOADER:
			return { ...state, loading: !state.loading };
		default:
			return { ...state };
	}
};

export { Reducer };
