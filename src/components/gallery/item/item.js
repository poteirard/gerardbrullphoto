import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './item.css';
import Modal from 'containers/modal';

const Item = ({ title, image }) => (
  <Modal>
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
      </figcaption>
    </figure>
  </Modal>
);

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
