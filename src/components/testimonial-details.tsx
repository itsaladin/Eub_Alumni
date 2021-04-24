import { golden } from '@/themes/custom.color';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  image: string;
  batch: string;
}

const TestimonialDetails: React.FC<Props> = ({ image, batch }) => (
  <Box borderWidth="1px" borderColor="GrayText" bg="gray.200">
    <NextLink passHref href="/#">
      <Link>
        <AspectRatio>
          <Box borderWidth="1px" borderRadius="2xl">
            <Image
              h={['320px', '400px', '500px', '250px']}
              src={image}
              w="100%"
            />
          </Box>
        </AspectRatio>
      </Link>
    </NextLink>
    <Box>
      <Text fontWeight="bold" fontSize="md" noOfLines={1} textAlign="center">
        It might just work for you {batch}
      </Text>
      <Box>
        <NextLink passHref href="/story">
          <Link>
            <Tooltip label="Detail Sanjana">
              <Text
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
                textAlign="center"
              >
                {console.log(batch)}
                {batch}
              </Text>
            </Tooltip>
          </Link>
        </NextLink>
      </Box>
      <Stack align="center" py={2}>
        <NextLink passHref href="/story">
          <Link>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color={golden}
              colorScheme={golden}
              variant="outline"
            >
              Message
            </Button>
          </Link>
        </NextLink>
      </Stack>
    </Box>
  </Box>
);

export default TestimonialDetails;
