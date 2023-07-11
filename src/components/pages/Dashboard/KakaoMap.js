import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useAuth from '../../hook/useJwt';

const KakaoMap = () => {
  // Make a GET request to the REST API


  const navigate = useNavigate();
  const { jwt } = useAuth()

  const { map, setMap, selectedAddress, setSelectedAddress, selectedMarker, setSelectedMarker, selectedInfo, setSelectedInfo } = useOutletContext();
  const [addresses] = useState([
    {
      address: 'Incheon Bus Terminal',
      latitude: 37.4768,
      longitude: 126.6306,
    },
    {
      address: 'Incheon Immigration Office',
      latitude: 37.4525,
      longitude: 126.6597,
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
          level: 9,
        };
        const mapInstance = new window.kakao.maps.Map(container, options);
        setMap(mapInstance);

        // Create markers for each address
        addresses.forEach((address) => {
          const markerPosition = new window.kakao.maps.LatLng(address.latitude, address.longitude);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          // Add click event listener to each marker
          window.kakao.maps.event.addListener(marker, 'click', () => {
            setSelectedMarker(marker);
            setSelectedAddress(address);
            fetchAddressInfo(address);
            //navigate(`/map/${address.id}`)
            navigate('/map/1');

          });

          marker.setMap(mapInstance);
        });

        fetch('http://jhyunleehi.ipdisk.co.kr:18080/api/v1/iotgateways', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
          .then(response => response.json())
          .then((datas) => {
            datas.forEach((d)=> {
              const markerPosition = new window.kakao.maps.LatLng(d.y, d.x);
              const marker = new window.kakao.maps.Marker({          position: markerPosition,         });
              marker.setMap(mapInstance);
              console.log(d)
            })
          })
          .catch(error => {
            console.error('Error:', error);
          });

      });

    };
  }, []);

  const fetchAddressInfo = async (address) => {
    try {

      const info = `Address information for ${address.address}`;
      setSelectedInfo(info);
    } catch (error) {
      console.error('Error fetching address info:', error);
    }
  };

  useEffect(() => {
    if (map && selectedMarker) {
      // Set the map center and level to the selected marker
      map.setCenter(selectedMarker.getPosition());
      map.setLevel(3);
    }
  }, [map, selectedMarker]);

  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '74vh' }}>
      <div id="map" style={{ width: '100%', height: '90%', border: "none", borderRadius: '3%' }}></div>

    </div>
  );
};

export default KakaoMap;