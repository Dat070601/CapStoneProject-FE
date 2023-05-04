import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerSelector } from '../../../stores/reducers/CustomerReducer';

const CustomerProfileViewModel = () => {
	const dispatch = useDispatch();
	const { isSuccess, message,  } = useSelector(customerSelector);
	return {

	};
};

export default CustomerProfileViewModel;