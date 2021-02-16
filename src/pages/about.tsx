import Footer from '@/components/footer';
import { SubHeader } from '@/components/sub-header';
import { csBackground } from '@/themes/custom.color';
import {
  Box,
  Center,
  Divider,
  Grid,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function About() {
  return (
    <Box bg={csBackground}>
      <Box bg="gray.500" px={['10px', '50px', '100px', '150px']}>
        <SubHeader />
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} mx="150px">
        <Box py={10}>
          <Text pb={5} fontSize="25px">
            About Us
          </Text>
          <Divider />
          <Text textAlign="justify">
            European University of Bangladesh (EUB) is a third generation
            private university aiming at providing modern education of European
            standard in Bangladesh. It has been accredited by the Government of
            the People’s Republic of Bangladesh, curricula and academic while
            its programs have been approved by the University Grants Commission
            (UGC). It was established under the Private University Act 2010 with
            the approval of the Government of Bangladesh on 14th March, 2012 for
            awarding degrees in various fields. The President of the People’s
            Republic of Bangladesh is the Chancellor of European University of
            Bangladesh. The University applies student- centred teaching and
            learning methods, pursues applied research and encourages creative
            activities with the objective of producing world-class professionals
            to meet national and international standard, as well as, the
            requirement of its graduates for their career development and
            employment. We are constantly investing in our campus and facilities
            to ensure all students have a world-class teaching and learning
            environment, state-of-the-art facilities and enhancing the vibrancy
            of the campus experience to make students time in EUB truly one to
            cherish. The University is located at the heart of the Dhaka City at
            prestigious institutional zone of Gabtoli (opposite to Gabtoli Bus
            Terminal) with well-connected communication system.
          </Text>
          <Text fontSize="18px" py={5}>
            European University of Bangladesh(EUB) is the fastest growing
            university in Bangladesh.
          </Text>
          <Text py={5} fontSize="22px">
            The University with some unique features:
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon
                textAlign="justify"
                as={MdCheckCircle}
                color="green.500"
              />
              The number of students is expanding very fast and in the last five
              years time its student’s population exceeded 24000
            </ListItem>
            <ListItem>
              <ListIcon
                textAlign="justify"
                as={MdCheckCircle}
                color="green.500"
              />
              The university’s physical infrastructure is growing even faster.
              It’s 5.5-lac square feet huge permanent campus is nearing
              completion at the GABTOLI, gateway to the Dhaka city.
            </ListItem>
            <ListItem>
              <ListIcon
                textAlign="justify"
                as={MdCheckCircle}
                color="green.500"
              />
              Faculty of EUB is also expanding in line with its student’s
              population. Currently, there are 480 teaching staff, all with the
              most brilliant academic degrees from renowned universities at home
              and abroad.
            </ListItem>
            <ListItem>
              <ListIcon
                textAlign="justify"
                as={MdCheckCircle}
                color="green.500"
              />
              The university Caters to the needs of higher education in keeping
              with the poorer but brilliant students coming from middle and
              underprivileged classes of the society spread all over the
              country. The university charges very low tuition fees, which are
              affordable to the poorer as well as working students of the
              country.
            </ListItem>
          </List>
        </Box>
        <Box mt={10}>
          <Center>
            <Image
              borderRadius={8}
              w={['100px', '120px', '130px', '450px']}
              h={['50px', '60px', '80px', '300px']}
              src="/slider/eub_slider.jpg"
              alt="Dan Abramov"
              mb={4}
            />
          </Center>
        </Box>
      </Grid>
      <Footer />
    </Box>
  );
}

export default About;
