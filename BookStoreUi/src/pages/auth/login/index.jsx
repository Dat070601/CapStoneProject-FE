import { Box, Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { COLOR } from '../../../constant';
import LoginPageViewModel from './LoginPageViewModel';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const LoginPage = () => {
	const { isSuccess, accessToken, formik, saveToken, message, handleShowPassword, showPassword } = LoginPageViewModel();

	useEffect(() => {
		saveToken({
			key: 'accessToken',
			value: accessToken
		});
	}, [accessToken]);

	return (
		<Container maxW={'container.sm'}>
			<Box bg = "gray.200" padding={[10, 10]} rounded="10px">
				<Heading color={COLOR}>Login</Heading>
				<Box mt={'20px'}> 
					<form onSubmit={formik.handleSubmit}>
						<Box display={'flex'} flexDirection="column" gap={'5px'}>
							<FormControl isInvalid={formik.errors.email ? true : false}>
								<FormLabel color={COLOR}>Email</FormLabel>
								<Input 
									type={'text'} 
									value={formik.values.email} 
									onChange={formik.handleChange}
									onBlur={formik.handleBlur} 
									name="email" 
									placeholder='email...' 
									bg="white"/>
								<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
							</FormControl>
							<FormControl isInvalid={formik.errors.password ? true : false}>
								<FormLabel color={COLOR}>Password</FormLabel>
								<InputGroup>
									<Input 
										type={showPassword ? 'text' : 'password'} 
										value={formik.values.password} 
										onChange={formik.handleChange} 
										onBlur={formik.handleBlur} 
										name="password" 
										placeholder='password...' 
										bg="white"/>
									<InputRightElement>
										<IconButton size={"xs"} as={showPassword ? BsEyeFill : BsEyeSlashFill } onClick={handleShowPassword}/>
									</InputRightElement>	
								</InputGroup>
								<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
							</FormControl>
							<Box>
								<Button 
									type='submit' 
									colorScheme={'blue'} 
									w={'100%'} 
									isLoading={false}>Login
								</Button>
							</Box>
						</Box>
					</form>
					<Text mt="10px" color="red">{message}</Text>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginPage;