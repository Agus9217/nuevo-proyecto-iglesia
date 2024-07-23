import {Flex, Heading, Stack} from "@chakra-ui/react"

export const Ministerios = () => {

  let a: number[] = [];

  for (let i = 0; i < 8; i++) {
    a.push(i)
  }

  return (
    <Stack
      borderWidth={'thin'}
      borderColor={'aqua'}
      alignItems={'center'}
      justifyContent={'center'}
      direction={'row'}
      flexWrap={'wrap'}
      spacing={20}
      py={8}
    >
      {
        a.map(item => (
          <Flex
            key={item}
            borderWidth={'thin'}
            borderColor={'red'}
            w={'400px'}
            h={'400px'}
            rounded={'100%'}
          >
            ministerio, {item + 1}
          </Flex>
        ))
      }
    </Stack>
  )
}

