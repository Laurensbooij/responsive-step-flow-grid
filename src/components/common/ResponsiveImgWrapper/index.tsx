import React, { FC } from 'react'

import { Container, DesktopImgWrapper, MobileImgWrapper } from './styled'

interface ResponsiveImgWrapperProps {
    desktopImg: any,
    mobileImg?: any,
    breakpoint?: string,
    className?: string,
}

const ResponsiveImgWrapper:FC<ResponsiveImgWrapperProps> = ({ desktopImg, mobileImg, breakpoint, className }) => {

    return (
        <Container className={className}>
            <DesktopImgWrapper breakpoint={breakpoint}>{desktopImg}</DesktopImgWrapper>
            <MobileImgWrapper breakpoint={breakpoint}>{mobileImg}</MobileImgWrapper>
        </Container>
    )
}

export default ResponsiveImgWrapper