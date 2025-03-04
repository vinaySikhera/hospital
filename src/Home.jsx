import React from 'react'
import './home.css'
const Home = () => {
    return (
        <div>
            <div className="sliderOfHeroSection">
                <div className="heroSectionOfHomePage">
                    <div>
                        <img className="herosectionImg" width="100%"
                            src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/04/1-51.jpg" alt="" />
                    </div>
                    <div className="apperFterSomeTimeHero">
                        <span className="heroSectionImage">PASSION FOR CARING</span>
                        <h1 className="textheroSection">
                            Geniun commitment To Your Health
                        </h1>
                        <p className="paraOfHeroSection">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout
                        </p>
                        <button className="readMoreBtn">Read More+</button>
                    </div>
                </div>

                {/* <div className="heroSectionOfHomePage">
                    <div>
                        <img className="twoherosectionImg" width="100%"
                            src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/03/3-2.jpg" alt="" />
                    </div>
                    <div className="apperFterSomeTimeHero">
                        <span className="twoheroSectionImage">PASSION FOR CARING</span>
                        <h1 className="twotextheroSection">
                            Geniun commitment To Your Health
                        </h1>
                        <p className="twoparaOfHeroSection">It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout .</p>
                        <button className="readMoreBtn">Read More+</button>
                    </div>
                </div> */}

                {/* <div className="heroSectionOfHomePage">
                    <div>
                        <img className="threeherosectionImg" width="100%"
                            src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/04/2-51.jpg" alt="" />
                    </div>
                    <div className="apperFterSomeTimeHero">
                        <span className="threeheroSectionImage">PASSION FOR CARING</span>
                        <h1 className="textheroSection">
                            Geniun commitment To Your Health
                        </h1>
                        <p className="threeparaOfHeroSection">It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.</p>
                        <button className="readMoreBtn">Read More+</button>
                    </div>
                </div> */}
            </div>


             <div className="sidebyside3div">
                <div className="littledetailsBox detailsBox1">
                    <div>
                          <img height="80px" width="80px" src="images/doctor.png" alt="" />  
                    </div>
                    <br />
                    <div>
                        <h3 className="headText3rd">Emergency Cases</h3>
                    </div>
                    <br />
                    <div>
                        <p className="paraOdSideBySide">There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered
                            alteration in some form
                        </p>
                    </div>
                    <br />
                    <div>
                        <label >
                            {/* <i className="fa fa-phone iconHomePhone"></i>  */}
                            <a href="#" className="phoneNumber"> +1154568875263 </a>
                        </label>
                    </div>
                </div>
                <div className="littledetailsBox detailsBox2">
                    <div>
                         <img  height="80px" width="80px"
                             src="https://img.icons8.com/ios/50/2490eb/doctor-male.png" alt="" /> 
                    </div>
                    <br />
                    <div>
                        <h3 className="headText3rd">Doctors TimeTable</h3>
                    </div>
                    <br />
                    <div>
                        <p className="paraOdSideBySide">There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered
                            alteration in some form
                        </p>
                    </div>
                    <br />
                    <div>
                        <button className="TimeTableBtn"> TimeTable +</button>
                    </div>
                </div>
                <div className="littledetailsBox detailsBox3">
                    <div>
                         <img  height="80px" width="80px" src="images/availability.png"
                             alt=""/ >
                    </div>
                    <br />
                    <div>
                        <h3 className="headText3rd">Openings Hours</h3>
                    </div>
                    <br />
                    <div>
                        <div className="openingTime">
                            <div>Mon-Fri</div>
                            <div>8:00-7:00PM</div>
                        </div>
                        <hr className="hrOpeningTime" />
                        <div className="openingTime">
                            <div>Saturday</div>
                            <div>8:00-7:00PM</div>
                        </div>
                        <hr className="hrOpeningTime" />
                        <div className="openingTime">
                            <div>Sunday</div>
                            <div>8:00-7:00PM</div>
                        </div>
                        <hr className="hrOpeningTime" />
                        <div className="openingTime">
                            <div>Emergency</div>
                            <div>24*7 Hours</div>
                        </div>
                    </div>
                </div>
            </div> 


            <div className="section3rd">
                <div id="section3RDimageBox" className="section3RDimageBox">
                    <img width="100%"
                        src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/03/about-img-1.jpg" alt="" />
                </div>
                <div className="thirdsectionTextDiv">
                    <span className="thirdSecPara">What About Us</span>
                    <h1 className="headingOfSection3rd">The headt and And Seience of Medic Test</h1>
                    <p className="paraof3RDsection">It is a long established fact that a reader will be distracted by at its
                        layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className="listItems">
                        <li> <i class="fa fa-check"></i> &ensp; Comprehensive Inpatient Services</li>
                        <li><i class="fa fa-check"></i> &ensp; Medical And Surgical Services</li>
                        <li><i class="fa fa-check"></i> &ensp; Outpatient Services</li>
                        <li><i class="fa fa-check"></i> &ensp; Medicine & instrument</li>
                        <li><i class="fa fa-check"></i> &ensp; Specialised Support Service</li>
                        <li><i class="fa fa-check"></i>&ensp; Instant Operation & Appointment</li>
                    </ul>
                    <button className="readMoreBtn3rdSection">Read More +</button>
                </div>
            </div>
            <section className="mainFacilitySection">`
                <span className="facilityWeHave">FACILITY WE HAVE</span>
                <h1>What facility we provide</h1>
                <div className="facilitySection">
                    <div className="facilityBox">
                        <img width="100%" src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/1.jpg" alt="" />
                        <div className="detailsFacilityText">
                            <div>
                                <p className="facilityPara">Medical surgery</p>
                                <h2>Eye care service</h2>
                            </div>
                            <div><img className="facilityIcon" width="56px" height="56px" src="images/hospital.png"
                                alt="img OF FACILITY" />
                            </div>
                        </div>
                    </div>

                    <div className="facilityBox">
                        <img width="100%" src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/2.jpg" alt="" />
                        <div className="detailsFacilityText">
                            <div>
                                <p className="facilityPara">Medical Therapy</p>
                                <h2>Cardiology Services</h2>
                            </div>
                            <div><img className="facilityIcon" width="56px" height="56px" src="images/therapy.png"
                                alt="img OF FACILITY" />
                            </div>
                        </div>
                    </div>

                    <div className="facilityBox">
                        <img width="100%" src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/3.jpg" alt="" />
                        <div className="detailsFacilityText">
                            <div>
                                <p className="facilityPara">Medical Pediatrics</p>
                                <h2>Dental Services</h2>
                            </div>
                            <div><img className="facilityIcon" width="56px" height="56px" src="images/dental-service.png"
                                alt="img OF FACILITY" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mainAabouUs">
                <div className="hero-section">
                    <div className="content">
                        <div className="boxLeftOfContent">
                            <div className="tagline">ABOUT US</div>
                            <h1>Joining Hands With Techno Easement</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been
                                the
                                industry's standard dummy text.</p>
                            <div className="feature">
                                <div className="icon">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png" alt="Icon" />
                                </div>
                                <div>
                                    <h3 className="featureH3">Infection Prevention</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available majority.</p>
                                </div>
                            </div>
                            <button className="read-more-btn">READ MORE +</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/elementor/thumbs/1-1-qo6ko8rwycdb981zlosjtfx7xjn37ygto42c2qyjv6.jpg"
                            alt="Doctor Image" />
                    </div>
                    <div className="stats">
                        <div>
                            <h2 className="incrementDetails">80+</h2>
                            <p>Happy Patients</p>
                        </div>
                        <div>
                            <h2 className="incrementDetails">100+</h2>
                            <p>Saved Hearts</p>
                        </div>
                        <div>
                            <h2 className="incrementDetails">59+</h2>
                            <p>Expert Doctors</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-section">
                <div className="services-header">
                    <span className="tagline">OUR SERVICES</span>
                    <h1>We Provide Various Directions</h1>
                </div>
                <div className="services-grid">
                    <div className="service-card remove_LEFT">
                        <img src="https://img.icons8.com/ios/50/2490eb/doctor-male.png" alt="Angioplasty" />
                        <h3>Angioplasty</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card">
                        <img src="https://img.icons8.com/ios/50/2490eb/heart-health.png" alt="Cardiology" />
                        <h3>Cardiology</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card">
                        <img src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/06/Dental-Logo-and-Icon-with-Modern-Design-Style-on-transparent-background-PNG.png"
                            alt="Dental" />
                        <h3>Dental</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card">
                        <img src="https://img.icons8.com/ios/50/2490eb/syringe.png" alt="Endocrinology" />
                        <h3>Endocrinology</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card remove_LEFT removeBottom">
                        <img src="data:image/png;base64,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"
                            alt="Eye Care" />
                        <h3>Eye Care</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card removeBottom">
                        <img src="data:image/png;base64,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"
                            alt="Neurology" />
                        <h3>Neurology</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card removeBottom">
                        <img src="data:image/jpeg;base64,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"
                            alt="Orthopaedics" />
                        <h3>Orthopaedics</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                    <div className="service-card removeBottom">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAbFBMVEX///8AAABYWVpVVldBQkPq6uplZmZSU1Spqan7+/vj4+Tt7e2wsLFHSEnMzMzT09M3NzeWlpZeXl9sbG7a2tpNTk8wMTR9fn90dHXz8/O9vb0hIiOcnZ2NjY2Dg4MyMjIOEhUnKSsXGhwNDAy0Z/SXAAAD5ElEQVR4nO2ba5eqIBRAfePbNJlSa7pT//8/Xh4+qKVY3UZPt7M/NBKs2jGAHEDDQBAEQZBrwliLv7bfBClNdPxZ22+CtLB0fK3tN0Fa2JZljwNd29uOYoPWtr1wNCt0ltV29QRqWY12trA28XRsM7UsIG1nootJilQtC0lbO6aB1qbOFBSwdlKHk1RqWVjaTnlnWWDa2XwxAWr/K6iN2rOgNmrP8iLtErp2XY5RJ6C1LbsoRublRbFwLPmoNpDI/RO0LaLj51dFr3lEO4i0uL8qes0j2oBA7SV5XruqqiiYL/Y7nCj9ek57e9o0qy1p54dDPj7NmGNnWzR+sc0CvKm2d9qcoe57aAgYq315GIblet/+NMV2b927KgWIjW1/1u2m5nuRL7a5m+e1907ikLW6RZplaTVfbIQdj9DerzczbYLaS7GwdjWzFXnv5yysHY8tdAzs7/2chbV9qtuJJNt7P2dxbd1ihw1ZmyTj25Cwtcl+fBfyQIFrj2fFCXDt8a9D7ZeD2qg9C2qj9iyfoB2mU2R7uNrBgRRTsOkiWO1cO8sFrK2NKaBq86nsJBb9hqltVPqtyOcWhp5CaFfBGP4jA+DCMG27yMc4sDENsrZl01HsR2LJhXlV5L4wfqI7pkC9tf0myHwtb7hnhyAIgiAIgnwArhrQqoFxwHNuI2Ul7BXndFfbcm+U7T3vWA9HAl2Ws7mZfFeJ45wO8joj7Hq140rmNaQXdXnSuq7OnL+Xy+vsxK5XO65k3tJWptQ+12rZiKjaG3a9am2f2z3hH564tKZC29yrCzi+CUrb5qeDq8pNj/wfv5WmUvuiPFUbebC0rT4VN6bZSFOpbSqrfLUJVdvYs6Tsla22GXVZgQdX+9B3yk67X+4pTcDaF6Yt2kWnbXad0gaszUdmebpZaPMuepQ5orI3MLWrLUvKEZBrX/iQ58jWzVv9+QBSO/pmqUKeTRPa5a7zFJZxDEnbqSU+NfuBRDaSsGZt3eITlSNvMqEPSfuKPFC0y8qTP6R0hDBYbb+7vUhtw2fVXVQGbx2bDJb2uWGceVvOh4xWO0jYn7T6Ya/fBiztnDfsmGsch1t5qy3q2eb39XMJTFtOQviQ3QwT6E7buLTjNb9dAtQWHru+unttv231oQFSW4xxQ7zSa0eOsN7xNyFquw1vDl1Gr91Wd38JTVtWdxeGDdolvwvJMAekdsATpE0M2sZ3/2tAasvm0MbAivYATG2XT1SJXCt5I20R3Kjz7TfRFjOmRsxcZ7VXXd5xCFEfzvIpIYmo7ojl0NvHbeukzWW/0KOEvuGzfwiCIAiCIAiCIAiC/Pf8BahhXFAsOCcWAAAAAElFTkSuQmCC"
                            alt="RMI" />
                        <h3>RMI</h3>
                        <p>There are many variations of pas of Lorem Ipsum availab.</p>
                        <a href="#">READ MORE +</a>
                    </div>
                </div>
            </section>
            <section className="portfolio-section">
                <div className="portfolio-header">
                    <span className="tagline">OUR PORTFOLIO</span>
                    <h1>All The Great Work That We Done</h1>
                </div>
                <div className="slider-container">
                    <div className="slider">
                        <div className="slide">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/1-1-600x700.jpg"
                                alt="Portfolio 1" />
                            <div className="hover-overlay">
                                <span>FAMILY</span>
                                <h3>Investigations</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/2-2-600x700.jpg"
                                alt="Portfolio 2" />
                            <div className="hover-overlay">
                                <span>FAMILY</span>
                                <h3>Investigations</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/3-1-600x700.jpg"
                                alt="Portfolio 3" />
                            <div className="hover-overlay">
                                <span>FAMILY</span>
                                <h3>Investigations</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/4-2-600x700.jpg"
                                alt="Portfolio 4" />
                            <div className="hover-overlay">
                                <span>FAMILY</span>
                                <h3>Investigations</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/2.jpg"
                                alt="Portfolio 4" />
                            <div className="hover-overlay">
                                <span>FAMILY</span>
                                <h3>Investigations</h3>
                            </div>
                        </div>
                        <div className="slide">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/2.jpg"
                                alt="Portfolio 4" />
                            <div className="hover-overlay">
                                <span>FAMILY</span>
                                <h3>Investigations</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mainOurStep">
                <span className="mainOurStepSpan">Our Step</span>
                <h1>Our Working Best Process</h1>
                <div className="outStepInFourWay">
                    <div className="boxOutStep">
                        <div className="outStepImage">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/03/4-1-1.png"
                                alt="imageONE" />
                        </div>
                        <div>
                            <h4 className="boxOutStepTextH4">Emergency Care</h4>
                            <p className="boxOutStepTextPara">There are many variations of passages Lorem Ipsum available</p>
                        </div>

                    </div>
                    <div className="boxOutStep">
                        <div className="outStepImage">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/03/3-1-1.png"
                                alt="imageTwo" />
                        </div>
                        <div>
                            <h4 className="boxOutStepTextH4">Operation Theatre</h4>
                            <p className="boxOutStepTextPara">There are many variations of passages Lorem Ipsum available</p>
                        </div>

                    </div>
                    <div className="boxOutStep">
                        <div className="outStepImage">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/03/1-1.png"
                                alt="imageThreeE" />
                        </div>
                        <div>
                            <h4 className="boxOutStepTextH4">Blood Test</h4>
                            <p className="boxOutStepTextPara">There are many variations of passages Lorem Ipsum available</p>
                        </div>

                    </div>
                    <div className="boxOutStep">
                        <div className="outStepImage">
                            <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/03/1-1.png"
                                alt="imageFourE" />
                        </div>
                        <div>
                            <h4 className="boxOutStepTextH4">Outdoor Checkup</h4>
                            <p className="boxOutStepTextPara">There are many variations of passages Lorem Ipsum available</p>
                        </div>
                    </div>

                </div>
                <button>Get Appointment +</button>
            </section>
            <section className="mainOurTeam">
                <span className="mainOurTeamSpam">Our Team</span>
                <h1>Meet Our Heart Speaclist </h1>
                <div className="outTeamMembers">
                    <div className="outTeamMemberBox">
                        <div><img width="100%" src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/1-2.jpg"
                            alt="" />
                        </div>
                        <div className="detailsOfDrNameQuality">
                            <h5 className="drNameOurTeam">vinay</h5>
                            <p>Neurology</p>
                        </div>
                        <div className="iconOfOurTeam w3-animate-top">
                            <div><i className="fa fa-facebook-f"></i></div>
                            <div><i className="fa fa-google"></i></div>
                            <div><i className="fa fa-instagram"></i></div>
                        </div>
                    </div>

                    <div className="outTeamMemberBox">
                        <div><img width="100%" src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/2-1.jpg"
                            alt="" />
                        </div>
                        <div>
                            <h5 className="drNameOurTeam">Vinay's wife </h5>
                            <p>Endocrinology</p>
                        </div>
                        <div className="iconOfOurTeam w3-animate-top">
                            <div><i className="fa fa-facebook-f"></i></div>
                            <div><i className="fa fa-google"></i></div>
                            <div><i className="fa fa-instagram"></i></div>
                        </div>
                    </div>

                    <div className="outTeamMemberBox">
                        <div><img width="100%" src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/3-1.jpg"
                            alt="" />
                        </div>
                        <div>
                            <h5 className="drNameOurTeam">Dr. Vinay</h5>
                            <p>Eye Care</p>
                        </div>
                        <div className="iconOfOurTeam w3-animate-top">
                            <div><i className="fa fa-facebook-f"></i></div>
                            <div><i className="fa fa-google"></i></div>
                            <div><i className="fa fa-instagram"></i></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ourClient">
                <span>Our Client</span>
                <h1>Our Client Happy say about us</h1>
                <div className="ourClientMessage">
                    <div className="personalMsgFromClient">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus ratione inventore
                            necessitatibus quo consectetur dolor et amet neque dolorum expedita doloribus, nostrum modi?
                            Accusantium dolor alias quis ad quibusdam.</p>
                        <div className="boxOFClientDetails">
                            <div className="imageandNameOFClEent">
                                <div><img height="80px" width="80px" src="images/vinay.jpg" alt="girl image" /></div>
                                <div>
                                    <h3>vinay Panghal</h3>
                                    <p>Vinay, sikhera.</p>
                                </div>
                            </div>
                            <div>
                                <h1><i className="fa fa-quote-right"></i></h1>
                            </div>
                        </div>
                    </div>
                    <div className="personalMsgFromClient">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus ratione inventore
                            necessitatibus quo consectetur dolor et amet neque dolorum expedita doloribus, nostrum modi?
                            Accusantium dolor alias quis ad quibusdam.</p>
                        <div className="boxOFClientDetails">
                            <div className="imageandNameOFClEent">
                                <div><img height="80px" width="80px"
                                    src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/2-3.png"
                                    alt="girl image" /></div>
                                <div>
                                    <h3>Alina</h3>
                                    <p>Usa is Best</p>
                                </div>
                            </div>
                            <div>
                                <h1><i className="fa fa-quote-right"></i></h1>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <hr />
                <div className="imageFlexFIVEimage">
                    <div className="imageflexfive"><img width="100%"
                        src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/1.png" alt="" /></div>
                    <div className="imageflexfive"><img width="100%"
                        src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/2.png" alt="" /></div>
                    <div className="imageflexfive"><img width="100%"
                        src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/4.png" alt="" /></div>
                    <div className="imageflexfive"><img width="100%"
                        src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/3.png" alt="" /></div>
                    <div className="imageflexfive"><img width="100%"
                        src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/02/3.png" alt="" /></div>
                </div>
            </section>

            <section className="mainOurBlog">
                <span className="mainOurBlogSpan">Our Blog</span>
                <h1 className=" headOfMainOurBlog">See Our Latest Blog</h1>
                <div className="blogsContainer">
                    <div className="singleBlog">
                        <div className="singleBlogImage">
                            <img width="100%"
                                src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/1-467x352.jpg"
                                alt="" />
                            <div className="dateTimeInOurBlog">
                                <span>December 17, 2021</span>
                            </div>
                        </div>
                        <div className="textContainerInBlog">
                            <div className="showComentOfSingleBlog">
                                <span>🤦‍♂️peacefulqube</span>
                                &ensp;
                                <span>Ⓜ️ 11 comments</span>
                            </div>
                            <hr className="singleBlogHrLine" />
                            <div className="blogTextSingle">
                                <h3>Get The excersize Limit mobility</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati eos
                                    voluptatibus
                                    recusandae aut id et eius voluptatum natus qui.S</p>

                                <a href="#">READ MORE +</a>
                            </div>
                        </div>
                    </div>
                    <div className="singleBlog">
                        <div className="singleBlogImage">
                            <img width="100%"
                                src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/2-467x352.jpg"
                                alt="" />
                            <div className="dateTimeInOurBlog">
                                <span>December 17, 2021</span>
                            </div>
                        </div>
                        <div className="textContainerInBlog">
                            <div className="showComentOfSingleBlog">
                                <span>🤦‍♂️peacefulqube</span>
                                &ensp;
                                <span>Ⓜ️ 11 comments</span>
                            </div>
                            <hr className="singleBlogHrLine" />
                            <div className="blogTextSingle">
                                <h3>Get The excersize Limit mobility</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati eos
                                    voluptatibus
                                    recusandae aut id et eius voluptatum natus qui.S</p>

                                <a href="#">READ MORE +</a>
                            </div>
                        </div>
                    </div>
                    <div className="singleBlog">
                        <div className="singleBlogImage">
                            <img width="100%"
                                src="https://medicate.peacefulqode.co.in/wp-content/uploads/2021/12/3-467x352.jpg"
                                alt="" />
                            <div className="dateTimeInOurBlog">
                                <span>December 17, 2021</span>
                            </div>
                        </div>
                        <div className="textContainerInBlog">
                            <div className="showComentOfSingleBlog">
                                <span>🤦‍♂️peacefulqube</span>
                                &ensp;
                                <span>Ⓜ️ 11 comments</span>
                            </div>
                            <hr className="singleBlogHrLine" />
                            <div className="blogTextSingle">
                                <h3>Get The excersize Limit mobility</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati eos
                                    voluptatibus
                                    recusandae aut id et eius voluptatum natus qui.S</p>

                                <a href="#">READ MORE + </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
