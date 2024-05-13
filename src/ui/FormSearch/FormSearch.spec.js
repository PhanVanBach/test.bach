/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import FormSearch from './FormSearch';

describe('FormSearch component', () => {
  it('renders correctly with initial query and placeholder', () => {
    const mockSetQuery = jest.fn();
    render(
      <FormSearch
        query='initial search'
        setQuery={mockSetQuery}
        placeholder='Search here...'
      />
    );

    const input = screen.getByPlaceholderText('Search here...');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('initial search');
  });

  it('calls setQuery with input value on form submission', () => {
    const mockSetQuery = jest.fn();
    render(
      <FormSearch
        query=''
        setQuery={mockSetQuery}
        placeholder='Type something...'
      />
    );

    const input = screen.getByPlaceholderText('Type something...');
    const form = screen.getByTestId('form-search');

    // Simulate user typing into the input
    fireEvent.change(input, { target: { value: 'new search' } });

    // Simulate form submission
    fireEvent.submit(form);

    expect(mockSetQuery).toHaveBeenCalledWith('new search');
  });

  it('renders button and triggers form submission', () => {
    const mockSetQuery = jest.fn();
    render(
      <FormSearch
        query=''
        setQuery={mockSetQuery}
        placeholder='Type something...'
      />
    );

    const button = screen.getByRole('button', { name: 'Tìm kiếm' });
    expect(button).toBeInTheDocument();

    // Simulate clicking the search button
    fireEvent.click(button);

    // Check if form submission is handled
    expect(mockSetQuery).toHaveBeenCalled();
  });
});
