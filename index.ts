let db = [
  { id: 0, name: "Petr", score: 25 },
  { id: 2, name: "Prince", score: 75 },
  { id: 3, name: "Joan", score: 15 },
];

// create logic

let val = {
  id: db.length + 1,
  name: "James",
  score: 55,
};

export const createLogic = (
  data: Array<{ id: number; name: string; score: number }>,
  value: { id: number; name: string; score: number }
): { id: number; name: string; score: number } => {
  data.push(value);

  return value;
};

export const viewAllUserLogic = (
  data: Array<{ id: number; name: string; score: number }>
): Array<{ id: number; name: string; score: number }> => {
  return data;
};

export const viewOneUserLogic = (
  data: Array<{ id: number; name: string; score: number }>,
  id: number
): { id: number; name: string; score: number } => {
  let getUser = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getUser;
};

export const updateOneUserLogic = (
  data: Array<{ id: number; name: string; score: number }>,
  id: number
): { id: number; name: string; score: number } => {
  let getUser = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getUser;
};

createLogic(db, val);
viewAllUserLogic(db);
viewOneUserLogic(db, 2);
console.log(viewOneUserLogic(db, 2));
