import { render, screen } from "@testing-library/react";
import About from "./about";
import TestRenderer from 'react-test-renderer';

describe("About Page", () => {
  it("renders correctly", () => {
    const component = TestRenderer.create(<About />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display the about page header", () => {
    render(<About />);
    const pageTitle = screen.getByText("About Us").textContent;
    expect(pageTitle).toBe("About Us");
  });


  it("should display page text", () => {
    // Render the component
    render(<About />);
    const element = screen.getByTestId("custom-element").textContent;
    expect(element).toBe(
      "Fat Pig BBQ was established in 2018 by Bao Truong. Bao has always enjoyed cooking barbeque for his family & friends at his home. Bao later realized that he wanted share his passion to provide great barbeque to everyone in the Greater Seattle Area. Shortly after, Bao left his Civil Engineering job and opened the doors to Fat Pig BBQ in Edmonds."
    );
  });
});
