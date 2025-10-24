import { configureStore } from "@reduxjs/toolkit";
const initialState = [
  {
    Name: "maria",
    lastName: "b",
    email: "bh@gmail.com",
    number: 982938,
    job: "swe",
    country: "algeria",
  },
  {
    Name: "sarah",
    lastName: "b",
    email: "sh@gmail.com",
    number: 982938,
    job: "swe",
    country: "algeria",
  },
];
function Statereducer(state = initialState, action) {
  switch (action.type) {
    case "add an applicant":
      return [...state, action.user];
      break;
    case "seeOneApplicant":
      return state.filter((applicant) => applicant.id === action.user.id);
      break;
    default:
      return state;
      break;
  }
}
const store = configureStore({ reducer: Statereducer });
export default store;
