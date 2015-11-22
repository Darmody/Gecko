import React from 'react';
import { Row, Col } from 'antd/lib/layout';
import { Panel } from 'components';

export default ({ cards, create }) => {

  return (
    <Row type="flex">
      <Col span="24">
        <Panel>
          {
            cards.length === 0 && (
              <div>
                Nothing yet!
              </div>
            )
          }
          {
            cards.map((card, index) => (
              <Row type="flex" justify="center" key={index}>
                  <Col span="24">
                  <Panel>
                    <div>
                      {card.title}
                    </div>
                  </Panel>
                  </Col>
              </Row>
            ))
          }
          <Row type="flex" justify="center" key="__createCard">
              <Col span="24">
              <Panel onClick={create}>
                <div>
                  +
                </div>
              </Panel>
              </Col>
          </Row>
        </Panel>
      </Col>
    </Row>
  );
};
