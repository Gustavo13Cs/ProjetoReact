import React from 'react'
import PhotoGaleria from './Component/Galeria/PhotoGaleria'


function App () {

  const photos = [
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/any',
  ]

  return (
    <>
    <h1>Galeria de Fotos</h1>
    <PhotoGaleria
    photos={photos}
    />
    </>
  )
}


export default App
