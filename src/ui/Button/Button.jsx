import styled from "styled-components";
import PropTypes from "prop-types";

const StyleButton = styled.button`

&.storybook-button{ 
  width: ${(props) => props.width || "115px"};
  height: ${(props) => props.height || "34px"};

  border-radius: 8px;
  cursor: pointer;
  border: none;
}

  &.storybook-button--primary {
    color: ${(props) => props.color || "#fff"};
    background-color: ${(props) => props.background || "#624bff"};
  }
  
  &.storybook-button--secondary {
    color: ${(props) => props.color || "#333"};
    background-color: ${(props) => props.background || "#fff"};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  &.storybook-button--small {
    font-size: 12px;
    /* padding: 4px 6px; */
  }
  &.storybook-button--medium {
    font-size: 14px;
    /* padding: 6px 8px; */

    
  }
  &.storybook-button--large {
    font-size: 16px;
    /* padding: 8px 10px; */
  }
`;

function Button({
  children,
  backgroundColor,
  size = "medium",
  primary = true,
  ...props
}) {

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <StyleButton
    className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : null}
      {...props}
    >
      {children}
    </StyleButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
