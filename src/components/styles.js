import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  ${props =>
    props.highlight &&
    `
      border: 3px solid #ff6b6b;
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 16px;
  font-size: 18px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 16px;
  padding: 10px;

  background: #f8f8f8;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 13px;
  color: #555;

  svg {
    font-size: 18px;
  }
`;