import { FlyOutMenu } from "./FlyOutMenu";

const sources = [
  "https://www.tinydog.ru/wp-content/uploads/2016/05/Korgi.jpg",
  "https://i7.imageban.ru/out/2023/03/07/fadb585c2b7142f41af25277925c6c03.jpg",
  "https://gorodprizrak.com/wp-content/uploads/2023/06/5b4acc3f307318eb7d7752ed3fb4197a.jpg"
];


export interface ImageProps {
  source: string;
}

export function Image({ source }: ImageProps) {
  return (
    <div className="image-item">
      <img src={source} alt="Squirrel" />
      <FlyOutMenu />
    </div>
  );
}

export function ImageList() {
  return sources.map((source, i) => <Image source={source} key={i} />);
}
