import React from 'react';

const GifSearch = (props) => {
	const { query, inputValue } = props;

	return (
		<div className='searchBar'>
			<form onSubmit={query}>
				<input
					className='formInput'
					onChange={inputValue}
					type='text'
					name='name'
					placeholder='Search Gifs'
				/>
				<input className='formButton' type='submit' value='Search' />
			</form>
		</div>
	);
};

export default GifSearch;
