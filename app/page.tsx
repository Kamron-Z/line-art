import {Header} from "@/components/shared/header";
import {Container} from "@/components/shared/container";


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

      </>
  );
}
