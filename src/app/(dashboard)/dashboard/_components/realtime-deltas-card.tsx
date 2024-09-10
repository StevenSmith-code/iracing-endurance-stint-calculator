import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function RealTimeDeltasCard({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={`w-full max-w-md bg-card ${className}`}>
      <CardHeader className="bg-primary text-foreground p-2">
        <CardTitle className="text-center text-lg">Realtime Deltas</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card border-b border-secondary text-foreground">
              <th className="px-4 py-2 text-left">Delta Type</th>
              <th className="px-4 py-2 text-right">Ideal</th>
              <th className="px-4 py-2 text-right">Actual</th>
              <th className="px-4 py-2 text-right">Delta</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-card">
              <td className="px-4 py-2">On Track Duration</td>
              <td className="px-4 py-2 text-right">2:40:00</td>
              <td className="px-4 py-2 text-right">2:18:05</td>
              <td className="px-4 py-2 text-right text-red-600">0:21:55</td>
            </tr>
            <tr className="bg-card">
              <td className="px-4 py-2">Total Race Laps</td>
              <td className="px-4 py-2 text-right">78.30</td>
              <td className="px-4 py-2 text-right">78.30</td>
              <td className="px-4 py-2 text-right">0.00</td>
            </tr>
            <tr className="bg-card">
              <td className="px-4 py-2">Fair Share Fuel Stints</td>
              <td className="px-4 py-2 text-right">1</td>
              <td className="px-4 py-2 text-right">1</td>
              <td className="px-4 py-2 text-right">0</td>
            </tr>
            <tr className="bg-card">
              <td className="px-4 py-2">Fair Share Laps</td>
              <td className="px-4 py-2 text-right">10</td>
              <td className="px-4 py-2 text-right">10</td>
              <td className="px-4 py-2 text-right">0</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
