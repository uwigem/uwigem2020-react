import React from 'react';
import './TwoElementOverlapComponent.css'

type TwoElementOverlapProps = {
    childForeground: JSX.Element,
    childBackground: JSX.Element,
    xOffsetPx?: number,
    yOffsetPx?: number,
    margin?: number
}

const TwoElementOverlapComponent: React.FC<TwoElementOverlapProps> = ({ childForeground,
                                                                        childBackground,
                                                                        xOffsetPx,
                                                                        yOffsetPx}) => {
    const defaultOffset = 30;
    let foregroundStyle = {
        left: (50 - (xOffsetPx||defaultOffset) / 2) + "%",
        top: (50 + (yOffsetPx||defaultOffset) / 2) + "%"
    }

    let backgroundStyle = {
        left: (50 + (xOffsetPx||defaultOffset) / 4) + "%",
        top: (50 - (yOffsetPx||defaultOffset) / 4) + "%"
    }

    return (
        <div className={"two-element-overlap-container"}>
            <div style={backgroundStyle} className={"two-element-overlap-back"}>{childBackground}</div>
            <div style={foregroundStyle} className={"two-element-overlap-front"}>{childForeground}</div>
        </div>
    )

}

export default TwoElementOverlapComponent;