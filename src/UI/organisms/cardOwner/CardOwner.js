import '../../assets/styles/card-owner.css';

function CardOwner({ data }) {
	return (
		<div className="card-owner">
			<img src={data.picture} alt={data.id}></img>
			<p className="text-capitalize">
				{data.title}. {data.firstName} {data.lastName}
			</p>
		</div>
	);
}

export { CardOwner };
