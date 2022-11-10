## Basic Feature

### Pages

在 Next.js 中， pages 目录下的一个文件，对应着一个路由。 

```bash
pages/about.js ---- "/about"
```

同时也支持动态路由：

```bash
pages/posts/a.js ---- "/posts/a" 
pages/posts/b.js ---- "/posts/b" 
```

#### Pre-rendering

Next.js 默认会与渲染所有的页面， 也就是会提前生成所有页面的HTML 文件，而不是像 SPA 应用那样客户端渲染。 

##### Two forms Of Pre-rendering

Next.js 支持两种预渲染的方式： **Static Generation (静态生成)** 和 **Server-side Rendering(服务端渲染)** 。 两者区别在于 **什么时候** 生成 HTML 文件。

- **Static Generation (Recommand)** : 在打包阶段就生成了所有页面，并在 **每次请求** 被缓存复用。
- **Server-side Rendering** : **每次请求** 生成相应的 HTML 文件。

> Next.js 允许你自由选择每个页面的的预渲染方式，但应该尽可能的渲染 静态渲染， 具体如何抉择，可以以 “我是否能在用户请求之前，预渲染该页面？” 这个问题为参考。 如果是，则应该选择 Static Generation。



###### Static Generation 

静态生成的页面可以分为两大类： 页面的渲染 **需要/不需要** 额外的请求数据

1. Static Generation without data

2. Static Generation with data

   对于 **需要** 请求数据来进行页面渲染的页面， 也被区分为两个场景:

   - **场景1**： 如果 是 **content** 依赖额外数据：使用 `getStaticProps`

   - **场景2**：如果是 **paths** 依赖额外数据 : 使用 `getStaticPath` (通常配合`getStaticProps` 使用)

     ```tsx
     // 场景1 demo
     interface PostT {
       createdAt: string;
       title: string;
       id: string;
     }
     interface BlogFnT<T> {
       ({ postList }: { postList: T }): JSX.Element;
     }
     const Blog: BlogFnT<PostT[]> = function ({ postList }) {
       return (
         <ul>
           {postList.map((post) => (
             <li key={post.id}>{post.title}</li>
           ))}
         </ul>
       );
     };
     
     export async function getStaticProps() {
       const res = await fetch(
         'https://636c8b5ead62451f9fccb498.mockapi.io/postlist',
       );
       const postList = await res.json();
       return {
         props: { postList },
       };
     }
     export default Blog;
     ```

     

