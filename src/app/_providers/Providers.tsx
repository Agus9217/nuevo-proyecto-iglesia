'use client'

import {ChakraProvider} from "@chakra-ui/react";
import {ReactNode} from "react";
import { Global, css } from "@emotion/react";

export const Providers = ({children}: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <Global styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
        />
      {children}
    </ChakraProvider>
  )
}