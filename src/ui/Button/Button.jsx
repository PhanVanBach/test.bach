import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleButton = styled.button`
  width: ${(props) => props.width || '115px'};
  height: ${(props) => props.height || '34px'};
  color: ${(props) => props.textColor || '#fff'};
  border-radius: 8px;
  cursor: pointer;
  border: none;

  .storybook-button--primary {
    color: ${(props) => props.textColor || '#fff'};
    background-color: ${(props) => props.background || '#624bff'};
  }
  .storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  .storybook-button--small {
    font-size: 12px;
    padding: 4px 6px;
  }
  .storybook-button--medium {
    font-size: 14px;
    padding: 6px 8px;

    color: ${(props) => props.textColor || '#fff'};
    background-color: ${(props) => props.background};
  }
  .storybook-button--large {
    font-size: 16px;
    padding: 8px 10px;
  }
`;

function Button({ children, backgroundColor, size, primary, ...props }) {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <StyleButton
      className={[`storybook-button, storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </StyleButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  children: PropTypes.string.isRequired,

  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: '#624bff',
  primary: false,
  size: 'medium',
  onClick: undefined
};

export default Button;
