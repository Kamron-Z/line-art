import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import {NavigatorMenuComp} from "@/components/shared/navigator-menu";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import {DropMenu} from "@/components/shared/drop-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";


interface Props {
  className?: string;
}

const navsVuesax = [{
  id: 1,
  title: "Общие вопросы",
  pageUrl: '/about'
}, {
  id: 2,
  title: "Машиностроение",
  pageUrl: '/instagram'
}, {
  id: 3,
  title: "Деревообработка",
  pageUrl: '/'
}]

const navsHome = [{
  id: 1,
  title: "Общие вопросы",
  pageUrl: '/'
}, {
  id: 2,
  title: "Машиностроение",
  pageUrl: '/'
}, {
  id: 3,
  title: "Деревообработка",
  pageUrl: '/'
}]

export const Header: React.FC<Props> = ({className}) => {
  return (
      <header className={cn('header border-b border-solid border-b-gray-100', className)}>
        <Container>

          <div className={'flex items-center justify-between'}>
            {/*logo*/}
            <Link href="/" className={'cursor-pointer'}>
              <img src={'/images/line-art-logo.svg'} alt="line-art-logo"/>
            </Link>
            {/*nav*/}
            <div className={'flex items-center gap-6'}>
              <NavigatorMenuComp title={'Библиотека'} pageUrl={'library'} navs={navsVuesax} iconUrl={'/images/vuesax.svg'}/>
              <NavigatorMenuComp title={'Форум'} pageUrl={'forum'} navs={navsHome} iconUrl={'/images/home-header.svg'}/>
              <NavigatorMenuComp title={'Статьи'} pageUrl={'article'} iconUrl={'/images/article-header.svg'}/>
            </div>
            {/*search*/}
            <div className="relative min-w-[144px]">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
              <Input
                  placeholder="Поиск..."
                  type="search"
                  className={"pr-10"}
              />
            </div>
            {/*cart*/}
            <div className={'flex items-center gap-3'}>
              <div>
                <Drawer direction={'right'}>
                  <DrawerTrigger className={'p-3 cursor-pointer'}>
                    <img src={'/images/cart.svg'} alt=""/>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Корзинка</DrawerTitle>
                      <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>
              </div>
              {/*notification*/}
              <div>
                <DropMenu items={navsHome} label={''} separator={false}>
                  <img src={"/images/notification-bing.svg"} alt=""/>
                </DropMenu>
              </div>
              {/*setings*/}
              <Link href={'/settings'} className={'p-4 cursor-pointer'}>
                <img src={"/images/setting.svg"} alt="" width={20}/>
              </Link>
              {/*profile*/}
              <div>
                <DropMenu items={navsHome} label={'My Account'} separator={true}>
                  <Avatar>
                    <AvatarImage src={"/"} className={'w-[20px]'}/>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropMenu>
              </div>

            </div>

          </div>

        </Container>
      </header>
  )
}