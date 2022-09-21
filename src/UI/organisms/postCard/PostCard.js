import '../../assets/styles/post-card.css';

function PostCard({
	data,
	openModalComments,
	openModalOwner,
	setOwner,
	setComments,
}) {
	const openOwner = (param) => {
		setOwner(param);
		openModalOwner();
	};
	const openComments = (param) => {
		setComments(param);
		openModalComments();
	};

	return (
		<div className="post-card">
			<div
				className="card-header"
				style={{
					backgroundImage: `url(${data.image})`,
					height: '300px',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>
			<div className="card-body">
				<div className="card-buttons">
					<button
						type="button"
						className="button button-bg-none"
						id="comment"
						title="Comentarios"
						onClick={() => openComments(data.id)}
					>
						<i className="icon-comment"></i>
					</button>
					<button
						type="button"
						className="button button-bg-none"
						id="heart"
						title="Likes"
					>
						<i className="icon-heart"></i>
						<span>{data.likes}</span>
					</button>
				</div>
				<div
					className="card-body-owner"
					onClick={() => openOwner(data.owner.id)}
				>
					<img
						src={data.owner.picture}
						alt={data.owner.id}
						lazy="loading"
					></img>
					<p>
						{data.owner.firstName} {data.owner.lastName}
					</p>
				</div>
				<p className="post-description description">{data.text}</p>
				<div className="card-body-tags">
					{data.tags.map((el, index) => (
						<span className="tag description-medium" key={index}>
							{el}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export {PostCard};
