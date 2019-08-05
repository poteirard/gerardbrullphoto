import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import ContactForm from 'forms/contact';
import { Flex, Box } from '@rebass/grid';

const Contact = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contactJson.title} />
    <Flex pt={20} alignItems="center" justifyContent="space-around">
      <Box width="50%" px={4}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contactJson.content.childMarkdownRemark.html,
          }}
        />
        <ContactForm email={data.site.siteMetadata.email} />
      </Box>
    </Flex>
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    site {
      siteMetadata {
        email
      }
    }
  }
`;
