import { Box, Container, Flex, calc, useDisclosure } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import SideDrawer from "./SideDrawer"

const DashboardLayout = ({title, children}) => {
      const  {isOpen, onClose, onOpen} = useDisclosure()

  return (
    <Flex  > 

        <Box
         display={{
          base: "none",
          lg: "flex",
        }}
        ><SideNav/></Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen}/>
        <Container maxW="70rem" mt="6" overflowX="hidden" overflowY="auto" h= "calc(100vh - 90px)" > {children} </Container>
        </Box>
        
    </Flex>
  )
}

export default DashboardLayout