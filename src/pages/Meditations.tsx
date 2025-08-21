import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Play, Clock, User, Search, Filter } from 'lucide-react';
import { meditations } from '@/data/meditations';
import meditation1 from '@/assets/meditation-1.jpg';
import meditation2 from '@/assets/meditation-2.jpg';
import meditation3 from '@/assets/meditation-3.jpg';
import meditation4 from '@/assets/meditation-4.jpg';
import meditation5 from '@/assets/meditation-5.jpg';
import meditation6 from '@/assets/meditation-6.jpg';
import meditation7 from '@/assets/meditation-7.jpg';
import meditation8 from '@/assets/meditation-8.jpg';
import meditation9 from '@/assets/meditation-9.jpg';

const imageMap: { [key: string]: string } = {
  '/src/assets/meditation-1.jpg': meditation1,
  '/src/assets/meditation-2.jpg': meditation2,
  '/src/assets/meditation-3.jpg': meditation3,
  '/src/assets/meditation-4.jpg': meditation4,
  '/src/assets/meditation-5.jpg': meditation5,
  '/src/assets/meditation-6.jpg': meditation6,
  '/src/assets/meditation-7.jpg': meditation7,
  '/src/assets/meditation-8.jpg': meditation8,
  '/src/assets/meditation-9.jpg': meditation9,
};

const Meditations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', 'Morning', 'Relaxation', 'Focus', 'Nature', 'Spiritual', 'Sleep', 'Mindfulness', 'Contemplative', 'Renewal'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredMeditations = meditations.filter(meditation => {
    const matchesSearch = meditation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meditation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || meditation.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || meditation.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Guided Meditations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover inner peace with our collection of expertly crafted meditation sessions. 
              Choose from various themes, durations, and difficulty levels to find the perfect practice for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search meditations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter by:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-muted/50 border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-40 bg-muted/50 border-border">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Levels' : difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredMeditations.length} of {meditations.length} meditations
          </div>
        </div>
      </section>

      {/* Meditations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMeditations.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-muted-foreground text-lg mb-4">No meditations found matching your criteria</div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMeditations.map((meditation) => (
                <Card key={meditation.id} className="group cursor-pointer border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden animate-fade-in">
                  <div className="relative overflow-hidden">
                    <img 
                      src={imageMap[meditation.image] || meditation.image} 
                      alt={meditation.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-white hover:bg-primary">
                        {meditation.category}
                      </Badge>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className={getDifficultyColor(meditation.difficulty)}>
                        {meditation.difficulty}
                      </Badge>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30" asChild>
                        <Link to={`/meditations/${meditation.id}`}>
                          <Play className="w-6 h-6 mr-2" />
                          Start Session
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {meditation.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {meditation.instructor}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {meditation.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {meditation.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {meditation.benefits.slice(0, 2).map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                      {meditation.benefits.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{meditation.benefits.length - 2} more
                        </Badge>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {'★'.repeat(5)}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">
                          ({meditation.reviews.length} reviews)
                        </span>
                      </div>
                      
                      <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10" asChild>
                        <Link to={`/meditations/${meditation.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly adding new meditations to our library. Get in touch to suggest new topics or request custom guided sessions.
          </p>
          <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-lg" asChild>
            <Link to="/contact">
              Request a Meditation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Meditations;