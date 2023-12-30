import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack maxW="70rem" mx="auto"  h="16" justifyContent="space-between" >
        <Icon as={FaBars} onClick={onOpen} display={{
          base: "block",
          lg: "none",
        }} />
        <Heading fontSize="28px" fontWeight="medium"> {title} </Heading>
        <Menu>
    <MenuButton  >
      <Icon as={FaUserCircle} fontSize="24px"/>
    </MenuButton>
    <MenuList>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Support</MenuItem>
    </MenuList>
    </Menu>


</HStack>
    </Box>
  )
}

export default TopNav