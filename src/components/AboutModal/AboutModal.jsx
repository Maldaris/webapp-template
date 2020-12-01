import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Modal from 'react-modal';

import './AboutModal.scss';

const AboutModal = props => {
  const {
    open,
    onClose,
    appElement
  } = props;

  return (
    <Modal className="about-modal" appElement={appElement} isOpen={open} onRequestClose={onClose}>
      <div className="modal-container">
        <div className="modal-content">
          <h2>Built With &hearts; by Maldaris</h2>
          <div className="modal-content-links">
            <a href="https://github.com/Maldaris">Github</a>
            <a href="https://discord.gg/d5t4jW8sGb">Discord</a>
          </div>
        </div>
        <div className="modal-controls">
          <div className="modal-controls-right">
            <Button color="primary" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

AboutModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  appElement: PropTypes.instanceOf(Element)
};

export default AboutModal;
