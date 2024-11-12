import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const AutoPopupModal = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the modal once after 2 seconds
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timeout); // Clean up the timeout on component unmount
    }, []);

    const handleClose = () => {
        setIsVisible(false);

        // Reopen the modal after 3 seconds (adjust timing as needed)
        const reopenTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(reopenTimeout); // Clean up the timeout if the modal is closed again
    };

    return (
        <>
            {isVisible && (
                <div className="modal-overlay1">
                    <div className="modal-popup1">
                        <button className="close-button bg-transparent border-0 text-end w-100 fs-3" style={{ mixBlendMode: 'difference', color: '#fff' }} onClick={handleClose}>
                            &times;
                        </button>
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
                                            <a href="https://maps.google.com/?q=SCO-44, Sector 5-MDC,Panchkula,Haryana" target="_blank" rel="noopener noreferrer">
                                                <p>SCO-44, Sector 5-MDC, Panchkula, Haryana</p>
                                            </a>
                                        </div>
                                        <div className="information">
                                            <MdMail />
                                            <a href="mailto:info@asvayuktech.com">
                                                <p>info@asvayuktech.com</p>
                                            </a>
                                        </div>
                                        <div className="information">
                                            <FaPhone />
                                            <a href="tel:+919478214592">
                                                <p>+91 94782 14592</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="social-media">
                                        <p>Connect with us :</p>
                                        <div className="social-icons">
                                            <a href="https://www.facebook.com/asvayuktechnologies/" target="_blank" rel="noopener noreferrer">
                                                <FaFacebookF />
                                            </a>
                                            <a href="https://x.com/asvayuktech" target="_blank" rel="noopener noreferrer">
                                                <FaXTwitter />
                                            </a>
                                            <a href="https://www.instagram.com/asvayuktechnologies/" target="_blank" rel="noopener noreferrer">
                                                <FaInstagram />
                                            </a>
                                            <a href="https://www.linkedin.com/company/asvayuk-technologies/" target="_blank" rel="noopener noreferrer">
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
                </div>
            )}

        </>
    );
};

export default AutoPopupModal;
