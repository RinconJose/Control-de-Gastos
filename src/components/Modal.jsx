import CerrarBtn from '../img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const handleOcultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 500);
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
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
              id='nombre' 
              type="text"
              placeholder='Agrega el nombre del gasto'
          />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad a gastar</label>
          <input
              id='cantidad' 
              type="number"
              placeholder='Añade la cantidad del gasto. Ej. 300'
          />
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Categoría</label>
          <select 
              id="categoria"
          >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscrpciones</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Añadir gasto" 
        />
      </form>
    </div>
  );
};

export default Modal;
