import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Nav = ({ facebookUrl, instagramUrl }) => (
  <Container>
    <ul>
      <li>
        <a href={instagramUrl}>
          <FiInstagram />
        </a>
      </li>
      <li>
        <a href={facebookUrl}>
          <FiFacebook />
        </a>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </Container>
);

Nav.propTypes = {
  facebookUrl: PropTypes.string.isRequired,
  instagramUrl: PropTypes.string.isRequired,
};

export default Nav;
