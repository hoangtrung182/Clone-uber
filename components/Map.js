'use client';
import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl';

const style = {
  wrapper: 'flex-1 w-full h-full'
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;


const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

  }, [])
  return (
    <div className={style.wrapper} ref={mapContainer}>
      Map
    </div>
  )
}

export default Map