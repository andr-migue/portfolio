import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import './Map.css'
import { contact } from '../../contents/contact'

L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl })

export default function Map() {
    const { coords, zoom, label } = contact.location
    return (
        <div className='map'>
            <MapContainer
                center={coords}
                zoom={zoom}
                className='map__container'
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={coords}>
                    <Popup>{label}</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
