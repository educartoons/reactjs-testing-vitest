import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

// for extending the methods from expect
import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

// end

import Product from "./Product";

const product = {
  title: "Nike Air Force 1 '07",
  price: 115,
  image:
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-jBrhbr.png",
  colors: 4,
};

describe("<Product />", () => {
  test("should render", () => {
    render(<Product product={product} />);
  });

  test("should have an image", () => {
    const image = screen.queryByRole("img");
  });

  test("should have a button", () => {
    const button = screen.queryByRole("button");
  });

  test("should have a title", () => {
    const title = screen.queryByText(product.title);
    expect(title).not.toBe(null);
  });

  test("should have a price", () => {
    const price = screen.queryByText(product.price);
    expect(price).not.toBe(null);
  });

  test("should have an outlined heart", () => {
    const heartOutLine = screen.queryByTestId("heart-outline");
    const heartSolid = screen.queryByTestId("heart-solid");
    expect(heartOutLine).not.toBe(null);
    expect(heartSolid).toBe(null);
  });

  test("should have a solid heart if the user clicks on the heart button", async () => {
    const button = screen.getByRole("button");

    await userEvent.click(button);
    const heartOutLine = screen.queryByTestId("heart-outline");
    const heartSolid = screen.queryByTestId("heart-solid");

    expect(heartOutLine).toBe(null);
    expect(heartSolid).not.toBe(null);
  });

  test("should have an input", async () => {
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Hola como estas");
  });
});
