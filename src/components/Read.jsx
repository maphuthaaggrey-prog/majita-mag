import { majitas } from '../assets/data/majitas';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Share from '../components/Share';
import { toISODate, getFullImageUrl, SITE_URL } from '../utils/seo';

const Update = () => {
  const { slug } = useParams();
  const majita = majitas.find((majita) => majita.slug === slug);

  const [sortedMajitas, setSortedMajitas] = useState([]);

  useEffect(() => {
    const sorted = [...majitas]
      .filter((update) => update.type === 'Majita Monday' && update.type !== 'Women Crush Wednesday')
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedMajitas(sorted);
  }, []);

  if (!majita) {
    return <div>Majita not found</div>;
  }

  const filteredMajitas = sortedMajitas.filter((item) => item.slug !== slug);

  const description = Array.isArray(majita.content)
    ? majita.content.map(c => (typeof c === 'string' ? c : '')).join(' ')
    : majita.content || `Get to know ${majita.name} on Majita Mag.`;
  const truncatedDescription = description.length > 160 ? `${description.substring(0, 160)}...` : description;

  const fullImageUrl = getFullImageUrl(majita.image);

  const canonicalUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : `${SITE_URL}/majitamonday/${majita.slug}`;

  return (
    <>
      <Helmet>
        <title>{majita.name} • Majita Mag</title>
        <meta name="description" content={truncatedDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={`${majita.name} • Majita Mag`} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:alt" content={majita.name} />
        <meta property="og:description" content={truncatedDescription} />
        <meta property="og:site_name" content="Majita Mag" />
        <meta property="og:locale" content="en_ZA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={majita.name} />
        <meta name="twitter:description" content={truncatedDescription} />
        <meta name="twitter:image" content={fullImageUrl} />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": majita.name,
            "image": fullImageUrl,
            "url": canonicalUrl,
            "datePublished": toISODate(majita.date),
            "publisher": {
              "@type": "Organization",
              "name": "Majita Mag",
              "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo (1).png` }
            }
          })}
        </script>
      </Helmet>

      <div id="container">
        <div id="creative-details">
          <h1 className="heading">Featuring {majita.name}</h1>
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
                        alt={`${majita.name} - additional photo ${i + 1}`}
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
          <div style={{ margin: '1.3em' }}>
            <Share />
          </div>

        </div>


        <div className="highlighted-creatives">
          <p className="heading" style={{ marginTop: '5em', marginBottom: '1em', fontWeight: '500' }}>
            Latest Stories
          </p>
        </div>

        <div id="more-stories">

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