import React from 'react';
import ImageGallery from 'react-image-gallery';
import './gallery.css';

/**
 * @returns {React.Component}
 */
export default function TeamGallery() {
    const images = require('./images.json');

    return <>
        <div className="team-gallery">
            <ImageGallery
                items={images}
                lazyLoad={false}
                additionalClass="app-image-gallery"
                showBullets={true}
            />
        </div>
    </>;
}