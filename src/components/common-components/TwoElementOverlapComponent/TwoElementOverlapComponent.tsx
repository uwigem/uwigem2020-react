import React from 'react';
import './TwoElementOverlapComponent.css'

type TwoElementOverlapProps = {
    childForeground: JSX.Element,
    childBackground: JSX.Element,
    xOffsetPercent?: number,
    yOffsetPercent?: number,
    margin?: number
}

const TwoElementOverlapComponent: React.FC<TwoElementOverlapProps> = ({ childForeground,
                                                                        childBackground,
                                                                        xOffsetPercent,
                                                                        yOffsetPercent}) => {
    const defaultOffset = 30;
    let foregroundStyle = {
        left: (50 - (xOffsetPercent||defaultOffset) / 2) + "%",
        top: (50 + (yOffsetPercent||defaultOffset) / 2) + "%"
    }

    let backgroundStyle = {
        left: (50 + (xOffsetPercent||defaultOffset) / 2) + "%",
        top: (50 - (yOffsetPercent||defaultOffset) / 2) + "%"
    }

    return (
        <div className={"two-element-overlap-container"}>
            <div style={foregroundStyle} className={"two-element-overlap-front"}>{childForeground}</div>
            <div style={backgroundStyle} className={"two-element-overlap-back"}>{childBackground}</div>
        </div>
    )

}

export default TwoElementOverlapComponent;