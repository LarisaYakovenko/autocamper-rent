import styled from 'styled-components';
import backgroundImage from '.././../image/autocamper.jpg';

export const Container = styled.div`
  /* max-width: 100%; */
  min-width: 1440px;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: calc(100vh - 65px);
  margin: 0 auto;
`;
export const H1 = styled.h1`
  width: 400px;
  font-size: 48px;
  font-weight: 600px;
  margin-left: auto;
  padding: 50px;
  color: #111;
`;
export const P = styled.p`
  width: 400px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  text-align: end;
  color: #111;
  padding: 50px;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;
