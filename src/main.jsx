import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import Home from './Components/HomePage/Home.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About/> },
      { path: "/blog", element: <Blog/> },
      { path: "/SingleBlog", element: <SingleBlog/> },
      { path: "/Shopify_Blog", element: <Shopify_Blog/> },
      { path: "/Enterprise_Blog", element: <Enterprise_Blog/> },
      { path: "/case-studies", element: <CaseStudies/> },
      { path: "/contact-us", element: <Contact/> },
      { path: "/enterprise-portal", element: <EnterprisePortalDevelopment/> },
      { path: "/mobile-app-development", element: <MobileAppDevelopment/> },
      { path: "/website-development", element: <Website_Development/> },
      { path: "/performance-marketing", element: <Performance/> },
      { path: "/lowcode-nocode-app", element: <LowCode_NoCode/> },
      { path: "/woocomerce-development", element: <Woocomerce/> },
      { path: "/ecommerce-development", element: <Ecommerce/> },
      { path: "/blockchain-development", element: <BlockChain/> },
      { path: "/magento-development", element: <Magento_Dev/> },
      { path: "/react-native-development", element: <React_Native/> },
      { path: "/saas-development", element: <Saas_Dev/> },
      { path: "/shopify-development", element: <Shopify_Dev/> },
      { path: "/software-development", element: <Software_Dev/> },
      { path: "/laravel-development", element: <Laravel_Dev/> },
      { path: "/ar-vr-development", element: <Ar_Vr_Dev/> },
      { path: "/social-media-marketing", element: <Social_Media_Marketing/> },
      { path: "/search-engine-optimization", element: <Search_Engine_Opti/> },
      { path: "/ui-ux-design", element: <UI_UX_Design/> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider RouterProvider router={router}>
      <App />
    </RouterProvider>
 
  
  // <React.StrictMode>
  //   <RouterProvider RouterProvider router={router}>
  //     <App />
  //   </RouterProvider>
  // </React.StrictMode>
)
