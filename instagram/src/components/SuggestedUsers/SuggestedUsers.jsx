import {Text, Flex, VStack} from '@chakra-ui/react'
import SuggetedHeader from './SuggetedHeader'
const SuggestedUsers = () => {
  return (
    <VStack py={4} px={6} gap={4} >
      <SuggetedHeader />
      <Flex  alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Text fontSize={12} fontWeight={'bold'} color={'gray.500'} >Suggested for you</Text>

      <Text fontSize={12} fontWeight={'bold'} color={'gray.400'} >See All</Text>
      

      </Flex>
    </VStack>
  )
}

export default SuggestedUsers