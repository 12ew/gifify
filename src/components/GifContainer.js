import React from 'react';

class GifContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { gifs, isLoading, error, searchTerm, noResults } = this.props;

		if (isLoading) {
			return <p className='errorMsg'>Loading ...</p>;
		}

		if (error) {
			return <p className='errorMsg'>{error.message}</p>;
		}

		if (!noResults & (gifs.length === 0)) {
			return (
				<p className='errorMsg'>
					That search term yielded no results, please try again :){' '}
				</p>
			);
		}

		const gifsList = gifs.map((gif) => {
			return (
				<div className='gifItem' key={gif.id}>
					<img src={gif.images.fixed_height.url} alt='gif' />
				</div>
			);
		});
		return <div className='gifsMasonry'>{gifsList}</div>;
	}
}

export default GifContainer;
