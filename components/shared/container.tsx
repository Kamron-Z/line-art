import {cn} from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({children, className}) => {
  return (
      <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
  )
}