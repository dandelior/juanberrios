import Head from 'next/head'
import BlogPreview from '../../parts/blogPreview'

import styles from '../../styles/parts/PresentationWrapper.module.sass'

export default function Blog() {
  return (
    <>
        <Head>
            <title>Blog — Juan Berrios</title>
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
                <div className={styles.arrow}></div>
            </div>
            </div>
        </section>

        <BlogPreview hasLoadingMore={true} />

    </>
  )
}