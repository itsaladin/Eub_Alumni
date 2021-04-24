import Footer from '@/components/footer';
import { approveUser } from '@/service/approve';
import { deleteUser } from '@/service/delete';
import {
  getApprovedUser,
  getPending,
  PendingResponse,
} from '@/service/pending';
import { csBackground } from '@/themes/custom.color';
import {
  Box,
  Center,
  Divider,
  Grid,
  IconButton,
  Image,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useAsyncEffect from 'use-async-effect';

function Admin() {
  const [pending, setPending] = useState<PendingResponse[]>();
  const [approved, setApproved] = useState<PendingResponse[]>();
  const toast = useToast();

  useAsyncEffect(async (isMounted) => {
    const allPending = await getPending();
    const approvedUserList = await getApprovedUser();

    if (!isMounted()) {
      return;
    }
    if (allPending) {
      setPending(allPending);
    }
    if (approvedUserList) {
      setApproved(approvedUserList);
    }
  }, []);

  return (
    <Box bg={csBackground} height={32}>
      <Box bg="gray.500" py={5} px={['10px', '50px', '100px', '150px']}>
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
      </Box>
      <Box py={5} bg="#E2E8F0">
        <Text fontSize="30px">
          <Center>Admin Pannel</Center>
        </Text>
        <Divider />
      </Box>
      <Grid>
        <Grid templateColumns="repeat(1, 1fr)" mb={10}>
          <Table variant="striped" colorScheme="green">
            <Thead>
              <Tr>
                <Th fontSize="10px">Id</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Dept.</Th>
                <Th fontSize="10px">Passing Year</Th>
                <Th fontSize="10px">Submission</Th>
                <Th fontSize="10px">Project Title</Th>
                <Th fontSize="10px">Phone</Th>
                <Th fontSize="10px">Email</Th>
                <Th fontSize="10px">Company</Th>
                <Th fontSize="10px">Designation</Th>
                <Th fontSize="10px">Delete</Th>
                <Th fontSize="10px">Accept</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pending?.map((pendingList) => (
                <Tr key={pendingList.id}>
                  <Td fontSize="12px">{pendingList?.roll}</Td>
                  <Td fontSize="12px">{pendingList?.name}</Td>
                  <Td fontSize="12px">{pendingList?.department}</Td>
                  <Td fontSize="12px">{pendingList?.passyear}</Td>
                  <Td fontSize="12px">{pendingList?.submission}</Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.submissionTitle}
                  </Td>
                  <Td fontSize="12px">{pendingList?.phone}</Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.email}
                  </Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.company}
                  </Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.designation}
                  </Td>
                  <Td>
                    <IconButton
                      variant="outline"
                      colorScheme="red"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<RiDeleteBin6Line />}
                      onClick={() => {
                        const result = deleteUser(pendingList.id);
                        if (result) {
                          return toast({
                            title: 'Deleted',
                            description: 'User request deleted successfully',
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                            position: 'top-right',
                          });
                        }
                        return toast({
                          title: 'Warnning',
                          description: 'User delete request faild',
                          status: 'error',
                          duration: 3000,
                          isClosable: true,
                          position: 'top-right',
                        });
                      }}
                    />
                  </Td>
                  <Td>
                    <IconButton
                      variant="outline"
                      colorScheme="white"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<BsCheckCircle />}
                      onClick={() => {
                        const result = approveUser(pendingList.id);
                        if (result) {
                          return toast({
                            title: 'Accepted',
                            description: 'User request accept successfully',
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                            position: 'top-right',
                          });
                        }
                        return toast({
                          title: 'Warnning',
                          description: 'User accepet request faild',
                          status: 'error',
                          duration: 3000,
                          isClosable: true,
                          position: 'top-right',
                        });
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {!pending?.length && (
            <Center>
              <Box py={8} px={8} borderRadius={10} mt={10} bg="#E2E8F0">
                <Text fontSize="25px">Pending list empty</Text>
                <Divider />
              </Box>
            </Center>
          )}
        </Grid>
      </Grid>

      <Box mb={8} borderRadius={10}>
        <Text fontSize="26px" textAlign="center">
          Approved Alumni Students List
        </Text>
        <Divider />
      </Box>

      <Grid px={['10px', '50px', '100px', '100px']}>
        <Grid templateColumns="repeat(1, 1fr)" mb={10}>
          <Table variant="striped" colorScheme="green">
            <Thead>
              <Tr>
                <Th fontSize="10px">Id</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Dept.</Th>
                <Th fontSize="10px">Passing Year</Th>
                <Th fontSize="10px">Submission</Th>
                <Th fontSize="10px">Project Title</Th>
                <Th fontSize="10px">Phone</Th>
                <Th fontSize="10px">Email</Th>
                <Th fontSize="10px">Company</Th>
                <Th fontSize="10px">Designation</Th>
              </Tr>
            </Thead>
            <Tbody>
              {approved?.map((pendingList: PendingResponse) => (
                <Tr key={pendingList.id}>
                  <Td fontSize="12px">{pendingList?.roll}</Td>
                  <Td fontSize="12px">{pendingList?.name}</Td>
                  <Td fontSize="12px">{pendingList?.department}</Td>
                  <Td fontSize="12px">{pendingList?.passyear}</Td>
                  <Td fontSize="12px">{pendingList?.submission}</Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.submissionTitle}
                  </Td>
                  <Td fontSize="12px">{pendingList?.phone}</Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.email}
                  </Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.company}
                  </Td>
                  <Td fontSize="12px" style={{ textAlign: 'center' }}>
                    {pendingList?.designation}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}

export default Admin;
