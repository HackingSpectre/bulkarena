"use client";

interface GameIcon3DProps {
  type: 'puzzle' | 'quiz' | 'challenge';
  className?: string;
}

export default function GameIcon3D({ type, className = "" }: GameIcon3DProps) {
  const getIconSVG = () => {
    switch (type) {
      case 'puzzle':
        return (
          <svg 
            viewBox="0 0 100 100" 
            className={`w-16 h-16 ${className}`}
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              transform: 'perspective(100px) rotateX(5deg) rotateY(-5deg)'
            }}
          >
            <defs>
              <linearGradient id="puzzleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8F8FF" />
                <stop offset="100%" stopColor="#CCCCCC" />
              </linearGradient>
            </defs>
            {/* Puzzle piece shape */}
            <path
              d="M20 20 L40 20 Q45 15 50 20 Q55 25 50 30 L50 40 Q45 45 40 40 L30 40 Q25 45 20 40 Z"
              fill="url(#puzzleGrad)"
              stroke="#999"
              strokeWidth="2"
            />
            <path
              d="M50 20 L70 20 L70 40 Q75 45 70 50 Q65 55 70 60 L70 80 L50 80 L50 60 Q45 55 50 50 Q55 45 50 40 Z"
              fill="url(#puzzleGrad)"
              stroke="#999"
              strokeWidth="2"
            />
            <path
              d="M20 40 L40 40 Q45 35 50 40 L50 60 Q45 65 40 60 L20 60 Q15 55 20 50 Q25 45 20 40 Z"
              fill="url(#puzzleGrad)"
              stroke="#999"
              strokeWidth="2"
            />
            <path
              d="M50 60 L70 60 Q75 55 80 60 L80 80 L50 80 Z"
              fill="url(#puzzleGrad)"
              stroke="#999"
              strokeWidth="2"
            />
          </svg>
        );
      
      case 'quiz':
        return (
          <svg 
            viewBox="0 0 100 100" 
            className={`w-16 h-16 ${className}`}
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              transform: 'perspective(100px) rotateX(5deg) rotateY(-5deg)'
            }}
          >
            <defs>
              <linearGradient id="quizGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8F8FF" />
                <stop offset="100%" stopColor="#CCCCCC" />
              </linearGradient>
            </defs>
            {/* Chart bars */}
            <rect x="20" y="60" width="12" height="30" fill="url(#quizGrad)" rx="2" />
            <rect x="36" y="45" width="12" height="45" fill="url(#quizGrad)" rx="2" />
            <rect x="52" y="35" width="12" height="55" fill="url(#quizGrad)" rx="2" />
            <rect x="68" y="50" width="12" height="40" fill="url(#quizGrad)" rx="2" />
            {/* Trend line */}
            <path
              d="M25 65 Q38 50 45 40 Q58 30 75 55"
              stroke="#666"
              strokeWidth="2"
              fill="none"
            />
            {/* Data points */}
            <circle cx="26" cy="65" r="3" fill="#F8F8FF" />
            <circle cx="42" cy="50" r="3" fill="#F8F8FF" />
            <circle cx="58" cy="40" r="3" fill="#F8F8FF" />
            <circle cx="74" cy="55" r="3" fill="#F8F8FF" />
          </svg>
        );
      
      case 'challenge':
        return (
          <svg 
            viewBox="0 0 100 100" 
            className={`w-16 h-16 ${className}`}
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              transform: 'perspective(100px) rotateX(5deg) rotateY(-5deg)'
            }}
          >
            <defs>
              <linearGradient id="challengeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8F8FF" />
                <stop offset="100%" stopColor="#CCCCCC" />
              </linearGradient>
            </defs>
            {/* Lightning bolt */}
            <path
              d="M45 10 L35 45 L50 45 L40 90 L65 50 L50 50 L60 10 Z"
              fill="url(#challengeGrad)"
              stroke="#999"
              strokeWidth="2"
            />
            {/* Energy rings */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#F8F8FF" strokeWidth="1" opacity="0.3" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="#F8F8FF" strokeWidth="1" opacity="0.2" />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
      {getIconSVG()}
    </div>
  );
}