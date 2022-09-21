import '../../assets/styles/select-tag.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAPI, getAPI_KEY } from '../../../BusinessLogic/data/api';

const SelectTags = ({ tag, setTag }) => {
	const API_URl = getAPI();
	const API_KEY = getAPI_KEY();
	const [tags, setTags] = useState('');

	const getTags = async () => {
		await axios
			.get(`${API_URl}/tag`, {
				headers: { 'app-id': API_KEY },
			})
			.then((response) => {
				let filter = filterTags(response.data.data);
				setTags(filter);
			});
	};

	const filterTags = (array) => {
		let tagsFilter = array.filter(
			(el) => typeof el === 'string' && el.length <= 6 && el.length > 1
		);
		return tagsFilter;
	};

	useEffect(() => {
		const get = async () => {
			await getTags();
		};
		get();
	}, []);

	return (
		<div className="select-tag">
			{tags.length > 0 && (
				<div className="select-tag-box">
					<label for="select" className="description-bold">
						Seleccione tag a filtrar:
					</label>
					<select name="select" value={tag}>
						<option value="" disabled>
							Seleccionar tag
						</option>
						{tags.map((el, index) => (
							<option value={el} key={index} onClick={() => setTag(el)}>
								{el}
							</option>
						))}
					</select>
					{tag.length > 0 && (
						<button
							type="button"
							className="button button-bg-none"
							onClick={() => setTag('')}
						>
							<i className="icon-cancel"></i>
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export {SelectTags};
