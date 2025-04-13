'use client'

import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-cart";
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {useIntersection} from 'react-use';

interface Item {
  id: number;
  title: string;
  suptitle: string;
  imageUrl: string;
}

interface Props {
  className?: string;
  items: Item[];
  text: string;
}

export const ProductList: React.FC<Props> = ({className, text, items}) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(text)
    }
  }, [intersection?.isIntersecting, text]);

  return (
      <div className={cn('mt-10', className)} id={text} ref={intersectionRef}>
        <div className={'flex items-center justify-between'}>
          <Title text={text} size={'lg'} className={'font-bold mb-5'}/>
          <Button variant={'link'}>Показать все</Button>
        </div>
        <div className={'grid grid-cols-6 gap-4'}>

          {items.map(item => (
              <ProductCard key={item.id} id={item.id} name={item.title} subtitle={item.suptitle}
                           imageUrl={item.imageUrl}/>
          ))}
        </div>
      </div>
  )
}