import React, {useState, useEffect} from 'react';
import TwoElementOverlapComponent from '../common-components/TwoElementOverlapComponent/TwoElementOverlapComponent'
import ImageCluster from '../common-components/ImageCluster/ImageCluster'
import './involve.css';


/**
 * @returns {React.Component}
 */
const GetInvolve = props => {
    let imageCluster = () => {
        let frontImage = <div className="involve-image"></div>
        let backImage = <div className="involve-image"></div>
        return <TwoElementOverlapComponent childForeground={frontImage} childBackground={backImage}/>
    }

    let imageCluster2 = () => {
        let sample1 = <div className="involve-image"></div>
        let sample2 = <img class="imageEnterAnimate image priority-2 order-3 cluster-design-1" src="../common-components/ImageCluster/sample-images/mountain-1" alt="gudetama-1" />
        return <ImageCluster imageElements={sample2} />
    }

    return <>
        <h1>Involvement</h1>
        <div className="involve-main">
            <div className="involve-image"></div>
            <div className="main-text">
                <h2>Get Involved</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus laborum autem molestiae a repellat fuga laboriosam eaque alias ea odit ipsa, modi aliquid voluptatem non accusamus ullam dolore temporibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, distinctio non doloribus cupiditate sit similique nostrum, assumenda, minus quam vero? Quos neque iusto velit doloremque non incidunt, rerum voluptas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo consequatur voluptates magni ad enim pariatur ut autem sunt. Ipsam quas autem quis iusto maiores nemo assumenda labore, dicta saepe.
                </p>
            </div>
		</div>
        <div className="involve-reason">
            <div>
                <h2>3 Reasons to join.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?    
                </p>
            </div>
            <div className="involve-image"></div>
        </div>
    </>;
}

export default GetInvolve;