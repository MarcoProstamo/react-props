import Button from "./Button";
import Badge from "./Badge";

const defaultImgPath = "https://placehold.co/600x400";

export default function Card({ title, image, content, tags }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image || defaultImgPath} alt="place-holder" />
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          <p>{content}</p>
          <div>
            {tags.map((tag, index) => (
              <Badge key={index} badgeLabel={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
