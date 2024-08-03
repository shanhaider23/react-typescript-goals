import * as React from 'react';

type HeaderProps = React.PropsWithChildren<{ image:{
    src: string
    alt: string
} }>

const Header: React.FunctionComponent<HeaderProps> = ({ image, children }) => {
    return (<header><img {...image}/> {children}</header>);
};

export default Header;
