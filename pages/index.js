import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  Report for Jeremy Robson. Daily Weekly Monthly
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  Work
                  <p>
                    Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs
                    Previous - 128hrs
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  Work
                  <p>
                    Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs
                    Previous - 128hrs
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  Work
                  <p>
                    Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs
                    Previous - 128hrs
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  Work
                  <p>
                    Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs
                    Previous - 128hrs
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  Work
                  <p>
                    Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs
                    Previous - 128hrs
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  Work
                  <p>
                    Work 5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs
                    Previous - 128hrs
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
