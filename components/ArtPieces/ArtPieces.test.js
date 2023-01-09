import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

const data = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
];

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces pieces={data} />);
  const artList = screen.getByRole("list", { name: "" });
  expect(artList).toBeInTheDocument();
});

test("Each art piece's image is displayed", () => {
  render(<ArtPieces pieces={data} />);
  const artImage = screen.getByRole("img", {
    name: "Orange Red and Green Abstract Painting",
  });
  expect(artImage).toBeInTheDocument();
});

test(" Each art piece's title is displayed ", () => {
  render(<ArtPieces pieces={data} />);
  const artTitle = screen.getByText("Orange Red and Green Abstract Painting");
  expect(artTitle).toBeInTheDocument();
});

test(" Each art piece's artist is displayed ", () => {
  render(<ArtPieces pieces={data} />);
  const artArtist = screen.getByText("Steve Johnson");
  expect(artArtist).toBeInTheDocument();
});
