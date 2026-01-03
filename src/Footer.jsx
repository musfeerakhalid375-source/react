import React from 'react'
import logo from '../../project1/src/assets/images/tp_logo.svg'
function Footer() {
    return (
        <>
        <img id='img1' src={logo} alt="" width={'10%'} height={'10%'} />




            <div className="section5">
                <div className="4">
                    <h4 style={{ borderBottom: '2px solid black ', padding: '0.4rem' }}>LEGAL</h4>
                    <span>Privacy Notice</span> {<br/>}
                    <span>Terms & Conditions</span>{<br/>}
                    <span>Legal Policies</span>{<br/>}
                    <span>Fraudulent Booking Websites</span>{<br/>}
                </div>
                <div className="4">
                    <h4 className='h4' style={{ borderBottom: '2px solid black ', padding: '0.4rem' }}>CAREERS</h4>
                    <span>Join Us</span>{<br/>}
                    <span>View Job Portal</span>

                </div>

                <div className="4">
                    <h4 className='h4' style={{ borderBottom: '2px solid black ', padding: '0.4rem' }}>CONTACT</h4>
                    <span>Sales</span>{<br/>}
                    <span>Support</span>{<br/>}
                    <span>Press Office</span>{<br/>}
                    <span>Brand Guidelines</span>{<br/>}


                </div>

                <div className="4">
                    <h4 className='h4' style={{ borderBottom: '2px solid black ', padding: '0.4rem' }}>PRODUCTS</h4>
                    <span>Travelport+</span> {<br/>}
                    <span>MyTravelport</span>{<br/>}
                    <span>Suppliers</span>{<br/>}
                    <span>APIs</span>{<br/>}
                    <span>Smartpoint Cloud</span>{<br/>}

                </div>            </div>





                <div className="icon">
                    <i className="fab fa-facebook icon-1" aria-hidden="true"></i>
                    <i className="fab fa-x-twitter icon-1" aria-hidden="true"></i>
                    <i className="fab fa-linkedin icon-1" aria-hidden="true"></i>
                    <i className="fab fa-youtube icon-1" aria-hidden="true"></i>
                </div>
                <hr />

<div className="menu">
                    <p>© 2025 Travelport. All Rights Reserved</p>
<div className="s">
                     <span className='span' style={{border:'none'}}>Privacy Notice</span> 
                    <span className='span'>Terms & Conditions</span>
                    <span className='span' style={{}}>Legal Policies</span>
                    <span className='span' style={{}}>Fraudulent Booking Websites</span>

</div>
<i className="fas fa-arrow-up icon-1" aria-hidden="true"></i>
</div>
        </>
    )
}
export default Footer