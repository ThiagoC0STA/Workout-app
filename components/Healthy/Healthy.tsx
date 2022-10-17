import Image from "next/image";
import React, { useContext } from "react";
import { HealthyComponent } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { Contexts } from "../../contexts/Contexts";

const Healthy = () => {
  const { mobile } = useContext(Contexts);

  return (
    <HealthyComponent
      id="healthy"
      style={mobile ? { gap: "0px" } : { gap: "100px" }}
    >
      {mobile ? (
        <></>
      ) : (
        <Image
          src="/woman2.jpg"
          alt="a woman training"
          width="560"
          height="510"
          quality={100}
        />
      )}

      <section>
        <h2 style={mobile ? { fontSize: "40px" } : { fontSize: "50px" }}>
          Get more with low-cost training programs and advanced features.
        </h2>
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
    </HealthyComponent>
  );
};

export default Healthy;
