import styled from 'styled-components'
import themeStyles from 'utilities/themeStyles'

export const Container = styled.div`
    position: relative;
    grid-gap: 10px;
    height: 100%;
    min-height: 150px;
    padding: 30px 30px 30px 40px;
    background-color: #fff;
    box-shadow: ${themeStyles.shadows.dropShadow};
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: ${themeStyles.breakpoints.desktop}) {
        padding: 40px 40px 40px 50px;
    }
`

export const ThemeColorElement = styled.div<{colorTheme?: string}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background-color: ${props => props.colorTheme ? props.colorTheme : themeStyles.colors.primary };
`

export const H2 = styled.div`
    margin: 0 0 8px 0;
    font-family: 'nunito', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: ${themeStyles.colors.primaryText};

    @media (min-width: ${themeStyles.breakpoints.desktop}) {
        margin: 0 0 16px 0;
        font-size: 32px;
        line-height: 40px;
    }
`

export const BodyText = styled.p`
    margin: 0;
    font-family: 'nunito', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: ${themeStyles.colors.primaryText};

    @media (min-width: ${themeStyles.breakpoints.desktop}) {
        font-size: 18px;
        line-height: 26px;
    }
`