import Footer from '@/components/footer';
import { SubHeader } from '@/components/sub-header';
import { apiKey } from '@/constants/api';
import { csBackground } from '@/themes/custom.color';
import { Box, Divider, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Admin() {
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
      </Grid>

      <Footer />
    </Box>
  );
}

export default Admin;
