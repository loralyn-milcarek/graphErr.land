import Head from 'next/head';
import { Container, Row, Card, Button, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../nav.jsx'


export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>
      
      <NavBar/>

      <Container>
        {/* <h1 style={{color: "#18341a"}}>graphErr</h1> */}
        {/* <div>           
        </div>  */}
        <div>
          <Image src="/graphErrLogoType.svg" alt="graphErr Logo Type" width="240" height="120"/>
        </div>
        
        {/* <img src={graphErrLogo} alt="graphErr Logo"/> */}

        <p style={{color: "#18341a"}}>
          Descriptive error handling library for GraphQL + Deno
        </p>
        <Container>
        <Container className="grid-gap">
          <Card body style={{padding: 4 + 'em', marginTop: 4 + 'em', color: 'white', backgroundColor: '#59af95'}}>Here is a paragraph about graphErr. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>
          <Card body style={{padding: 4 + 'em', marginTop: 4 + 'em', color: 'white', backgroundColor: '#59af95'}}>This is the problem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card>
          <Card body style={{padding: 4 + 'em', marginTop: 4 + 'em', color: 'white', backgroundColor: '#59af95'}}>Wow, we have the solution.</Card>
          </Container>
          {/* <Card>
          <Card.Header>first one</Card.Header>
          <Card.Body>
          <blockquote className="blockquote mb-0">
          <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
          </blockquote>
          </Card.Body>
          </Card>
          <Card>
          <Card.Header>other one</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
            </blockquote>
            </Card.Body>
          </Card> */}


          {/* <Row className="justify-content-md-between">
            <Card className="sml-card">
            <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
            short paragraph about graphErr
            </Card.Text>
            <Button variant="primary" href="https://nextjs.org/docs">
            More &rarr;
            </Button>
            </Card.Body>
            </Card>
            <Card className="sml-card">
            <Card.Body>
            <Card.Title>Learn</Card.Title>
            <Card.Text>
                  Learn about Next.js in an interactive course with quizzes!
                  </Card.Text>
                <Button variant="primary" href="https://nextjs.org/learn">
                More &rarr;
                </Button>
                </Card.Body>
                </Card>
                </Row>
                <Row className="justify-content-md-between">
                <Card className="sml-card">
                <Card.Body>
                <Card.Title>Examples</Card.Title>
                <Card.Text>
                  Discover and deploy boilerplate example Next.js projects.
                  </Card.Text>
                  <Button
                  variant="primary"
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  >
                  More &rarr;
                  </Button>
                  </Card.Body>
                  </Card>
                  <Card className="sml-card">
              <Card.Body>
                <Card.Title>Deploy</Card.Title>
                <Card.Text>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                  </Card.Text>
                  <Button
                  variant="primary"
                  href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                  >
                  More &rarr;
                  </Button>
                  </Card.Body>
                  </Card>
                </Row> */}
        </Container>
      </Container>

      <footer className="cntr-footer">
        <Image src="/graphErrLogo.svg" alt="graphErr Logo Type" width="64" height="64"/>
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" /> */}
        </a>
      </footer>
    </Container>
  )
}
