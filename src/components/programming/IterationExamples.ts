interface FlowchartSymbol {
  type: 'start' | 'process' | 'decision' | 'input' | 'output' | 'end';
  text: string;
}

interface IterationExample {
  title: string;
  code: string;
  description: string;
  flowchart: FlowchartSymbol[];
}

export function getIterationExamples(): IterationExample[] {
  return [
    {
      title: 'FOR Loop',
      code: `FOR counter ← 1 TO 5
  OUTPUT counter
NEXT counter`,
      description: 'Repeats a set of instructions a specific number of times.',
      flowchart: [
        { type: 'start', text: 'START' },
        { type: 'process', text: 'counter ← 1' },
        { type: 'decision', text: 'counter <= 5?' },
        { type: 'output', text: 'OUTPUT counter' },
        { type: 'process', text: 'counter ← counter + 1' },
        { type: 'end', text: 'END' }
      ]
    },
    {
      title: 'REPEAT Loop',
      code: `
number ← 1
REPEAT
  OUTPUT number
  number ← number + 2
UNTIL number > 10`,
      description: 'Repeats until a condition becomes true (at least once).',
      flowchart: [
        { type: 'start', text: 'START' },
        { type: 'process', text: 'number ← 1' },
        { type: 'output', text: 'OUTPUT number' },
        { type: 'process', text: 'number ← number + 2' },
        { type: 'decision', text: 'number > 10?' },
        { type: 'end', text: 'END' }
      ]
    },
    {
      title: 'WHILE Loop',
      code: `count ← 0
WHILE count <= 5 DO
  OUTPUT count
  count ← count + 1
ENDWHILE`,
      description: 'Repeats while a condition is true (may never execute).',
      flowchart: [
        { type: 'start', text: 'START' },
        { type: 'process', text: 'count ← 0' },
        { type: 'decision', text: 'count <= 5?' },
        { type: 'output', text: 'OUTPUT count' },
        { type: 'process', text: 'count ← count + 1' },
        { type: 'end', text: 'END' }
      ]
    },
    {
      title: 'Nested FOR Loop',
      code: `FOR i ← 1 TO 3
  FOR j ← 1 TO 2
    OUTPUT i * j
  NEXT j
NEXT i`,
      description: 'Demonstrates nested loops for working with 2D data structures.',
      flowchart: [
        { type: 'start', text: 'START' },
        { type: 'process', text: 'i ← 1' },
        { type: 'decision', text: 'i <= 3?' },
        { type: 'process', text: 'j ← 1' },
        { type: 'decision', text: 'j <= 2?' },
        { type: 'output', text: 'OUTPUT i * j' },
        { type: 'process', text: 'j ← j + 1' },
        { type: 'process', text: 'i ← i + 1' },
        { type: 'end', text: 'END' }
      ]
    }
  ];
}