import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
	const [id, setId] = useState('');
	const navigate = useNavigate();

	async function handlelogin(e) {
		e.preventDefault();

		try {
			const response = await api.post('sessions', { id });

			localStorage.setItem('ongId', id);
			localStorage.setItem('ongName', response.data.name);

			navigate('/profile');
		} catch (error) {
			alert('Falha ao Logar');
		}
	}

	return (
		<div className='Logon-container'>
			<section className='form'>
				<img src={logoImg} alt='Be The Hero' />

				<form onSubmit={handlelogin}>
					<h1>Faça logon</h1>

					<input
						placeholder='Sua ID'
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
					<button className='button' type='submit'>
						Entrar
					</button>

					<Link className='back-link' to='/register'>
						<FiLogIn size={16} color='#E02041' />
						Não tenho Cadastro
					</Link>
				</form>
			</section>

			<img src={herosImg} alt='Heroes' />
		</div>
	);
}
