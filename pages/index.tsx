import type { NextPage } from "next";
import Head from "next/head";
import {
  Community,
  Footer,
  Header,
  Healthy,
  Main,
  Programs,
  Workouts,
} from "../components/E__Exports";

import { GlobalContext } from "../contexts/Contexts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Workout App</title>
        <meta
          name="description"
          content="A workout community for you make a great shape"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <GlobalContext>
        <Header />
        <Main />
        <Workouts />
        <Programs />
        <Healthy />
        <Community />
        <Footer />
      </GlobalContext>
    </>
  );
};

export default Home;
