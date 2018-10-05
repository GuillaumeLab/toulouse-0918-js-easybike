import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const stations = require('./../static-data-JCDBikes');

// const stations = [
//     {
//         "number": 55,
//         "name": "00055 - ST SERNIN G. ARNOULT",
//         "address": "2 RUE GATIEN ARNOULT",
//         "latitude": 43.608951960496405,
//         "longitude": 1.441003598726198
//     },
//     {
//         "number": 195,
//         "name": "00195 - LARROUSSE -RIEUX",
//         "address": "FACE 15 RUE PIERRE LAROUSSE",
//         "latitude": 43.59723540303583,
//         "longitude": 1.45907112459247
//     },
//     {
//         "number": 29,
//         "name": "00029 - VALADE",
//         "address": "31 RUE VALADE",
//         "latitude": 43.605071904633625,
//         "longitude": 1.437032051956223
//     },
//     {
//         "number": 280,
//         "name": "280 - CHARBONNIERE",
//         "address": "RUE DE LA CHARBONNIERE ANGLE RUE DES PALMIERS 31000 TOULOUSE",
//         "latitude": 43.57383,
//         "longitude": 1.44871
//     },
//     {
//         "number": 156,
//         "name": "00156 - METRO EMPALOT",
//         "address": "38 AV JEAN MOULIN FACE DEBOUCHE RUE DE CANNES",
//         "latitude": 43.579737115748195,
//         "longitude": 1.441783289134449
//     },
//     {
//         "number": 242,
//         "name": "00242 -  RAIMBAUD / COLETTE",
//         "address": "RUE RAIMBAUD ANGLE RUE COLETTE",
//         "latitude": 43.633866178151905,
//         "longitude": 1.437493796200118
//     },
//     {
//         "number": 224,
//         "name": "00224 - CAMPUS SUPAERO",
//         "address": "AVENUE EDOUARD BELIN FACE CHÂTEAU DU CREPS",
//         "latitude": 43.566595761363736,
//         "longitude": 1.474881961695726
//     },
//     {
//         "number": 229,
//         "name": "00229 - IUT RANGUEIL",
//         "address": "129 AV DE RANGUEIL",
//         "latitude": 43.571433064051334,
//         "longitude": 1.46278065695466
//     },
//     {
//         "number": 154,
//         "name": "00154 - GALLOIS",
//         "address": "RUE DES GALLOIS",
//         "latitude": 43.58995890864312,
//         "longitude": 1.4420311550308
//     },
//     {
//         "number": 96,
//         "name": "00096 - MEDIATHEQUE",
//         "address": "50 RUE DU GENERAL COMPANS",
//         "latitude": 43.60974282737991,
//         "longitude": 1.455204795385279
//     },
//     {
//         "number": 65,
//         "name": "00065 - VERDIER - GRAND ROND",
//         "address": "2 ALL FORAIN FRANCOIS VERDIER",
//         "latitude": 43.597074846780274,
//         "longitude": 1.452605307400692
//     },
//     {
//         "number": 22,
//         "name": "00022 - CARNOT ROLAND",
//         "address": "24 BD LAZARE CARNOT",
//         "latitude": 43.60221990815785,
//         "longitude": 1.45195665819857
//     },
//     {
//         "number": 236,
//         "name": "00236 - TOEC / LEMIRE",
//         "address": "RUE DE L'ABBE JULES LEMIRE",
//         "latitude": 43.59729443895585,
//         "longitude": 1.403872948950036
//     },
//     {
//         "number": 111,
//         "name": "00111 - MINIMES PASSERELLE",
//         "address": "38B BD DES MINIMES",
//         "latitude": 43.615259799224134,
//         "longitude": 1.442921175845342
//     },
//     {
//         "number": 152,
//         "name": "00152 - MAZADES",
//         "address": "10 AV DES MAZADES",
//         "latitude": 43.624183134252704,
//         "longitude": 1.438302180907754
//     },
//     {
//         "number": 243,
//         "name": "00243 - ETATS-UNIS / FERRY",
//         "address": "96 av des Etats-Unis angle rue Jules Ferry",
//         "latitude": 43.632641237523,
//         "longitude": 1.43180804154469
//     },
//     {
//         "number": 174,
//         "name": "00174 - MAUNOURY / MELA",
//         "address": "41 AV MAURICE BOURGES MAUNOURY",
//         "latitude": 43.63692179179762,
//         "longitude": 1.452693250180783
//     },
//     {
//         "number": 276,
//         "name": "00276 - MARIN REBOUL",
//         "address": "chemin du Marin angle chemin du Reboul",
//         "latitude": 43.58132,
//         "longitude": 1.37975
//     },
//     {
//         "number": 77,
//         "name": "00077 - PLACE INT SAINT CYPRIEN",
//         "address": "2 PL INTERIEURE ST CYPRIEN",
//         "latitude": 43.597835830061406,
//         "longitude": 1.431605284631358
//     },
//     {
//         "number": 137,
//         "name": "00137 - BRUNHES-FONTAINES",
//         "address": "47 BD JEAN BRUNHES",
//         "latitude": 43.60094924792523,
//         "longitude": 1.420275802412521
//     }
// ]

const stationsList = stations.map((station) => {
    return {
        "name": station.name,
        "latlng": [station.latitude, station.longitude]
    }
})


const MarkersLayer = () => {
    const LeafletMarkers = stationsList.map(marker =>
        <Marker position={marker.latlng} key={`marker_${marker.name}`}>
            <Popup>
                <span>{marker.name}</span>
            </Popup>
        </Marker>
    );
    return (
        <div>
            {LeafletMarkers}
        </div>
    );
}

export default MarkersLayer  