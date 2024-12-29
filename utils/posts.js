import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'data', 'posts');
const classification = getAllClassification();

export async function getSortedPostsData() {

  let allPostsData = [];
  Object.keys(classification).forEach(className => {

    const classDirectory = path.join(postsDirectory, className + '$' + classification[className])
    const fileNames = fs.readdirSync(classDirectory)

    fileNames.forEach(fileName => {
      const id = fileName.replace(/\.md$/, '');

      const fullPath = path.join(classDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);


      allPostsData.push({
        id,
        classRoute: className,
        classification: classification[className],
        ...matterResult.data,
      })

    })



  });

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
  let paths = [];
  Object.keys(classification).forEach(className => {
    const classDirectory = path.join(postsDirectory, className + '$' + classification[className])
    console.log(classDirectory);

    const fileNames = fs.readdirSync(classDirectory)

    fileNames.forEach(fileName => {
      paths.push({
        classification: className,
        id: fileName.replace(/\.md$/, ''),
      })
    })
  })


  return paths;

}

export function getPostData(className, id) {
  const fullPath = path.join(postsDirectory, className + '$' + classification[className], `${id}.md`);


  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
    content: matterResult.content
  };
}

export function getAllClassification() {
  const fileNames = fs.readdirSync(postsDirectory);
  const classification = {};

  for (let fileName of fileNames) {
    const splitName = fileName.split('$');
    const name = splitName[0];
    const label = splitName[1];

    classification[name] = label;

  }

  return classification;

}

