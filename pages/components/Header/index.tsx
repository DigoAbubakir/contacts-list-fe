import { Heading, Flex, Input, InputGroup, InputRightAddon, HStack, Button } from '@chakra-ui/react'
import { MoonIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function Header() {
    return (
        <>
        <Flex bg="gray.500" w="100%" h="50px" justifyContent="space-between" align="center">
          <Flex>
            <HStack spacing="33px" >
              <MoonIcon ml="33px" boxSize={6} />
              <Heading fontSize="20px" color="white">Seguindo</Heading>
              <Heading fontSize="20px" color="white">Procurar</Heading>
            </HStack>
          </Flex>
  
          <Flex>
            <InputGroup>
              <Input bg="gray.600" type='tel' placeholder='phone number' />
              <InputRightAddon ml="4px" bg="gray.800" children={<SearchIcon color='gray.300' />} />
            </InputGroup>
          </Flex>
  
          <Flex>
            <HStack spacing="33px" mr="33px">
              <MoonIcon boxSize={6} />
              <Button size="sm" leftIcon={<StarIcon />} colorScheme='whiteAlpha' variant='solid'>
                Comprar Bits
              </Button>
              <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </HStack>
          </Flex>
        </Flex>
      </>
    )
}