import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const data = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: { height: 2432, width: 1920, type: "jpg" },
};

test("The art piece image is displayed", () => {
  render(<Spotlight piece={data} />);
  const artImage = screen.getByRole("img", {
    name: "Orange Red and Green Abstract Painting",
  });
  expect(artImage).toBeInTheDocument();
});

test("The art piece artist is displayed", () => {
  render(<Spotlight piece={data} />);
  const artArtist = screen.getByText("Steve Johnson");
  expect(artArtist).toBeInTheDocument();
});
