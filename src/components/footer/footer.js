import React, {useState, useEffect} from 'react';
import './footer.css';

const Footer = props => {
  return (
    <div id="foot">
      <div class="jumbotron-fluid bg-dark jumbotron-light bottomBar" style={{minWidth: '335px'}}>
        <div class="container-fluid">
          <div class="row" style= {{textAlign: 'center'}}>
            <div class="col" style= {{textAlign: 'center'}}>
              <a href="https://www.facebook.com/UWiGEMTeam/"><img src="http://2017.igem.org/wiki/images/1/1e/T--Washington--FacebookIcon.png" alt="Washington iGEM Facebook" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="https://www.instagram.com/washington_igem/"><img src="http://2017.igem.org/wiki/images/5/50/T--Washington--instagramIcon.png" alt="Washington iGEM Instagram" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="http://2019.igem.org/Team:Washington"><img src="http://2017.igem.org/wiki/images/4/4c/T--Washington--Logo.png" alt="Washington iGEM" style={{height: '65px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="https://github.com/uwigem/uwigem2017"><img src="http://2017.igem.org/wiki/images/e/ec/T--Washington--GithubIcon.png" alt="Washington iGEM Github" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="mailto:uwigem@uw.edu"><img src="http://2017.igem.org/wiki/images/7/7e/T--Washington--EmailIcon.png" alt="Email Washington iGEM" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
    </div></div></div></div></div>
  )
}

export default Footer;