import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

import Section from '../components/section';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack web developer and mobile app developer
        based in Kashmir, India!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Irfan Wani
          </Heading>
          <p>Programmer (Web develpoer / App developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/dp.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section deplay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Parahraph</p>
      </Section>
    </Container>
  );
};

export default Page;
