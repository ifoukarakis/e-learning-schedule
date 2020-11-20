import React from "react";
import { render, screen } from '@testing-library/react'
import Calendar from "./Calendar";
import TableRow from '@material-ui/core/TableRow';

const SCHEDULE = {
  "days": [
    {
      "name": "Monday",
      "lessons": [
            { "name": "Lesson 1", "teacher": "a" },
            { "name": "Lesson 2", "teacher": "b" },
            { "name": "Lesson 3", "teacher": "c" },
            { "name": "Lesson 4", "teacher": "d" },
            { "name": "Lesson 5", "teacher": "e" }
        ]
    },
    {
      "name": "Tuesday",
      "lessons": [
          { "name": "Lesson 6", "teacher": "f" },
          { "name": "Lesson 7", "teacher": "g" },
          { "name": "Lesson 8", "teacher": "h" },
          { "name": "Lesson 9", "teacher": "i" },
          { "name": "Lesson 10", "teacher": "j" }
      ]
    }
  ]
};

test('renders calendar without chrashing', () => {
  const wrapper = render(<Calendar schedule={SCHEDULE} />)
});


test('displays all items including headers', () => {
  const {findAllByText } = render(<Calendar schedule={SCHEDULE} />);
  const lessonElement = screen.getByText(/Lesson 6/i);
  expect(screen.queryAllByText(/Lesson/i)).toHaveLength(10)
});
