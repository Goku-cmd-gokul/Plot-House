import { motion } from 'framer-motion';
import { Play, BookOpen, Film, Clock, Star, Heart } from 'lucide-react';
import { useState } from 'react';

export type ContentType = 'book' | 'movie' | 'short';

interface ContentCardProps {
  id: string;
  title: string;
  creator: string;
  coverImage: string;
  type: ContentType;
  duration?: string;
  rating: number;
  genres: string[];
  mood?: string;
  isPromoted?: boolean;
}

const typeIcons = {
  book: BookOpen,
  movie: Film,
  short: Play,
};

const typeLabels = {
  book: 'Book',
  movie: 'Movie',
  short: 'Short Film',
};

export const ContentCard = ({
  title,
  creator,
  coverImage,
  type,
  duration,
  rating,
  genres,
  mood,
  isPromoted,
}: ContentCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const Icon = typeIcons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="content-card group cursor-pointer"
    >
      {/* Cover Image */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cinema-black/70 backdrop-blur-sm text-xs font-medium">
          <Icon className="h-3.5 w-3.5 text-primary" />
          <span className="text-foreground">{typeLabels[type]}</span>
        </div>

        {/* Promoted Badge */}
        {isPromoted && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary/90 text-xs font-semibold text-primary-foreground">
            Featured
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-cinema-black/50 backdrop-blur-sm text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20"
          style={{ top: isPromoted ? '44px' : '12px' }}
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? 'fill-primary text-primary' : ''
            }`}
          />
        </button>

        {/* Play Button (for movies/shorts) */}
        {type !== 'book' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 rounded-full bg-primary/90 text-primary-foreground glow-gold">
              <Play className="h-8 w-8 fill-current" />
            </div>
          </div>
        )}

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {/* Mood Tag */}
          {mood && (
            <span className="inline-block px-2 py-0.5 mb-2 rounded text-xs font-medium bg-primary/20 text-primary">
              {mood}
            </span>
          )}
          
          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-2 mb-1">
            {title}
          </h3>
          
          {/* Creator */}
          <p className="text-sm text-muted-foreground mb-2">{creator}</p>
          
          {/* Meta Info */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" />
              <span>{rating.toFixed(1)}</span>
            </div>
            {duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Genres (shown below card) */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {genres.slice(0, 3).map((genre) => (
          <span
            key={genre}
            className="px-2 py-0.5 rounded text-xs text-muted-foreground bg-secondary"
          >
            {genre}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
