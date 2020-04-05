import React from "react"
import NormalButton from "../components/normalButton"
import { render } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

describe('BodyCard Tests.', () => {
    let isClicked = false

    const handleClick = () => {
        isClicked = true
    }

    const { getByTestId } = render(
        <NormalButton
            click={handleClick}
        >
            <h1 data-testid="h1-for-test">This is a test!</h1>
        </NormalButton>
    );

    const h1Item = getByTestId("h1-for-test")
    const buttonItem = getByTestId("button-for-test")

    test('Test for comprove that the Button execute the click handler.', () => {
        userEvent.click(buttonItem);
        expect(isClicked).toEqual(true);
    })
    test('Test for comprove that the normalButton component show a children.', () => {
        expect(h1Item).toBeVisible();
    })    
});