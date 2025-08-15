export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Завтраки",
  },
  {
    name: "Закуски",
  },
  {
    name: "Коктейли",
  },
  {
    name: "Напитки",
  },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/019860510daa726fa023e04a1ae06a87.avif",
    categoryId: 2,
  },
  {
    name: "Омлет с пеперони",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198605864fc73b8a8259cbfa18e95c8.avif",
    categoryId: 2,
  },

  {
    name: "Денвич ветчина и сыр",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/019897d07b6c7939a756349c707b6e43.avif",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198131dce8b706bb3ed5a169df1bc84.avif",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198ae98f5a377b4938dd4c854f1857c.avif",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/01980cb92528769295aeb186fb501f8e.avif",
    categoryId: 3,
  },
  {
    name: "Острый додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/01980cbb11e677738af9e254a413763f.avif",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198227c07ae7244ad5deb11b2169dfb.avif",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198227c9627795b991b79142c0e3ba0.avif",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем орео",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198227b830478b599cefb215fad4e36.avif",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198227af85e7443b2a25aa7e79aea7a.avif",
    categoryId: 4,
  },
  {
    name: "Ирландский капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/019855f96ed874489375d653f238b26f.avif",
    categoryId: 5,
  },
  {
    name: "Карамельный капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/019855f8981f7781aedc4b373d96c060.avif",
    categoryId: 5,
  },
  {
    name: "Кокосовый латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/11ee7d61b19fa07090ee88b0ed347f42.avif",
    categoryId: 5,
  },
  {
    name: "Кофе американо",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/0198227e7648741ead340c4c96da45a4.avif",
    categoryId: 5,
  },
  {
    name: "Кофе латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:233x233/01982280dc9a778c941ba53768d94882.avif",
    categoryId: 5,
  },
];
