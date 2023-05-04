import React from 'react';
import style from './VerifyAccount.module.css';
import VerifyAccountViewModel from './VerifyAccountViewModel';

const VerifyAccount = () => {

	const { isSuccess, message } = VerifyAccountViewModel();

	return (
		<div className={style.container}>
			<div className={style.message}>
				<h1>Verify your email address</h1>
				<p>A verification email has been sent to <strong>your email</strong>.</p>
				<p>Please check your email and follow the instructions to complete the verification process.</p>
				<p>If you have not received the email within a few minutes, please check your spam folder.</p>
			</div>
		</div>
	);
};

export default VerifyAccount;