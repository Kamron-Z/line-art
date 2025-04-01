import {Container} from "@/components/shared/container";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Linkedin} from "lucide-react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({className}) => {
  return (
      <footer className={cn('my-[100px] ', className)}>
        <Container>
          <div className={'flex justify-between py-8 border-solid border-t border-black'}>

            <div>
              <Link href="/"><img src="/images/line-art-logo.svg"/></Link></div>
            <div className={'flex flex-col items-start'}>
              <Button variant={'link'}>Форум</Button>
              <Button variant={'link'}>Библиотека</Button>
              <Button variant={'link'}>Статьи</Button>
            </div>
            <div className={'flex flex-col items-start'}>
              <Button variant={'link'}>Библиотека</Button>
              <Button variant={'link'}>Статьи</Button>
            </div>
            <div className="flex gap-3">
              <Link href="/">
                <Instagram width={20} />
              </Link>
              <Link href="/">
                <Facebook width={20} />
              </Link>
              <Link href="/">
                <Linkedin width={20}/>
              </Link>
            </div>

          </div>
        </Container>
      </footer>
  )
}