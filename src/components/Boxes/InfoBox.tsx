import { Box, Heading, Text } from "@chakra-ui/react"

interface IInfoCard{
    title: string | undefined
    info1: any
    info2: any
}

export const InfoBox = ({ title, info1,info2 }: IInfoCard) => {
    return(
        <Box>
            <Heading as={"h2"} size={'md'} 
            marginBottom={"5%"}>
                {title}
            </Heading>
            <Text fontSize={'xl'}
            marginBottom={"5%"}>
                {info1}
            </Text>
            <Text  fontSize={'xl'}
            marginBottom={"5%"}>
                {info2}
            </Text>
        </Box>
    )
}