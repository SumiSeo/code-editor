import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <Resizable direction="vertical">
        <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <CodeEditor
            initialValue="const hello = 'Play with your codes!'"
            onChange={(value) => setInput(value)}
          />

          {/* <button onClick={onClick}>Submit</button> */}

          <Preview code={code} />
        </div>
      </Resizable>
    </div>
  );
};

export default CodeCell;
