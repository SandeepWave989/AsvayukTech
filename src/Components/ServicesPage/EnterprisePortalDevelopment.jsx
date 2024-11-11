import './Service.css'
import { useState } from 'react'
import { Breadcrumb, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import EnterprisesBanner from '../../Images/EnterprisesBanner.webp'
import adobe from '../../Images/adobe.webp'
import liferay from '../../Images/liferay.webp'
import siteonly from '../../Images/siteonly.webp'
import B2b from '../../Images/B2b.webp'
import eCommerce from '../../Images/eCommerce.webp'
import CustomerPortals from '../../Images/Customer-portals.webp'
import Emp from '../../Images/Employee.webp'
import SupplierVendor from '../../Images/Supplier-Vendor.webp'
import IntranetPortals from '../../Images/Intranet-Portals.webp'
import Extranet from '../../Images/Extranet.webp'
import Banking from '../../Images/Banking.webp'
import { IoCheckmark } from 'react-icons/io5'
import Groupp1 from '../../Images/Groupp-1.webp'
import Groupp2 from '../../Images/Groupp-2.webp'
import Groupp3 from '../../Images/Groupp-3.webp'
import Groupp4 from '../../Images/Groupp-4.webp'
import Groupp5 from '../../Images/Groupp-5.webp'
import Groupp6 from '../../Images/Groupp-6.webp'
import Groupp7 from '../../Images/Groupp-7.webp'
import teacher from '../../Images/teacher.webp'
import Meta_Component from '../Meta_Component/Meta_Component'

function EnterprisePortalDevelopment() {
    const [activeTab, setActiveTab] = useState('B2B');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <>
            <Meta_Component
                title="Enterprise Portal Development Services - Asvayuk Technologies"
                description="We provide robust, reliable and secure enterprise portal development services & solutions that streamlines your business and operations. Lets get started! "
                canonical="https://asvayuktech.com/enterprise-portal"
            />
            <main>

                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Enterprise Portal Development</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1>Next-Generation Business Growth Enterprise Portal Development</h1>
                                    <p className="py-3">Utilizing Adobe Experience Manager (AEM), Liferay, and Sitecore to build advanced enterprise portal development that streamline workflows, foster collaboration, and drive digital transformation.</p>

                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg">
                                    <img src={EnterprisesBanner} alt="" width="100%" height="100%" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="below-banner">
                    <Container>
                        <Row>
                            <div className="col-lg-12">
                                <div className="digital-ex text-center">
                                    <div className="digi-head">
                                        <h2 className="fw-semibold">Open a Combined Digital Experience for Success in B2B and B2C</h2>
                                    </div>
                                    <p className="mt-4 text-center">In today's fast-paced business environment, fragmented information and isolated processes can impede productivity and customer satisfaction. An enterprise portal development in Chandigarh serves as a centralized web platform, providing unified access to crucial information, applications, and functionalities. At Asvayuk Technologies, we specialize in developing customized portals Development in Panchkula that seamlessly integrate with existing enterprise systems such as CRM, ERP, and HR, offering a cohesive user experience tailored to distinct roles and requirements. Essentially, our enterprise portals act as digital nerve centers, linking your digital ecosystem to enhance collaboration, accessibility, and business agility.
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="cards-section">
                    <div className="customer-ex text-center pb-5">
                        <h2>Transforming Digital and Customer Experiences</h2>
                        <p className="pt-2">Our custom-built enterprise portals empower B2B and B2C businesses to:</p>
                    </div>
                    <Container>
                        <Row>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4 ">Enhanced Productivity</h5>
                                    <p>Simplify workflows, role-specific access to information, and automate tasks to empower employees to focus on high-impact activities.
                                        Improved Customer Experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Improved Customer Experience</h5>
                                    <p>Provide self-service portals for customers, enabling 24/7 access to account details, knowledge bases, and support resources.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Real-time Collaboration</h5>
                                    <p>Facilitate seamless communication and collaboration across departments and teams to enhance productivity and innovation.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Data-Driven Decision-Making</h5>
                                    <p>Integrate analytics dashboards and reporting tools to support informed decision-making and business strategy.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Increased Visibility and Control</h5>
                                    <p>Centralize oversight of business processes and user activities to ensure transparency and efficiency.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Personalized Dashboards</h5>
                                    <p>Tailor dashboards for B2B users to track order statuses, and for B2C customers to view personalized product recommendations and loyalty program updates.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Content Management</h5>
                                    <p>Deliver targeted content based on customer behavior and preferences, enhancing engagement and satisfaction through Enterprise Portal Development in Mohali
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Comprehensive Analytics Dashboard</h5>
                                    <p>Gain valuable insights into user behavior and content performance through robust analytics. Analyze customer journeys, identify areas for improvement, and optimize both B2B and B2C portal experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                                <div className="digi-cards bg-white px-3 py-2">
                                    <h5 className="fw-semibold mt-4">Security Features</h5>
                                    <p>Implement robust security measures to safeguard sensitive B2B and B2C customer data within your enterprise portal, ensuring trust and compliance.</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="choice-section">
                    <Container>
                        <div className="choice text-center pb-5 px-5 text-center">
                            <h2>The Advantage of Option: Sitecore, Liferay, and AEM Solutions</h2>
                            <p className="pt-2">Asvayuk Technologies offers unparalleled expertise in developing enterprise portals on
                                three
                                of
                                the industry's most powerful platforms:</p>
                        </div>
                    </Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid pb-2" src={adobe} />
                                <p>Leverage AEM's robust content management capabilities and personalization features to deliver
                                    exceptional customer experience
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid pb-2" src={liferay} />
                                <p>Benefit from Liferay's open-source flexibility and scalability to build secure and scalable
                                    enterprise portals.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <img className="img-fluid pb-2" src={siteonly} />
                                <p className="mt-2">Utilize Sitecore's powerful experience management tools to create engaging and
                                    interactive user
                                    interfaces.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tabs-section">
                    <div className="container">
                        <div className="row">
                            <div className="choice d-flex justify-content-center flex-column">
                                <h2 className="fw-semibold">Beyond the Basics: A Multifaceted Approach to<br />Enterprise Portal
                                    Development</h2>
                                <p className="pt-2">We understand that every business has unique needs. Asvayuk Technologies offers a comprehensive approach to enterprise portal development in Chandigarh, encompassing various portal types:
                                </p>
                            </div>
                            <div className="tabs">
                                <div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'B2B' ? 'active' : ''}`}
                                                id="home-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="B2B"
                                                aria-selected={activeTab === 'B2B'}
                                                onClick={() => handleTabClick('B2B')}
                                            >
                                                B2B Portal
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'ecomm' ? 'active' : ''}`}
                                                id="profile-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="ecomm"
                                                aria-selected={activeTab === 'ecomm'}
                                                onClick={() => handleTabClick('ecomm')}
                                            >
                                                E-commerce Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'custp' ? 'active' : ''}`}
                                                id="customer-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="custp"
                                                aria-selected={activeTab === 'custp'}
                                                onClick={() => handleTabClick('custp')}
                                            >
                                                Customer Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'employeee' ? 'active' : ''}`}
                                                id="employee-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="employeee"
                                                aria-selected={activeTab === 'employeee'}
                                                onClick={() => handleTabClick('employeee')}
                                            >
                                                Employee Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'suppli-ven' ? 'active' : ''}`}
                                                id="supplier-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="suppli-ven"
                                                aria-selected={activeTab === 'suppli-ven'}
                                                onClick={() => handleTabClick('suppli-ven')}
                                            >
                                                Supplier and Vendor Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'intranet' ? 'active' : ''}`}
                                                id="intranet-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="intranet"
                                                aria-selected={activeTab === 'intranet'}
                                                onClick={() => handleTabClick('intranet')}
                                            >
                                                Intranet Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'extranet' ? 'active' : ''}`}
                                                id="extranet-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="extranet"
                                                aria-selected={activeTab === 'extranet'}
                                                onClick={() => handleTabClick('extranet')}
                                            >
                                                Extranet and Partner Portals
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className={`nav-link border-0 text-dark fw-bold fs-6 ${activeTab === 'banking' ? 'active' : ''}`}
                                                id="banking-tab"
                                                type="button"
                                                role="tab"
                                                aria-controls="banking"
                                                aria-selected={activeTab === 'banking'}
                                                onClick={() => handleTabClick('banking')}
                                            >
                                                Banking and Insurance Portals
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={`tab-pane fade ${activeTab === 'B2B' ? 'show active' : ''}`} id="B2B" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>B2B portals</h1>
                                                    <p className="mt-4">Streamline communication and collaboration with partners,
                                                        vendors,<br /> and suppliers.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure document sharing and collaboration tools for
                                                                    proposals,<br />
                                                                    contracts, and project documents.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Real-time inventory visibility and order tracking for vendors
                                                                    and<br />
                                                                    suppliers.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Online forums and discussion boards for fostering
                                                                    communication<br />
                                                                    and knowledge sharing.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Collaborative project management tools for joint ventures and<br />
                                                                    projects.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Vendor onboarding and management functionalities.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={B2b} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'ecomm' ? 'show active' : ''}`} id="ecomm" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>E-commerce Portals</h1>
                                                    <p className="mt-4">Enhance your B2B or B2C online store with integrated
                                                        functionalities
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure and user-friendly online storefront with product catalogs
                                                                    and<br />search functionalities.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Personalized shopping experiences with customer account <br />
                                                                    management and order history.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Shopping cart functionality with secure payment gateways.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Order tracking and fulfillment management tools.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Real-time inventory management and stock updates.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Content management system for managing product descriptions, <br />
                                                                    marketing materials, and promotions.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={eCommerce} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'custp' ? 'show active' : ''}`} id="custp" role="tabpanel" aria-labelledby="customer-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Customer Portals</h1>
                                                    <p className="mt-4">Empower customers with self-service options, account management,
                                                        <br /> and knowledge bases.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure self-service portal for tasks like account management,
                                                                    order
                                                                    <br /> tracking, and service requests.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Online knowledge base with FAQs, troubleshooting guides, and <br />
                                                                    product manuals.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Secure document download center for invoices, receipts, and other
                                                                    <br /> account-related documents.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Live chat or ticketing system for customer support inquiries.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Personalized dashboards displaying relevant account information
                                                                    <br />
                                                                    and order history.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={CustomerPortals} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'employeee' ? 'show active' : ''}`} id="employeee" role="tabpanel" aria-labelledby="employee-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Employee Portals</h1>
                                                    <p className="mt-4">Centralize HR resources, company announcements, and internal
                                                        <br />
                                                        communication tools.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure access to company policies, employee handbooks, and <br />
                                                                    benefits information.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Internal directory for employee contact information.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Company news and announcements feed.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Internal communication tools like forums, message boards, and
                                                                    <br />
                                                                    polls.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Self-service HR functionalities like timesheet management, leave
                                                                    <br />
                                                                    requests, and payroll information access.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Training and development resources with document libraries and
                                                                    <br />
                                                                    online courses.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={Emp} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'suppli-ven' ? 'show active' : ''}`} id="suppli-ven" role="tabpanel" aria-labelledby="supplier-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Supplier and Vendor <br /> Portals</h1>
                                                    <p className="mt-4">Streamline procurement processes and improve vendor
                                                        collaboration.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure portal for submitting bids and proposals electronically.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Online portal for receiving purchase orders and managing
                                                                    invoices.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Real-time order tracking and status updates.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Collaboration tools for communication and exchange of documents
                                                                    <br />
                                                                    related to purchase orders.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Performance feedback and evaluation mechanisms for vendors.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={SupplierVendor} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'intranet' ? 'show active' : ''}`} id="intranet" role="tabpanel" aria-labelledby="intranet-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Intranet Portals</h1>
                                                    <p className="mt-4">Facilitate internal communication, knowledge sharing, and
                                                        document
                                                        <br /> management.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure platform for company-wide announcements and news <br />
                                                                    updates.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Internal discussion boards and forums for employee engagement
                                                                    <br />
                                                                    and knowledge sharing.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Document management system for centralized storage, access, and
                                                                    <br />
                                                                    version control of company documents.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Internal social networking features for fostering employee <br />
                                                                    collaboration and building connections.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Company calendar and event management tools.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={IntranetPortals} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'extranet' ? 'show active' : ''}`} id="extranet" role="tabpanel" aria-labelledby="extranet-tab">
                                            <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                                                <div className="b2b-left">
                                                    <h1>Extranet and Partner <br /> Portals</h1>
                                                    <p className="mt-4">Securely collaborate with external partners and manage joint
                                                        projects.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure access for authorized external partners to collaborate
                                                                    <br /> on
                                                                    projects.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Secure document sharing and co-editing functionalities.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Project management tools for tracking progress, deadlines, and
                                                                    <br />
                                                                    tasks.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Communication tools like instant messaging and online meetings
                                                                    for
                                                                    <br /> real-time collaboration.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Joint reporting and analytics dashboards for shared project <br />
                                                                    insights.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={Extranet} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`tab-pane fade ${activeTab === 'banking' ? 'show active' : ''}`} id="banking" role="tabpanel" aria-labelledby="banking-tab">
                                            <div className="b2b-main d-flex mt-5">
                                                <div className="b2b-left">
                                                    <h1>Banking and Insurance Portals</h1>
                                                    <p className="mt-4">Provide secure access to customer accounts, financial
                                                        information,
                                                        and <br /> self-service options.
                                                    </p>
                                                    <div className="check-para">
                                                        <div className="check-one d-flex gap-3">
                                                            <div className="checkone-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkone-right gap-3">
                                                                <p>Secure login for online banking or insurance policy management.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-two d-flex gap-3">
                                                            <div className="checktwo-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checktwo-right">
                                                                <p>Account dashboards displaying account balances, transaction <br />
                                                                    history, and policy details.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-three d-flex gap-3">
                                                            <div className="checkthree-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkthree-right">
                                                                <p>Bill payment and fund transfer functionalities.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-four d-flex gap-3">
                                                            <div className="checkfour-left">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfour-right">
                                                                <p>Secure online forms for submitting claims, requesting policy
                                                                    changes,
                                                                    <br /> or contacting customer support.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-five d-flex gap-3">
                                                            <div className="checkfive-left gap-3">
                                                                <IoCheckmark />
                                                            </div>
                                                            <div className="checkfive-right">
                                                                <p>Personalized financial management tools and budgeting resources.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="b2b-right">
                                                    <img src={Banking} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="secure-scalable">
                    <div className="container">
                        <div className="secure text-center pb-5 text-center">
                            <h2>Building a Secure and Scalable Enterprise Portal Development Process</h2>
                            <p className="pt-2">At Asvayuk Technologies, we follow a proven development process to ensure your
                                enterprise
                                portal
                                delivers optimal results:</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 h-100 mt-5">
                                <img src={teacher} alt="" className="img-fluid" />
                            </div>
                            <div className="right-secure col-lg-6 col-md-6 col-sm-12 col-12 h-100">
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="common-left p-0">
                                        <img src={Groupp1} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Discovery and Consultation</h5>
                                        <p>We collaborate with you to understand your specific business goals, target audience,
                                            and technical requirements.</p>
                                    </div>
                                </div>
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="common-left p-0">
                                        <img src={Groupp2} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Platform Selection</h5>
                                        <p>Based on your needs, we recommend the most suitable platform (AEM, Liferay, or
                                            Sitecore) for your enterprise portal.</p>
                                    </div>
                                </div>
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="common-left p-0">
                                        <img src={Groupp3} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Information Architecture Design</h5>
                                        <p>We define the structure and organization of content within the portal to ensure
                                            user-friendliness.</p>
                                    </div>
                                </div>
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="common-left p-0">
                                        <img src={Groupp4} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Development and Customization</h5>
                                        <p>Our skilled developers build the portal using your chosen platform, integrating
                                            essential functionalities and customizing the user interface.</p>
                                    </div>
                                </div>
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="common-left p-0">
                                        <img src={Groupp5} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Content Creation and Management</h5>
                                        <p>We create compelling content for your portal, ensuring consistent branding and user
                                            engagement.</p>
                                    </div>
                                </div>
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="common-left p-0">
                                        <img src={Groupp6} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Testing and Deployment</h5>
                                        <p>We rigorously test the portal for functionality, security, and performance before
                                            deployment.</p>
                                    </div>
                                </div>
                                <div className="common-para mb-4 d-flex gap-3">
                                    <div className="p-0">
                                        <img src={Groupp7} alt="" />
                                    </div>
                                    <div className="common-right">
                                        <h5>Ongoing Support and Maintenance</h5>
                                        <p>We provide comprehensive support to ensure the portals smooth operation and timely
                                            updates.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="supercharge-section">
                    <div className="container">
                        <div className="row">
                            <div className="choice pb-5">
                                <h2 className="fw-semibold">Supercharge Your Business with Asvayuk Technologies's<br />Enterprise Portal
                                    Development</h2>
                                <p className="pt-2">In today's digital landscape, a robust enterprise portal isn't a luxury; it's a
                                    necessity. However, choosing the right development partner is crucial. Here's why Asvayuk Technologies stands out:</p>
                                <ul>
                                    <li><span className="fw-bold">Multi-Platform Expertise:</span> We offer development on leading
                                        platforms like
                                        Liferay and Sitecore to fit your specific needs.</li>
                                    <li><span className="fw-bold">Scalable Solutions:</span> Our portals are built to scale with
                                        your business and
                                        evolving
                                        requirements.</li>
                                    <li><span className="fw-bold">Security-Focused Development:</span> We prioritize the security
                                        and integrity of
                                        your
                                        sensitive
                                        data.</li>
                                    <li><span className="fw-bold">Data-Driven Approach:</span> We leverage data insights to optimize
                                        your portal's
                                        performance and
                                        user experience</li>
                                    <li><span className="fw-bold">Experienced Team:</span> Our team of skilled developers and
                                        strategists ensures a
                                        successful
                                        project execution.</li>
                                    <li><span className="fw-bold">UI/UX Design:</span> Our design team creates intuitive and
                                        user-friendly
                                        interfaces
                                        that ensure a
                                        seamless user experience for all stakeholders, maximizing portal adoption and
                                        engagement.
                                    </li>
                                    <li><span className="fw-bold">Post-Launch Support:</span> We are your trusted partner, providing
                                        ongoing support
                                        and
                                        maintenance
                                        to keep your portal running smoothly. We are ready to address any questions or future
                                        needs
                                        you have, ensuring your portal thrives and continues to deliver exceptional value.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default EnterprisePortalDevelopment
