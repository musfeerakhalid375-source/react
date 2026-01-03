import React from 'react'
import image1 from "../../assets/images/header (1).png"
import image3 from "../../assets/images/middle2.png"
// main.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import image4 from "../../assets/images/middle3.png"
import GraphIcon from '../../assets/images/graph-svgrepo-com.svg';






function Hero() {
  return (
    <div>




      <div className="hero-section">

        <div className="sect1">
          <h2>TRAVEL BOOKING TECHNOLOGY</h2>
          <h1>FOR INDEPENDENT AGENCIES</h1>

        </div>
        <div className="sect2">
          <img src={image1} alt="" className='img' />

        </div>
      </div>

      <div className="second">

        <p className='para'>Are you an independent travel agency? At Travelport we put the agent first, and our modern
          retailing platform is built specifically for you. It’s fast, easy to use, and can be personalized
          to your specific needs, with self-service capabilities to meet your customers’ needs
          effortlessly.</p><br />

        <p className='para'>We know you need specific things from a travel technology partner, whether you’re looking to
          grow or just starting out. That’s why the autonomy to provide customized, personalized, and
          best-in-class travel services to your clients is essential. We’ll also give you access to the
          broadest range of retail-ready content that’s easy to book and service. And, we’ll make sure you have all the tools to service your customers in one place, and that you only pay for the
          tech that you need.</p>

        <button className='btn'><b>LET’S WORK TOGETHER</b></button>

      </div>

      <div className="third">
        <div className="third1">
          <p>Our modern retailing platform, Travelport+ allows you to access multiple suppliers of air, hotel, car, and rail all in one place, letting you sell, manage, and personalize all yourtravel bookings seamlessly. With real-time availability, and fare rates displayed, our platform streamlines the booking process, allowing you to provide your clients with up -to-date information and the best service possible.</p>

        </div>
        <div className="third2">
          <img src={image3} alt="" width={'80%'} height={'70%'} />

        </div>

      </div>
      <div className="third">
        <div className="third3">

          <img src={image4} alt="" width={'80%'} height={'70%'} />
        </div>
        <div className="third4" style={{ paddingBottom: '1rem' }}>
          <p>With Travelport+, you will have access to world-class support, training, and resources to help you get the most out of your business. Whether you’re just starting out as an agency, or you’ve been servicing customers for years, having a modern retailing technology partner can help you stay up to date. After all, modern retailing tools, industry trends, and travel and destination knowledge is crucial in providing your clients with the best options and accurate advice. Ready to get modern?</p>


        </div>

      </div>


      <div className="flex">

        <div className="flex1">
          <i className="fas fa-chart-line"></i>

          <h2 className='head1'>SELL THE {<br />} COMPLETE TRIP</h2>
          <p className='border1'>Use Travelport+ to quickly access and book fares from over 460 airlines, 85 low-cost carriers (including carriers Ryanair, easyJet, Southwest Airlines, and Indigo), 1.6 million properties, car rental brands, and 70 rail operators. Our modern retailing platform empowers agencies to better service their client s with seamless booking management, workflow automation, and real-time data access.</p>


        </div>
        <div className="flex2">
          <i className="fas fa-stopwatch border" aria-hidden="true" style={{}}></i>
          <h2 className='head border'>SAVE TIME, {<br />} AND SAVE MORE</h2>
          <p className='border border1' style={{}}>Increase your agency’s profits and customize your travelers’ itinerary by upselling flight and holiday extras using Travelport’s tools to maximize margins. Easily access all the content you need in one place to skip manual searches, and focus on providing the best deals and service to your customers. And manage your revenues with greater control of your margins to stand out from the crowd.</p>

        </div>
        <div className="flex3">
          <i className="fas fa-share-alt border" aria-hidden="true" style={{}}></i>
          <h2 className='head border'>QUEUE BOOKINGS TO {<br />} CONSOLIDATORS</h2>
          <p className='border border1' style={{}}>
            If you are not an IATA agency, you probably rely on a consolidator. Our Consolidator Marketplace is an all-win business model that helps increase your agency’s revenue and reduce administrative tasks. By partnering with Travelport, you gain access to a network of consolidators covering over 60 countries worldwide, allowing you to provide your clients with the best value offers, while maximizing your profit margins.</p>
        </div>
      </div>

    </div>
  )
}

export default Hero