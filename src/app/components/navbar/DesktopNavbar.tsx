'use client'

import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Highlight, IconButton, Input, ListItem, Stack, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { navItem } from "@/app/components/navbar/nav-items";
import { IoMenuOutline } from "react-icons/io5";
import imgSvg from "@/app/assets/worship-church-icon.svg";
import Image from "next/image";
import { LinkMotion } from "@/app/components";
import { useRef } from "react";

export const DesktopNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <Stack
      as={'nav'}
      maxW={'1400px'}
      h={'100%'}
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={'white'}
      direction={'row'}
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
          fontWeight={'bold'}
        >
          <Highlight
            query={['Barrio', 'Nuevo']}
            styles={{
              color: 'blue.600',
            }}
          >
            Iglesia Cristiana en Barrio Nuevo
          </Highlight>
        </Text>
      </Flex>
      <UnorderedList
        styleType={'none'}
        display={{ base: 'none', xl: 'flex' }}
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
        <Flex>
          <IconButton
            aria-label="overlay"
            variant={'ghost'}
            icon={<IoMenuOutline size={'24px'} />}
            ref={btnRef}
            onClick={onOpen}
          />
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>Create your account</DrawerHeader>
              <DrawerBody>
                <Input placeholder='Type here...' />
              </DrawerBody>
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Stack>
  )
}
