import Footer from '@/components/footer';
import { Header } from '@/components/header';
import TestimonialDetails from '@/components/testimonial-details';
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

  interface HomeType {
    name: string;
    link: string;
  }
  const HelpLink: React.FC<HomeType> = ({ name, link }) => (
    <Center my={2}>
      <Link fontSize={['12px', '14px', '14px', '16px']} href={link}>
        {name}
      </Link>
    </Center>
  );

  return (
    <Box>
      <Head>
        <title>EUB Almuni</title>
        <meta name="keyword" content="web dev, programming" />
        <link rel="icon" href="/logo/logo-eub.png" />
      </Head>
      <Box bg="gray.200">
        <Box
          // h={['320px', '400px', '500px', '650px']}
          bgImage="url('/slider/eub_slider.jpg')"
          objectFit="contain"
          bgPosition={['center', 'contain']}
          bgRepeat="no-repeat"
          alt="image not found"
        >
          <Box marginX={['0px', '50px', '80px', '150px']}>
            <Header />
            <Box>
              <Box>
                <Heading
                  textAlign="center"
                  pt={['10px', '50px', '80px', '20px']}
                  fontSize={['12px', '12px', '20px', '20px']}
                >
                  --------A new day at Creighton --------
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
                bg="rgba(255, 255, 255, .4)"
                borderRadius={5}
                shadow={5}
                px={5}
                boxShadow="xl"
                rounded="md"
                justifyContent="space-between"
              >
                <Text
                  color="black"
                  textAlign="center"
                  pt={['10px', '50px', '80px', '20px']}
                  fontSize={['11px', '15px', '20px', '22px']}
                >
                  At Creighton, we&apos;re defining our future while embracing a
                  tradition more than 140 years in the making. Our Jesuit
                  mission shapes our vision. But our alumni and friends — our
                  one-of-a-kind community — YOU make that vision a reality. You
                  ensure our students’ success. You help us forge a bold new
                  chapter in Creighton’s extraordinary story. Together, we will
                  keep Creighton thriving and prepare a new generation to lead
                  the way.
                </Text>
                <Stack align="center">
                  <NextLink passHref href="/story">
                    <Link>
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="teal"
                        variant="outline"
                        _onFocus="blue"
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

        <Box bg="gray.200">
          <Center>
            <Heading fontSize={['15px', '20px', '28px', '28px']}>
              Thousand of Success Stories
            </Heading>
          </Center>

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
            <TestimonialDetails image="/slider/eub_slider.jpg" />
            <TestimonialDetails image="/slider/eub_slider.jpg" />
          </Carousel>
        </Box>
        <Box px={['20px', '50px', '80px', '150px']} bg="gray.200" py={['80px']}>
          <VStack>
            <Image
              src="/logo/eub_logo_small.png"
              h={['150px', '150px', '180px', '300px']}
              my={2}
              objectFit="cover"
              fit="cover"
              alt="king image not found"
            />
            <Text
              textAlign="justify"
              fontSize={['11px', '14px', '14px', '16px']}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
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
              <Heading
                mb={['20px', '30px', '40px', '50px']}
                fontSize={['15px', '20px', '28px', '35px']}
              >
                Leading the Way
              </Heading>
              <Text>
                Creighton is a world-class academic institution recognized for
                excellence in teaching, learning and research, and enriched by a
                centuries-long tradition of Jesuit, Catholic education.
              </Text>
              <Stack align="center">
                <NextLink passHref href="/story">
                  <Link>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="white"
                      variant="outline"
                      _onFocus="blue"
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
                <HelpLink name="Member Login" link="/story" />
                <HelpLink name="Sign Up" link="/" />
                <HelpLink name="Premium Membership" link="/" />
                <HelpLink name="Customer Support" link="/" />
                <HelpLink name="Sitemap" link="/" />
              </Box>
            </Box>
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">Company</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <HelpLink name="Member Login" link="/" />
                <HelpLink name="Sign Up" link="/" />
                <HelpLink name="Premium Membership" link="/" />
                <HelpLink name="Customer Support" link="/" />
                <HelpLink name="Sitemap" link="/" />
              </Box>
            </Box>
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">More</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <HelpLink name="Member Login" link="/" />
                <HelpLink name="Sign Up" link="/" />
                <HelpLink name="Premium Membership" link="/" />
                <HelpLink name="Customer Support" link="/" />
                <HelpLink name="Sitemap" link="/" />
              </Box>
            </Box>
            <Box my={['0px', '10px', '30px', '40px']}>
              <Center mb={2}>
                <Text fontSize="xl">Privacy & You</Text>
              </Center>
              <Divider />
              <Box my={['10px', '5', '25px', '30px']}>
                <HelpLink name="Member Login" link="/" />
                <HelpLink name="Sign Up" link="/" />
                <HelpLink name="Premium Membership" link="/" />
                <HelpLink name="Customer Support" link="/" />
                <HelpLink name="Sitemap" link="/" />
              </Box>
            </Box>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
