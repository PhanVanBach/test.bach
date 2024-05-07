import { useEffect, useState } from "react";

import styled from "styled-components";
import CardList from "./CardList";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

import { getData } from "../../server/apiDataCard";
import FormSearch from "../../ui/FormSearch";

const Container = styled.div`
  background-color: #f3f2f6;
  width: 100%;
  padding: 25px;
  max-width: 1128px;
  margin: 0 auto;
`;

const Row = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

const Button = styled.button`
  background-color: #624bff;
  border: none;
  width: 115px;
  height: 34px;
  border-radius: 8px;
  padding: 6px 8px 6px 8px;
  color: #fff;
  cursor: pointer;
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

  @media (max-width: 932px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function Project() {
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

      <FormSearch query={query} setQuery={setQuery} />

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
            <CardList project={project} key={project.id} />
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

export default Project;
