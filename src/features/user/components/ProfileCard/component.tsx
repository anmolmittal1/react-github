import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
  BoxArrowUpRight,
  Buildings,
  EnvelopeAtFill,
  GeoAltFill,
  PersonFill,
  PeopleFill,
} from "react-bootstrap-icons";

import { ProfileCardProps } from "./interface";

export const ProfileCard = ({
  avatar_url,
  bio,
  company,
  email,
  followers,
  following,
  html_url,
  location,
  login,
  name,
}: ProfileCardProps) => {
  const listItems: Array<[React.ElementType, any]> = [
    [PersonFill, name],
    [Buildings, company],
    [GeoAltFill, location],
    [EnvelopeAtFill, email],
    [
      PeopleFill,
      <p className="m-0">
        <strong>{followers}</strong> followers | <strong>{following}</strong>{" "}
        following
      </p>,
    ],
  ];

  return (
    <Card className="shadow-sm">
      <Card.Img
        variant="top"
        src={avatar_url}
        style={{ maxHeight: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="mb-0 d-flex align-items-center justify-content-between">
          {login}
          <a href={html_url} target="_blank">
            <BoxArrowUpRight />
          </a>
        </Card.Title>
        {bio ? <Card.Text className="mt-2">{bio}</Card.Text> : undefined}
      </Card.Body>
      <ListGroup className="list-group-flush">
        {listItems
          .filter(([IconElement, value]) => Boolean(value))
          .map(([IconElement, value], index) => (
            <ListGroup.Item
              key={`gh-${index}`}
              className="d-flex align-items-center"
            >
              <IconElement className="me-2" />
              {value}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
};
