import google from '@/assets/img/brands/google.svg';
import zoom from '@/assets/img/brands/zoom.svg';
import slack from '@/assets/img/brands/slack.svg';
import gmail from '@/assets/img/brands/gmail.svg';
import trello from '@/assets/img/brands/trello.svg';
import mailChimp from '@/assets/img/brands/mailchimp.svg';
import dropBox from '@/assets/img/brands/dropbox.svg';
import evernote from '@/assets/img/brands/evernote.svg';

import { Card, Col, Container, Row } from 'react-bootstrap';

type Tool = {
  name: string;
  logo: string;
  description: string;
};

const tools: Tool[] = [
  {
    name: 'Google',
    logo: google,
    description: 'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis pretium.',
  },
  {
    name: 'Zoom',
    logo: zoom,
    description:
      'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.',
  },
  {
    name: 'Slack',
    logo: slack,
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    name: 'Gmail',
    logo: gmail,
    description:
      'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.',
  },
  {
    name: 'Trello',
    logo: trello,
    description:
      'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.',
  },
  {
    name: 'Mailchimp',
    logo: mailChimp,
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris integer.',
  },
  {
    name: 'Dropbox',
    logo: dropBox,
    description: 'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.',
  },
  {
    name: 'Evernote',
    logo: evernote,
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
];

const Work = () => {
  return (
    <Container className="mt-n1 mt-md-0 py-5">
      <Row className="justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1">
        <Col xl={8} lg={9} md={10}>
          <h2 className="h1 mb-lg-4">Integrate Top Work Tools</h2>
          <p className="fs-lg text-muted mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at
            nec lacus.
          </p>
        </Col>
      </Row>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-lg-4 pb-md-3 pb-lg-5">
        {tools.map((tool, index) => (
          <Col key={index}>
            <Card className="card-body card-hover bg-light border-0">
              <img src={tool.logo} className="d-block mb-4" width="56" alt={tool.name} />
              <p className="mb-0">{tool.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Work;
