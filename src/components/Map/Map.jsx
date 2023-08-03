import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles.js'

const Map = ({ setCoordinates, setBounds }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates = { lat: 0, lng: 0 }
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDrlOfv_JUjmPYHTTd6Bf_i07EE86qNEUY' }}
        defaultCenter={{ coordinates }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map