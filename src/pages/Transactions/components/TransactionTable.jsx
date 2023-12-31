import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
import React from "react";

const TransactionTable = () => {
    const tableData = [
        {
            id: "HD82NA2H",
            date: "2022-06-09",
            time: "07:06 PM",
            type : {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "pending"
        },
        {
            id: "HD82NA2H",
            date: "2022-06-09",
            time: "07:06 PM",
            type : {
                name: "INR Withdraw",
                tag: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            status: "Processing"
        },
        {
            id: "HD82NA2H",
            date: "2022-06-09",
            time: "07:06 PM",
            type : {
                name: "Buy",
            },
            amount: "+ ₹81,123.10",
            status: "Cancelled"
        },
        {
            id: "HD82NA2H",
            date: "2022-06-09",
            time: "07:06 PM",
            type : {
                name: "Sell",
            },
            amount: "+ ₹81,123.10",
            status: "Completed"
        },
        {
            id: "HD82NA2H",
            date: "2022-06-09",
            time: "07:06 PM",
            type : {
                name: "BTC Deposit",
            },
            amount: "+ ₹81,123.10",
            status: "Completed"
        },
        {
            id: "HD82NA2H",
            date: "2022-06-09",
            time: "07:06 PM",
            type : {
                name: "BTC Withdraw",
            },
            amount: "+ ₹81,123.10",
            status: "Completed"
        },
    ]

    const statusColor = {
        pending: "#797E82",
        Processing: "#F5A50B",
        Completed: "#059669",
        Cancelled: "#DC2626",
      };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
       
        <Thead color="black">
          <Tr>
            <Th>ID</Th>
            <Th>Data & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th >Status</Th>
          </Tr>
        </Thead>
        <Tbody>

            {tableData.map((data)=>(
                <Tr key={data.id}>
                <Td> {data.id} </Td>
                <Td> <Stack spacing={0}>
                    <Text> {data.date}</Text>
                    <Text fontSize="xs" color="black.60"> {data.time}</Text>
                    </Stack> 
                </Td>
                <Td >
                <Stack spacing={0}>
                    <Text> {data.type.name}</Text>
                    <Text fontSize="xs" color="black.60"> {data.type.tag}</Text>
                </Stack>   </Td>
                <Td >{data.amount}</Td>
                <Td ><Tag bg={statusColor[data.status]} color="white" borderRadius="full">   {data.status}  </Tag></Td>
                
              </Tr>
            ))}




          
         
        </Tbody>
      
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
