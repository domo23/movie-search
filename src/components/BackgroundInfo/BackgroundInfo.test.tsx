import { render } from "@testing-library/react";
import BackgroundInfo from "./BackgroundInfo";
import '@testing-library/jest-dom/extend-expect';

it('background info component snapshot', () => {
    const { getByTestId } = render(<BackgroundInfo msg=''></BackgroundInfo>);
    const module = getByTestId('background-info');

    expect(module).toMatchSnapshot();
})

it('should contain msg text', () => {
    const msg = "test message";
    const { getByTestId } = render(<BackgroundInfo msg={msg}></BackgroundInfo>);
    const module = getByTestId('background-info');

    expect(module).toHaveTextContent(msg);
})
