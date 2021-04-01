import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Artista from './components/Artista';
function App() {
  //useState
  const [ datos, setDatos ] = useState({});
  const [ letra, setLetra ] = useState('');
  const [ infoartista, setInfoArtista] = useState({});
  //END useState
  useEffect(() => {
    if(Object.keys(datos).length === 0) return;
    // console.log('ejectutando');
    const consultarAPILetra = async () => {
      const { artista, musica } = datos;
      const urlLyrics = `https://api.lyrics.ovh/v1/${artista}/${musica}`;
      const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios.get(urlLyrics),
        axios.get(urlArtist)
      ]);
      setLetra(letra.data.lyrics);
      setInfoArtista(informacion.data.artists[0]);
      // setLetra(resultado.lyrics)
    }
    consultarAPILetra();
  }, [datos]);
  return (
    <Fragment>
      <Formulario 
        setDatos={setDatos}
      />

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Artista 
              infoartista={infoartista}
            />
          </div>
          <div className='col-md-6'>
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
