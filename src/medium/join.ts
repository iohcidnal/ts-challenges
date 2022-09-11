/*
  5310 - Join
  -------
  by Pineapple (@Pineapple0919) #medium #array
  
  ### Question
  
  Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.
  
  ```ts
  type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = Join<["o"], "u">; // expected to be 'o'
  ```
  
  > View on GitHub: https://tsch.js.org/5310
*/

/* _____________ Your Code Here _____________ */

type Join<
  T extends any[],
  U extends string | number,
  R extends string = ""
> = T extends [infer F, ...infer Rest]
  ? Join<
      Rest,
      U,
      // `Rest extends [infer _, ...infer __]` -> Check to see if there are still items left in the array
      // `F & string` -> converts `unknown` to `string`
      `${R}${F & string}${Rest extends [infer _, ...infer __] ? U : ""}`
    >
  : R;

// Better answer by someone
// type Join<T, U extends number | string> = T extends [infer F, ...infer Rest]
//   ? Rest extends []
//     ? F
//     : `${F & string}${U}${Join<Rest, U>}`
//   : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5310/answer
  > View solutions: https://tsch.js.org/5310/solutions
  > More Challenges: https://tsch.js.org
*/
