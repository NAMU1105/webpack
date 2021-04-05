import React from "react";
import { withRouter } from "next/router";

const styles = {
  history: {
    color: "red",
  },
};

const History = (props) => {
  const { router } = props;

  return router.query.history ? (
    <div style={styles.history}>{router.query.history}</div>
  ) : null;
};

export default withRouter(History);
