import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ButtonGroup, Button, Spinner, Col, Card, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';


function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=4845fae46bd04c6ca85d3569860568ee')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, [])
  return (

    <div className="App">
      {
        news.length === 0 ? <Spinner animation="border" />
          :
          <Row xs={1} md={4} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }


      {/* <Button variant="primary">Hello Pinki</Button>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
    </div>
  );
}

export default App;
