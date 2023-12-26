import { Box, VStack,Image, Input,Button, Flex,Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
 
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    const [inputs, setInputs ] = useState({
      email:'',
      password:'',
      confirmPassword:''
    })

    const handleAuth =()=>{
      if(!inputs.email || !inputs.password ){
        alert('Please fill all the fields') 
        return
      }

      navigate('/')
      
    }
  return (
    <Box border='1px solid gray' borderRadius={4} padding='5'>
    <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor='pointer' alt="Instagram" />
        <Input placeholder="Email" fontSize={14} type="email" value={inputs.e} onChange={(e) => setInputs({...inputs, email:e.target.value})}></Input>
        <Input placeholder="Password" type="password" fontSize={14} value={inputs.password} onChange={(e)=> setInputs({...inputs, password:e.target.value})}></Input>

        {!isLogin ? <Input placeholder="Confirm password" fontSize={14} type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})} /> : null  }

       <Button w={'full'} colorSchema='blue' size='sm' fontSize={14} onClick={handleAuth}>
        {isLogin ? "Login" : "Sign Up"}
       </Button>

{/* ---------or------------ */}
       <Flex alignItems='center' justifyContent='center' my={4} gap={4} w='full'>
        <Box flex={2} h='1px' bg='gray.400' />
        <Text mx={1} color='white'> OR</Text>
        <Box flex={2} h='1px' bg='gray.400' />
       </Flex>

       <Flex alignItems='center' justifyContent='center' cursor={"pointer"}>
        <Image src="/google.png" w={5} alt="google logo" />
        <Text mx={2} color='blue.500' p={2}>
         Login with Google
        </Text>
       </Flex>

    </VStack>
   <Box border='1px solid gray' borderRadius={4} padding={5}>
  <Flex alignItems='center' justifyContent='center'>
   <Box mx={1} fontSize={14}>
    {isLogin ? "Don't have an account? " : "Already have an account? "}
   </Box>
   <Box onClick={() => setIsLogin(!isLogin)} color='blue.500' cursor='pointer'>
    {isLogin ? "SignUp" : "Login"}
   </Box>
  </Flex>
   </Box>
    </Box>
  )
}

export default AuthForm