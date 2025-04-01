import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import Link from "next/link";

interface Item {
  id: number;
  title: string;
  pageUrl: string;
}

interface Props {
  className?: string,
  title: string,
  iconUrl?: string,
  defaultValue?: string,
  navs?: Item[],
  pageUrl?: string,
}


export const NavigatorMenuComp: React.FC<Props> = ({className, pageUrl, defaultValue, title, navs, iconUrl}) => {
  return (
      <NavigationMenu  className={cn('cursor-pointer ', className)}>
        <NavigationMenuList >
          <NavigationMenuItem>
            <Link href={`/${pageUrl}`} >
              <NavigationMenuTrigger  className={'gap-1.5'}>
                {iconUrl && <span>
                        <img src={iconUrl}/>
                      </span>}


                {defaultValue ? defaultValue : title}

              </NavigationMenuTrigger>
            </Link>
            {navs && <NavigationMenuContent asChild={false} className={''}>
              {
                navs.map((nav, index) => (
                    <NavigationMenuLink href={nav.pageUrl}  className={'w-full'} key={index}>{nav.title}</NavigationMenuLink>
                ))
              }
            </NavigationMenuContent>}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  )
}