import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import Roadmap from '@/components/roadmaps/roadmap';

import mixpanel from 'mixpanel-browser'

const RoadmapsPage: NextPageWithLayout = () => {
  mixpanel.track_pageview();
  return (
    <>
      <NextSeo
        title="Roadmaps"
        description="DefiOS - Scaling Layer for Open Source Collaboration."
      />
      <Roadmap />
    </>
  );
};

RoadmapsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default RoadmapsPage;
