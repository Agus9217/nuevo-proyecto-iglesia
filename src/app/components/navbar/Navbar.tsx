'use client'

import {Drawer, DrawerContent, DrawerOverlay, Show, Stack, useDisclosure} from "@chakra-ui/react";
import { DesktopNavbar } from "@/app/components/navbar/DesktopNavbar";

export const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Stack
      as={'header'}
      position={'fixed'}
      top={0}
      w={'100%'}
      h={'85px'}
      alignItems={'center'}
      pt={{ base: 0, xl: 3 }}
      zIndex={1000}
    >
      <Show above={'md'}>
        <DesktopNavbar onOpen={onOpen} />
      </Show>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay/>
        <DrawerContent>

        </DrawerContent>
      </Drawer>
    </Stack>
  )
}
