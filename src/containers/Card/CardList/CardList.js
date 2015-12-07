import React, { Component, PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';
import ReactDOM from 'react-dom';
import max from 'lodash/math/max';
import min from 'lodash/math/min';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import styles from './CardList.scss';
import activeStyles from './ActiveCardList.scss';
require('mdi/css/materialdesignicons.css');

export default class CardList extends Component {
  static propTypes = {
    focus: PropTypes.bool,
    cards: PropTypes.array.isRequired,
    destroy: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      currentActiveCard: 0,
    };
  }

  componentDidMount() {
    if (this.props.focus) {
      ReactDOM.findDOMNode(this).focus();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.focus && this.props.focus) {
      ReactDOM.findDOMNode(this).focus();
    }

    if (prevState.currentActiveCard !== this.state.currentActiveCard) {
      const { currentActiveCard } = this.state;
      ReactDOM.findDOMNode(
        this.refs[`card_${currentActiveCard}`]
      ).scrollIntoViewIfNeeded();
    }

  }

  forwardCardUp() {
    const currentActiveCard = max([this.state.currentActiveCard - 1, 0]);
    this.setState({ currentActiveCard });
  }

  forwardCardDown() {
    const currentActiveCard = min([
      this.state.currentActiveCard + 1,
      this.props.cards.length - 1
    ]);

    this.setState({ currentActiveCard });
  }

  hotkeyHandlers() {
    return {
      forwardCardUp: () => (this.forwardCardUp()),
      forwardCardDown: () => (this.forwardCardDown()),
      destroyCard: () => (this.props.destroy(this.state.currentActiveCard)),
    };
  }

  render() {
    const { cards, focus } = this.props;
    const { currentActiveCard } = this.state;

    return (
      <HotKeys handlers={::this.hotkeyHandlers()}>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.cardList}>
              {
                cards.map((card, index) => {
                  const focused = focus && currentActiveCard === index;
                  const cardStyle = focused ? activeStyles : styles;

                  return (
                    <Card
                      className={cardStyle.card}
                      key={index}
                      ref={`card_${index}`}
                    >
                      <CardText className={cardStyle.cardText}>
                        <span className={cardStyle.titleIcon}>
                          <i className="mdi mdi-tooltip-outline" />
                        </span>
                        {card.title}
                      </CardText>
                    </Card>
                  );
                })
              }
            </div>
          </div>
        </div>
      </HotKeys>
    );
  }
}
