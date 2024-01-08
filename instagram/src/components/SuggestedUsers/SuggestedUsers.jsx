import {Text, Flex, VStack, Box} from '@chakra-ui/react'
import SuggetedHeader from './SuggetedHeader'
import SuggestedUser from './SuggestedUser'
import { Link } from 'react-router-dom'
const SuggestedUsers = () => {
  return (
    <VStack py={4} px={6} gap={4} >
      <SuggetedHeader />
      <Flex  alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Text fontSize={12} fontWeight={'bold'} color={'gray.500'} >Suggested for you</Text>

      <Text fontSize={12} fontWeight={'bold'} color={'gray.400'} >See All</Text>
      

      </Flex>

      <SuggestedUser  name='vineesh' followers={139} avatar='https://bit.ly/dan-abramov' />
      <SuggestedUser />
      <SuggestedUser />
      <Box fontSize={12}
      color={'gray.500'} mt={5} alignItems={'start'}>

      @ 2024 Built By{" "}

      <Link href='https://www.youtube.com/@asaprogrammer' target='_blank' color='blue.500' fontSize={14}>
        As a Programmer
      </Link>

      </Box>
    </VStack>
  )
}

export default SuggestedUsers