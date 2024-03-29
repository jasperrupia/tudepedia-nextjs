
import Link from 'next/link' 

const About = () => {
  return (
    <section className="about_section layout_padding">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="sample/images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Our Bookstore
                  </h2>
                </div>
                <div>
                  At cumque tenetur iste molestiae, vel eum reiciendis assumenda! Numquam, repudiandae. Consequuntur obcaecati recusandae aliquam, amet doloribus eius dolores officiis cumque? Quibusdam praesentium pariatur sapiente mollitia, amet hic iusto voluptas! Iusto quo earum vitae excepturi, ipsam aliquid deleniti assumenda culpa deserunt.
                </div>
                <Link href="">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About