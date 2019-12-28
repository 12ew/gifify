import React from 'react';
import './App.css';
import APIUtils from '../src/utilities/APIUtils';
import GifContainer from '../src/components/GifContainer';
import GifSearch from '../src/components/GifSearch';

class App extends React.Component {
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

	handleSubmit = (e) => {
		e.preventDefault();

		APIUtils(this.state.searchTerm)
			.then((resp) =>
				this.setState({
					gifs: resp.data,
					isLoading: false,
					noResults: false
				})
			)
			.catch((error) => this.setState({ error, isLoading: false }));
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
				<h1 className='welcome'>Gifify</h1>
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

export default App;
