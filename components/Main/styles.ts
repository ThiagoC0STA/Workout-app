import styled from "styled-components";

export const MainComponent = styled.main`
  margin: 180px 130px 158px 130px;
  padding: 0 20px;
  width: 100%;
`;

export const Men = styled.div`
  position: absolute;
  left: 54vw;
  top: 305px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 46px;

  h1 {
    font-size: 165px;
    max-width: 883px;
    line-height: 170px;
  }

  p {
    max-width: 560px;
    color: rgba(239, 237, 232, 0.65);
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 16px;
  }

  button {
    width: 200px;
    height: 70px;
    background: #e6533c;
    border-radius: 10px;
    color: #ffffff;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins";
    transition: all ease 0.4s;
    cursor: pointer;

    :hover {
      background: #b3402e;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 140px;
      text-align: center;
      line-height: 160px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 120px;
      line-height: 130px;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 100px;
      line-height: 120px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 90px;
      line-height: 110px;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 70px;
      line-height: 90px;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 60px;
      line-height: 70px;
    }

    button {
      width: 140px;
      height: 50px;
      font-size: 15px;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 50px;
      line-height: 70px;
    }
  }
`;

export const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;

  margin-top: 116px;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    color: rgba(239, 237, 232, 0.65);
  }

  div {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }
`;

export const OrangeDiv = styled.div`
  position: absolute;
  left: 72.8125vw;
  top: 279px;

  width: 180px;
  height: 110px;
  background: #ef8964;
  border-radius: 12px;
  padding: 14px 25px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  div:first-child {
    background: #efa082;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:last-child {
    display: flex;
    align-items: end;
    gap: 8px;

    p:first-child {
      font-weight: 700;
      font-size: 48px;
      line-height: 50px;
      letter-spacing: -5px;
      color: #fafaf9;
    }

    p:last-child {
      letter-spacing: 0.5px;
      color: rgba(239, 237, 232, 0.65);
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const BlackDiv = styled.div`
  position: absolute;
  left: 46.875vw;
  top: 668px;

  width: 206px;
  height: 96px;
  background: #303030;
  border-radius: 12px;
  padding: 20px 23px;

  display: flex;
  align-items: center;
  gap: 12px;

  div:first-child {
    background: #ef8963;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-left: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p:first-child {
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.3px;
      color: #fafaf9;
    }

    p:last-child {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;
      color: rgba(239, 237, 232, 0.65);
    }
  }
`;

export const PurpleDiv = styled.div`
  position: absolute;
  left: 76vw;
  top: 768px;

  width: 193px;
  height: 98px;
  padding: 17px 23px;
  background: #7a29dc;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  p:first-child {
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fafaf9;
  }

  p:last-child {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 1px;
    color: rgba(239, 237, 232, 0.65);
  }
`;
