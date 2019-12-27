import React from 'react';
import GifContainer from '../components/GifContainer';
import GifSearch from '../components/GifSearch';

// const API_KEY = `${process.env.REACT_APP_GIPHY_API_KEY}`;
const API_KEY = `dc6zaTOxFJmzC`;

class GifsIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			gifs: [],
			isLoading: false,
			error: null,
			noResults: true
		};
	}

	// Fetch gifs
	getGifs = (searchTerm) => {
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=${100}`
		)
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				} else {
					throw new Error('Something went wrong ...');
				}
			})
			.then((resp) =>
				this.setState({
					gifs: resp.data,
					isLoading: false,
					noResults: false
				})
			)
			.catch((error) => this.setState({ error, isLoading: false }));
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.getGifs(this.state.searchTerm);
	};

	handleChange = (e) => {
		this.setState({
			searchTerm: e.target.value
		});
	};

	render() {
		const { gifs, isLoading, error, searchTerm, noResults } = this.state;
		return (
			<>
				<GifSearch query={this.handleSubmit} inputValue={this.handleChange} />
				<GifContainer
					gifs={gifs}
					isLoading={isLoading}
					error={error}
					searchTerm={searchTerm}
					noResults={noResults}
				/>
			</>
		);
	}
}

export default GifsIndex;
