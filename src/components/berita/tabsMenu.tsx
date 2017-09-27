import * as React from "react";
import { MemberEntity } from "../../model";
import PropTypes from 'prop-types';
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from 'material-ui/Tabs';

import { browserHistory } from 'react-router';

interface Props {}
const styles = {
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
  },
  searchPadding: {
    flex: "absolute",
    padding: "8px 0px 0px 8px"
  },
  formStyle: {
    height: 40
  },
  toField: {
    marginTop: 0
  },
  imageIcons: {
    width: 25,
    paddingTop: 10
  },
  autocomplateBox: {
    paddingTop: 10
  },
  logoKudo: {
    paddingTop: 5
  },
  logoKudoSearch: {
    paddingTop: 5,
    opacity: 0.5
  },
  textFieldMargin: {
    marginTop: "-60px",
    paddingLeft: "10px",
    width: 230
  },
  tabsheader: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    background: 'rgb(7, 129, 208)',
    color:'#fff',
  }
};

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>;
}
class TabsMenu extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
    browserHistory.replace('/berita');
    if (Number(value) === Number(1) ){
      browserHistory.push('/berita/notifikasi');
    }
  };
  render() {
    const { value } = this.state;
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor={'#FFF'}
          style={styles.tabsheader}
        >
          <Tab label="PROMO" className="berita" />
          <Tab label="NOTIFIKASI" className="berita" />
        </Tabs>
        {value === 0 && <TabContainer style={styles.tabsheader}>asdfas{'Item One'}</TabContainer>}
        {value === 1 && <TabContainer style={styles.tabsheader}>{'Item Two'}</TabContainer>}
      </Paper>
    );
  }
}
export default TabsMenu;