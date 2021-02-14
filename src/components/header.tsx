import { golden } from '@/themes/custom.color';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

export const Header = ({ props }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef<any>();
  const finalRef = useRef<any>();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={5}
      py={5}
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Image
          maxW={['120px', '120px', '130px', '180px']}
          objectFit="contain"
          src="/logo/logo-eub.png"
          alt="Segun Adebayo"
        />
      </Flex>

      <Box alignItems="center" flexGrow={1}>
        <Stack direction="row-reverse" spacing={4}>
          <Button
            display={{
              base: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
            }}
            onClick={onOpen}
            rightIcon={<ChevronDownIcon />}
            colorScheme={golden}
            variant="unstyled"
            color="black"
          >
            About
          </Button>
          <Button
            display={{
              base: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
            }}
            onClick={onOpen}
            rightIcon={<ChevronDownIcon />}
            colorScheme={golden}
            variant="unstyled"
            color="black"
          >
            Contact
          </Button>
          <Button
            display={{
              base: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
            }}
            onClick={onOpen}
            rightIcon={<ChevronDownIcon />}
            colorScheme={golden}
            variant="unstyled"
            color="black"
          >
            Login
          </Button>
          <Button
            display={{
              base: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
            }}
            rightIcon={<ChevronDownIcon />}
            colorScheme={golden}
            color="black"
            variant="unstyled"
          >
            Alumni Community
          </Button>
          <Box>
            <Menu>
              <MenuButton
                display={{
                  base: 'block',
                  sm: 'block',
                  md: 'none',
                  lg: 'none',
                }}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                size="xs"
                variant="outline"
              />
              <MenuList bg="silver">
                <MenuItem onClick={onOpen}>Login</MenuItem>
                <MenuItem onClick={onOpen}>Sign Up</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> Welcome back! Please Login </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Mobile no / Email ID</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter Mobile no / Email ID"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Enter password" type="password" />
                  <Box justifyContent="space-between">
                    <FormLabel mt={2} float="right">
                      Stay Logged in
                    </FormLabel>
                    <FormLabel mt={2}>Forgot password</FormLabel>
                  </Box>
                </FormControl>
              </ModalBody>

              <ModalFooter justifyContent="space-between">
                <Button colorScheme="blue" mr={3}>
                  Login
                </Button>
                <Button onClick={onClose}>Sign up</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Box>
    </Flex>
  );
};
