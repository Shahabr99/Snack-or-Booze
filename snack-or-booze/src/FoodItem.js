import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  console.log(items)
  const { id } = useParams();

  let result = items.find(item => item.id === id);
  console.log(result)
  if (!result) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {result.name}
          </CardTitle>
          <CardText className="font-italic">{result.description}</CardText>
          <p>
            <b>Recipe:</b> {result.recipe}
          </p>
          <p>
            <b>Serve:</b> {result.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
