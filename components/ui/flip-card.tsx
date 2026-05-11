import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  return (
    <div className={cn("group [perspective:900px]", className)}>
      <div className="grid [grid-template-areas:'card'] [transform-style:preserve-3d] transition-[transform] duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:[transform:rotateY(180deg)]">
        <div className="[grid-area:card] [backface-visibility:hidden]">
          {front}
        </div>
        <div className="[grid-area:card] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}
