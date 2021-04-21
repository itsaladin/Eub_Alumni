import { signIn, signUp } from '@/api/auth/signUp';
import { golden } from '@/themes/custom.color';
import { sanitizePhone } from '@/utils/sanitizers';
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons';
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
  Select,
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from 'react';

export const Header = ({ props }: any) => {
  const { onOpen } = useDisclosure();
  const router = useRouter();

  const initialRef = useRef<any>();
  const finalRef = useRef<any>();

  const toast = useToast();

  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [passYear, setPassYear] = useState('');
  const [batch, setBatch] = useState('');
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [blood, setBlood] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');

  const [isSignIn, setSignIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);

  const handleTopicChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setTopic(event.target.value);
  };
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
  const onChangeBlood = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBlood(event.target.value);
  }, []);
  const onChangeBatch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBatch(event.target.value);
  }, []);
  const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);
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
          description: 'Id / Password filed not be empyt !!!!',
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
        return router.push('#');
      }
      if (res?.status === 403) {
        return toast({
          title: 'Pending User !!!!',
          description: res.message,
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      return console.log(res.message);
    },
    [identity, password, toast, router],
  );
  const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);
  const onChangePhone = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }, []);
  const onChangeCompay = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDesignation(event.target.value);
  }, []);
  const onChangeDesignation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCompany(event.target.value);
    },
    [],
  );
  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const signUpHandler = useCallback(
    async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      console.log(email);

      if (!identity || !phone || !password || !topic || !title) {
        return toast({
          title: 'Warning',
          description: 'All filed are required !!!!',
          status: 'info',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      const res = await signUp(
        title,
        topic,
        blood,
        Number(passYear),
        department,
        identity,
        batch,
        designation,
        company,
        identity,
        password,
        name,
        sanitizePhone(phone),
        email,
      );
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
        setTitle('');
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
    [
      name,
      email,
      password,
      phone,
      toast,
      title,
      batch,
      blood,
      company,
      department,
      designation,
      identity,
      passYear,
      topic,
    ],
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

          <NextLink passHref href="/contact">
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

          <NextLink passHref href="/about">
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
                    <FormLabel>Student Id</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Enter student id"
                      onChange={onChangeIdentity}
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
                      onChange={onChangeIdentity}
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
                    <FormLabel>Project/Thesis</FormLabel>
                    <Select
                      placeholder="Select option"
                      value={topic}
                      onChange={handleTopicChange}
                    >
                      <option value="Project">Project</option>
                      <option value="Thesis">Thesis</option>
                    </Select>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Project/Thesis Title</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Deep Learning Methods to Identify Rotten Fruits"
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                      onChange={onChangeTitle}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Company</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="ex. Star it Limited"
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                      onChange={onChangeCompay}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Designation</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="Software Engineer"
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                      onChange={onChangeDesignation}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Department</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="CSE"
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
                    <FormLabel>Email</FormLabel>
                    <Input
                      ref={initialRef}
                      type="tel"
                      placeholder="alauddin@ __ __ __ __ __ __"
                      onChange={onChangeEmail}
                      color={golden}
                      colorScheme={golden}
                      borderColor={golden}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Blood Group</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder="ex. O+"
                      onChange={onChangeBlood}
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
    </Flex>
  );
};
