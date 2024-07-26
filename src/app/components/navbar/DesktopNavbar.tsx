import { Box, Link, Flex, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { navItem } from "@/app/components/navbar/nav-items";
import imgSvg from "@/app/assets/worship-church-icon.svg";
import Image from "next/image";

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
        justifyContent={'center'}
        maxW={'500px'}
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
              <Link
                fontWeight={'bold'}
              >
                {item.label}
              </Link>
            </ListItem>
          ))
        }
      </UnorderedList>
      <Box
        borderWidth={'thin'}
        borderColor={'red'}
        flexGrow={1}
        maxW={'500px'}
      >
      </Box>
    </Stack>
  )
}
