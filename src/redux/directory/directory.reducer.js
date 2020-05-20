const INITAL_STATE = {
    sections:[{
        title:'Hats',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        linkUrl:'shop/hats',
        id:1
    },
    {
        title:'Jackets',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        linkUrl:'shop/jackets',
        id:2
    },
    {
       title:'Sneakers',
       imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
       linkUrl:'shop/sneakers',
       id:3 
    },
    {
        title:'Womens',
        imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
        linkUrl:'shop/womens',
        size:'large',
        id:4
    },
    {
        title:'Mens',
        imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
        linkUrl:'shop/mens ',
        size:'large',
        id:5
    }
]
}

const directoryReducer = (state = INITAL_STATE,action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;