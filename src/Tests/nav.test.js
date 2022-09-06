/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navigation/nav';

test('is nav rendering', () =>{
    render(<Navbar/>);
    const navElement = screen.getByTestId('nav-1');
    expect(navElement).toBeInTheDocument();
});