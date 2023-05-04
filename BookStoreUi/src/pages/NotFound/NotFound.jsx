import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
	return (
		<Container display={'flex'} alignItems={'center'} justifyContent={'center'} height={'90vh'}>
		<Box textAlign="center" boxSize={'sm'}>
		  <Image src='https://res.cloudinary.com/duu07kasy/image/upload/v1682648929/5203299_vxoqmy.jpg'></Image>
		  <Text mt="20px" fontSize={'20px'} fontWeight={'medium'} color={'1B2E35'}>Sorry, Page Not Found!</Text>
		</Box>
	  </Container>
	);
};

export default NotFound;