"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon, Clock } from "lucide-react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(dayjs().utc().format("HH:mm"))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().utc().format("HH:mm"))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-gray-400">Manage your race strategy and fuel calculations</p>
      <div className="flex items-center justify-center gap-2 border border-gray-600 rounded-md p-2">
        <p className="text-gray-300 xl:text-lg">Current GMT: {currentTime}</p>
        <Clock className="w-4 h-4" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Overall Event Config */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
            <CardTitle className="text-white font-bold">Overall Event Config</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Race Duration</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Duration of race in hh:mm:ss format.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  defaultValue="2:40:00"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Session Start (GMT)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GMT start according to real world "Clock Time".</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  defaultValue="8/25/2024 2:00:00 PM"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Race Start (GMT)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GMT start according to real world "Clock Time".</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  defaultValue="8/25/2024 2:11:00 PM"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Green Flag Offset</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Delay between the start of the session and the start of the first fuel stint.
                        <br />
                        Adjust this to account for session load time, qualifying if applicable, and
                        formation lap duration.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
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
          <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
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
          <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
            <CardTitle className="text-white font-bold">Overall Fuel Stint Config</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Pit Duration</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Base time for pit stop without tire change in hh:mm:ss format.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  defaultValue="0:01:15"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Fuel Tank Size</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Maximum fuel capacity in gallons/liters.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  defaultValue="19.81"
                  className="bg-gray-700 border-gray-600 text-white focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Add Tire Time?</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Include tire change time in pit stop calculations.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Checkbox className="border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Label className="text-gray-300">Tire Change Time</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Additional time for tire change in hh:mm:ss format.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
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

        {/* Manual Fuel Stint Calculator */}
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

        {/* Final Fuel Stint Calculator */}
        <Card className="border-gray-800 bg-gray-800">
          <CardHeader className="bg-red-500 border-b border-gray-600 rounded-t-md">
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
