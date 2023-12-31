import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useAuth from '../../hook/useJwt';
import Red from "../../../images/663342.png"
import Broken from "../../../images/consequence-icon.svg"
import Fire from "../../../images/653276_fire_candle_flame_hot_light_icon.png"
import { Modal } from 'bootstrap';


const KakaoMap = () => {
    const navigate = useNavigate();
    const {jwt} = useAuth()
    // Hover the mouse event

    //const [isModalOpen, setIsModalOpen] = useState(false)
   // const [hoveredAddress, setHoveredAddress] =useState('')

    

  const {map, setMap, selectedAddress, setSelectedAddress, selectedMarker, setSelectedMarker, selectedInfo,setSelectedInfo} = useOutletContext();
  const [addresses] = useState([
    {
      address: 'Incheon Bus Terminal',
      status: 'active',
      latitude: 37.4768,
      longitude: 126.6306,
    },
    {
      address: 'Incheon Immigration Office',
      latitude: 37.4525,
      status: 'broken',
      longitude: 126.6597,
    },
    {
      address: 'Incheon Immigration Office',
      latitude: 55.4525,
      status: 'fire',
      longitude: 223.6597,
    },
    {
      address: 'School 1 Address',
      latitude: 37.4700,
      status: 'active',
      longitude: 126.6450,
    },
    {
      address: 'School 2 Address',
      latitude: 37.4680,
      status: 'broken',
      longitude: 126.6570,
    },
    {
      address: 'School 3 Address',
      latitude: 37.4750,
      status: 'fire',
      longitude: 126.6480,
    },
    {
      address: 'School 4 Address',
      latitude: 37.4730,
      status: 'active',
      longitude: 126.6540,
    },
    {
      address: 'School 5 Address',
      latitude: 37.4685,
      status: 'broken',
      longitude: 126.6430,
    },
    {
      address: 'School 6 Address',
      latitude: 37.4720,
      status: 'fire',
      longitude: 126.6520,
    },
    {
      address: 'School 7 Address',
      latitude: 37.4700,
      status: 'active',
      longitude: 126.6500,
    },
    {
      address: 'School 8 Address',
      latitude: 37.4690,
      status: 'broken',
      longitude: 126.6550,
    },
    {
      address: 'School 9 Address',
      latitude: 37.4660,
      status: 'fire',
      longitude: 126.6480,
    },
    {
      address: 'School 10 Address',
      latitude: 37.4715,
      status: 'active',
      longitude: 126.6450,
    },
  ]);

  useEffect(() => {
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=dd3b98a12bc700e0583223f92fe9a912&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.4000, 126.9595),
          level: 8,
        };
        const mapInstance = new window.kakao.maps.Map(container, options);
        setMap(mapInstance);

        // Create markers for each address
        addresses.forEach((address) => {
          const markerPosition = new window.kakao.maps.LatLng(address.latitude, address.longitude);


         
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image:  new window.kakao.maps.MarkerImage(address.status ==="active" ? Red : address.status ==="fire" ? Fire : Broken,  new window.kakao.maps.Size(35,35))
           
          });

          // Add click event listener to each marker
          window.kakao.maps.event.addListener(marker, 'click', () => {
            setSelectedMarker(marker);
            setSelectedAddress(address);
            //navigate(`/map/${address.id}`)
            navigate('/map/1');
            
          });

          // showing the address when hovering

        /* window.kakao.maps.event.addListener(marker, 'mouseover', (event) => {
          
          setHoveredAddress(address.address)
          setIsModalOpen(true)
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          setHoveredAddress('')
          setIsModalOpen(false)
        });
       */


          marker.setMap(mapInstance);
        });
      });
    };
  }, []);

  useEffect(() => {
    if (map && selectedMarker) {
      // Set the map center and level to the selected marker
      map.setCenter(selectedMarker.getPosition());
      map.setLevel(3);
    }
  }, [map, selectedMarker]);

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' ,height:'74vh'}}>
      <div  id="map" style={{ width: '100%', height: '90%', border:"none", borderRadius:'3%'}}></div>
    </div>
  );
};

export default KakaoMap;