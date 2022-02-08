import CerrarBtn from '../img/cerrar.svg';

const Modal = ({setModal}) => {

    const handleOcultarModal = () => {
        setModal(false)
    }

  return (
      <div className='modal'>
          <div className="cerrar-modal">
              <img 
                src={CerrarBtn}
                alt="cerrar modal"
                onClick={handleOcultarModal}
              />
          </div>
      </div>
  );
};

export default Modal;
