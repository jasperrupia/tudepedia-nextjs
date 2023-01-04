import Image from 'next/image'
import Link from 'next/link'
import { MongoClient } from "mongodb";

const DUMMY_COMENTS = [
  {
    id: 'c1',
    name: 'Jasper Rupia',
    status: 'Student',
    image: 'sample/images/c1.jpg',
    discription: 'Editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by'
  },
  {
    id: 'c2',
    name: 'Oscar Mtundu',
    status: 'Developer',
    image: 'sample/images/c2.jpg',
    discription: 'Editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by'
  },
  {
    id: 'c3',
    name: 'Director Didi',
    status: 'Designer',
    image: 'sample/images/c3.jpg',
    discription: 'Editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by'
  }
]

export default function Home(props) {
  return (
    <>
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h5>
                        Tude Bookstore 
                      </h5>
                      <h1>
                        For All Your <br />
                        Reading Needs
                      </h1>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                      </div>
                      <Link href="">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="sample/images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h5>
                        Tude Bookstore
                      </h5>
                      <h1>
                        For All Your <br />
                        Reading Needs
                      </h1>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                      </div>
                      <Link href="">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="sample/images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h5>
                        Tude Bookstore
                      </h5>
                      <h1>
                        For All Your <br />
                        Reading Needs
                      </h1>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                      </div>
                      <Link href="">
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="sample/images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn_box">
            <Link className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="catagory_section layout_padding">
        <div className="catagory_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Books Categories
              </h2>
              <div>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="sample/images/cat1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Textbooks
                    </h5>
                    <div>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="sample/images/cat2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Science
                    </h5>
                    <div>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="sample/images/cat3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      History
                    </h5>
                    <div>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="sample/images/cat4.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Biography
                    </h5>
                    <div>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="sample/images/cat5.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Adventure
                    </h5>
                    <div>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="sample/images/cat6.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Fantasy
                    </h5>
                    <div>
                      fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The
                      point of using
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



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



      <section className="client_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              What Says Customers
            </h2>
            <hr />
          </div>
          <div className="row">
            {DUMMY_COMENTS.map((comment) => (
              <div key={comment.id.toString()} className="col-md-6 mx-auto">
                <div className="client_container ">
                  <div className="detail-box">
                    <div>
                      {comment.discription}
                    </div>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="client_id">
                    <div className="img-box">
                      <img src={comment.image} alt="" />
                    </div>
                    <div className="client_name">
                      <h5>
                        {comment.name}
                      </h5>
                      <h6>
                        {comment.status}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


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



      <section className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="heading_container ">
                <h2 className="">
                  Contact Us 
                </h2>
              </div>
              <form action="#">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Pone Number" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="btn-box">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="sample/images/contact-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://jasper:qKPJp533UgbNQgKW@tude-pedia.qwc3589.mongodb.net/tudepediadb?retryWrites=true&w=majority'
  );
  const db = client.db();
  const newsletterCollection = db.collection('newsletterCollection');
  const result = await newsletterCollection.find().toArray();
  client.close();

  return {
    props: {
      newslaterEmails: result.map(newsletterEmail => ({
        id: newsletterEmail._id.toString(),
        email: newsletterEmail.newsletter
      }))
    },
    revalidate: 1
  };
}


// {props.newslaterEmails.map((emailItem) => (<>{emailItem.email}</>))}