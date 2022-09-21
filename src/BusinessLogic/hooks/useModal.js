import { useState } from 'react';

const useModal = (initValue = false) => {
	const [isOpen, setIsOpen] = useState(initValue);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	return [isOpen, openModal, closeModal];
};

export { useModal };
