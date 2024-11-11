import { Link, useLocation } from "react-router-dom"
import './Service.css'
import '../../App.css'
import check from '../../Images/check.webp'
import { FaChevronRight } from "react-icons/fa"


function KeyPointSection({keyHeading, keyPara, keyPoint1, keyPoint2, keyPoint3, keyPoint4,keyPoint5, url, btnTitle, Group105518}) {
    const location = useLocation()
    const checkShow = ['/performance']
    return (
        <>
            <section className="low-code-sec-tool">
                <div className="container">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tool-heading">
                                    <h2>
                                        {keyHeading}
                                    </h2>
                                    <p className="mt-4">
                                        {keyPara}
                                    </p>
                                </div>

                                <div className="toll-check-items d-flex gap-3">
                                    <ul className="list-unstyled py-2">

                                        <li className="d-flex gap-1  py-1">
                                           {!checkShow.includes(location.pathname)&&(
                                            <span><img src={check} /></span>
                                           )} 
                                            <span>{keyPoint1}</span>
                                        </li>
                                        <li className="d-flex gap-1 py-1">
                                        {!checkShow.includes(location.pathname)&&(
                                            <span><img src={check} /></span>
                                           )} 
                                            <span>{keyPoint2}</span>
                                        </li>
                                        <li className="d-flex gap-1 py-1">
                                        {!checkShow.includes(location.pathname)&&(
                                            <span><img src={check} /></span>
                                           )} 
                                            <span>{keyPoint3}</span>
                                        </li>
                                        <li className="d-flex gap-1 py-1">
                                        {!checkShow.includes(location.pathname)&&(
                                            <span><img src={check} /></span>
                                           )} 
                                            <span>{keyPoint4}</span>
                                        </li>   
                                        <li className={`${keyPoint5 ? "d-block" : "d-none" } d-flex gap-1 py-1`}>
                                        {!checkShow.includes(location.pathname)&&(
                                            <span><img src={check} /></span>
                                           )} 
                                            <span>{keyPoint5}</span>
                                        </li>   
                                        
                                    </ul>
                                </div>
                                <div className="heroBtn">
                                    <Link to={url} className="d-flex align-items-center justify-content-between">
                                        <div className="btnText px-3 py-3 text-light">
                                            <span>{btnTitle}</span>
                                        </div>
                                        <div className="btn_icon px-4 py-2">
                                            <FaChevronRight />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 text-end">
                                <div className="tool-img">
                                    <img src={Group105518} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KeyPointSection
