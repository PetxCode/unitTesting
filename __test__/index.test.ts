// Numbers, String, Boolean, Object and Array

// test("just a simple test", () => {
//   expect(true).toBe(true);
// });

// describe("testing for boolean", () => {
//   test("boo1", () => {
//     expect(true).toBe(true);
//     expect(true).not.toBe(false);
//     expect(true).not.toBeNaN();
//     expect(true).not.toBeUndefined();
//     expect(true).not.toBeUndefined();
//   });
// });

// describe("testing for number", () => {
//   test("number test", () => {
//     let val = (a: number, b: number): number => {
//       return a + b;
//     };
//     expect(val(1, 1)).toBe(2);
//     // expect(started(1, 1)).not.toBe(0);
//     // expect(started(1, 0)).not.toBeTruthy();
//     // expect(started(1, 0)).toBe(0);
//   });
// });

// describe("Items of strings", () => {
//   test("test if a Letter exists", () => {
//     let name = "Peter";

//     expect(name).toMatch(/p/i);
//   });
// });

// describe("Items of strings of Array", () => {
//   test("test if a name exists in an Array", () => {
//     let name = ["peter", "Joan", "Tobe", "Regina"];

//     name.push("Wisdom");

//     expect(name[0]).toMatch(/Peter/i);
//     expect(name.length).toBe(name.length);
//   });
// });

// describe("working with objects", () => {
//   test("test if a name exists in an Array", () => {
//     let name = ["peter", "Joan", "Tobe", "Regina"];

//     let obj: { name: string; score: number } = { name: "Peter", score: 49 };

//     expect(obj).toEqual({ name: "Peter", score: 49 });

//     expect(obj).toEqual({
//       name: expect.any(String),
//       score: expect.any(Number),
//     });
//   });
// });

// describe("working with objects of Array", () => {
//   test("test if a name exists in an Array", () => {
//     let name = ["peter", "Joan", "Tobe", "Regina"];

//     let obj: { name: string; score: number } = { name: "Peter", score: 49 };

//     let arrObj: Array<{ name: string; score: number; age?: number }> = [
//       { name: "Peter", score: 49 },
//       { name: "James", score: 80 },
//       { name: "Jemima", score: 94, age: 28 },
//     ];

//     expect(obj).toEqual({ name: "Peter", score: 49 });

//     expect(obj).toEqual(
//       expect.objectContaining({
//         name: expect.any(String),
//         score: expect.any(Number),
//       })
//     );

//     expect(obj).toEqual({
//       name: expect.any(String),
//       score: expect.any(Number),
//     });

//     expect(arrObj).toEqual(expect.arrayContaining([]));

//     expect(arrObj).toEqual(
//       expect.arrayContaining([
//         {
//           name: expect.any(String),
//           score: expect.any(Number),
//           age: expect.any(Number),
//         },
//       ])
//     );
//   });
// });

// starting here

import {
  createLogic,
  updateOneUserLogic,
  viewAllUserLogic,
  viewOneUserLogic,
} from "../index";

describe("checking our index logic", () => {
  test("check our create logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        name: Math.ceil(Math.random() * 1000).toString(),
        score: Math.ceil(Math.random() * 1000),
      };
    });

    let value = {
      id: Math.floor(Math.random() * 100),
      name: Math.ceil(Math.random() * 1000).toString(),
      score: Math.ceil(Math.random() * 1000),
    };

    let arrObj: Array<{ name: string; score: number; age?: number }> = [
      { name: "Peter", score: 49 },
      { name: "James", score: 80 },
      { name: "Jemima", score: 94, age: 28 },
    ];

    expect(createLogic(data, value)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        score: expect.any(Number),
      })
    );
  });

  test("check our view all user's logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        name: Math.ceil(Math.random() * 1000).toString(),
        score: Math.ceil(Math.random() * 1000),
      };
    });

    let value = {
      id: Math.floor(Math.random() * 100),
      name: Math.ceil(Math.random() * 1000).toString(),
      score: Math.ceil(Math.random() * 1000),
    };

    expect(viewAllUserLogic(data)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          score: expect.any(Number),
        },
      ])
    );
  });

  test("check our create logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;

      return {
        id: count,
        name: Math.ceil(Math.random() * 1000).toString(),
        score: Math.ceil(Math.random() * 1000),
      };
    });

    expect(viewOneUserLogic(data, 1)).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      score: expect.any(Number),
    });
  });

  test("check our update one user logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;

      return {
        id: count,
        name: Math.ceil(Math.random() * 1000).toString(),
        score: Math.ceil(Math.random() * 1000),
      };
    });

    expect(updateOneUserLogic(data, 1)).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      score: expect.any(Number),
    });
  });
});
