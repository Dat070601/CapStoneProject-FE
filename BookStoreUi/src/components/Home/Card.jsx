import { Box, Image, Text, Tooltip} from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ imageUrl, productName, productPrice, productId, sold, quantities}) => {

    const navigate = useNavigate()

    return (
        <Tooltip 
            label={<div>
                <p>Tên: {productName}</p>
                <p>Giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(productPrice)} </p>
                <p>Số lượng: {quantities} sản phẩm</p>
                <p>Đã bán: {sold} sản phẩm</p>
            </div>} 
            placement='right' hasArrow>
            <Box onClick={() => {
                navigate(`/product/${productId}`)
            }} _hover={{
            boxShadow: `0px 20px 30px gray`,
            transition: "0.2s",
            bg : "gray.100",
            border: "1px solid gray"
            }} width={'210px'} height={'320px'} bg={'white'} boxShadow={"xl"}>
                <Box width='200px' display={'flex'} justifyContent={'center'} mt={"5px"}>
                    <Image src={imageUrl} height='215px' width='185px' />
                </Box>
                <Box marginLeft={'5px'}>
                    <Text ml="5px" mt="5px" color={"black"} fontWeight='semibold' as='h4' lineHeight='tight'noOfLines={1} _hover={{
                        color : "tomato"
                    }}>
                        <Link to={`/product/${productId}`} >{productName}</Link>
                    </Text>
                    <Box ml="5px" mt="20px" mb="10px" display={'flex'} gap={'20px'} marginTop={'1px'}>
                        <Text mt= "13px"fontWeight={"medium"} color={"tomato"} fontSize='20px'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(productPrice)} </Text>
                        <Box>
                            <Text fontWeight={"light"} fontSize='13px'>Đã bán: {Intl.NumberFormat('de-DE').format(sold)}</Text>
                            <Text fontWeight={"light"} fontSize={'13px'}>Số lượng: {Intl.NumberFormat('de-DE').format(quantities)}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tooltip>
    )
}

export default Card
