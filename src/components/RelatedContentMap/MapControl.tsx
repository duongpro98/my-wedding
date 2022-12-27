import React, {
    useEffect,
    useRef
} from "react";
import { mapControlProps } from "./definition";
import { useGoogleMap } from "@react-google-maps/api";

const MapControl = (props: React.PropsWithChildren<mapControlProps>) => {
    const map = useGoogleMap();
    const ref = useRef<any>();
    useEffect(() => {
        if (map && ref) {
            map.controls[window.google.maps.ControlPosition[props.position]].push(
                ref.current
            );
        }
    }, [map, ref]);
    return <div ref={ref}>{props.children}</div>;
};

export default MapControl;