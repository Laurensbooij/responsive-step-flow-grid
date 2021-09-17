
import styled from 'styled-components'

import  TextCard from 'components/common/TextCard';
import ResponsiveImgWrapper from 'components/common/ResponsiveImgWrapper'

import themeStyles from 'utilities/themeStyles';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 40px;
    grid-template-rows: 200px 150px;
    row-gap: 10px;
    align-items: center;
`

export const TextCardEven = styled(TextCard)`
    grid-column: span 12;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        grid-column: 3 / 11;
    }

    @media (min-width: ${themeStyles.breakpoints.desktop}) {
        grid-column: 1 / 6;
    }
` 

export const TextCardUneven = styled(TextCard)`
    grid-column: span 12;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        grid-column: 3 / 11;
    }

    @media (min-width: ${themeStyles.breakpoints.desktop}) {
        grid-column: 8 / 13;
    }
`



export const BeePathBetween = styled(ResponsiveImgWrapper)`
    grid-column: span 12;
    display: flex;
    justify-content: center;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        grid-column: 6 / 8;
    }


`

export const BeePathAcross = styled(ResponsiveImgWrapper)`
    grid-column: span 12;
    display: flex;
    justify-content: center;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        grid-column: 4 / 10;
    }

`