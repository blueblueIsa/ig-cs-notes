import { getSymbolClass, getSymbolDimensions } from '../../utils/flowchartStyles';

interface Props {
  type: 'start' | 'process' | 'decision' | 'input' | 'output' | 'end';
  text: string;
}

export function FlowchartSymbol({ type, text }: Props) {
  const symbolClass = getSymbolClass(type);
  const dimensions = getSymbolDimensions(type);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* <!-- Top connector --> */}
        {type !== 'start' && <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400 -translate-y-full"></div>}
        
        {/* <!-- Symbol container --> */}
        <div className={`border-2 p-6 ${dimensions} ${symbolClass} `}>
          {type === 'decision' ? (
            <div className="absolute inset-0 flex items-center justify-center [transform:rotate(-45deg)]">
            <div className="rotate-text-container">
              <span className="whitespace-pre-line leading-[1.2]">{text}</span>
            </div>
            </div>
          ) : (
            <span className="whitespace-pre-line w-16 leading-[1.2]">{text}</span>
          )}
        </div>

        {/* Side connectors for decision */}
        {type === 'decision' && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-4 h-0.5 bg-gray-400"></div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-2 h-0.5 bg-gray-400"></div>
          </>
        )}

        {/* <!-- Bottom connector --> */}
        {type !== 'end' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400 translate-y-full"></div>}
      </div>
    </div>
  )
}