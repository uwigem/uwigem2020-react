import React from 'react';
import ImageGallery from 'react-image-gallery';
import './gallery.css';

/**
 * @returns {React.Component}
 */
const TeamGallery = (props) => {
    const images = [
        {
          original: 'https://placekitten.com/1000/600',
          thumbnail: 'https://placekitten.com/1000/600',
        },
        {
            original: 'https://placekitten.com/600/400',
            thumbnail: 'https://placekitten.com/600/400',
        },
        {
            original: 'https://placekitten.com/600/350',
            thumbnail: 'https://placekitten.com/600/350',
        },
        {
            original: 'https://placekitten.com/600/450',
            thumbnail: 'https://placekitten.com/600/450',
        },
        {
            original: 'https://placekitten.com/500/250',
            thumbnail: 'https://placekitten.com/500/250',
        },
        {
            original: 'https://placekitten.com/600/300',
            thumbnail: 'https://placekitten.com/600/300',
        },
      ];

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

export default TeamGallery;