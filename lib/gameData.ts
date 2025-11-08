export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  level: number;
}

export interface WordPuzzle {
  word: string;
  scrambled: string;
  hint: string;
  level: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What blockchain is BulkTrade built on?",
    options: ["Ethereum", "Solana", "Polygon", "Arbitrum"],
    correct: 1,
    level: 1
  },
  {
    question: "What is BulkTrade's tagline?",
    options: ["Trade Without Limits", "One Exchange, Infinite Markets", "The Future of DeFi", "Speed Meets Security"],
    correct: 1,
    level: 1
  },
  {
    question: "What type of exchange is BulkTrade?",
    options: ["Spot Exchange", "Perpetual Futures DEX", "Options Platform", "Lending Protocol"],
    correct: 1,
    level: 2
  },
  {
    question: "What is BulkTrade's specialized execution layer called?",
    options: ["BULK-chain", "BULK-tile", "BULK-node", "BULK-core"],
    correct: 1,
    level: 2
  },
  {
    question: "What is BulkTrade's matching tick speed?",
    options: ["100ms", "50ms", "20ms", "5ms"],
    correct: 2,
    level: 3
  },
  {
    question: "How much leverage does BulkTrade offer?",
    options: ["Up to 10x", "Up to 15x", "Up to 20x", "Up to 50x"],
    correct: 2,
    level: 3
  },
  {
    question: "What percentage of taker fees are distributed to Bulk-agave validators?",
    options: ["10%", "20%", "30%", "50%"],
    correct: 2,
    level: 4
  },
  {
    question: "What orderbook architecture does BulkTrade use?",
    options: ["AMM", "CLOB (Central Limit Order Book)", "Hybrid AMM-CLOB", "Order Flow Auction"],
    correct: 1,
    level: 4
  },
  {
    question: "What is the trade finality time on BulkTrade?",
    options: ["~100ms", "~80ms", "~60ms", "~40ms"],
    correct: 3,
    level: 5
  },
  {
    question: "What consensus threshold does BulkTrade use for instant finality?",
    options: ["51% stake", "66% stake", "75% stake", "80% stake"],
    correct: 3,
    level: 5
  },
  {
    question: "What signature scheme does BulkTrade use for aggregation?",
    options: ["ECDSA", "Schnorr", "BLS", "EdDSA"],
    correct: 2,
    level: 6
  },
  {
    question: "How are BulkTrade orders protected against packet loss?",
    options: ["Redundant broadcasting", "Reed-Solomon erasure coding", "TCP retransmission", "Checkpoint validation"],
    correct: 1,
    level: 6
  },
  {
    question: "What is the mainnet launch target for BulkTrade?",
    options: ["Q1 2025", "Q2 2025", "Q4 2025", "Q1 2026"],
    correct: 2,
    level: 7
  },
  {
    question: "How much seed funding did BulkTrade raise?",
    options: ["$5M", "$6M", "$8M", "$10M"],
    correct: 2,
    level: 7
  },
  {
    question: "What validator client is Bulk-agave forked from?",
    options: ["solana-validator", "jito-agave", "frankendancer", "firedancer"],
    correct: 1,
    level: 8
  },
  {
    question: "What is the primary goal of BulkTrade?",
    options: ["Maximum decentralization", "Merge CEX performance with DeFi freedom", "Lowest fees", "Highest leverage"],
    correct: 1,
    level: 8
  },
  {
    question: "What matching algorithm does BulkTrade use?",
    options: ["Price-time priority", "Pro-rata", "Deterministic FIFO", "Random matching"],
    correct: 2,
    level: 9
  },
  {
    question: "What is eliminated in BulkTrade's tick-based matching?",
    options: ["Gas fees", "Slippage", "MEV (front-running)", "All of the above"],
    correct: 2,
    level: 9
  },
  {
    question: "How many pieces are orders split into for Reed-Solomon encoding?",
    options: ["4 pieces", "6 pieces", "8 pieces", "12 pieces"],
    correct: 2,
    level: 10
  },
  {
    question: "What is the estimated APY boost for Solana stakers from BulkTrade?",
    options: ["0.5-1%", "1-2%", "2-3%", "3-5%"],
    correct: 1,
    level: 10
  }
];

