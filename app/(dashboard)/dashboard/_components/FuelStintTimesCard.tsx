import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function FuelStintTimesCard() {
  return (
    <Card className="border-gray-800 bg-gray-800">
      <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
        <CardTitle className="text-white font-bold">Fuel Stint Average Times</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Stint Type</TableHead>
                  <TableHead className="text-gray-300">Average lap time</TableHead>
                  <TableHead className="text-gray-300">Fuel per Lap</TableHead>
                  <TableHead className="text-gray-300">Lap Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Standard Fuel Stint</TableCell>
                  <TableCell className="text-white">
                    <Input
                      defaultValue="0:01:45"
                      className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                    />
                  </TableCell>
                  <TableCell className="text-white">
                    <Input
                      defaultValue="0.85"
                      className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500 w-1/4"
                    />
                  </TableCell>
                  <TableCell className="text-white">23</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">Fuel Saving Stint</TableCell>
                  <TableCell className="text-white">
                    <Input
                      defaultValue="0:01:45"
                      className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                    />
                  </TableCell>
                  <TableCell className="text-white">
                  <Input
                      defaultValue="0.85"
                      className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500 w-1/4"
                    />
                  </TableCell>
                  <TableCell className="text-white">23</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
    </Card>
  )
} 