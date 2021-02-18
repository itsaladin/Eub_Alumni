import { golden } from '@/themes/custom.color';
import { Box, Heading, Image } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Special = () => (
  <Box>
    <Heading
      color={golden}
      pt={['20px', '30px', '40px', '50px']}
      fontSize={['15px', '20px', '25px', '25px']}
    >
      WELCOME TO EUB ALUMNI
    </Heading>
    <Box my={['0px', '0px', '40px', '60px']}>
      <Image
        src="/background/dep-CSE.jpg"
        h={['80px', '150px', '180px', '300px']}
        my={2}
        objectFit="contain"
        fit="contain"
        alt="king image not found"
      />
    </Box>
  </Box>
);
