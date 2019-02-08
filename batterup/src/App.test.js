import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('APP renders and functions', ()=>{
  it('renders the app', ()=>{
   render(<App />); 
  }),
  it('fires strike function', ()=>{
    const component = render(<App/>);
    
   const button = component.getByText('strike');
   const strikes = component.getByTestId('strikes');

   fireEvent.click(button);
   expect(strikes).toHaveTextContent(1);
  }),
  it('fires balls all over the place', ()=>{
    const component = render(<App />);

    const button = component.getByText('ball');
    const balls = component.getByTestId('balls');

    fireEvent.click(button);
    expect(balls).toHaveTextContent(1);
  })

})
