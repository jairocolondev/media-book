import React from 'react';
import '../../assets/styles/startwith.css';

const StartWith = ({ img, text }) => {
	return (
		<button className="btnGoogle">
			<img src={img} alt="" />
			Inicia con {text}
		</button>
	);
};

export { StartWith };
