import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';
import data from '../data.json';

export default function Home() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');
  const timeframes = ['daily', 'weekly', 'monthly'];
  const dots = Array(3).fill('.'); // creates an array with 3 dots

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  }

  const titlesAndTimeframes = data.map(({ title, timeframes }) => ({ title, timeframes }));

  const displayData = (data, title) => {
    const { current: currentValue, previous: previousValue } = data[selectedTimeframe] || {};

    return (
      <div >
        <Head>
          <title>Frontend Mentor | Time tracking dashboard</title>
          <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        </Head>
        <Card className={`${styles.card1} ${title.toLowerCase()}`}>
          <Card.Body>
            <div className={styles.cardtopinfo}>
              <h5 className={styles.cards_title}>{title}</h5>
              <h5 className={styles.card_dots}>
                {dots.map((dot, index) => (
                  <a
                    key={index}
                    onClick={() => handleTimeframeClick(timeframes[index])}
                    className={timeframes[index] === selectedTimeframe ? styles.selected : ''}
                    style={{
                      textDecoration: 'none',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginRight:'0.1rem',
                    }}
                  >
                    {dot}
                  </a>
                ))}
              </h5>
            </div>
            <div className={styles.cardbottominfo}>
              <p className={styles.card_value}>{currentValue}hrs</p>
              <p className={styles.card_previous}>Last Week - {previousValue}hrs</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <Container fluid>
          <Row>
            <Col>
              <div className={styles.card_avatar}>
                <Image src="/images/image-jeremy.png" alt="avatar" className={styles.avatar} width={80} height={80} />
                <div className={styles.card_avatar_info}>
                  <p className={styles.report_for}>Report for</p>
                  <h1 className={styles.card_title}>Jeremy Robson</h1>
                </div>
              </div>
              <Card className={styles.card_main}>
                <Card.Body>
                  <div className={styles.card_body}>
                    {timeframes.map((timefr) => (
                      <p key={timefr}>
                        <a
                          id={timefr}
                          onClick={() => handleTimeframeClick(timefr)}
                          className={timefr === selectedTimeframe ? styles.selected : ''}
                          style={{
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            fontFamily: "'Rubik', sans-serif",
                            cursor: 'pointer'
                          }}
                        >
                          {timefr}
                        </a>
                      </p>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Row>
              
            </Row>
            <div className={styles.card_background_work}>
            </div>
            {displayData(titlesAndTimeframes[0].timeframes, titlesAndTimeframes[0].title)}
            <div className={styles.card_background_exercise}> </div>
            {displayData(titlesAndTimeframes[3].timeframes, titlesAndTimeframes[3].title)}
            </Col>
            <Col>
            <div className={styles.card_background_play}></div>
            {displayData(titlesAndTimeframes[1].timeframes, titlesAndTimeframes[1].title)}
            <div className={styles.card_background_social}></div>
            {displayData(titlesAndTimeframes[4].timeframes, titlesAndTimeframes[4].title)}
            </Col>
            <Col>
            <div className={styles.card_background_study}></div>
            {displayData(titlesAndTimeframes[2].timeframes, titlesAndTimeframes[2].title)}
            <div className={styles.card_background_selfcare}></div>
            {displayData(titlesAndTimeframes[5].timeframes, titlesAndTimeframes[5].title)}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
