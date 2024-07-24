import { Box, Icon, Link, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { navItem } from "@/app/components/navbar/nav-items";

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
      bg={'white'}
      direction={'row'}
    >
      <Box
        borderColor={'red'}
        borderWidth={'thin'}
        flexGrow={1}
      >
      </Box>
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
      >
      </Box>
    </Stack>
  )
}
