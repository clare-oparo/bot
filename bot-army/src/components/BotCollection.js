import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, onAddToArmy }) => {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onBotClick={onAddToArmy} />
      ))}
    </div>
  );
}

export default BotCollection;
