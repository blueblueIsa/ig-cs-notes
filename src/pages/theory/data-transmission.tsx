import { Card } from "../../components/atoms/Card";

export function DataTransmission() {
  return (
    <div>
      <h1>Data transmission</h1>
      
      <section className="mb-8">
        <h2>Packet Switching</h2>
        <Card>
          <ul className="list-disc ml-6">
            <li>Data divided into packets</li>
            <li>Each packet contains:
              <ul className="list-disc ml-6">
                <li>Header (source, destination, sequence number)</li>
                <li>Payload (actual data)</li>
                <li>Trailer (error checking)</li>
              </ul>
            </li>
            <li>Packets can take different routes</li>
            <li>Reassembled at destination</li>
          </ul>
        </Card>
      </section>

    <section className="mb-8">
      <h2>Error Checking Methods</h2>
      <Card>
        <h3>1. Parity Check</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Adds an extra bit to make total number of 1s even (even parity) or odd (odd parity)</li>
          <li>Can detect single-bit errors</li>
          <li>Simple but limited error detection</li>
        </ul>

        <h3>2. Check Digit</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Additional digit calculated from other digits</li>
          <li>Common in ISBNs and bank card numbers</li>
          <li>Can detect transposition errors</li>
        </ul>

        <h3>3. Checksum</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Mathematical sum of all data bytes</li>
          <li>Transmitted with data for verification</li>
          <li>More robust than parity check</li>
        </ul>

        <h3>4. Echo Check</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Receiver sends back received data</li>
          <li>Sender compares with original</li>
          <li>Simple but doubles transmission time</li>
        </ul>

        <h3>5. ARQ (Automatic Repeat Request)</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Combines error detection with retransmission</li>
          <li>Uses acknowledgment signals</li>
          <li>Most reliable but higher overhead</li>
        </ul>

        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Method</th>
              <th className="border p-2">Advantages</th>
              <th className="border p-2">Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Parity</td>
              <td className="border p-2">Simple, low overhead</td>
              <td className="border p-2">Cannot detect even number of errors</td>
            </tr>
            <tr>
              <td className="border p-2">Check Digit</td>
              <td className="border p-2">Good for numerical data</td>
              <td className="border p-2">Limited to specific applications</td>
            </tr>
            <tr>
              <td className="border p-2">Checksum</td>
              <td className="border p-2">Good general-purpose detection</td>
              <td className="border p-2">Moderate overhead</td>
            </tr>
            <tr>
              <td className="border p-2">Echo Check</td>
              <td className="border p-2">Very reliable</td>
              <td className="border p-2">Doubles transmission time</td>
            </tr>
            <tr>
              <td className="border p-2">ARQ</td>
              <td className="border p-2">Most reliable, automatic correction</td>
              <td className="border p-2">High overhead, complex</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>

    <section className="mb-8">
      <h2>Encryption</h2>
      <Card>
        <h3>Symmetric Encryption</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Same key for encryption and decryption</li>
          <li>Fast but key distribution is challenging</li>
        </ul>

        <h3>Asymmetric Encryption</h3>
        <ul className="list-disc ml-6">
          <li>Public key for encryption</li>
          <li>Private key for decryption</li>
          <li>More secure but slower</li>
        </ul>
      </Card>
    </section>

    </div>
  );
}
