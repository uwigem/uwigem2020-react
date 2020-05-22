import React from 'react';
import './SideBySideStyle.css'

type SideBySideProps = {
    leftChild: JSX.Element,
    rightChild: JSX.Element,
    leftWidth?: number
}

const SideBySideComponent: React.FunctionComponent<SideBySideProps> = ({ leftChild,
                                                                           rightChild, leftWidth }) => {
    return (
        <div className="sbs-container">
            <div style={{
                width: leftWidth ? leftWidth + "%" : "50%"
            }}>
                {leftChild}
            </div>
            <div style={{
                width: leftWidth ? 100 - leftWidth + "%" : "50%",
                height: "auto"
            }}>
                {rightChild}
            </div>
        </div>
    )

}

export default SideBySideComponent;