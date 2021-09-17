import React from 'react'

import { Container, TextCardEven, TextCardUneven, BeePathBetween, BeePathAcross } from './styled'

import themeStyles from 'utilities/themeStyles'

import content from 'data/content'

import { ReactComponent as BeePathDesktopSvg1 } from "media/svg/Bee_path-desktop-1.svg";
import { ReactComponent as BeePathDesktopSvg2 } from 'media/svg/Bee_path-desktop-2.svg'
import { ReactComponent as BeePathDesktopSvg3 } from 'media/svg/Bee_path-desktop-3.svg'
import { ReactComponent as BeePathMobileSvg1 } from 'media/svg/Bee_path-mobile-1.svg'
import { ReactComponent as BeePathMobileSvg2 } from 'media/svg/Bee_path-mobile-2.svg'

const OrderedStepFlow = () => {

    const step1content = content.onze_aanpak.step_1
    const step2content = content.onze_aanpak.step_2
    const step3content = content.onze_aanpak.step_3
    const step4content = content.onze_aanpak.step_4

    return (
        <Container>
            <TextCardEven
                title={step1content.title}
            >
                {step1content.text}
            </TextCardEven>
            <BeePathBetween 
                desktopImg={<BeePathDesktopSvg1 />}
                mobileImg={<BeePathMobileSvg1 />}
                breakpoint={themeStyles.breakpoints.desktop}
            />
            <TextCardUneven
                title={step2content.title}
            >
                {step2content.text}
            </TextCardUneven>
            <BeePathAcross 
                desktopImg={<BeePathDesktopSvg2 />}
                mobileImg={<BeePathMobileSvg2 />}
                breakpoint={themeStyles.breakpoints.desktop}
            />
            <TextCardEven
                title={step3content.title}
            >
                {step3content.text}
            </TextCardEven>
            <BeePathBetween 
                desktopImg={<BeePathDesktopSvg3 />}
                mobileImg={<BeePathMobileSvg1 />}
                breakpoint={themeStyles.breakpoints.desktop}
            />
            <TextCardUneven
                title={step4content.title}
            >
                {step4content.text}
            </TextCardUneven>
        </Container>
    )
}

export default OrderedStepFlow