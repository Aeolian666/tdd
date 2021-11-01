import React from 'react';
import App from './App';
import { mount } from './tools/testSetup';

describe('App container', () => {
  it('should render without any problem', () => {
    const wrapper = mount(<App name="Cohort Fantastic" />);
    expect(wrapper.find('Provider').length).toBe(1);
  });
});
