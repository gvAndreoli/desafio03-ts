import { Button } from "@chakra-ui/react"

interface IBtn{
    msg: string
    event: () => void
}

export const BtnEnviar = ({ msg, event }: IBtn) => {
    return(
        <Button colorScheme="purple" size={'md'} onClick={event}> {msg} </Button>
    );
}