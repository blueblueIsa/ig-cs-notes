import { CodeBlock } from '../../components/atoms/CodeBlock';
import { Card } from '../../components/atoms/Card';

export function DataRepresentation() {
  return (
    <div>
      <h1>Data Representation</h1>
      <div className="mb-8">
        <h2>Number Systems</h2>
        <div className="grid gap-4">
          <div>
            <h3>Binary (Base-2)</h3>
            <CodeBlock code={`
              Decimal 13 to Binary:
              13 ÷ 2 = 6 remainder 1
              6 ÷ 2 = 3 remainder 0
              3 ÷ 2 = 1 remainder 1
              1 ÷ 2 = 0 remainder 1
              Result: 1101₂`} />
                  </div>
                  
                  <div>
                    <h3>Hexadecimal (Base-16)</h3>
                    <CodeBlock code={`
              Binary to Hex conversion:
              1101 0011₂
              1101₂ = D₁₆
              0011₂ = 3₁₆
              Result: D3₁₆`} />
          </div>
        </div>

<section className="mb-8">
  <h2>Media Representation</h2>
  <Card>
    <h3>Images</h3>
      <ul className="list-disc ml-6 mb-4">
      <li>Resolution: Width × Height in pixels</li>
      <li>Color depth: Bits per pixel (e.g., 24-bit = 16.7M colors)</li>
      <li>File size = Resolution × Color depth</li>
    </ul>

    <h3>Sound</h3>
    <ul className="list-disc ml-6">
      <li>Sample rate: Samples per second (e.g., 44.1kHz)</li>
      <li>Sample resolution: Bits per sample (e.g., 16-bit)</li>
      <li>File size = Sample rate × Sample resolution × Duration</li>
    </ul>
  </Card>
</section>
    </div>
    </div>
  );
} 