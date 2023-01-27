import MonacoEditor from "@monaco-editor/react";
interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({
  initialValue,
  onChange,
}: CodeEditorProps): JSX.Element => {
  const onEditorDidMount = (getValue: () => string, MonacoEditor: any) => {
    MonacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
  };

  return (
    <MonacoEditor
      editorDidMount={onEditorDidMount}
      value={initialValue}
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
