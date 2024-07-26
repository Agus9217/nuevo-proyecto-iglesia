'use client'

import {motion} from "framer-motion";
import {Button} from "@chakra-ui/react";

interface Props {
  text: string;
  fontWeight: string
  href: string
}

export const LinkMotion = ({ text, fontWeight, href }: Props) => {

  const LinkByMotion = motion(Button)

  return (
    <LinkByMotion
      as={'a'}
      href={href}
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 0.9 }}
      fontWeight={fontWeight}
      variant={'ghost'}
    >
      {text}
    </LinkByMotion>
  )
}