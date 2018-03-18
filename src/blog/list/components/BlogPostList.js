import React, { Fragment } from 'react';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

const tableStyle = css`
  border-collapse: collapse;
`;

const tableHeaderCellStyle = css`
  padding: 12px 6px;
  text-align: left;
`;

const tableHeaderRowStyle = css`
  border-bottom: 1px solid #111;
`;

const tableRowStyle = css`
  &:nth-child(odd) {
    background-color: #dafbf2;
  }
`;

const tableCellStyle = css`
  padding: 16px 6px;
  text-align: left;
`;

const tableCellCenterStyle = css`
  padding: 16px 6px;
  text-align: center;
`;

const deleteButtonStyle = css`
  cursor: pointer;
`;

const publishButtonStyle = css`
  cursor: pointer;
`;

const BlogPostList = ({ posts = [] }) => (
  <table className={tableStyle}>
    <thead>
      <tr className={tableHeaderRowStyle}>
        <th className={tableHeaderCellStyle}>Title</th>
        <th className={tableHeaderCellStyle}>Created At</th>
        <th className={tableHeaderCellStyle}>Updated At</th>
        <th className={tableHeaderCellStyle}>Published At</th>
        <th className={tableHeaderCellStyle} />
      </tr>
    </thead>
    <tbody>
      {posts.map(post => (
        <tr className={tableRowStyle} key={post.title}>
          <td className={tableCellStyle}>{post.title}</td>
          <td className={tableCellCenterStyle}>
            {post.createdAt ? (
              format(post.createdAt, 'YYYY-MM-DD HH:mm')
            ) : (
              <Fragment>&mdash;</Fragment>
            )}
          </td>
          <td className={tableCellCenterStyle}>
            {post.updatedAt ? (
              format(post.updatedAt, 'YYYY-MM-DD HH:mm')
            ) : (
              <Fragment>&mdash;</Fragment>
            )}
          </td>
          <td className={tableCellCenterStyle}>
            {post.publishedAt ? (
              format(post.publishedAt, 'YYYY-MM-DD HH:mm')
            ) : (
              <Fragment>&mdash;</Fragment>
            )}
          </td>
          <td className={tableCellStyle}>
            Edit |{' '}
            <Link to={`/preview/${encodeURIComponent(post.title)}`}>Show</Link>{' '}
            | <button className={publishButtonStyle}>Publish</button> |{' '}
            <button
              className={deleteButtonStyle}
              onClick={() => props.onDelete && props.onDelete(post.title)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BlogPostList;
