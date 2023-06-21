import { Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { Pet } from "./types.ts";
import { v1 } from "https://deno.land/std@0.192.0/uuid/mod.ts";

const router = new Router();

const pets: Pet[] = [
  {
    id: v1.generate(),
    name: "spunky",
    gender: "male",
    species: "Bengal",
    owner: "Tom",
    pictureUrl: "https://cdn2.thecatapi.com/images/8pCFG7gCV.jpg",
  },
  {
    id: v1.generate(),
    name: "cottony",
    gender: "female",
    species: "Bichon Frise",
    owner: "Ben",
    pictureUrl: "https://cdn2.thedogapi.com/images/HkuYlxqEQ_1280.jpg",
  },
  {
    id: v1.generate(),
    name: "spunky",
    gender: "male",
    species: "Russian Blue",
    owner: "Jin",
    pictureUrl: "https://cdn2.thecatapi.com/images/kmvetZsyr.jpg",
  },
];

router
  .get("/", (context) => {
    context.response.body = "Hello, It's Pet-Clinic";
  })
  .get("/pets", (context) => {
    context.response.body = pets;
  })
  .post("/pets", async (context) => {
    if (!context.request.hasBody) {
      context.response.status = 400;
      context.response.body = "Need Data";
    } else {
      const body = await context.request.body();
      const pet: Pet = await body.value;
      pet.id = v1.generate();
      pets.push(pet);
      context.response.status = 201;
      context.response.body = pet;
    }
  })
  .get("/pets/:owner", (context) => {
    const findPet: Pet[] | undefined = pets.filter(
      (t) => t.owner === context.params.owner,
    );
    if (findPet.length > 0) {
      context.response.body = findPet;
      context.response.status = 200;
    } else {
      context.response.body = "there is no pet";
      context.response.status = 404;
    }
  });

export default router;
