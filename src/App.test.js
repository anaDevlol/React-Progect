 jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));
 import { render, screen } from "@testing-library/react";
// import BookingForm from "./pages/BookingForm";

// test("Renders BookingForm heading", () => {
//   render(
//     <BookingForm
//       availableTimes={["17:00", "18:00"]}
//       dispatch={() => {}}
//     />
//   );

//   const headingElement =
//   screen.getByText("Choose date");

//   expect(headingElement).toBeInTheDocument();
// });
 

// window.fetchAPI = jest.fn(() => [
//   "17:00",
//   "18:00",
//   "19:00",
//   "20:00",
//   "21:00",
//   "22:00"
// ]);
// import { initializeTimes, updateTimes } from "./pages/BookingPage";

// test("initializeTimes returns available times", () => {
//   expect(initializeTimes().length).toBeGreaterThan(0);
// });

// test("updateTimes returns available times", () => {
//   expect(
//     updateTimes([], "2026-06-22").length
//   ).toBeGreaterThan(0);
// });
