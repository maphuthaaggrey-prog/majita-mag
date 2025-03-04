import { majitas } from '../assets/data/majitas';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      .filter((update) => update.type === 'Majita Monday')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedMajitas(sorted);
  }, []);

  // Filter out the currently displayed majita from the sortedMajitas list
  const filteredMajitas = sortedMajitas.filter((item) => item.slug !== slug);

  return (
    <>
        <Helmet>
            <title>{majita.name} | Majita Mag</title>
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


        <div className="highlighted-creatives">
          <p className="heading" style={{ marginTop: '5em', marginBottom: '1em', fontWeight: '500' }}>
            Latest Stories
          </p>
        </div>

        <div id="more-stories">
          {/* Display other majitas except the currently viewed one */}
          {filteredMajitas.slice(0, 4).map((majita) => (
            <Link to={`/majitamonday/${majita.slug}`} key={majita.id}>
              <img
                src={majita.image}
                loading="lazy"
                alt={majita.name}
                id="more-image"
              />
              <p className="majita-type">{majita.name}</p>
              <p className="majita-date">
                {majita.date} • {majita.type}
              </p>
            </Link>
          ))}
       
        </div>
       

        <Link
          to="/majitamonday"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3em', color: 'black' }}
        >
          <button
            style={{
              cursor: 'pointer',
              backgroundColor: 'white',
              borderRadius: '100px',
              height: '30px',
              fontWeight: '500',
              width: '150px',
              border: 'none',
            }}
          >
            Browse all
          </button>
        </Link>
      </div>
    </>
  );
};

export default Update;
