import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";

interface Props {
  className?: string,
  title: string,
  iconUrl: string,
  navs: Item[]
}

export const NavigatorMenuComp: React.FC<Props> = ({className, title, navs, iconUrl}) => {
  return (
      <NavigationMenu className={cn('', className)}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={'gap-1.5'}>
                      <span>
                        <img src={iconUrl}/>
                      </span>
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className={'w-full'}>
              {
                navs.map((nav, index) => (
                    <NavigationMenuLink key={index}>{nav.title}</NavigationMenuLink>
                ))
              }
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  )
}