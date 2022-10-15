import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react';

import NextLink from 'next/link';

import Section from '../components/section';

import Parahraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { BioSection, BioYear } from '../components/bio';

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
        <Parahraph>
          Irfan wani is a self-taught full stack web and app developer who has
          built multiple projects using Django, react native, redux etc. His
          github profile is given here;
          <NextLink href="https://github.com/irfanwani">
            <Link>Github</Link>
          </NextLink>
          .
        </Parahraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section deplay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Nov, 2001</BioYear>
          Born in Kashmir, India
        </BioSection>

        <BioSection>
          <BioYear>2016</BioYear>
          Completed my class 10th from Shaheen Public high school, Manigam
          Ganderbal with a score of 94%.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed my class 12th from Govt. Boys Higher Secondary School,
          Ganderbal with a score of 86.8%.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed my Bachelor&apos;s in Physics from Central University of
          Kashmir with a percentage of 75%.
        </BioSection>

        <BioSection>
          <BioYear>Present</BioYear>
          Working as a react native developer at{' '}
          <Link href="https://appsdeployer.com" target="_blank">
            AppsDeployer
          </Link>
          .
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          I 💟 
        </Heading>
      <Parahraph>
        Playing Sports like, Cricket 🏏 , Volleyball 🏐, football ⚽  
      </Parahraph>
      </Section>
    </Container>
  );
};

export default Page;
