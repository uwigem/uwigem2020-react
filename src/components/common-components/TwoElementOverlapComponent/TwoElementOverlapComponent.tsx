import React, {useState, useEffect, useRef} from 'react';
import './TwoElementOverlapComponent.css'

type TwoElementOverlapProps = {
    childForeground: JSX.Element,
    childBackground: JSX.Element,
    xOffset?: number,
    yOffset?: number,
    unit?: string  // Cannot reference parent
}

let calcStyles = (width: number,
                  height: number,
                  xOffset: number|undefined,
                  yOffset: number|undefined,
                  unit: string|undefined) => {
    let containerStyle = {
        "--offset-y": "0",
        "--offset-x": "0",
        paddingLeft: "0",
        paddingRight: "0",
        paddingTop: "0",
        paddingBottom: "0",
        height: "0",
        width: "0"
    }
    unit = unit||"px";
    yOffset = yOffset||-100;
    xOffset = xOffset||100;
    containerStyle.height = height + Math.abs(yOffset) + unit;
    containerStyle.width = width + Math.abs(xOffset) + unit;
    console.log("container height" + containerStyle.height)
    if (yOffset > 0) {
        containerStyle.paddingBottom = yOffset + unit;
        containerStyle.paddingTop = 0 + unit;
        containerStyle["--offset-y"] = yOffset + unit;
    } else {
        containerStyle.paddingBottom = 0 + unit;
        containerStyle.paddingTop = -yOffset + unit;
    }
    if (xOffset > 0) {
        containerStyle.paddingRight = xOffset + unit;
        containerStyle.paddingLeft = 0 + unit;
        containerStyle["--offset-x"] = xOffset + unit;
    } else {
        containerStyle.paddingRight = 0 + unit;
        containerStyle.paddingLeft = -xOffset + unit;
    }
    return containerStyle;
}

const TwoElementOverlapComponent: React.FC<TwoElementOverlapProps> = ({ childForeground,
                                                                        childBackground,
                                                                        xOffset,
                                                                        yOffset,
                                                                        unit}) => {
    const [containerStyle, setContainerStyle] = useState(calcStyles(0,0,0,0, undefined))
    const [childrenLoaded, setChildrenLoaded] = useState(false)
    const foreChildRef = useRef(null);
    const backChildRef = useRef(null);
    const backChildStyle = {
        left: "var(--offset-x)",
        top: "var(--offset-y)",
        zIndex: -1
    }


    // @ts-ignore
    let getDimensions = ref => {
        return [
            ref.current.offsetWidth,
            ref.current.offsetHeight
        ]
    }

    useEffect(() => {
        if (!childrenLoaded) {
            setChildrenLoaded(true)
        } else {
            let [fChildWidth, fChildHeight] = getDimensions(foreChildRef)
            let [bChildWidth, bChildHeight] = getDimensions(backChildRef)
            setContainerStyle(calcStyles(Math.max(fChildWidth, bChildWidth),
                                     Math.max(fChildHeight, bChildHeight),
                                     xOffset, yOffset, unit))
        }
    }, [childrenLoaded, unit, yOffset, xOffset])


    return (
        <div style={containerStyle} className={"two-element-overlap-container"}>
            <div ref={foreChildRef}>{childForeground}</div>
            <div ref={backChildRef} style={backChildStyle}>{childBackground}</div>
        </div>
    )

}

export default TwoElementOverlapComponent;