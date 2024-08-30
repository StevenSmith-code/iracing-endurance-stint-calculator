import { CircleAlertIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Props {
  description: string;
}

export function EventToolTip({ description }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <CircleAlertIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-40">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
