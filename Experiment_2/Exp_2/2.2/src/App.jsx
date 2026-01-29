import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'Card 1',
      subtitle: 'Create what inspires you',
      description: 'Design beautiful interfaces with Bootstrap components. Create responsive layouts that work on all devices.'
    },
    {
      id: 2,
      title: 'Card 2',
      subtitle: 'Design your own path',
      description: 'Customize every aspect of your application. Use Bootstrap utilities to build exactly what you need.'
    },
    {
      id: 3,
      title: 'Card 3',
      subtitle: 'Let your ideas grow',
      description: 'Scale your projects with confidence. Bootstrap provides the foundation for any size application.'
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Bootstrap Card-Based Layout</h1>
      
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
                <p className="card-text">{card.description}</p>
                <button className="btn btn-primary">NEXT</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Current Card View</h4>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{cards[currentCard].title}</h5>
              <h6 className="card-subtitle mb-3 text-muted">{cards[currentCard].subtitle}</h6>
              <p className="card-text">{cards[currentCard].description}</p>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>← Previous</button>
                <button type="button" className="btn btn-secondary" onClick={handleNext}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
