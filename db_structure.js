{ // one shoe
 id: Number,
 name: String,
 images : [/*urls to AWS hosted service */],
 price: Number,
 description: String,
 reviews: [
    { // review one
      user: String,
      raiting: Number
      description: String,
    }
  ],
  instagramPosts: [/* starts blank but you search and save to databse */],
  video: String (url),
  relatedShoes: [shoe1Id, show2Id, ...]
}
