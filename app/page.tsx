import {Container} from "@/components/shared/container";
import {CategoryTabs} from "@/components/shared/cagetory-tabs";
import {ProductList} from "@/components/shared/product-list";

const items = [
  {
    id: 1,
    title: 'Architecture in Britain, 1530-1830',
    suptitle: 'Архитектурные решения',
    imageUrl: '/images/kniga.png'
  },
  {
    id: 2,
    title: 'Architecture in Britain, 1530-1830',
    suptitle: 'Архитектурные решения',
    imageUrl: '/images/kniga.png'
  },
  {
    id: 3,
    title: 'Architecture in Britain, 1530-1830',
    suptitle: 'Архитектурные решения',
    imageUrl: '/images/kniga.png'
  },
  {
    id: 4,
    title: 'Architecture in Britain, 1530-1830',
    suptitle: 'Архитектурные решения',
    imageUrl: '/images/kniga.png'
  },
  {
    id: 5,
    title: 'Architecture in Britain, 1530-1830',
    suptitle: 'Архитектурные решения',
    imageUrl: '/images/kniga.png'
  },
  {
    id: 6,
    title: 'Architecture in Britain, 1530-1830',
    suptitle: 'Архитектурные решения',
    imageUrl: '/images/kniga.png'
  },
]

export default function Home() {
  return (
      <>
        <Container>

          <div className={'my-10 max-w-[500px]'}>
            <h1 className={'font-bold text-3xl mb-4'}>
              Находите и исследуйте файлы и книги вашего направления
            </h1>
            <p className={'text-xl text-[#9196A8]'}>
              Исследуйте, устанавливайте, используйте и изменяйте тысячи файлов и строк.
            </p>
          </div>
        </Container>
        <CategoryTabs/>
        <Container>
          <div><ProductList items={items} text={'Книги'}/>
            <ProductList items={items} text={'Курсы'}/>
            <ProductList items={items} text={'Чертежи'}/>
            <ProductList items={items} text={'Расчеты'}/>
          </div>

        </Container>

      </>
  );
}
