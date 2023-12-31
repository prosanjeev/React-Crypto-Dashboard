import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { CiSearch } from "react-icons/ci";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Deposit",
      count: "214",
    },
    {
      name: "Withdraw",
      count: "219",
    },
    {
      name: "Trade",
      count: "49",
    },
  ];

  return (
    <DashboardLayout title="Transaction">
      <Flex mb="3" justify="end">
        <Button>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList py="3" justifyContent="space-between">
            <HStack>
            {tabs.map((tab) => (
              <Tab gap={3} key={tab.name}>
                {" "}
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {" "}
                  {tab.count}{" "}
                </Tag>{" "}
              </Tab>
            ))}
            </HStack>
            <InputGroup maxW="260px" pr={6} borderColor="white">
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
