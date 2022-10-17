import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  color: #fafaf9;
  align-items: center;
  justify-content: space-between;
  margin: 49px 64px 0 49px;

  p {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 0.4s;

    :hover {
      color: #e6533c;
    }
  }

  a,
  svg {
    cursor: pointer;
    transition: all ease 0.4s;

    :hover {
      color: #e6533c;
    }
  }
`;

export const DesktopHeader = styled.nav`
  display: flex;
  gap: 22px;
  font-size: 12px;
  font-weight: 400;
`;

export const MobileHeader = styled.div`
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background-color: #080808;
    z-index: 999;

    position: fixed;
    top: 0px;

    height: 101vh;
    width: 50vw;

    padding-bottom: 100px;
    transition: all ease 0.4s;
  }

  .active {
    position: fixed;
    right: 0;
  }

  .inative {
    position: fixed;
    right: -50vw;
  }

  div {
    position: relative;
    top: -10vh;
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 0 5vw;

    svg {
      font-size: 32px;
    }
  }
`;
