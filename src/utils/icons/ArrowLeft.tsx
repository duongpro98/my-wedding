import React from 'react';
import {withSvg} from "../Svg";
import PropTypes from 'prop-types'

const SvgArrowLeft = (props) => (
    <path d="M17.995 11.9755H8.40501L12.705 7.68553C12.8933 7.49722 12.9991 7.24183 12.9991 6.97553C12.9991 6.70923 12.8933 6.45383 12.705 6.26553C12.5167 6.07722 12.2613 5.97144 11.995 5.97144C11.7287 5.97144 11.4733 6.07722 11.285 6.26553L5.28501 12.2655C5.19397 12.3606 5.12261 12.4728 5.07501 12.5955C4.975 12.839 4.975 13.1121 5.07501 13.3555C5.12261 13.4783 5.19397 13.5904 5.28501 13.6855L11.285 19.6855C11.378 19.7793 11.4886 19.8537 11.6104 19.9044C11.7323 19.9552 11.863 19.9813 11.995 19.9813C12.127 19.9813 12.2577 19.9552 12.3796 19.9044C12.5015 19.8537 12.6121 19.7793 12.705 19.6855C12.7987 19.5926 12.8731 19.482 12.9239 19.3601C12.9747 19.2382 13.0008 19.1075 13.0008 18.9755C13.0008 18.8435 12.9747 18.7128 12.9239 18.591C12.8731 18.4691 12.7987 18.3585 12.705 18.2655L8.40501 13.9755H17.995C18.2602 13.9755 18.5146 13.8702 18.7021 13.6826C18.8897 13.4951 18.995 13.2407 18.995 12.9755C18.995 12.7103 18.8897 12.456 18.7021 12.2684C18.5146 12.0809 18.2602 11.9755 17.995 11.9755Z"/>
);

SvgArrowLeft.prototype = {
    color: PropTypes.string
}
export default withSvg(24, 24)(SvgArrowLeft);