import { PostsContainer } from '../PostsContainer';

describe('PostsContainer', () => {
  it('is initially empty', () => {
    const postState = new PostsContainer();
    expect(postState.state.posts).toEqual([]);
  });

  it('can add a blog post', () => {
    const postState = new PostsContainer();
    const newPost = { title: 'Title', text: 'Text' };
    postState.addPost(newPost);
    expect(postState.state.posts).toEqual([newPost]);
  });

  it('can delete blog post by title', () => {
    const postState = new PostsContainer();
    const postToRemove = { title: 'Title', text: 'Text' };
    const otherPost = { title: 'Other title', text: 'Other text' };
    postState.addPost(postToRemove);
    postState.addPost(otherPost);
    expect(postState.state.posts).toEqual([postToRemove, otherPost]);
    
    postState.deletePost(postToRemove.title);
    expect(postState.state.posts).toEqual([otherPost]);
  });
});
