import React from 'react';

class GifContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const gifs = this.props.gifs.map((gif) => {
			return (
				<div className='gifItem' key={gif.id}>
					<img src={gif.images.fixed_height.url} alt='' />
				</div>
			);
		});

		return <div className='gifsMasonry'>{gifs}</div>;
	}
}

export default GifContainer;
