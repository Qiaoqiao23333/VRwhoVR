import React from 'react'
import './AttractionList.css'

const attractions = [
  'Festung Hohensalzburg',
  'Schloss Hellbrunn & Wasserspiele',
  'Mozarts Geburtshaus',
  'Mozarts Wohnhaus',
  'DomQuartier Salzburg',
  'Salzburger Festspielhäuser',
  'Haus der Natur',
  'Katakomben St. Peter',
  'Mozart Ton- und Filmsammlung',
  'Mönchsberg Aufzug',
  'Museum der Moderne Salzburg',
  'Salzburg Stadt Schiff-Fahrt',
  'Salzburg Museum & Panorama',
  'Salzburger Freilichtmuseum',
  'Salzburger Weihnachtsmuseum',
  'Spielzeugmuseum Salzburg',
  'Stiegl-Brauwelt',
  'Untersbergbahn',
  'Volkskundemuseum (Monatsschlössl)',
  'Zoo Salzburg Hellbrunn'
]

function AttractionList({ onAttractionClick, selectedAttraction }) {
  return (
    <div className="attraction-list">
      {attractions.map((attraction, index) => {
        const isSelected = selectedAttraction === attraction
        return (
          <div key={index} className="attraction-item-container">
            <div 
              className={`attraction-item ${isSelected ? 'attraction-item-selected' : ''}`}
              onClick={() => onAttractionClick(attraction)}
            >
              {attraction}
            </div>
            {index < attractions.length - 1 && <div className="attraction-divider"></div>}
          </div>
        )
      })}
    </div>
  )
}

export default AttractionList

