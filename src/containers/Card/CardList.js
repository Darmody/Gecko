import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardAdd from './CardAdd';

export default ({ cards, handleCreate }) => {

  return (
    <div className="row">
      <div className="col-xs-12">
        {
          cards.length === 0 && (
            <div>
              Nothing yet!
            </div>
          )
        }
        {
          cards.map((card, index) => (
            <Card key={index}>
              <CardText>
                {card.title}
              </CardText>
            </Card>
          ))
        }
        <Card>
          <CardText>
            <CardAdd
              handleCreate={handleCreate}
            />
          </CardText>
        </Card>
      </div>
    </div>
  );
};
