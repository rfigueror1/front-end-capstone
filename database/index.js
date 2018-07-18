var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var postSchema = mongoose.Schema({
  user_name: String,
  post_text: String,
  num_likes: Number,
  image_url: String,
  });
  var Post = mongoose.model('Post', postSchema);
  module.exports.Post = Post;
  // Post.create({
  //   user_name:'rfigueror',
  //   post_text: 'this shoes are awesome',
  //   num_likes: 70,
  //   image_url: 'www.mockingurl.com'
  //   });
});

//var newPost = new Post()
