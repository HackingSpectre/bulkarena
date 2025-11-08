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
  ,
  // --- Added BulkTrade-focused trader quiz questions (advanced + factual) ---
  {
    question: "What is the core performance goal BulkTrade aims to merge with DeFi?",
    options: ["AMM composability", "CEX-grade execution", "NFT liquidity", "Off-chain custody"],
    correct: 1,
    level: 3
  },
  {
    question: "BulkTrade mitigates MEV primarily by using what matching cadence?",
    options: ["Continuous random sampling", "Deterministic tick-based matching", "Priority gas auctions", "Cross-chain batching"],
    correct: 1,
    level: 5
  },
  {
    question: "Which data protection method is mentioned for order integrity?",
    options: ["Reed-Solomon encoding", "AES block chaining", "Merkle compression", "Polynomial hashing"],
    correct: 0,
    level: 6
  },
  {
    question: "Validator signature aggregation in BulkTrade uses which scheme?",
    options: ["RSA", "BLS", "ECDSA", "Falcon"],
    correct: 1,
    level: 6
  },
  {
    question: "What does colocation-grade performance refer to?",
    options: ["User-owned nodes in homes", "Data-center level low latency", "Cloud-only deployment", "Browser-based processing"],
    correct: 1,
    level: 4
  },
  {
    question: "Which property is essential for fair matching in BulkTrade's engine?",
    options: ["Randomized settlement", "Determinism", "Miner discretion", "Gas bidding"],
    correct: 1,
    level: 5
  },
  {
    question: "What is the primary product traded on BulkTrade at launch?",
    options: ["Perpetual futures", "Tokenized bonds", "NFT futures", "Real estate derivatives"],
    correct: 0,
    level: 2
  },
  {
    question: "Leverage on BulkTrade is targeted up to what level?",
    options: ["10x", "20x", "30x", "50x"],
    correct: 1,
    level: 3
  },
  {
    question: "What role do validators play in BulkTrade?",
    options: ["Order matching + consensus participation", "Interest rate setting", "Token minting only", "Custody of user funds"],
    correct: 0,
    level: 5
  },
  {
    question: "Why is instant finality important for high-frequency trading?",
    options: ["Eliminates UI bugs", "Reduces rollback risk and latency", "Increases token inflation", "Improves social media metrics"],
    correct: 1,
    level: 4
  },
  {
    question: "Which broader DeFi limitation is BulkTrade addressing?",
    options: ["Lack of perpetual AMMs", "Performance gap vs centralized exchanges", "Wallet UX complexity", "Stablecoin volatility"],
    correct: 1,
    level: 3
  },
  {
    question: "What does an orderbook-based DEX enable that AMMs struggle with?",
    options: ["High-frequency strategies", "On-chain governance", "Custodial storage", "NFT minting"],
    correct: 0,
    level: 4
  },
  {
    question: "Which latency domain is BulkTrade optimizing?",
    options: ["DNS resolution", "Tick-to-match time", "Cold storage retrieval", "GPU rendering"],
    correct: 1,
    level: 5
  },
  {
    question: "Which phrase best describes BulkTrade's execution architecture?",
    options: ["Gas-priced settlement", "Colocation-grade deterministic matching", "Randomized block sampling", "Dual-chain speculative settlement"],
    correct: 1,
    level: 6
  },
  {
    question: "What is a key benefit of Reed-Solomon encoding for orders?",
    options: ["Increases leverage", "Protects against packet loss", "Boosts token price", "Removes funding rates"],
    correct: 1,
    level: 6
  },
  {
    question: "Why aggregate validator signatures?",
    options: ["Reduce bandwidth + improve confirmation speed", "Increase randomness", "Change fee model", "Avoid liquidation"],
    correct: 0,
    level: 7
  },
  {
    question: "What risk mechanism protects lenders during extreme volatility?",
    options: ["Liquidation engine", "NFT floor pricing", "Hash rate boosting", "Timestamp voting"],
    correct: 0,
    level: 7
  },
  {
    question: "Which operational principle BulkTrade retains while improving speed?",
    options: ["Custodial deposits", "Permissionless access", "Closed validator set", "Off-chain settlement only"],
    correct: 1,
    level: 5
  },
  {
    question: "Maker vs taker fees mainly incentivize what behavior?",
    options: ["Opening large leverage", "Providing resting liquidity", "Shorting governance", "Rewriting state"],
    correct: 1,
    level: 4
  },
  {
    question: "Why is deterministic ordering crucial?",
    options: ["Removes need for wallets", "Ensures fairness and reproducibility", "Adds random block rewards", "Increases token inflation"],
    correct: 1,
    level: 6
  },
  {
    question: "Funding rates on perpetuals generally serve to what?",
    options: ["Keep contract price near index", "Increase liquidation threshold", "Automate staking rewards", "Generate validator randomness"],
    correct: 0,
    level: 4
  },
  {
    question: "Initial margin primarily determines what?",
    options: ["Maximum position size", "Gas rebate", "Wallet address validity", "Tick batch size"],
    correct: 0,
    level: 5
  },
  {
    question: "Maintenance margin breach results in what action?",
    options: ["Position liquidation", "Gas refund", "Validator slashing", "Fee rebate"],
    correct: 0,
    level: 5
  },
  {
    question: "Insurance fund capital typically covers what?",
    options: ["Socialized losses from bankrupt accounts", "Marketing campaigns", "Validator hardware", "Frontend hosting"],
    correct: 0,
    level: 7
  },
  {
    question: "Reduce-only orders are used for?",
    options: ["Expanding leverage", "Closing or shrinking positions", "Doubling margin", "Randomizing fills"],
    correct: 1,
    level: 4
  },
  {
    question: "Post-only orders ensure what?",
    options: ["Execution as taker", "Entry into orderbook as maker", "Instant liquidation", "Skipping margin checks"],
    correct: 1,
    level: 4
  },
  {
    question: "An index price aggregates what?",
    options: ["Off-chain social metrics", "Spot prices from multiple venues", "Validator uptime reports", "Gas fee averages"],
    correct: 1,
    level: 6
  },
  {
    question: "High-frequency traders require what most from infrastructure?",
    options: ["Layered UI themes", "Low latency + determinism", "High NFT throughput", "Privileged admin keys"],
    correct: 1,
    level: 6
  },
  {
    question: "Order flow fairness helps reduce what exploit category?",
    options: ["Cold storage risk", "Front-running (MEV)", "UI phishing", "DNS hijacking"],
    correct: 1,
    level: 5
  },
  {
    question: "Cross-margining enables what?",
    options: ["Shared collateral efficiency", "NFT staking", "Social trading", "Gas mining"],
    correct: 0,
    level: 7
  },
  {
    question: "Isolated margin is preferable when?",
    options: ["You want to segregate risk per position", "You seek maximum leverage across all", "You only trade spot", "You use hardware wallets"],
    correct: 0,
    level: 7
  },
  {
    question: "Latency spikes can cause?",
    options: ["Improved fills", "Missed execution opportunities", "Automatic fee rebates", "Token airdrops"],
    correct: 1,
    level: 5
  },
  {
    question: "Which is a typical liquidation trigger?",
    options: ["Account equity < maintenance margin", "High trading volume", "Validator upgrade", "Scrambled signature"],
    correct: 0,
    level: 6
  },
  {
    question: "What improves bandwidth usage in validator networking?",
    options: ["Signature aggregation", "Random hashing", "UI caching", "CSS minification"],
    correct: 0,
    level: 6
  },
  {
    question: "BulkTrade aims to attract capital by closing what gap?",
    options: ["Custody transparency", "Order execution performance", "Stablecoin diversity", "NFT floor pricing"],
    correct: 1,
    level: 4
  },
  {
    question: "High taker fees generally discourage what behavior?",
    options: ["Market order spamming", "Providing liquidity", "Risk management", "Index observation"],
    correct: 0,
    level: 5
  },
  {
    question: "A liquidation cascade can amplify what?",
    options: ["Volatility and slippage", "Validator rewards", "Frontend download speed", "Signature count"],
    correct: 0,
    level: 8
  },
  {
    question: "Dynamic funding rates help align what?",
    options: ["Perpetual price with underlying spot", "Gas prices with block size", "Validator fees with uptime", "UI latency with CPU"],
    correct: 0,
    level: 6
  },
  {
    question: "What primary advantage does determinism offer to strategy builders?",
    options: ["Predictable execution modeling", "Random fee rebates", "Automatic leverage resets", "Hidden API channels"],
    correct: 0,
    level: 7
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
  ,
  // --- Added BulkTrade-related word puzzles ---
  { word: "BULKTRADE", scrambled: "DAKBLTURE", hint: "The protocol's name", level: 1 },
  { word: "EXCHANGE", scrambled: "XEGCAEHN", hint: "Venue for trading perpetuals", level: 1 },
  { word: "PERFORMANCE", scrambled: "MREPOFRNCAE", hint: "Core gap BulkTrade closes vs CEXs", level: 2 },
  { word: "COLOCATION", scrambled: "LCOCOATIO", hint: "Data-center grade deployment goal", level: 3 },
  { word: "LATENCY", scrambled: "TCYELNA", hint: "Critical metric for traders", level: 2 },
  { word: "DETERMINISM", scrambled: "NIMDTERESI", hint: "Predictable matching property", level: 4 },
  { word: "SIGNATURE", scrambled: "GTSUARNIE", hint: "Validated cryptographic approval", level: 3 },
  { word: "AGGREGATION", scrambled: "GGAEARGTION", hint: "Combining validator signatures", level: 5 },
  { word: "VALIDATION", scrambled: "AALVDINOIT", hint: "Consensus participation", level: 4 },
  { word: "FINALITY", scrambled: "LAFIYITN", hint: "Irreversible settlement property", level: 5 },
  { word: "REDSOL", scrambled: "SLORED", hint: "Part of Reed-Solomon (short form)", level: 6 },
  { word: "ENCODING", scrambled: "CNOGEDNI", hint: "Technique applied to split order data", level: 6 },
  { word: "ORDERFLOW", scrambled: "RLOWFORED", hint: "Sequence of trades flowing into book", level: 5 },
  { word: "MATCHING", scrambled: "HTMACNIG", hint: "Core engine function", level: 4 },
  { word: "PERPETUALS", scrambled: "UTSREPPLEA", hint: "Contracts with no expiry", level: 3 },
  { word: "LEVERAGE", scrambled: "RGAELEVE", hint: "Amplifies exposure", level: 3 },
  { word: "MARGIN", scrambled: "GARMIN", hint: "Collateral for positions", level: 3 },
  { word: "LIQUIDATION", scrambled: "QILIDUTAION", hint: "Forced position closure", level: 5 },
  { word: "INSURANCE", scrambled: "SRAINUCE", hint: "Fund that covers losses", level: 6 },
  { word: "ISOLATED", scrambled: "SOLIATED", hint: "Margin mode that limits risk", level: 6 },
  { word: "CROSSMARGIN", scrambled: "MARGNCSOIR", hint: "Shared collateral mode", level: 7 },
  { word: "INDEXPRICE", scrambled: "XPRICEDIEN", hint: "Reference value for perp funding", level: 7 },
  { word: "LIQUIDITY", scrambled: "QILADITUY", hint: "Depth enabling smoother execution", level: 6 },
  { word: "FRONTRUN", scrambled: "RNOFTRUN", hint: "MEV-style exploit BulkTrade combats", level: 8 },
  { word: "DEFI", scrambled: "FEDI", hint: "Sector BulkTrade enhances", level: 2 },
  { word: "SOLANA", scrambled: "NALOSA", hint: "Underlying chain", level: 2 },
  { word: "VALIDATOR", scrambled: "VIALADTRO", hint: "Network participant role", level: 4 },
  { word: "PRIORITY", scrambled: "RIPORTIY", hint: "Price-time ordering principle", level: 6 },
  { word: "ENCAPSULATE", scrambled: "LACEUPSNEAT", hint: "Protect / package data conceptually", level: 8 },
  { word: "EXECUTION", scrambled: "UTXOECINE", hint: "Fulfillment of trade intent", level: 7 },
  { word: "BANDWIDTH", scrambled: "DABNWITDH", hint: "Network capacity resource", level: 8 }
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
  ,
  // --- Added 50 advanced BulkTrade challenge questions ---
  {
    question: "Which architectural goal most differentiates BulkTrade from typical AMMs?",
    options: ["Infinite token listings", "Colocation-grade deterministic execution", "NFT order streaming", "Zero-fee governance"],
    correct: 1,
    level: 4
  },
  {
    question: "Why does deterministic tick matching matter for strategy reproducibility?",
    options: ["Enables exact backtest vs live parity", "Randomizes fills for fairness", "Inflates funding rates", "Removes maker rebates"],
    correct: 0,
    level: 6
  },
  {
    question: "Reed-Solomon protection best improves what dimension of network reliability?",
    options: ["UI theme rendering", "Resilience to packet loss", "Token issuance speed", "Oracle voting"],
    correct: 1,
    level: 6
  },
  {
    question: "Signature aggregation reduces what resource consumption?",
    options: ["Front-end bandwidth", "Validator bandwidth and overhead", "Gas price volatility", "User margin usage"],
    correct: 1,
    level: 7
  },
  {
    question: "A liquidation cascade can trigger further sell pressure due to what feedback loop?",
    options: ["Increasing UI latency", "Forced collateral auctions", "Maker fee reduction", "Signature pruning"],
    correct: 1,
    level: 8
  },
  {
    question: "What component ensures fairness in order matching priority?",
    options: ["Random tick seeding", "Price-time deterministic ordering", "Gas-paid front queue", "Validator favoritism"],
    correct: 1,
    level: 5
  },
  {
    question: "Which margin mode isolates risk per position?",
    options: ["Cross", "Isolated", "Hybrid", "Social"],
    correct: 1,
    level: 4
  },
  {
    question: "BulkTrade's improvement to finality primarily benefits what class of traders?",
    options: ["Passive stakers", "Latency-sensitive algorithmic traders", "NFT collectors", "Stablecoin issuers"],
    correct: 1,
    level: 6
  },
  {
    question: "Maker orders contribute what systemic benefit?",
    options: ["UI personalization", "Orderbook depth and tighter spreads", "Liquidation acceleration", "Validator token minting"],
    correct: 1,
    level: 5
  },
  {
    question: "Funding rate payments are exchanged between which counterparts?",
    options: ["Depositors and stakers", "Long and short perp holders", "Miners and validators", "Makers and protocol"],
    correct: 1,
    level: 6
  },
  {
    question: "An account with equity below maintenance margin is subject to what?",
    options: ["Fee rebate", "Liquidation", "Leverage boost", "Instant maker status"],
    correct: 1,
    level: 5
  },
  {
    question: "Cross margin allows what collateral behavior?",
    options: ["Dedicated per position", "Shared across multiple positions", "Token airdrop gating", "Staking reward amplification"],
    correct: 1,
    level: 7
  },
  {
    question: "Why is predictable latency important for advanced order execution strategies?",
    options: ["Simplifies UI visual tests", "Enables timing-sensitive algorithms", "Allows fee exemption", "Removes liquidation"],
    correct: 1,
    level: 7
  },
  {
    question: "What is a typical purpose of an insurance fund?",
    options: ["Cover protocol marketing", "Absorb socialized losses from bankrupt accounts", "Mint governance tokens", "Increase leverage limits"],
    correct: 1,
    level: 8
  },
  {
    question: "Deterministic ordering reduces which exploitable vector?",
    options: ["Spread compression", "Front-running advantages", "Liquidation incentive", "Maker fee logic"],
    correct: 1,
    level: 7
  },
  {
    question: "Why aggregate multiple signature attestations?",
    options: ["Increase slippage", "Compress validation overhead", "Boost index drift", "Randomize tick speed"],
    correct: 1,
    level: 6
  },
  {
    question: "Perpetuals differ from dated futures primarily by?",
    options: ["Higher oracle usage", "No fixed expiry date", "Automatic insurance", "Lower margin checks"],
    correct: 1,
    level: 3
  },
  {
    question: "Liquidation engines monitor what ratio closely?",
    options: ["UI frames per second", "Account equity vs maintenance margin", "Validator ping time", "Index vs oracle age"],
    correct: 1,
    level: 6
  },
  {
    question: "What enhances fairness during high load?",
    options: ["Random UI delays", "Tick-based deterministic sequencing", "Gas auctioning", "Validator whitelists"],
    correct: 1,
    level: 7
  },
  {
    question: "Which is a benefit of deeper orderbook liquidity?",
    options: ["Higher slippage", "Reduced price impact on large orders", "Slower settlement", "Increased latency"],
    correct: 1,
    level: 5
  },
  {
    question: "What metric does funding aim to align?",
    options: ["Perpetual mark and underlying index price", "Spot volatility and fee tiers", "Validator uptime and trade volume", "Gas price and trade count"],
    correct: 0,
    level: 6
  },
  {
    question: "Reed-Solomon encoded fragments allow recovery despite?",
    options: ["UI scaling", "Partial network packet loss", "Oracle downtime", "Fee tier reset"],
    correct: 1,
    level: 7
  },
  {
    question: "A reduce-only order will never do what?",
    options: ["Increase position size", "Close exposure", "Hit maker book", "Consume margin"],
    correct: 0,
    level: 5
  },
  {
    question: "Index pricing sources multiple venues to reduce?",
    options: ["Oracle decentralization", "Manipulation risk", "Signature count", "Gas volatility"],
    correct: 1,
    level: 7
  },
  {
    question: "Front-running is a subset of which broader exploit domain?",
    options: ["Slippage farming", "MEV extraction", "UI spoofing", "Oracle freezing"],
    correct: 1,
    level: 7
  },
  {
    question: "Higher maintenance margin requirements do what?",
    options: ["Trigger early liquidations", "Lower risk of wiping insurance fund", "Decrease fairness", "Increase tick volatility"],
    correct: 1,
    level: 8
  },
  {
    question: "Deterministic replay of order flow enables?",
    options: ["Strategy backtesting parity", "Token inflation modeling", "Random fee selection", "Delayed settlement"],
    correct: 0,
    level: 8
  },
  {
    question: "Why does reduced bandwidth overhead matter during volatility spikes?",
    options: ["Less congestion aiding timely matching", "Higher token airdrops", "UI brand consistency", "Instant oracle replacement"],
    correct: 0,
    level: 6
  },
  {
    question: "Maker rebates incentivize what structural property?",
    options: ["Thinner books", "Resting liquidity provisioning", "Random fills", "Undercollateralization"],
    correct: 1,
    level: 5
  },
  {
    question: "Which state attribute is essential for fairness across validator nodes?",
    options: ["Synchronized clock + deterministic engine", "Random UI theme", "Variable tick size per node", "Gas multi-tier backlog"],
    correct: 0,
    level: 7
  },
  {
    question: "Perpetual contract funding payments discourage what imbalance?",
    options: ["Excessive net long or short skew", "UI latency drift", "Validator churn", "Index duplication"],
    correct: 0,
    level: 6
  },
  {
    question: "Insurance fund depletion may lead to what?",
    options: ["Socialized loss mechanisms", "Fee amplification", "Higher maker slippage", "Tick timing randomization"],
    correct: 0,
    level: 8
  },
  {
    question: "What edge does colocation-grade infra provide algorithms?",
    options: ["Predictable low-latency execution", "Higher swap fees", "NFT floor discovery", "Mining royalties"],
    correct: 0,
    level: 6
  },
  {
    question: "BulkTrade's fairness model primarily targets removal of?",
    options: ["Oracle divergence", "Preferential ordering advantages", "UI caching delays", "Wallet address collisions"],
    correct: 1,
    level: 7
  },
  {
    question: "Maintaining narrow spreads benefits?",
    options: ["Liquidation speed", "Execution quality for all participants", "Higher latency", "Validator downtime"],
    correct: 1,
    level: 5
  },
  {
    question: "What is a direct consequence of robust signature aggregation?",
    options: ["Lowered network confirmation overhead", "Increased oracle dependence", "UI theme switching", "Forced cross margin"],
    correct: 0,
    level: 7
  },
  {
    question: "Which protective mechanism helps ensure order data recoverability?",
    options: ["Erasure coding fragments", "UI retry buttons", "Fee escalation", "Random replays"],
    correct: 0,
    level: 7
  },
  {
    question: "Liquidation system design focuses on minimizing what systemic impact?",
    options: ["Collateral underflow contagion", "UI personalization", "Validator churn", "Tick compression"],
    correct: 0,
    level: 8
  },
  {
    question: "Accurate index pricing reduces risk of?",
    options: ["Funding rate manipulation", "Signature duplication", "UI scaling issues", "Validator slashing"],
    correct: 0,
    level: 7
  },
  {
    question: "Backtesting viability in deterministic engines improves?",
    options: ["Strategy confidence and optimization", "Gas fee volatility", "Oracle minting", "Wallet enumeration"],
    correct: 0,
    level: 8
  },
  {
    question: "High bandwidth efficiency helps prevent?",
    options: ["Order propagation delays", "NFT duplication", "Token inflation", "Fee tier collapse"],
    correct: 0,
    level: 6
  },
  {
    question: "Funding mechanics disincentivize extreme?",
    options: ["Perp directional skews", "Oracle tick speed", "Validator commission", "Spot drift re-aggregation"],
    correct: 0,
    level: 7
  },
  {
    question: "Efficient encoding of data shards increases?",
    options: ["Resilience to transmission failures", "Maker fee volatility", "Collateral borrow limits", "UI load time"],
    correct: 0,
    level: 7
  },
  {
    question: "Fair ordering reduces traders' need to overpay via?",
    options: ["Gas price auctions", "Random signature bundling", "Excess collateral", "UI refresh loops"],
    correct: 0,
    level: 7
  },
  {
    question: "Efficient liquidation prevents accumulation of?",
    options: ["Bad debt threatening solvency", "Excess spread compression", "Random tick slowdown", "Oracle replication"],
    correct: 0,
    level: 8
  },
  {
    question: "Aggregated validation improves what finality attribute?",
    options: ["Speed and bandwidth efficiency", "Random slippage injection", "UI brand state", "Block explorer coloration"],
    correct: 0,
    level: 6
  },
  {
    question: "Mitigating front-running helps preserve what?",
    options: ["Strategy viability and fairness", "Validator revenue inflation", "UI density", "Gas escrow"],
    correct: 0,
    level: 7
  },
  {
    question: "High volatility stress tests focus on what capacity?",
    options: ["Order ingestion and matching throughput", "Frontend theming", "NFT compression", "Wallet social hooks"],
    correct: 0,
    level: 8
  },
  {
    question: "Erasure coding fragment count selection balances?",
    options: ["Resilience vs overhead", "UI vs theme speed", "Margin vs liquidation speed", "Oracle vs validator style"],
    correct: 0,
    level: 8
  },
  {
    question: "Maintaining deterministic sequencing avoids reliance on?",
    options: ["Priority gas auctions", "UI heuristics", "Validator GPU rendering", "Oracle rebasing"],
    correct: 0,
    level: 7
  }
];
