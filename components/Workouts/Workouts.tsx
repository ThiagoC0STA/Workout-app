import React from "react";
import { DarkDivs, Texts, WorkoutComponent } from "./styles";

const Workouts = () => {
  return (
    <div className="container" id="workouts">
      <WorkoutComponent>
        <Texts>
          <h2>Not sure where to start?</h2>
          <p>
            Programs offer day-to-day guidance on an interactive calendar to
            keep you on track.
          </p>
        </Texts>

        <DarkDivs>
          <div>
            <p>Workout Videos</p>
            <p>Access to hundreds of free, full-length workout videos. </p>
          </div>
          <div>
            <p>Workout Programs</p>
            <p>Affordable and effective workout programs. </p>
          </div>
          <div>
            <p>Meal Plans</p>
            <p>Plans built with registered dietitians and nutritionists. </p>
          </div>
          <div>
            <p>WO Plus ALL ACCESS</p>
            <p>Add powerful features to your membership. </p>
          </div>
        </DarkDivs>
      </WorkoutComponent>
    </div>
  );
};

export default Workouts;
