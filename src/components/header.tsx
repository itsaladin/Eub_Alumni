import { golden } from '@/themes/custom.color';
import { sanitizePhone } from '@/utils/sanitizers';
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Link,
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
  useToast,
} from '@chakra-ui/react';
import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  MouseEvent,
} from 'react';

export const Header = ({ props }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef<any>();
  const finalRef = useRef<any>();

  const toast = useToast();

  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [resetPhoneNo, setResetPhoneNo] = useState('');
  const [updateOTP, setUpdateOTP] = useState('');
  const [updatePass, setUpdatePass] = useState('');
  const [updateConfPass, setUpdateConfPass] = useState('');

  const [isSignIn, setSignIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);

  const onChangeIdentity = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIdentity(event.target.value);
    },
    [],
  );

  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const loginHandler = useCallback(
    async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      if (!identity || !password) {
        return toast({
          title: 'Warning',
          description: 'Identy / Password filed not be empyt !!!!',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      const res = await signIn(sanitizePhone(identity), password);
      if (res?.status === 200) {
        toast({
          title: 'Sign In Successful',
          description: res.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        setIdentity('');
        setPassword('');
        return router.push('/main');
      }
      if (res?.status === 404) {
        return toast({
          title: 'Sign In faild',
          description: res?.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      return console.log(res.message);
    },
    [identity, password, toast],
  );

  const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const onChangePhone = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }, []);

  const signUpHandler = useCallback(
    async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      if (!name || !email || !phone || !password) {
        return toast({
          title: 'Warning',
          description: 'All filed are required !!!!',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      if (email !== 'undefined') {
        if (!pattern.test(email)) {
          return toast({
            title: 'Registration faild',
            description: 'Email id invalid',
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        }
      }

      const res = await signUp(name, email, sanitizePhone(phone), password);
      console.log(res);

      if (res?.code === 201) {
        toast({
          title: 'Sign Up Successful',
          description: res.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });

        setSignUp(false);
        setSignIn(false);

        setName('');
        setEmail('');
        setPassword('');
      }

      if (res?.status === 422) {
        return toast({
          title: 'Registration faild',
          description: 'Email or Phone no already registered',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      if (res?.status === 400) {
        return toast({
          title: 'Registration faild',
          description: res.message,
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      return console.log(res);
    },
    [name, email, password, phone, toast],
  );

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
        <Stack direction="row-reverse">
          <NextLink passHref href="/#">
            <Link>
              <Box
                variant="link"
                justifySelf="center"
                alignSelf="center"
                alignItems="center"
                alignContent="center"
              >
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color={golden}
                  colorScheme={golden}
                  display={{
                    base: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                  }}
                  onClick={() => {
                    setSignUp(true);
                    setSignIn(false);
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Link>
          </NextLink>

          <NextLink passHref href="/#">
            <Link>
              <Box variant="link">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color={golden}
                  colorScheme={golden}
                  display={{
                    base: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                  }}
                  onClick={() => {
                    setSignUp(false);
                    setSignIn(true);
                  }}
                >
                  Login
                </Button>
              </Box>
            </Link>
          </NextLink>

          <NextLink passHref href="/story">
            <Link>
              <Box variant="link">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color={golden}
                  colorScheme={golden}
                  display={{
                    base: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                  }}
                >
                  Contact
                </Button>
              </Box>
            </Link>
          </NextLink>

          <NextLink passHref href="/story">
            <Link>
              <Box variant="link">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color={golden}
                  colorScheme={golden}
                  display={{
                    base: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                  }}
                >
                  About
                </Button>
              </Box>
            </Link>
          </NextLink>

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

          {isSignIn && (
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isSignIn}
              onClose={() => {
                setSignIn(false);
              }}
            >
              <ModalOverlay />
              <ModalContent color={golden}>
                <ModalHeader pt={10}> Welcome back! Please Login </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Mobile no / Email ID</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Enter Mobile no / Email ID"
                      onChange={onChangeIdentity}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      onChange={onChangePassword}
                    />
                    <Box justifyContent="space-between">
                      <FormLabel mt={5}>
                        <Button
                          color={golden}
                          size="sm"
                          variant="link"
                          onClick={() => {
                            setSignIn(false);
                            setSignUp(false);
                          }}
                        >
                          Forgot password
                        </Button>
                      </FormLabel>
                    </Box>
                  </FormControl>
                </ModalBody>

                <ModalFooter justifyContent="center">
                  <Box borderWidth="1px">
                    <Button
                      bg={golden}
                      color="white"
                      colorScheme="red"
                      size="lg"
                      width="200px"
                      onClick={loginHandler}
                    >
                      Login
                    </Button>
                  </Box>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}

          {isSignUp && (
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isSignUp}
              onClose={() => {
                setSignUp(false);
              }}
            >
              <ModalOverlay />
              <ModalContent color={golden}>
                <ModalHeader> Welcome To Sign Up Interface </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="ex.Jone doe"
                      onChange={onChangeName}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email id</FormLabel>
                    <Input
                      ref={initialRef}
                      type="email"
                      placeholder="test@test.com"
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                      onChange={onChangeEmail}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Phone no</FormLabel>
                    <Input
                      ref={initialRef}
                      type="tel"
                      placeholder="+8801760 __ __ __ __ __ __"
                      onChange={onChangePhone}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      onChange={onChangePassword}
                    />
                    <Box justifyContent="space-between">
                      <FormLabel mt={5}>
                        <Button
                          color={golden}
                          size="sm"
                          variant="link"
                          onClick={() => {
                            setSignIn(false);
                            setSignUp(false);
                          }}
                        >
                          Forgot password
                        </Button>
                      </FormLabel>
                    </Box>
                  </FormControl>
                </ModalBody>

                <ModalFooter justifyContent="center">
                  <Box borderWidth="1px">
                    <Button
                      bg={golden}
                      color="white"
                      colorScheme="red"
                      size="lg"
                      width="200px"
                      onClick={signUpHandler}
                    >
                      Sign up
                    </Button>
                  </Box>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </Stack>
      </Box>
    </Flex>
  );
};
