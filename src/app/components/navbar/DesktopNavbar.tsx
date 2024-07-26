import { Box, Flex, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { navItem } from "@/app/components/navbar/nav-items";
import imgSvg from "@/app/assets/worship-church-icon.svg";
import Image from "next/image";
import {LinkMotion} from "@/app/components";
import { IoLogInOutline } from "react-icons/io5";

export const DesktopNavbar = () => {

  return (
    <Stack
      as={'nav'}
      maxW={'1300px'}
      h={'94px'}
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      borderColor={'blue'}
      borderWidth={'thin'}
      bg={'whiteAlpha.900'}
      direction={'row'}
      rounded={'lg'}
    >
      <Flex
        borderColor={'red'}
        borderWidth={'thin'}
        flexGrow={1}
        alignItems={'center'}
        maxW={'500px'}
        w={'100%'}
        px={2}
      >
        <Image
          src={imgSvg}
          alt={'My icon'}
          width={50}
          height={50}
        />
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
        borderWidth={'thin'}
        borderColor={'red'}
        flexGrow={1}
        maxW={'500px'}
        w={'100%'}
        justifyContent={'end'}
        alignItems={'center'}
        px={2}
      >
        <IoLogInOutline
          size={30}
        />
      </Flex>
    </Stack>
  )
}
