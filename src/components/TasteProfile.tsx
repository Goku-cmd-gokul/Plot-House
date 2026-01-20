import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Clock, Heart, Zap } from 'lucide-react';

interface TasteCategory {
  name: string;
  value: number;
  color: string;
}

const tasteData: TasteCategory[] = [
  { name: 'Drama', value: 85, color: 'hsl(38 92% 50%)' },
  { name: 'Sci-Fi', value: 72, color: 'hsl(200 80% 50%)' },
  { name: 'Romance', value: 65, color: 'hsl(340 80% 55%)' },
  { name: 'Thriller', value: 58, color: 'hsl(0 72% 51%)' },
  { name: 'Comedy', value: 45, color: 'hsl(45 95% 55%)' },
  { name: 'Documentary', value: 38, color: 'hsl(150 60% 45%)' },
];

const moodPreferences = [
  { mood: 'Introspective', icon: '🌙', percentage: 42 },
  { mood: 'Uplifting', icon: '☀️', percentage: 28 },
  { mood: 'Intense', icon: '🔥', percentage: 18 },
  { mood: 'Relaxing', icon: '🍃', percentage: 12 },
];

const stats = [
  { label: 'Books Read', value: '47', icon: TrendingUp },
  { label: 'Movies Watched', value: '128', icon: Clock },
  { label: 'Short Films', value: '89', icon: Zap },
  { label: 'Favorites', value: '34', icon: Heart },
];

export const TasteProfile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Your Taste Profile
            </h2>
            <p className="text-sm text-muted-foreground">
              Based on your watching & reading history
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-secondary/50 text-center"
            >
              <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Genre Preferences */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Genre Preferences</h3>
        <div className="space-y-4">
          {tasteData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-foreground">{category.name}</span>
                <span className="text-sm text-muted-foreground">{category.value}%</span>
              </div>
              <div className="progress-gold">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${category.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="progress-gold-fill"
                  style={{
                    background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mood Preferences */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Mood Preferences</h3>
        <div className="grid grid-cols-2 gap-3">
          {moodPreferences.map((mood, index) => (
            <motion.div
              key={mood.mood}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-secondary/50 flex items-center gap-3"
            >
              <span className="text-2xl">{mood.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{mood.mood}</p>
                <p className="text-xs text-muted-foreground">{mood.percentage}% of content</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Taste Evolution */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Taste Evolution</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex-1 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-green-400 font-medium">↑ Sci-Fi +12%</p>
            <p className="text-xs text-muted-foreground">This month</p>
          </div>
          <div className="flex-1 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 font-medium">↓ Horror -8%</p>
            <p className="text-xs text-muted-foreground">This month</p>
          </div>
          <div className="flex-1 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-primary font-medium">★ Drama</p>
            <p className="text-xs text-muted-foreground">Top genre</p>
          </div>
        </div>
      </div>
    </div>
  );
};
