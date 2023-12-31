import { Box, Flex,Container } from "@chakra-ui/react"
import FeedPosts from "../components/FeedPost/FeedPosts"
import SuggestedUsers from "../components/SuggestedUsers/SuggestedUsers"

const HomePage = () => {
  return (
    <Container maxw={'container-lg'}>
    <Flex gap={10}>
      <Box flex={2} py={10} >
        <FeedPosts />
      </Box>
      <Box flex={3} mr={20} display={{base:'none',lg:'block'}} maxw={'400px'} >
        <SuggestedUsers />
      </Box>
    </Flex>
    </Container>
  )
}

export default HomePage