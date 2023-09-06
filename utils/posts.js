import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { getColorFromURL } from 'color-thief-node';


const postsDirectory = path.join(process.cwd(), 'data/posts');

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    if (matterResult.data.image !== undefined) {

      const rgb = await getColorFromURL(encodeURI(matterResult.data.image))
      matterResult.data.rgb = rgb;

    }

    return {
      id,
      ...matterResult.data,
    };

  }));


  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });


}


export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    defaultContent:matterResult.content,
    contentHtml,
    ...matterResult.data,
  };
}
