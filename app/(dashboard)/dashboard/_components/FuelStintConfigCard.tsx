import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

export function FuelStintConfigCard() {
  return (
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
  )
} 