import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Users, Award, Clock, Heart, Star, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-meditation.jpg';
import meditation1 from '@/assets/meditation-1.jpg';
import meditation2 from '@/assets/meditation-2.jpg';
import meditation3 from '@/assets/meditation-3.jpg';

const Home = () => {
  const features = [
    {
      icon: Play,
      title: 'Guided Meditations',
      description: 'Professional instructors guide you through peaceful meditation sessions tailored to your needs.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join thousands of meditators on their journey to mindfulness and inner peace.'
    },
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from certified meditation teachers with years of experience and wisdom.'
    },
    {
      icon: Clock,
      title: 'Flexible Sessions',
      description: 'Choose from 5-minute quick sessions to hour-long deep meditation practices.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      content: 'MindfulMeditation has transformed my daily routine. I feel more centered and peaceful than ever before.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content: 'The guided sessions help me manage stress and improve my focus at work. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Teacher',
      content: 'Beautiful interface and amazing content. The variety of meditations keeps me engaged every day.',
      rating: 5
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Happy Users' },
    { value: '100+', label: 'Meditations' },
    { value: '20+', label: 'Expert Instructors' },
    { value: '4.9★', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})` 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your 
              <span className="text-primary-glow block">Inner Peace</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Discover tranquility through guided meditation. Join thousands on their journey to mindfulness, 
              stress relief, and emotional well-being with our expert-led sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-glow hover:shadow-lg text-lg px-8 py-3 animate-scale-in"
                asChild
              >
                <Link to="/meditations">
                  <Play className="w-5 h-5 mr-2" />
                  Start Meditating Free
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-3"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse-soft"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose MindfulMeditation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide everything you need to start and maintain a meaningful meditation practice, 
              with guidance from world-class instructors and a supportive community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meditations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Meditations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start your journey with these popular meditation sessions, carefully selected for beginners and experienced practitioners alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { id: '1', title: 'Morning Zen Garden', duration: '10 min', image: meditation1, category: 'Morning' },
              { id: '2', title: 'Ocean Waves Serenity', duration: '15 min', image: meditation2, category: 'Relaxation' },
              { id: '3', title: 'Mountain Peak Focus', duration: '20 min', image: meditation3, category: 'Focus' }
            ].map((meditation) => (
              <Card key={meditation.id} className="group cursor-pointer border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={meditation.image} 
                    alt={meditation.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {meditation.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {meditation.title}
                  </h3>
                  <p className="text-muted-foreground">{meditation.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/meditations">
                View All Meditations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied users who have transformed their lives through meditation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Meditation Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Join our community today and discover the transformative power of meditation. 
              Start with our free guided sessions and build a practice that fits your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 shadow-lg"
                asChild
              >
                <Link to="/meditations">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Free Today
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="heroSecondary"
                className="text-lg px-8 py-3"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;