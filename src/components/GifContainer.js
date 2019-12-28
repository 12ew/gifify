import React from 'react';

const GifContainer = (props) => {
	const { gifs, isLoading, error, noResults } = props;

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
};

export default GifContainer;
