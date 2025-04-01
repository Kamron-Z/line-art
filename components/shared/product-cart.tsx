import React from "react";
import Link from "next/link";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import {ShoppingCart} from "lucide-react";

interface Props {
  className?: string
  id: number;
  name: string;
  subtitle: string;
  imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({className, name,subtitle, imageUrl}) => {
  return (
      <div className={className}>
        <Link href={'/'}>
          <div className={'flex justify-center mb-2 bg-secondary h-[260px] rounded-2xl'}>
            <img src={imageUrl} className={'w-[220px] h-[240px]'} />
          </div>

          <div className={'flex items-center mt-4 gap-2'}>
            <div>
              <Title text={name} size={'xs'} className={'mb-1 font-bold'}/>

              <p className={'text-[10px] text-gray-400 font-extralight'}>
                {subtitle}
              </p>
            </div>

            <Button variant={"secondary"} className={'text-base font-bold '}>
              <ShoppingCart size={20} className={'mr-1'}/>
            </Button>
          </div>
        </Link>
      </div>
  )
}