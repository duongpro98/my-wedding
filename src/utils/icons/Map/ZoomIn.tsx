import React from 'react';
import {withSvg} from "../../Svg";
import PropTypes from 'prop-types'

const SvgZoomIn = (props) => (
    <>
        <path d="M12.997 11.0029L13.0041 4.9289C13.0041 4.66259 12.8983 4.4072 12.71 4.2189C12.5217 4.03059 12.2663 3.9248 12 3.9248C11.7337 3.9248 11.4783 4.03059 11.29 4.2189C11.1017 4.4072 10.9959 4.66259 10.9959 4.92889L11.0029 11.0029L4.9289 10.9959C4.66259 10.9959 4.4072 11.1017 4.2189 11.29C4.03059 11.4783 3.9248 11.7337 3.9248 12C3.9248 12.2663 4.03059 12.5217 4.2189 12.71C4.4072 12.8983 4.66259 13.0041 4.9289 13.0041L11.0029 12.997L10.9959 19.071C10.9953 19.203 11.0209 19.3339 11.0712 19.4559C11.1215 19.578 11.1954 19.6889 11.2888 19.7822C11.3821 19.8756 11.493 19.9495 11.6151 19.9998C11.7371 20.0501 11.868 20.0757 12 20.0751C12.132 20.0757 12.2628 20.0501 12.3849 19.9998C12.5069 19.9495 12.6178 19.8756 12.7112 19.7822C12.8045 19.6889 12.8785 19.578 12.9287 19.4559C12.979 19.3339 13.0046 19.203 13.0041 19.071L12.997 12.997L19.071 13.0041C19.203 13.0046 19.3339 12.979 19.4559 12.9287C19.578 12.8785 19.6889 12.8045 19.7822 12.7112C19.8756 12.6178 19.9495 12.5069 19.9998 12.3849C20.0501 12.2628 20.0757 12.132 20.0751 12C20.0757 11.868 20.0501 11.7371 19.9998 11.6151C19.9495 11.493 19.8756 11.3821 19.7822 11.2888C19.6889 11.1954 19.578 11.1215 19.4559 11.0712C19.3339 11.0209 19.203 10.9953 19.071 10.9959L12.997 11.0029Z"
              fill={props.color || "#041C2C"}/>
        <path d="M11 11H13V13H11V11Z" fill={props.color || "#041C2C"}/>
    </>

);

SvgZoomIn.prototype = {
    color: PropTypes.string
}
export default withSvg(24, 24)(SvgZoomIn);
