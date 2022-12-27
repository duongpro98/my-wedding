import React from 'react';

export type SvgProps = {
    children?: any;
    title?: string;
    titleId?: string;
    role?: string;
    ariaLabelledBy?: string;
    ariaHidden?: boolean;
    ariaLabel?: string;
    fill?: string;
};

const Title = ({ id, title }: any) => {
    if (!id && !title) {
        return null;
    }

    if (!id) {
        return <title>{title}</title>;
    }

    return <title id={id}>{title}</title>;
};

const defaultProps: any = {
    role: 'img'
};

const Svg: React.FC<SvgProps> = (props) => {
    const merged = {
        ...defaultProps,
        ...props
    };

    const {
        width,
        height,
        children,
        title,
        titleId,
        role,
        ariaLabelledBy,
        ariaHidden,
        ariaLabel
    } = merged;

    let svgProps = {
        ...(role && { role }),
        ...(ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy }),
        ...(ariaHidden && { 'aria-hidden': ariaHidden }),
        ...(ariaLabel && { 'aria-label': ariaLabel })
    };

    let titleProps = {
        ...(title && { title }),
        ...(titleId && { id: titleId })
    };

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...svgProps}
        >
            <Title {...titleProps} />
            {children}
        </svg>
    );
};

export default Svg;

export const withSvg = (width: any, height: any) =>
    function<T extends SvgProps = SvgProps>(WrappedComponent: React.ComponentType<T>) {
        // Try to create a nice displayName for React Dev Tools.
        const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

        const withSvg: React.FC<T> = (props: T) => {
            return (
                <Svg width={width} height={height} {...props}>
                    <WrappedComponent {...(props as T)} />
                </Svg>
            );
        };

        withSvg.displayName = `withSvg(${displayName})`;

        return withSvg;
    };
