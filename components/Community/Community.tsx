import Link from "next/link";
import React from "react";
import { ComunityComponent, Texts } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";

const Community = () => {
  return (
    <div className="container" id="community">
      <ComunityComponent>
        <h2>Membership</h2>

        <Texts>
          <article>
            <h3>Join for Free</h3>
            <div>
              <p>
                Reach your fitness goals or maintain your healthy lifestyle with
                professional training and support from a positive and active
                online community.
              </p>
              <ul>
                <li>600 Full-Length Workout Videos</li>
                <li>Customizable Calendar</li>
                <li>Healthy Recipes</li>
                <li>Health and Fitness Articles</li>
                <li>Positive and Supportive Online Community</li>
                <li>No Credit Card Needed</li>
              </ul>
            </div>

            <div className="link">
              <Link href="/">
                <a>See More</a>
              </Link>
              <BsArrowRightShort />
            </div>
          </article>

          <article>
            <h3>WO Plus</h3>
            <div>
              <p>
                WO Plus includes everything you get with a free membership and
                adds brand new convenience features, fitness tools, and unique
                content.
              </p>
              <ul>
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FB Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
            </div>

            <button>Join Club Now!</button>
          </article>
        </Texts>
      </ComunityComponent>
    </div>
  );
};

export default Community;
