import styled from "styled-components";
import Status from "../../../ui/Status";
import { useState } from "react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  /* max-width: 312px; */
  width: 100%;
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

const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin: 4px 0;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
    filter: brightness(0) saturate(100%) invert(15%) sepia(52%) saturate(4559%)
      hue-rotate(203deg) brightness(96%) contrast(100%);
  }
`;

const ProjectCode = styled.div`
  display: flex;
  width: 66px;
  justify-content: space-between;
  align-items: center;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const NameAvatar = styled.p`
  position: absolute;
  line-height: 1.5;
  text-align: center;
  width: 130px;
  bottom: calc(100% + 16px);
  left: 0;
  transform: translateX(-50%);
  background-color: rgba(105, 105, 105, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  visibility: ${({ hover }) => (hover ? "visible" : "hidden")};
`;

const CardStyle = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  min-width: 360px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
`;

const User = styled.div``;

function Card({ project }) {
  const [hover, setHover] = useState(false);

  const { description, name, status, projectCode, lead } = project;

  const avatar = lead?.avatar?.small;

  const nameAvatar = lead?.name;

  console.log(project);

  return (
    <CardStyle>
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
        <Name>{name}</Name>
        <Description>
          {description ? description : "Không có mô tả"}
        </Description>
      </Body>

      <Footer>
        <Status status={status} />
        <AvatarContainer
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Avatar
            src={avatar ? avatar : "public/assets/icon/user-icon.svg"}
            alt="profile"
          />
          <NameAvatar hover={hover}>{nameAvatar}</NameAvatar>
        </AvatarContainer>
      </Footer>
    </CardStyle>
  );
}

export default Card;
