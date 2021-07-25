import Head from 'next/head';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <h1 className="title">About</h1>
      <section>
        <h2 className="center">Hello there 👋🏽</h2>
        <p>
          My name is Will and I am a web developer passionate about creating
          user experiences with focus on modern technologies, interesting
          design, and performance. I am a pretty curious (in the inquisitive
          sense 😅) person who enjoys solving problems, which has served me well
          as a self taught developer.
        </p>
        <p>
          It has been around 5 years since my first 'Hello World' and now nearly
          3 years of professional experience. I have learnt alot but feel like
          there is soooo much more out there. I am now looking for an
          opportunity within a supportive team, to develop and build exciting
          products with wide application and continue to grow as a developer.
        </p>

        <p>
          I try to stay to stay up-to-date with the latest trends within the
          industry through a combination of tech twitter and youtube. Currently
          delving into the JAMstack and enjoy trying out wonderful tools and
          frameworks available. This site has been made using NextJS, Contentful
          which is a Headless CMS and some good ol' sass.
        </p>
        <p>
          Previously I have worked in varied roles across Local Government and
          bring experience of project management, performance management,
          finance and formal report writing.
        </p>
      </section>
    </Layout>
  );
}
