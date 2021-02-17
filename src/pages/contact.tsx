import Footer from '@/components/footer';
import { SubHeader } from '@/components/sub-header';
import { apiKey } from '@/constants/api';
import { csBackground } from '@/themes/custom.color';
import { Box, Divider, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Contact() {
  return (
    <Box bg={csBackground}>
      <Box bg="gray.500" px={['10px', '50px', '100px', '150px']}>
        <SubHeader />
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={5} mx="150px">
        <Box py={10}>
          <Text pb={5} fontSize="25px">
            Contact Us
          </Text>
          <Divider />
          <Text textAlign="justify">
            The European University of Bangladesh (Bengali: ইউরোপিয়ান
            বিশ্ববিদ্যালয়) or (EUB) is a private university located at Dhaka,
            Bangladesh. The university was established in 2012 under the Private
            University Act, 1992.[1] European University of Bangladesh (EUB) is
            a third generation private university aiming at providing modern
            education of European standard in Bangladesh. It has been accredited
            by the Government of the People’s Republic of Bangladesh, curricula
            and academic while its programs have been approved by the University
            Grants Commission (UGC). It was established under the Private
            University Act 2010 with the approval of the Government of
            Bangladesh on 14 March 2012 for awarding degrees in various fields.
            The President of the People’s Republic of Bangladesh is the
            Chancellor of European University of Bangladesh. The University
            applies student- centred teaching and learning methods, pursues
            applied research and encourages creative activities with the
            objective of producing world-class professionals to meet national
            and international standard, as well as, the requirement of its
            graduates for their career development and employment. We are
            constantly investing in our campus and facilities to ensure all
            students have a world-class teaching and learning environment,
            state-of-the-art facilities and enhancing the vibrancy of the campus
            experience to make students time in EUB truly one to cherish. The
            University is located at the heart of the Dhaka City at prestigious
            institutional zone of Shyamoli (opposite to Sohrawardi Medical
            College) with well-connected communication system. It has two
            campuses. The main campus situated at Rupayan Shelford, Plot # 23/6,
            Block # B, Mirpur Road, Shyamoli, Dhaka, Bangladesh. Other campus is
            located at Janata Housing, Plot # 211 & 212, Shah Ali-Bag, Mirpur-2,
            Dhaka-1216, Bangladesh.
          </Text>
        </Box>
        <Box mt={10}>
          <Box>
            <Text fontSize="22px" mb={5}>
              Campus Location
            </Text>
            <Text fontSize="18px">Address: 2/4 Gabtoli Mirpur Dhaka 1216</Text>
            <Text fontSize="15px">
              Phone: 01968774927, 01968774933, 01968774928, 01968774930-32
            </Text>
            <Text fontSize="15px">Number of students: 16,000</Text>
            <Text fontSize="15px">Founded: 2012</Text>
            <Text fontSize="15px">Motto: We Shape your Dream</Text>
          </Box>
          <Box mt={10}>
            <Text fontSize="22px" mb={5}>
              Admission Office
            </Text>
            <Text fontSize="18px">Address: 2/4 Gabtoli, Dhaka Bangladesh</Text>
            <Text fontSize="15px">
              Phone:01968774927, 01968774933, 01968774928, 01968774930-32
            </Text>
            <Text fontSize="15px">Our New Admission Office at Shyamoli.</Text>
            <Text fontSize="15px">
              Address: Rupayan Shelford, Plot # 23/6, Block # B, Shyamoli,
              Mirpur Road, Dhaka – 1207
            </Text>
            <Text fontSize="15px">Mobile: 01920984007</Text>
            <Text fontSize="15px">Motto: We Shape your Dream</Text>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Contact;
