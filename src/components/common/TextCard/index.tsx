import React, { FC } from 'react'
import { Container, ThemeColorElement, H2, BodyText } from './styled'

interface TextCardProps {
    title: string,
    children: string,
    colorTheme?: string,
    className?: string
}

const TextCard:FC<TextCardProps> = ( {title, colorTheme, children, className } ) => (
    <Container className={className}>
        <ThemeColorElement colorTheme={colorTheme} />
        <H2>{title}</H2>
        <BodyText>{children}</BodyText>
    </Container>
)

export default TextCard