const SHOP_DATA = {
  accessories: {
    id: 1,
    title: "accessories",
    routeName: "accessories",
    items: [
      {
        id: 1,
        name: "Classic Watch",
        imageUrl:
          "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 35
      },
      {
        id: 2,
        name: "Apple Watch",
        imageUrl:
          "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
        price: 58
      },
      {
        id: 3,
        name: "Black hat",
        imageUrl:
          "https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        price: 15
      },
      {
        id: 4,
        name: "Bracelet",
        imageUrl:
          "https://images.pexels.com/photos/1781621/pexels-photo-1781621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        price: 26
      },
      {
        id: 5,
        name: "Wallet",
        imageUrl:
          "https://images.unsplash.com/photo-1579706966804-be9f2bf0b2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 8
      },
      {
        id: 6,
        name: "Sunglasses",
        imageUrl:
          "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 14
      },
      {
        id: 7,
        name: "Headphones",
        imageUrl:
          "https://images.unsplash.com/photo-1575405423465-b1051312be65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 35
      },
      {
        id: 8,
        name: "Speakers",
        imageUrl:
          "https://images.unsplash.com/photo-1594864650856-f279f6fe6d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 44
      }
      // {
      //   id: 9,
      //   name: "Blue Snapback",
      //   imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
      //   price: 16
      // }
    ]
  },
  shoes: {
    id: 2,
    title: "shoes",
    routeName: "shoes",
    items: [
      {
        id: 10,
        name: "Funky Shoes",
        imageUrl:
          "https://images.unsplash.com/photo-1590483736622-39da8acf7eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        price: 26
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl:
          "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 52
      },
      {
        id: 12,
        name: "Nike",
        imageUrl:
          "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        price: 60
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl:
          "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 52
      },
      {
        id: 14,
        name: "Nike Yezzy",
        imageUrl:
          "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 34
      },
      {
        id: 15,
        name: "Reebok",
        imageUrl:
          "https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        price: 40
      },
      {
        id: 16,
        name: "Yellow Addidas",
        imageUrl:
          "https://images.unsplash.com/photo-1568039971229-d18db37510fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 60
      },
      {
        id: 17,
        name: "Woodland",
        imageUrl:
          "https://images.unsplash.com/photo-1515181316919-a29560a2f3fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 55
      }
    ]
  },
  // jackets: {
  //   id: 3,
  //   title: "Jackets",
  //   routeName: "jackets",
  //   items: [
  //     {
  //       id: 18,
  //       name: "Black Jean Shearling",
  //       imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
  //       price: 125
  //     },
  //     {
  //       id: 19,
  //       name: "Blue Jean Jacket",
  //       imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
  //       price: 90
  //     },
  //     {
  //       id: 20,
  //       name: "Grey Jean Jacket",
  //       imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
  //       price: 90
  //     },
  //     {
  //       id: 21,
  //       name: "Brown Shearling",
  //       imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
  //       price: 165
  //     },
  //     {
  //       id: 22,
  //       name: "Tan Trench",
  //       imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
  //       price: 185
  //     }
  //   ]
  // },
  womens: {
    id: 4,
    title: "womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Black Top",
        imageUrl:
          "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 17
      },
      {
        id: 24,
        name: "Red Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 26
      },
      {
        id: 25,
        name: "Blue Hoodie",
        imageUrl:
          "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 10
      },
      {
        id: 26,
        name: "Grey Sweater",
        imageUrl:
          "https://images.unsplash.com/photo-1556683944-ba658344ba06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 30
      },
      {
        id: 27,
        name: "Grey Tanktop",
        imageUrl:
          "https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 16
      },
      {
        id: 28,
        name: "Black Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1513369551131-f7824b746dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: 13
      },
      {
        id: 29,
        name: "Black Tshirt",
        imageUrl:
          "https://images.unsplash.com/photo-1503342484812-ee33283508a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 29
      }
    ]
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Tuxedo",
        imageUrl:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        price: 36
      },
      {
        id: 31,
        name: "Red Tuxedo",
        imageUrl:
          "https://images.unsplash.com/photo-1548917065-4212d1544e43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 18
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://images.unsplash.com/photo-1590710187581-0ca1d0f74854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 22
      },
      {
        id: 33,
        name: "Black Tshirt",
        imageUrl:
          "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        price: 21
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl:
          "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        price: 20
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1503341910231-c3d098fafba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        price: 35
      }
    ]
  }
};

export default SHOP_DATA;
