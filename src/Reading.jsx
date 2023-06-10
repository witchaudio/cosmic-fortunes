import { useState } from 'react';
import './Reading.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const cards = [
  '/assets/fool.jpg',
  '/assets/magician.jpeg',
  '/assets/priestess.jpg',
  '/assets/empress.jpg',
  '/assets/emperor.jpg',
  '/assets/hierophant.jpg',
  '/assets/lovers.jpg',
  '/assets/chariot.jpg',
  '/assets/strength.jpg',
  '/assets/hermit.jpg',
  '/assets/wheel-fortune.jpg',
  '/assets/justice.jpg',
  '/assets/hanged-man.jpg',
  '/assets/death.jpg',
  '/assets/temperance1.jpg',
  '/assets/devil.jpg',
  '/assets/tower.jpg',
  '/assets/star.jpg',
  '/assets/moon.jpg',
  '/assets/sun.jpg',
  '/assets/judgment.jpg',
  '/assets/world1.jpg',
  '/assets/cups-page.jpg',
  '/assets/cups-knight.jpg',
  '/assets/cups-queen.jpg',
  '/assets/cups-king.jpg',
  '/assets/swords-page.jpg',
  '/assets/swords-knight.jpg',
  '/assets/swords-queen.jpg',
  '/assets/swords-king.jpg',
  '/assets/pentacles-page.jpg',
  '/assets/pentacles-knight.jpg',
  '/assets/pentacles-queen.jpg',
  '/assets/pentacles-king.jpg',
  '/assets/wands-page.jpg',
  '/assets/wands-knight.jpg',
  '/assets/wands-queen.jpg',
  '/assets/wands-king.jpg',
];

const cardDescriptions = [
  'THE FOOL (new beginnings, spontaneity, and a free spirit.)',
  'THE MAGICIAN (manifestation, resourcefulness, and inspired action.)',
  'THE HIGH PRIESTESS (intuition, sacred knowledge, and divine feminine.)',
  'THE EMPRESS (femininity, beauty, nature, and abundance.)',
  'THE EMPEROR (authority, empowerment, and structure.)',
  'THE HIEROPHANT (spiritual wisdom, religious beliefs, and institutions.)',
  'THE LOVERS (love, harmony, relationships, and choices.)',
  'THE CHARIOT (control, willpower, success, and determination.)',
  'STRENGTH (courage, persuasion, influence, and compassion.)',
  'THE HERMIT (soul searching, introspection, and inner guidance.)',
  'THE WHEEL OF FORTUNE (good luck, karma, destiny, and a turning point.)',
  'JUSTICE (fairness, truth, and law.)',
  'THE HANGED MAN (surrender, letting go, and new perspectives.)',
  'DEATH (endings, change, transformation, and transitions.)',
  'TEMPERANCE (balance, moderation, patience, and purpose.)',
  'THE DEVIL (shadow self, attachment, addiction, and sexuality.)',
  'THE TOWER (sudden change, upheaval, chaos, and awakening.)',
  'THE STAR (hope, faith, purpose, and spirituality.)',
  'THE MOON (illusion, fear, anxiety, and intuition.)',
  'THE SUN (positivity, warmth, success, and vitality.)',
  'JUDGMENT (rebirth, inner calling, and absolution.)',
  'THE WORLD (completion, integration, accomplishment, and travel.)',
  'PAGE OF CUPS (creative opportunities, curiosity, and possibility.)',
  'KNIGHT OF CUPS (creativity, romance, charm, and imagination.)',
  'QUEEN OF CUPS (compassionate, caring, and flow.)',
  'KING OF CUPS (emotional balance and diplomacy.)',
  'PAGE OF SWORDS (new ideas, thirst for knowledge, and new ways of communicating.)',
  'KNIGHT OF SWORDS (action-oriented, driven to succeed, and fast thinking.)',
  'QUEEN OF SWORDS (independent, unbiased judgment, and clear boundaries.)',
  'KING OF SWORDS (mental clarity, intellectual clarity, power, and authority.)',
  'PAGE OF PENTACLES (manifestation, financial opportunity, and skill development.)',
  'KNIGHT OF PENTACLES (hard work, productivity, and conservatism.)',
  'QUEEN OF PENTACLES (nurturing, practical, and providing financially.)',
  'KING OF PENTACLES (wealth, business, leadership, and abundance.)',
  'PAGE OF WANDS (inspiration, ideas, and free spirit.)',
  'KNIGHT OF WANDS (energy, passion, adventure, and impulsiveness.)',
  'QUEEN OF WANDS (courage, confidence, and determination.)',
  'KING OF WANDS (natural-born leader, vision, and honor.)',
];

function Chart() {
  const [name, setName] = useState('');
  const [reading, setReading] = useState([]);

  const generateFullReading = () => {
    // Shuffle the cards
    const shuffledCards = shuffleArray(cards);

    // Select the first 3 cards for the reading
    const readingCards = shuffledCards.slice(0, 3);

    // Set the reading state with the selected cards
    setReading(readingCards);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateFullReading();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '20px',
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <h2>Full Reading</h2>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s ease-in-out',
              color: 'black',
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '8px 10px', // Adjusted padding here
            color: '#fff',
            backgroundColor: '#6c63ff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          Get Full Reading!
        </button>
      </form>

      {reading.length > 0 && (
        <div className="card-container">
          <h3>Full Reading for {name}:</h3>
          <Slider {...settings}>
            {reading.map((cardUrl, index) => (
              <div key={index}>
                <div style={{ width: '200px', margin: '0 auto' }}>
                  <img src={cardUrl} alt={`Card ${index + 1}`} style={{ width: '100%' }} />
                </div>
                <p style={{ textAlign: 'center' }}>{cardDescriptions[cards.indexOf(cardUrl)]}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

// Helper function to shuffle an array
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default Chart;