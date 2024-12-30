interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Card({ title, children }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      {title && <h3 className="mb-4">{title}</h3>}
      {children}
    </div>
  );
}