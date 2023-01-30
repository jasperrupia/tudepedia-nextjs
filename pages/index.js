
import Link from 'next/link'
import About from '../components/about'
import Blog from '../components/blog'
import Categories from '../components/categories'
import Contact from '../components/contact'
// import { MongoClient } from "mongodb";

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
                        Tude Bookstore 1
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
                        Tude Bookstore 2
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
                        Tude Bookstore 3
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
            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <Categories />

      <About />

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

      <Blog />

      <Contact />
    </>
  )
}


// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     'mongodb+srv://jasper:qKPJp533UgbNQgKW@tude-pedia.qwc3589.mongodb.net/tudepediadb?retryWrites=true&w=majority'
//   );
//   const db = client.db();
//   const newsletterCollection = db.collection('newsletterCollection');
//   const result = await newsletterCollection.find().toArray();
//   client.close();

//   return {
//     props: {
//       newslaterEmails: result.map(newsletterEmail => ({
//         id: newsletterEmail._id.toString(),
//         email: newsletterEmail.newsletter
//       }))
//     },
//     revalidate: 1
//   };
// }


// {props.newslaterEmails.map((emailItem) => (<>{emailItem.email}</>))}