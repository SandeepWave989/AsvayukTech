import './Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Images/logo.webp';

import { FaAngleDown, FaAngleRight, FaRegCircleDot } from 'react-icons/fa6';
import { Accordion, Col, Row, Tab } from 'react-bootstrap';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Function to close mega menu on link click
  const handleMegaMenuLinkClick = () => { 
    setIsMegaMenuOpen(false);
  };
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main>
        {/* <section className="topbar py-2">
          <Container>
            <marquee direction="left" className="text-white">
              <span>Asvayuk Technologies signs a partnership with Channel Engine to provide e-commerce marketplace
                solution to customers in Chandigarh location</span>
              <span className='px-2'><FaRegCircleDot /></span>
              <span>Asvayuk Technologies signs a partnership with Channel Engine to provide e-commerce marketplace
                solution to customers in Chandigarh location</span>
              <span className='px-2'><FaRegCircleDot /></span>
              <span>Asvayuk Technologies signs a partnership with Channel Engine to provide e-commerce marketplace
                solution to customers in Chandigarh location</span>
            </marquee>
          </Container>
        </section> */}

        <Navbar expand="lg" className="header">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='menu-list'>
              <Nav>
                <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>

                {/* Dropdown Menu with hover functionality */}
                <Nav.Link
                  as={Link}
                  to="#"
                  className='dropdownMenu'
                  onMouseEnter={() => setIsMegaMenuOpen(true)}  // Open on hover
                  onMouseLeave={() => setIsMegaMenuOpen(false)}  // Close on mouse leave
                >
                  Our Services <FaAngleDown />
                  {isMegaMenuOpen && (
                    <div className='megaMenu d-flex justify-content-between'>
                      <Tab.Container id="left-tabs-example" defaultActiveKey="technology">
                        <div className='side-tab-list'>
                          <Row>
                            <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="technology">
                                  <div className='tabIcons d-flex w-100 justify-content-between align-items-center'>
                                    <span>Technology</span>
                                    <FaAngleRight />
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="marketing">
                                  <div className='tabIcons d-flex w-100 justify-content-between align-items-center'>
                                    <span>Marketing</span>
                                    <FaAngleRight />
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="design">
                                  <div className='tabIcons d-flex w-100 justify-content-between align-items-center'>
                                    <span>Design</span>
                                    <FaAngleRight />
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="products">
                                  <div className='tabIcons d-flex w-100 justify-content-between align-items-center'>
                                    <span>Products</span>
                                    <FaAngleRight />
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Row>
                        </div>
                        <div className='submenu-list px-5 py-5 mx-3'>
                          <Tab.Content>
                            <Tab.Pane eventKey="technology">
                              <Row>
                                <h5 className='pb-3 fw-semibold'>Technology</h5>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/enterprise-portal' onClick={handleMegaMenuLinkClick}>Enterprise Portal Development</Link>
                                    <Link to='/lowcode-nocode-app' onClick={handleMegaMenuLinkClick}>lowCode/noCode-app</Link>
                                    <Link to='/blockchain-development' onClick={handleMegaMenuLinkClick}>Blockchain Development</Link>
                                    <Link to='/saas-development' onClick={handleMegaMenuLinkClick}>Saas Development</Link>
                                    <Link to='/laravel-development' onClick={handleMegaMenuLinkClick}>Laravel Development</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/mobile-app-development' onClick={handleMegaMenuLinkClick}>Mobile App Development</Link>
                                    <Link to='/woocomerce-development' onClick={handleMegaMenuLinkClick}>WooCommerce Development</Link>
                                    <Link to='/magento-development' onClick={handleMegaMenuLinkClick}>Magento Development</Link>
                                    <Link to='/shopify-development' onClick={handleMegaMenuLinkClick}>Shopify Development</Link>
                                    <Link to='/ar-vr-development' onClick={handleMegaMenuLinkClick}>AR/VR Development</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/website-development' onClick={handleMegaMenuLinkClick}>Website Development</Link>
                                    <Link to='/ecommerce-development' onClick={handleMegaMenuLinkClick}>E-commerce Development</Link>
                                    <Link to='/react-native-development' onClick={handleMegaMenuLinkClick}>React Native Development</Link>
                                    <Link to='/software-development' onClick={handleMegaMenuLinkClick}>Software Development</Link>
                                  </div>
                                </Col>
                                {/* More columns... */}
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="marketing">
                              <Row>
                                <h5 className='pb-3 fw-semibold'>Marketing</h5>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/performance-marketing' onClick={handleMegaMenuLinkClick}>Performance Marketing</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/social-media-marketing' onClick={handleMegaMenuLinkClick}>Social Media Marketing</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/search-engine-optimization' onClick={handleMegaMenuLinkClick}>Search Engine Optimization</Link>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="design">
                              <Row>
                                <h5 className='pb-3 fw-semibold'>Design</h5>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='/ui-ux-design' onClick={handleMegaMenuLinkClick}>UI UX Design</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='#'></Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='#'></Link>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="products">
                              <Row>
                                <h5 className='pb-3 fw-semibold'>Products</h5>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>AI Chat Bot</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Crypto Wallet</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Game (24 Game)</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Crypto Exchange</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Layer 1/Layer 2 BlockChain</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>CRM/ERP</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Trading Bot</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>MLM Software</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>School Management</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Hospital Management</Link>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <div className='tab-menus d-flex flex-column gap-4'>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>DAP/DAO</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Job Portal</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Uber/Ola Clone</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Zomato/Urbanup Clone</Link>
                                    <Link to='#' onClick={handleMegaMenuLinkClick}>Multivendor Ecommerce</Link>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Tab.Container>
                    </div>
                  )}
                </Nav.Link>

                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                <Nav.Link as={Link} to="/case-studies">Case Studies</Nav.Link>
                <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section className='mobile-navbar border-bottom py-2'>
          <Container>
            <div className='d-flex justify-content-between align-items-center'>
              <Navbar.Brand as={Link} to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </Navbar.Brand>
              <div className='toggle-icon' onClick={toggleMenu}>
                <HiOutlineBars3 />
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className='mobile-menu-list py-3 px-4'>
                <div className='text-end'>
                  <div className='close-menuList' onClick={toggleMenu}>
                    <IoClose />
                  </div>
                </div>
                <div className='list-menus py-3'>
                  <ul className='list-unstyled d-flex flex-column gap-4'>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="about-us" onClick={toggleMenu}>About Us</Link></li>
                    <li className='d-flex justify-content-between align-items-center'>
                      <div>
                        <span>Our Services</span>
                      </div>
                      <div className='angle-downIcon' onClick={toggleVisibility}>
                        <FaAngleDown />
                      </div>
                    </li>
                    {isVisible && (
                      <Accordion className='sideMobile-tab'>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className=''>Technology</Accordion.Header>
                          <Accordion.Body>
                            <div>
                              <ul className='list-unstyled d-flex flex-column'>
                                <li className='py-2 border-bottom'><Link to='/enterprise-portal' onClick={toggleMenu}>Enterprise Portal Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/lowcode-nocode-app' onClick={toggleMenu}>lowCode/noCode-app</Link></li>
                                <li className='py-2 border-bottom'><Link to='/blockchain-development' onClick={toggleMenu}>Blockchain Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/saas-development' onClick={toggleMenu}>Saas Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/laravel-development' onClick={toggleMenu}>Laravel Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/mobile-app-development' onClick={toggleMenu}>Mobile App Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/woocomerce-development' onClick={toggleMenu}>WooCommerce Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/magento-development' onClick={toggleMenu}>Magento Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/shopify-development' onClick={toggleMenu}>Shopify Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/ar-vr-development' onClick={toggleMenu}>AR/VR Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/website-development' onClick={toggleMenu}>Website Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/ecommerce-development' onClick={toggleMenu}>E-commerce Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/react-native-development' onClick={toggleMenu}>React Native Development</Link></li>
                                <li className='py-2 border-bottom'><Link to='/software-development' onClick={toggleMenu}>Software Development</Link></li>
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mt-2'>
                          <Accordion.Header>Marketing</Accordion.Header>
                          <Accordion.Body>
                            <div>
                              <ul className='list-unstyled d-flex flex-column'>
                                <li className='py-2 border-bottom'><Link to='/performance-marketing' onClick={toggleMenu}>Performance Marketing</Link></li>
                                <li className='py-2 border-bottom'><Link to='/social-media-marketing' onClick={toggleMenu}>Social Media Marketing</Link></li>
                                <li className='py-2 border-bottom'><Link to='/search-engine-optimization' onClick={toggleMenu}>Search Engine Optimization</Link></li>
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mt-2'>
                          <Accordion.Header>Design</Accordion.Header>
                          <Accordion.Body>
                            <div>
                              <ul className='list-unstyled d-flex flex-column'>
                                <li className='py-2 border-bottom'><Link to='/ui-ux-design' onClick={toggleMenu}>UI UX Design</Link></li>
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='mt-2'>
                          <Accordion.Header>Products</Accordion.Header>
                          <Accordion.Body>
                            <div>
                              <ul className='list-unstyled d-flex flex-column'>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>AI Chat Bot</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Crypto Wallet</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Game (24 Game)</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Crypto Exchange</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Layer 1/Layer 2 BlockChain</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>CRM/ERP</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Trading Bot</Link></li>
                                <li className='py-2 border-bottom'><Link to='/mlm-software' onClick={toggleMenu}>MLM Software</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>School Management</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Hospital Management</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>DAP/DAO</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Job Portal</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Uber/Ola Clone</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Zomato/Urbanup Clone</Link></li>
                                <li className='py-2 border-bottom'><Link to='#' onClick={toggleMenu}>Multivendor Ecommerce</Link></li>
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )}
                    <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
                    <li><Link to="/case-studies" onClick={toggleMenu}>Case Studies</Link></li>
                    <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </Container>
        </section>

      </main>
    </>
  );
}
