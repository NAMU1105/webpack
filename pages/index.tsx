import History from "../components/History";
import Link from "next/link";

const styles = {
  layout: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  header: {
    height: 60,
  },
  main: {
    flex: 1,
  },
  footer: {
    height: 60,
  },
  divider: {
    color: "blue",
    listStyle: "none",
  },
};

const Home = () => {
  return (
    <>
      <p>Home</p>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span style={styles.divider}>|</span>
      <Link href="/post">
        <a>Post</a>
      </Link>
      <span style={styles.divider}>|</span>
      <Link href="/about">
        <a>About</a>
      </Link>
      <History />
    </>
  );
};

export default Home;
