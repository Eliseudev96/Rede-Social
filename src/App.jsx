import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';


const posts = [
  {
    id: 1, 
    author: {
    avatarUrl: 'https://pbs.twimg.com/profile_images/1567484613953462272/K8TLhsDi_400x400.jpg',
    name: "Eliseu Espada",
    role: "Dev Web" 
    },
    content: [
      {type: 'paragraph', content:'Fala galera',},
      {type: 'paragraph', content:'Acabei de subir meu novo projeto, se liga ae',},
      {type: 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-11-03 20:00:00'),
  },
  {
    id: 2, 
    author: {
    avatarUrl: 'https://pbs.twimg.com/profile_images/1567484613953462272/K8TLhsDi_400x400.jpg',
    name: "Eliseu Espada",
    role: "Dev Web" 
    },
    content: [
      {type: 'paragraph', content:'Fala galera',},
      {type: 'paragraph', content:'Acabei de subir meu novo projeto, se liga ae',},
      {type: 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-11-10 20:00:00'),
  }
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
