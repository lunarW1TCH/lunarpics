import {
  getByAltText,
  getByRole,
  getByText,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageForm from './ImageForm';

describe('ImageForm:', () => {
  test('renders number input elements', () => {
    render(<ImageForm />);

    const inputElements = screen.getAllByRole('spinbutton');
    expect(inputElements).not.toHaveLength(0);
  });

  test('renders checkbox input elements', () => {
    render(<ImageForm />);

    const inputElements = screen.getAllByRole('checkbox');
    expect(inputElements).not.toHaveLength(0);
  });

  test('renders a submit button', () => {
    render(<ImageForm />);

    const inputElements = screen.getAllByRole('button');
    expect(inputElements).not.toHaveLength(0);
  });

  test('renders width label', () => {
    render(<ImageForm />);

    const label = screen.getByLabelText(/Width/);
    expect(label).toBeInTheDocument();
  });

  test('renders height label', () => {
    render(<ImageForm />);

    const label = screen.getByLabelText(/Height/);
    expect(label).toBeInTheDocument();
  });

  test('renders disable background label', () => {
    render(<ImageForm />);

    const label = screen.getByLabelText(/Disable Background/);
    expect(label).toBeInTheDocument();
  });

  test('renders disable stars label', () => {
    render(<ImageForm />);

    const label = screen.getByLabelText(/Disable Stars/);
    expect(label).toBeInTheDocument();
  });

  test('does not render substyle label', () => {
    render(<ImageForm />);

    const label = screen.queryByLabelText('Substyle');
    expect(label).not.toBeInTheDocument();
  });
});

describe('ImageForm with pathname: /planets', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/planets',
      },
      writable: true,
    });
  });

  test('renders select elements', () => {
    render(<ImageForm />);

    const selectElements = screen.getAllByRole('combobox');
    expect(selectElements).not.toHaveLength(0);
  });

  test('renders disable satellites label', () => {
    render(<ImageForm />);

    const label = screen.getByLabelText('Disable Satellites');
    expect(label).toBeInTheDocument();
  });

  test('renders style label', () => {
    render(<ImageForm />);

    const label = screen.getByLabelText(/Style/);
    expect(label).toBeInTheDocument();
  });

  test('renders substyle label after user chooses Elemental option', () => {
    render(<ImageForm />);

    const selectElement = screen.getByRole('combobox');
    userEvent.selectOptions(selectElement, '6');

    expect(screen.getByText('Substyle')).toBeInTheDocument();
  });

  test('renders another select after user chooses Elemental option', () => {
    render(<ImageForm />);

    const selectElement = screen.getByRole('combobox');
    userEvent.selectOptions(selectElement, '6');

    const selectElements = screen.getAllByRole('combobox');

    expect(selectElements.at(1)).toBeInTheDocument();
  });

  test('does not render an image', () => {
    render(<ImageForm />);

    const imageElement = screen.queryByAltText('celestial body');

    expect(imageElement).not.toBeInTheDocument();
  });

  test('renders an image after button click', () => {
    render(<ImageForm />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    const imageElement = screen.getByAltText('celestial body');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders a span after button click', () => {
    render(<ImageForm />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    const span = screen.getByText(
      `'Right click' and 'Save image as' to download`,
    );
    expect(span).toBeInTheDocument();
  });
});

describe('ImageForm with pathname: /stars', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/stars',
      },
      writable: true,
    });
  });

  test('does not render disable satellites label', () => {
    render(<ImageForm />);

    const label = screen.queryByLabelText('Disable Satellites');
    expect(label).not.toBeInTheDocument();
  });
});
