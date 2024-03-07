import { useMemo, useState } from "react";

export default function UseMemoWithEx() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  let sum = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= value; i++) {
      count += i;
    }
    return count;
  }, [value]);

  function handleCounter() {
    setCount(count + 1);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} type="number" />
      <h1>
        Sum from 1 to {value} is {sum}
      </h1>
      <button onClick={handleCounter}>Counter ({count})</button>
    </>
  );
}
