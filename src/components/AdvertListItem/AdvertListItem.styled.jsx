import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  /* height: 358px; */
  display: flex;
  gap: 24px;
  border: 1px solid #101828;
  margin: 32px 0;
`;
export const Img = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;
export const Content = styled.div`
  flex-direction: column;
  overflow: hidden;
`;
export const Hed = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
`;
export const Price = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  margin-left: auto;
`;
export const Btn = styled.div`
  border: none;
  margin-left: 15px;
`;
export const Location = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 24px;
`;
export const P = styled.p`
  overflow: hidden;
  color: #475467;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  margin-bottom: 24px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const Item = styled.li`
  background-color: #f2f4f7;
  display: flex;
  align-items: center;
  /* width: auto; */
  padding: 12px 18px;
  border-radius: 100px;
  gap: 8px;
`;
export const Button = styled.button`
  border-radius: 200px;
  padding: 16px 60px;

  height: 56px;

  background-color: #e44848;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;
`;
