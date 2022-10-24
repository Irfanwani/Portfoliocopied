import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import barbershop from '../public/images/works/barbershop.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id='Barbershop' title='Barbershop' thumbnail={barbershop}>
                            An appointment fixing app built with react native and django.
                        </WorkGridItem>
                    </Section>
                    <Section >
                        <WorkGridItem id='krypt' title='krypt' thumbnail={''}>
                            A Web3.0 website where we can make crypto transactions using metamask
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>

    )
}

export default Works;