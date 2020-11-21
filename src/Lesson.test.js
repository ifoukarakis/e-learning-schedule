import React from "react";
import { render, screen } from '@testing-library/react'
import Lesson from "./Lesson";

function renderInTable(node) {
  return render(<table><tbody><tr>{node}</tr></tbody></table>);
}

describe('lesson', () => {
  it('renders with highlighting', () => {
    const { getByText } = renderInTable(<Lesson lesson={{name: 'Algorithms', teacher: 'dknuth', highlighted: true}} />)
    expect(getByText('Algorithms').closest('td')).toHaveClass('makeStyles-highlighted-1') 
  });

  it('renders without highlighting', () => {
    const { getByText } = renderInTable(<Lesson lesson={{name: 'Algorithms', teacher: 'dknuth'}} />)
    expect(getByText('Algorithms').closest('td')).not.toHaveClass('makeStyles-highlighted-1') 
  });

  it('creates link properly', () => {
    const { getByText }= renderInTable(<Lesson lesson={{name: 'Algorithms', teacher: 'dknuth'}} />)
    expect(getByText('Algorithms').closest('a')).toHaveAttribute('href', 'https://minedu-primary.webex.com/meet/dknuth')
  });
  
})



