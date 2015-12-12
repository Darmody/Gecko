import React, { Component, PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch as fetchHotkey, switchPanel } from 'redux/modules/hotkey';
import { fetch, create, select, shift } from 'redux/modules/paper';
import { create as createCard, fetch as fetchCard, destroy } from 'redux/modules/card';
import CardAdd from '../Card/CardAdd/CardAdd';
import CardList from '../Card/CardList/CardList';
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
        shift,
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
    shift: PropTypes.func.isRequired,
    switchPanel: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
    fetchCard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { stopKeyHandler: false };
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

  startupHotKeyHandlers() {
    this.setState({ stopKeyHandler: false });
  }

  preventHotKeyHandlers() {
    this.setState({ stopKeyHandler: true });
  }

  hotkeyHandlers() {
    const self = this;

    return {
      focusNewCardPanel: () => {
        self.preventHotKeyHandlers();
        self.props.switchPanel(0);
      },
      focusPaperAddPanel: () => {
        self.preventHotKeyHandlers();
        self.props.switchPanel(2);
      },
      focusCardListPanel: () => {
        self.startupHotKeyHandlers();
        self.props.switchPanel(1);
      },
      switchPaperLeft: () => {
        if (self.state.stopKeyHandler) return;
        self.props.shift(self.props.paper.currentPaperIndex, -1);
      },
      switchPaperRight: () => {
        if (self.state.stopKeyHandler) return;
        self.props.shift(self.props.paper.currentPaperIndex, +1);
      }
    };
  }

  render() {
    const { paper, card, hotkey } = this.props;

    const currentPaperIndex = paper.currentPaperIndex;
    const papers = paper.list;
    const cards = card[currentPaperIndex] || [];

    const activeCardAddPanel = hotkey.activePanel === 0;
    const activeCardListPanel = hotkey.activePanel === 1;
    const activePaperAddPanel = hotkey.activePanel === 2;

    return (
      <HotKeys keyMap={hotkey.keyMap} handlers={::this.hotkeyHandlers()}>
        <div className="row">
          <div className="col-xs-12">
            <CardAdd
              focus={activeCardAddPanel}
              handleCreate={::this.handleCreateCard}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <CardList
              focus={activeCardListPanel}
              cards={cards}
              destroy={::this.handleDestroyCard}
              {...this.state}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" >
            <PaperNav
              papers={papers}
              focus={activePaperAddPanel}
              currentPaperIndex={parseInt(currentPaperIndex, 10)}
              handleSelect={::this.handleSelect}
              handleCreate={::this.handleCreate}
            />
        </div>
        </div>
      </HotKeys>
    );
  }
}
