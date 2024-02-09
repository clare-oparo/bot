import React from 'react';

const BotCard = ({ bot, onBotClick, dischargeBot, onDeleteBot }) => {
  const handleDischargeClick = (e) => {
    e.stopPropagation(); 
    dischargeBot && dischargeBot(bot.id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); 
    onDeleteBot && onDeleteBot(bot.id);
  };

  return (
    <div className="bot-card" onClick={() => onBotClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>Name: {bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      
      {dischargeBot && <button onClick={handleDischargeClick}>Discharge from Army</button>}
      
    </div>
  );
}

export default BotCard;
