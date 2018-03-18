import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { css } from 'emotion';
import 'react-quill/dist/quill.snow.css';

const formStyle = css`
  display: flex;
  flex-direction: column;
`;

const formRowStyle = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 16px;
  width: 80%;
`;

const inputStyle = css`
  border-radius: 4px;
  height: 36px;
  padding: 0 8px;
  width: 30%;
`;

const createButtonStyle = css`
  background-color: #3146aa;
  color: #fff;
  cursor: pointer;
  height: 40px;
  width: 20%;
`;

const lastRowStyle = css`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  width: 80%;
`;

const errorAlertStyle = css`
  font-weight: 700;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  text-align: center;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

class BlogPostForm extends Component {
  state = {
    text: '', // TODO: get state from persistance layer
    title: '',
    error: null,
  };

  handleChange = text => {
    this.setState({ text });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleCreate = event => {
    event.preventDefault();

    const { title, text } = this.state;

    if (title === '') {
      this.setState({ error: 'Title can not be empty!' });
      return;
    }

    if (text === '') {
      this.setState({ error: 'What is the point of an empty blog post!?' });
      return;
    }

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
    this.setState({ title: '', text: '' });
  };

  // TODO: Handle autosave
  render() {
    return (
      <form onSubmit={this.handleCreate} className={formStyle}>
        {this.state.error && (
          <p className={errorAlertStyle}>{this.state.error}</p>
        )}
        <h1>Insert thoughts here...</h1>
        <div className={formRowStyle}>
          <label htmlFor="title">Title</label>
          <input
            className={inputStyle}
            value={this.state.title}
            onChange={this.handleTitleChange}
            type="text"
            name="title"
          />
        </div>
        <div className={formRowStyle}>
          <label htmlFor="content">Content</label>
          <ReactQuill
            name="content"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Start typing here..."
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'],

                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                [{ direction: 'rtl' }], // text direction

                [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],

                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ font: [] }],
                [{ align: [] }],

                ['clean'],
              ],
            }}
          />
        </div>
        <div className={lastRowStyle}>
          <button className={createButtonStyle} type="submit">
            Create
          </button>
        </div>
      </form>
    );
  }
}

export default BlogPostForm;
