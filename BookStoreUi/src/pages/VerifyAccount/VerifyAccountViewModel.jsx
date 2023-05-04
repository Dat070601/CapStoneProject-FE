import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { authSelector } from '../../stores/reducers/AuthReducer';
import { sendVerificationMailAsyncThunk } from '../../stores/thunks/AuthThunk';

const VerifyAccountViewModel = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const { isSuccess, message } = useSelector(authSelector);

	const verifyMailAsync = ({ email }) => {
		dispatch(sendVerificationMailAsyncThunk({
			email
		}));
	};

	useEffect(() => {
		verifyMailAsync({
			email: params.email
		});
	}, [params.email]);

	return {
		isSuccess,
		message,
	};
};

export default VerifyAccountViewModel;