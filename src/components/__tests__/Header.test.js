import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toContain("http://localhost/dummy.png");
});

test("online status should be green on rendering header", () => {
  // Load Header component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart should render zero items", () => {
  // Load Header component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // Check if logo is loaded
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 0 items");
});
