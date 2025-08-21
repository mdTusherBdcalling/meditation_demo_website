import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Video, 
  Headphones, 
  Download, 
  ExternalLink, 
  Clock,
  Users,
  Star,
  Play,
  FileText,
  Lightbulb,
  Heart,
  Brain,
  Smile,
  Bell
} from 'lucide-react';

const Resources = () => {
  const articles = [
    {
      id: 1,
      title: "The Science Behind Meditation: How It Changes Your Brain",
      excerpt: "Discover the fascinating neuroscience research that shows how regular meditation practice literally rewires your brain for better focus, emotional regulation, and well-being.",
      category: "Science",
      readTime: "8 min read",
      featured: true,
      icon: Brain
    },
    {
      id: 2,
      title: "Meditation for Beginners: A Complete Guide to Getting Started",
      excerpt: "Everything you need to know to begin your meditation journey, from choosing the right technique to creating a sustainable daily practice.",
      category: "Beginner",
      readTime: "12 min read",
      featured: true,
      icon: BookOpen
    },
    {
      id: 3,
      title: "Breathing Techniques for Stress Relief and Anxiety",
      excerpt: "Learn powerful breathing exercises that can instantly calm your nervous system and reduce stress in any situation.",
      category: "Techniques",
      readTime: "6 min read",
      featured: false,
      icon: Heart
    },
    {
      id: 4,
      title: "Creating a Sacred Space: Setting Up Your Meditation Area",
      excerpt: "Transform any corner of your home into a peaceful sanctuary that supports and enhances your meditation practice.",
      category: "Lifestyle",
      readTime: "5 min read",
      featured: false,
      icon: Lightbulb
    },
    {
      id: 5,
      title: "Mindfulness in Daily Life: Beyond the Meditation Cushion",
      excerpt: "Practical ways to bring mindfulness into your everyday activities, from eating and walking to working and communicating.",
      category: "Lifestyle",
      readTime: "10 min read",
      featured: true,
      icon: Smile
    },
    {
      id: 6,
      title: "The Benefits of Group Meditation: Finding Your Community",
      excerpt: "Explore how meditating with others can deepen your practice and provide support on your mindfulness journey.",
      category: "Community",
      readTime: "7 min read",
      featured: false,
      icon: Users
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Introduction to Mindfulness Meditation",
      duration: "15:30",
      instructor: "Dr. Sarah Johnson",
      thumbnail: "/api/placeholder/300/200",
      views: "125K",
      rating: 4.9
    },
    {
      id: 2,
      title: "Body Scan Meditation Tutorial",
      duration: "22:15",
      instructor: "Michael Chen",
      thumbnail: "/api/placeholder/300/200",
      views: "89K",
      rating: 4.8
    },
    {
      id: 3,
      title: "Loving-Kindness Meditation Practice",
      duration: "18:45",
      instructor: "Emma Rodriguez",
      thumbnail: "/api/placeholder/300/200",
      views: "67K",
      rating: 4.9
    }
  ];

  const downloads = [
    {
      id: 1,
      title: "21-Day Meditation Challenge Workbook",
      type: "PDF Guide",
      size: "2.1 MB",
      description: "A comprehensive guide to establishing a daily meditation practice with daily exercises, reflections, and progress tracking.",
      icon: FileText
    },
    {
      id: 2,
      title: "Meditation Timer with Bells",
      type: "Audio Files",
      size: "15.3 MB",
      description: "Beautiful meditation timer with various bell sounds for different session lengths (5, 10, 15, 20, 30, 45, 60 minutes).",
      icon: Headphones
    },
    {
      id: 3,
      title: "Mindfulness Exercises for Kids",
      type: "PDF + Audio",
      size: "8.7 MB",
      description: "Fun and engaging mindfulness activities designed specifically for children aged 5-12, including guided imagery and breathing games.",
      icon: BookOpen
    }
  ];

  const tools = [
    {
      name: "Meditation Progress Tracker",
      description: "Track your daily meditation sessions, monitor your progress, and celebrate milestones in your mindfulness journey.",
      icon: Clock,
      type: "Web Tool"
    },
    {
      name: "Breathing Exercise Guide",
      description: "Interactive breathing patterns with visual guides for various techniques like 4-7-8 breathing and box breathing.",
      icon: Heart,
      type: "Interactive"
    },
    {
      name: "Mindfulness Reminder System",
      description: "Set gentle reminders throughout your day to practice mini-mindfulness moments and stay present.",
      icon: Bell,
      type: "Utility"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meditation Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Deepen your practice with our comprehensive collection of articles, videos, guides, and tools. 
              Everything you need to support your mindfulness journey and expand your understanding of meditation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Articles
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Download className="w-5 h-5 mr-2" />
                Free Downloads
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth guides and insights to help you understand and improve your meditation practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {articles.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="group cursor-pointer border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/90 text-white">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="ghost" className="text-primary hover:bg-primary/10 p-0">
                    Read Article <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="group cursor-pointer border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      {/* <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Video Tutorials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from expert instructors with our comprehensive video library covering various meditation techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="group cursor-pointer border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-primary/20 flex items-center justify-center">
                    <Video className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{video.instructor}</span>
                    <div className="flex items-center space-x-3">
                      <span>{video.views} views</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {video.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Free Downloads */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Downloads
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take your practice offline with our collection of guides, workbooks, and audio resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((download) => (
              <Card key={download.id} className="border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-soft">
                    <download.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{download.type}</Badge>
                    <span className="text-sm text-muted-foreground">{download.size}</span>
                  </div>
                  <CardTitle className="text-xl">{download.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {download.description}
                  </p>
                  <Button className="w-full bg-gradient-primary shadow-glow hover:shadow-lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Tools */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meditation Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your practice with our interactive tools and utilities designed to support your meditation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-3">{tool.type}</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{tool.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Try Tool <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want More Resources?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our newsletter to receive new articles, meditation guides, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Suggest a Resource</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;