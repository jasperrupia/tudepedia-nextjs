import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import '../styles/globals.css'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {

  const newsletterInputRef = useRef();
  const router = useRouter();

  function submitHandler(event) {
    event.preventDefault();
    const enteredNewsletter = newsletterInputRef.current.value;

    const newsletterData = {
      newsletter: enteredNewsletter,
    };
    
    async function onAddNewsletter(enteredNewsletterData) {
      const response = await fetch('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(enteredNewsletterData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      router.push('/')
    }
    
    onAddNewsletter(newsletterData);
  };

  return (
      <>
        <Head>
          <title>TudePedia</title>
        </Head>
  
        <div className="hero_area">
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link className="navbar-brand" href="/">
                  <span>
                    TudePedia
                  </span>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link pl-lg-0" href="/">Home </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" href="about"> About <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="categories">Categories</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="blog"> Blog </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="contact">Contact Us</Link>
                    </li>
                  </ul>
                  <form className="search_form">
                    <input type="text" className="form-control" placeholder="Search here..." />
                    <button className="" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </header>
        </div>

        <Component {...pageProps} />

        <section className="info_section layout_padding2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 info-col">
                <div className="info_detail">
                  <h4>
                    About Us
                  </h4>
                  <div>
                    Vitae aut explicabo fugit facere alias distinctio, exem commodi mollitia minusem dignissimos atque asperiores incidunt vel voluptate iste
                  </div>
                  <div className="info_social">
                    <Link href="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link href="">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link href="">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link href="">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 info-col">
                <div className="info_contact">
                  <h4>
                    Address
                  </h4>
                  <div className="contact_link_box">
                    <Link href="">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Location
                      </span>
                    </Link>
                    <Link href="">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span>
                        Call +255 656631106
                      </span>
                    </Link>
                    <Link href="">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span>
                        demo@gmail.com
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 info-col">
                <div className="info_contact">
                  <h4>
                    Newsletter
                  </h4>
                  <form onSubmit={submitHandler}>
                    <input type="email" placeholder="Enter email" ref={newsletterInputRef} required />
                    <button type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 info-col">
                <div className="map_container">
                  <div className="map">
                    <div id="googleMap"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer_section">
          <div className="container">
            <div>
              &copy; <span id="displayYear"></span> All Rights Reserved
            </div>
          </div>
        </footer>
        
        <Script src="sample/js/jquery-3.4.1.min.js" />
        <Script src="sample/js/bootstrap.js" />
        <Script src="sample/js/custom.js" />
        {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap" /> */}
    </>
  )
}

