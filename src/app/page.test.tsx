import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import * as Sentry from "@sentry/nextjs";
import Home from "./page";

// Sentry 모듈 모킹
jest.mock("@sentry/nextjs", () => ({
  startSpan: jest.fn(),
}));

describe("Home Component", () => {
  it("renders the Home component correctly", async () => {
    render(<Home />);
    // 버튼이 렌더링되는지 확인
    const button = screen.getByRole("button", { name: /Throw error!/i });
    expect(button).toBeInTheDocument();
  });

  it("calls Sentry.startSpan when the button is clicked", async () => {
    render(<Home />);

    // 버튼 클릭
    const button = screen.getByRole("button", { name: /Throw error!/i });
    fireEvent.click(button);

    // Sentry.startSpan이 호출되었는지 확인
    expect(Sentry.startSpan).toHaveBeenCalledWith(
      {
        name: "Example Frontend Span",
        op: "test",
      },
      expect.any(Function)
    );
  });
});
