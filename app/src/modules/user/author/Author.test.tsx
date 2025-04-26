import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import Author from './Author';

describe('Author Component', () => {
  it('view Author', () => {
    render(<Author name="Author" />);
    expect(screen.getByText('Hello, Author')).toBeInTheDocument();
  });
});