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
  HStack,
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

export const SubHeader = ({ props }: any) => {
  const { onOpen } = useDisclosure();

  const initialRef = useRef<any>();
  const finalRef = useRef<any>();

  const toast = useToast();

  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roll, setRoll] = useState('');
  const [department, setDepartment] = useState('');
  const [passYear, setPassYear] = useState('');
  const [batch, setBatch] = useState('');

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

  const onChangeDepartement = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDepartment(event.target.value);
    },
    [],
  );

  const onChangePassYear = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassYear(event.target.value);
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

  const onChangeBatch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBatch(event.target.value);
  }, []);

  const onChangePhone = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }, []);

  const onChangeRoll = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setRoll(event.target.value);
  }, []);

  const signUpHandler = useCallback(
    async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      if (!name || !batch || !phone || !password) {
        return toast({
          title: 'Warning',
          description: 'All filed are required !!!!',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
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
        setBatch('');
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
    [name, password, phone, toast, batch],
  );

  return (
    <HStack as="nav" justify="space-between" py={5} color="white" {...props}>
      <NextLink passHref href="/">
        <Link>
          <Image
            maxW={['120px', '120px', '130px', '180px']}
            objectFit="contain"
            src="/logo/logo-eub.png"
            alt="Segun Adebayo"
          />
        </Link>
      </NextLink>

      <Box alignItems="flex-end">
        <Stack direction="row-reverse">
          <NextLink passHref href="#">
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
                  color="white"
                  colorScheme="white"
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

          <NextLink passHref href="#">
            <Link>
              <Box variant="link">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color="white"
                  colorScheme="white"
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

          <NextLink passHref href="#">
            <Link>
              <Box variant="link">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color="white"
                  colorScheme="white"
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

          <NextLink passHref href="#">
            <Link>
              <Box variant="link">
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  color="white"
                  colorScheme="white"
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
                    <FormLabel>Student Id</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Enter student id"
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
                    <FormLabel>Id *</FormLabel>
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
                    <FormLabel>Batch *</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="B-9"
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                      onChange={onChangeBatch}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Roll *</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="080122081"
                      onChange={onChangeRoll}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Department</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="+8801760 __ __ __ __ __ __"
                      onChange={onChangeDepartement}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Passing Year *</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="2021"
                      onChange={onChangePassYear}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
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
                    <FormLabel>Password *</FormLabel>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      onChange={onChangePassword}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                    />
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
    </HStack>
  );
};
