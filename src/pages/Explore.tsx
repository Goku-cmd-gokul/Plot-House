import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Film, Play, Grid, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContentCard, ContentType } from '@/components/ContentCard';

const allContent = [
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
  {
    id: '5',
    title: 'Arrival',
    creator: 'Denis Villeneuve',
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
    type: 'movie' as const,
    duration: '1h 56m',
    rating: 4.8,
    genres: ['Sci-Fi', 'Drama'],
    mood: 'Contemplative',
  },
  {
    id: '6',
    title: 'The Art of Racing in the Rain',
    creator: 'Garth Stein',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    type: 'book' as const,
    rating: 4.5,
    genres: ['Fiction', 'Drama'],
    mood: 'Heartwarming',
  },
  {
    id: '7',
    title: 'Lost in Translation',
    creator: 'Sofia Coppola',
    coverImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop',
    type: 'movie' as const,
    duration: '1h 42m',
    rating: 4.4,
    genres: ['Drama', 'Romance'],
    mood: 'Melancholic',
  },
  {
    id: '8',
    title: 'Between Worlds',
    creator: 'James Liu',
    coverImage: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
    type: 'short' as const,
    duration: '8 min',
    rating: 4.7,
    genres: ['Fantasy', 'Animation'],
    mood: 'Magical',
  },
];

const genres = [
  'All Genres',
  'Fiction',
  'Sci-Fi',
  'Drama',
  'Romance',
  'Fantasy',
  'Thriller',
  'Comedy',
  'Documentary',
];

const moods = [
  'All Moods',
  'Uplifting',
  'Melancholic',
  'Intense',
  'Contemplative',
  'Heartwarming',
  'Epic',
  'Magical',
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ContentType | 'all'>('all');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [selectedMood, setSelectedMood] = useState('All Moods');
  const [showFilters, setShowFilters] = useState(false);

  const filteredContent = allContent.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || content.type === selectedType;
    const matchesGenre =
      selectedGenre === 'All Genres' || content.genres.includes(selectedGenre);
    const matchesMood =
      selectedMood === 'All Moods' || content.mood === selectedMood;

    return matchesSearch && matchesType && matchesGenre && matchesMood;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedGenre('All Genres');
    setSelectedMood('All Moods');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedType !== 'all' ||
    selectedGenre !== 'All Genres' ||
    selectedMood !== 'All Moods';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-8 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Explore <span className="text-gradient-gold">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover books, movies, and short films that match your taste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          {/* Search & Type Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search titles, creators..."
                className="pl-10 bg-secondary border-border"
              />
            </div>

            {/* Type Pills */}
            <div className="flex gap-2">
              {[
                { value: 'all' as const, label: 'All', icon: Grid },
                { value: 'book' as const, label: 'Books', icon: BookOpen },
                { value: 'movie' as const, label: 'Movies', icon: Film },
                { value: 'short' as const, label: 'Shorts', icon: Play },
              ].map((type) => (
                <Button
                  key={type.value}
                  variant={selectedType === type.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(type.value)}
                  className={
                    selectedType === type.value
                      ? 'bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground'
                  }
                >
                  <type.icon className="h-4 w-4 mr-1" />
                  {type.label}
                </Button>
              ))}
            </div>

            {/* More Filters Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="border-border"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-4 pt-4 border-t border-border"
            >
              {/* Genre Filter */}
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">
                  Genre
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => setSelectedGenre(genre)}
                      className={`mood-chip text-xs ${
                        selectedGenre === genre ? 'active' : ''
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood Filter */}
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">
                  Mood
                </label>
                <div className="flex flex-wrap gap-2">
                  {moods.map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`mood-chip text-xs ${
                        selectedMood === mood ? 'active' : ''
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-primary hover:text-primary/80"
              >
                <X className="h-3 w-3 mr-1" />
                Clear all
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredContent.length} results
          </p>

          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredContent.map((content) => (
                <ContentCard key={content.id} {...content} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">
                No content found matching your filters.
              </p>
              <Button onClick={clearFilters} className="btn-cinema">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;
