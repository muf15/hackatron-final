import React from 'react';
import '../../Styles/Homepage/Cards.CSS';

const Cards = () => {
  const cardData = [
    {
      image: 'https://storge.pic2.me/c/1360x800/583/61ad131f331660.78573734.jpg',
      title: 'Hisma Desert',
      description: 'The Hisma desert is a true marvel of nature and a special desert oasis.',
      traveler: 'Wazeem Al Mulk',
      travelerRole: 'Traveler',
      size: 'large'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2022/09/16/15/53/city-7458934_1280.jpg',
      title: 'Kafd World Trade Centre, Riyadh.',
      description: "The Towering Structure stands as a testament to Saudi Arabia's vision for a thriving business hub.",
      traveler: 'Benjamin Voros',
      travelerRole: 'Traveler',
      size: 'medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/05/03/22/35/pagoda-1370346_960_720.jpg',
      title: 'Al Qarah Mountain',
      description: 'The Mountain\'s attractive rock formations inviting adventurers to explore its hidden treasure.',
      traveler: 'John Towner',
      travelerRole: 'Traveler',
      size: 'medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/08/01/21/06/shwezigon-pagoda-6515356_1280.jpg',
      title: 'AlUla',
      description: 'AlUla is located deep in the desert in the northwest of Saudi Arabia.',
      traveler: 'Garrett Parker',
      travelerRole: 'Traveler',
      size: 'large'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/03/27/12/45/woman-2178480_1280.jpg',
      title: 'The best of Tabuk',
      description: 'Tabuk absorbed Tabouk, the capital city of the Tabuk Region in northwest Saudi Arabia.',
      traveler: 'Jonatan Pie',
      travelerRole: 'Influencer',
      size: 'small'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_1280.jpg',
      title: 'The best things To do in Taif',
      description: 'Taif is a city and governorate in the Mecca Region of Saudi Arabia.',
      traveler: 'Jennifer Gottardi',
      travelerRole: 'Traveler',
      size: 'medium'
    }
  ];

  return (
    <div className="cards-container">
      <div className="partners">
        <img src="Assets/un-tourism-e1708549146442.png" alt="Saudia" />
       
        <img src="Assets\unicef-e1708549110560.png" alt="STC" />
        <img src="Assets/un-tourism-e1708549146442.png" alt="Saudia" />
       
       <img src="Assets\unicef-e1708549110560.png" alt="STC" />
     
      </div>
      <h2 className="section-title">Best Destinations</h2>
      <p className="section-subtitle">
        From cozy cafes to stunning trails, secret spots are waiting for your exploration. Pin your favorites and share with fellow adventurers as you create your own map of local treasures!
      </p>
      <div className="cards-grid">
        {cardData.map((card, index) => (
          <div className={`card ${card.size}`} key={index}>
            <img className="card-image" src={card.image} alt={card.title} />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <div className="card-traveler">
                <img className="traveler-image" src="path-to-traveler-image.jpg" alt={card.traveler} />
                <div>
                  <p className="traveler-name">{card.traveler}</p>
                  <p className="traveler-role">{card.travelerRole}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
