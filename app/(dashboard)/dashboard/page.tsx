import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <p className="text-gray-400">Manage your race strategy and fuel calculations</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Overall Event Config */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600">
            <CardTitle className="text-white font-bold">Overall Event Config</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Race Duration</Label>
                <Input
                  defaultValue="2:40:00"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Session Start (GMT)</Label>
                <Input
                  defaultValue="8/25/2024 2:00:00 PM"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Race Start (GMT)</Label>
                <Input
                  defaultValue="8/25/2024 2:11:00 PM"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Green Flag Offset</Label>
                <Input
                  defaultValue="0:11:00"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fuel Stint Average Times */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600">
            <CardTitle className="text-white font-bold">Fuel Stint Average Times</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Stint Type</TableHead>
                  <TableHead className="text-gray-300">Fuel per Lap</TableHead>
                  <TableHead className="text-gray-300">Lap Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Standard Fuel Stint</TableCell>
                  <TableCell className="text-white">0.85</TableCell>
                  <TableCell className="text-white">23</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Fuel Saving Stint</TableCell>
                  <TableCell className="text-white">0.84</TableCell>
                  <TableCell className="text-white">23</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Overall Fuel Stint Config */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600">
            <CardTitle className="text-white font-bold">Overall Fuel Stint Config</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Pit Duration</Label>
                <Input
                  defaultValue="0:01:15"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Fuel Tank Size</Label>
                <Input
                  defaultValue="19.81"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Add Tire Time?</Label>
                <Checkbox className="border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label className="text-gray-300">Tire Change Time</Label>
                <Input
                  defaultValue="0:00:30"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time of Day Lap Factors */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600">
            <CardTitle className="text-white font-bold">Time of Day Lap Factors</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Time of Day</TableHead>
                  <TableHead className="text-gray-300">Laptime</TableHead>
                  <TableHead className="text-gray-300">Factor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Night1</TableCell>
                  <TableCell className="text-white">0:01:45</TableCell>
                  <TableCell className="text-white">1.10</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Morning</TableCell>
                  <TableCell className="text-white">0:01:45</TableCell>
                  <TableCell className="text-white">1.10</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Afternoon</TableCell>
                  <TableCell className="text-white">0:01:45</TableCell>
                  <TableCell className="text-white">1.10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Manual Fuel Stint Calculator */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600">
            <CardTitle className="text-white font-bold">Manual Fuel Stint Calculator</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Duration</TableHead>
                  <TableHead className="text-gray-300">Std Fuel</TableHead>
                  <TableHead className="text-gray-300">FS Fuel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">0:38:00</TableCell>
                  <TableCell className="text-white">20.24</TableCell>
                  <TableCell className="text-white">19.84</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">0:39:00</TableCell>
                  <TableCell className="text-white">20.78</TableCell>
                  <TableCell className="text-white">20.37</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">0:40:00</TableCell>
                  <TableCell className="text-white">21.31</TableCell>
                  <TableCell className="text-white">20.89</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Final Fuel Stint Calculator */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600">
            <CardTitle className="text-white font-bold">Final Fuel Stint Calculator</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Stint</TableHead>
                  <TableHead className="text-gray-300">Duration</TableHead>
                  <TableHead className="text-gray-300">Std Fuel</TableHead>
                  <TableHead className="text-gray-300">FS Fuel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">30</TableCell>
                  <TableCell className="text-white">0:23:59</TableCell>
                  <TableCell className="text-white">12.78</TableCell>
                  <TableCell className="text-white">12.53</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
