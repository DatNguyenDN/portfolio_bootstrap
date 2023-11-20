import { Container, Row, Col,Nav, Tab } from "react-bootstrap";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from '../../assets/img/color-sharp2.png'
import {ProjectCard} from '../../components/ProjectCard/ProjectCard'
import './Projects.css'
import 'animate.css'
import TrackVisibility from "react-on-screen";
export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
            <h2>Projects</h2>
            <p>
              Sed lacinia porta pharetra. Mauris scelerisque purus in lorem accumsan bibendum. Donec maximus dui augue,eu aliquam diam imperdiet vel.
            </p>
            </div>}
          </TrackVisibility>
            <Tab.Container id='projects-tabs' defaulActiveKey='first'>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project,index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project} 
                                    />
                                )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>Lorem2</Tab.Pane>
                    <Tab.Pane eventKey='third'>Lorem3</Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"/>
    </section>
  );
};
