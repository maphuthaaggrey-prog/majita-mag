import { majitas } from '../assets/data/majitas';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Share from '../components/Share';

const Update = () => {
  const { slug } = useParams();
  const majita = majitas.find((majita) => majita.slug === slug);

  if (!majita) {
    return <div>Majita not found</div>;
  }

  const [sortedMajitas, setSortedMajitas] = useState([]);
  useEffect(() => {
    const sorted = [...majitas]
      .filter((update) => update.type === 'Majita Monday' && update.type !== 'Women Crush Wednesday')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedMajitas(sorted);
  }, []);


  const filteredMajitas = sortedMajitas.filter((item) => item.slug !== slug);

  return (
    <>
      <Helmet>
        <title>{majita.name} • Majita Mag</title>
        <meta name="description" content={majita.content} />
        <meta property="og:title" content={majita.name} />
        <meta property="og:type" content={majita.type} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={majita.image} />
        <meta property="og:description" content={majita.content} />
      </Helmet>

      <div id="container">
        <div id="creative-details">
          <p className="heading">Featuring {majita.name}</p>
          <img id="creative-image" src={majita.image} alt={majita.name} />
          <div id="tracklist" className="track-listing">
            {majita.questions.map((trackItem, index) => (
              <div key={index}>
                <p id="question">{trackItem.question}</p>
                {Array.isArray(trackItem.answer) ? (
                  trackItem.answer.map((item, i) =>
                    typeof item === 'string' ? (
                      <p id="answer" key={i}>
                        {item}
                      </p>
                    ) : (
                      <img
                        key={i}
                        src={item.image}
                        alt="Additional content"
                        id="creative-img"
                      />
                    )
                  )
                ) : (
                  <p id="answer">{trackItem.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div style={{ margin: '1.3em'}}>
            <Share />
          </div>
        
        </div>



      </div>
    </>
  );
};

export default Update;
