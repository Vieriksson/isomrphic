export const fetchTopBlogPosts = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(blogposts), 300)
  })

const blogposts = [
  {
    id: 1,
    title: 'Title 1',
    spoiler: 'Ehasdj asd cx camoois cma mociasc',
    date: '2018-12-16'
  },
  {
    id: 2,
    title: 'Title 2',
    spoiler: 'Adfijdsoflsjdfl dlkfj sidfj sd',
    date: '2018-12-15'
  },
  {
    id: 3,
    title: 'Title 3',
    spoiler: 'Yasidahsdi asd asd oljvksdj vs',
    date: '2018-12-12'
  },
  {
    id: 4,
    title: 'Title 4',
    spoiler: 'Nasduhaisd asd asdop ifeosd dkf  sdf sdf',
    date: '2018-12-09'
  },
  {
    id: 5,
    title: 'Title 5',
    spoiler: 'Pasdahsid eroasjda asd dks asdasd',
    date: '2018-12-04'
  },
  {
    id: 6,
    title: 'Title 6',
    spoiler: 'Jasduhas jasdasidpvokspd so',
    date: '2018-12-02'
  },
  {
    id: 7,
    title: 'Title 7',
    spoiler: 'Haspdoiaps asd iauhsd asdh asd aa',
    date: '2018-12-01'
  }
]
