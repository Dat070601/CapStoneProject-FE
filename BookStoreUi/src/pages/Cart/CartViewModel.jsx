import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { cartSelector, decreaseProductQuantityInCart, fetchQuantityOfProduct, increaseProductQuantityInCart } from '../../stores/reducers/CartReducer';
import { orderSelector } from '../../stores/reducers/OrderReducer';
import { deleteProductInCartAsyncThunk, fetchCartAsyncThunk } from '../../stores/thunks/CartThunk';
import { addOrderAsyncThunk, getOrderAsyncThunk, getOrderByCustomerIdAsyncThunk } from '../../stores/thunks/OrderThunk';
import { createPaymentAsyncThunk } from '../../stores/thunks/PaymentThunk';
import { paymentSelector } from '../../stores/reducers/PaymentReducer';
import { Toast, useDisclosure, useToast } from '@chakra-ui/react';

const CartViewModel = () => {
	const [ quantity, setQuantity ] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const toast = useToast();
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { get } = useLocalStorage();
	const [ prepareOrderProduct, setPrepareOrderProduct ] = useState([])
	const [ prepareToAddOrderProducts, setPrepareToAddOrderProduct ] = useState([])
	const [ prepareToDeleteProducts, setPrepareToDeleteProducts ] = useState([])
	const { redirectUrl, isSuccess, orderId }  = useSelector(orderSelector)
	const params = useParams();
	const { carts, cartQuantity, isSuccessInCart  } = useSelector(cartSelector);
	const [ message, setMessage ] = useState("")
	const [ quantityOfProducts, setQuantitiesOfProduct ] = useState([])
	const [ toggleDeleteButton, setToggleDeleteButton ] = useState(false)
	const [ isLoadingDelete, setIsLoadingDelete ] = useState(false)
	const accessTokenSaved = get({
		key: 'accessToken'
	});

	const inputHandle = (event) => {
		setMessage(event.target.value)
	}

	useEffect(() => {
		dispatch(fetchCartAsyncThunk({
			token: accessTokenSaved,
			userId: params.userId
		}));
	}, [accessTokenSaved, dispatch]);

	const selectProductAddToOrder = ({ id, title, variant, quantity, total }, event) => {
		if (event.target.checked === true)
		{
			setPrepareOrderProduct([...prepareOrderProduct, { id, title, variant, quantity, total }])
			setPrepareToAddOrderProduct([...prepareToAddOrderProducts, { productVariantId: id, quantity }])
		} 
		else
		{
			setPrepareOrderProduct(prepareOrderProduct.filter(product => product.id !== id))
			setPrepareToAddOrderProduct(prepareToAddOrderProducts.filter(product => product.productVariantId !== id))
		}
	};

	const selectProductToDelete = ({ productVariantId }, event) => {
		if (event.target.checked === true) {
			setPrepareToDeleteProducts([...prepareToDeleteProducts, { productVariantId }])
		} else {
			setPrepareToDeleteProducts(prepareToDeleteProducts.filter(product => product.productVariantId !== productVariantId))
		}
	}

	const handleToggleDeleteButton = () => {
		setToggleDeleteButton(!toggleDeleteButton)
	}
	
	const increase = (quantity) => {
		dispatch(fetchQuantityOfProduct({
			quantity
		}))
		dispatch(increaseProductQuantityInCart({
			quantity
		}))
	};

	const decrease = (quantity) => {
		dispatch(fetchQuantityOfProduct({
			quantity
		}))
		dispatch(decreaseProductQuantityInCart({
			quantity
		}))
	};

	const getTotalInCart = (cart) => {
		const initialValue = 0
		const totalPrice = cart.reduce((first, current) => first + current.total, initialValue)
		return totalPrice
	}

	const deleteProductInCart = ({ data }) => {
		setIsLoadingDelete(true)
		dispatch(deleteProductInCartAsyncThunk({
			token: accessTokenSaved,
			data
		}))
		if (isSuccessInCart === true) {
			console.log(isSuccessInCart)
			setTimeout(() => {
				toast({
					position: "bottom-right",
					title: "Delete toast",
					description: "Delete product success",
					status: 'success',
					duration: 3000,
					isClosable: true
				})
				setIsLoadingDelete(false)
				dispatch(fetchCartAsyncThunk({
					token: accessTokenSaved,
					userId: params.userId
				}))
			}, 3000)
		}
	}

	useEffect(() => {
		if (quantity < 1)
		{
			setQuantity(0);
		}
	}, [quantity]);

	const createOrderAsync = ({
		details,
	}) => {
		dispatch(addOrderAsyncThunk({
			token: accessTokenSaved,
			data: {
				transferAddress: "Base on paypal",
				paymentMethodId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				message,
				details
			}
		}))
		setTimeout(() => {
			navigate("/order")
		}, 2000)
	}

	return {
		message,
		quantity,
		increase,
		decrease,
		carts,
		selectProductAddToOrder,
		getTotalInCart,
		prepareOrderProduct,
		createOrderAsync,
		prepareToAddOrderProducts,
		inputHandle,
		quantity,
		setQuantity,
		cartQuantity,
		quantityOfProducts,
		deleteProductInCart,
		toggleDeleteButton,
		handleToggleDeleteButton,
		selectProductToDelete,
		prepareToDeleteProducts,
		isLoadingDelete
	};
};

export default CartViewModel;