
interface Props {
  title: string;
  children: React.ReactNode;
}

export function Flowchart({ title, children }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="flex flex-col items-center gap-6">
        {children}
      </div>
    </div>
  );
}

export default Flowchart;