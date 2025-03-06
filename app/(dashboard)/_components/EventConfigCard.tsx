import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

export function EventConfigCard() {
  return (
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
  )
} 