const ctl = require("..");

test("should remove new lines and whitespaces", () => {
  const classname = `
		bg-black
		text-small
		mt-2
	`;
  expect(ctl(classname)).toBe("bg-black text-small mt-2");
});

test("should handle template literals", () => {
  const someTruthyState = true;
  const someFalsyState = false;
  const classname = `
		bg-black
		text-small
		mt-2
		${someTruthyState && `mb-3`}
		${someFalsyState && `ml-3`}
	`;
  expect(ctl(classname)).toBe("bg-black text-small mt-2 mb-3");
  expect(ctl(classname)).not.toBe("bg-black text-small mt-2 mb-3 ml-3");
});

test('should not remove `undefined`, `false`, or `true` if it is part of a classname', ()=> {
	const className = `
		bg-black
		color-true-blue
		arbitrary-false
		arbitrary-undefined
	`
	expect(ctl(className)).toBe("bg-black color-true-blue arbitrary-false arbitrary-undefined")
})
