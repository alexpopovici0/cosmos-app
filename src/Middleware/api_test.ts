import enceladus from "./enceladus.png";
import moon from "./moon.jpg";
import mars from "./mars.jpg";
import saturn from "./saturn.jpg";

export const api = {
  products: [
    {
      id: 0,
      name: "Moon",
      description: ["moon description1"],
      system: "The Saturn System",
      distance: "9.5",
      aupopulation: "39414120",
      price: "999.999",
      image: moon,
      type: "one way ticket",
    },
    {
      id: 1,
      name: "Enceladus",
      description: [
        "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
        "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
      ],
      system: "The Saturn System",
      distance: "9.5",
      aupopulation: "39421420",
      price: "999.999.999",
      image: enceladus,
      type: "one way ticket",
    },
    {
      id: 2,
      name: "Mars",
      description: ["mars description1", "mars description1"],
      system: "The Saturn System",
      distance: "9.5",
      aupopulation: "3924240",
      price: "999",
      image: mars,
      type: "two way ticket",
    },
    {
      id: 3,
      name: "Saturn",
      description: [
        "saturn description1",
        "saturn description2",
        "saturn description3",
      ],
      system: "The Saturn System",
      distance: "9.5",
      aupopulation: "3920",
      price: "999.990",
      image: saturn,
      type: "trillion way ticket",
    },
  ],
};

export const getImage = (id: number) => {
  const image = api.products.filter((element) => element.id === id);
  return image[0].image;
};
