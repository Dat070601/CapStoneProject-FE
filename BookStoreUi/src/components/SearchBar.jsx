import { Button, FormControl, HStack, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useState } from 'react'
import { COLOR } from '../constant'
import SearchResultBox from './Search/SearchResultBox'
import SearchResultViewModel from './Search/SearchResultViewModel'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const { input, handleInput, visible } = SearchResultViewModel()
  const navigate = useNavigate()
  const navigateToResultPage = () => {
    navigate(`/search/${input.search}`)
  }

  return (
    <div>
      <HStack>
        <FormControl position={"relative"}>
          <InputGroup>
            <InputLeftAddon children={<AiOutlineSearch />} />
            <Input value={input.search} name={"search"} onChange={handleInput} type={"input"} placeholder={"Search..."} minW="600px" />
          </InputGroup>
          {visible ? <SearchResultBox /> : ""}
        </FormControl>
        <Button onClick={navigateToResultPage} background={COLOR} color={"white"}>Search</Button>
      </HStack>
    </div>
  )
}

export default SearchBar