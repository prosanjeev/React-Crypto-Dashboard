import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"


const LoansCard = ({imgUrl}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
        <Tag fontSize="sm" bg="p.purple" color="white" borderRadius="full">Loans</Tag>
        <Text mt={4} fontSize="18px"  >Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>
    </CustomCard>
  )
}

export default LoansCard