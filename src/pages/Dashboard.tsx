import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Compass,
  Sparkles,
  Target,
  Trophy,
  Bookmark,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MoodChat } from '@/components/MoodChat';
import { TasteProfile } from '@/components/TasteProfile';
import { ContentCard } from '@/components/ContentCard';
import { ChallengeCard } from '@/components/ChallengeCard';

const sidebarLinks = [
  { name: 'Home', icon: Home, path: '/dashboard' },
  { name: 'Explore', icon: Compass, path: '/explore' },
  { name: 'Mood Assistant', icon: Sparkles, path: '/dashboard/chat' },
  { name: 'Taste Profile', icon: Target, path: '/dashboard/taste' },
  { name: 'Challenges', icon: Trophy, path: '/dashboard/challenges' },
  { name: 'Saved', icon: Bookmark, path: '/dashboard/saved' },
];

const recommendedContent = [
  {
    id: '1',
    title: 'The Midnight Library',
    creator: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    type: 'book' as const,
    rating: 4.8,
    genres: ['Fiction', 'Fantasy'],
    mood: 'Introspective',
  },
  {
    id: '2',
    title: 'Eternal Sunshine',
    creator: 'Michel Gondry',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
    type: 'movie' as const,
    duration: '1h 48m',
    rating: 4.6,
    genres: ['Drama', 'Romance'],
    mood: 'Melancholic',
  },
  {
    id: '3',
    title: 'Whispers of Light',
    creator: 'Sarah Chen',
    coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
    type: 'short' as const,
    duration: '12 min',
    rating: 4.9,
    genres: ['Drama', 'Art House'],
    mood: 'Uplifting',
  },
];

const activeChallenges = [
  {
    id: '1',
    title: '7-Day Comfort Watch',
    description: 'Watch feel-good content every day for a week',
    icon: '🌟',
    progress: 71,
    totalItems: 7,
    completedItems: 5,
    participants: 12500,
    daysLeft: 2,
    reward: 'Gold Badge',
  },
  {
    id: '2',
    title: 'Around the World',
    description: 'Experience stories from 5 different countries',
    icon: '🌍',
    progress: 40,
    totalItems: 5,
    completedItems: 2,
    participants: 8200,
    daysLeft: 14,
    isSponsored: true,
    reward: 'Special Badge',
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold text-gradient-gold">
                PlotHouse
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-sidebar-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name.toLowerCase().replace(' ', '-'))}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.name.toLowerCase().replace(' ', '-')
                    ? 'bg-sidebar-accent text-sidebar-primary'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </button>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-semibold">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  John Doe
                </p>
                <p className="text-xs text-muted-foreground">Premium Member</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1 text-sidebar-foreground">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 h-16 flex items-center gap-4 px-4 bg-background/80 backdrop-blur-xl border-b border-border">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1">
            <h1 className="font-semibold text-foreground">
              Welcome back, John! 👋
            </h1>
            <p className="text-sm text-muted-foreground">
              Ready to discover your next favorite story?
            </p>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 lg:p-8">
          {activeTab === 'home' && (
            <div className="space-y-8">
              {/* Quick Actions */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Continue Your Journey
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => setActiveTab('mood-assistant')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          Get Recommendations
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Tell me your mood
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => setActiveTab('taste-profile')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          Taste Profile
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          View your preferences
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card rounded-xl p-6 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => setActiveTab('challenges')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          Active Challenges
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          2 in progress
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Recommended For You */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Recommended For You
                  </h2>
                  <Link to="/explore">
                    <Button variant="ghost" className="text-primary">
                      See All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {recommendedContent.map((content) => (
                    <ContentCard key={content.id} {...content} />
                  ))}
                </div>
              </section>

              {/* Active Challenges */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Your Challenges
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {activeChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'mood-assistant' && (
            <div className="max-w-2xl mx-auto">
              <MoodChat />
            </div>
          )}

          {activeTab === 'taste-profile' && (
            <div className="max-w-2xl mx-auto">
              <TasteProfile />
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Challenges & Quests
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {activeChallenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} {...challenge} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
