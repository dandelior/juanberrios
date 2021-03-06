import Head from 'next/head'
import MetaTags from '../../components/MetaTags'
import BlogPreview from '../../parts/blogPreview'

import styles from '../../styles/parts/PresentationWrapper.module.sass'

import { getAllPosts } from '../../lib/api'

export default function Blog({ posts }) {

    const allPosts = posts.allPosts;

  return (
    <>
        <Head>
            <title>Blog — Juan Berrios</title>
            <MetaTags 
              title="Blog — Juan Berrios"
              description="Aquí escribo sobre diseño, código, música y otras cosas"
              image="/img/og_image.jpg"
              url="blog/"
            />
        </Head>

        <section className={`${styles.presentationWrapper} ${styles.noBottom}`}>
            <div className={styles.presentationA}>
            <div className={styles.heading}>
                <p>Blog</p>
                <h1>
                    Escribo sobre <span className="highlight-color">diseño</span>, <span className="highlight-color">código</span>, <span className="highlight-color">música</span> y <span className="highlight-color">otras cosas</span>
                </h1>
            </div>
            </div>
            <div className={styles.presentationB}>
            <div className={styles.arrowWrapper}>
                <svg className={styles.arrow} width="85" height="221" viewBox="0 0 85 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693" strokeWidth="3"/>
                </svg>
            </div>
            </div>
        </section>

        <BlogPreview hasLoadingMore={true} posts={allPosts} />
    </>
  )
}

export async function getStaticProps() {

    const allPosts = getAllPosts([
      'title',
      'slug',
      'excerpt',
    ])
  
    return {
      props: { 
        posts: {
          allPosts
        }
      },
    }
    
  }