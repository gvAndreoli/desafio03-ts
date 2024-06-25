import { Box } from "@chakra-ui/react"


export const LoginCard = ({children}:any) => {

  return (
    <Box
      background={'white'}
      borderRadius={'25px'}
      padding={"20px"}
      boxShadow={'lg'}
    >
      {children}
    </Box>
  )
}