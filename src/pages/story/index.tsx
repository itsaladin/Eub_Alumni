import Footer from '@/components/footer';
import { SubHeader } from '@/components/sub-header';
import { csBackground } from '@/themes/custom.color';
import { CalendarIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Story() {
  return (
    <Box bg={csBackground}>
      <Box bg="gray.500" px={['10px', '50px', '100px', '195px']}>
        <SubHeader />
      </Box>
      <Box mt={2}>
        <Tabs>
          <TabList bg="gray.50" mx={['10px', '50px', '100px', '200px']}>
            <Tab>Featured Success Storices</Tab>
            <Tab>Video Storices</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Center>
                <Text fontFamily="initial" fontSize="28px">
                  Welcome to European University Pride.
                </Text>
              </Center>
              <Center mb={2}>
                <Text fontSize="20px">
                  This is where we celebrate European Success Stories.!
                </Text>
              </Center>
              <Grid
                mx={['10px', '50px', '100px', '185px']}
                templateColumns="repeat(6, 1fr)"
                gap={2}
              >
                <GridItem colSpan={4} bg="gray.50" p={5} borderRadius={10}>
                  <Heading as="h5" size="lg" fontFamily="initial">
                    We are European Students
                  </Heading>
                  <HStack mt={3}>
                    <CalendarIcon w={6} h={6} />
                    <Text>20 May 2016</Text>
                  </HStack>
                  <Center>
                    <Image
                      maxW={['100px', '120px', '130px', '250px']}
                      maxH={['50px', '60px', '80px', '250px']}
                      objectFit="contain"
                      src="/logo/BM2.png"
                      alt="Segun Adebayo"
                    />
                  </Center>
                  <Text textAlign="justify">
                    Ours is an arranged marriage but I would not agree because I
                    fell in love with her with every day passing. Since the
                    day(i.e. 4th March 2015) Raman accepted my interest on
                    European my life changed. I never thought some one sitting
                    so far in Canada would make me feel loved the way I felt.
                    Initial Chats and conversation made us understand each other
                    well and we started talking for hours on phone and skype.
                    Finally, we talked to our parents and they took the
                    conversation ahead through phone calls. To take it further
                    Ramanpreet&apos;s Mother asked us to meet her uncle living
                    in Patiala, India as she was with Ramanpreet in Canada at
                    that time. We went to patiala to meet her uncle Karnail
                    Singh Arora (Mother&apos;s Brother) on 8th of April, 2015
                    and had a healthy conversation and got an approval for the
                    alliance. We were very happy and we fixed the dates in the
                    mean while. Every thing went good and the eagerness to meet
                    her in person went to an extreme level. Finally she told me
                    that she had applied for the leaves and will be coming on 11
                    of October 2015. I cant explain how much happy I was. On
                    21st September her mother came back to India and we had a
                    formal meeting and we had Roka in Gurudwara saheb. I loved
                    the feeling her mother was so warming and uncle from patiala
                    was also there along with my parents and sister. Finally the
                    day came when she landed on Indira Gandhi International
                    Airport and I went to pick her up alone with some flowers. I
                    saw her coming out and my heart started pounding. I was
                    nervous as I saw her first time. She looked beautiful I
                    loved the way she hugged me. We went for our first date to
                    Wok In clouds in Rajouri garden, New Delhi. We had a Pre
                    Wedding shoot on 13th of October at Humayun&apos;s Tomb, New
                    Delhi. It was the day when i first time felt so much of
                    love. Meeting in person was a different feeling and I loved
                    it. We started shopping for the rest of the time left and
                    had an engagement ceremony on 24th of October 2015 followed
                    by the wedding on 25th of October 2015. Since the day my
                    life changed completely and I am a lot more happier and
                    satisfied then I was ever in my life. Thanks to marriage.com
                    for such an alliance. Gob Bless you and your team.
                  </Text>

                  <Divider orientation="horizontal" my={5} />

                  <HStack mt={3}>
                    <CalendarIcon w={6} h={6} />
                    <Text>20 May 2016</Text>
                  </HStack>
                  <HStack mt={3}>
                    <Text>
                      &quot;European Team congratulates We wish you both a happy
                      future.&quot;
                    </Text>
                  </HStack>
                </GridItem>
                <GridItem colSpan={2} bg="gray.50" pt={5} borderRadius={10}>
                  <Box>
                    <Center>
                      <Image
                        borderRadius={8}
                        maxW={['100px', '120px', '130px', '250px']}
                        maxH={['50px', '60px', '80px', '250px']}
                        src="/slider/2.jpg"
                        alt="Dan Abramov"
                        mb={4}
                      />
                    </Center>
                    <Text textAlign="center">We Are EUBEAN</Text>
                    <Text textAlign="center">20 May 2016</Text>
                  </Box>
                  <Box mt={10}>
                    <Center>
                      <Image
                        borderRadius={8}
                        maxW={['100px', '120px', '130px', '250px']}
                        maxH={['50px', '60px', '80px', '250px']}
                        src="/slider/5.jpg"
                        alt="Dan Abramov"
                        mb={4}
                      />
                    </Center>
                    <Text textAlign="center">Batch ovaral review</Text>
                    <Text textAlign="center">20 May 2016</Text>
                  </Box>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel mx={['10px', '50px', '100px', '200px']}>
              <Center mb={3}>
                <Text fontSize="25px">
                  Watch the beautiful journey of our Success Stories and be
                  inspired.
                </Text>
              </Center>
              <Stack direction={['column', 'column']}>
                <AspectRatio maxW="350px" ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/XnfQp9ObLk8"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
                <AspectRatio maxW="350px" ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/5rJgu3U5lbY"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </AspectRatio>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Center>
                <Text fontSize="28px">
                  Thank you for sharing your Story with us!
                </Text>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Story;
