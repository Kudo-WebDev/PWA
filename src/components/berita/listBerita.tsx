import * as React from "react";
import { HeaderBerita } from './headerBerita';
import TabsMenu  from './tabsMenu';

interface Props {
  // onChange: (fieldName: string, value: string) => void;
  // onSave: () => void;
}
const styles = {
  containerMobile: {
    maxWidth: "480px",
    width:"100%",
    display: "block",
    margin: "auto"
  },
  pageContainer: {
    width: "100%",
    float: "left",
    minHeight: "100%",
    flex: "relative"
  },
  navbarFixed: {
    height: "50px",
    flex: "fixed",
    top: 0,
    width: "100%",
    zIndex: 5
  },
  muiPanel: {
    backgroundColor: "#0781d0",
    boxShadow: "0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12)",
    color: "#fff"
  },
  navSeach: {
    padding: "8px 0 8px 16px",
    height: "56px"
  },
  tabscointainer: {
    paddingTop:50,
  }
};

export const ListBerita: React.StatelessComponent<Props> = props => {
  return (
    <div style={styles.containerMobile}>
      <div style={styles.pageContainer}>
        <div style={styles.navbarFixed}>
          <div style={styles.muiPanel}>
            <div style={styles.navSeach}>
              <HeaderBerita />
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.tabscointainer}>
        <TabsMenu />
      </div>


    </div>
  );
};
