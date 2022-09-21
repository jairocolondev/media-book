import React from 'react';
import '../../assets/styles/modal.css';

function Modal({ children, isOpen, closeModal }) {
	const stopPropagation = (e) => e.stopPropagation();
  
	return (
		<div
			className={`modal ${isOpen && 'is-open'}`}
			onClick={() => closeModal()}
		>
			<div className="modal-container" onClick={stopPropagation}>
				<button
					className="button button-bg-none modal-close"
					onClick={() => closeModal()}
				>
					<i className="icon-cancel"></i>
				</button>
				{children}
			</div>
		</div>
	);
}
export { Modal };
