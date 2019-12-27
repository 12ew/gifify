import React from 'react';

class GifSearch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='searchBar'>
				<form onSubmit={this.props.query}>
					<input
						className='formInput'
						onChange={this.props.inputValue}
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
