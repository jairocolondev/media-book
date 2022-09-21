import '../../UI/assets/styles/home.css';
import {Modal} from '../../UI/organisms/modal/Modal';
import {PostCard} from '../../UI/organisms/postCard/PostCard';
import {CardOwner} from '../../UI/organisms/cardOwner/CardOwner';
import {CardComments} from '../../UI/organisms/cardComments/CardComments';
import React, { useState } from 'react';
import { useOwner } from '../../BusinessLogic/hooks/useOwner';
import { useModal } from '../../BusinessLogic/hooks/useModal';
import { useComments } from '../../BusinessLogic/hooks/useComments';
import {useGetInfinite} from '../../BusinessLogic/hooks/useMoreInfinite';
import {SelectTags} from '../../UI/molecules/selectTag/SelectTags';

function Home() {
	const [tag, setTag] = useState('');
	const [owner, getOwner] = useOwner();
	const [comments, getComments] = useComments();
	const [posts, more, loader, loaderMore, totalPosts] = useGetInfinite(tag);
	const [isOpenModalOwner, openModalOwner, closeModalOwner] = useModal(false);
	const [isOpenModalComments, openModalComments, closeModalComments] =
		useModal(false);

	const firstValidation =
		posts.length > 0 && posts.length <= totalPosts && posts.length >= 10;
	const secondValidation = posts.length >= 0 && posts.length === totalPosts;

	const setInfoOwner = (param) => {
		getOwner(param);
	};

	const setInfoComments = (param) => {
		getComments(param);
	};

	return (
		<div className="home">
			<h1 className="title">Estas son las publicaciones para ti</h1>
			<section className="container">
				<SelectTags tag={tag} setTag={setTag} />

				<div className="home-posts">
					{loader && <p className="margin-auto">Cargando Publicaciones...</p>}
					{posts.length > 0 &&
						posts?.map((el) => (
							<PostCard
								key={el.id}
								data={el}
								openModalComments={openModalComments}
								openModalOwner={openModalOwner}
								setOwner={setInfoOwner}
								setComments={setInfoComments}
							/>
						))}
				</div>
				{secondValidation && (
					<div className="w-100 d-flex align-items justify-content">
						<p>No hay más post para visualizar</p>
					</div>
				)}
				{firstValidation && (
					<div className="w-100 d-flex align-items justify-content">
						<button
							type="button"
							className="button button-secondary my-1"
							onClick={more}
						>
							{loaderMore ? 'Cargando posts...' : 'Ver más'}
						</button>
					</div>
				)}
				{/* modal owner */}
				<Modal isOpen={isOpenModalComments} closeModal={closeModalComments}>
					<h3>Comentarios</h3>
					{comments.length > 0 && <CardComments data={comments} />}
					{comments.length === 0 && <p>Publicación sin comentarios</p>}
					{comments === true && <p>Cargando comentarios</p>}
				</Modal>
				<Modal isOpen={isOpenModalOwner} closeModal={closeModalOwner}>
					<h3>Usuario</h3>
					{Object.keys(owner).length > 0 && <CardOwner data={owner} />}
					{owner === true && <p>Cargando datos del usuario</p>}
				</Modal>
			</section>
		</div>
	);
}

export { Home };
