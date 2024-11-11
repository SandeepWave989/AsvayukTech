import React from 'react'
import moonLight from '../Images/moonlight_logo.webp';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import caseStu2 from '../Images/caseStu2.webp';
import shopify from '../Images/shopifyimg.webp'
import optimization from "../Images/optimization.png"
import ecommerce from "../Images/eCommerce.webp"
import conclusion from "../Images/conclusion.webp"
import caseStu1 from '../Images/caseStu1.webp';
import caseStu3 from '../Images/caseStu3.webp';
import caseStu4 from '../Images/caseStu4.webp';
import caseStu5 from '../Images/caseStu5.webp';
import caseStu6 from '../Images/caseStu6.webp';
import caseStu8 from '../Images/caseStu8.webp';
import caseStu9 from '../Images/caseStu9.webp';
import caseStu10 from '../Images/caseStu.webp';
import html from '../Images/html-5.png';
import css from '../Images/css.png';
import js from '../Images/javascript.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SingleCaseStudy = () => {
    return (
        <>
            <Container fluid>

            <div className="row align-items-center" style={{background:"#F5C451"}}>
                <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                    <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                            <img src={moonLight} alt="" style={{mixBlendMode:"darken"}}/>
                        </div>
                        <div className="fullCaseStudy_textContent py-4">
                            <h2 className="fw-semibold lh-base fs-1">IT TAKES A CREATIVE MIND TO BE IN THE
                                FASHION BUSINESS.</h2>
                            <div className="subfullCaseStudy d-flex gap-3 py-4">
                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                    <span>UI/UX</span>
                                </div>
                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                    <span>E-commerce</span>
                                </div>
                                <div className="bg-dark text-white py-1 px-2 rounded-2">
                                    <span>Shopify</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center px-0">
                    <div className="fullCaseStudy_img w-75">
                        <img src={caseStu2} alt="" className="w-100" />
                    </div>
                </div>
            </div>
            </Container>

            <Container className="py-5" >
                <Row>
                    <Col lg={6}>
                        <h1 className='fw-bold mb-3 '>
                            About Forever21
                        </h1>
                        <p>
                            Forever 21, an esteemed fashion brand in the UAE, served as a fashion hub across its 17 locations for over a decade. Known for its trend agility and commitment to offering the latest runway designs, Forever 21 partnered with us to revamp its digital presence and local search visibility. Our aim was to enhance online engagement, attract fashion enthusiasts, and drive foot traffic to its stores, elevating its brand prominence in the UAE fashion landscape
                        </p>
                    </Col>
                    <Col lg="6" className=''>
                        <div className='problemstatement p-4'>
                            <div className="head">
                                <h4 className='titletext text-white mb-3'>
                                    Problem Statement
                                </h4>
                            </div>
                            <div className="content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eveniet provident earum minima in?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam rem magni explicabo reprehenderit animi, iste dolorem, omnis quam sit sint illo illum minima cupiditate tenetur nisi praesentium aut eius quibusdam vel sequi accusantium voluptate veritatis? Dolore explicabo hic molestiae neque in amet, quis deserunt perferendis ullam voluptatibus temporibus ea quas quaerat, soluta enim fugiat incidunt esse! Sint, non inventore!
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='py-5'>
                <Row>
                    <h2 className='stategy_title'>
                        Strategy and Implementation
                    </h2>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="strategycard">
                            <div className="cardimg mb-3">
                                <img src={optimization} alt="" width={"60px"} />
                            </div>
                            <h6 className="cardtitle mb-2">
                                On-Page Optimization
                            </h6>
                            <p className='cardcontent'>
                                Refining website elements to boost search engine rankings and enhance user experience.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="strategycard">
                            <div className="cardimg mb-3">
                                <img src={optimization} alt="" width={"60px"} />
                            </div>
                            <h6 className="cardtitle mb-2">
                                On-Page Optimization
                            </h6>
                            <p className='cardcontent'>
                                Refining website elements to boost search engine rankings and enhance user experience.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="strategycard">
                            <div className="cardimg mb-3">
                                <img src={optimization} alt="" width={"60px"} />
                            </div>
                            <h6 className="cardtitle mb-2">
                                On-Page Optimization
                            </h6>
                            <p className='cardcontent'>
                                Refining website elements to boost search engine rankings and enhance user experience.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="strategycard">
                            <div className="cardimg mb-3">
                                <img src={optimization} alt="" width={"60px"} />
                            </div>
                            <h6 className="cardtitle mb-2">
                                On-Page Optimization
                            </h6>
                            <p className='cardcontent'>
                                Refining website elements to boost search engine rankings and enhance user experience.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">
                <Row>
                    <Col lg={8}>
                        <h2 className='sectitle mb-3'>
                            Tech Stack
                        </h2>
                        <Row>
                            <Col lg={3}>
                                <img src={shopify} alt="" width={"100%"} />
                            </Col>
                            <Col lg={3}>
                                <img src={shopify} alt="" width={"100%"} />
                            </Col>
                            <Col lg={3}>
                                <img src={shopify} alt="" width={"100%"} />
                            </Col>
                            <Col lg={3}>
                                <img src={shopify} alt="" width={"100%"} />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                    <div className='cubewrapper'>

                        <div id="cube">
                            <div class="front"><img src={html} title='html' width="100%" /></div>
                            <div class="back"><img src={css} title='css' width="75%" /></div>
                            <div class="right"><img src={js} title='js' width="100%" /></div>
                            <div class="left"><img src='https://svgshare.com/i/MiX.svg' title='github' width="75%" /></div>
                            <div class="top"><img src={shopify} width="80%" /> </div>
                            <div class="bottom"><img src="https://i.ibb.co/6rD3Vm5/greensock.png" alt="greensock" border="0" width="90%" /></div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Container className="py-5">

                <h2 className='sectitle mb-3'>
                    Final Results
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam natus voluptates quod obcaecati quas ad nesciunt incidunt nam minima dolorum quae beatae ipsam autem dolore, repellat deserunt? At quam obcaecati eum minus odit? Atque eos eaque voluptas deserunt non reiciendis labore praesentium asperiores quisquam laborum optio numquam quis libero dignissimos debitis incidunt, ratione nihil vero officia accusantium magni obcaecati omnis? Unde dolorum laudantium facilis minima excepturi maxime!
                </p>
                <p>
                    Following the implementation of our SEO strategies, Forever 21 experienced significant improvements across key metrics:
                </p>
                <Row>
                    <Col lg={8}>
                        <ul className=''>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi laborum quia quod molestiae voluptates blanditiis commodi voluptatum natus obcaecati, eius similique facilis ipsam?
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <img src={ecommerce} alt="" width={"100%"} />
                    </Col>
                </Row>
                <Row>


                </Row>
            </Container>
            <Container className='py-5'>
                <Row>
                    <Col lg={4}>
                        <img src={conclusion} alt="" width={"100%"} />
                    </Col>
                    <Col lg={8}>
                        <h2 className="sectitle">
                            Conclusion
                        </h2>
                        <br>
                        </br>
                        <p className='text-black'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo omnis aut distinctio, recusandae quam quod mollitia incidunt iure vero officiis aspernatur deserunt dignissimos doloremque blanditiis voluptatem, nemo eos. A nisi illo ab error optio possimus odit, atque accusamus consequatur soluta.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* <!-- Case Studies --> */}
            <section className="caseStuides d-none d-lg-block d-md-block">
                <Container>
                    <div className="caseStuides_content">
                        <h5>Case Studies</h5>
                        <Row className="align-items-start">
                            <div className="col-8">
                                <h1 className="fw-semibold"> Practical Solutions That Revolutionized Industries!</h1>
                            </div>
                            <div className="col-lg-4 text-end fw-bold">
                                <Link to="/case-studies">View All Case Studies →</Link>
                               
                            </div>
                        </Row>
                    </div>
                    <div className="container_extraWidth">
                        <Row>
                            <div className="col-lg-12 projectCase">
                                <Swiper
                                    modules={[Navigation, Scrollbar, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={4.3}
                                    navigation
                                    // pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,

                                    }}
                                    loop={true}
                                    breakpoints={{
                                        1400: {
                                            slidesPerView: 4.5,
                                        },
                                        1440: {
                                            slidesPerView: 4.5,
                                        },
                                    }}
                                    className='mySwiper1'
                                >
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu1} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Spicetribe</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu2} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Moonlight Concept</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu3} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">The Modarn Shop</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu4} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">49th Parallel</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu5} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Aus Brite Solar</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu6} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Krishna Pearls & Jewellers</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu8} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Book My Task</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu9} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Quadlockcase</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                            <div>
                                                <Link to="#"><img src={caseStu10} alt="" className="img-fluid" /></Link>
                                            </div>
                                            <div className="caseStuides_para">
                                                <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                <h5><Link to="#">Spicetribe</Link></h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SingleCaseStudy