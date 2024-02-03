import { Container } from "@material-ui/core";
import Avatar from "./Avatar";
import ChickenCard from "./ChickenCard";

export default function ChickenDetailCard(props) {
  return (
    <Container class="bg-white border rounded-lg overflow-hidden shadow-md m-4 p-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">
        Chicken CV: {props.name}
      </h2>

      <div class="flex flex-col sm:flex-row sm:gap-4">
        <div>
          <Avatar image={props.image} />
        </div>
        <Container>
          <ChickenCard {...props} />
        </Container>
      </div>
    </Container>
  );
}
