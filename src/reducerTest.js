const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
expect(counter(0, { type: "INCREMENT" })).toEqual(1);
console.log("tests passed");
