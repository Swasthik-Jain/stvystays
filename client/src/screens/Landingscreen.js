import React from "react";
import { Link } from "react-router-dom";

function Landingscreen() {
  return (
    <div className="row landing justify-content-center mx-0">
      <div
        className="col-md-10 my-auto text-center"
        style={{ height: "100vh" }}
      >
        {/* <h2 style={{ color: "white", fontSize: "80px" }}>Wow Stays</h2>
         */}
         <img src={require("../logo.png")}/>
        <h1 style={{ color: "white" }}>
          Make Your stays Wonderful. Get your desired room.
        </h1>
        <Link to="/home">
          <button className="btn landingbtn">Get Started</button>
        </Link>
      </div>
      <div className="col-md-10 my-auto text-center">
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
        <div style={{ marginRight: "50px", color: "black" }}>
          <h4 style={{ fontSize: "50px" }}>About Us</h4>
          <h4>Our Story</h4>
          <p>
            Staying in a homestay gives an enriching and immersive experience.
            Live in an informal setting and get an opportunity to interact with
            hosts and co-travelers, experience the local culture & traditions
            and taste India's rich cuisine prepared by locals. Homestay owners
            host their spaces in many different ways, which makes each homestay
            experience unique and full of discovery.
          </p>
          <h4>Why Choose Us</h4>
          <div>
            {/* <h3>Wow Stays</h3> */}
            <p>
              Wow Stays is the perfect choice for those who are looking for
              comfortable and affordable accommodation options. Our platform
              offers a wide range of options for rooms, apartments, and houses
              that are available for short or long-term stays. Here are some
              reasons why you should choose Wow Stays:
            </p>
            <ul>
              <li>
                Wide selection of accommodations: We have a diverse range of
                accommodations available, ranging from budget-friendly to luxury
                options, to suit everyone's needs and preferences.
              </li>
              <li>
                Competitive prices: Our prices are highly competitive, and we
                always strive to offer our customers the best possible rates.
              </li>
              <li>
                Easy booking process: Our booking process is straightforward,
                user-friendly, and hassle-free, making it easy for customers to
                find and book their ideal accommodations.
              </li>
              <li>
                Safe and secure: We take the safety and security of our
                customers very seriously and ensure that all accommodations are
                vetted and meet our high standards.
              </li>
              <li>
                Customer service: We provide excellent customer service and
                support, and our team is always available to assist customers
                with any queries or issues they may have.
              </li>
            </ul>
            <p>
              Overall, Wow Stays is committed to providing high-quality
              accommodations and excellent customer service, making us the
              perfect choice for anyone looking for a comfortable and
              hassle-free stay.
            </p>
          </div>
        </div>
        <div style={{ color: "black" }}>
          <h3>Contact Us</h3>
          <p>Email: info@wowstays.com</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Landingscreen;
