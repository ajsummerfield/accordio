import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AccordioWrapper from '../components/AccordioWrapper/AccordioWrapper';

export default function Home() {
  const items = [
    {
      heading: 'Heading 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus perspiciatis quia ea expedita, dolorem quod! Quibusdam consequuntur saepe necessitatibus nostrum quos dolores consectetur! Nam atque neque vero? Quo, velit.'
    },
    {
      heading: 'Heading 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus perspiciatis quia ea expedita, dolorem quod! Quibusdam consequuntur saepe necessitatibus nostrum quos dolores consectetur! Nam atque neque vero? Quo, velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus perspiciatis quia ea expedita, dolorem quod! Quibusdam consequuntur saepe necessitatibus nostrum quos dolores consectetur! Nam atque neque vero? Quo, velit.'
    },
    {
      heading: 'Heading 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati delectus perspiciatis quia ea expedita, dolorem quod! Quibusdam consequuntur saepe necessitatibus nostrum quos dolores consectetur! Nam atque neque vero? Quo, velit.'
    }
  ];

  return (
    <div>
      <Head>
        <title>accordio demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Demo</h1>
        <AccordioWrapper items={items}></AccordioWrapper>
      </div>
    </div>
  )
};
