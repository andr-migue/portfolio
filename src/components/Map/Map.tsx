import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import './Map.css'
import { contact } from '../../contents/contact'

const markerIcon = L.icon({
    iconUrl: '/icons/map-marker.svg',
    iconSize: [32, 44],
    iconAnchor: [16, 43],
    popupAnchor: [0, -38],
})

export default function Map() {
    const { coords, zoom, label } = contact.location
    return (
        <div className='map'>
            <MapContainer
                center={coords}
                zoom={zoom}
                className='map__container'
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={coords} icon={markerIcon}>
                    <Popup>{label}</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
