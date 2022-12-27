import React, {
    useState,
    useLayoutEffect
} from 'react'
import {
    GoogleMap,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";
import Info from "./Info";
import {
    LocationButton,
    ZoomButton,
    ZoomWrapper,
    MapContainer,
    Container,
    Title,
    Description
} from "./StyledRelatedContentMap";
import SvgGoogleCrossHair from "../../utils/icons/Map/GoogleCrosshair";
import SvgZoomIn from "../../utils/icons/Map/ZoomIn";
import SvgZoomOut from "../../utils/icons/Map/ZoomOut";
import {
    logoIcon,
    activeLogoIcon,
    zoomTypes,
    mapProps,
    viewports, mapItemProps
} from "./definition";
import MapControl from "./MapControl";

const mapContainerStyle = {
    width: "100%",
    height: "100%"
}

const RelatedContentMap: React.FC<mapProps> = ({ data , editMode = false}) => {
    const [activeMarker, setActiveMarker] = useState<any>('');
    const markers: mapItemProps[] = data?.datasource?.items || [];
    const title = data?.datasource?.heading?.jss.value;
    const description = data?.datasource?.description?.jss.value;
    const apiKey = data?.apiKey?.googleMapsApiKey?.value || '';

    const handleViewPort = () => {
        let viewport = '';
        if(window.innerWidth < 767 && window.innerWidth >= 575){
            viewport = viewports.SMALL
        }else if(window.innerWidth < 575) {
            viewport = viewports.EXTRA_SMALL
        }
        else {
            viewport = ''
        }
        return viewport;
    }

    const [smallViewPort, setSmallViewPort] = useState(handleViewPort());
    const [map, setMap] = React.useState<any>(null);
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    })

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setSmallViewPort(handleViewPort());
        });
    })


    const handleActiveMarker = (marker: string, mark: mapItemProps) => {
        if(!marker){
            return;
        }
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
        // calculateAndDisplayRoute(mark)
    };

    const handleOnLoad = (map: any) => {
        map.setZoom(15);
        map.setCenter({
            lat: parseFloat(markers[0].latitude) || -33.873235,
            lng: parseFloat(markers[0].longitude) || 151.206323
        });
        map.setOptions({
            scrollwheel: true,
            panControl: false,
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        });
        setMap(map);
    };

    const handleLocateCurrentPosition = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(latlng);
                setMap(map)
            });
        }
    }

    const handleChangeZoom = (type: string) => {
        if(type === zoomTypes.IN){
            map.setZoom(map.getZoom() + 1);
        }else {
            map?.setZoom(map.getZoom() - 1);
        }
    }

    return isLoaded && (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <MapContainer>
                <GoogleMap
                    onLoad={handleOnLoad}
                    onUnmount={() => setMap(null)}
                    onClick={() => setActiveMarker(null)}
                    mapContainerStyle={mapContainerStyle}
                >
                    <MapControl position="TOP_RIGHT">
                        {
                            smallViewPort !== viewports.EXTRA_SMALL ? (
                                <ZoomWrapper>
                                    <ZoomButton onClick={() => handleChangeZoom(zoomTypes.IN)}>
                                        <SvgZoomIn/>
                                    </ZoomButton>
                                    <ZoomButton onClick={() => handleChangeZoom(zoomTypes.OUT)}>
                                        <SvgZoomOut/>
                                    </ZoomButton>
                                </ZoomWrapper>
                            ): null
                        }
                        {
                            smallViewPort !== viewports.SMALL ? (
                                <LocationButton onClick={() => handleLocateCurrentPosition()}>
                                    <SvgGoogleCrossHair/>
                                </LocationButton>
                            ): null
                        }
                    </MapControl>
                    {markers.map((mark, idx) => (
                        <Marker
                            // icon={{
                            //     url: activeMarker === mark.id ? activeLogoIcon: logoIcon,
                            // }}
                            key={idx}
                            position={{lat: parseFloat(mark.latitude), lng: parseFloat(mark.longitude)}}
                            onClick={() => handleActiveMarker(mark.id, mark)}
                        >
                            {activeMarker === mark.id ? (
                                <InfoWindow
                                    onCloseClick={() => setActiveMarker(null)}
                                    options={{minWidth: 270}}
                                >
                                    <Info item={mark}/>
                                </InfoWindow>
                            ) : null}
                        </Marker>
                    ))}
                </GoogleMap>
            </MapContainer>
        </Container>
    );
}

export default RelatedContentMap;