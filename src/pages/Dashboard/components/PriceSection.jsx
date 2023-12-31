import {CustomCard} from '../../../Chakra/CustomCard'
import { HStack, Stack, Text, Icon, Button, Image, Tabs, TabList, Tab, TabPanels, TabPanel, Flex } from "@chakra-ui/react"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPlusCircle, FaMinusCircle  } from "react-icons/fa";

const PriceSection = () => {

    const timestamp = ["7:10 PM", "7:20 PM", "7:30 PM", "8:00 PM", "9:30 PM"]

  return (
    <CustomCard>
          <HStack justifyContent="space-between" align="start">
          <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">Wallet Balances</Text>
                </HStack>
                <HStack
                    spacing={8}
                    align={{
                        base: "flex-start",
                        sm: "center",
                    }}
                    flexDir={{
                        base: "column",
                        sm: "row",
                    }}
                >
                    <HStack alignItems="end">
                        <Text textStyle="h2" fontWeight="medium">
                        ₹26,670.25  
                        </Text>
                        <HStack fontWeight="medium" color="green" >
                        <Text fontSize="sm" fontWeight="medium">
                        <Icon as={FaArrowTrendUp  } /> 0.04% 
                        </Text>
                        </HStack>
                        
                    </HStack>
                    
                </HStack>
            </Stack>
            <HStack>
            <Button leftIcon ={<Icon as={FaPlusCircle } />}>Buy</Button>
            <Button leftIcon={<Icon as={FaMinusCircle } />}>Sell</Button>
        </HStack>


          </HStack>

        <Tabs variant='soft-rounded' >
        <Flex justify="end" >
            <TabList bg="black.5" p="3px"  borderRadius={6}>
           { ["1H", "1D", "1W", "1M",].map((e)=>(
                 <Tab _selected={{ bg: "white" }} key={e} fontSize="sm" p="6px" borderRadius={4} >{e}</Tab>
                 
           ))}

            </TabList>
        </Flex>
        <TabPanels>
            <TabPanel>
            <Image width="100%" src='/graph.svg'  mt="48px"/>
         <HStack justifyContent="space-between">
            {
                timestamp.map((timestamp)=>(
                    <Text key={timestamp} fontSize="sm" color="black.80" > {timestamp} </Text>

                    )               
                ) }
         </HStack>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
        </TabPanels>
        </Tabs>

         
    </CustomCard>
    
    
    
    )
}

export default PriceSection