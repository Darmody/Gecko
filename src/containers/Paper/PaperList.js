import React, { Component } from 'react';
import PaperNav from './PaperNav/PaperNav';
import { Row, Col } from 'antd/lib/layout';
import styles from './PaperList.scss';
import { Panel } from 'components';

export default class PaperList extends Component {
  render() {
    return (
      <div className={styles.paper}>
        <Row type="flex" justify="space-around">
        <Col span="8">
          <PaperNav />
        </Col>
        <Col span="16">
          <Row type="flex" justify="center">
              <Col span="24">
              <Panel>
                  content1
              </Panel>
              </Col>
          </Row>
          <Row type="flex" justify="center">
              <Col span="24">
              <Panel>
                  content1
              </Panel>
              </Col>
          </Row>
          <Row type="flex" justify="center">
              <Col span="24">
              <Panel>
                  content1
              </Panel>
              </Col>
          </Row>
          <Row type="flex" justify="center">
              <Col span="24">
              <Panel>
                  content1
              </Panel>
              </Col>
          </Row>
          <Row type="flex" justify="center">
              <Col span="24">
              <Panel>
                  content1
              </Panel>
              </Col>
          </Row>
        </Col>
        </Row>
      </div>
    );
  }
}
