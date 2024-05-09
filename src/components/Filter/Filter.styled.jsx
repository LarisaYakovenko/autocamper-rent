import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  width: 360px;

  /* display: block; */
  /* justify-content: center; */

  padding: 0 63px;
`;
export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  /* & > :nth-child(4) {
    margin-top: 32px;
  } */

  hr {
    background-color: rgba(16, 24, 40, 0.1);
    display: block;
    margin: 24px 0;
    opacity: 0.2;
  }
`;
export const Label = styled.label`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(16, 24, 40, 0.6);

  svg {
    position: absolute;
    width: 18px;
    height: 20px;
    left: 18px;
    top: 45px;
    fill: none;
    stroke: #101828;
  }

  input {
    padding: 18px;
    padding-left: 44px;
    background-color: #f7f7f7;
    color: #101828;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    border-radius: 10px;
    border: none;

    &::placeholder {
      color: rgba(16, 24, 40, 0.6);
    }
  }
`;

export const P = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;
export const H2 = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #101828;

  &:last-of-type {
    margin-top: 32px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  /* padding: 16px; */
`;

export const Input = styled.div`
  position: relative;
  display: flex;
  width: 112px;
  height: 95px;
  align-items: center;
  justify-content: center;
  width: calc((100% - 2 * 10px) / 3);
  border-radius: 10px;
  cursor: pointer;

  input {
    width: 112px;
    height: 80px;
    /* padding: 15px; */
    position: absolute;
    opacity: 0;
    cursor: pointer;
    transition: border 150ms linear;
    padding: 0 20px;

    &:checked + div {
      border: 1px solid #e44848;
    }
  }
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  width: 100%;
  height: 100%;
  gap: 3px;
  color: #101828;
  border: 1px solid #101828;
  border-radius: 10px;
  padding: 0 10px;

  svg {
    height: 40px;
    padding: 0;
  }
`;
export const Btn = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  margin: 63px 0;
  background-color: #e44848;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;
`;
