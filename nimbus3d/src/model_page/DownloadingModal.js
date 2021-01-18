// import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './DownloadingModal.css'
import { CircularProgress } from '@material-ui/core';


export default function TransitionsModal({open, setOpen}) {


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={'downloading_modal'}
        open={open}
        onClick={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className="fade">
            
          <div className={'fade-box'}>
            <h1 id="transition-modal-title">Downloading Files... </h1>
            <CircularProgress className="downloading-progress"/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
