import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              From Our Blog
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="sample/images/b1.jpg" alt="" />
                  <h4 className="blog_date">
                    <span>
                      19 January 2021
                    </span>
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Eius, dolor? Vel velit sed doloremque
                  </h5>
                  <div>
                    Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
                  </div>
                  <Link href="">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="sample/images/b2.jpg" alt="" />
                  <h4 className="blog_date">
                    <span>
                      19 January 2021
                    </span>
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Minus aliquid alias porro iure fuga
                  </h5>
                  <div>
                    Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.
                  </div>
                  <Link href="">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Blog