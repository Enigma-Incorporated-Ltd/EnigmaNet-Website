import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar20 from '@/assets/img/avatar/20.jpg';
import avatar29 from '@/assets/img/avatar/29.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
} from 'react-bootstrap';
import MessageSide from './MessageSide';

const Message = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MessageSide open={open} setOpen={setOpen} />
      <Col lg={8} style={{ maxHeight: '712px' }}>
        <Card className="h-100 border-0 bg-transparent pb-3">
          <CardHeader
            as={Navbar}
            className="d-flex align-items-center justify-content-between w-100 p-sm-4 p-3"
          >
            <div className="d-flex align-items-center pe-3">
              <button className="bg-transparent border-0" onClick={() => setOpen(true)}>
                <IconifyIcon icon="bx:menu" className="d-lg-none me-3" fontSize={30} />
              </button>

              <button type="button" className="navbar-toggler me-3" onClick={() => setOpen(true)}>
                <IconifyIcon icon="bx:menu" />
              </button>
              <img
                src={avatar20}
                className="rounded-circle"
                width={40}
                height={40}
                alt="Albert Flores"
              />

              <h6 className="mb-0 px-1 mx-2">Albert Flores</h6>
              <div
                className="bg-success rounded-circle"
                style={{ width: '8px', height: '8px' }}
              ></div>
            </div>

            <div className="d-flex">
              <Dropdown className="me-sm-2">
                <DropdownToggle
                  as={Button}
                  variant="outline-primary"
                  className="px-2 px-sm-3"
                  id="chat-more-dropdown"
                >
                  <IconifyIcon
                    icon="bx:dots-horizontal-rounded"
                    className="fs-xl mx-1 mx-sm-0 me-xl-2"
                  />
                  <span className="d-none d-xl-inline">More</span>
                </DropdownToggle>

                <DropdownMenu align="end" className="my-1">
                  <DropdownItem href="#">View profile</DropdownItem>
                  <DropdownItem href="#">Disable notifications</DropdownItem>
                  <DropdownItem href="#">Edit contact</DropdownItem>
                  <DropdownItem href="#">Delete contact</DropdownItem>
                  <DropdownItem href="#">Delete chat</DropdownItem>
                  <DropdownItem href="#">Clear history</DropdownItem>
                  <DropdownItem href="#">Block user</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Button
                variant="outline-danger"
                className="d-none d-sm-inline-flex px-2 px-sm-3 ms-1"
              >
                <IconifyIcon icon="bx:trash-alt" fontSize={20} className="fz-xl me-xl-2" />
                <span className="d-none d-xl-inline">Clear chat</span>
              </Button>
            </div>
          </CardHeader>

          <Swiper
            direction="vertical"
            slidesPerView="auto"
            freeMode={true}
            mousewheel={true}
            scrollbar={{ draggable: true }}
            modules={[FreeMode, Mousewheel, Scrollbar]}
            className="h-100 swiper scrollbar-hover overflow-hidden w-100 pb-0"
          >
            <SwiperSlide className="h-auto card-body">
              <div className="fs-sm text-muted text-center mb-3">November 27, 2023</div>

              <div className="d-flex align-items-start mb-3">
                <img
                  src={avatar20}
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt="Albert Flores"
                />
                <div className="ps-2 ms-1" style={{ maxWidth: '348px' }}>
                  <div
                    className="bg-secondary p-3 mb-1"
                    style={{
                      borderTopRightRadius: '.5rem',
                      borderBottomRightRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    Tellus, ipsum, commodo, dui ac. Ultrices mi arcu orci aliquam et.
                  </div>
                  <div className="fs-sm text-muted">09:04 am</div>
                </div>
              </div>

              <div className="d-flex align-items-start justify-content-end mb-3">
                <div className="pe-2 me-1" style={{ maxWidth: '348px' }}>
                  <div
                    className="bg-primary text-light p-3 mb-1"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomRightRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    Orci convallis eget sit ultricies rutrum.
                  </div>
                  <div className="d-flex justify-content-end align-items-center fs-sm text-muted">
                    10:36 am
                    <IconifyIcon icon="bx:check-double" className="fs-xl text-primary ms-2" />
                  </div>
                </div>
                <img src={avatar29} className="rounded-circle" width={40} height={40} alt="You" />
              </div>

              <div className="d-flex align-items-start mb-3">
                <img
                  src={avatar20}
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt="Albert Flores"
                />
                <div className="ps-2 ms-1" style={{ maxWidth: '348px' }}>
                  <div
                    className="bg-secondary p-3 mb-1"
                    style={{
                      borderTopRightRadius: '.5rem',
                      borderBottomRightRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    Blandit tempus, erat cum amet viverra pharetra, morbi. Vivamus pretium tristique
                    amet, nulla aenean sed blandit?
                  </div>
                  <div className="fs-sm text-muted">14:48 pm</div>
                </div>
              </div>

              <div className="d-flex align-items-start justify-content-end mb-3">
                <div className="pe-2 me-1" style={{ maxWidth: '348px' }}>
                  <div
                    className="bg-primary text-light p-3 mb-1"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomRightRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    Vel enim lacus, ac, fermentum, id. Aliquet faucibus pellentesque egestas.
                  </div>
                  <div
                    className="bg-primary text-light p-3 mb-1"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomRightRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    Thank you!
                  </div>
                  <div className="d-flex justify-content-end align-items-center fs-sm text-muted">
                    16:29 pm
                    <IconifyIcon icon="bx:check" className="fs-xl text-primary ms-2" />
                  </div>
                </div>
                <img src={avatar29} className="rounded-circle" width={40} height={40} alt="You" />
              </div>

              <div className="fs-sm text-muted text-center mb-3">November 28, 2023</div>

              <div className="d-flex align-items-start mb-3">
                <img
                  src={avatar20}
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt="Albert Flores"
                />
                <div className="ps-2 ms-1" style={{ maxWidth: '348px' }}>
                  <div
                    className="bg-secondary p-3 mb-1"
                    style={{
                      borderTopRightRadius: '.5rem',
                      borderBottomRightRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    You are welcome 😊
                  </div>
                  <div className="fs-sm text-muted">17:33 pm</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-scrollbar end-0"></div>
          <CardFooter className="d-sm-flex w-100 border-0 pt-3 pb-3 px-4">
            <div className="position-relative w-100 me-2 mb-3 mb-sm-0">
              <input
                type="text"
                className="form-control form-control-lg"
                style={{ paddingRight: '85px' }}
              />
              <div className="position-absolute top-50 end-0 translate-middle-y d-flex zindex-3 me-2">
                <button
                  type="button"
                  className="btn btn-icon btn-sm btn-link nav-link bg-faded-primary-hover me-1"
                  aria-label="Attachment"
                >
                  <IconifyIcon icon="bx:paperclip" className="fs-4" />
                </button>
                <button
                  type="button"
                  className="btn btn-icon btn-sm btn-link nav-link bg-faded-primary-hover"
                  aria-label="Emoji"
                >
                  <IconifyIcon icon="bx:smile" className="fs-4" />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-icon btn-lg d-none d-sm-inline-flex ms-1"
              aria-label="Send"
            >
              <IconifyIcon icon="bx:send" />
            </button>
            <button type="button" className="btn btn-primary btn-lg w-100 d-sm-none">
              <IconifyIcon icon="bx:send" className="fs-xl me-2" />
              Send
            </button>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default Message;
