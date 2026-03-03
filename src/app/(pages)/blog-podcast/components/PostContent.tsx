import React, { useRef, useState, useEffect } from 'react';
import avatar06 from '@/assets/img/avatar/06.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Card, Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const PostContent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) audio.pause();
    else audio.play();

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const vol = Number(e.target.value);
    audio.volume = vol;
    setVolume(vol);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="container mb-5 pb-lg-5">
      <Row className="gy-md-5 gy-4">
        <Col lg={3} md={4} className="order-md-2 position-relative">
          <div className="sticky-top ms-xxl-5 ps-lg-4" style={{ top: '105px' }}>
            <div className="d-flex align-items-center position-relative mb-lg-5 mb-4">
              <img src={avatar06} className="rounded-circle me-3" width={60} alt="Avatar" />
              <div>
                <h4 className="h6 mb-1">Hosted by</h4>
                <Link to="#" className="fw-semibold stretched-link">
                  Jenny Wilson
                </Link>
              </div>
            </div>
            <button type="button" className="btn btn-lg btn-outline-secondary mb-3">
              <IconifyIcon icon="bx:like" className="me-2 lead" />
              Like it
              <span className="badge bg-primary shadow-primary ms-3">8</span>
            </button>
          </div>
        </Col>

        <Col lg={9} md={8} className="order-md-1">
          <Card className="p-lg-4 p-md-2 mb-4 mb-lg-5">
            <div className="audio-player card-body p-2 p-sm-4 d-flex align-items-center">
              <audio ref={audioRef} src="/audio/sample.wav" preload="auto" />

              <button
                type="button"
                className="btn btn-icon btn-primary shadow-primary me-3"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <IconifyIcon icon="bx:pause" fontSize={24} />
                ) : (
                  <IconifyIcon icon="bx:play" fontSize={24} />
                )}
              </button>

              <span className="ap-current-time flex-shrink-0 fw-medium mx-2">
                {formatTime(currentTime)}
              </span>

              <input
                type="range"
                className="ap-seek-slider mx-2"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
              />

              <span className="ap-duration flex-shrink-0 fw-medium mx-2">
                {formatTime(duration)}
              </span>

              <div className="ms-3">
                <Dropdown drop="up">
                  <DropdownToggle
                    type="button"
                    className="ap-volume-button btn btn-icon btn-secondary"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="Volume"
                  >
                    <IconifyIcon icon="bx:volume-full" fontSize={20} />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-dark my-1 p-2">
                    <input
                      type="range"
                      className="ap-volume-slider"
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={handleVolume}
                    />
                  </DropdownMenu>
                </Dropdown>
              </div>

              <Link
                to="/audio/sample.wav"
                download="audio-sample"
                className="btn btn-icon btn-secondary ms-2"
                aria-label="Download"
              >
                <IconifyIcon icon="bx:download" fontSize={20} />
              </Link>
            </div>
          </Card>

          <h3 className="h4 mb-4 pt-2 pt-md-0">Timeline</h3>
          <ul className="list-unstyled mb-0">
            <li className="d-flex mb-2">
              <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{ width: '80px' }}>
                00:05:12
              </span>
              Diam erat molestie duis auctor sit quis.
            </li>
            <li className="d-flex mb-2">
              <span
                className="flex-shrink-0 fw-medium text-nowrap me-2 text-primary"
                style={{ width: '80px' }}
              >
                00:28:19
              </span>
              Non mi eget molestie pretium commodo urna duis facilisis turpis.
            </li>
            <li className="d-flex mb-2">
              <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{ width: '80px' }}>
                00:45:37
              </span>
              Sit placerat adipiscing interdum libero neque, aliquam nec imperdiet ullamcorper.
            </li>
            <li className="d-flex mb-2">
              <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{ width: '80px' }}>
                00:56:04
              </span>
              Pulvinar eu porttitor nulla morbi varius tristique leo.
            </li>
            <li className="d-flex mb-2">
              <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{ width: '80px' }}>
                01:32:17
              </span>
              Cras et gravida iaculis vel at quis euismod.
            </li>
            <li className="d-flex mb-2">
              <span className="flex-shrink-0 fw-medium text-nowrap me-2" style={{ width: '80px' }}>
                01:50:43
              </span>
              Volutpat malesuada nulla lectus justo tempus est sollicitudin.
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default PostContent;
