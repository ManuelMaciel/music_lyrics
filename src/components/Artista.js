import React from 'react';

const Artista = ({infoartista}) => {
  if(Object.keys(infoartista).length === 0) return null;

  //destructuring
  const {strArtistThumb, strFacebook, strTwitter, strLastFMChart, intBornYear, intDiedYear, strArtist, strBiographyEN, strBiographyES, strCountry, strCountryCode, strGenre} = infoartista;

  return (  
    <div className='card border-light pt-4'>
      <div className='card-header bg-primary text-light font-weight-bold'>
        Informacion Artista
      </div>
      <div className='card-body'>
        <img 
          src={strArtistThumb}
          alt={strArtist}
        />
        <p className='card-text'>Genero: <b>{strGenre}</b></p>
        <p className='card-text'>Nacimiento: <b>{intBornYear}</b></p>
        <p className='card-text'>Muerte: <b>{intDiedYear === null ? <span>-</span> : (intDiedYear)}</b></p>
        <p className='card-text'>Ciudad: <b>{strCountry}</b></p>
        <p className='card-text'>Pais: <b>{strCountryCode}</b></p>
        <h2 className='card-text'><b>Biografia:</b></h2>
        <p className='card-text'>{strBiographyES === null ? (strBiographyEN) : (strBiographyES)}</p>
        <p className='card-text'>
          {strFacebook === null ?
            null : 
            <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          }
          {strTwitter === null ?
            null : 
            <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          }
          {strLastFMChart === null ? 
            null :
            <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-lastfm"></i>
            </a>
          }
        </p>
      </div>
    </div>
  );
}
 
export default Artista;