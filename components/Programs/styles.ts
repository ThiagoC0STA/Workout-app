import styled from "styled-components";

export const ProgramsComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 121px;
  padding: 0px 50px;

  p {
    max-width: 480px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: rgba(239, 237, 232, 0.65);
  }

  img {
    border-radius: 5px;
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.3px;
  }

  a {
    color: #0070c9;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }

  svg {
    color: #fafaf9;
    font-size: 28px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 38px;
    justify-content: center;
    align-items: start;
    min-width: 591px;

    div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 12px;
    }

    section {
      min-width: 0px;
    }
  }
`;
