import React from 'react';
import styles from './BusinessCard.module.css'

/**
 * @returns {React.Component} return a business card for iGEM
 */
const BusinessCard = (props) => {   
    return <>
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                WANT TO GET YOUR BUSINESS PROMOTED?
            </div>
            <div className={styles.cardDescription}>
                Our sponsors get attentions from 100+ countries and 500+ cities
            </div>
            <div className={styles.more}>
                by supporting this yearly international competition
            </div>
            <div className={styles.contact}>
                <div>Contact: </div>
                <div className={styles.logos}>
                    <div className={styles.logo}>
                        <a href="https://www.facebook.com/UWiGEMTeam/">
                        <img src="https://vignette.wikia.nocookie.net/logopedia/images/f/fb/Facebook_icon_2013.svg/revision/latest/scale-to-width-down/340?cb=20130501121248" alt="Washington iGEM Facebook" className={styles.logoImg}/></a>
                    </div>
                    <div className={styles.logo}>
                        <a href="https://www.instagram.com/washington_igem/">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174855.svg" alt="Washington iGEM Instagram" className={styles.logoImg}/></a>
                    </div>

                    <div className={styles.logo}>
                        <a href="https://github.com/uwigem/uwigem2017">
                        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Washington iGEM Github" className={styles.logoImg}/></a>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default BusinessCard;