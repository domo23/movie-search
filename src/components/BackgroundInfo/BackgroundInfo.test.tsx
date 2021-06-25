import { fireEvent, render } from "@testing-library/react";
import BackgroundInfo from "./BackgroundInfo";
import { Props } from "./BackgroundInfo";

function renderBackgroundInfo(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    msg: "",
  };
  return render(<BackgroundInfo {...defaultProps} {...props} />);
}

it("render background msg, snapshot test", () => {
  const { getByTestId } = renderBackgroundInfo();
  const element = getByTestId("background-info");
  expect(element).toMatchSnapshot();
});

it("test background msg", async () => {
  const msg = 'test string';
  const { getByTestId } = renderBackgroundInfo({ msg });
  const element = getByTestId("background-info");
  
  expect(element).toHaveTextContent(msg);
});
