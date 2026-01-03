import React from 'react'
import image2 from '../../assets/images/Dida-travel-logo.png'
import image3 from '../../assets/images/dida-travel-2.jpeg'
import image4 from '../../assets/images/Woman-In-Clear-Water.jpg'
import image5 from '../../assets/images/Ortharize-Header.jpg'


function Section1() {
    return (
        <>

            <div className="section1">

                <div className="section3">
                    <p id="para2">Not Ready to Make the Move?</p>
                    <p id="para3">Here’s what our customers are saying.</p>
                </div>

                <div className="section2">
                    <div className="sect3"style={{ marginLeft: '0.5rem' }}>
                        <img src={image2} alt="" />
                        <p id="para">Planning for the future</p>
                        <p id="para1">View story</p>
                        <img src={image3} alt="" width={'95%' } height={'95%'}/>


                    </div>
                    <div className="sect3">
                        <img src={image2} alt="" width={'100%' } height={'100%'} />
                        <p id="para">Planning for the future</p>
                        <p id="para1">View story</p>
                        <img src={image5} alt="" />
                    </div>
                    <div className="sect3">
                        <img src={image2} alt="" width={'100%' } height={'100%'} />
                        <p id="para">Planning for the future</p>
                        <p id="para1">View story</p>
                        <img src={image4} alt="" />
                    </div>




                </div>








            </div>



        </>
    )
}

export default Section1