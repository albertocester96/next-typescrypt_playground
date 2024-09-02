"use client"

import { SearchBox } from '@mapbox/search-js-react';


const LocationSelector = () => {

  const italyCenter = [12.5674, 41.8719];

  return (
    
    <div className='flex justify-center w-full '>
        <SearchBox accessToken = 'pk.eyJ1IjoiYWxiZXJ0b2Nlc3RlciIsImEiOiJjbTA2c21ibHMwcnNqMnFzaGppcmh4M2hyIn0.rRQzHLNrjyHkda56ORJD4A'
            language = 'it'
            country = 'IT'
            proximity = {italyCenter}
            />
   
    </div>
  )

}

export default LocationSelector
