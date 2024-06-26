import { useEffect, useState } from "react";

import styled from "styled-components";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Card from "./Card/Card";
import Button from "../../ui/Button/Button";

import { getData } from "../../server/apiDataCard";
import FormSearch from "../../ui/FormSearch/FormSearch";

const Container = styled.div`
  background-color: #f3f2f6;
  width: 100%;
  padding: 25px;
  max-width: 1180px;
  margin: 0 auto;

`;

const Row = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 16px 0;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

const GridStyle = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

function CardList() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData(query)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  const projects = data.flatMap((data) => data.projects);

  return (
    <Container>
      <Row>
        <Title style={{ margin: 0 }}>Tất cả dự án</Title>
        <Button>Thêm dự án</Button>
      </Row>

      <FormSearch
        query={query}
        setQuery={setQuery}
        placeholder="nhập tên dự án"
      />

      <Row>
        <p>
          Tổng dự án <strong>50</strong>
        </p>
        <p>
          Sắp xếp theo: <strong>Mới nhất</strong>
        </p>
      </Row>

      {data.length > 0 ? (
        <GridStyle>
          {projects.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </GridStyle>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <Empty resource={query} />
      )}
    </Container>
  );
}

export default CardList;
