import * as React from "react";
import { MemberEntity } from "../../model";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

interface Props {
 
}
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
        paddingTop:10,
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
      }
  };
export const HeaderBerita: React.StatelessComponent<Props> = props => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={9}>
          <Paper style={styles.formStyle}>
            <i style={styles.searchPadding}>
              <img
                src="https://static.kudo.co.id/shop/src/img/logo.png?ver=38.production.2"
                width="60px"
                style={styles.logoKudo}
              />
            </i>
            <TextField
              id="name"
              style={styles.textFieldMargin}
              margin="normal"
            />
            <i style={styles.searchPadding}>
              <img
                src="https://static.kudo.co.id/shop/src/img/icons/svg/ic_search.svg?ver=38.production.2"
                width="30px"
                style={styles.logoKudoSearch}
              />
            </i>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <img
            alt="Favorite"
            src="https://static.kudo.co.id/shop/src/img/icons/svg/ic_favorite_white.svg?ver=38.production.2"
            style={styles.imageIcons}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <img
            src="https://static.kudo.co.id/shop/src/img/icons/svg/ic_shopping_cart.svg?ver=38.production.2"
            style={styles.imageIcons}
          />
        </Grid>
      </Grid>
    </div>
  );
};
