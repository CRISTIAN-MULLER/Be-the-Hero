import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';

import api from '../../services/api';

export default function NewIcident() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	const navigate = useNavigate();
	const ongId = localStorage.getItem('ongId');
	async function handleNewIncident(e) {
		e.preventDefault();

		const data = {
			title,
			description,
			value
		};
		try {
			await api.post('incidents', data, {
				headers: {
					Authorization: ongId
				}
			});

			navigate('/profile');
		} catch (err) {
			alert('Erro ao cadastrar caso, tente novamente.');
		}
	}

	return (
		<div className='new-incident-container'>
			<div className='content'>
				<section>
					<img src={logoImg} alt='Be The Hero' />
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar o Herói da sua ONG
					</p>

					<Link className='back-link' to='/profile'>
						<FiArrowLeft size={16} color='#E02041' />
						Voltar Para Home
					</Link>
				</section>
				<form onSubmit={handleNewIncident}>
					<input
						placeholder='Título do Caso'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						placeholder='Descrição do caso'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<input
						placeholder='Valor em reais'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>

					<button className='button' type='submit'>
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
