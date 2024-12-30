interface Props {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'text' }: Props) {
  return (
    <pre className="bg-slate-100 p-4 rounded mt-2 overflow-x-auto">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}