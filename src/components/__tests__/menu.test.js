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
import { RESTAURANT_DATA, MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => body.getByTestId("menu"));
  const menu = body.getByTestId("menu");
  console.log("innerHTML", menu.innerHTML);

  const addBtn = body.getAllByTestId("add-btn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 1 items");

  fireEvent.click(addBtn[0]);
  expect(cart.innerHTML).toBe("Cart - 2 items");
});
