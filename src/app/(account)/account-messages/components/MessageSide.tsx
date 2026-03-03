import { Link } from 'react-router';
import { CardBody, CardHeader, Col, FormControl, Offcanvas } from 'react-bootstrap';
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import avatar19 from '@/assets/img/avatar/19.jpg';
import avatar20 from '@/assets/img/avatar/20.jpg';
import avatar21 from '@/assets/img/avatar/21.jpg';
import avatar22 from '@/assets/img/avatar/22.jpg';
import avatar23 from '@/assets/img/avatar/23.jpg';
import avatar24 from '@/assets/img/avatar/24.jpg';
import avatar25 from '@/assets/img/avatar/25.jpg';
import avatar26 from '@/assets/img/avatar/26.jpg';
import avatar27 from '@/assets/img/avatar/27.jpg';
import avatar28 from '@/assets/img/avatar/28.jpg';
import IconifyIcon from '@/components/IconifyIcon';

type Message = {
  id: number;
  name: string;
  avatar: string;
  text: string;
  time: string;
  active?: boolean;
  disabled?: boolean;
};

const messages: Message[] = [
  { id: 1, name: 'Devon Lane', avatar: avatar19, text: 'Dolor, quam habitant...', time: '18:02' },
  {
    id: 2,
    name: 'Albert Flores',
    avatar: avatar20,
    text: 'You are welcome 😊',
    time: '17:33',
    active: true,
    disabled: true,
  },
  { id: 3, name: 'Bessie Cooper', avatar: avatar21, text: 'Typing...', time: '12:04' },
  { id: 4, name: 'Ronald Richards', avatar: avatar22, text: 'Ok 👌', time: '08:00' },
  { id: 5, name: 'Robert Fox', avatar: avatar23, text: 'Praesent ut mi.', time: '14 Nov' },
  {
    id: 6,
    name: 'Jerome Bell',
    avatar: avatar24,
    text: 'In pretium a eget nunc...',
    time: '8 Oct',
  },
  { id: 7, name: 'Kathryn Murphy', avatar: avatar25, text: 'Tempor amet?', time: '16 Sep' },
  {
    id: 8,
    name: 'Dianne Russell',
    avatar: avatar26,
    text: 'Vehicula accumsan leo.',
    time: '27 Aug',
  },
  {
    id: 9,
    name: 'Cody Fisher',
    avatar: avatar27,
    text: 'Erat cum amet viverra...',
    time: '18 Aug',
  },
  {
    id: 10,
    name: 'Darlene Robertson',
    avatar: avatar28,
    text: 'Orci convallis eget sit...',
    time: '13 Jul',
  },
];

const MessageSide = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <Col lg={4}>
      <Offcanvas
        id="contactsList"
        show={open}
        scroll={true}
        onHide={() => setOpen(false)}
        responsive="lg"
        className="offcanvas-start d-flex flex-column position-absolute position-lg-relative h-100 bg-secondary shadow-none border-end mh-lg-auto mh-100 chat-user-list"
      >
        <CardHeader className="w-100 border-0 p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0">Messages</h1>
            <button
              type="button"
              className="btn btn-link nav-link bg-faded-primary-hover d-lg-none py-2 ps-2 pe-3 me-n3"
              data-bs-dismiss="offcanvas"
              data-bs-target="#contactsList"
              onClick={() => setOpen(false)}
            >
              <IconifyIcon icon="bx:x" className="fs-xl me-1" />
              Close
            </button>
          </div>
          <div className="position-relative">
            <FormControl type="text" placeholder="Search" className="pe-5" />
            <IconifyIcon
              icon="bx:search"
              className="fs-xl text-nav position-absolute top-50 end-0 translate-middle-y me-3"
            />
          </div>
        </CardHeader>

        <CardBody className="swiper scrollbar-hover overflow-hidden w-100 p-0">
          <Swiper
            direction="vertical"
            slidesPerView="auto"
            freeMode={true}
            scrollbar={{ draggable: true }}
            mousewheel={true}
            modules={[Scrollbar, Mousewheel, FreeMode]}
            className="h-100"
          >
            {messages.map(msg => (
              <SwiperSlide key={msg.id} className="h-auto">
                <Link
                  to="#"
                  className={`d-flex align-items-start border-bottom text-decoration-none py-3 px-4 ${msg.active ? 'position-relative bg-light pe-none' : 'bg-faded-primary-hover'
                    }`}
                >
                  {msg.active && (
                    <div className="position-absolute top-0 start-0 bg-primary w-2 h-100"></div>
                  )}
                  <img
                    src={msg.avatar}
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt={msg.name}
                  />
                  <div className="w-100 ps-2 ms-1">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 me-2">{msg.name}</h6>
                      <span className="fs-xs text-muted">{msg.time}</span>
                    </div>
                    <p className="fs-sm text-body mb-0">{msg.text}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Offcanvas>
    </Col>
  );
};

export default MessageSide;
