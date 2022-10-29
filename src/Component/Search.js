import React from 'react'
import {Flex,Spacer,Input,InputGroup,InputLeftElement, Icon,Avatar} from '@chakra-ui/react'

import {BiSearch} from 'react-icons/bi'
import{IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineMessage} from 'react-icons/ai'
function Search() {
  return (
    <Flex margin={3} minWidth='10' alignItems='center' gap='10'>
        <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<BiSearch color='gray.300' />}
    />
    <Input bg='white' type='search' placeholder='Search here .....' />
  </InputGroup>
  <Spacer />
  <Flex  gap='2' alignItems='center' justifyContent='center'>
    <Icon as={IoIosNotificationsOutline} fontSize='4xl'></Icon>
    <Icon as={AiOutlineMessage} fontSize='4xl'></Icon>
  </Flex>
<Spacer />
<Avatar size='lg' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
</Flex>
  )
}

export default Search