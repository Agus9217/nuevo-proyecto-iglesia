import { Show, Stack } from "@chakra-ui/react";
import { DesktopNavbar } from "@/app/components/navbar/DesktopNavbar";

export const Navbar = () => {
  console.log('Hola')
  return (
    <Stack
      as={'header'}
      position={'fixed'}
      top={0}
      borderWidth={'thin'}
      borderColor={'red'}
      w={'100%'}
      alignItems={'center'}
      py={1}
      zIndex={1000}
    >
      <Show above={'md'}>
        <DesktopNavbar />
      </Show>
    </Stack>
  )
}
