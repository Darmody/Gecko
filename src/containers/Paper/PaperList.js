import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch, create, select } from 'redux/modules/paper';
import { create as createCard, fetch as fetchCard } from 'redux/modules/card';
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

  handleCreateCard(data) {
    const index = this.props.paper.currentPaperIndex;
    this.props.createCard(index, data);
  }

  render() {
    const { paper, card } = this.props;
    const paperIndex = paper.currentPaperIndex;
    const papers = paper.list;
    const cards = card[paperIndex] || [];

    return (
      <div className="row">
        <div className="col-xs-4">
          <PaperNav
            papers={papers}
            handleCreate={::this.handleCreate}
            handleSelect={::this.handleSelect}
          />
        </div>
        <div className="col-xs-8">
          <CardList
            cards={cards}
            handleCreate={::this.handleCreateCard}
          />
        </div>
      </div>
    );
  }
}
