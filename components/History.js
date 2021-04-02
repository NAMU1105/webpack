import React, { Component } from "react";
import { withRouter } from "next/router";

const styles = {
  history: {
    color: "red",
  },
};

class History extends Component {
  render() {
    const { router } = this.props;
    return router.query.history ? (
      <div style={styles.history}>{router.query.history}</div>
    ) : null;
  }
}

export default withRouter(History);
