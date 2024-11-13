import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import Home from './Components/HomePage/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './Components/ContactPage/Contact.jsx';
import CaseStudies from './Components/CaseStudiesPage/CaseStudies.jsx';
import Blog from './Components/BlogPage/Blog.jsx';
import EnterprisePortalDevelopment from './Components/ServicesPage/EnterprisePortalDevelopment.jsx';
import MobileAppDevelopment from './Components/ServicesPage/MobileAppDevelopment.jsx';
import About from './Components/About/About.jsx';
import Website_Development from './Components/ServicesPage/Website_Development.jsx';
import Performance from './Components/ServicesPage/Peformance.jsx';
import LowCode_NoCode from './Components/ServicesPage/LowCode_NoCode.jsx';
import Woocomerce from './Components/ServicesPage/Woocomerce.jsx';
import Ecommerce from './Components/ServicesPage/Ecommerce.jsx';
import BlockChain from './Components/ServicesPage/BlockChain.jsx';
import Magento_Dev from './Components/ServicesPage/Magento_Dev.jsx';
import React_Native from './Components/ServicesPage/React_Native.jsx';
import Saas_Dev from './Components/ServicesPage/Saas_Dev.jsx';
import Shopify_Dev from './Components/ServicesPage/Shopify_Dev.jsx';
import Software_Dev from './Components/ServicesPage/Software_Dev.jsx';
import Laravel_Dev from './Components/ServicesPage/Laravel_Dev.jsx';
import Ar_Vr_Dev from './Components/ServicesPage/Ar_Vr_Dev.jsx';
import Social_Media_Marketing from './Components/ServicesPage/Social_Media_Marketing.jsx';
import Search_Engine_Opti from './Components/ServicesPage/Search_Engine_Opti.jsx';
import UI_UX_Design from './Components/ServicesPage/UI_UX_Design.jsx';
import SingleBlog from './Components/BlogPage/SingleBlog.jsx';
import Shopify_Blog from './Components/BlogPage/Shopify_Blog.jsx';
import Enterprise_Blog from './Components/BlogPage/Enterprise_Blog.jsx';
import MLM_software_developer_Chandigarh from './Components/BlogPage/MLM_software_developer_Chandigarh.jsx';
import Smart_Contract_Developer_in_Chandigarh_Panchkula_Mohali from './Components/BlogPage/Smart_Contract_Developer_in_Chandigarh_Panchkula_Mohali.jsx';
import Crypto_Software_Developer_in_Chandigarh from './Components/BlogPage/Crypto_Software_Developer_in_Chandigarh.jxs.jsx';
import Crypto_Exchange_Developer from './Components/BlogPage/Crypto_Exchange_Developer.jsx';
import Blockchain_Developer from './Components/BlogPage/Blockchain_Developer.jsx';
import CRMDdeveloper from './Components/BlogPage/CRMDdeveloper.jsx';
import MLM_Software from './Components/ProductPages/MLM_Software.jsx';
import AI_chatBot from './Components/ProductPages/AI_chatBot.jsx';
import CRM_ERP from './Components/ProductPages/CRM_ERP.jsx';
import DAP_DAO from './Components/ProductPages/DAP_DAO.jsx';
import CryptoWallet from './Components/ProductPages/CryptoWallet.jsx';
import TradingBot from './Components/ProductPages/TradingBot.jsx';
import JobPortal from './Components/ProductPages/JobPortal.jsx';
import Game24 from './Components/ProductPages/Game24.jsx';
import Uber_ola_clone from './Components/ProductPages/Uber_ola_clone.jsx';
import CryptoExchange from './Components/ProductPages/CryptoExchange.jsx';
import SchoolManagement from './Components/ProductPages/SchoolManagement.jsx';
import Zomato_Urbanup_Clone from './Components/ProductPages/Zomato_Urbanup_Clone.jsx';
import Layer1_Layer2_BlockChain from './Components/ProductPages/Layer1_Layer2_BlockChain.jsx';
import HospitalManagement from './Components/ProductPages/HospitalManagement.jsx';
import MultivendorEcommerce from './Components/ProductPages/MultivendorEcommerce.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      // Case Studies - Our Services
      { path: "/case-studies", element: <CaseStudies /> },
      { path: "/enterprise-portal", element: <EnterprisePortalDevelopment /> },
      { path: "/mobile-app-development", element: <MobileAppDevelopment /> },
      { path: "/website-development", element: <Website_Development /> },
      { path: "/performance-marketing", element: <Performance /> },
      { path: "/lowcode-nocode-app", element: <LowCode_NoCode /> },
      { path: "/woocomerce-development", element: <Woocomerce /> },
      { path: "/ecommerce-development", element: <Ecommerce /> },
      { path: "/blockchain-development", element: <BlockChain /> },
      { path: "/magento-development", element: <Magento_Dev /> },
      { path: "/react-native-development", element: <React_Native /> },
      { path: "/saas-development", element: <Saas_Dev /> },
      { path: "/shopify-development", element: <Shopify_Dev /> },
      { path: "/software-development", element: <Software_Dev /> },
      { path: "/laravel-development", element: <Laravel_Dev /> },
      { path: "/ar-vr-development", element: <Ar_Vr_Dev /> },
      { path: "/social-media-marketing", element: <Social_Media_Marketing /> },
      { path: "/search-engine-optimization", element: <Search_Engine_Opti /> },
      { path: "/ui-ux-design", element: <UI_UX_Design /> },
      // Blog and Single Blogs
      { path: "/blog", element: <Blog /> },
      { path: "/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic", element: <SingleBlog /> },
      { path: "/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development", element: <Shopify_Blog /> },
      { path: "/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals", element: <Enterprise_Blog /> },
      { path: "/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali", element: <MLM_software_developer_Chandigarh /> },
      { path: "/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali", element: <Smart_Contract_Developer_in_Chandigarh_Panchkula_Mohali /> },
      { path: "/blog/Crypto-Software-Developer-in-Chandigarh", element: <Crypto_Software_Developer_in_Chandigarh /> },
      { path: "/blog/Crypto-Exchange-Developer-in-Chandigarh-Zirakpur-Mohali", element: <Crypto_Exchange_Developer /> },
      { path: "/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali", element: <Blockchain_Developer /> },
      { path: "/blog/CRM-Developer-in-Chandigarh-Panchkula-Mohali", element: <CRMDdeveloper /> },
      // Product Pages
      { path: "/mlm-software-chandigarh-panchkula", element: <MLM_Software /> },
      { path: "/ai-chatbot-chandigarh-panchkula", element: <AI_chatBot /> },
      { path: "/crm-erp-chandigarh-panchkula", element: <CRM_ERP /> },
      { path: "/dap-dao-chandigarh-panchkula", element: <DAP_DAO /> },
      { path: "/crypto-wallet-chandigarh-panchkula", element: <CryptoWallet /> },
      { path: "/trading-bot-chandigarh-panchkula", element: <TradingBot /> },
      { path: "/job-portal-chandigarh-panchkula", element: <JobPortal /> },
      { path: "/game24-chandigarh-panchkula", element: <Game24 /> },
      { path: "/uber-ola-clone-panchkula-chandigarh", element: <Uber_ola_clone /> },
      { path: "/crypto-exchnage-chandigarh-panchkula", element: <CryptoExchange /> },
      { path: "/school-management-panchkula-chandigarh", element: <SchoolManagement /> },
      { path: "/zomato-urbanup-clone-panchkula-chandigarh", element: <Zomato_Urbanup_Clone /> },
      { path: "layer1-layer2-blockchain-panchkula-chandigarh", element: <Layer1_Layer2_BlockChain /> },
      { path: "/hospital-management-panchkula-chandigarh", element: <HospitalManagement /> },
      { path: "/multi-vendor-ecommerce-panchkula-chandigarh", element: <MultivendorEcommerce /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider RouterProvider router={router}>
    <App />
  </RouterProvider>

)