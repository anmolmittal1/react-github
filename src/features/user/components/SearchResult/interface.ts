import { ListGroupItemProps } from "react-bootstrap";

export interface SearchResultProps extends ListGroupItemProps {
  avatarUrl: string;
  username: string;
}
