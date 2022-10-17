import Link from "next/link";
import React, { useContext, useState } from "react";
import { Contexts } from "../../contexts/Contexts";
import { DesktopHeader, HeaderComponent, MobileHeader } from "./styles";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const { mobile } = useContext(Contexts);
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <HeaderComponent>
      <p>WORKOUT</p>
      {mobile ? (
        <MobileHeader>
          <FiMenu onClick={() => setMobileNav(!mobileNav)} />

          <nav className={mobileNav ? "active" : "inative"}>
            <div>
              <CgClose onClick={() => setMobileNav(!mobileNav)} />
            </div>
            <Link href="#workouts">
              <a>WORKOUTS</a>
            </Link>
            <Link href="#programs">
              <a>PROGRAMS</a>
            </Link>
            <Link href="#healthy">
              <a>HEALTHY LIVING</a>
            </Link>
            <Link href="#community">
              <a>COMMUNITY</a>
            </Link>
          </nav>
        </MobileHeader>
      ) : (
        <DesktopHeader>
          <Link href="#workouts">
            <a>WORKOUTS</a>
          </Link>
          <Link href="#programs">
            <a>PROGRAMS</a>
          </Link>
          <Link href="#healthy">
            <a>HEALTHY LIVING</a>
          </Link>
          <Link href="#community">
            <a>COMMUNITY</a>
          </Link>
        </DesktopHeader>
      )}
    </HeaderComponent>
  );
};

export default Header;
