import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelector } from '../../../stores/reducers/AuthReducer';
import { registerAsyncThunk } from '../../../stores/thunks/AuthThunk';

const RegisterViewModel = ({ email }) => {
	const dispatch = useDispatch();
	const { isSuccess, message } = useSelector(authSelector);
  const navigate = useNavigate()

	const registerAsync = ({ username, email, password }) => {
		try {
			dispatch(registerAsyncThunk({
				username,
				email,
				password
			}));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isSuccess == true) {
			setTimeout(() => {
				navigate(`/verify/${email}`)
			}, 1000)
		}
	}, [isSuccess])
	return {
		isSuccess,
		message,
		registerAsync
	};
};

export default RegisterViewModel;