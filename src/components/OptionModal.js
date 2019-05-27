import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( 
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button
       className="button"
       onClick={props.closeModal}
      >Ok</button>
    </Modal>
    );

export default OptionModal;

//Creat a new event handel in indecisionApp that clear selectedOption state
// Pass that into OptionModal
//Call it on button click