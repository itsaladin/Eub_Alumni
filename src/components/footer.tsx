import { Box, Link, Text } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function Footer() {
  return (
    <Box
      py={10}
      textAlign="center"
      bg="gray.500"
      px={['50px', '80px', '100px', '150px']}
    >
      <Text textColor="snow" fontSize={['12px', '15px', '20px', '20px']}>
        © 1996-EUROPEAN UNIVERSTITY OF BANGLADESH The World &lsquo;s No.1™
        Passionately created by
        <Link ml={2} to="/" color="black">
          DEPARTMENT OF CSE ( 9<sup>th</sup> Batch)
        </Link>
      </Text>
    </Box>
  );
}

export default Footer;
