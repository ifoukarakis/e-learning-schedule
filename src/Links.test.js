import React from "react";
import { render } from '@testing-library/react'
import Links from "./Links";

describe('links', () => {
  it('render when provided', () => {
    const links = [
      { "text": "link 1", "href": "https://example1.net" },
      { "text": "link 2", "href": "https://example2.net", "image": "https://example.com/image.svg" },
      { "text": "link 3", "href": "https://example3.net", "image": "https://example.com/image2.svg" },
    ]
    const { getByText, getAllByRole } = render(<Links links={links} />)
    expect(getByText('link 1').closest('a')).toHaveAttribute('href', 'https://example1.net')
    expect(getByText('link 2').closest('a')).toHaveAttribute('href', 'https://example2.net')
    expect(getByText('link 3').closest('a')).toHaveAttribute('href', 'https://example3.net')

    expect(getAllByRole('link')).toHaveLength(3)
  });

  it('skips empty text', ()=> {
    const links = [
      { "text": "link 1", "href": "https://example1.net" },
      { "text": "    ", "href": "https://example2.net", "image": "https://example.com/image.svg" },
    ]
    const {getByText, getAllByRole } = render(<Links links={links} />)
    expect(getByText('link 1').closest('a')).toHaveAttribute('href', 'https://example1.net')
    expect(getAllByRole('link')).toHaveLength(1)
  });

  
  it('skips empty href', ()=> {
    const links = [
      { "text": "link 1", "href": "https://example1.net" },
      { "text": "link 2", "href": "", "image": "https://example.com/image.svg" },
    ]
    const {getByText, getAllByRole } = render(<Links links={links} />)
    expect(getByText('link 1').closest('a')).toHaveAttribute('href', 'https://example1.net')
    expect(getAllByRole('link')).toHaveLength(1)
  });


  it('renders without links', () => {
    const {queryAllByRole} = render(<Links />)
    expect(queryAllByRole('link')).toHaveLength(0)
  });

  
})



