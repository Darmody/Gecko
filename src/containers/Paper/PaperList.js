import React, { Component, PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch as fetchHotkey, switchPanel } from 'redux/modules/hotkey';
import { fetch, create, select } from 'redux/modules/paper';
import { create as createCard, fetch as fetchCard, destroy } from 'redux/modules/card';
import CardAdd from '../Card/CardAdd/CardAdd';
import CardList from '../Card/CardList/CardList';
import PaperAdd from './PaperAdd/PaperAdd';
import PaperNav from './PaperNav/PaperNav';

@connect(
  (state) => ({
    paper: state.paper,
    card: state.card,
    hotkey: state.hotkey,
  }),
  dispatch => ({
    ...bindActionCreators(
      {
        create,
        createCard,
        destroy,
        fetch,
        fetchCard,
        fetchHotkey,
        select,
        switchPanel,
      },
      dispatch)
  })
)
export default class PaperList extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    hotkey: PropTypes.object.isRequired,
    paper: PropTypes.object.isRequired,
    create: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchHotkey: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    switchPanel: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
    fetchCard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
    this.props.fetchCard();
    this.props.fetchHotkey();
  }


  handleSelect(index) {
    this.props.select(index);
  }

  handleCreate(data) {
    this.props.create(data);
  }

  handleCreateCard(title) {
    const index = this.props.paper.currentPaperIndex;
    this.props.createCard(index, { title });
  }

  handleDestroyCard(cardIndex) {
    this.props.destroy(
      this.props.paper.currentPaperIndex,
      cardIndex
    );
  }

  hotkeyHandlers() {
    return {
      focusNewCardPanel: () => (this.props.switchPanel(0)),
      focusCardListPanel: () => (this.props.switchPanel(1)),
      focusPaperAddPanel: () => (this.props.switchPanel(2)),
    };
  }

  render() {
    const { paper, card, hotkey } = this.props;

    const currentPaperIndex = paper.currentPaperIndex;
    const papers = paper.list;
    const cards = card[currentPaperIndex] || [];

    return (
      <HotKeys keyMap={hotkey.keyMap} handlers={::this.hotkeyHandlers()}>
        <div className="row">
          <div className="col-xs-12">
            <CardAdd
              focus={hotkey.activePanel === 0}
              handleCreate={::this.handleCreateCard}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <CardList
              focus={hotkey.activePanel === 1}
              cards={cards}
              destroy={::this.handleDestroyCard}
              {...this.state}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" >
            <PaperAdd
              focus={hotkey.activePanel === 2}
              handleCreate={::this.handleCreate}
            />
            <PaperNav
              papers={papers}
              currentPaperIndex={parseInt(currentPaperIndex, 10)}
              handleSelect={::this.handleSelect}
            />
        </div>
        </div>
      </HotKeys>
    );
  }
}
