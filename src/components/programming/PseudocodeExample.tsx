interface Props {
  code: string;
  description?: string;
}

export function PseudocodeExample({ code, description }: Props) {
  return (
    <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm">
      <pre className="whitespace-pre-wrap">{code}</pre>
      {description && <p className="mt-2 text-slate-600 font-sans text-sm">{description}</p>}
    </div>
  )
}