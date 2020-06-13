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
        return  <section id={"homepage-main-title-section"}>
                    <h1>{MAIN_SECTION_TITLE}</h1>
                    <h2>{MAIN_SECTION_DESCRIPTION}</h2>
                    <h3>
                        Currently working on{" "}
                        <a href={MAIN_SECTION_CURRENT_PROJECT_LINK}>{MAIN_SECTION_CURRENT_PROJECT_TITLE}</a>
                    </h3>
                </section>
    }

    let rightComponent = () => {
        let foreground = <img style={{ width: "300px"}} src={MAIN_SECTION_IMG_STACKED_FOREGROUND} alt={"Foreground"}/>
        let background = <img style={{ width: "300px"}} src={MAIN_SECTION_IMG_STACKED_BACKGROUND} alt={"Background"}/>
        return <TwoElementOverlapComponent childForeground={foreground} childBackground={background}/>
    }

    let leftStyle = {
        height: "inherit",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10%"
    }

    let rightStyle = {
        height: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    let style = {
        height: "inherit"
    }

    return (
        <section className={"homepage-main-section"}>
            <SideBySideComponent leftChild={leftComponent()}
                                 rightChild={rightComponent()}
                                 leftWidth={45}
                                 leftStyle={leftStyle}
                                 rightStyle={rightStyle}
                                 style={style}/>
        </section>
    )

}

export default HomepageMainSection;