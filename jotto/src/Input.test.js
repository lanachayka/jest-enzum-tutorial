import Input from "./Input";
import {shallow} from "enzyme";
import {checkProps, findByTestAttr} from "../test/testUtils";
import React from "react";

//mock entire module for destructuring useState on import
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }));

const setup = (success=false, secretWord ='party') => {
    return shallow(<Input success={success} secretWord={secretWord}/>);
}

describe('render', () => {
    describe('success is true', () => {
        let wrapper;
        beforeEach(()=> {
            wrapper = setup(true);
        });
        test('renders without error', () => {
            const component = findByTestAttr(wrapper, 'input-component');
            expect(component.length).toBe(1);
        });
        test('input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBeFalsy();
        });
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBeFalsy();
        });
    });
    describe('success is false', () => {
        let wrapper;
        beforeEach(()=> {
            wrapper = setup(false);
        });
        test('renders without error', () => {
            const component = findByTestAttr(wrapper, 'input-component');
            expect(component.length).toBe(1);
        });
        test('input box show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBeTruthy();
        });
        test('submit button show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBeTruthy();
        });

    });
});

test('does not throw warning with expected props', () => {
    checkProps(Input, {secretWord: 'party'});
});

describe('state controlled input field', () => {
    const mockSetCurrentGuess = jest.fn();
    let originalUseState;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(()=>["", mockSetCurrentGuess]);
    });
    afterEach(()=> {
       React.useState = originalUseState;
    });
    test('state updates with value of input box upon change', () => {
       const inputBox = findByTestAttr(setup(), 'input-box');
       const mockEvent = { target: {value: 'train'}};
       inputBox.simulate('change', mockEvent);
       expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
   });
   test('field is cleared upon submit button click', () => {
       const submitButton = findByTestAttr(setup(), 'submit-button');
       submitButton.simulate('click', {preventDefault() {}});
       expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
   });
});