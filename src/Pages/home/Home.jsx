import React, { useEffect, useState } from 'react';
import { filterTags } from '../../BusinessLogic/data/filterTags';
import { getData } from '../../BusinessLogic/data/getData';
import { useGetInfinite } from '../../BusinessLogic/hooks/useMoreInfinite';
import Like_post from '../../UI/assets/logo/like_post.svg';
import '../../UI/assets/styles/home.css';

const Home = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState(process.env.REACT_APP_DUMMY_API_KEY);
	const idModal = data.filter((res) => res.id === id);
	const [posts, more, loader, loaderMore, totalPosts] = useGetInfinite(data);

	const firstValidation =
		posts.length > 0 && posts.length <= totalPosts && posts.length >= 6;
	const secondValidation = posts.length >= 0 && posts.length === totalPosts;

	useEffect(() => {
		getData('post').then(({ data }) => setData(data.data));
	}, []);

	const handleFiltro = (tag) => {
		getData('post').then(({ data }) => setData(filterTags(data.data, tag)));
	};

	return (
		<div className="container">
			<span style={{ fontStyle: 'bold', fontSize: '25px' }}>Filtra por: </span>
			<button
				className="btn-filtro"
				onClick={() => getData('post').then(({ data }) => setData(data.data))}
			>
				Todo
			</button>
			<button className="btn-filtro" onClick={() => handleFiltro('animal')}>
				Animal
			</button>
			<button className="btn-filtro" onClick={() => handleFiltro('human')}>
				Human
			</button>
			<button className="btn-filtro" onClick={() => handleFiltro('snow')}>
				Snow
			</button>
			<div className="home-container">
				{loader && <p className="margin-auto">Cargando posts...</p>}
				{data.map((res, index) => (
					<section key={index} className="post">
						<div className="post-contenido">
							<section className="">
								<img className="img-post" src={res.image} alt="" />
								{res.tags.map((tag, index) => (
									<span className="tag" key={index}>
										{tag}{' '}
									</span>
								))}
								<div className="post-header">
									<span>
										<img
											className="img-header"
											src={res.owner.picture}
											alt=""
										/>
										<a href="#modal3" onClick={() => setId(res.id)}>
											{res.owner.firstName} {res.owner.lastName}
										</a>
									</span>
									<strong>
										<img className="like" src={Like_post} alt="" />
										{res.likes}
									</strong>
								</div>
								<hr />
								<p>{res.text}</p>
							</section>
						</div>
					</section>
				))}
			</div>
			<div className='divMore'>
				{secondValidation && (
					<div>
						<p>No hay más post para visualizar</p>
					</div>
				)}
				{firstValidation && (
					<div>
						<button type="button" className="btnMore" onClick={more}>
							{loaderMore ? 'Cargando posts...' : 'Ver más'}
						</button>
					</div>
				)}
			</div>
			{idModal.map((res, index) => (
				<div key={index} id="modal3" className="modalmask">
					<div className="modalbox resize">
						<a href="#close" title="Close" className="close">
							X
						</a>
						<h2>
							{res.owner.firstName} {res.owner.lastName}
						</h2>
						<h5>
							<strong>Id: </strong>
							{res.owner.id}
						</h5>
						<img src={res.owner.picture} alt="" />
					</div>
				</div>
			))}
		</div>
	);
};

export { Home };
