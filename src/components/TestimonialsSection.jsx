
import { Container, Row, Col, Button, Card, Image, Figure } from 'react-bootstrap';

function TestimonialsSection() {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <Container>
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h3 className="fs-5 mb-2 text-secondary text-uppercase">Testimonials</h3>
            <h2 className="display-5 mb-4">Our valued clients' testimonials speak volumes about our work's power.</h2>
            <Button variant="primary" size="lg" className="mb-3 mb-md-4 mb-xl-5">Read More</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="gy-3 gy-lg-4">
          <Col xs={12} lg={6}>
            <Card>
              <Card.Body className="p-4 p-xxl-5">
                <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                <blockquote className="bsb-blockquote-icon mb-3">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                <Figure className="d-flex align-items-center m-0 p-0">
                  <Image src="./assets/img/testimonial-img-1.jpg" alt="" fluid rounded roundedCircle className="m-0 border border-5" loading="lazy" />
                  <figcaption className="ms-3">
                    <h4 className="mb-1 h5">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </figcaption>
                </Figure>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            <Card>
              <Card.Body className="p-4 p-xxl-5">
                <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                <blockquote className="bsb-blockquote-icon mb-3">Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum euismod massa, at aliquet erat turpis quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</blockquote>
                <Figure className="d-flex align-items-center m-0 p-0">
                  <Image src="./assets/img/testimonial-img-1.jpg" alt="" fluid rounded roundedCircle className="m-0 border border-5" loading="lazy" />
                  <figcaption className="ms-3">
                    <h4 className="mb-1 h5">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </figcaption>
                </Figure>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default TestimonialsSection;
