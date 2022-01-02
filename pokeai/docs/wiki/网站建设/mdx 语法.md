
## Markdown Frontmatter {#markdown-frontmatter}

> 参考：https://docusaurus.io/zh-CN/docs/markdown-features

Markdown documents can use the following Markdown FrontMatter metadata fields, enclosed by a line `---` on either side.

<!--truncate-->

Accepted fields:

<APITable>

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `authors` | `Authors` | `undefined` | List of blog post authors (or unique author). Read the [`authors` guide](../../blog.mdx#blog-post-authors) for more explanations. Prefer `authors` over the `author_*` FrontMatter fields, even for single author blog posts. |
| `author` | `string` | `undefined` | ⚠️ Prefer using `authors`. The blog post author's name. |
| `author_url` | `string` | `undefined` | ⚠️ Prefer using `authors`. The URL that the author's name will be linked to. This could be a GitHub, Twitter, Facebook profile URL, etc. |
| `author_image_url` | `string` | `undefined` | ⚠️ Prefer using `authors`. The URL to the author's thumbnail image. |
| `author_title` | `string` | `undefined` | ⚠️ Prefer using `authors`. A description of the author. |
| `title` | `string` | Markdown title | The blog post title. |
| `date` | `string` | File name or file creation time | The blog post creation date. If not specified, this can be extracted from the file or folder name, e.g, `2021-04-15-blog-post.mdx`, `2021-04-15-blog-post/index.mdx`, `2021/04/15/blog-post.mdx`. Otherwise, it is the Markdown file creation time. |
| `tags` | `Tag[]` | `undefined` | A list of strings or objects of two string fields `label` and `permalink` to tag to your post. |
| `draft` | `boolean` | `false` | A boolean flag to indicate that the blog post is work-in-progress and therefore should not be published yet. However, draft blog posts will be displayed during development. |
| `hide_table_of_contents` | `boolean` | `false` | Whether to hide the table of contents to the right. |
| `toc_min_heading_level` | `number` | `2` | The minimum heading level shown in the table of contents. Must be between 2 and 6 and lower or equal to the max value. |
| `toc_max_heading_level` | `number` | `3` | The max heading level shown in the table of contents. Must be between 2 and 6. |
| `keywords` | `string[]` | `undefined` | Keywords meta tag, which will become the `<meta name="keywords" content="keyword1,keyword2,..."/>` in `<head>`, used by search engines. |
| `description` | `string` | The first line of Markdown content | The description of your document, which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines. |
| `image` | `string` | `undefined` | Cover or thumbnail image that will be used when displaying the link to your post. |
| `slug` | `string` | File path | Allows to customize the blog post url (`/<routeBasePath>/<slug>`). Support multiple patterns: `slug: my-blog-post`, `slug: /my/path/to/blog/post`, slug: `/`. |

</APITable>

```typescript
type Tag = string | {label: string; permalink: string};

// An author key references an author from the global plugin authors.yml file
type AuthorKey = string;

type Author = {
  key?: AuthorKey;
  name: string;
  title?: string;
  url?: string;
  image_url?: string;
};

// The FrontMatter authors field allows various possible shapes
type Authors = AuthorKey | Author | (AuthorKey | Author)[];
```

Example:

```yml
---
title: Welcome Docusaurus v2
authors:
  - slorber
  - yangshun
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
tags: [hello, docusaurus-v2]
description: This is my first post on Docusaurus 2.
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---
A Markdown blog post
```

## Referencing other documents {#referencing-other-documents}

If you want to reference another document file, you could use the relative path of the document you want to link to.

Docusaurus will convert the file path to be the final document url path (and remove the `.md` extension).

For example, if you are in `folder/doc1.md` and you want to reference `folder/doc2.md`, `folder/subfolder/doc3.md` and `otherFolder/doc4.md`:

```md
I am referencing a [document](doc2.md).

Reference to another [document in a subfolder](subfolder/doc3.md).

[Relative document](../otherFolder/doc4.md) referencing works as well.
```

:::tip

It is better to use relative file paths links instead of relative links:

- links will keep working on the GitHub interface
- you can customize the document slugs without having to update all the links
- a versioned doc will link to another doc of the exact same version
- relative links are very likely to break if you update the [`trailingSlash` config](../../api/docusaurus.config.js.md#trailing-slash)

:::

## Details

Markdown can embed HTML elements, and [`details`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) HTML elements are beautifully styled:

```md
### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>
```

```mdx-code-block
<BrowserWindow>

<h3>Details element example</h3>

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

</BrowserWindow>

<br/>
```

:::note

In practice, those are not really HTML elements, but React JSX elements, which we'll cover next!

:::

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

:::