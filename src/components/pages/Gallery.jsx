import { Image } from "react-bootstrap"
import travelbuddy from '../../assets/TravelBuddy.png'
import horriseon from '../../assets/1.png'
import aws from '../../assets/aws.png'
import garmenthub from '../../assets/garmenthub.png'
import idr from '../../assets/idr.png'
import op from '../../assets/op.png'

function Gallery() {
  return (
    <section className="sectionHeading">
      <div className="container">
        <h2 className="mb-5"></h2>
        <div className="row">
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={travelbuddy} className="card-img-top" alt="images" />
              <div className="card-body">
                <h5 className="card-title">Travel Buddy</h5>
                <p className="card-text"> A weather app that not only keeps you updated on the latest weather conditions but also enhances your travel experience.</p>  <a href="https://faladetimilehin.github.io/travel-buddy/" className="btn btn-success">Visit Page
                </a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={horriseon} className="card-img-top" alt="horriseon" />
              <div className="card-body">
                <h5 className="card-title">Horiseon</h5>
                <p className="card-text"> It is to help improve the
                  accessibility and search engine optimization of the brand. This was done within few hours.</p>
                <a href="https://faladetimilehin.github.io/horiseon-code-refactor/" className="btn btn-success">Visit Page
                </a>
              </div>
            </div>
          </div>
          {/* <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={aws} className="card-img-top" alt="horriseon" />
              <div className="card-body">
                <h5 className="card-title">Previous Portfolio</h5>
                <p className="card-text">My personal portfolio which features some of my github projects as well as my
                  resume and technical skills.</p>
                <a href="https://faladetimilehin.github.io/falade-portfolio/" className="btn btn-success">Visit Page</a>
              </div>
            </div>
          </div> */}
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={garmenthub} className="card-img-top" alt="horriseon" />
              <div className="card-body">
                <h5 className="card-title">
                  TS GARMENTHUBNG</h5>
                <p className="card-text">Bulk Clothing Production Factory, Solving all your clothing needs. Developed for
                  a company abroad and was done remotely.</p>
                <a href="https://garmenthubng.com/" className="btn btn-success">Visit Page</a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={op} className="card-img-top" alt="opeke" />
              <div className="card-body">
                <h5 className="card-title">Opekete Foundation</h5>
                <p className="card-text">Empowering
                  The Next Generation
                  of Female Leaders. Created with React and deployed</p>
                <a href="https://www.opeketefoundation.org/" className="btn btn-success">Visit Page</a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={idr} className="card-img-top" alt="idr" />
              <div className="card-body">
                <h5 className="card-title">ID</h5>
                <p className="card-text">Industry Dispute
                  Resolution System. Created with React and deployed myself </p>
                <a href="https://selfservice.nibss-plc.com.ng/" className="btn btn-success">Visit Page</a>
              </div>
            </div>
          </div>
          <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
            <div className="card">
              <Image src={aws} className="card-img-top" alt="horriseon" />
              <div className="card-body">
                <h5 className="card-title">GavaSoft </h5>
                <p className="card-text">All en-suite application to simplify your HR. Deployed with AWS</p>
                <a href="http://hrtimi-pplication.s3-website-us-east-1.amazonaws.com/" className="btn btn-success">Visit
                  Page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Gallery