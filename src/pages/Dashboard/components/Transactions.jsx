import { Button, Divider, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
import { Fragment } from "react";

const Transactions = () => {
    const transactions = [
        {
            icon: AiFillDollarCircle ,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            icon: SiBitcoinsv ,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            icon: AiFillDollarCircle,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        }
    ]

  return (
    <CustomCard h="full">
        <Text mb={6} fontSize="sm">Transactions</Text>
          
        <Stack gap="4">
        {transactions.map((transaction, i) => (
         <Fragment key={i}>
            {i != 0 && <Divider /> }
             <HStack  justifyContent="space-between" >
          <HStack gap={4}>
            <Grid placeItems="center" bg="black.10" boxSize={10} borderRadius="full">
            {transaction.icon && <Icon as={transaction.icon} />}
            </Grid>
           <Stack spacing={0} >
           <Text fontSize="16px" fontWeight="medium">{transaction.text}</Text>
            <Text fontSize="16px" color="black.40"> {transaction.timestamp} </Text>
           </Stack>
          </HStack>
          <Text> {transaction.amount} </Text>
          </HStack>
         </Fragment>
       
        ))}
      </Stack>
          <Button width="100%" mt="6" bg="black.20" colorScheme="gray">View All</Button>
        
    </CustomCard>
  )
}

export default Transactions