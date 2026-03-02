import GlightBox from '@/components/GlightBox';
import IconifyIcon from '@/components/IconifyIcon';
import CoverImg from '@/assets/img/landing/digital-agency/cover.jpg';


const Video = () => {
  return (
    <section className="container text-center pb-5 mt-n2 mt-md-0 mb-md-2 mb-lg-4">
      <div className="position-relative rounded-3 overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
          <GlightBox
            href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
            className="btn btn-video btn-icon btn-xl stretched-link bg-white"
            data-bs-toggle="video"
            aria-label="Play video"
          >
            <IconifyIcon icon="bx:play" fontSize={26} />
          </GlightBox>
        </div>
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-35"></span>
        <img src={CoverImg} className="d-block w-100" alt="Cover image" />
      </div>
    </section>
  );
};

export default Video;
