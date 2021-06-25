import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchBox from './SearchBox';
import {Props} from './SearchBox';

function renderSearchForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        onChange() {
        return;
      },
    };
    return render(<SearchBox {...defaultProps} {...props} />);
  }

it("sets movies based on input, snapshot test", () => {
    const { getByTestId } = renderSearchForm();
    const input = getByTestId('search-box');
    expect(input).toMatchSnapshot();
});

it("test handler function", async () => {
    jest.useRealTimers()
    const onChange = jest.fn();
    const { getByTestId } = renderSearchForm({onChange});
    const input = getByTestId('search-box-input');
   

    const event = {target: {value: "test"}};
    fireEvent.change(input, event);

    setTimeout(() => {
      expect(onChange).toHaveBeenCalledWith("test");
    }, 200)
});