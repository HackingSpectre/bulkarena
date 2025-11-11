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
    options: ["Arbitrum", "Polygon", "Ethereum", "Solana"],
    correct: 3,
    level: 1
  },
  {
    question: "What is BulkTrade's tagline?",
    options: ["Trade Without Limits", "One Exchange", "Speed Meets Security", "The Future of DeFi"],
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
    options: ["BULK-tile", "BULK-chain", "BULK-core", "BULK-node"],
    correct: 0,
    level: 2
  },
  {
    question: "What is BulkTrade's matching tick speed?",
    options: ["50ms", "20ms", "100ms", "5ms"],
    correct: 1,
    level: 3
  },
  {
    question: "How much leverage does BulkTrade offer?",
    options: ["Up to 15x", "Up to 50x", "Up to 10x", "Up to 20x"],
    correct: 3,
    level: 3
  },
  {
    question: "What percentage of taker fees are distributed to Bulk-agave validators?",
    options: ["30%", "10%", "20%", "50%"],
    correct: 0,
    level: 4
  },
  {
    question: "What orderbook architecture does BulkTrade use?",
    options: ["AMM", "Order Flow Auction", "Hybrid AMM-CLOB", "CLOB (Central Limit Order Book)"],
    correct: 3,
    level: 4
  },
  {
    question: "What is the trade finality time on BulkTrade?",
    options: ["~100ms", "~40ms", "~60ms", "~80ms"],
    correct: 1,
    level: 5
  },
  {
    question: "What consensus threshold does BulkTrade use for instant finality?",
    options: ["75% stake", "66% stake", "51% stake", "80% stake"],
    correct: 3,
    level: 5
  },
  {
    question: "What signature scheme does BulkTrade use for aggregation?",
    options: ["BLS", "EdDSA", "ECDSA", "Schnorr"],
    correct: 0,
    level: 6
  },
  {
    question: "How are BulkTrade orders protected against packet loss?",
    options: ["Checkpoint validation", "Reed-Solomon erasure coding", "TCP retransmission", "Redundant broadcasting"],
    correct: 1,
    level: 6
  },
  {
    question: "What is the mainnet launch target for BulkTrade?",
    options: ["Q2 2025", "Q1 2025", "Q1 2026", "Q4 2025"],
    correct: 3,
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
    options: ["firedancer", "solana-validator", "jito-agave", "frankendancer"],
    correct: 2,
    level: 8
  },
  {
    question: "What is the primary goal of BulkTrade?",
    options: ["Highest leverage", "Maximum decentralization", "Merge CEX performance with DeFi freedom", "Lowest fees"],
    correct: 2,
    level: 8
  },
  {
    question: "What matching algorithm does BulkTrade use?",
    options: ["Price-time priority", "Random matching", "Deterministic FIFO", "Pro-rata"],
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
    options: ["12 pieces", "4 pieces", "8 pieces", "6 pieces"],
    correct: 2,
    level: 10
  },
  {
    question: "What is the estimated APY boost for Solana stakers from BulkTrade?",
    options: ["2-3%", "0.5-1%", "3-5%", "1-2%"],
    correct: 3,
    level: 10
  },
  {
    question: "What is the core performance goal BulkTrade aims to merge with DeFi?",
    options: ["CEX-grade execution", "NFT liquidity", "Off-chain custody", "AMM composability"],
    correct: 0,
    level: 3
  },
  {
    question: "BulkTrade mitigates MEV primarily by using what matching cadence?",
    options: ["Continuous random sampling", "Deterministic tick-based matching", "Cross-chain batching", "Priority gas auctions"],
    correct: 1,
    level: 5
  },
  {
    question: "Which data protection method is mentioned for order integrity?",
    options: ["Polynomial hashing", "Merkle compression", "Reed-Solomon encoding", "AES block chaining"],
    correct: 2,
    level: 6
  },
  {
    question: "Validator signature aggregation in BulkTrade uses which scheme?",
    options: ["Falcon", "ECDSA", "BLS", "RSA"],
    correct: 2,
    level: 6
  },
  {
    question: "What does colocation-grade performance refer to?",
    options: ["Browser-based processing", "Cloud-only deployment", "User-owned nodes in homes", "Data-center level low latency"],
    correct: 3,
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
    options: ["Tokenized bonds", "NFT futures", "Perpetual futures", "Real estate derivatives"],
    correct: 2,
    level: 2
  },
  {
    question: "Leverage on BulkTrade is targeted up to what level?",
    options: ["30x", "50x", "10x", "20x"],
    correct: 3,
    level: 3
  },
  {
    question: "What role do validators play in BulkTrade?",
    options: ["Order matching + consensus participation", "Custody of user funds", "Token minting only", "Interest rate setting"],
    correct: 0,
    level: 5
  },
  {
    question: "Why is instant finality important for high-frequency trading?",
    options: ["Improves social media metrics", "Increases token inflation", "Eliminates UI bugs", "Reduces rollback risk and latency"],
    correct: 3,
    level: 4
  },
  {
    question: "Which broader DeFi limitation is BulkTrade addressing?",
    options: ["Performance gap vs centralized exchanges", "Stablecoin volatility", "Lack of perpetual AMMs", "Wallet UX complexity"],
    correct: 0,
    level: 3
  },
  {
    question: "What does an orderbook-based DEX enable that AMMs struggle with?",
    options: ["NFT minting", "High-frequency strategies", "Custodial storage", "On-chain governance"],
    correct: 1,
    level: 4
  },
  {
    question: "Which latency domain is BulkTrade optimizing?",
    options: ["Tick-to-match time", "DNS resolution", "GPU rendering", "Cold storage retrieval"],
    correct: 0,
    level: 5
  },
  {
    question: "Which phrase best describes BulkTrade's execution architecture?",
    options: ["Randomized block sampling", "Colocation-grade deterministic matching", "Gas-priced settlement", "Dual-chain speculative settlement"],
    correct: 1,
    level: 6
  },
  {
    question: "What is a key benefit of Reed-Solomon encoding for orders?",
    options: ["Protects against packet loss", "Boosts token price", "Increases leverage", "Removes funding rates"],
    correct: 0,
    level: 6
  },
  {
    question: "Why aggregate validator signatures?",
    options: ["Change fee model", "Avoid liquidation", "Reduce bandwidth + improve confirmation speed", "Increase randomness"],
    correct: 2,
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
    options: ["Off-chain settlement only", "Closed validator set", "Custodial deposits", "Permissionless access"],
    correct: 3,
    level: 5
  },
  {
    question: "Maker vs taker fees mainly incentivize what behavior?",
    options: ["Providing resting liquidity", "Rewriting state", "Shorting governance", "Opening large leverage"],
    correct: 0,
    level: 4
  },
  {
    question: "Why is deterministic ordering crucial?",
    options: ["Adds random block rewards", "Removes need for wallets", "Increases token inflation", "Ensures fairness and reproducibility"],
    correct: 3,
    level: 6
  },
  {
    question: "Funding rates on perpetuals generally serve to what?",
    options: ["Keep contract price near index", "Generate validator randomness", "Automate staking rewards", "Increase liquidation threshold"],
    correct: 0,
    level: 4
  },
  {
    question: "Initial margin primarily determines what?",
    options: ["Maximum position size", "Tick batch size", "Wallet address validity", "Gas rebate"],
    correct: 0,
    level: 5
  },
  {
    question: "Maintenance margin breach results in what action?",
    options: ["Gas refund", "Fee rebate", "Position liquidation", "Validator slashing"],
    correct: 2,
    level: 5
  },
  {
    question: "Insurance fund capital typically covers what?",
    options: ["Frontend hosting", "Marketing campaigns", "Validator hardware", "Socialized losses from bankrupt accounts"],
    correct: 3,
    level: 7
  },
  {
    question: "Reduce-only orders are used for?",
    options: ["Randomizing fills", "Closing or shrinking positions", "Doubling margin", "Expanding leverage"],
    correct: 1,
    level: 4
  },
  {
    question: "Post-only orders ensure what?",
    options: ["Entry into orderbook as maker", "Skipping margin checks", "Instant liquidation", "Execution as taker"],
    correct: 0,
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
    options: ["Layered UI themes", "High NFT throughput", "Low latency + determinism", "Privileged admin keys"],
    correct: 2,
    level: 6
  },
  {
    question: "Order flow fairness helps reduce what exploit category?",
    options: ["Front-running (MEV)", "Cold storage risk", "DNS hijacking", "UI phishing"],
    correct: 0,
    level: 5
  },
  {
    question: "Cross-margining enables what?",
    options: ["Social trading", "NFT staking", "Gas mining", "Shared collateral efficiency"],
    correct: 3,
    level: 7
  },
  {
    question: "Isolated margin is preferable when?",
    options: ["You seek maximum leverage across all", "You only trade spot", "You want to segregate risk per position", "You use hardware wallets"],
    correct: 2,
    level: 7
  },
  {
    question: "Latency spikes can cause?",
    options: ["Automatic fee rebates", "Improved fills", "Token airdrops", "Missed execution opportunities"],
    correct: 3,
    level: 5
  },
  {
    question: "Which is a typical liquidation trigger?",
    options: ["Account equity < maintenance margin", "Validator upgrade", "Scrambled signature", "High trading volume"],
    correct: 0,
    level: 6
  },
  {
    question: "What improves bandwidth usage in validator networking?",
    options: ["CSS minification", "Signature aggregation", "Random hashing", "UI caching"],
    correct: 1,
    level: 6
  },
  {
    question: "BulkTrade aims to attract capital by closing what gap?",
    options: ["NFT floor pricing", "Stablecoin diversity", "Order execution performance", "Custody transparency"],
    correct: 2,
    level: 4
  },
  {
    question: "High taker fees generally discourage what behavior?",
    options: ["Providing liquidity", "Index observation", "Risk management", "Market order spamming"],
    correct: 3,
    level: 5
  },
  {
    question: "A liquidation cascade can amplify what?",
    options: ["Validator rewards", "Frontend download speed", "Volatility and slippage", "Signature count"],
    correct: 2,
    level: 8
  },
  {
    question: "Dynamic funding rates help align what?",
    options: ["UI latency with CPU", "Validator fees with uptime", "Gas prices with block size", "Perpetual price with underlying spot"],
    correct: 3,
    level: 6
  },
  {
    question: "What primary advantage does determinism offer to strategy builders?",
    options: ["Automatic leverage resets", "Predictable execution modeling", "Random fee rebates", "Hidden API channels"],
    correct: 1,
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
    options: ["A contract that expires monthly", "A spot trading agreement", "A futures contract with no expiry date", "A lending protocol"],
    correct: 2,
    level: 1
  },
  {
    question: "What does CLOB stand for?",
    options: ["Crypto Limit Order Base", "Centralized Liquidity Order Block", "Chain Level Order Book", "Central Limit Order Book"],
    correct: 3,
    level: 1
  },
  {
    question: "What does DeFi stand for?",
    options: ["Distributed Finance", "Dynamic Finance", "Decentralized Finance", "Digital Finance"],
    correct: 2,
    level: 1
  },
  {
    question: "What is MEV?",
    options: ["Minimum Entry Value", "Miner Extractable Value", "Market Exchange Value", "Maximum Extraction Value"],
    correct: 1,
    level: 2
  },
  {
    question: "What is the purpose of a validator?",
    options: ["To create new tokens", "To mine crypto", "To confirm and secure transactions", "To provide liquidity"],
    correct: 2,
    level: 2
  },
  {
    question: "Which architectural goal most differentiates BulkTrade from typical AMMs?",
    options: ["Infinite token listings", "Zero-fee governance", "NFT order streaming", "Colocation-grade deterministic execution"],
    correct: 3,
    level: 4
  },
  {
    question: "Why does deterministic tick matching matter for strategy reproducibility?",
    options: ["Inflates funding rates", "Enables exact backtest vs live parity", "Randomizes fills for fairness", "Removes maker rebates"],
    correct: 1,
    level: 6
  },
  {
    question: "Reed-Solomon protection best improves what dimension of network reliability?",
    options: ["Token issuance speed", "Resilience to packet loss", "Oracle voting", "UI theme rendering"],
    correct: 1,
    level: 6
  },
  {
    question: "Signature aggregation reduces what resource consumption?",
    options: ["Gas price volatility", "Front-end bandwidth", "User margin usage", "Validator bandwidth and overhead"],
    correct: 3,
    level: 7
  },
  {
    question: "A liquidation cascade can trigger further sell pressure due to what feedback loop?",
    options: ["Maker fee reduction", "Signature pruning", "Forced collateral auctions", "Increasing UI latency"],
    correct: 2,
    level: 8
  },
  {
    question: "What component ensures fairness in order matching priority?",
    options: ["Price-time deterministic ordering", "Gas-paid front queue", "Random tick seeding", "Validator favoritism"],
    correct: 0,
    level: 5
  },
  {
    question: "Which margin mode isolates risk per position?",
    options: ["Cross", "Social", "Hybrid", "Isolated"],
    correct: 3,
    level: 4
  },
  {
    question: "BulkTrade's improvement to finality primarily benefits what class of traders?",
    options: ["Passive stakers", "Stablecoin issuers", "NFT collectors", "Latency-sensitive algorithmic traders"],
    correct: 3,
    level: 6
  },
  {
    question: "Maker orders contribute what systemic benefit?",
    options: ["Liquidation acceleration", "UI personalization", "Orderbook depth and tighter spreads", "Validator token minting"],
    correct: 2,
    level: 5
  },
  {
    question: "Funding rate payments are exchanged between which counterparts?",
    options: ["Long and short perp holders", "Miners and validators", "Depositors and stakers", "Makers and protocol"],
    correct: 0,
    level: 6
  },
  {
    question: "An account with equity below maintenance margin is subject to what?",
    options: ["Instant maker status", "Liquidation", "Leverage boost", "Fee rebate"],
    correct: 1,
    level: 5
  },
  {
    question: "Cross margin allows what collateral behavior?",
    options: ["Staking reward amplification", "Dedicated per position", "Shared across multiple positions", "Token airdrop gating"],
    correct: 2,
    level: 7
  },
  {
    question: "Why is predictable latency important for advanced order execution strategies?",
    options: ["Simplifies UI visual tests", "Removes liquidation", "Allows fee exemption", "Enables timing-sensitive algorithms"],
    correct: 3,
    level: 7
  },
  {
    question: "What is a typical purpose of an insurance fund?",
    options: ["Absorb socialized losses from bankrupt accounts", "Mint governance tokens", "Cover protocol marketing", "Increase leverage limits"],
    correct: 0,
    level: 8
  },
  {
    question: "Deterministic ordering reduces which exploitable vector?",
    options: ["Liquidation incentive", "Front-running advantages", "Spread compression", "Maker fee logic"],
    correct: 1,
    level: 7
  },
  {
    question: "Why aggregate multiple signature attestations?",
    options: ["Compress validation overhead", "Boost index drift", "Increase slippage", "Randomize tick speed"],
    correct: 0,
    level: 6
  },
  {
    question: "Perpetuals differ from dated futures primarily by?",
    options: ["No fixed expiry date", "Higher oracle usage", "Automatic insurance", "Lower margin checks"],
    correct: 0,
    level: 3
  },
  {
    question: "Liquidation engines monitor what ratio closely?",
    options: ["Account equity vs maintenance margin", "UI frames per second", "Index vs oracle age", "Validator ping time"],
    correct: 0,
    level: 6
  },
  {
    question: "What enhances fairness during high load?",
    options: ["Random UI delays", "Gas auctioning", "Tick-based deterministic sequencing", "Validator whitelists"],
    correct: 2,
    level: 7
  },
  {
    question: "Which is a benefit of deeper orderbook liquidity?",
    options: ["Slower settlement", "Higher slippage", "Increased latency", "Reduced price impact on large orders"],
    correct: 3,
    level: 5
  },
  {
    question: "What metric does funding aim to align?",
    options: ["Spot volatility and fee tiers", "Validator uptime and trade volume", "Perpetual mark and underlying index price", "Gas price and trade count"],
    correct: 2,
    level: 6
  },
  {
    question: "Reed-Solomon encoded fragments allow recovery despite?",
    options: ["UI scaling", "Partial network packet loss", "Fee tier reset", "Oracle downtime"],
    correct: 1,
    level: 7
  },
  {
    question: "A reduce-only order will never do what?",
    options: ["Close exposure", "Consume margin", "Increase position size", "Hit maker book"],
    correct: 2,
    level: 5
  },
  {
    question: "Index pricing sources multiple venues to reduce?",
    options: ["Oracle decentralization", "Manipulation risk", "Gas volatility", "Signature count"],
    correct: 1,
    level: 7
  },
  {
    question: "Front-running is a subset of which broader exploit domain?",
    options: ["Slippage farming", "MEV extraction", "Oracle freezing", "UI spoofing"],
    correct: 1,
    level: 7
  },
  {
    question: "Higher maintenance margin requirements do what?",
    options: ["Increase tick volatility", "Lower risk of wiping insurance fund", "Decrease fairness", "Trigger early liquidations"],
    correct: 1,
    level: 8
  },
  {
    question: "Deterministic replay of order flow enables?",
    options: ["Strategy backtesting parity", "Random fee selection", "Token inflation modeling", "Delayed settlement"],
    correct: 0,
    level: 8
  },
  {
    question: "Why does reduced bandwidth overhead matter during volatility spikes?",
    options: ["Higher token airdrops", "Less congestion aiding timely matching", "Instant oracle replacement", "UI brand consistency"],
    correct: 1,
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
    options: ["Variable tick size per node", "Gas multi-tier backlog", "Synchronized clock + deterministic engine", "Random UI theme"],
    correct: 2,
    level: 7
  },
  {
    question: "Perpetual contract funding payments discourage what imbalance?",
    options: ["Index duplication", "UI latency drift", "Validator churn", "Excessive net long or short skew"],
    correct: 3,
    level: 6
  },
  {
    question: "Insurance fund depletion may lead to what?",
    options: ["Fee amplification", "Higher maker slippage", "Tick timing randomization", "Socialized loss mechanisms"],
    correct: 3,
    level: 8
  },
  {
    question: "What edge does colocation-grade infra provide algorithms?",
    options: ["NFT floor discovery", "Higher swap fees", "Mining royalties", "Predictable low-latency execution"],
    correct: 3,
    level: 6
  },
  {
    question: "BulkTrade's fairness model primarily targets removal of?",
    options: ["Oracle divergence", "Preferential ordering advantages", "Wallet address collisions", "UI caching delays"],
    correct: 1,
    level: 7
  },
  {
    question: "Maintaining narrow spreads benefits?",
    options: ["Liquidation speed", "Validator downtime", "Higher latency", "Execution quality for all participants"],
    correct: 3,
    level: 5
  },
  {
    question: "What is a direct consequence of robust signature aggregation?",
    options: ["Forced cross margin", "Increased oracle dependence", "UI theme switching", "Lowered network confirmation overhead"],
    correct: 3,
    level: 7
  },
  {
    question: "Which protective mechanism helps ensure order data recoverability?",
    options: ["Random replays", "Fee escalation", "UI retry buttons", "Erasure coding fragments"],
    correct: 3,
    level: 7
  },
  {
    question: "Liquidation system design focuses on minimizing what systemic impact?",
    options: ["Collateral underflow contagion", "Validator churn", "UI personalization", "Tick compression"],
    correct: 0,
    level: 8
  },
  {
    question: "Accurate index pricing reduces risk of?",
    options: ["Signature duplication", "Funding rate manipulation", "UI scaling issues", "Validator slashing"],
    correct: 1,
    level: 7
  },
  {
    question: "Backtesting viability in deterministic engines improves?",
    options: ["Strategy confidence and optimization", "Wallet enumeration", "Oracle minting", "Gas fee volatility"],
    correct: 0,
    level: 8
  },
  {
    question: "High bandwidth efficiency helps prevent?",
    options: ["Token inflation", "Order propagation delays", "NFT duplication", "Fee tier collapse"],
    correct: 1,
    level: 6
  },
  {
    question: "Funding mechanics disincentivize extreme?",
    options: ["Perp directional skews", "Validator commission", "Oracle tick speed", "Spot drift re-aggregation"],
    correct: 0,
    level: 7
  },
  {
    question: "Efficient encoding of data shards increases?",
    options: ["Maker fee volatility", "Collateral borrow limits", "UI load time", "Resilience to transmission failures"],
    correct: 3,
    level: 7
  },
  {
    question: "Fair ordering reduces traders' need to overpay via?",
    options: ["Random signature bundling", "Gas price auctions", "Excess collateral", "UI refresh loops"],
    correct: 1,
    level: 7
  },
  {
    question: "Efficient liquidation prevents accumulation of?",
    options: ["Random tick slowdown", "Oracle replication", "Bad debt threatening solvency", "Excess spread compression"],
    correct: 2,
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
    options: ["Gas escrow", "Strategy viability and fairness", "Validator revenue inflation", "UI density"],
    correct: 1,
    level: 7
  },
  {
    question: "High volatility stress tests focus on what capacity?",
    options: ["NFT compression", "Frontend theming", "Wallet social hooks", "Order ingestion and matching throughput"],
    correct: 3,
    level: 8
  },
  {
    question: "Erasure coding fragment count selection balances?",
    options: ["Resilience vs overhead", "Oracle vs validator style", "UI vs theme speed", "Margin vs liquidation speed"],
    correct: 0,
    level: 8
  },
  {
    question: "Maintaining deterministic sequencing avoids reliance on?",
    options: ["Validator GPU rendering", "Priority gas auctions", "UI heuristics", "Oracle rebasing"],
    correct: 1,
    level: 7
  }
];



// https://github.com/xdevplatform/Twitter-API-v2-sample-code