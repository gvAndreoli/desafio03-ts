import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Box } from "@chakra-ui/react"


export const Layout = ({children}: any) => {
    return (
        <>
        <Header />
        <Box minHeight={'100vh'} backgroundColor={'purple.500'} display={'flex'} justifyContent={"center"} alignItems={"center"}>
                <Box width={['90%', '80%', '60%', '50%']}>
                    {children}
                </Box>
        </Box>
        <Footer />
        </>
    )
}