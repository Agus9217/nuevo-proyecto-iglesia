'use client'

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Highlight,
  IconButton,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure
} from "@chakra-ui/react";
import {navItem} from "@/app/components/navbar/nav-items";
import {IoMenuOutline} from "react-icons/io5";
import imgSvg from "@/app/assets/worship-church-icon.svg";
import Image from "next/image";
import {LinkMotion} from "@/app/components";
import {useRef} from "react";

interface Prop {
  onOpen: () => void
}

export const DesktopNavbar = ({ onOpen }: Prop) => {
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Box
        as={'nav'}
        display={'flex'}
        maxW={'1400px'}
        h={'100%'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'white'}
        flexDirection={'row'}
        px={8}
      >
        <Flex
          flexGrow={1}
          alignItems={'center'}
          maxW={'500px'}
          w={'100%'}
        >
          <Image
            src={imgSvg}
            alt={'My icon'}
            width={50}
            height={50}
          />
          <Text
            pl={2}
            fontWeight={'bold'}
          >
            <Highlight
              query={['Barrio', 'Nuevo']}
              styles={{
                color: 'blue.500',
              }}
            >
              Iglesia Cristiana en Barrio Nuevo
            </Highlight>
          </Text>
        </Flex>
        <UnorderedList
          styleType={'none'}
          display={'flex'}
          m={0}
          gap={'20px'}
          flexGrow={2}
          justifyContent={'center'}
        >
          {
            navItem.map(item => (
              <ListItem key={item.label}>
                <LinkMotion
                  href={'/'}
                  text={item.label}
                  fontWeight={'bold'}
                />
              </ListItem>
            ))
          }
        </UnorderedList>
        <Flex
          flexGrow={1}
          maxW={'500px'}
          w={'100%'}
          justifyContent={'end'}
          alignItems={'center'}
        >
          <Button
            colorScheme='teal'
            onClick={onOpen}>
            Open
          </Button>
        </Flex>
      </Box>

    </>
  )
}
