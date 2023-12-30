import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
      const navLinks =[
        {
          icon: RxDashboard,
          text: "Dashboard",
          link: "/",
        },
        {
          icon: TbArrowsDoubleNeSw,
          text: "Transaction",
          link: "/transaction",
        },
      ]


  return (
    <Stack justifyContent="space-between"  bg="white"
    boxShadow={{
      base: "none",
      lg: "lg",
    }} 
    w={{
      base: "full",
      lg: "16rem",
    }} h="100vh"    > 

        <Box>
        <Heading textAlign="center" fontSize="20px" as="h1"  mt="54px">@RXEXCHANGE</Heading>
       <Box mt="6" mx="3"> {navLinks.map((nav) => (
          <HStack key={nav.text}  py="3" px="4" borderRadius="10px"
          _hover={{
            bg: "#f3f3f7", 
            color:"#171717"
          }}
          color="#797e82"
          >
          <Icon as={nav.icon}/>
          <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
          </HStack>
          ))}
          </Box>
        </Box>


          <Box mt="6" mx="3" mb="6">
          <HStack  py="3" px="4" borderRadius="10px"
          _hover={{
            bg: "#f3f3f7", 
            color:"#171717"
          }}
          color="#797e82"
          >
          <Icon as={BiSupport}/>
          <Text fontSize="14px" fontWeight="medium" >Support</Text>
          </HStack>
          </Box>
    </Stack>
  )
}

export default SideNav