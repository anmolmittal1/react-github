import { ListGroupItem, Image } from "react-bootstrap";
import { SearchResultProps } from "./interface";

export const SearchResult = ({
  avatarUrl,
  username,
  ...rest
}: SearchResultProps) => (
  <ListGroupItem {...rest}>
    <Image
      fluid
      roundedCircle
      className="me-3"
      style={{ maxHeight: "30px" }}
      src={avatarUrl}
    />
    {username}
  </ListGroupItem>
);
