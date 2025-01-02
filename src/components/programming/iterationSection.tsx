import { Card } from '../atoms/Card';

import { PseudocodeExample } from './PseudocodeExample';
// import { Flowchart } from './Flowchart';
// import { FlowchartSymbol } from './FlowchartSymbol';
import { getIterationExamples } from './IterationExamples';

export function IterationSelection() {
  const examples = getIterationExamples();
  
  return (
    <section className="mb-8">
      <h2>Iteration Structures</h2>
      
      {examples.map(example => (
        <Card title={example.title}>
          <PseudocodeExample
            code={example.code}
            description={example.description}
          />
          {/* <Flowchart title={`${example.title} Example`}>
            {example.flowchart.map(symbol => (
              <FlowchartSymbol 
                type={symbol.type} 
                text={symbol.text} 
              />
            ))}
          </Flowchart> */}
        </Card>
      ))}
    </section>
  );
}