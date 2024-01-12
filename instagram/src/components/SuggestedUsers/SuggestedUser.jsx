import { Avatar, Box, Flex, VStack, Button } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({ followers, name, avater }) => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avater} name={name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontSize={12} fontWeight={'bold'} >
            {name}
          </Box>
          <Box fontSize={11} color={'gray.500'}  >
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button fontSize={13} bg={'transparaent'} p={0} h={'max-content'} color={'blue.400'} cursor={'pointer'}
        _hover={{ color: 'white' }} 
        onClick={() => setIsFollowed(!isFollowed)}
        >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  )
}

export default SuggestedUser