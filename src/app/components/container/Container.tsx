import {ReactNode} from "react";
import {Container} from "@chakra-ui/react";

interface Props {
  width?: string | number,
  children: ReactNode
}

export const ContainerPage = ({children, width}: Props) => {
  return (
    <Container
      maxW={width}
    >
      {children}
    </Container>
  )
}