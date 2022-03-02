import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

const Modal = ({
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  gastoEditar
}) => {

  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return;
    }

    guardarGasto({nombre, cantidad, categoria})
  }

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
      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
              id='nombre' 
              type="text"
              placeholder='Agrega el nombre del gasto'
              value={nombre}
              onChange={ e => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad a gastar</label>
          <input
              id='cantidad' 
              type="number"
              placeholder='Añade la cantidad del gasto. Ej. 300'
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Categoría</label>
          <select 
              id="categoria"
              value={categoria}
              onChange={ e => setCategoria(e.target.value) }
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
