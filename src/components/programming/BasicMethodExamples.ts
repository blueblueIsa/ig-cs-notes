interface FlowchartSymbol {
  type: 'start' | 'process' | 'decision' | 'input' | 'output' | 'end';
  text: string;
}

interface BasicMethodExample {
  title: string;
  code: string;
  description: string;
  flowchart: FlowchartSymbol[];
}

export function getBasicMethodExamples(): BasicMethodExample[] {
  return [
    {
      title: 'Counting',
      code: `counter ← 0
FOR Index ← 1 TO 10
  INPUT Num
  IF Num > 0 THEN
    counter ← counter + 1
  ENDIF
NEXT Index
OUTPUT counter`,
      description: 'Counts the number of positive numbers in a list.',
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
      title: 'Totaling',
      code: `
total ← 0
FOR Index ← 1 TO 10
  total ← total + Nums[Index]
  NEXT Index
  OUTPUT total`,
      description: 'Totals the numbers in a list.',
      flowchart: [
      ]
    },
  ];
}