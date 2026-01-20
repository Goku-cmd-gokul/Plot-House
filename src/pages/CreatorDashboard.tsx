import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Upload,
  BarChart3,
  Megaphone,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Eye,
  Heart,
  BookOpen,
  Film,
  Play,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/creator' },
  { name: 'Upload', icon: Upload, path: '/creator/upload' },
  { name: 'Analytics', icon: BarChart3, path: '/creator/analytics' },
  { name: 'Promote', icon: Megaphone, path: '/creator/promote' },
  { name: 'Earnings', icon: DollarSign, path: '/creator/earnings' },
];

const stats = [
  { label: 'Total Views', value: '124.5K', change: '+12%', icon: Eye },
  { label: 'Total Likes', value: '8.2K', change: '+8%', icon: Heart },
  { label: 'Content Pieces', value: '23', change: '+2', icon: BookOpen },
  { label: 'Revenue', value: '$2,450', change: '+15%', icon: DollarSign },
];

const myContent = [
  {
    id: '1',
    title: 'The Hidden Path',
    type: 'book',
    views: 45200,
    likes: 3200,
    status: 'published',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Shadows of Tomorrow',
    type: 'movie',
    views: 78500,
    likes: 4100,
    status: 'published',
    date: '2024-01-10',
  },
  {
    id: '3',
    title: 'First Light',
    type: 'short',
    views: 12300,
    likes: 890,
    status: 'pending',
    date: '2024-01-18',
  },
];

const typeIcons = {
  book: BookOpen,
  movie: Film,
  short: Play,
};

const CreatorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

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

          {/* Creator Badge */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-xs text-primary font-medium">Creator Account</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name.toLowerCase())}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.name.toLowerCase()
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
                <span className="text-primary font-semibold">SC</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  Sarah Chen
                </p>
                <p className="text-xs text-muted-foreground">Verified Creator</p>
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
        <header className="sticky top-0 z-40 h-16 flex items-center justify-between gap-4 px-4 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div>
              <h1 className="font-semibold text-foreground">Creator Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Manage your content and earnings
              </p>
            </div>
          </div>
          <Button className="btn-cinema">
            <Plus className="h-4 w-4 mr-2" />
            Upload Content
          </Button>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="flex items-center gap-1 text-sm text-green-500">
                        <TrendingUp className="h-3 w-3" />
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </section>

              {/* My Content */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    My Content
                  </h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="glass-card rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                          Title
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                          Type
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                          Views
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                          Likes
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                          Status
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myContent.map((content) => {
                        const Icon = typeIcons[content.type as keyof typeof typeIcons];
                        return (
                          <tr
                            key={content.id}
                            className="border-t border-border hover:bg-secondary/30 transition-colors"
                          >
                            <td className="p-4">
                              <p className="font-medium text-foreground">
                                {content.title}
                              </p>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-primary" />
                                <span className="text-sm text-muted-foreground capitalize">
                                  {content.type}
                                </span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">
                              {content.views.toLocaleString()}
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">
                              {content.likes.toLocaleString()}
                            </td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  content.status === 'published'
                                    ? 'bg-green-500/10 text-green-500'
                                    : 'bg-yellow-500/10 text-yellow-500'
                                }`}
                              >
                                {content.status}
                              </span>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">
                              {content.date}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Promote Section */}
              <section>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Megaphone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        Boost Your Content
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get featured placement and AI recommendation priority for
                        your content.
                      </p>
                      <Button className="btn-cinema">
                        Promote Content
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="max-w-2xl mx-auto">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-semibold mb-6 text-foreground">
                  Upload New Content
                </h2>
                <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Drag & drop your files here
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse (PDF, EPUB, MP4, MOV)
                  </p>
                  <Button className="btn-cinema">Choose Files</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="glass-card rounded-2xl p-8 text-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Analytics Dashboard
              </h2>
              <p className="text-muted-foreground">
                Detailed analytics will be available here.
              </p>
            </div>
          )}

          {activeTab === 'promote' && (
            <div className="glass-card rounded-2xl p-8 text-center">
              <Megaphone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Promote Your Content
              </h2>
              <p className="text-muted-foreground">
                Promotion tools will be available here.
              </p>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="glass-card rounded-2xl p-8 text-center">
              <DollarSign className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Earnings & Payments
              </h2>
              <p className="text-muted-foreground">
                Earnings tracking will be available here.
              </p>
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

export default CreatorDashboard;
