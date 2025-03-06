import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ManualFuelCalculatorCard() {
  return (
    <Card className="border-gray-800 bg-gray-800">
      <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
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
  )
} 