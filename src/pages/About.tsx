import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Award, 
  Target, 
  Mail, 
  Linkedin, 
  Twitter,
  Quote,
  CheckCircle,
  Lightbulb,
  Globe,
  Star,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Chief Meditation Officer",
      bio: "With over 15 years of experience in mindfulness-based therapy and meditation instruction, Sarah founded MindfulMeditation to make authentic meditation practices accessible to everyone.",
      credentials: ["PhD in Psychology", "Certified MBSR Instructor", "Author of 3 books on mindfulness"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Torres",
      role: "Lead Meditation Instructor",
      bio: "A former monk with 20 years of meditation experience, Michael brings deep wisdom and gentle guidance to help students develop sustainable practices.",
      credentials: ["Zen Master Certification", "Vipassana Teacher", "TEDx Speaker"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Anna Thompson",
      role: "Mindfulness for Workplace Specialist",
      bio: "Anna specializes in bringing mindfulness to corporate environments, helping thousands of professionals find balance and reduce stress.",
      credentials: ["Corporate Wellness Expert", "MBA", "Certified Life Coach"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "River Stone",
      role: "Sound Healing & Nature Meditation Guide",
      bio: "Combining ancient sound healing techniques with nature-based meditation, River creates deeply transformative experiences.",
      credentials: ["Sound Healing Practitioner", "Wilderness Guide", "Reiki Master"],
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "We approach every interaction with kindness, understanding that each person's journey is unique and worthy of respect."
    },
    {
      icon: Lightbulb,
      title: "Authentic Teaching",
      description: "Our practices are rooted in traditional wisdom while being presented in accessible, modern formats that honor their origins."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Meditation is for everyone. We create a welcoming space where people of all backgrounds can explore mindfulness."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "We believe inner peace should be available to all, regardless of location, economic status, or previous experience."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "MindfulMeditation Founded",
      description: "Started with a vision to make authentic meditation accessible to modern life."
    },
    {
      year: "2020",
      title: "First 10,000 Users",
      description: "Reached our first major milestone as people sought peace during challenging times."
    },
    {
      year: "2021",
      title: "Mobile App Launch",
      description: "Expanded accessibility with our mobile platform, bringing meditation everywhere."
    },
    {
      year: "2022",
      title: "Corporate Wellness Program",
      description: "Launched enterprise solutions, helping companies support employee well-being."
    },
    {
      year: "2023",
      title: "50,000+ Users Strong",
      description: "Built a thriving global community of mindfulness practitioners."
    },
    {
      year: "2024",
      title: "Advanced AI Integration",
      description: "Introduced personalized meditation recommendations and progress tracking."
    }
  ];

  const testimonials = [
    {
      quote: "MindfulMeditation didn't just teach me to meditate; it transformed how I relate to stress, relationships, and life itself.",
      author: "Jessica M.",
      role: "Teacher & Mother of Two"
    },
    {
      quote: "The instructors here understand that meditation isn't about perfection—it's about showing up with curiosity and kindness.",
      author: "David L.",
      role: "Software Engineer"
    },
    {
      quote: "I've tried many meditation apps, but the depth and authenticity here is unmatched. This is the real deal.",
      author: "Maria S.",
      role: "Healthcare Worker"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About MindfulMeditation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We believe that meditation has the power to transform lives and create a more peaceful world. 
              Founded in 2019, we've been dedicated to making authentic mindfulness practices accessible to everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-lg" asChild>
                <Link to="/meditations">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize access to authentic meditation practices, creating a global community where anyone can 
                find inner peace, reduce stress, and cultivate mindfulness regardless of their background or experience level.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We envision a world where meditation is as natural and accessible as taking a walk in the park—where 
                everyone has the tools they need to navigate life's challenges with greater ease, wisdom, and compassion.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Meditations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-muted-foreground">User Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-primary/20 rounded-2xl flex items-center justify-center shadow-card">
                <Heart className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from creating content to building our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to a global community—here's how MindfulMeditation has grown over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-border shadow-card hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-primary/90 text-white mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Teachers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team of certified instructors and meditation experts are here to guide you on your mindfulness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="w-full h-64 bg-gradient-primary/20 flex items-center justify-center">
                  <User className="w-24 h-24 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="space-y-2">
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                        {credential}
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10 p-1">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10 p-1">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10 p-1">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through meditation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Start your meditation journey today with guidance from our expert teachers and support from our global community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/meditations">
                <Heart className="w-5 h-5 mr-2" />
                Start Meditating Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Connect With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;