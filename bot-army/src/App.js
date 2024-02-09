import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const addToArmy = (bot) => {
    if (!botArmy.some(armyBot => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseFromArmy = (botId) => {
    setBotArmy(botArmy.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (event, botId) => {
    event.stopPropagation();
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== botId));
        releaseFromArmy(botId);
      })
      .catch(error => console.error('Error removing bot:', error));
  };
  

  return (
    <div className="App">
      <h1>**Bot Battlr**</h1>
      <h2>Build your own Bot Army!</h2>
      <h3>Click the image to enlist a bot</h3>
      <BotCollection bots={bots} onAddToArmy={addToArmy} />
      <YourBotArmy botArmy={botArmy} onReleaseFromArmy={releaseFromArmy} onDischargeBot={dischargeBot} />
    </div>
  );
}

export default App;
