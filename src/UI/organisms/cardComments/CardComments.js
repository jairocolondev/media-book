import '../../assets/styles/card-comment.css';

function CardComments({ data }) {
	return (
		<div className="card-comment">
			{data.length > 0 &&
				data.map((el) => (
					<p className="text-capitalize" key={el.id}>
						hola
					</p>
				))}
		</div>
	);
}

export { CardComments };
