import Link from "next/link";
import React, { useContext } from "react";
import { ProgramsComponent } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import { Contexts } from "../../contexts/Contexts";

const Programs = () => {
  const { mobile } = useContext(Contexts);

  return (
    <ProgramsComponent
      id="programs"
      style={mobile ? { gap: "0px" } : { gap: "100px" }}
    >
      <section>
        <h2>Work out at home for free.</h2>
        <p>
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym. With hundreds of professional
          workouts, healthy recipes and informative articles, as well as one of
          the most positive communities on the web, you&apos;ll have everything
          you need to reach your personal fitness goals – for free!
        </p>
        <div>
          <Link href="/">
            <a>See More</a>
          </Link>
          <BsArrowRightShort />
        </div>
      </section>

      {mobile ? (
        <div></div>
      ) : (
        <Image
          src="/woman1.jpg"
          alt="a woman stretching"
          width="640"
          height="539"
          quality={100}
        />
      )}
    </ProgramsComponent>
  );
};

export default Programs;
