import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import TaskForm from "../TaskForm";
const mockStore = configureMockStore();
const store = mockStore({});

test("Task title input should be rendered", () => {
  render(<TaskForm store={store} />);
  const titleInputEl = screen.getByPlaceholderText(/Title of the task/i);
  expect(titleInputEl).toBeInTheDocument();
});

test("Task due date input should be rendered", () => {
  render(<TaskForm store={store} />);
  const dueDateInputEl = screen.getByPlaceholderText(/Due date for the task/i);
  expect(dueDateInputEl).toBeInTheDocument();
});

test("Task button input should be rendered", () => {
  render(<TaskForm store={store} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Title input should be empty", () => {
  render(<TaskForm store={store} />);
  const titleInputEl =
    screen.getByPlaceholderText<HTMLInputElement>(/Title of the task/i);
  expect(titleInputEl.value).toBe("");
});

test("Due date input should be empty", () => {
  render(<TaskForm store={store} />);
  const dueDateInputEl = screen.getByPlaceholderText<HTMLInputElement>(
    /Due date for the task/i
  );
  expect(dueDateInputEl.value).toBe("");
});

test("Task title input should change", () => {
  render(<TaskForm store={store} />);
  const titleInputEl =
    screen.getByPlaceholderText<HTMLInputElement>(/Title of the task/i);
  const testValue = "test";
  fireEvent.change(titleInputEl, { target: { value: testValue } });
  expect(titleInputEl.value).toBe(testValue);
});

test("Task due date input should change", () => {
  render(<TaskForm store={store} />);
  const dueDateInputEl = screen.getByPlaceholderText<HTMLInputElement>(
    /Due date for the task/i
  );
  const testValue = "2022-10-05";
  fireEvent.change(dueDateInputEl, { target: { value: testValue } });
  expect(dueDateInputEl.value).toBe(testValue);
});

test("error message should not be visible", () => {
  render(<TaskForm store={store} />);
  const errorElements = screen.getAllByTestId("error");

  expect(errorElements[0]).not.toBeVisible();
  expect(errorElements[1]).not.toBeVisible();
});

test("Submit button should be enabled", () => {
  render(<TaskForm store={store} />);
  const button = screen.getByRole("button");
  const titleInputEl =
    screen.getByPlaceholderText<HTMLInputElement>(/Title of the task/i);
  const dueDateInputEl = screen.getByPlaceholderText<HTMLInputElement>(
    /Due date for the task/i
  );
  const testTitleValue = "Testing";
  const dueDateTitleValue = "2022-10-05";

  fireEvent.change(titleInputEl, { target: { value: testTitleValue } });
  fireEvent.change(dueDateInputEl, { target: { value: dueDateTitleValue } });

  expect(button).not.toBeDisabled();
});
