import { Container } from 'unstated';

export class PostsContainer extends Container {
  state = { posts: [] };

  addPost(post) {
    this.setState({ posts: this.state.posts.concat([post]) })
  }

  deletePost(title) {
    this.setState({ posts: this.state.posts.filter(post => post.title !== title) });
  }
}
