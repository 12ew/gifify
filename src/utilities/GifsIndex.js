import React from 'react';
import GifContainer from '../components/GifContainer';
import GifSearch from '../components/GifSearch';

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

	handleSubmit = (e) => {
		e.preventDefault();

		this.getGifs(this.state.searchterm);
	};

	handleChange = (e) => {
		this.setState({
			searchterm: e.target.value
		});
	};

	componentDidMount() {
		// this.getGifs('happiness');
	}

	render() {
		return (
			<>
				<GifSearch query={this.handleSubmit} inputValue={this.handleChange} />
				<GifContainer gifs={this.state.gifs} />
			</>
		);
	}
}

export default GifsIndex;
