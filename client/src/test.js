import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './containers/App';
import Adapter from 'enzyme-adapter-react-16'
var chai = require('chai');

configure({ adapter: new Adapter() });
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = mount(<App />); 
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});
