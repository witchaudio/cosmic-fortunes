
//card array
const cards = [
  './assets/fool.jpg',
  './assets/magician.jpeg',
  './assets/priestess.jpg',
  './assets/empress.jpg',
  './assets/emperor.jpg',
  './assets/hierophant.jpg',
  './assets/lovers.jpg',
  './assets/chariot.jpg',
  './assets/strength.jpg',
  './assets/hermit.jpg',
  './assets/wheel-fortune.jpg',
  './assets/justice.jpg',
  './assets/hanged-man.jpg',
  './assets/death.jpg',
  './assets/temperance1.jpg',
  './assets/devil.jpg',
  './assets/tower.jpg',
  './assets/star.jpg',
  './assets/moon.jpg',
  './assets/sun.jpg',
  './assets/judgment.jpg',
  './assets/world1.jpg',
  './assets/cups-page.jpg',
  './assets/cups-knight.jpg',
  './assets/cups-queen.jpg',
  './assets/cups-king.jpg',
  './assets/swords-page.jpg',
  './assets/swords-knight.jpg',
  './assets/swords-queen.jpg',
  './assets/swords-king.jpg',
  './assets/pentacles-page.jpg',
  './assets/pentacles-knight.jpg',
  './assets/pentacles-queen.jpg',
  './assets/pentacles-king.jpg',
  './assets/wands-page.jpg',
  './assets/wands-knight.jpg',
  './assets/wands-queen.jpg',
  './assets/wands-king.jpg',

  
]

// array of card descriptions
const cardDescriptions = [
'Your card is: THE FOOL (new beginnings, spontaneity, and a free spirit.)',
'Your card is: THE MAGICIAN (manifestation, resourcefulness, and inspired action.)',
'Your card is: THE HIGH PRIESTESS (intuition, sacred knowledge, and divine feminine.)',
'Your card is: THE EMPRESS (femininity, beauty, nature, and abundance.)',
'Your card is: THE EMPEROR (authority, empowerment, and structure.)',
'Your card is: THE HIEROPHANT (spiritual wisdom, religious beliefs, and institutions.)',
'Your card is: THE LOVERS (love, harmony, relationships, and choices.)',
'Your card is: THE CHARIOT (control, willpower, success, and determination.)',
'Your card is: STRENGTH (courage, persuasion, influence, and compassion.)',
'Your card is: THE HERMIT (soul searching, introspection, and inner guidance.)',
'Your card is: THE WHEEL OF FORTUNE (good luck, karma, destiny, and a turning point.)',
'Your card is: JUSTICE (fairness, truth, and law.)',
'Your card is: THE HANGED MAN (surrender, letting go, and new perspectives.)',
'Your card is: DEATH (endings, change, transformation, and transitions.)',
'Your card is: TEMPERANCE (balance, moderation, patience, and purpose.)',
'Your card is: THE DEVIL (shadow self, attachment, addiction, and sexuality.)',
'Your card is: THE TOWER (sudden change, upheaval, chaos, and awakening.)',
'Your card is: THE STAR (hope, faith, purpose, and spirituality.)',
'Your card is: THE MOON (illusion, fear, anxiety, and intuition.)',
'Your card is: THE SUN (positivity, warmth, success, and vitality.)',
'Your card is: JUDGMENT (rebirth, inner calling, and absolution.)',
'Your card is: THE WORLD (completion, integration, accomplishment, and travel.)',
'Your card is: THE PAGE OF CUPS (creative opportunities, curiosity, and possibility.)',
'Your card is: THE KNIGHT OF CUPS (creativity, romance, charm, and imagination.)',
'Your card is: THE QUEEN OF CUPS (compassionate, caring, and flow.)',
'Your card is: THE KING OF CUPS (emotional balance, and diplomacy.)',
'Your card is: THE PAGE OF SWORDS (new ideas, thirst for knowledge, and new ways of communicating.)',
'Your card is: THE KNIGHT OF SWORDS (action-oriented, driven to succeed, and fast thinking.)',
'Your card is: THE QUEEN OF SWORDS (independent, unbiased judgement, and clear boundaries.)',
'Your card is: THE KING OF SWORDS (mental clarity, intellectual clarity, power, and authority.)',
'Your card is: THE PAGE OF PENTACLES (manifestation, financial opportunity, and skill development.)',
'Your card is: THE KNIGHT OF PENTACLES (hard work, productivity, and conservatism.)',
'Your card is: THE QUEEN OF PENTACLES (nurturing, practical, and providing financially.)',
'Your card is: THE KING OF PENTACLES (wealth, business, leadership, and abundance.)',
'Your card is: THE PAGE OF WANDS (inspirations, ideas, and free spirit.)',
'Your card is: THE KNIGHT OF WANDS (energy, passion, adventure, and impulsiveness.)',
'Your card is: THE QUEEN OF WANDS (courage, confidence, and determination.)',
'Your card is: THE KING OF WANDS (natural-born leader, vision, and honor.)',


];

