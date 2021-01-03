import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div id="foot">
      <div className="jumbotron-fluid bg-dark jumbotron-light bottomBar" style={{minWidth: '335px'}}>
        <div className="container-fluid">
          <div className="row" style= {{textAlign: 'center'}}>
            <div className="col" style= {{textAlign: 'center'}}>
              <a href="https://www.facebook.com/WashingtoniGEM"><img src="https://2017.igem.org/wiki/images/1/1e/T--Washington--FacebookIcon.png" alt="Washington iGEM Facebook" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="https://www.instagram.com/washington_igem/"><img src="https://2017.igem.org/wiki/images/5/50/T--Washington--instagramIcon.png" alt="Washington iGEM Instagram" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="http://2019.igem.org/Team:Washington"><img src="https://2017.igem.org/wiki/images/4/4c/T--Washington--Logo.png" alt="Washington iGEM" style={{height: '65px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="https://github.com/uwigem"><img src="https://2017.igem.org/wiki/images/e/ec/T--Washington--GithubIcon.png" alt="Washington iGEM Github" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
              
              <a href="mailto:uwigem@uw.edu"><img src="https://2017.igem.org/wiki/images/7/7e/T--Washington--EmailIcon.png" alt="Email Washington iGEM" style={{height: '50px', width: 'auto', padding: '1px'}}/></a>
    </div></div></div></div></div>
  )
}

export default Footer;