import { CodeBlock } from '../../components/atoms/CodeBlock';
import { Card } from '../../components/atoms/Card';
import { OperatorTable } from '../../components/programming/OperatorTable';
import { arithmeticOperators, comparisonOperators } from '../../components/programming/operators';

export function Operations() {
    return (
      <div>
        <section className="mb-8">
          <h2>Operators</h2>
          <Card title="Arithmetic Operators">
            <OperatorTable operators={arithmeticOperators} />
          </Card>
          
          <Card title="Comparison Operators">
            <OperatorTable operators={comparisonOperators} />
          </Card>

          <Card title="Operator Examples">
            <h3>Arithmetic Examples:</h3>
            <CodeBlock code={`
      x ← 10
      y ← 3

      sum ← x + y       // Result: 13
      diff ← x - y      // Result: 7
      product ← x * y   // Result: 30
      quotient ← x / y  // Result: 3.333...
      remainder ← x MOD y // Result: 1`} />

            <h3 className="mt-4">Comparison Examples:</h3>
            <CodeBlock code={`
      age ← 18
      isAdult ← age >= 18    // Result: TRUE
      canVote ← age = 18     // Result: TRUE
      needsGuardian ← age < 18 // Result: FALSE`} />
          </Card>

        </section>

      </div>
    );
  } 