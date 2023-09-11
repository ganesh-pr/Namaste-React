import {
  getByTestId,
  render,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");

  //expect(shimmer).toBeInTheDocument();

  //Other ways
  //expect(shimmer.innerHTML).toBeInTheDocument;
  //expect(shimmer.children).toBeInTheDocument;
  expect(shimmer.children.length).toBe(100);
});

test("Restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("search-btn"));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);
});

test("Search for the string Desserts on home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("search-btn"));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "Kwality",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
});
