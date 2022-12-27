import React, { ReactNode, forwardRef } from 'react';

/**
 * Nav Item Footer and Main
 */
export type LinkProps = {
  url: string;
  type?: string;
  target?: string;
  rel?: string;
};

type LinkComponentProps = {
  to?: string;
  href?: string;
  target?: string;
  as?: string;
  ref?: React.Ref<HTMLElement>;
  className?: string;
  onClick?: (event: Event) => void;
  rel?: string;
};

export type NavItemProps = {
  children: ReactNode;
  StyledLink: React.ComponentType<LinkComponentProps>;
  link: LinkProps;
  ariaLabelledBy?: string;
  className?: string;
  tabIndex?: string | number;
  additionalStyledLinkProps?: any;
};

export type Ref = HTMLElement;

const NavItem = forwardRef<Ref, any>(
  (
    {
      children,
      StyledLink,
      link,
      ariaLabelledBy,
      className,
      additionalStyledLinkProps = {},
      ...rest
    },
    ref
  ) => {
    if (!children) {
      return null;
    }

    let props: any = {};

    if (ariaLabelledBy) {
      props['aria-labelledby'] = ariaLabelledBy;
    }

    if (link) {
      props.target = link.target || null;

      const regexp = new RegExp("^https?://", "i");
      
      const linkType = link?.type || null;

      if (linkType && (linkType.toLowerCase() === 'external' || linkType.toLowerCase() === 'mailto' || linkType.toLowerCase() === 'anchor' || linkType.toLowerCase() === 'javascript' || ((linkType.toLowerCase() === 'internal' || linkType.toLowerCase() === 'media') && regexp.test(link.url)))) {
        props.as = 'a';
        props.href = link.url;
      } else {
        // internal link (default)
        props.to = link.url;
      }

      if (link.rel) {
        props.rel = link.rel;
      } else if (link?.target === '_blank' && !link.rel) {
        // information disclosure attack prevention keeps target blank site from getting ref to window.opener
        props.rel = 'noopener noreferrer';
      }
    } else {
      props.as = 'span';
    }

    return (
      <StyledLink
        className={className}
        ref={ref}
        {...props}
        {...rest}
        {...additionalStyledLinkProps}
      >
        {children}
      </StyledLink>
    );
  }
);

export default NavItem;