function insertCard() {
const i = Math.floor(Math.random() * cards.length);
const selectedCard = cards[i];
const selectedDescription = cardDescriptions[i];
$('#card-container').remove();
$('<div id="card-container" class="card"></div>').appendTo($('#parent'));
$('<p></p>').text(selectedDescription).appendTo($('#card-container'));
$(`<img src=${selectedCard} class="small-card rounded-lg">`).appendTo($('#card-container'));
}

function showHoroscope(sign) {
const horoscopes = {
  'Aries': 'Aries: You are Bravery, passion, spontaneity.',
  'Taurus': 'Taurus: You are Loyalty, commitment, and practicality.',
  'Gemini': 'Gemini: You are Curiosity, communication, play.',
  'Cancer': 'Cancer: You are Sensitivity, protection, and creativity.',
  'Leo': 'Leo: You are Performance, courage, and pride.',
  'Virgo': 'Virgo: You are attention to detail, structure, and pragmatism.',
  'Libra': 'Libra: You are Balance, harmony, and justice.',
  'Scorpio': 'Scorpio: You are Intensity, power, and depth.',
  'Sagittarius': 'Sagittarius: You are Adventure, exploration, and discovery.',
  'Capricorn': 'Capricorn: You are Ambition, responsibility, and success.',
  'Aquarius': 'Aquarius: You are Innovation, rebellion, and activism.',
  'Pisces': 'Pisces: You are Imagination, psychic powers, and mysticism.'
};

const compatibility = {
  'Aries': ['Gemini', 'Leo', 'Sagittarius', 'Aquarius'],
  'Taurus': ['Cancer', 'Virgo', 'Capricorn', 'Pisces'],
  'Gemini': ['Aries', 'Leo', 'Libra', 'Aquarius'],
  'Cancer': ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
  'Leo': ['Aries', 'Gemini', 'Libra', 'Sagittarius'],
  'Virgo': ['Taurus', 'Cancer', 'Scorpio', 'Capricorn'],
  'Libra': ['Gemini', 'Leo', 'Sagittarius', 'Aquarius'],
  'Scorpio': ['Cancer', 'Virgo', 'Capricorn', 'Pisces'],
  'Sagittarius': ['Leo', 'Aries', 'Aquarius', 'Libra'],
  'Capricorn': ['Pisces', 'Scorpio', 'Virgo', 'Taurus'],
  'Aquarius': ['Aries', 'Gemini', 'Libra', 'Sagittarius'],
  'Pisces': ['Taurus', 'Cancer', 'Scorpio', 'Capricorn'],
};

const horoscope = horoscopes[sign];
const compatibleSigns = compatibility[sign];

$('#horoscope').html(`<p>${horoscope}</p>`);
$('#compatibility').html(`<p>Compatible signs: ${compatibleSigns.join(', ')}</p>`);

insertCard();
}

// Show the footer when scrolling down and hide when scrolling up
window.addEventListener('scroll', function() {
  var footer = document.querySelector('.footer');
  if (window.pageYOffset > 0) {
    footer.style.display = 'block'; 
  } else {
    footer.style.display = 'none';  
  }
});
