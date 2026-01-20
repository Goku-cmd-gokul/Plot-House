import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChallengeCard } from '@/components/ChallengeCard';
import { Sparkles, Trophy, Users } from 'lucide-react';

const challenges = [
  {
    id: '1',
    title: '7-Day Comfort Watch',
    description: 'Watch feel-good content every day for a week. Perfect for unwinding after long days.',
    icon: '🌟',
    progress: 0,
    totalItems: 7,
    completedItems: 0,
    participants: 12500,
    daysLeft: 30,
    reward: 'Gold Badge',
  },
  {
    id: '2',
    title: 'Around the World',
    description: 'Experience stories from 5 different countries and cultures.',
    icon: '🌍',
    progress: 0,
    totalItems: 5,
    completedItems: 0,
    participants: 8200,
    daysLeft: 45,
    isSponsored: true,
    reward: 'Special Badge',
  },
  {
    id: '3',
    title: 'Perspective Shift',
    description: 'Watch 3 films that will change how you see the world.',
    icon: '🔮',
    progress: 0,
    totalItems: 3,
    completedItems: 0,
    participants: 5600,
    daysLeft: 21,
    reward: 'Silver Badge',
  },
  {
    id: '4',
    title: 'Read the Classics',
    description: 'Journey through 10 timeless literary masterpieces.',
    icon: '📚',
    progress: 0,
    totalItems: 10,
    completedItems: 0,
    participants: 15300,
    daysLeft: 90,
    reward: 'Platinum Badge',
  },
  {
    id: '5',
    title: 'Short Film Sprint',
    description: 'Discover 15 amazing short films in 15 days.',
    icon: '🎬',
    progress: 0,
    totalItems: 15,
    completedItems: 0,
    participants: 7800,
    daysLeft: 15,
    isSponsored: true,
    reward: 'Film Buff Badge',
  },
  {
    id: '6',
    title: 'Emotional Rollercoaster',
    description: 'Experience the full spectrum of emotions through carefully curated content.',
    icon: '🎢',
    progress: 0,
    totalItems: 8,
    completedItems: 0,
    participants: 4200,
    daysLeft: 28,
    reward: 'Bronze Badge',
  },
];

const stats = [
  { label: 'Active Challenges', value: '24', icon: Trophy },
  { label: 'Total Participants', value: '125K+', icon: Users },
  { label: 'Badges Earned', value: '450K+', icon: Sparkles },
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Trophy className="h-4 w-4" />
              Gamified Discovery
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Challenges & <span className="text-gradient-gold">Quests</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Push your boundaries, discover new favorites, and earn badges along the way.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} {...challenge} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Challenges;
