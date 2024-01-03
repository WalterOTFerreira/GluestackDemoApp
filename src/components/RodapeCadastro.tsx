import React, {useState} from 'react';
import RodapeCadastroButtons from './RodapeCadastroButtons';
import RodapeCadastroModalCancelar from './RodapeCadastroModalCancelar';

const RodapeCadastroWrapper = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <RodapeCadastroButtons onOpenModal={handleOpenModal} />
      <RodapeCadastroModalCancelar
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default RodapeCadastroWrapper;
