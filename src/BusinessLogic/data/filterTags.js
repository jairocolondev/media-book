const filterTags = (data, tag) => {
	const filtro = data.filter((res) => res.tags.includes(tag));

	return filtro;
};

export { filterTags };
