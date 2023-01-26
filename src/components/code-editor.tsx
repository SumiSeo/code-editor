import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <MonacoEditor
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
      language="javascript"
      height="500px"
      theme="dark"
    />
  );
};
export default CodeEditor;
