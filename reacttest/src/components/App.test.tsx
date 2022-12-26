import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("Ensure the App be render", () => {
    render(<App />);
  });

  test("Make sure the App component has heading 1", () => {
    render(<App />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toEqual(screen.getByRole("heading", { level: 1 }));
  });

  test("Make sure the heading title is equal to React Teste", () => {
    render(<App />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.innerHTML).toBe(" React Teste ");
  });
});
