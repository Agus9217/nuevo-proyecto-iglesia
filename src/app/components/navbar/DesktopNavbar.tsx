import {Link, ListItem, Stack, UnorderedList} from "@chakra-ui/react";
import {navItem} from "@/app/components/navbar/nav-items";

export const DesktopNavbar = () => {
  return (
    <Stack
      as={'nav'}
      w={'50%'}
      borderColor={'blue'}
      borderWidth={'thin'}
      align={'center'}
      py={4}
    >
      <UnorderedList
        styleType={'none'}
        display={'flex'}
        m={0}
        gap={'20px'}
      >
        {
          navItem.map(item => (
            <ListItem key={item.label}>
              <Link>{item.label}</Link>
            </ListItem>
          ))
        }
      </UnorderedList>
    </Stack>
  )
}