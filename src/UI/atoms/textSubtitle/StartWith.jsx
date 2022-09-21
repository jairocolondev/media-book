import React from 'react';

const StartWith = ({ img, text }) => {
	return (
		<button className="btnGF">
			<img src={img} alt="" />
			Inicia con {text}
		</button>
	);
};

export { StartWith };
