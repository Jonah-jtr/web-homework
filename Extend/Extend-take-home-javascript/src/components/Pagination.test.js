import React from "react";
import Pagination from "./Pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("expect page to change when page number is clicked", () => {
  const paginate = jest.fn();
  render(
    <Pagination paginate={paginate} pageNumbers={[1, 2, 3]} currPage={[3]} />
  );
  const firstPageButton = screen.getByText(2);
  userEvent.click(firstPageButton);
  expect(paginate).toHaveBeenCalled();
});
