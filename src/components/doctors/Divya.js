import React, { Fragment } from 'react';

const Divya = ({ doctor }) => {
    return (
        
            <body id="top">

<header>
    <div className="header-top-bar">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <ul className="top-bar-info list-inline-item pl-0 mb-0">
                        <li className="list-inline-item"><a href="mailto:skilllab@mapims.edu.in"><i className="icofont-support-faq mr-2"></i>skilllab@mapims.edu.in</a></li>
                        <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Adhipharasakthi Hospitals, Melmaruvathur </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                        <a href="tel:+91 44 7110 9999" >
                            <span>Call Now : </span>
                            <span className="h4">+91 44 7110 9999 - 2415</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
             <a className="navbar-brand" href="/">
                <img src="images/logo.png" alt="" className="img-fluid"/>
              </a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
               <li className="nav-item"><a className="nav-link" href="about">About Us</a></li>

               <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="blog-sidebar" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses <i className="icofont-thin-down"></i></a>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
                    <li><a className="dropdown-item" href="bls">BLS</a></li>
                    <li><a className="dropdown-item" href="Acls">ACLS</a></li>
						<li><a className="dropdown-item" href="mbbsug">MBBS</a></li>
						<li><a className="dropdown-item" href="mbbspg">MD/MS</a></li>
            <li><a className="dropdown-item" href="bdsug">BDS</a></li>
            <li><a className="dropdown-item" href="bdspg">MDS</a></li>
            <li><a className="dropdown-item" href="nursing">Nursing</a></li>
           

					</ul>
			  	</li>


                <li className="nav-item"><a className="nav-link" href="service">Services</a></li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="department" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down"></i></a>
                   	<ul className="dropdown-menu" aria-labelledby="dropdown02">
						{/* <li><a className="dropdown-item" href="department"> All Departments</a></li> */}
						<li><a className="dropdown-item" href="generalmedicine">General Medicine</a></li>
						<li><a className="dropdown-item" href="opthomology">Opthomology</a></li>
						<li><a className="dropdown-item" href="cardiology">Cardiology</a></li>
						<li><a className="dropdown-item" href="dentalcare">Dental Care</a></li>
						<li><a className="dropdown-item" href="pulmology">Pulmology</a></li>
						<li><a className="dropdown-item" href="gynecology">Gynecology</a></li>
					</ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="doctor" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown03">
                        <li><a className="dropdown-item" href="doctor">Doctors</a></li>
                        {/* <li><a className="dropdown-item" href="doctor-single">Doctor Single</a></li> */}
                        <li><a className="dropdown-item" href="bookings">Appoinment</a></li>
                    </ul>
                </li>
{/* 
               <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="blog-sidebar" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown05">
                        <li><a className="dropdown-item" href="blog-sidebar">Blog with Sidebar</a></li>

                        <li><a className="dropdown-item" href="blog-single">Blog Single</a></li>
                    </ul>
                </li> */}
               <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
            </ul>
          </div>
        </div>
    </nav>
</header>
    


<section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">Doctor Details</span>
          <h1 className="text-capitalize mb-5 text-lg">Divya</h1>
 
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section doctor-single">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="doctor-img-block">
                    <img src="images/team/9.jpg" alt="Circle Image" className="img-circle"/>

                    <div className="info-block mt-4">
                        <h3 className="mb-0">Divya</h3>
                        <p>General Surgery</p>

                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-md-6">
                <div className="doctor-details mt-4 mt-lg-0">
                    <h2 className="text-md">Introducing myself</h2>
                    <div className="divider my-4"></div>
                    <h4>About Me</h4>
<p>As an experienced general surgeon, I specialize in diagnosing and performing surgical procedures to treat a wide range of conditions, including appendicitis, hernias, gallbladder issues, and other abdominal disorders. I am committed to providing effective, minimally invasive surgery options and post-operative care to ensure the best outcomes for my patients.</p>
<p>My approach combines surgical expertise with compassionate care, working closely with patients to create personalized treatment plans that prioritize their health, recovery, and overall well-being.</p>





                    <a href="bookings" className="btn btn-main-2 btn-round-full mt-3">Make an Appoinment<i className="icofont-simple-right ml-2  "></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section doctor-qualification gray-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-title">
                    <h3>My Educational Qualifications</h3>
                    <div className="divider my-4"></div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <div className="edu-block mb-5">
                    <span className="h6 text-muted">Year(2005-2007) </span>
                    <h4 className="mb-3 title-color">MBBS, M.D at University of Wyoming</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!</p>
                </div>

                <div className="edu-block">
                    <span className="h6 text-muted">Year(2007-2009) </span>
                    <h4 className="mb-3 title-color">M.D. of Netherland Medical College</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!</p>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="edu-block mb-5">
                    <span className="h6 text-muted">Year(2009-2010) </span>
                    <h4 className="mb-3 title-color">MBBS, M.D at University of Japan</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!</p>
                </div>

                <div className="edu-block">
                    <span className="h6 text-muted">Year(2010-2011) </span>
                    <h4 className="mb-3 title-color">M.D. of Canada Medical College</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="section doctor-skills">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <h3>My skills</h3>
                <div className="divider my-4"></div>
                <p>As a general surgeon, I am skilled in performing a variety of surgeries, including abdominal, hernia, and gallbladder procedures. I specialize in minimally invasive techniques, ensuring faster recovery and reduced complications. Additionally, I am adept at providing pre-operative assessments, post-operative care, and managing both elective and emergency surgical cases.</p>

            </div>
            <div className="col-lg-4">
                <div className="skill-list">
                    <h5 className="mb-4">Expertise area</h5>
                    <ul className="list-unstyled department-service">
                        <li><i className="icofont-check mr-2"></i>Abdominal Surgery & Organ Removal</li>
                        <li><i className="icofont-check mr-2"></i>Hernia Repair & Gallbladder Surgery</li>
                        <li><i className="icofont-check mr-2"></i>Minimally Invasive Surgery Techniques</li>
                        <li><i className="icofont-check mr-2"></i>Emergency Surgical Procedures</li>
                        <li><i className="icofont-check mr-2"></i>Post-Surgical Care & Recovery</li>
                        </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="sidebar-widget  gray-bg p-4">
                    <h5 className="mb-4">Make Appoinment</h5>

                    <ul className="list-unstyled lh-35">
                      <li className="d-flex justify-content-between align-items-center">
                        <a href="#">Monday - Friday</a>
                        <span>9:00 - 17:00</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <a href="#">Saturday</a>
                        <span>9:00 - 16:00</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <a href="#">Sunday</a>
                        <span>Closed</span>
                      </li>
                    </ul>

                    <div className="sidebar-contatct-info mt-4">
                        <p className="mb-0">Need Urgent Help?</p>
                        <h3 className="text-color-2">+91 44 7110 9999 - 2415</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<footer className="footer ">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
						<img src="images/logo.png" alt="" className="img-fluid"/>
					</div>
					<p>We believe in the power of skill and empathy to transform lives. At Bliss Skillful Care, our mission is to offer innovative solutions while fostering a caring, supportive environment for all.</p>

					<ul className="list-inline footer-socials mt-4">
						<li className="list-inline-item"><a href="https://www.facebook.com/"><i className="icofont-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://www.instagram.com/"><i className="icofont-instagram"></i></a></li>
						<li className="list-inline-item"><a href="https://x.com/bliss_skill_lab"><i className="icofont-twitter"></i></a></li>
					</ul>
				</div>
			</div>
      <div className="col-lg-2 col-md-6 col-sm-6">
  <div className="widget mb-5 mb-lg-0"><br></br><br></br><br></br>
    <h4 className="text-capitalize mb-3" style={{ color: 'white' }}>Department</h4>
    <div className="divider mb-4"></div>

    <div className="footer-menu lh-35">
      <p>Surgery</p>
      <p>Women's Health</p>
      <p>Radiology</p>
      <p>Cardiac</p>
      <p>Medicine</p>
    </div>
  </div>
</div>

			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0"><br></br><br></br><br></br>
					<h4 className="text-capitalize mb-3" style={{ color: 'white' }}>Support</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="termsandcondition">Terms & Conditions</a></li>
						<li><a href="privacypolicy">Privacy Policy</a></li>
						<li><a href="companysupport">Company Support </a></li>
						<li><a href="faq">FAQuestions</a></li>
						<li><a href="companylicence">Company Licence</a></li>
					</ul>
				</div>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0"><br></br><br></br><br></br>
					<h4 className="text-capitalize mb-3" style={{ color: 'white' }}>Get in Touch</h4>
					<div className="divider mb-4"></div>

					<div className="footer-contact-block mb-4">
						<div className="icon d-flex align-items-center">
							<i className="icofont-email mr-3"></i>
							<span className="h6 mb-0">Support Available for 8hrs</span>
						</div>
						<h4 className="mt-2"><a href="mailto:skilllab@mapims.edu.in">skilllab@mapims.edu.in</a></h4>
					</div>

					<div className="footer-contact-block">
						<div className="icon d-flex align-items-center">
							<i className="icofont-support mr-3"></i>
							<span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
						</div>
						<h4 className="mt-2"><a href="tel:+91 44 7110 9999">+91 44 7110 9999 - 2415</a></h4>
					</div>
				</div>
			</div>
		</div>
		
		<div className="footer-btm py-4 mt-5">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-6">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color"> Bliss </span> by <a href="https://adhiparasakthihospitals.com/" target="_blank" rel="noreferrer"> APH - IT </a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="subscribe-form text-lg-right mt-5 mt-lg-0">
						<form action="#" className="subscribe">
							<input type="text" className="form-control" placeholder="Your Email address"/>
							<a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<a className="backtop js-scroll-trigger" href="#top">
						<i className="icofont-long-arrow-up"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
   

    <script src="plugins/jquery/jquery.js"></script>
    
    <script src="plugins/bootstrap/js/popper.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/counterup/jquery.easing.js"></script>
  
    <script src="plugins/slick-carousel/slick/slick.min.js"></script>
   
    <script src="plugins/counterup/jquery.waypoints.min.js"></script>
    
    <script src="plugins/shuffle/shuffle.min.js"></script>
    <script src="plugins/counterup/jquery.counterup.min.js"></script>
   
    <script src="plugins/google-map/map.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"></script>    
    
    <script src="js/script.js"></script>
    <script src="js/contact.js"></script>

  </body>
        
    );
};

export default Divya;