// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// update this
// describe("Login", () => {
// 	test ("validate function should pass on correct input",()=>{
// 		const name='name@test.com'
// 		expect(validateInput(name)).toBe(true);
// 	});
// });
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
