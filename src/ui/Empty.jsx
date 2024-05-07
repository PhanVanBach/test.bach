import styled from "styled-components";

const Emptyy = styled.div`
  background-color: #fff;
  border-radius: 16px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

function Empty({ resource }) {
  return (
    <Emptyy>
      <p>
        <strong>🙌 {resource} </strong> không tìm thấy!
      </p>
    </Emptyy>
  );
}

export default Empty;
