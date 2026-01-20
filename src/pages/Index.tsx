import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  Film,
  Play,
  ArrowRight,
  Users,
  Zap,
  Target,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContentCard } from '@/components/ContentCard';
import { MoodChat } from '@/components/MoodChat';
import heroBg from '@/assets/hero-bg.jpg';

const featuredContent = [
  {
    id: '1',
    title: 'The Midnight Library',
    creator: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    type: 'book' as const,
    rating: 4.8,
    genres: ['Fiction', 'Fantasy', 'Philosophy'],
    mood: 'Introspective',
    isPromoted: true,
  },
  {
    id: '2',
    title: 'Eternal Sunshine',
    creator: 'Michel Gondry',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop',
    type: 'movie' as const,
    duration: '1h 48m',
    rating: 4.6,
    genres: ['Drama', 'Romance', 'Sci-Fi'],
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
  {
    id: '4',
    title: 'Dune: Messiah',
    creator: 'Frank Herbert',
    coverImage: 'https://images.unsplash.com/photo-1618945524163-32451704cbb8?w=400&h=600&fit=crop',
    type: 'book' as const,
    rating: 4.7,
    genres: ['Sci-Fi', 'Adventure'],
    mood: 'Epic',
  },
];

const stats = [
  { label: 'Active Users', value: '2.5M+', icon: Users },
  { label: 'Content Pieces', value: '150K+', icon: BookOpen },
  { label: 'Creators', value: '12K+', icon: Star },
  { label: 'AI Recommendations', value: '5M+', icon: Zap },
];

const features = [
  {
    icon: Sparkles,
    title: 'AI Mood Matching',
    description:
      'Tell us how you feel, and our AI finds the perfect book, movie, or short film for your current mood.',
  },
  {
    icon: Target,
    title: 'Taste Profile',
    description:
      'Your personal taste evolves with every interaction. Watch it grow and discover new patterns in your preferences.',
  },
  {
    icon: Zap,
    title: 'Smart Challenges',
    description:
      'Join curated challenges that push your boundaries and help you discover content you never knew you needed.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="PlotHouse Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                AI-Powered Story Discovery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Find Stories That{' '}
              <span className="text-gradient-gold">Match Your Mood</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Discover books, movies, and short films curated just for you by AI
              that understands your emotions and taste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/signup">
                <Button className="btn-cinema text-lg px-8 py-6 h-auto">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button
                  variant="outline"
                  className="btn-ghost-gold text-lg px-8 py-6 h-auto"
                >
                  Explore Content
                </Button>
              </Link>
            </motion.div>

            {/* Content Type Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { icon: BookOpen, label: 'Books', count: '45K+' },
                { icon: Film, label: 'Movies', count: '78K+' },
                { icon: Play, label: 'Short Films', count: '27K+' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{item.label}</span>
                  <span className="text-muted-foreground">({item.count})</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Why <span className="text-gradient-gold">PlotHouse</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just recommend content. We understand you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-colors"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Demo Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="h-3 w-3" />
                Try It Now
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Your Personal <span className="text-gradient-gold">Mood Guide</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Just tell our AI how you're feeling, and it'll find the perfect
                story for your current state of mind. No more endless scrolling.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'Understands emotional context',
                  'Learns from your preferences',
                  'Explains why each recommendation fits',
                  'Adapts to your time availability',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <MoodChat />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="text-gradient-gold">Today</span>
              </h2>
              <p className="text-muted-foreground">
                Hand-picked by our AI based on trending moods
              </p>
            </div>
            <Link to="/explore">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80 mt-4 md:mt-0"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredContent.map((content) => (
              <ContentCard key={content.id} {...content} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Discover Your Next{' '}
              <span className="text-gradient-gold">Favorite Story</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join millions of readers and viewers who've found their perfect
              content match through PlotHouse.
            </p>
            <Link to="/signup">
              <Button className="btn-cinema text-lg px-8 py-6 h-auto animate-pulse-glow">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
