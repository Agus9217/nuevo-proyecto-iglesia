import {Stack} from "@chakra-ui/react";
import {DesktopNavbar} from "@/app/components/navbar/DesktopNavbar";

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      borderWidth={'thin'}
      borderColor={'red'}
      w={'100%'}
      alignItems={'center'}
      py={2}
    >
      <DesktopNavbar/>
    </Stack>
  )
}