/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button>Click here</Button>);
    const button = getByText('Click here');
    expect(button).toBeTruthy();
  });

  it('renders with primary style', () => {
    const { getByText } = render(<Button primary>Primary Button</Button>);
    const button = getByText('Primary Button');
    expect(button).toHaveClass('storybook-button--primary');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom background color', () => {
    const { getByText } = render(<Button backgroundColor="#ff0000">Red Button</Button>);
    const button = getByText('Red Button');
    expect(button).toHaveStyle('background-color: #ff0000');
  });

  it('renders with custom size', () => {
    const { getByText } = render(<Button size="large">Large Button</Button>);
    const button = getByText('Large Button');
    expect(button).toHaveClass('storybook-button--large');
  });
});

