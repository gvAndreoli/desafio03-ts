import { Box } from "@chakra-ui/react"

export const InfoCard = ({children}: any) => {
  

  return (
    <Box
      background={'white'}
      borderRadius={'25px'}
      padding={"20px"}
      boxShadow={'lg'}
      marginBottom={"50vh"}
    >
      {children}
    </Box>
  )   
}