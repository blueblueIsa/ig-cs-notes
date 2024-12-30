import { Card } from "../../components/atoms/Card";
import { StorageComparison } from "./StorageComparison";

export function Hardware() {
    return (
      <div>
        <h1>Hardware</h1>

        <section className="mb-8">
          <h2>CPU Components</h2>
          <Card>
            <h3>Registers</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Program Counter (PC): Next instruction address</li>
              <li>Memory Address Register (MAR): Memory location</li>
              <li>Memory Data Register (MDR): Data being transferred</li>
              <li>Accumulator (ACC): Arithmetic operations</li>
            </ul>

            <h3>Buses</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Address Bus: Carries memory addresses</li>
              <li>Data Bus: Transfers data</li>
              <li>Control Bus: Carries control signals</li>
            </ul>

            <h3>Memory</h3>
            <ul className="list-disc ml-6">
              <li>ROM: Permanent storage, boot instructions</li>
              <li>RAM: Temporary storage, running programs</li>
            </ul>
          </Card>
        </section>

        <section className="mb-8">
          <h2>CPU Diagram</h2>
          <div className="border-2 border-slate-300 p-4 rounded-lg my-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="col-span-3 bg-blue-100 p-2 rounded">
                <strong>Control Unit (CU)</strong>
              </div>
              <div className="bg-green-100 p-2 rounded">
                <strong>ALU</strong>
                <div className="text-sm">Arithmetic Logic Unit</div>
              </div>
              <div className="bg-yellow-100 p-2 rounded">
                <strong>Registers</strong>
              </div>
              <div className="bg-purple-100 p-2 rounded">
                <strong>Cache</strong>
              </div>
            </div>
          </div>
        </section>

      <section className="mb-8">
        <h2>Storage Comparison</h2>
          <StorageComparison />
      </section>
      </div>
    );
  } 