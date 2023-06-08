export class Blog {
    private _id: number;
    private _title: string;
    private _content: string;
  
    constructor(id: number, title: string, content: string) {
      this._id = id;
      this._title = title;
      this._content = content;
    }
  
    get id() {
      return this._id;
    }
  
    get title() {
      return this._title;
    }
  
    set title(title: string) {
      this._title = title;
    }
  
    get content() {
      return this._content;
    }
  
    set content(content: string) {
      this._content = content;
    }
}

// class Blog {
//     private _posts: Post[] = [];
  
//     addPost(post: Post) {
//       this._posts.push(post);
//     }
  
//     updatePost(post: Post) {
//       const index = this._posts.findIndex(item => item.id === post.id);
//       if (index > -1) {
//         this._posts[index] = post;
//       }
//     }
  
//     deletePost(id: number) {
//       this._posts = this._posts.filter(post => post.id !== id);
//     }
  
//     getAllPosts(){
//         console.table(this._posts);
//     }
// }

// const myBlog = new Blog()
// myBlog.addPost(new Post(1,'Xin chao','Tam biet'));
// myBlog.addPost(new Post(2,'Post','Post 2'));

// const updatedPost = new Post(2, 'Updated post', 'This post has been updated');
// myBlog.updatePost(updatedPost);

// myBlog.getAllPosts();