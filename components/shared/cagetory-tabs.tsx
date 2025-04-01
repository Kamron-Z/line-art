import {cn} from "@/lib/utils";
import React from "react";
import {Button} from "@/components/ui/button";
import {NavigatorMenuComp} from "@/components/shared/navigator-menu";
import {Container} from "@/components/shared/container";

interface Props {
  className?: string
}

export const CategoryTabs: React.FC<Props> = ({className}) => {
  return (
      <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
        <Container className={'flex items-center justify-between'}>
          <div>

            <NavigatorMenuComp title={'TЕХНОЛОГИЧЕСКИЙ ФОРУМ'} defaultValue={'ТЕХНОЛОГИЧЕСКИЙ ФОРУМ'} navs={[{
              id: 1,
              title: "ТЕХНОЛОГИЧЕСКИЙ ФОРУМ",
            }, {
              id: 2,
              title: "ГЕНПЛАН И СООРУЖЕНИЯ ТРАНСПОРТА",
            }, {
              id: 3,
              title: "АРХИТЕКТУРНЫЙ ФОРУМ",
            }]} iconUrl={'/images/vuesax.svg'}/>

          </div>
          <div className={'flex items-center gap-6'}>

            <Button variant={'link'}>Исследовать</Button>
            <Button variant={'link'}>Книги</Button>
            <Button variant={'link'}>Чертежи</Button>
            <Button variant={'link'}>Курсы</Button>
            <Button variant={'link'}>Нормативы</Button>
            <Button variant={'link'}>Расчёты</Button>

          </div>
          <div>

            <NavigatorMenuComp title={'Сортировать'} navs={[{
              id: 1,
              title: "Популярные",
            }, {
              id: 2,
              title: "С высшими оценками",
            }, {
              id: 3,
              title: "Недавние",
            }]} iconUrl={''}/>

          </div>
        </Container>
      </div>
  )
}