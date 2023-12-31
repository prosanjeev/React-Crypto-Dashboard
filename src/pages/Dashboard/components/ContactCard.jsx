import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"

const ContactCard = ({imgUrl}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor="p.purple">
        <Tag fontSize="sm" bg="white" borderRadius="full">Contact</Tag>
        <Text mt={4} fontSize="18px" color="white " >Learn more about our real estate, mortgage, and  corporate account services</Text>
    </CustomCard>
  )
}

export default ContactCard