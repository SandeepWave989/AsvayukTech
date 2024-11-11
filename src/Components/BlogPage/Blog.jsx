import "./Blog.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'; import "swiper/css";
import "swiper/css/pagination";
import c3 from "../../Images/shopi.png";
import c4 from "../../Images/portal_banner.png";
import seo from "../../Images/seo_banner.png";
import mlm from "../../Images/seo_banner.png";
import smart from "../../Images/seo_banner.png";
import crypto from "../../Images/seo_banner.png";
import cryptoEx from "../../Images/seo_banner.png";
import BlockChainI from "../../Images/seo_banner.png";
import { Col, Container, Row } from "react-bootstrap";
import CardBlog from "./CardBlog";
import { Link } from 'react-router-dom';
import Meta_Component from "../Meta_Component/Meta_Component";
import BlockChain from "../ServicesPage/BlockChain";

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
                    </Swiper>
                </section>

                <section className="blog_banner_content p-5">
                    <Container>
                        <Row>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic">
                                            <CardBlog singleBlogImg={seo} time=' 6 Nov 2024' blogTitle='Boost Your Business with SEO: Key Tactics to Drive Organic Traffic' blogPara='Your guide to SEO success—explore top tips for ranking higher, increasing traffic, and optimizing your digital strategy.' CommentNum='0' viwer='285' urlSingleBlog='/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development'">
                                            <CardBlog singleBlogImg={c3} time=' 7 Nov 2024' blogTitle='Revolutionize Your Business with Asvayuks Shopify Development' blogPara='Custom Shopify solutions to grow your e-commerce business with expert setup, app development, and ongoing support.' CommentNum='0' viwer='285' urlSingleBlog='/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals">
                                            <CardBlog singleBlogImg={c4} time=' 17 May, 2024' blogTitle='Enhance Efficiency with Custom Enterprise Portals' blogPara='Transform your business with Asvayuk Tech’s enterprise portals. Simplify processes, improve collaboration, and drive growth with a centralized solution tailored to your needs' CommentNum='0' viwer='285' urlSingleBlog='/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={mlm} time=' 11 Nov 2024' blogTitle='MLM Software Developer in Chandigarh, Panchkula, Mohali' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={smart} time=' 11 Nov 2024' blogTitle='Smart Contract Developer in Chandigarh, Panchkula, Mohali' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Crypto-Software-Developer-in-Chandigarh">
                                            <CardBlog singleBlogImg={crypto} time=' 11 Nov 2024' blogTitle='Crypto Software Developer in Chandigarh' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/Crypto-Software-Developer-in-Chandigarh' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Crypto-Exchange-Developer-in-Chandigarh-Zirakpur-Mohali">
                                            <CardBlog singleBlogImg={cryptoEx} time=' 11 Nov 2024' blogTitle='Crypto Exchange Developer in Chandigarh, Zirakpur, Mohali' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/Crypto-Exchange-Developer-in-Chandigarh-Zirakpur-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={BlockChain} time=' 11 Nov 2024' blogTitle='Blockchain Developer in Zirakpur, Chandigarh, Panchkula, Mohali' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/CRM-Developer-in-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={BlockChain} time=' 11 Nov 2024' blogTitle='CRM Developer in Chandigarh, Panchkula, Mohali' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/CRM-Developer-in-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
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
                    </Container>
                </section >

            </main >

        </>
    )
}

export default Blog
