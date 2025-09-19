import { Skeleton } from "@/app/_lib/shadcn/components/ui/skeleton"

export const SkeletonGroup = () => {
  return (
    <div className="shrink-0 w-full flex flex-col gap-5">
      <Skeleton className="shrink-0 w-2/6 h-[20px] bg-neutral-200" />
      <Skeleton className="shrink-0 w-full h-[20px] bg-neutral-200" />
      <Skeleton className="shrink-0 w-full h-[20px] bg-neutral-200" />
      <Skeleton className="shrink-0 w-4/6 h-[20px] bg-neutral-200" />
    </div>
  )
}