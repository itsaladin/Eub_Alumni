import { golden } from '@/themes/custom.color';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

interface Props {
  type: string;
  price: string;
  duration: string;
  proposals: string;
  sendPropsal: string;
  viewLimitation: string;
  support: string;
}

function PriceList({
  type,
  price,
  duration,
  proposals,
  sendPropsal,
  viewLimitation,
  support,
}: Props) {
  return (
    <Box px={2} shadow="md" flex="1" borderWidth="1px" borderRadius="md">
      <Center>
        <Image
          src="/premium/dimond.png"
          m="opx"
          h={['100px', '80px', '90px', '100px']}
          objectFit="cover"
          fit="cover"
          alt="dimond image not found"
        />
      </Center>
      <Stack align="center">
        <Heading fontSize={['xl', 'xl', 'xl', 'xl']}>{type}</Heading>
        <Text fontSize={['sm', 'md']}>{price}</Text>
        <Text fontSize={['sm', 'md']}>{duration}</Text>
        <Text fontSize={['sm', 'md']}>{proposals}</Text>
        <Text fontSize={['sm', 'md']} textAlign="center">
          {sendPropsal}
        </Text>
        <Text fontSize={['sm', 'md']}>{viewLimitation}</Text>
        <Text fontSize={['sm', 'md']}>{support}</Text>
      </Stack>
      <Stack align="center" my={6}>
        <NextLink passHref href="/story">
          <Link>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color={golden}
              colorScheme={golden}
              variant="outline"
            >
              Register Now
            </Button>
          </Link>
        </NextLink>
      </Stack>
    </Box>
  );
}

export default PriceList;
