import { Place } from "src/app/models/place";

export const environment = {
  production: true,
  places: new Map<string, Place>([
    ["funeralHome", {
      name: "funeralHomeName",
      address: "123 Fake St",
      city: "Fake Town",
      state: "VA",
      zip: "11111"
    }],
    ["cemetary", {
      name: "cemetary name",
      address: "456 Fake St",
      city: "Artificial Town",
      state: "IN",
      zip: "22222"
    }],
    ["afterParty", {
      name: "party place",
      address: "987 Fake St",
      city: "Some Other Town",
      state: "IL",
      zip: "33333"
    }]
  ]),
  events: [
    {
      name: "Visitation",
      date: "11/11/1111",
      time: "2-4PM",
      placeKey: "funeralHome"
    },
    {
      name: "Service",
      date: "2/2/2222",
      time: "11AM-12PM",
      placeKey: "funeralHome"
    },
    {
      name: "Burial",
      date: "4/4/4444",
      time: "12-1PM",
      placeKey: "cemetary"
    },
    {
      name: "Meal, etc.",
      date: "3/3/3333",
      time: "6-8PM",
      placeKey: "afterParty"
    }
  ]
};
