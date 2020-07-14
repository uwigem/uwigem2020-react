import React from 'react';
import './SideBySideStyle.css'

type SideBySideProps = {
    leftChild: JSX.Element,
    rightChild: JSX.Element,
    leftWidth?: number,
    leftStyle?: {[key: string]: any},
    rightStyle?: {[key: string]: any},
    style?: {[key: string]: any},
    classNames?: string
}

const SideBySideComponent: React.FunctionComponent<SideBySideProps> = ({leftChild,
                                                                        rightChild,
                                                                        leftWidth,
                                                                        leftStyle,
                                                                        rightStyle,
                                                                        style,
                                                                        classNames}) => {
    if (leftStyle !== undefined) {
        leftStyle.width = leftWidth ? leftWidth + "%" : "50%"
    } else {
        leftStyle = { width: leftWidth ? leftWidth + "%" : "50%" }
    }

    if (rightStyle !== undefined) {
        rightStyle.width = leftWidth ? 100 - leftWidth + "%" : "50%"
    } else {
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

export default SideBySideComponent;