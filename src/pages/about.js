import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import Img from 'gatsby-image';
import { Flex, Box } from '@rebass/grid';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Flex
      alignItems="center"
      justifyContent="space-around"
      pt={30}
      flexWrap="wrap"
    >
      <Box width={['400px', 1 / 3]} px={30}>
        <Img
          fluid={data.aboutJson.image.source.childImageSharp.fluid}
          alt={data.aboutJson.image.title}
          style={{ maxWidth: '300px', borderRadius: '4px' }}
        />
      </Box>
      <Box width={['400px', 2 / 3]} pt={[20, 0]} px={4}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.aboutJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>
    </Flex>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        source {
          childImageSharp {
            fluid(maxHeight: 200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
  }
`;
