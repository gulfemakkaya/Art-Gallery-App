import Image from "next/image";

export default function ArtPiecePreview({
  title,
  artist,
  imageSource,
  width,
  height,
}) {
  return (
    <li>
      <p>{title}</p>
      <p>{artist}</p>
      <Image
        src={imageSource}
        width={width / 5}
        height={height / 5}
        alt={title}
      />
    </li>
  );
}
