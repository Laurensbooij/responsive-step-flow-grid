import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.div`
    width: 100%;
`

interface ImgWrapperProps {
    breakpoint?: string,
}

export const DesktopImgWrapper = styled.div<ImgWrapperProps>`

    svg {
        display: none;

        @media (min-width: ${props => props.breakpoint ? props.breakpoint : themeStyles.breakpoints.tablet}) {
            display: inline-block;
        }
    }
`

export const MobileImgWrapper = styled.div<ImgWrapperProps>`
    svg {
        display: inline-block;

        @media (min-width: ${props => props.breakpoint ? props.breakpoint : themeStyles.breakpoints.tablet}) {
            display: none;
        }
    }
`