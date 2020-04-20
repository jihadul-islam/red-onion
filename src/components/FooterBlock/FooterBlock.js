import React from 'react';
import './FooterBlock.css';
import logo from '../../resources/logo.png';

const FooterBlock = () => {
    return (
        <div className="footer-block">
            <div className="row">
                <div className="col-md-">
                    <img className="footer-img" src={logo} alt=""/>
                </div>
                <div className="last-footer row">
                    <div className="col-md-4">
                    <a href='/'>About Online Food</a><br/>
                    <a href='/'>Read Our Blog</a><br/>
                    <a href='/signup'>Sign Up For Delivery</a><br/>
                    <a href='/'>Add Your Restaurant</a><br/>
                </div>
                    <div  className="col-md-4">
                    <a href='/'>Get Help</a><br/>
                    <a href='/'>Read FAQs</a><br/>
                    <a href='/'>View All Cities</a><br/>
                    <a href='/'>Restaurants Near Me</a><br/>
                    <p className="copyright"><small>Copyright © 2020 Red Onion Foods</small></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FooterBlock;