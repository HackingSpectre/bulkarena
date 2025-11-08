import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function debugDatabase() {
  try {
    const sql = neon(process.env.DATABASE_URL);
    
    console.log('🔍 Checking database tables...');
    
    // Check if tables exist
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    console.log('📋 Tables:', tables.map(t => t.table_name));
    
    // Check players table
    const players = await sql`SELECT * FROM players ORDER BY id`;
    console.log('👥 Players:', players);
    
    // Check scores table
    const scores = await sql`SELECT * FROM scores ORDER BY id`;
    console.log('🎯 Scores:', scores);
    
    // Check leaderboard query
    const leaderboard = await sql`
      SELECT p.name, MAX(s.score) as score
      FROM players p
      JOIN scores s ON p.id = s.player_id
      WHERE s.mode = 'challenge'
      GROUP BY p.id, p.name
      ORDER BY score DESC
      LIMIT 10
    `;
    console.log('🏆 Leaderboard:', leaderboard);
    
  } catch (error) {
    console.error('❌ Database error:', error);
  }
}

debugDatabase();