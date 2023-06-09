import React from 'react'
import './blog.css';
const blog = () => {
    return (
        <>
            <div className="blogs blog-route" id="blogs">
                <div className="blog-title">
                    <h3>Recent <span>Blogs</span></h3>
                </div>
                <div className="my-blog">
                    <div className="blog">
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7067001507447005184" height="732" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                    <div className="blog">
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7059397878191972352" height="774" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                        {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7056498536275673088" height="879" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default blog
