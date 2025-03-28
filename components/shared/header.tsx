import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import {NavigatorMenuComp} from "@/components/shared/navigator-menu";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
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
}, {
  id: 2,
  title: "Машиностроение",
}, {
  id: 3,
  title: "Деревообработка",
}]

const navsHome = [{
  id: 1,
  title: "Общие вопросы",
}, {
  id: 2,
  title: "Машиностроение",
}, {
  id: 3,
  title: "Деревообработка",
}]

const navsArticle = [{
  id: 1,
  title: "Общие вопросы",
}, {
  id: 2,
  title: "Машиностроение",
}, {
  id: 3,
  title: "Деревообработка",
}]

export const Header: React.FC<Props> = ({className}) => {
  return (
      <header className={cn('header border-b border-solid border-b-gray-100', className)}>
        <Container>

          <div className={'flex items-center justify-between'}>

            <Link href="/" className={'cursor-pointer'}>
              <img src={'/images/line-art-logo.svg'} alt="line-art-logo"/>
            </Link>
            <div className={'flex items-center gap-6'}>

              <NavigatorMenuComp title={'Библиотека'} navs={navsVuesax} iconUrl={'/images/vuesax.svg'}/>
              <NavigatorMenuComp title={'Форум'} navs={navsHome} iconUrl={'/images/home-header.svg'}/>
              <NavigatorMenuComp title={'Статьи'} navs={navsArticle} iconUrl={'/images/article-header.svg'}/>

            </div>
            <div className="relative min-w-[144px]">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
              <Input
                  placeholder="Поиск..."
                  type="search"
                  className={"pr-10"}
              />
            </div>
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

              <div>
                <DropMenu items={navsHome} label={''} separator={false}>
                  <img src={"/images/notification-bing.svg"} alt=""/>
                </DropMenu>
              </div>

              <Link href={'/settings'} className={'p-4 cursor-pointer'}>
                <img src={"/images/setting.svg"} alt="" width={20}/>
              </Link>

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