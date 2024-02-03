import React from "react";
import { Container } from "@material-ui/core";

export default function ChickenCard(props) {
  return (
    <Container>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Breed:
        </label>
        <p class="text-lg font-semibold text-gray-800">{props.breed}</p>
      </div>
      <div class="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Color:
        </label>
        <p className="text-lg font-semibold text-gray-800">{props.color}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Age:</label>
        <p className="text-lg font-semibold text-gray-800">
          1 {`${props.age > 1 ? "years" : "year"}`}
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Gender:
        </label>
        <p class="text-lg font-semibold text-gray-800">{props.gender}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Hatch Date:
        </label>
        <p class="text-lg font-semibold text-gray-800">{props.hatchDate}</p>
      </div>
      <div class="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Egg Color:
        </label>
        <p className="text-lg font-semibold text-gray-800">{props.eggColor}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Eggs Laid:
        </label>
        <p className="text-lg font-semibold text-gray-800">{props.eggsLaid}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <p className="text-gray-700">{props.description}</p>
      </div>
    </Container>
  );
}
