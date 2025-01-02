interface Operator {
  symbol: string;
  name: string;
  example: string;
  result?: string;
}

interface Props {
  title?: string;
  operators: Operator[];
}

export function OperatorTable({ title, operators }: Props) {
  return (
    <div className="overflow-x-auto">
      {title && <h3 className="mb-4">{title}</h3>}
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="px-4 py-2">Operator</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Example</th>
            <th className="px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {operators.map((op, index) => (
            <tr key={index} className="border-b hover:bg-slate-50">
              <td className="px-4 py-2 font-mono">{op.symbol}</td>
              <td className="px-4 py-2">{op.name}</td>
              <td className="px-4 py-2 font-mono">{op.example}</td>
              <td className="px-4 py-2">{op.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}