import { Show, Stack } from "@chakra-ui/react";
import { DesktopNavbar } from "@/app/components/navbar/DesktopNavbar";

export const Navbar = () => {

  return (
    <Stack
      as={'header'}
      position={'fixed'}
      top={0}
      borderWidth={'thin'}
      borderColor={'red'}
      w={'100%'}
      h={'85px'}
      alignItems={'center'}
      py={{base: 0, xl: 3}}
      zIndex={1000}
    >
      <Show above={'md'}>
        <DesktopNavbar />
      </Show>
    </Stack>
  )
}
