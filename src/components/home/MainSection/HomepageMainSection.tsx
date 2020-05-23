import React from 'react'
import SideBySideComponent from "../../common-components/SideBySideComponent/SideBySideComponent"
import TwoElementOverlapComponent from "../../common-components/TwoElementOverlapComponent/TwoElementOverlapComponent"
import './HomepageMainSection.css'
import {MAIN_SECTION_TITLE,
        MAIN_SECTION_DESCRIPTION,
        MAIN_SECTION_IMG_STACKED_FOREGROUND,
        MAIN_SECTION_IMG_STACKED_BACKGROUND,
        MAIN_SECTION_CURRENT_PROJECT_TITLE,
        MAIN_SECTION_CURRENT_PROJECT_LINK} from '../../_data/HomepageData/HomepageConstants'

const HomepageMainSection = () => {

    let leftComponent = () => {
        return  <>
                    <h1>{MAIN_SECTION_TITLE}</h1>
                    <h2>{MAIN_SECTION_DESCRIPTION}</h2>
                    <h3>
                        Currently working on{" "}
                        <a href={MAIN_SECTION_CURRENT_PROJECT_LINK}>{MAIN_SECTION_CURRENT_PROJECT_TITLE}</a>
                    </h3>
                </>
    }

    let rightComponent = () => {
        let foreground = <img style={{ width: "500px"}} src={MAIN_SECTION_IMG_STACKED_FOREGROUND} alt={"Foreground"}/>
        let background = <img style={{ width: "500px"}} src={MAIN_SECTION_IMG_STACKED_BACKGROUND} alt={"Background"}/>
        return <TwoElementOverlapComponent childForeground={foreground} childBackground={background}/>
    }

    return (
        <section className={"homepage-main-section"}>
            <SideBySideComponent leftChild={leftComponent()} rightChild={rightComponent()} leftWidth={45}/>
        </section>
    )

}

export default HomepageMainSection;