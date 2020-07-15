import React from 'react';
import './SideBySideStyle.css'

type SideBySideProps = {
    leftChild: JSX.Element,
    rightChild: JSX.Element,
    leftWidth?: number,                 // used when no leftStyle is given
    leftStyle?: {[key: string]: any},   // used by default and ignores leftWidth if present
    rightStyle?: {[key: string]: any},  // used by default and ignores leftWidth if present
    style?: {[key: string]: any},
    classNames?: string
}

export default function SideBySideComponent({leftChild,
                                            rightChild,
                                            leftWidth,
                                            leftStyle,
                                            rightStyle,
                                            style,
                                            classNames}: SideBySideProps) {
    if (leftStyle === undefined) {
        leftStyle = { width: leftWidth ? leftWidth + "%" : "50%" }
    }

    if (rightStyle === undefined) {
        rightStyle = {
            width: leftWidth ? leftWidth + "%" : "50%",
            height: "100%"
        }
    }
    rightStyle.height = "auto"

    return (
        <div style={style} className={"sbs-container " + classNames}>
            <div style={leftStyle}>
                {leftChild}
            </div>
            <div style={rightStyle}>
                {rightChild}
            </div>
        </div>
    )

}