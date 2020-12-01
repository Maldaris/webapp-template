import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AboutModal from '../AboutModal';

import './SplashPage.scss';

const SplashPage = props => {
  const {
    children, appElement
  } = props;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="splash-page-container">
      <AboutModal appElement={appElement} open={openModal} onClose={() => setOpenModal(false)} />
      <div className="splash-page-content">
        {children}
      </div>
      <div className="splash-page-footer">
        <a href="#" onClick={() => setOpenModal(true)}>Built with &hearts; by Maldaris</a>
      </div>
    </div>
  );
};

SplashPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  appElement: PropTypes.instanceOf(Element)
};

export default SplashPage;
