import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function FinalFuelCalculatorCard() {
  return (
    <Card className="border-gray-800 bg-gray-800">
      <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
        <CardTitle className="text-white font-bold">Final Fuel Stint Calculator</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Stint</TableHead>
                  <TableHead className="text-gray-300">GMT Start</TableHead>
                  <TableHead className="text-gray-300">Duration</TableHead>
                  <TableHead className="text-gray-300">Std Fuel</TableHead>
                  <TableHead className="text-gray-300">FS Fuel</TableHead>
                  <TableHead className="text-gray-300">FS Xtra</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white">30</TableCell>
                  <TableCell className="text-white">12:00</TableCell>
                  <TableCell className="text-white">0:23:59</TableCell>
                  <TableCell className="text-white">12.78</TableCell>
                  <TableCell className="text-white">12.53</TableCell>
                  <TableCell className="text-white">0.25</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
    </Card>
  )
} 