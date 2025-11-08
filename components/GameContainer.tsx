"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WelcomeScreen from "./WelcomeScreen";
import ModeSelection from "./ModeSelection";
import WordPuzzle from "./modes/WordPuzzle";
import TraderQuiz from "./modes/TraderQuiz";
import ChallengeMode from "./modes/ChallengeMode";

export default function GameContainer() {
  const [playerName, setPlayerName] = useState<string>("");
  const [playerId, setPlayerId] = useState<number | null>(null);
  const [deviceId, setDeviceId] = useState<string>("");
  const [currentMode, setCurrentMode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem("bulkmind_player_name");
    const storedDeviceId = localStorage.getItem("bulkmind_device_id") || generateDeviceId();
    
    setDeviceId(storedDeviceId);
    localStorage.setItem("bulkmind_device_id", storedDeviceId);

    if (storedName) {
      setPlayerName(storedName);
      // Comment out database fetching - using localStorage only
      // fetchOrCreatePlayer(storedName, storedDeviceId);
      
      // Generate a consistent playerId from deviceId for localStorage mode
      const localPlayerId = generateLocalPlayerId(storedDeviceId);
      setPlayerId(localPlayerId);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const generateDeviceId = () => {
    return `device_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  // Generate consistent playerId from deviceId for localStorage mode
  const generateLocalPlayerId = (devId: string) => {
    // Create a simple hash from deviceId to get consistent playerId
    let hash = 0;
    for (let i = 0; i < devId.length; i++) {
      const char = devId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  };

  // COMMENTED OUT - Database fetching disabled, using localStorage only
  /*
  const fetchOrCreatePlayer = async (name: string, devId: string) => {
    try {
      console.log("Fetching player with:", { name, devId });
      
      const response = await fetch("/api/player", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, deviceId: devId }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Player data received:", data);
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      if (data.id) {
        setPlayerId(data.id);
        console.log("Player ID set to:", data.id);
      } else {
        console.error("No player ID in response:", data);
      }
    } catch (error) {
      console.error("Error fetching player:", error);
    } finally {
      setIsLoading(false);
    }
  };
  */

  const handleNameSubmit = async (name: string) => {
    localStorage.setItem("bulkmind_player_name", name);
    setPlayerName(name);
    
    // Comment out database call - using localStorage only
    // await fetchOrCreatePlayer(name, deviceId);
    
    // Generate local playerId for this device
    const localPlayerId = generateLocalPlayerId(deviceId);
    setPlayerId(localPlayerId);
    console.log("Generated local player ID:", localPlayerId);
  };

  const handleModeSelect = (mode: string) => {
    setCurrentMode(mode);
  };

  const handleBackToMenu = () => {
    setCurrentMode(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-game-black" style={{
          backgroundImage: 'url(/game-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        <div className="relative z-10 text-center">
          {/* Spinning BulkTrade Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/bulk-logo.png"
                alt="BulkTrade Logo"
                width={128}
                height={128}
                className="game-text-glow animate-spin-slow"
              />
            </div>
          </div>
          
          {/* Loading text */}
          <div className="text-2xl md:text-3xl font-gaming font-bold text-game-milk animate-pulse mb-4">
            Initializing Arena...
          </div>
          
          {/* Loading bar */}
          <div className="w-64 h-2 bg-game-milk/20 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-game-milk rounded-full animate-pulse"
              style={{
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />
          </div>
          

        </div>
      </div>
    );
  }

  if (!playerName) {
    return <WelcomeScreen onSubmit={handleNameSubmit} />;
  }

  if (!currentMode) {
    return <ModeSelection playerName={playerName} onSelectMode={handleModeSelect} />;
  }

  return (
    <>
      {currentMode === "word-puzzle" && (
        <WordPuzzle playerId={playerId!} onBack={handleBackToMenu} />
      )}
      {currentMode === "trader-quiz" && (
        <TraderQuiz playerId={playerId!} onBack={handleBackToMenu} />
      )}
      {currentMode === "challenge" && (
        <ChallengeMode playerId={playerId!} playerName={playerName} onBack={handleBackToMenu} />
      )}
    </>
  );
}
