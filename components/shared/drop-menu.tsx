import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import React from "react";
import {cn} from "@/lib/utils";

interface Item {
  id: string;
  title: string;
}

interface Props {
  className?: string;
  label?: string;
  items: Item[],
  separator?: boolean,
  children?: React.ReactNode,
}

export const DropMenu: React.FC<Props> = ({ className, label, items, separator, children }) => {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger className={cn('p-4 cursor-pointer', className)}>
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent>

          {separator && (
              <div>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator/>
              </div>
          )}
          {
            items.map((item, index) => (
                <DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
  )
}