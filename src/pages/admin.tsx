import Footer from '@/components/footer';
import { SubHeader } from '@/components/sub-header';
import { csBackground } from '@/themes/custom.color';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Admin() {
  // const [pending, setPending] = useState();

  // useAsyncEffect(async (isMounted) => {
  //   const allHotels = await getPending();
  //   console.log(allHotels);

  //   if (!isMounted()) {
  //     return;
  //   }
  //   if (allHotels) {
  //     setPending(allHotels);
  //   }
  // }, []);
  return (
    <Box bg={csBackground}>
      <Box bg="gray.500" px={['10px', '50px', '100px', '150px']}>
        <SubHeader />
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={5} mx="150px">
        <Box py={10}>
          <Text pb={5} fontSize="25px">
            Admin Pannel
          </Text>
          <Divider />
        </Box>
        <Grid templateColumns="repeat(1, 1fr)" mt={4}>
          <Table variant="striped" colorScheme="green">
            <TableCaption fontSize="20px">All authenticated users</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize="10px">Id</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px">Name</Th>
                <Th fontSize="10px" isNumeric>
                  multiply
                </Th>
                <Th fontSize="10px">Edit</Th>
                <Th fontSize="10px">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize="12px">123</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px" isNumeric>
                  25.4
                </Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaEdit />}
                  />
                </Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<RiDeleteBin6Line />}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="12px">123</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px" isNumeric>
                  25.4
                </Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaEdit />}
                  />
                </Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<RiDeleteBin6Line />}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="12px">123</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px">Jone Doe</Td>
                <Td fontSize="12px" isNumeric>
                  25.4
                </Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<FaEdit />}
                  />
                </Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<RiDeleteBin6Line />}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}

export default Admin;
