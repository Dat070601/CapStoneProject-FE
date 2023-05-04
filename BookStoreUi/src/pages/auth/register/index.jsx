import React, { useRef } from 'react';
import RegisterViewModel from './RegisterViewModel';
import style from './Register.module.css';
import { Heading } from '@chakra-ui/react';
import { COLOR } from '../../../constant';
import { useState } from 'react';

const RegisterPage = () => {
	const [ input, setInput ] = useState({
		username: "",
		email: "",
		password: ""
	})

	const { isSuccess, message, registerAsync } = RegisterViewModel({
		email: input.email
	});

	const handleInputChange = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmitRegisterForm = (event) => {
		event.preventDefault();
		registerAsync({
			username: input.username,
			email: input.email, 
			password: input.password
		});
	};

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmitRegisterForm}>
				<Heading mb = "20px" color={COLOR}>
            Register
				</Heading>
				<input type="text" placeholder="Username" name="username" onChange={handleInputChange} required />
				<input type="email" placeholder="Email" name="email" onChange={handleInputChange} required />
				<input type="password" placeholder="********" name="password" onChange={handleInputChange} required />
				<p>{message}</p>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterPage;