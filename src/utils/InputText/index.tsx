import React, { forwardRef } from 'react';
import { TextArea, Wrapper } from './StyledInputText';
import SvgWarning from "../icons/Warning";

interface IInputTextProps {
    id?: string;
    className?: string;
    onChange?: (e) => void;
    value?: any;
    errorMsg?: any;
    placeHolder?: string;
    disabled?: boolean;
    active?: boolean;
    onClick?: any;
    onLeave?: any;
}

type Ref = HTMLElement;

const TextAreaField = forwardRef<Ref, IInputTextProps>(
    ({ id, className, onChange, value, errorMsg, placeHolder, disabled, active, onClick, onLeave }, ref) => (
        <Wrapper className={className}>
            <TextArea
                className={`${active ? 'active' : ''} ${errorMsg ? 'error': ''}`}
                onClick={onClick}
                onBlur={onLeave}
                id={id}
                value={value}
                onChange={onChange}
                ref={ref}
                placeholder={placeHolder}
                disabled={disabled}/>
            {errorMsg && <p className="error-validation"><SvgWarning/>{errorMsg}</p>}
        </Wrapper>
    )
);

export default TextAreaField;
