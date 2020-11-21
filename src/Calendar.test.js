import React from "react";
import { render, screen } from '@testing-library/react'
import Calendar from "./Calendar";

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

const TIMESLOTS = [
  ["14:10", "14:40"],
  ["14:50", "15:20"],
  ["15:30", "16:00"],
  ["16:10", "16:40"],
  ["16:50", "17:20"]
];

describe('calendar', () => {
  it('renders without chrashing', () => {
    const wrapper = render(<Calendar schedule={SCHEDULE} timeslots={TIMESLOTS} />)
  });

  it('displays all lessons', () => {
    const { queryAllByText } = render(<Calendar schedule={SCHEDULE} timeslots={TIMESLOTS} />)
    expect(queryAllByText(/Lesson/i)).toHaveLength(10)
  });

  it('displays all timeslots', () => {
    const { getByText } = render(<Calendar schedule={SCHEDULE} timeslots={TIMESLOTS} />)
    TIMESLOTS.forEach((item) => {
      expect(getByText(item[0] + " - " + item[1])).toBeTruthy()
    })
  });
  
  
  it('displays all days', () => {
    const { getByText } = render(<Calendar schedule={SCHEDULE} timeslots={TIMESLOTS} />)
    expect(getByText('Monday')).toBeTruthy()
    expect(getByText('Tuesday')).toBeTruthy()
  });
})



