import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from "@/components/shared";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id={0}
                name="Чизбургер-пицца"
                price={550}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
