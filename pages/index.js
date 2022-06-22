import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image';
import hero from '../public/benjamin-voros-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="row-start-1 col-start-2 col-end-3...">
            <a href="https://twitter.com/saurabh_a_">
              <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" />
            </a>
          </div>
          <div className="row-start-1  col-start-3 col-end-4...">
            <a href="https://linkedin.com/in/saurabhadhikari">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
            </a>
          </div>
          <div className="row-start-1 col-start-4 col-end-5 ...">
            <a href="https://instagram.com">
              <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
            </a>
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl text-center mb-12">
        </h1>
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          <a title="photo by Benajmin Voros, unsplash.com/@vorosbenisop">
          <Image layout={"responsive"} placeholder="blur" src={hero} alt="Hero" width={800} height={400} />
          </a>
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
