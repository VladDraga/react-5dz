import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  gap:10px;
  justify-content:center;
`;

const Badge = styled.span`
  padding:6px 12px;
  border-radius:20px;
  font-size:12px;
  color:white;

  background:${props => {
    if (props.active && props.level === 1) return "#4caf50";
    if (props.active && props.level === 2) return "#ff9800";
    if (props.active && props.level === 3) return "#f44336";
    return "#ddd";
  }};
`;

function Difficulty({ difficulty }) {
  return (
    <Wrapper>
      <Badge active={difficulty === 1} level={1}>
        Easy
      </Badge>

      <Badge active={difficulty === 2} level={2}>
        Medium
      </Badge>

      <Badge active={difficulty === 3} level={3}>
        Hard
      </Badge>
    </Wrapper>
  );
}

export default Difficulty;