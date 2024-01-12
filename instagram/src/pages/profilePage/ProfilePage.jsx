import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/Profile/ProfileHeader"
import ProfilePosts from "../../components/Profile/ProfilePosts"
import ProfileTabs from "../../components/Profile/ProfileTabs"

const ProfilePage = () => {
    return (
        <Container maxW={'container.lg'}>
            <Flex
                py={10}
                px={4}
                pl={{ base: 4, md: 10 }}
                w={'full'}
                mx={'auto'}
                flexDirection={'column'}
            >
                <ProfileHeader />
            </Flex>
            <Flex px={{base:2, sm:4}}
            maxW={'full'}
            borderTop={'1px solid'}
            borderColor={'whiteAlpha.300'}
            direction={'column'}>
                <ProfileTabs />
                <ProfilePosts />

            </Flex>
        </Container>
    )
}

export default ProfilePage