import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../../store/atoms/count";

export default function Count() {
  return (
    <>
      <RecoilRoot>
        <CountRender />
        <Buttons />
      </RecoilRoot>
    </>
  );
}

export function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      {count}
      <br />
    </>
  );
}

export function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </>
  );
}
