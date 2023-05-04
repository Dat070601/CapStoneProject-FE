import React from 'react'
import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import Logo from '../Logo'
import { MdCheckCircle } from 'react-icons/md'

const Footer = () => {
  return (
    <Box display={'flex'} height={"300px"} gap={'30px'}>
	    <Box padding={'30px'}>
            <Logo fontSize={60}/>
        </Box>
        <Box padding={'20px'}>
            <Text fontWeight={'medium'} fontSize={'25px'} mt={'5px'}>Service</Text>
            <List spacing={3} mt={'5px'}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500'/>
                    Super fast delivery
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500'/>
                    Auto Refund
                </ListItem>
                
            </List>
        </Box>
	</Box>
  )
}

export default Footer