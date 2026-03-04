import React from 'react';
import { useParams } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import AnimatedButton from '../../components/common/AnimatedButton';

import { ARTICLES_DATA } from '../../data/insights.data';

const ArticleDetail: React.FC = () => {
  const { id } = useParams() as { id: string };
  const article = ARTICLES_DATA.find((a) => a.id === id) || ARTICLES_DATA[0];

  return (
    <>
      <PageHero
        title={article.title}
        subtitle={article.date}
        image={article.image}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <p className="text-neutral-body leading-relaxed mb-8">
            {article.content}
          </p>
          <AnimatedButton variant="outline" onClick={() => window.history.back()}>
            ← Back to Insights
          </AnimatedButton>
        </div>
      </section>
    </>
  );
};

export default ArticleDetail;
