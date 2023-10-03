import { stringInclude } from "../helpers/stringInclude";

test("test stringIncludes", () => {
  let answers;
  answers = stringInclude("Me im always late", "Im late");
  expect(answers).toEqual(false);
});

test("test with case sensitive", () => {
  let answers;
  answers = stringInclude("You say my name is romeo ?", "Is Romeo");
  expect(answers).toEqual(true);
});

test("test with special characters", () => {
  let answers;
  answers = stringInclude("You say my name is Roméo ?", "Is Roméo");
  expect(answers).toEqual(true);
});
