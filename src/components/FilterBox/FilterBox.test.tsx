import { fireEvent, render } from "@testing-library/react";
import FilterBox from './FilterBox';
import {Props} from './FilterBox';

function renderFilterForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        onChange() {
        return;
      },
    };
    return render(<FilterBox {...defaultProps} {...props} />);
  }

it("filter movies based on input, snapshot test", () => {
    const { getByTestId } = renderFilterForm();
    const input = getByTestId('filter-box');
    expect(input).toMatchSnapshot();
});

it("test handler function", async () => {
    const onChange = jest.fn();
    const { getByTestId } = renderFilterForm({onChange})
    const input = getByTestId('filter-box-select');
   
    const event = {target: {value: "test"}};
    fireEvent.change(input, event);

    expect(onChange).toHaveBeenCalled();
});