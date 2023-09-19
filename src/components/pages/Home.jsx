import homeImage from '../../assets/IMG_7375-2.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HomePage() {
  return (


    <Container >
      < Row className="paragraphText  align-items-center" >
        <Col xs={12} md={8}>
          <p>
            Hi,
          </p>
          <p>
            I am <span className="blue">Timmy</span>
          </p>
          <p>
            Software Developer
          </p>
          <Link to="/contact" className="btn btn-primary button">Contact</Link>
        </Col>
        <Col xs={6} md={4}>
          {/* Replace 'homeImage' with your actual image source */}
          <Image src={homeImage} width={400} roundedCircle alt="homeImage" />
        </Col>
      </Row >
      <div>

        <a href="https://www.linkedin.com/in/faladetimilehin/" target="_blank" rel="noopener noreferrer" className="me-2">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/faladetimilehin" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </Container >

  );
}

export default HomePage
