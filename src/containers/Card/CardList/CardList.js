import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import React from 'react';
import CardAdd from '../CardAdd/CardAdd';
import styles from './CardList.scss';
require('mdi/css/materialdesignicons.css');

export default ({ cards, handleCreate }) => {

  const prepareHandleCreate = (title) => {
    handleCreate({title: title});
  };

  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <CardAdd handleCreate={prepareHandleCreate} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          {
            cards.map((card, index) => (
              <Card
                className={styles.card}
                key={index}
              >
                <CardText className={styles.cardText}>
                  <span className={styles.titleIcon}>
                    <i className="mdi mdi-tooltip-outline" />
                  </span>
                  {card.title}
                </CardText>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  );
};
