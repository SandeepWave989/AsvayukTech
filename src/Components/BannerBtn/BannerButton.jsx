import { FaChevronRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../App.css'
import React, {  useState } from 'react';
import { Modal, Row} from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
function BannerButton({btnTitle, url}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                <div className="heroBtn">
                    <Link to={url} className="d-flex align-items-center justify-content-between" onClick={(e) => {
                        e.preventDefault();
                        handleShow();
                    }}>
                        <div className="btnText px-3 py-3 text-light">
                            <span>{btnTitle}</span>
                        </div>
                        <div className="btn_icon px-4 py-2">
                            <FaChevronRight />
                        </div>
                    </Link>
                </div>
            </main>
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
          <label className='message'>Message</label>
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

        </>
    )
}

export default BannerButton
