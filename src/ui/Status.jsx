import styled from "styled-components";

const TT = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #6a696d;
`;

const Enum = styled.p`
  height: 22px;
  width: 100px;
  border-radius: 100px;
  padding: 4px 8px 4px 8px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 4px;
  text-align: center;

  background-color: ${(props) => {
    switch (props.status) {
      case "To Do":
        return "#2E4AAD";
      case "In Progress":
        return "#399D8C";
      case "On Hold":
        return "#F5802C";
      case "Completed":
        return "#19CE15";
      case "Cancelled":
        return "#BEBFC0";
      default:
        return "#2E4AAD";
    }
  }};
`;

function Status({ status }) {
  const getStatus = (status) => {
    switch (status) {
      case "To Do":
        return "Lên kế hoạch";
      case "In Progress":
        return "Đang tiến hành";
      case "On Hold":
        return "Tạm dừng";
      case "Completed":
        return "Hoàn thành";
      case "Cancelled":
        return "Huỷ bỏ";
      default:
        return "Lên kế hoạch";
    }
  };

  return (
    <TT>
      Trạng thái <Enum status={status}>{getStatus(status)}</Enum>{" "}
    </TT>
  );
}

export default Status;

// "To Do": Lên kế hoạch, #2E4AAD
// "In Progress": Đang tiến hành, #399D8C
// "On Hold": Tạm dừng, #F5802C
// "Completed": Hoàn thành, #19CE15
// "Cancelled": Huỷ bỏ, #BEBFC0
