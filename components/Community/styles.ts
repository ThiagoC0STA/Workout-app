import styled from "styled-components";

export const ComunityComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 77px;
  margin-bottom: 110px;

  h2 {
    font-weight: 600;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: 0.83px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 70px;

  article {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 35px;
    width: 538px;
    height: 640px;
    border-radius: 5px;
    padding: 70px 30px;

    button {
      background: #0070c9;
      border-radius: 10px;
      width: 150px;
      height: 30px;
      color: #fafaf9;
      border: 1px solid #0070c9;
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      position: relative;
      left: -125px;
      top: 10px;
      transition: all ease 0.4s;
      cursor: pointer;

      :hover {
        background: #005396;
        border: 1px solid #005396;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
    }

    div:nth-child(3) {
      display: flex;
      align-items: center;
      gap: 5px;
      position: relative;
      left: -145px;
      top: 100px;
      width: max-content;

      a {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.5px;
        color: #0070c9;
      }

      svg {
        color: #fafaf9;
        font-size: 28px;
      }
    }

    .left {
      margin-left: -60px;
    }
  }

  article:first-child {
    background: #232532;
  }

  article:last-child {
    background: #323443;
  }

  h3 {
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #fafaf9;
  }

  p,
  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: rgba(239, 237, 232, 0.65);
  }

  ul {
    margin-left: 30px;
  }

  @media (max-width: 680px) {
    article {
      width: 500px;
    }
  }

  @media (max-width: 580px) {
    article {
      width: 460px;
    }
  }

  @media (max-width: 500px) {
    article {
      width: 400px;
    }

    h3 {
      font-size: 30px;
    }

    p,
    li {
      font-size: 15px;
      line-height: 24px;
    }

    .link,
    button {
      margin-left: 70px;
    }
  }

  @media (max-width: 430px) {
    article {
      width: 300px;
      height: 600px;
    }

    h3 {
      font-size: 30px;
    }

    p,
    li {
      font-size: 12px;
      line-height: 24px;
    }

    .link,
    button {
      margin-left: 150px;
    }

    .link {
      margin-top: -100px;
    }

    button {
      margin-top: -20px;
    }
  }
`;
