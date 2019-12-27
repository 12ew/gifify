import React from 'react';

class GifSearch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { query, inputValue } = this.props;
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
	}
}

export default GifSearch;
