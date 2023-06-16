import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';
import data from '../data.json';

export default function Home() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('');

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
      <div className={styles.card_background_work}>

      </div>
      <Card className={`${styles.card1} ${title.toLowerCase()}`}>
      
        <Card.Body>
          <h5>{title}</h5>
          <p>{currentValue}hrs</p>
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
              <Card className={styles.card}>
                <Card.Body>
                  <Image src="/images/image-jeremy.png" alt="avatar" width={100} height={100} />
                  <p>Report for</p>
                  <h1 className={styles.card_title}>Jeremy Robson.</h1>
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

              {displayData(workTimeframes, workTitle)}
              {displayData(playTimeframes, playTitle)}
            </Col>
            <Col>
              {displayData(studyTimeframes, studyTitle)}
              {displayData(exerciseTimeframes, exerciseTitle)}
              </Col>
              <Col>
              {displayData(socialTimeframes, socialTitle)}
              {displayData(selfCareTimeframes, selfCareTitle)}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
