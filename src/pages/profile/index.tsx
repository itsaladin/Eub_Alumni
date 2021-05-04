import Footer from '@/components/footer';
import { SubHeader } from '@/components/sub-header';
import { useRootStore } from '@/models/root-store-provider';
import { getProfile, StudentProfile } from '@/service/profile';
import { updateUser } from '@/service/update';
import { csBackground } from '@/themes/custom.color';
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Image,
  Input,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { ChangeEvent, useCallback, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useAsyncEffect from 'use-async-effect';

function Profile() {
  const { token } = useRootStore();
  const toast = useToast();
  const [profile, setProfile] = useState<StudentProfile>();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [batch, setBatch] = useState('');
  const [roll, setRoll] = useState('');
  const [department, setDepartment] = useState('');
  const [passYear, setPassYear] = useState(0);
  const [blood, setBlood] = useState('');
  const [title, setTitle] = useState('');

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleCompanyChange = (event: any) => setCompany(event.target.value);
  const handleDesignationChange = (event: any) =>
    setDesignation(event.target.value);
  const handleBatchChange = (event: any) => setBatch(event.target.value);
  const handleRollChange = (event: any) => setRoll(event.target.value);
  const handleDepartmentChange = (event: any) =>
    setDepartment(event.target.value);
  const handlePassYearChange = (event: any) => setPassYear(event.target.value);
  const handleBloodChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBlood(event.target.value);
    },
    [],
  );
  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [],
  );

  useAsyncEffect(
    async (isMounted) => {
      if (!token) return;
      const studentProInfo = await getProfile(token);

      if (!isMounted()) {
        return;
      }
      if (studentProInfo) {
        setProfile(studentProInfo);
        setName(studentProInfo.name);
        setCompany(studentProInfo.company);
        setDesignation(studentProInfo.designation);
        setRoll(studentProInfo.roll);
        setDepartment(studentProInfo.department);
        setBatch(studentProInfo.batch);
        setPassYear(studentProInfo.passyear);
        setBlood(studentProInfo.blood);
        setTitle(studentProInfo.submissionTitle);
      }
    },
    [updateUser, token],
  );

  return (
    <Box bg={csBackground} flex={1}>
      <Box bg="gray.500" px={['10px', '50px', '100px', '195px']}>
        <SubHeader />
      </Box>
      <Box py={5} bg="#E2E8F0">
        <Text fontSize="30px">
          <Center>{profile?.name} Profile Information</Center>
        </Text>
        <Divider />
      </Box>

      <Grid
        px={['10px', '50px', '100px', '100px']}
        templateColumns="repeat(3, 1fr)"
        gap={6}
        my={5}
      >
        <Box w="100%">
          <Center mt={4} mb={8}>
            Roll
          </Center>
          <Center mb={8}>Name</Center>
          <Center mb={8}>Department</Center>
          <Center mb={8}>Batch</Center>
          <Center mb={8}>Passing Year</Center>
          <Center mb={8}>Project Title</Center>
          <Center mb={8}>Company</Center>
          <Center mb={8}>Designation</Center>
          <Center mb={8}>Blood Group</Center>
        </Box>
        <Box w="100%">
          <Input
            my={2}
            value={roll}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Id"
            onChange={handleRollChange}
          />
          <Input
            my={2}
            value={name}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Name"
            onChange={handleNameChange}
          />
          <Input
            my={2}
            value={department}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Department"
            onChange={handleDepartmentChange}
          />
          <Input
            my={2}
            value={batch}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Batch"
            onChange={handleBatchChange}
          />
          <Input
            my={2}
            value={passYear}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Passing Year"
            onChange={handlePassYearChange}
          />
          <Input
            my={2}
            value={title}
            focusBorderColor="lime"
            placeholder="Student Project Title"
            onChange={handleTitleChange}
          />
          <Input
            my={2}
            value={company}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Company"
            onChange={handleCompanyChange}
            onCha
          />
          <Input
            my={2}
            value={designation}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Id"
            onChange={handleDesignationChange}
          />
          <Input
            my={2}
            value={blood}
            isDisabled={false}
            focusBorderColor="lime"
            placeholder="Student Blood"
            onChange={handleBloodChange}
          />

          <Button
            w={60}
            my={5}
            colorScheme="#718096"
            backgroundColor="#718096"
            onClick={async () => {
              const result = await updateUser(
                token,
                name,
                company,
                designation,
                batch,
                roll,
                department,
                Number(passYear),
                blood,
                title,
              );
              if (result.code === 200) {
                return toast({
                  title: 'Updated',
                  description: 'Student information update successfully',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                  position: 'top-right',
                });
              }
              return toast({
                title: 'Warnning',
                description: 'Student information update faild',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
            }}
          >
            Update Information
          </Button>
        </Box>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Profile;