export const wordPuzzles: WordPuzzle[] = [
  {
    word: "SOLANA",
    scrambled: "NASLOA",
    hint: "The blockchain BulkTrade is built on",
    level: 1
  },
  {
    word: "PERPETUAL",
    scrambled: "LAUTPREEP",
    hint: "Type of futures contract",
    level: 1
  },
  {
    word: "LEVERAGE",
    scrambled: "GEEVARLE",
    hint: "Amplify your trading position",
    level: 2
  },
  {
    word: "ORDERBOOK",
    scrambled: "KOODEROBR",
    hint: "List of buy and sell orders",
    level: 2
  },
  {
    word: "VALIDATOR",
    scrambled: "VALIDATRO",
    hint: "Network participant that confirms transactions",
    level: 3
  },
  {
    word: "DECENTRALIZED",
    scrambled: "EECNDZDELRAIT",
    hint: "Not controlled by a single entity",
    level: 3
  },
  {
    word: "MATCHING",
    scrambled: "CHAGINMT",
    hint: "Pairing buy and sell orders",
    level: 4
  },
  {
    word: "LATENCY",
    scrambled: "YNETCAL",
    hint: "Time delay in order execution",
    level: 4
  },
  {
    word: "CONSENSUS",
    scrambled: "SONCUSNES",
    hint: "Agreement among validators",
    level: 5
  },
  {
    word: "FINALITY",
    scrambled: "FITNALYI",
    hint: "Irreversible transaction confirmation",
    level: 5
  },
  {
    word: "COLLOCATION",
    scrambled: "OOCALTINLCO",
    hint: "Ultra-low latency server placement",
    level: 6
  },
  {
    word: "ERASURE",
    scrambled: "RSUEERA",
    hint: "Type of coding for data redundancy",
    level: 6
  },
  {
    word: "SIGNATURE",
    scrambled: "RTUGAINES",
    hint: "Cryptographic proof of authenticity",
    level: 7
  },
  {
    word: "AGGREGATION",
    scrambled: "RGAENOTGAGI",
    hint: "Combining multiple signatures",
    level: 7
  },
  {
    word: "DETERMINISTIC",
    scrambled: "TIDREECNMIIST",
    hint: "Producing same result every time",
    level: 8
  },
  {
    word: "CENSORSHIP",
    scrambled: "EOSRPCNIHS",
    hint: "Blocking or filtering content",
    level: 8
  },
  {
    word: "PERMISSIONLESS",
    scrambled: "SMSRSELNPIEIO",
    hint: "Accessible to anyone without approval",
    level: 9
  },
  {
    word: "INFRASTRUCTURE",
    scrambled: "RTSUUFRCANTIER",
    hint: "Underlying system architecture",
    level: 9
  },
  {
    word: "LIQUIDATION",
    scrambled: "IUIQDOITNAL",
    hint: "Forced closure of a leveraged position",
    level: 10
  },
  {
    word: "TRANSPARENCY",
    scrambled: "ANRTPACRSYEN",
    hint: "Openness and visibility of operations",
    level: 10
  }
];

export const challengeQuestions: QuizQuestion[] = [
  ...quizQuestions,
  {
    question: "What is a perpetual futures contract?",
    options: ["A contract that expires monthly", "A futures contract with no expiry date", "A spot trading agreement", "A lending protocol"],
    correct: 1,
    level: 1
  },
  {
    question: "What does CLOB stand for?",
    options: ["Central Limit Order Book", "Centralized Liquidity Order Block", "Crypto Limit Order Base", "Chain Level Order Book"],
    correct: 0,
    level: 1
  },
  {
    question: "What does DeFi stand for?",
    options: ["Digital Finance", "Decentralized Finance", "Distributed Finance", "Dynamic Finance"],
    correct: 1,
    level: 1
  },
  {
    question: "What is MEV?",
    options: ["Maximum Extraction Value", "Miner Extractable Value", "Market Exchange Value", "Minimum Entry Value"],
    correct: 1,
    level: 2
  },
  {
    question: "What is the purpose of a validator?",
    options: ["To mine crypto", "To confirm and secure transactions", "To create new tokens", "To provide liquidity"],
    correct: 1,
    level: 2
  }
];
