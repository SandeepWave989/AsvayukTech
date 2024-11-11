import "./Blog.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';import "swiper/css";
import "swiper/css/pagination";
import c1 from "../../Images/1.webp";
import c2 from "../../Images/2.webp";
import c3 from "../../Images/shopi.png";
import c4 from "../../Images/portal_banner.png";
import c5 from "../../Images/5.webp";
import c6 from "../../Images/6.webp";
import c7 from "../../Images/7.webp";
import c8 from "../../Images/8.webp";
import seo from "../../Images/seo_banner.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import CardBlog from "./CardBlog";
import Meta_Component from "../Meta_Component/Meta_Component";

function Blog() {
    return (
        <>
 <Meta_Component 
        title=" Blogs | Insights on Web Development & Digital Marketing"
        description=" Explore the Asvayuk Technologies  blog for expert insights on web development, digital marketing, and tech trends. Stay updated with our latest articles, tips, and industry news."
        canonical="https://asvayuktech.com/blog"
       />
            <main>

                <section className="blog-banner">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                        className="blogSwiper">
                        <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={seo} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c3} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                       <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c4} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                       {/*  <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c4} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c5} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c6} className="img-fluid" />
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </section>

                <section className="blog_banner_content p-5">
                    <Container>
                        <Row>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={seo} time=' 6 Nov 2024' blogTitle='Boost Your Business with SEO: Key Tactics to Drive Organic Traffic' blogPara='Your guide to SEO success—explore top tips for ranking higher, increasing traffic, and optimizing your digital strategy.' CommentNum='0' viwer='285' urlSingleBlog='/SingleBlog'/>
                                    </Col>
                                     <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={c3} time=' 7 Nov 2024' blogTitle='Revolutionize Your Business with Asvayuks Shopify Development' blogPara='Custom Shopify solutions to grow your e-commerce business with expert setup, app development, and ongoing support.' CommentNum='0' viwer='285' urlSingleBlog='/Shopify_Blog'/>
                                    </Col>
                                   <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={c4} time=' 17 May, 2024' blogTitle='Enhance Efficiency with Custom Enterprise Portals' blogPara='Transform your business with Asvayuk Tech’s enterprise portals. Simplify processes, improve collaboration, and drive growth with a centralized solution tailored to your needs
' CommentNum='0' viwer='285' urlSingleBlog='/Enterprise_Blog'/>
                                    </Col>
                                    {/* <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={c6} time=' 17 May, 2024' blogTitle='Asvayuk Technologies  Wins Liferay DXP Implementation' blogPara='Asvayuk Technologies  Wins Liferay DXP Implementation Project for Dubai CommerCity' CommentNum='0' viwer='285' urlSingleBlog='#'/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={c7} time=' 17 May, 2024' blogTitle='Asvayuk Technologies  Wins Liferay DXP Implementation' blogPara='Asvayuk Technologies  Wins Liferay DXP Implementation Project for Dubai CommerCity' CommentNum='0' viwer='285' urlSingleBlog='#'/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={c8} time=' 17 May, 2024' blogTitle='Asvayuk Technologies  Wins Liferay DXP Implementation' blogPara='Asvayuk Technologies  Wins Liferay DXP Implementation Project for Dubai CommerCity' CommentNum='0' viwer='285' urlSingleBlog='#'/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <CardBlog singleBlogImg={c8} time=' 17 May, 2024' blogTitle='Asvayuk Technologies  Wins Liferay DXP Implementation' blogPara='Asvayuk Technologies  Wins Liferay DXP Implementation Project for Dubai CommerCity' CommentNum='0' viwer='285' urlSingleBlog='#'/>
                                    </Col> */}
                                </Row>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="form-container">
                                    <div className="form-title form_heading">
                                        Unlock Your Business Potential with our Tech Solutions!
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="field1"
                                            name="name"
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            id="number"
                                            name="number"
                                            placeholder="Mobile Number"
                                            required=""
                                        />
                                    </div>
                                    <div className="captcha_box form-group">
                                        <div className="box d-flex gap-2">
                                            <input id="name" className="" type="checkbox" />
                                            <label htmlFor="name">I'm not a robot</label>
                                        </div>
                                    </div>
                                    <div className="form_button text-center">
                                        <button type="button">Let's Connect</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* <div>
                            <nav aria-label="..." className="border-0 pagination-scroll">
                                <ul className="pagination gap-2">
                                    <li className="page-item active" aria-current="page">
                                        <Link className="page-link" to="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            4
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            5
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            6
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            7
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            ...
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            12
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            Next <FaArrowRight />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                    </Container>
                </section>

            </main>

        </>
    )
}

export default Blog
