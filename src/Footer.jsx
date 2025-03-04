import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="footerMainContainer">
      <div className="footerMessageSection">
        <div className="msgSessection1In">
          <div>
            <img
              width="55px"
              src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/Subscribe1-1.png"
              alt=""
            />
          </div>
          <div>
            <h5 className="textOFFooterMessage">
              Latest Updates Subscribe To Our Newsletter
            </h5>
          </div>
        </div>
        <div className="formSessectionIn2">
          <form action="" className="insideForm">
            <div>
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div>
              <button type="submit"> Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footerContainer">
        <div className="singleFooterContainer">
          <h3>medicate</h3>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, vero.</p>
          </div>
          <div>
            <span> <i class="fa fa-facebook-f"></i></span>
            <span><i class="fa fa-google"></i></span>
            <span><i class="fa fa-instagram"></i></span>
            <span><i class="fa fa-facebook-f"></i></span>
          </div>
        </div>
        <div className="singleFooterContainer">
          <h3>Our Course</h3>
          <div className="ourCourse">
            <div>
              <p>about us</p>
              <p>our service</p>
              <p>about us</p>
              <p>our service</p>
            </div>
            <div>
              <p>about us</p>
              <p>our service</p>
              <p>about us</p>
              <p>our service</p>
            </div>
          </div>
        </div>
        <div className="singleFooterContainer">
          <h3>Resent Post</h3>
          <div>
            <div className="resentPost">
              <div>
                <img
                  width="40px"
                  src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/1-467x352.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>december 12,2001</span>
                <br />
                <span>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing.</strong>
                </span>
              </div>
            </div>
            <hr />
            <div className="resentPost">
              <div>
                <img
                  width="40px"
                  src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/1-467x352.jpg"
                  alt=""
                />
              </div>
              <div>
                <span>december 12,2001</span>
                <br />
                <span>
                  <strong>Lorem ipsum dolor sit, amet consectetur adipisicing.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="singleFooterContainer">
          <h3>Contact</h3>
          <div>
            <div>
              <span>
                <i className="fa fa-phone "></i>
              </span>
              <a className="aTag" href="#">
                +125462156
              </a>
            </div>
            <div>
              <span className="iconfooter">
                <i className="fa fa-envelope "></i>
              </span>
              <a className="aTag" href="#">
                vinay@gmail.com
              </a>
            </div>
            <div>
              <span>
                <i className="fa fa-map-marker "></i>
              </span>
              sikhera
            </div>
          </div>
        </div>
        <hr />
      </div>
      <hr />
      <p style={{ textAlign: "center", paddingBottom: "15px" }}>
        Copyright 2023 medicate All Rights Reserved
      </p>
    </div>
  )
}

export default Footer;