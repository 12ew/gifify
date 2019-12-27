import React from 'react';
const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;

class GifsIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			gifs: []
		};
	}

	// Fetch gifs
	getGifs = (searchTerm) => {
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=${100}`
		)
			.then((resp) => resp.json())
			.then((resp) =>
				this.setState({
					gifs: resp.data
				})
			);
	};

	componentDidMount() {
		this.getGifs('crushing it');
	}

	render() {
		return <></>;
	}
}

export default GifsIndex;
