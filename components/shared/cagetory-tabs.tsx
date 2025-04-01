import {cn} from "@/lib/utils";
import React from "react";
import {Button} from "@/components/ui/button";
import {NavigatorMenuComp} from "@/components/shared/navigator-menu";
import {Container} from "@/components/shared/container";
import Link from "next/link";

interface Props {
  className?: string
}

const cats = [
  {id: 1, name: "Книги"},
  {id: 2, name: "Курсы"},
  {id: 3, name: "Чертежи"},
  {id: 4, name: "Расчеты"}
]


export const CategoryTabs: React.FC<Props> = ({className}) => {
  return (
      <div className={cn('sticky top-0 mt-5 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
        <Container className={'flex items-center justify-between'}>
          <div>

            <NavigatorMenuComp title={'TЕХНОЛОГИЧЕСКИЙ ФОРУМ'} defaultValue={'ТЕХНОЛОГИЧЕСКИЙ ФОРУМ'} navs={[{
              id: 1,
              title: "ТЕХНОЛОГИЧЕСКИЙ ФОРУМ",
              pageUrl: ''
            }, {
              id: 2,
              title: "ГЕНПЛАН И СООРУЖЕНИЯ ТРАНСПОРТА",
              pageUrl: ''
            }, {
              id: 3,
              title: "АРХИТЕКТУРНЫЙ ФОРУМ",
              pageUrl: '/'
            }]}  iconUrl={'/images/vuesax.svg'}/>

          </div>
          <div className={'flex items-center gap-6'}>

            {cats.map(cat => (
              <Link href={`/library/#${cat.name}`} key={cat.id}><Button variant={'link'}>{cat.name}</Button></Link>
            ))}

          </div>
          <div>

            <NavigatorMenuComp title={'Сортировать'} navs={[{
              id: 1,
              title: "Популярные",
              pageUrl: ''
            }, {
              id: 2,
              title: "С высшими оценками",
              pageUrl: ''
            }, {
              id: 3,
              title: "Недавние",
              pageUrl: '/'
            }]}/>

          </div>
        </Container>
      </div>
  )
}