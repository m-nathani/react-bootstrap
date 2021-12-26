import React, { useContext } from 'react';
import { SkeletonLoader } from 'components';
import { ViewportContext } from 'contexts/viewport';
import styles from './CommunicationSkeleton.module.scss';

const SideBar = () => {
  const { mobile } = useContext(ViewportContext);

  return (
    <>
      <aside className={styles.sidebar} style={{ height: mobile ? '300px' : '500px' }}>
        <SkeletonLoader.Blocks
          className={styles.languageSkeletonLoader}
          blockStyles={{
            height: '40px',
            width: '48px',
            marginRight: '10px',
            borderRadius: '15px',
          }}
          numBlocks={3}
          lines={['70%']}
        />
        {[...new Array(mobile ? 3 : 4)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`sidebar-block-${index}`} style={{ margin: '40px 20px' }}>
            <SkeletonLoader.Skeleton width="80%" />
            <br />
            <SkeletonLoader.Skeleton width="50%" />
          </div>
        ))}
      </aside>
      <footer className={styles.sidebarFooter}>
        <SkeletonLoader.Blocks
          blockStyles={{ height: '40px', width: '200px' }}
          numBlocks={1}
          lines={['100%']}
        />
        {!mobile && (
          <SkeletonLoader.Blocks
            blockStyles={{ height: '10px', width: '150px' }}
            numBlocks={1}
            lines={['100%']}
          />
        )}
      </footer>
    </>
  );
};

const Content = () => (
  <>
    <section className={styles.content}>
      <SkeletonLoader.Blocks
        className={styles.languageSkeletonLoader}
        blockStyles={{
          height: '40px',
          width: '48px',
          marginRight: '10px',
          borderRadius: '15px',
        }}
        numBlocks={3}
        lines={['70%']}
      />
      <div style={{ margin: '40px 20px' }}>
        <SkeletonLoader.Skeleton width="80%" />
      </div>
      <SkeletonLoader.Blocks
        blockStyles={{
          height: '100px',
          width: '80%',
          borderRadius: '8px',
        }}
        numBlocks={1}
        lines={['50%', '70%', '100%']}
      />
      <SkeletonLoader.List lines={2} />
    </section>
    <footer className={styles.footer}>
      <SkeletonLoader.Blocks
        blockStyles={{ height: '60px', width: '340px' }}
        numBlocks={1}
        lines={['70%', '100%']}
      />
    </footer>
  </>
);

const Mobile = () => (
  <main className={styles.communicationDetails}>
    <SideBar />
  </main>
);

const Desktop = () => (
  <main className={styles.communicationDetails}>
    <SideBar />
    <Content />
  </main>
);

export default () => {
  const { mobile } = useContext(ViewportContext);
  return mobile ? <Mobile /> : <Desktop />;
};
