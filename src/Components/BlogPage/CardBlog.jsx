import { FaEye, FaRegClock, FaRegComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CardBlog({ singleBlogImg, time, blogTitle, blogPara, CommentNum, viwer, urlSingleBlog }) {
    return (
        <>
            <main>
                <div className="card card_img_blog ">
                    <div className="overflow-hidden">
                        <Link to={urlSingleBlog}>
                            <img src={singleBlogImg} className="card-img-top" alt="..." />
                        </Link>
                    </div>
                    <div className="card_body">
                        <div className="card-body ps-3">
                            <div className="date text-start">
                                <span>
                                    <FaRegClock />
                                    {time}
                                </span>
                            </div>
                            <div className="card_para_1 mt-2">
                                <p className="text-start">
                                    <Link to="#">
                                        {blogTitle}
                                    </Link>
                                </p>
                            </div>
                            <div className="card_para_2">
                                <p className="text-start">
                                    {blogPara}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CardBlog
