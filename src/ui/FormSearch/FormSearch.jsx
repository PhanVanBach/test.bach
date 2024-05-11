/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../Button/Button";

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: relative;
  border-radius: 16px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  padding: 8px 8px 8px 16px;
  gap: 16px;
  border: solid 1px #d5d5d5;
  outline: none;
  &:focus {
    outline: 1px solid rgba(211, 211, 211, 0.5);
  }
  font-size: 14px;
`;

const ButtonSearch = styled.div`
  position: absolute;
  z-index: 100;
  right: 0;
  height: auto;
  margin: 5px;
`;

const Search = styled.button`
  background-color: #624bff;
  width: 115px;
  height: 34px;
  border-radius: 8px;
  padding: 6px 8px 6px 8px;
  color: #fff;
  cursor: pointer;
  border: none;
`;

function FormSearch({ query, setQuery, placeholder }) {
  function handleSubmit(e) {
    e.preventDefault();

    setQuery(e.target.elements.search.value);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        name="search"
        defaultValue={query}
        type="search"
        placeholder={placeholder}
      />
      <ButtonSearch>
        <Button>Tìm kiếm</Button>
      </ButtonSearch>
    </Container>
  );
}

export default FormSearch;
