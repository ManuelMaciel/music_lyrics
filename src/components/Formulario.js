import React, { useState } from 'react';

const Formulario = ({setDatos}) => {
  //useStates
  const [ busqueda, setBusqueda ] = useState({
    artista : '',
    musica : ''
  });

  const [ error, setError ] = useState(false);
  //end useStates
  const { artista, musica } = busqueda;

  const actualizarBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const buscarInfo = e => {
    e.preventDefault();

    if(artista.trim() === '' || musica.trim() === ''){
      setError(true);
      return;
    }
    setError(false);
    setDatos(busqueda);

  }
  return (  
    <div className='bg-info'>
      {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios!</p> : null}
      <div className='container'>
        <div className='row'>
          <form
            onSubmit={buscarInfo}
            className='col card text-white bg-transparent mb-5 pt-5 pb-2'
          >
            <fieldset>
              <legend className='text-center'>Buscador Letras y Canciones</legend>
              <div className='row'>
                <div className='col-md-6'>
                <div className='form-group'>
                    <label>Artista</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='artista'
                      placeholder='Nombre del artista'
                      onChange={actualizarBusqueda}
                      value={artista}
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Musica</label>
                    <input 
                      type='text'
                      className='form-control'
                      name='musica'
                      placeholder='Nombre de la musica'
                      onChange={actualizarBusqueda}
                      value={musica}
                    />
                  </div>
                </div>
              </div>
              <button 
                type='submit'
                className='btn btn-primary float-right'
              >Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Formulario;