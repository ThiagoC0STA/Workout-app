import styled from "styled-components";

export const WorkoutComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 210px;
  width: 82vw;
`;

export const Texts = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.3px;
    color: #fafaf9;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: rgba(239, 237, 232, 0.65);
  }
`;

export const DarkDivs = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    width: 300px;
    height: 190px;
    background: #fff;
    border-radius: 12px;
    padding: 53px 40px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    p:first-child {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;
      color: #fafaf9;
    }

    p:last-child {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.3px;
      color: rgba(239, 237, 232, 0.65);
    }
  }

  div:nth-child(1) {
    background: #323443;
  }

  div:nth-child(2) {
    background: #232532;
  }

  div:nth-child(3) {
    background: #323443;
  }

  div:nth-child(4) {
    background: #4f5261;
  }
`;
