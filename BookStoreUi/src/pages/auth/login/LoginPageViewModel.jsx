import { useFormik } from 'formik';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { authSelector } from '../../../stores/reducers/AuthReducer';
import { loginAsyncThunk } from '../../../stores/thunks/AuthThunk';

const LoginPageViewModel = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const { set, get } = useLocalStorage();
	const { isSuccess, isActive, message, accessToken, refreshToken } = useSelector(authSelector);
	const savedAccessToken = get({
		key: 'accessToken'
	});
	const [ showPassword, setShowPassword ] = useState(false) 

	const handleShowPassword = () => setShowPassword(!showPassword)

	const loginAsync = ({ email, password }) => {
		dispatch(loginAsyncThunk({
			email,
			password
		}));
		set({
			key: "accessToken",
			value: accessToken
		})
		set({
			key: "refreshToken",
			value: refreshToken
		})
	};

	useEffect(() => {
		if (isSuccess != false) {
			window.location.href = "/home"
		} else {
			navigate("/login")
		}
	}, [isSuccess])

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validate: (values) => {
			let errors = {}
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = "invalid email"
			}
			if (values.password < 8)  {
				errors.password = "invalid password"
			}

			return errors
		},
		onSubmit: (values) => {
			loginAsync({
				email: values.email,
				password: values.password
			})
		}
	})

	useEffect(() => {
		savedAccessToken ? navigate('/') : navigate('/login');
	}, [savedAccessToken]);

	useEffect(() => {
		if (isActive === false)
		{
			navigate(`/verify/${email}`);
		}
	}, [isSuccess, isActive]);

	const saveToken = ({ key, value }) => {
		set({
			key,
			value
		});
	};

	return {
		isActive,
		isSuccess,
		message,
		accessToken,
		refreshToken,
		formik,
		loginAsync,
		saveToken,
		showPassword,
		handleShowPassword
	};
};

export default LoginPageViewModel;