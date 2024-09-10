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

const FuelStintAvgTimesCard = ({ className }: Props) => {
  return (
    <Card className={`w-full max-w-3xl bg-card ${className}`}>
      <CardHeader className="bg-primary text-foreground">
        <CardTitle className="text-center">Fuel Stint Average Times</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card border-b border-secondary text-foreground">
                <th className="px-4 py-2 text-left">Stint Type</th>
                <th className="px-4 py-2 text-right">Laptime</th>
                <th className="px-4 py-2 text-right">Fuel per Lap</th>
                <th className="px-4 py-2 text-right">Lap Count</th>
                <th className="px-4 py-2 text-right">Lap W/Pit</th>
                <th className="px-4 py-2 text-right">Track Time</th>
                <th className="px-4 py-2 text-right">Time w/Pit</th>
                <th className="px-4 py-2 text-right">Fuel per Stint</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card">
                <td className="px-4 py-2 font-medium">Standard Fuel Stint</td>
                <td className="px-4 py-2 text-right">0:01:36</td>
                <td className="px-4 py-2 text-right">0.75</td>
                <td className="px-4 py-2 text-right">31</td>
                <td className="px-4 py-2 text-right">0:01:38</td>
                <td className="px-4 py-2 text-right">0:49:28</td>
                <td className="px-4 py-2 text-right">0:50:43</td>
                <td className="px-4 py-2 text-right">23.25</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-2 font-medium">Fuel Saving Stint</td>
                <td className="px-4 py-2 text-right">0:01:37</td>
                <td className="px-4 py-2 text-right">0.74</td>
                <td className="px-4 py-2 text-right">31</td>
                <td className="px-4 py-2 text-right">0:01:39</td>
                <td className="px-4 py-2 text-right">0:49:57</td>
                <td className="px-4 py-2 text-right">0:51:12</td>
                <td className="px-4 py-2 text-right">23.02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default FuelStintAvgTimesCard;
