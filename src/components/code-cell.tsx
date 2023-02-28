import { useState, useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <Resizable direction="vertical">
        <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <Resizable direction="horizontal">
            <CodeEditor
              initialValue="const hello = 'Play with your codes!'"
              onChange={(value) => setInput(value)}
            />
          </Resizable>

          {/* <button onClick={onClick}>Submit</button> */}

          <Preview code={code} err={err} />
        </div>
      </Resizable>
    </div>
  );
};

export default CodeCell;
