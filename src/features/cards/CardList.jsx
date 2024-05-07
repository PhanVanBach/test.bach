import styled from "styled-components";
import Status from "../../ui/Status";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  max-width: 312px;
  height: 76px;
  padding-top: 4px;
  padding-bottom: 140px;
  border-bottom: solid 1px #e5e5e5;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  height: 52px;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin: 4px 0;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #6a696d;
`;

const Code = styled.div`
  display: flex;
  width: 50px;
  height: 22px;
  border-radius: 100px;
  border: solid 1px #e4e4e4;
  padding: 4px 8px 4px 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const Icon = styled.span`
  width: 24px;
  height: 24px;

  img {
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: invert(1);
  }
`;

const ProjectCode = styled.div`
  display: flex;
  width: 66px;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05);
  }
`;

const User = styled.div``;

function CardList({ project }) {
  const { description, name, status, projectCode, lead } = project;

  const avatar = lead?.avatar?.small;

  return (
    <Card>
      <Header>
        <ProjectCode>
          <Icon>
            <img src={"public/assets/icon/Group 49.svg"} alt="mã dự án" />{" "}
          </Icon>
          <Code>
            {" "}
            <span>{projectCode}</span>{" "}
          </Code>
        </ProjectCode>
        <User>
          <Icon>
            <img src="public/assets/icon/layer1.svg" />
          </Icon>
          <Icon style={{ marginLeft: "12px" }}>
            <img src="public/assets/icon/Vector.svg" />
          </Icon>
        </User>
      </Header>

      <Body>
        <H3>{name}</H3>
        <Description>
          {description ? description : "Không có mô tả"}
        </Description>
      </Body>

      <Footer>
        <Status status={status} />
        <div>
          <Avatar
            src={avatar ? avatar : "public/assets/icon/user-icon.svg"}
            alt="profile"
          />
        </div>
      </Footer>
    </Card>
  );
}

export default CardList;
