import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";


test('renders calendar without chrashing', () => {
  shallow(<App />);
});