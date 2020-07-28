let stillLifes = {
  name: "Still Lifes",
  items: [
    {
      name: "Block",
      grid: [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
    },
    {
      name: "Beehive",
      grid: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
    },
  ],
};
let oscillators = {
  name: "Oscillators",
  items: [
    {
      name: "Blinker",
      grid: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    },
  ],
};
export default { stillLifes, oscillators };
