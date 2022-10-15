---
title: '[少数派]Markdown主题样式'
description: '以红色为主体色的Markdown主题,本站配合 remark 使用,实现了基本的markdown样式'
date: '2022-9-11'
top: false
---
# title
## This is title#2



列表:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

> You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is 
> yes, then you should choose Static Generation.

`On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.`


### Javascript Code

    export async function getPostData(id) {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the id and contentHtml
        return {
            id,
            contentHtml,
            ...matterResult.data,
        };
    }

# 一级标题  
## 二级标题  
### 三级标题  
#### 四级标题  
##### 五级标题  
###### 六级标题  

***

<https://www.runoob.com>

这是一个链接 [菜鸟教程](https://www.runoob.com)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)



*斜体文本*  
_斜体文本_  
**粗体文本**  
__粗体文本__  
***粗斜体文本***  
___粗斜体文本___  