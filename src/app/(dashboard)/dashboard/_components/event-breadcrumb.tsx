"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useEventStore } from '@/context/event-name-store';

interface Props {
  user: {
    type: string;
    id: number;
    clerkId: string;
    fullname: string;
    prefDriverColor: string | null;
    gmtOffset: number | null;
    iRating: number | null;
    createdAt: Date;
    updatedAt: Date | null;
  };
}

export function EventBreadcrumb({ user }: Props) {
  const eventName = useEventStore((state) => state.eventName);
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${user?.id}/profile`}>
            {user.fullname}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>{eventName}</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
