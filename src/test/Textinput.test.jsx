import React from "react"
import Textinput from "../components/TextInput"
import { render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

describe('BodyCard Tests.', () => {
    const textForTest = "Testing this component!"
    let inputValue = ""

    const inputChange = (event) => {
        inputValue = event.target.value
    }

    const { getByTestId } = render(
        <Textinput 
            change={inputChange}
        />
    );

    const TextinputElement = getByTestId("custom-element")

    test('Verify that the TextInput component work correctly.', async () => {
        await userEvent.type(TextinputElement, textForTest);
        expect(inputValue).toEqual(textForTest);
    })
});