import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <MonacoEditor
      options={{ wordWrap: "on" }}
      language="javascript"
      height="500px"
      theme="dark"
    />
  );
};
export default CodeEditor;
