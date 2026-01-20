import { motion } from 'framer-motion';
import { Trophy, Users, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChallengeCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  totalItems: number;
  completedItems: number;
  participants: number;
  daysLeft: number;
  isSponsored?: boolean;
  reward?: string;
}

export const ChallengeCard = ({
  title,
  description,
  icon,
  progress,
  totalItems,
  completedItems,
  participants,
  daysLeft,
  isSponsored,
  reward,
}: ChallengeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Sponsored Badge */}
      {isSponsored && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 text-xs font-medium text-primary">
          <Sparkles className="h-3 w-3" />
          Sponsored
        </div>
      )}

      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="text-muted-foreground">Progress</span>
          <span className="text-foreground font-medium">
            {completedItems} / {totalItems}
          </span>
        </div>
        <div className="progress-gold">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="progress-gold-fill"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          <span>{participants.toLocaleString()} joined</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{daysLeft} days left</span>
        </div>
        {reward && (
          <div className="flex items-center gap-1.5 text-primary">
            <Trophy className="h-3.5 w-3.5" />
            <span>{reward}</span>
          </div>
        )}
      </div>

      {/* Action */}
      <Button
        variant="ghost"
        className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10"
      >
        {progress > 0 ? 'Continue Challenge' : 'Start Challenge'}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};
