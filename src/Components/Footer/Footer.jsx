import './Footer.css'
import CHD from '../../Images/CHD.webp'
import Canada from '../../Images/canada_footer_img.webp'
import Mumbai from '../../Images/mumbai_footer_img.webp'
import Dubai from '../../Images/dubai_footer_img.webp'
import Logo from '../../Images/footer-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhoneAlt, FaPinterestP, FaSkype } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import React, { useState } from 'react';
import { Modal, Row} from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa6'
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

function Footer() {
    const location = useLocation();
    const footerShow = ['/blog', '/single-blog']

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hovered, setHovered] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    return (
        <>
            <main>

            {!footerShow.includes(location.pathname) && (
                <section className="readTransform">
                    <div className="container">
                        <div className="row">
                            <div className="readTransform_content text-center">
                                <h2 className="pb-4 mb-0 fw-semibold">
                                    Are you prepared to change the direction of your growth? Let's
                                    collaborate to invent! Get in touch with us to transform your technological journey.
                                </h2>
                                <button className="btnHome bg-white d-inline-block text-dark px-4 fs-5 rounded-1 fw-medium border-0 outline-0" onClick={handleShow}>
                                    <p className='pt-3 text-dark fw-semibold'>
                                        Let's Discuss
                                        </p>
                                    </button>
                               
                            </div>
                        </div>
                    </div>
                </section>
            )}

<Modal show={show} onHide={handleClose} size="lg">
  <Modal.Header closeButton>
  
  </Modal.Header>
  <Modal.Body>
  <div className="">
      <div className="form">
        <Row>
        <div className="contact-info d-none d-lg-block col-lg-6 px-5">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Ready to grow? Reach out to Asvayuk Technologies for software and digital marketing!
          </p>
          <div className="info">
            <div className="information">
            <FaLocationDot />
              <p>SCO-44, Sector 5-MDC,Panchkula,Haryana</p>
            </div>
            <div className="information">
            <MdMail />
              <p>info@asvayuktech.com</p>
            </div>
            <div className="information">
            <FaPhone />
              <p>+91 94782 14592</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href=" https://www.facebook.com/asvayuktechnologies/">
              <FaFacebookF />
              </a>
              <a href="https://x.com/asvayuktech">
              <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/asvayuktechnologies/">
              <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/asvayuk-technologies/">
              <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form col-lg-6">
      <span className="circle one"></span>
      <span className="circle two"></span>
      <form action="index.html" autoComplete="off">
        <h3 className="title">Contact us</h3>

        {/* Username input */}
        <div className={`input-container ${formData.name ? 'focused' : ''}`}>
          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Username</label>
          <span>Username</span>
        </div>

        {/* Email input */}
        <div className={`input-container ${formData.email ? 'focused' : ''}`}>
          <input
            type="email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <span>Email</span>
        </div>

        {/* Phone input */}
        <div className={`input-container ${formData.phone ? 'focused' : ''}`}>
          <input
            type="tel"
            name="phone"
            className="input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Phone</label>
          <span>Phone</span>
        </div>

        {/* Message textarea */}
        <div className={`input-container ${formData.message ? 'focused' : ''}`}>
          <textarea
            name="message"
            className="input"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label>Message</label>
          <span>Message</span>
        </div>

        <input type="submit" value="Submit" className="btn-submit" />
      </form>
    </div>
    </Row>
      </div>
    </div>
  </Modal.Body>
</Modal>
                <section className="location">
                    <div className="container">
                        <div className="location_title text-center">
                            <h1 className="mb-0 fw-semibold">Our Locations</h1>
                        </div>
                        <div className="row pt-5 align-items-end px-2 px-lg-0 px-lg-0">

                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={CHD} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                        <Link to={"https://maps.app.goo.gl/4HYCGEiryydf54xdA"}>
                                        <div className="loaction_content">
                                                <h5>CHANDIGARH</h5>
                                                <p className="text-white mb-0">SCO-44, Sector 5
                                                    Mansa Devi Complex, Panchkula, Haryana
                                                </p>
                                            </div>
                                        </Link>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={Canada} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="loaction_content">
                                                <h5>CANADA</h5>
                                                <p className="text-white mb-0">417 Durham St E, Walkerton, ON N0G 2V0 <br />Canada</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={Mumbai} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="loaction_content">
                                                <h5>MUMBAI</h5>
                                                <p className="text-white mb-0">NBC Complex, Sector 11, CBD Belapur, Navi Mumbai
                                                    400614, Mumbai, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-0 px-1">
                                <div className="location_info rounded">
                                    <div className="row align-items-end">
                                        <div className="col-lg-4">
                                            <div>
                                                <img src={Dubai} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 p-0">
                                            <div className="loaction_content">
                                                <h5>DUBAI</h5>
                                                <p className="text-white mb-0">Marasi drive, Business Bay. Dubai, United Arab
                                                    Emirates 514374.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled d-flex gap-3">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/software-development">Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 ">
                                <div>
                                    <ul
                                        className="list-unstyled d-flex gap-3 justify-content-start justify-content-lg-end justify-content-md-end">
                                        <li>
                                            <Link to="https://www.facebook.com/asvayuktechnologies/">
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.linkedin.com/company/asvayuk-technologies/">
                                                <FaLinkedin />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/asvayuktechnologies/">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://x.com/asvayuktech">
                                            <FaXTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://in.pinterest.com/asvayuktech/">
                                            <FaPinterestP />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_wrapper">
                                    <div className="img_logo">
                                        <Link to="/">
                                            <img src={Logo} alt="footer_logo" className="img-fluid" />
                                        </Link>
                                    </div>
                                    <div className="footer_left_sec">
                                        <p className="mb-0 text-light">For cutting-edge technological solutions anywhere in the
                                            world, Asvayuk Technologies Private Limited is your go-to partner. With a powerful combination of
                                            cutting-edge infrastructure, advanced talents, and next-generation experience, we
                                            enable enterprises.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="footer_menuinfo">
                                    <div className="footer_menu_title pb-2 mt-3 mt-md-0">
                                        <h4 className="fw-semibold">Our Services</h4>
                                    </div>
                                    <div className="footer_menu">
                                        <ul className="list-unstyled d-flex flex-column gap-2">
                                            <li>
                                                <Link to='/ecommerce-development'>eCommerce Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/ui-ux-design">UI/UX Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/search-engine-optimization">Search Engine Optimization</Link>
                                            </li>
                                            <li>
                                                <Link to="/website-development">Website Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/mobile-app-development">Mobile App Development</Link>
                                            </li>
                                            <li>
                                                <Link to="/enterprise-portal">Enterpise Portal Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="footer_menuinfo">
                                    <div className="footer_menu_title pb-2 mt-3 mt-md-0">
                                        <h4 className="fw-semibold">Quick Links</h4>
                                    </div>
                                    <div className="footer_menu">
                                        <ul className="list-unstyled d-flex flex-column gap-2">
                                            <li>
                                                <Link to="#">Career</Link>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/case-studies">Case Studies</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Press Releases</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact-us">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="# ">Privacy & Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer_menuinfo">
                                    <div className="footer_menu_title pb-2">
                                        <h3 className="fw-semibold">Contact Us</h3>
                                    </div>
                                    <div className="footer_menu">
                                        <ul className="list-unstyled d-flex flex-column gap-2 contact_info">
                                            <li>
                                                <Link to={"https://maps.app.goo.gl/4HYCGEiryydf54xdA"} className="d-flex gap-2 align-items-center">
                                                    <IoLocationSharp className='fs-2' />
                                                    <p className="text-white mb-0">SCO-44, Sector 5-MDC,Panchkula,Haryana</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <span to="#" className="d-flex gap-3 align-items-center">
                                                    <FaPhoneAlt />
                                                    <p className="text-white mb-0">
                                                        <Link to="tel:+91 94782 14592">+91 94782 14592</Link>
                                                    
                                                    </p>
                                                </span>
                                            </li>
                                            <li>
                                                <Link to="mailto:info@asvayuktech.com" className="d-flex gap-3 align-items-center">
                                                    <FaEnvelope />
                                                    <p className="text-white mb-0"> info@asvayuktech.com </p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <section className="footer_bottom bg-light text-center py-2">
                    <p className="mb-0 fw-medium">© Copyright 2024 - Asvayuk Technologies Private Limited.</p>
                </section>
                <div
      className="whatsapp-icon-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <span className="chat-text">Chat with us</span>}
      <a
        href="https://wa.me/919478214592"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"   
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
            </main>
        </>
    )
}

export default Footer
