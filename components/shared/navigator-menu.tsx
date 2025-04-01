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
  defaultValue?: string,
  navs: any[],
}

export const NavigatorMenuComp: React.FC<Props> = ({className, defaultValue, title, navs, iconUrl}) => {
  return (
      <NavigationMenu className={cn(' ', className)}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={'gap-1.5'}>
                      <span>
                        <img src={iconUrl} alt={"/"}/>
                      </span>


              {defaultValue ? defaultValue : title}

            </NavigationMenuTrigger>
            <NavigationMenuContent className={''}>
              {
                navs.map((nav, index) => (
                    <NavigationMenuLink className={'w-full'} key={index}>{nav.title}</NavigationMenuLink>
                ))
              }
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  )
}