const INITIAL_STATE = {
  sections: [
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1535891169584-75bcaf12e964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut ea nostrum excepturi dolor, aut facere architecto esse minima veritatis, non fuga similique nam doloribus?",
      id: 5,
      linkUrl: "shop/mens"
    },
    {
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut ea nostrum excepturi dolor, aut facere architecto esse minima veritatis, non fuga similique nam doloribus?",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "shoes",
      imageUrl:
        "https://images.unsplash.com/photo-1587502374301-1c46349e3608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut ea nostrum excepturi dolor, aut facere architecto esse minima veritatis, non fuga similique nam doloribus?",
      id: 3,
      linkUrl: "shop/shoes"
    },
    {
      title: "accessories",
      imageUrl:
        "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1361&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut ea nostrum excepturi dolor, aut facere architecto esse minima veritatis, non fuga similique nam doloribus?",
      id: 1,
      linkUrl: "shop/accessories"
    }
    // {
    //   title: "jackets",
    //   imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut ea nostrum excepturi dolor, aut facere architecto esse minima veritatis, non fuga similique nam doloribus?",
    //   id: 2,
    //   linkUrl: "shop/jackets"
    // }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
