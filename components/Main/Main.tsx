import Image from "next/image";
import React, { useContext } from "react";
import {
  BlackDiv,
  MainComponent,
  Men,
  OrangeDiv,
  PurpleDiv,
  Sponsors,
  Texts,
} from "./styles";
import { Contexts } from "../../contexts/Contexts";

const Main = () => {
  const { mobile } = useContext(Contexts);

  return (
    <div className="container">
      <MainComponent>
        <Texts>
          <h1>WORKOUT WITH ME</h1>
          <p>
            A huge selection of health and fitness content, healthy recipes and
            transformation stories to help you get fit and stay fit!
          </p>
          <button>Join Club Now!</button>
        </Texts>

        {mobile ? (
          <div></div>
        ) : (
          <Men>
            <Image
              src="/men.png"
              alt="a man tying his sneakers"
              width="409"
              height="684"
              quality={100}
            />
          </Men>
        )}

        {mobile ? (
          <div></div>
        ) : (
          <>
            <OrangeDiv>
              <div>
                <Image
                  src="/icons/menrunning.svg"
                  alt="run"
                  width="16"
                  height="16"
                />
              </div>
              <div>
                <p>4,95</p> <p>km</p>
              </div>
            </OrangeDiv>

            <BlackDiv>
              <div>
                <Image
                  src="/icons/play.svg"
                  alt="play ico"
                  width="15"
                  height="19"
                />
              </div>

              <div>
                <p>350+</p>
                <p>Video tutorial</p>
              </div>
            </BlackDiv>

            <PurpleDiv>
              <p>500+</p>
              <p>Free Workout Videos</p>
            </PurpleDiv>
          </>
        )}

        <Sponsors>
          <p>AS FEATURED IN</p>
          <div>
            <Image src="/sponsors/nike.svg" alt="nike" width="58" height="22" />
            <Image
              src="/sponsors/buzzfeed.svg"
              alt="buzzfeed"
              width="121"
              height="22"
            />
            <Image
              src="/sponsors/espirit.svg"
              alt="espirit"
              width="89"
              height="22"
            />
            <Image
              src="/sponsors/national.svg"
              alt="national"
              width="44"
              height="22"
            />
            <Image src="/sponsors/dw.svg" alt="dw" width="28" height="22" />
            <Image
              src="/sponsors/huffpost.svg"
              alt="huffpost"
              width="172"
              height="22"
            />
          </div>
        </Sponsors>
      </MainComponent>
    </div>
  );
};

export default Main;
