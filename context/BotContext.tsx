import React, { createContext, useState, useEffect, ReactNode } from "react";
import { startBot } from "../bot/whatsappBot";

interface BotContextType {
  bot: any;
  connected: boolean;
}

export const BotContext = createContext<BotContextType>({
  bot: null,
  connected: false,
});

export const BotProvider = ({ children }: { children: ReactNode }) => {
  const [bot, setBot] = useState<any>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const initBot = async () => {
      const botInstance = await startBot();
      setBot(botInstance);
      setConnected(true);
    };
    initBot();
  }, []);

  return (
    <BotContext.Provider value={{ bot, connected }}>
      {children}
    </BotContext.Provider>
  );
};
