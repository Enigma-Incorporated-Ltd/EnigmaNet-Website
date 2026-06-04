import React from 'react';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { CircleCheck } from '@/assets/svgs/solutions/remote-work-&-branch/usecase';

type Feature = {
  title?: string;
  description?: string;
};

type Props = {
  title?: string;
  description?: string;
  features: Feature[];
  maxWidth?: string;
};

const FeatureItem: React.FC<Feature> = ({ title, description }) => (
  <div className="d-flex gap-3 feature-item mb-1">
    <div className="flex-shrink-0 mt-1">
      <CircleCheck />
    </div>

    <div
      className="text-black"
      style={{
        color: '#000',
        fontFeatureSettings: "'liga' off, 'clig' off",
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '150%',
        width: '100%',
      }}
    >
      {title && (
        <span>
          {title} <br />
        </span>
      )}
      {description && <span>{description}</span>}
    </div>
  </div>
);

const ContentListSection: React.FC<Props> = ({
  title,
  description,
  features,
  
}) => {
  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '80px 0',
      }}
    >
      <div className="container">
        <HeaderTitle title={title} variant="gold" className="text-center" />

        {description && (
          <p
            className="px-lg-5  px-0"
            style={{
              color: '#000',
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: 'center',
              fontSize: '20px',

              fontWeight: 400,
              lineHeight: '150%',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {description}
          </p>
        )}

        <div className="mt-5 px-lg-5  pt-5 px-0">
          {features.map((feature, index) => (
            <FeatureItem key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentListSection;
