import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd/lib/layout';
import { fetch, create, select } from 'redux/modules/paper';
import { create as createCard, fetch as fetchCard } from 'redux/modules/card';
import styles from './PaperList.scss';
import PaperNav from './PaperNav/PaperNav';
import CardList from '../Card/CardList';

@connect(
  (state) => ({
    paper: state.paper,
    card: state.card,
  }),
  dispatch => ({
    ...bindActionCreators(
      { fetch, create, select, createCard, fetchCard },
      dispatch)
  })
)
export default class PaperList extends Component {
  static propTypes = {
    paper: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired,
    create: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
    fetchCard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
    this.props.fetchCard();
  }

  handleSelect(index) {
    this.props.select(index);
  }

  handleCreate(data) {
    this.props.create(data);
  }

  handleCreateCard() {
    const index = this.props.paper.currentPaperIndex;
    this.props.createCard(index, {title: 'card'});
  }

  render() {
    const { paper, card } = this.props;
    const paperIndex = paper.currentPaperIndex;
    const papers = paper.list;
    const cards = card[paperIndex] || [];

    return (
      <div className={styles.paper}>
        <Row type="flex" justify="space-around">
          <Col span="8" >
            <PaperNav
              papers={papers}
              handleCreate={::this.handleCreate}
              handleSelect={::this.handleSelect}
            />
          </Col>
          <Col span="16">
          <CardList
            cards={cards}
            create={::this.handleCreateCard}
          />
          </Col>
        </Row>
      </div>
    );
  }
}
