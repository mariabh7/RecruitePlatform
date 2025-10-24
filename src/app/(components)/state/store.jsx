import { configureStore } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "Maria Bouhrem", email: "maria@example.com" },
  { id: 2, name: "Ferial", email: "ferial@example.com" },
  { id: 3, name: "Adam", email: "adam@example.com" },
  { id: 4, name: "Lina", email: "lina@example.com" },
  { id: 5, name: "Nabil", email: "nabil@example.com" },
  { id: 6, name: "Rania", email: "rania@example.com" },
  { id: 7, name: "Lina", email: "lina@example.com" },
  { id: 8, name: "Nabil", email: "nabil@example.com" },
  { id: 9, name: "Rania", email: "rania@example.com" },
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
