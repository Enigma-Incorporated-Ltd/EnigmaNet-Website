import blog01 from '@/assets/img/blog/01.jpg';
import blog05 from '@/assets/img/blog/05.jpg';
import blog02 from '@/assets/img/blog/02.jpg';
import blog03 from '@/assets/img/blog/03.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { CardBody, Col } from 'react-bootstrap';
import GlightBox from '@/components/GlightBox';
import { Link } from 'react-router';

const Digital = () => {
  return (
    <>
      <div className="masonry-grid row row-cols-sm-2 row-cols-1 g-4">
        <Col className="masonry-grid-item pb-2 pb-lg-3">
          <article className="card border-0 bg-transparent">
            <div className="position-relative overflow-hidden rounded-3">
              <Link
                to="/blog-single"
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></Link>
              <Link
                to="#"
                className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Read later"
                aria-label="Read later"
              >
                <IconifyIcon icon="bx:bookmark" fontSize={18} />
              </Link>
              <img src={blog05} alt="Image" />
            </div>
            <CardBody className="pb-1 px-0">
              <Link
                to="#"
                className="badge fs-sm text-white bg-info shadow-info text-decoration-none mb-3"
              >
                Digital
              </Link>
              <h3 className="h4">
                <Link to="/blog-single">Inclusive Marketing: Why and How Does it Work?</Link>
              </h3>
              <p className="mb-4">
                Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio
                at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.
              </p>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm border-end pe-3 me-3">Oct 9, 2023</div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">5</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">0</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">2</span>
                </div>
              </div>
            </CardBody>
          </article>
        </Col>

        <Col className="masonry-grid-item  pb-2 pb-lg-3">
          <article className="card">
            <CardBody>
              <div className="d-flex justify-content-between mb-3">
                <Link
                  to="#"
                  className="badge fs-sm text-white bg-warning shadow-warning text-decoration-none"
                >
                  Busiess
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Read later"
                  aria-label="Read later"
                >
                  <IconifyIcon icon="bx:bookmark" fontSize={18} />
                </Link>
              </div>
              <h3 className="h4">
                <Link to="/blog-single">
                  A Study on Smartwatch Design Qualities and People’s Preferences
                </Link>
              </h3>
              <p className="mb-3">
                Dignissim varius vehicula sagittis, cursus purus, congue. Tempor aliquam ut
                ridiculus dolor nibh felis. Feugiat in ut neque pellentesque. Urna adipiscing
                sodales pretium, pretium ornare enim lacus, ultrices amet. Enim in facilisis sit
                scelerisque sit.
              </p>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm border-end pe-3 me-3">Sep 3, 2023</div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">8</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">7</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">4</span>
                </div>
              </div>
            </CardBody>
          </article>
        </Col>

        <Col className="masonry-grid-item pb-2 pb-lg-3">
          <article className="card border-0 bg-transparent">
            <div className="position-relative overflow-hidden rounded-3">
              <Link
                to="/blog-single"
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></Link>
              <Link
                to="#"
                className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Read later"
                aria-label="Read later"
              >
                <IconifyIcon icon="bx:bookmark" fontSize={18} />
              </Link>
              <img src={blog02} alt="Image" />
            </div>
            <CardBody className="pb-1 px-0">
              <Link
                to="#"
                className="badge fs-sm text-white bg-danger shadow-danger text-decoration-none mb-3"
              >
                Technology
              </Link>
              <h3 className="h4">
                <Link to="/blog-single">Why UX Design Matters and How it Affects Ranking</Link>
              </h3>
              <p className="mb-4">
                In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla
                pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget
                donec ultricies nibh tristique.
              </p>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm border-end pe-3 me-3">Aug 19, 2023</div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">5</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">3</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">9</span>
                </div>
              </div>
            </CardBody>
          </article>
        </Col>

        <Col className="masonry-grid-item  pb-2 pb-lg-3">
          <article className="card border-0 bg-transparent">
            <div className="position-relative overflow-hidden rounded-3">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 zindex-2">
                <GlightBox
                  href="https://www.youtube.com/watch?v=vTgKtoU--Z8"
                  className="btn btn-video btn-icon btn-lg bg-white stretched-link"
                  data-bs-toggle="video"
                  aria-label="Play video"
                >
                  <IconifyIcon icon="bx:play" />
                </GlightBox>
              </div>
              <Link
                to="#"
                className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Read later"
                aria-label="Read later"
              >
                <IconifyIcon icon="bx:bookmark" fontSize={18} />
              </Link>
              <img src={blog01} alt="Image" />
            </div>
            <CardBody className="pb-1 px-0">
              <Link
                to="#"
                className="badge fs-sm text-white bg-success shadow-success text-decoration-none mb-3"
              >
                Startups
              </Link>
              <h3 className="h4">
                <Link to="/blog-single">
                  5 Bad Landing Page Examples &amp; How We Would Fix Them
                </Link>
              </h3>
              <p className="mb-4">
                In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla
                pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget
                donec ultricies nibh tristique.
              </p>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm border-end pe-3 me-3">Aug 19, 2023</div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">5</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">3</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">9</span>
                </div>
              </div>
            </CardBody>
          </article>
        </Col>

        <Col className="masonry-grid-item  pb-2 pb-lg-3">
          <article className="card border-0 bg-transparent">
            <div className="position-relative overflow-hidden rounded-3">
              <Link
                to="/blog-single"
                className="position-absolute top-0 start-0 w-100 h-100"
                aria-label="Read more"
              ></Link>
              <Link
                to="#"
                className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Read later"
                aria-label="Read later"
              >
                <IconifyIcon icon="bx:bookmark" fontSize={18} />
              </Link>
              <img src={blog03} alt="Image" />
            </div>
            <CardBody className="pb-1 px-0">
              <Link
                to="#"
                className="badge fs-sm text-white bg-info shadow-info text-decoration-none mb-3"
              >
                Digital
              </Link>
              <h3 className="h4">
                <Link to="/blog-single">
                  This Week in Search: New Limits and Exciting Features
                </Link>
              </h3>
              <p className="mb-4">
                Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem
                eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam
                pellentesque lobortis elementum lacus.
              </p>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm border-end pe-3 me-3">Sep 16, 2023</div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">5</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">7</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">4</span>
                </div>
              </div>
            </CardBody>
          </article>
        </Col>

        <Col className="masonry-grid-item  pb-2 pb-lg-3">
          <article className="card">
            <CardBody>
              <div className="d-flex justify-content-between mb-3">
                <Link
                  to="#"
                  className="badge fs-sm text-white bg-warning shadow-warning text-decoration-none"
                >
                  Business
                </Link>
                <Link
                  to="#"
                  className="btn btn-icon btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Read later"
                  aria-label="Read later"
                >
                  <IconifyIcon icon="bx:bookmark" fontSize={18} />
                </Link>
              </div>
              <h3 className="h4">
                <Link to="/blog-single">
                  This Long-Awaited Technology May Finally Change the World
                </Link>
              </h3>
              <p className="mb-3">
                Diam dui, aliquet tortor, cras aliquet pulvinar at lacus. Viverra iaculis eget
                scelerisque ac facilisi nulla quisque. Facilisi elementum eget sollicitudin sed
                dignissim feugiat amet, aliquam. Sed leo diam, euismod elementum. Gravida tristique
                rhoncus, vitae cum cras sagittis, tortor eu. Leo, urna suspendisse lorem quis
                volutpat.
              </p>
              <div className="d-flex align-items-center text-muted">
                <div className="fs-sm border-end pe-3 me-3">Sep 3, 2023</div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                  <span className="fs-sm">0</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                  <span className="fs-sm">1</span>
                </div>
                <div className="d-flex align-items-center">
                  <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                  <span className="fs-sm">2</span>
                </div>
              </div>
            </CardBody>
          </article>
        </Col>
      </div>
    </>
  );
};

export default Digital;
