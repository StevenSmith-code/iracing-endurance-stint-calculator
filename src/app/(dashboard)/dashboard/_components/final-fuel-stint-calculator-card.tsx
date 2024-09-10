import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  className?: string;
};

export default function FinalFuelStintCalculatorCard({ className }: Props) {
  return (
    <Card className={`w-full max-w-3xl bg-card ${className}`}>
      <CardHeader className="bg-primary text-primary-foreground p-2">
        <CardTitle className="text-center text-lg">
          Final Fuel Stint Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card border-b border-secondary text-foreground">
                <th className="px-4 py-2 text-left">Stint</th>
                <th className="px-4 py-2 text-right">GMT Start</th>
                <th className="px-4 py-2 text-right">GMT End</th>
                <th className="px-4 py-2 text-right">Duration</th>
                <th className="px-4 py-2 text-right">Std Fuel</th>
                <th className="px-4 py-2 text-right">Fs Fuel</th>
                <th className="px-4 py-2 text-right">Std Xtra</th>
                <th className="px-4 py-2 text-right">Fs Xtra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card">
                <td className="px-4 py-2 text-left">3</td>
                <td className="px-4 py-2 text-right">4:25:00 PM</td>
                <td className="px-4 py-2 text-right">4:51:00 PM</td>
                <td className="px-4 py-2 text-right">0:26:00</td>
                <td className="px-4 py-2 text-right">12.22</td>
                <td className="px-4 py-2 text-right">11.98</td>
                <td className="px-4 py-2 text-right">12.97</td>
                <td className="px-4 py-2 text-right">12.72</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
