import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Box, Heading, Text } from '@chakra-ui/layout'
import { Button, Container, Input } from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import CreateProfileViewModel from './CreateProfileViewModel'

const CreateProfile = () => {

  const { handleCreateProfile, handleInput, message } = CreateProfileViewModel()

  return (
    <Box display={"flex"} justifyContent="center" alignItems={"center"} minHeight="50vh">
      <Container maxW={"container.md"} rounded="20px">
        <Box bg="gray.100" padding={"10px 20px 30px 20px"}>
          <Heading rounded={"20px"} color={COLOR}>Create profile</Heading>
          <Box mt="10px">
            <form>
              <Box display={"flex"} gap="20px">
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input name="firstName" bg="white" placeholder='first name...' onChange={handleInput}/>
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastName" bg="white" placeholder='last name...' onChange={handleInput}/>
                </FormControl>
              </Box>
              <Box mt="30px">
                <FormControl>
                  <Input name="phoneNumber" bg="white" placeholder='phone number' onChange={handleInput}/>
                </FormControl>
              </Box>
              <Button onClick={handleCreateProfile} mt="20px" w={"100%"} bg={COLOR} color="white">Create profile</Button>
            </form>
          </Box>
          <Text mt="20px">{message}</Text>
        </Box>
      </Container>
    </Box>
  )
}

export default CreateProfile