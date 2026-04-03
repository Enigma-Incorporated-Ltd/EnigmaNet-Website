import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import videoColor from '@/assets/img/landing/saas-3/video-cover.png'
import { Container } from 'react-bootstrap';

const Work = () => {
  return (
    <Container>
      <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style={{ maxWidth: '530px' }}>
        <h2 className="h1">How Does It Work?</h2>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus
          facilisis ultrices
        </p>
      </div>

      <div className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3">
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Registration </h3>
            <p className="mb-0">Massa enim libero dictumst consectetur in convallis lobortis</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Identity verification</h3>
            <p className="mb-0">At ultricies id non quisque integer eget velit. Facilisis enim</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Start trading</h3>
            <p className="mb-0">Pellentesque rhoncus viverra vestibulum, purus purus</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Earn with Silicon</h3>
            <p className="mb-0">Massa enim libero dictumst consectetur in convallis lobortis</p>
          </div>
        </div>
      </div>

      <div className="bg-secondary position-relative rounded-3 overflow-hidden px-4 px-sm-5">
        <div className="position-absolute top-50 start-50 w-75 h-75 translate-middle d-flex align-items-center justify-content-center zindex-5">
          <GlightBox
            href="https://www.youtube.com/watch?v=wODsNtortYw"
            className="btn btn-video btn-icon btn-xl bg-white stretched-link"
            data-bs-toggle="video"
            aria-label="Play video"
          >
            <IconifyIcon icon="bx:play" fontSize={26} />
          </GlightBox>
        </div>
        <div className="pt-4 mt-sm-3 px-3 px-sm-5 mx-md-5">
          <img
            src={videoColor}
            width="786"
            className="rellax d-block mx-auto mt-lg-4"
            alt="Card"
            data-rellax-percentage="0.5"
            data-rellax-speed="1.1"
            data-disable-parallax-down="lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default Work;
