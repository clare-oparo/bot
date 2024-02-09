import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ botArmy, onReleaseFromArmy, onDeleteBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {botArmy.length > 0 ? (
        botArmy.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onBotClick={() => onReleaseFromArmy(bot.id)}
            dischargeBot={() => onReleaseFromArmy(bot.id)} 
            onDeleteBot={() => onDeleteBot(bot.id)}
          />
        ))
      ) : (
        <p>Your army is empty. Click on a bot to enlist it!</p>
      )}
    </div>
  );
}

export default YourBotArmy;
