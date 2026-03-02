type StoryStep = {
  year: string;
  description: string;
};

const storySteps: StoryStep[] = [
  {
    year: '2018',
    description:
      'Nibh in natoque ut blandit est sed massa quam massa. Nisi eu aenean tristique sed tortor tincidunt.',
  },
  {
    year: '2019',
    description:
      'Orci, lorem rutrum euismod est urna commodo. Dictum fringilla ac sit egestas pharetra tellus in tristique.',
  },
  {
    year: '2021',
    description:
      'Quisque felis in augue dolor. Risus, id pretium vitae a adipiscing adipiscing posuere maecenas.',
  },
  {
    year: '2023',
    description:
      'Nunc, sit tempus, varius est duis. Elementum commodo tincidunt mi quis arcu lorem consequat.',
  },
];

const Story = () => {
  return (
    <section className="container mb-5 pt-md-1 pt-lg-4 pt-xl-5">
      <div
        className="mt-4 py-2 pb-sm-3 pb-md-4 pb-lg-5 mx-auto text-center"
        style={{ maxWidth: '46.625rem' }}
      >
        <h2 className="h1 mb-4">In 2017 we changed the game</h2>
        <p className="mb-4">
          Ac vel feugiat elementum turpis. Euismod eget aliquam non, aliquam dui augue amet lectus
          donec adipiscing quis molestie eget urna.
        </p>
      </div>

      <div
        className="steps steps-center steps-sm steps-horizontal-lg"
        style={{
          ['--si-steps-number-size-sm' as string]: '1.5rem',
          ['--si-steps-number-inner-size-sm' as string]: '1rem',
          ['--si-steps-number-bg' as string]: 'rgba(99,102,241,.2)',
          ['--si-steps-number-inner-bg' as string]: '#6366f1',
        }}
      >
        {storySteps.map((step, idx) => (
          <div key={idx} className="step w-100 mx-auto" style={{ maxWidth: '26rem' }}>
            <div className="step-number">
              <div className="step-number-inner"></div>
            </div>
            <div className="step-body">
              <h3 className="mb-3">{step.year}</h3>
              <p className="mb-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Story;
