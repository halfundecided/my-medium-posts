import React from 'react';
import { MediumFeed } from './components';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function App() {
  return (
    <>
      <Row justify="center">
        <Col>
          <MediumFeed />
        </Col>
      </Row>
    </>
  );
}

export default App;
