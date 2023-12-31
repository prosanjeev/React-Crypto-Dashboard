import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import PortFolio from "./components/PortFolio"
import PriceSection from "./components/PriceSection"
import Transactions from "./components/Transactions"
import LoansCard from "./components/LoansCard"
import ContactCard from "./components/ContactCard"

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid 
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(2, 1fr)",
      }}
      gap={6}
      >
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
        <PortFolio/>  
        </GridItem>

        <GridItem colSpan={1}>
        <PriceSection/>
        </GridItem>
        <GridItem colSpan={1}>
        <Transactions/>
        </GridItem>
        <GridItem colSpan={1}>
        <LoansCard imgUrl="/dot_bg.svg"/>
        </GridItem>
        <GridItem colSpan={1}>
        <ContactCard imgUrl="/grid_bg.svg"/>
        </GridItem>
      </Grid>
    
    </DashboardLayout>
  )
}

export default Dashboard