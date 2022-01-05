import React from "react";
import { mount } from 'enzyme';
import App from "./App";
import {findByTestAttr, storeFactory} from "../test/testUtils";
import {Provider} from "react-redux";

const setup = (state = {}) => {
    //apply state
    const store = storeFactory(state);
    const wrapper = mount(<Provider store={store}><App /></Provider>);

    //add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target: {value: 'train'}});

    //simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventDefault(){}})

    return wrapper;
}

describe('no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
           secretWord: 'party',
           success: false,
           guessedWords: [],
        });
    });
    test('creates GuessedWords table with one row', () => {
       const guessedWordRows =  findByTestAttr(wrapper, 'guessed-word');
       expect(guessedWordRows).toHaveLength(1);
    });
});

describe('some words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{guessedWord: 'agile', letterMatchCount: 1}],
        });
    });
    test('add rows to GuessedWords table', () => {
        const guessedWordRows =  findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(2);
    });
});

describe('guess the secret word', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{guessedWord: 'agile', letterMatchCount: 1}],
        });
        //add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        inputBox.simulate('change', {target: {value: 'party'}});

        //simulate click on submit button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', {preventDefault(){}});
    });
    test('creates GuessedWords table with three row', () => {
        const guessedWordRows =  findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(3);
    });
    test('Input box should not display', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBeFalsy();
    });
    test('Submit button should not display', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBeFalsy();
    });
    test('display congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'congrats-component');
        expect(congrats.text().length).toBeGreaterThan(0);
    });
});

