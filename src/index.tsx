import * as esbuild from "esbuild-wasm";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState<string>("");
  useEffect(() => {
    startService();
  }, []);
  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  const onClick = async () => {
    if (!ref.current) {
      return;
    }
    console.log(ref.current);
    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });
    setCode(result.code);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
