import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';
import data from '../data.json';

export default function Home() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  const timeframes = ['daily', 'weekly', 'monthly'];

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  }



  const { title: workTitle, timeframes: workTimeframes } = data[0];
  const { title: playTitle, timeframes: playTimeframes } = data[1];
  const { title: studyTitle, timeframes: studyTimeframes } = data[2];
  const { title: exerciseTitle, timeframes: exerciseTimeframes } = data[3];
  const { title: socialTitle, timeframes: socialTimeframes } = data[4];
  const { title: selfCareTitle, timeframes: selfCareTimeframes } = data[5];


  const displayData = (data, title) => {
    const timeframeData = data[selectedTimeframe];
    const currentValue = timeframeData ? timeframeData.current : null;
    const previousValue = timeframeData ? timeframeData.previous : null;

    return (
      <div >
        <Head>
          <title>Frontend Mentor | Time tracking dashboard</title>
          <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        </Head>
        <Card className={`${styles.card1} ${title.toLowerCase()}`}>
          <Card.Body>
            <h5>{title}</h5>
            <p className={styles.card_value}>{currentValue}hrs</p>
            <p>Last Week - {previousValue}hrs</p>
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
                <Image src="/images/image-jeremy.png" alt="avatar" width={100} height={100} />
                <p>Report for</p>
                <h1 className={styles.card_title}>Jeremy Robson.</h1>
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
              <div className={styles.card_background_work}>
              </div>
              {displayData(workTimeframes, workTitle)}
              <div className={styles.card_background_play}>
              </div>
              {displayData(playTimeframes, playTitle)}
            </Col>
            <Col>
              <div className={styles.card_background_study}>
              </div>
              {displayData(studyTimeframes, studyTitle)}
              <div className={styles.card_background_exercise}>
              </div>
              {displayData(exerciseTimeframes, exerciseTitle)}
            </Col>
            <Col>
              <div className={styles.card_background_social}>
              </div>
              {displayData(socialTimeframes, socialTitle)}
              <div className={styles.card_background_selfcare}>
              </div>
              {displayData(selfCareTimeframes, selfCareTitle)}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
