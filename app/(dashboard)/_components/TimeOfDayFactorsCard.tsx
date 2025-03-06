import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function TimeOfDayFactorsCard() {
  return (
    <Card className="border-gray-800 bg-gray-800">
      <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
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
  )
} 