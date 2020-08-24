import React from 'react';
import './SideBySideStyle.css'

type SideBySideProps = {
    leftChild: JSX.Element,
    rightChild: JSX.Element,
    leftWidth?: string,
    style?: {[key: string]: any},
    classNames?: string
}

export default function SideBySideComponent({leftChild,
                                            rightChild,
                                            leftWidth,
                                            classNames}: SideBySideProps) {

    let leftStyle = { 
        width: leftWidth ? leftWidth : "50%",  
    }
    let rightStyle = {
            width: leftWidth ? "calc(100% - " + leftWidth + ")" : "50%",
    }

    return (
        <div className={"sbs-container " + (classNames ? classNames : "")}>
            <div style={leftStyle}>
                {leftChild}
            </div>
            <div style={rightStyle}>
                {rightChild}
            </div>
        </div>
    )

}