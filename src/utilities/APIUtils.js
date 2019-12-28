// const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;
const API_KEY = `QzyF9MjG5PdUEwPFpczwn5AdFBGd8Sm0`;

const APIUtils = (searchTerm) => {
	return fetch(
		`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=${100}`
	).then((resp) => {
		if (resp.ok) {
			return resp.json();
		} else {
			throw new Error('Something went wrong ...');
		}
	});
};

export default APIUtils;
