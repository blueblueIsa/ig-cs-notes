import { Card } from '../atoms/Card';

import { PseudocodeExample } from './PseudocodeExample';
import { getBasicMethodExamples } from './BasicMethodExamples';

export function BasicMethodSelection() {
  const examples = getBasicMethodExamples();
  
  return (
    <section className="mb-8">
      <h1>Basic Methods</h1>
      
      {examples.map(example => (
        <Card title={example.title}>
          <PseudocodeExample
            code={example.code}
            description={example.description}
          />
        </Card>
      ))}
    </section>
  );
}