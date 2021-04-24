import Footer from '@/components/footer';
import { Header } from '@/components/header';
import TestimonialDetails from '@/components/testimonial-details';
import { golden } from '@/themes/custom.color';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Special } from '../components/special';

export default function Home() {
  const cardSliderResize = useBreakpointValue([100, 100, 50, 30]);

  return (
    <Box>
      <Head>
        <title>EUB Almuni</title>
        <meta name="keyword" content="web dev, programming" />
        <link rel="icon" href="/logo/logo-eub.png" />
      </Head>
      <Box bg="gray.200">
        <Box
          bgImage="url('/slider/eub_slider.jpg')"
          objectFit="contain"
          bgPosition={['center', 'contain']}
          bgRepeat="no-repeat"
          alt="image not found"
        >
          <Box marginX={['0px', '50px', '80px', '150px']}>
            <Header />
            <Box>
              <Box color={golden}>
                <Heading
                  textAlign="center"
                  pt={['10px', '50px', '80px', '20px']}
                  fontSize={['12px', '12px', '20px', '20px']}
                >
                  --------A new day at EUB --------
                </Heading>
                <Heading
                  textAlign="center"
                  my={['8px', '20px', '40px', '20px']}
                  fontSize={['12px', '14px', '28px', '28px']}
                >
                  MEETING THE MOMENT, TOGETHER
                </Heading>
              </Box>
              <Box
                px={5}
                shadow={5}
                boxShadow="xl"
                rounded="md"
                borderRadius={5}
                bg="rgba(255, 255, 255, .4)"
                justifyContent="space-between"
              >
                <Text
                  color="black"
                  textAlign="center"
                  pt={['10px', '50px', '80px', '20px']}
                  fontSize={['11px', '15px', '20px', '18px']}
                >
                  At European University of Banglades, we&apos;re defining our
                  future while embracing a tradition more than 140 years in the
                  making. Our Jesuit mission shapes our vision. But our alumni
                  and friends — our one-of-a-kind community — YOU make that
                  vision a reality. You ensure our students’ success. You help
                  us forge a bold new chapter in European University of
                  Banglades’s extraordinary story. Together, we will keep
                  European University of Banglades thriving and prepare a new
                  generation to lead the way.
                </Text>
                <Stack align="center">
                  <NextLink passHref href="/story">
                    <Link>
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="teal"
                        variant="outline"
                        // _onFocus="blue"
                        my={['10px', '50px', '80px', '10px']}
                      >
                        Message
                      </Button>
                    </Link>
                  </NextLink>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box bg="gray.200" alignSelf="center" align="center">
          <Special />
        </Box>

        <Center bg="gray.200" mb={10}>
          <Heading fontSize={['15px', '20px', '28px', '28px']} color={golden}>
            Thousand of Success Stories
          </Heading>
        </Center>

        <Box bg="gray.200">
          <Carousel
            autoPlay={true}
            centerMode={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            interval={2000}
            centerSlidePercentage={cardSliderResize}
          >
            <TestimonialDetails image="/slider/2.jpg" batch="B-7" />
            <TestimonialDetails image="/slider/5.jpg" batch="B-8" />
            <TestimonialDetails image="/slider/3.jpg" batch="B-9" />
          </Carousel>
        </Box>
        <Box px={['20px', '50px', '80px', '150px']} bg="gray.200" pb={['80px']}>
          <VStack>
            <Image
              src="/logo/eub_logo_small.png"
              h={['150px', '150px', '180px', '300px']}
              my={2}
              objectFit="cover"
              fit="cover"
              alt="king image not found"
              borderRadius="50%"
              py={10}
            />
            <Text
              textAlign="justify"
              fontSize={['11px', '14px', '14px', '16px']}
            >
              European University of Bangladesh (EUB) is a third generation
              private university aiming at providing modern education of
              European standard in Bangladesh. It has been accredited by the
              Government of the People’s Republic of Bangladesh, curricula and
              academic while its programs have been approved by the University
              Grants Commission (UGC). It was established under the Private
              University Act 2010 with the approval of the Government of
              Bangladesh on 14th March, 2012 for awarding degrees in various
              fields. The President of the People’s Republic of Bangladesh is
              the Chancellor of European University of Bangladesh. The
              University applies student- centred teaching and learning methods,
              pursues applied research and encourages creative activities with
              the objective of producing world-class professionals to meet
              national and international standard, as well as, the requirement
              of its graduates for their career development and employment. We
              are constantly investing in our campus and facilities to ensure
              all students have a world-class teaching and learning environment,
              state-of-the-art facilities and enhancing the vibrancy of the
              campus experience to make students time in EUB truly one to
              cherish. The University is located at the heart of the Dhaka City
              at prestigious institutional zone of Gabtoli (opposite to Gabtoli
              Bus Terminal) with well-connected communication system.
            </Text>
          </VStack>
        </Box>
        <Box
          bgImage="url('/background/bg_bottom.jpg')"
          objectFit="contain"
          bgPosition={['center', 'contain']}
          bgRepeat="no-repeat"
          alt="image not found"
        >
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            px={['20px', '50px', '80px', '150px']}
          >
            <Center>
              <Box my={['10px', '10px', '30px', '40px']}>
                <AspectRatio
                  w={['250px', '350px', '450px']}
                  h={['150px', '350px', '350px']}
                  ratio={1}
                >
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/5rJgu3U5lbY"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </Center>
            <Box
              my={['0px', '10px', '30px', '40px']}
              alignSelf="center"
              textColor="white"
            >
              <Center>
                <Heading
                  mb={['20px', '30px', '40px', '50px']}
                  fontSize={['15px', '20px', '28px', '35px']}
                >
                  Leading the Way
                </Heading>
              </Center>
              <Text>
                European University is a world-class academic institution
                recognized for excellence in teaching, learning and research,
                and enriched by a centuries-long tradition of Jesuit, Catholic
                education.
              </Text>
              <Stack align="center">
                <NextLink passHref href="/story">
                  <Link>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="white"
                      variant="outline"
                      // _onFocus="blue"
                      mt={5}
                    >
                      Find your giving opportunity
                    </Button>
                  </Link>
                </NextLink>
              </Stack>
            </Box>
          </Grid>
        </Box>
        <Box bg="gray.700" textColor="white" py={10}>
          <Grid
            templateColumns={[
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={6}
            marginX={['10px', '20px', '80px', '150px']}
          >
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">Need Help?</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/course-offer-fall-2020/"
                  isExternal
                >
                  Course offer
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/courses-tuition-fees/"
                  isExternal
                >
                  Course & Tution Fee
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/students-guideline/"
                  isExternal
                >
                  HelpLink For Student Guidline
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/1st-semester-class-routine-spring-2021-2/"
                  isExternal
                >
                  First Semester Class Routine
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/notice/"
                  isExternal
                >
                  Admission Notice
                </Link>
              </Box>
            </Box>
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">Admission</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/academic-policy/"
                  isExternal
                >
                  Academic Policy
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/rules-regulation/"
                  isExternal
                >
                  Rulses & Regulations
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/degrees-offered/"
                  isExternal
                >
                  Degree & Offred
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/credit-transfer/"
                  isExternal
                >
                  Credit Transfer
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/notice/"
                  isExternal
                >
                  Admission Notice
                </Link>
              </Box>
            </Box>
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">Administration</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/top-management/"
                  isExternal
                >
                  Top Management
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/office-of-vice-chancellor/"
                  isExternal
                >
                  Vice Chancellor
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/office-of-the-treasurer/"
                  isExternal
                >
                  Office Of The Treasurer
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/office-of-the-treasurer/#"
                  isExternal
                >
                  Office Of The Proctor
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/program-co-ordination/"
                  isExternal
                >
                  Program Co-Ordinator
                </Link>
              </Box>
            </Box>
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">Student Corner</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/#"
                  isExternal
                >
                  Class Routine
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/#"
                  isExternal
                >
                  Exam Schedule
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="http://iems.eub.edu.bd/"
                  isExternal
                >
                  Result
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/laboratories/"
                  isExternal
                >
                  Laboratories
                </Link>
                <Link
                  noOfLines={1}
                  mb={5}
                  textAlign="center"
                  href="https://eub.edu.bd/clubs-and-co-curriculars/"
                  isExternal
                >
                  Clubs And Curriculars
                </Link>
              </Box>
            </Box>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
