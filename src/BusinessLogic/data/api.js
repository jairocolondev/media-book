function getAPI() {
	return process.env.REACT_APP_PUBLIC_API;
}
function getAPI_KEY() {
	return process.env.REACT_APP_DUMMY_API_KEY;
}
module.exports = {
	getAPI,
	getAPI_KEY,
};
