import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Clock, 
  User, 
  Star, 
  ArrowLeft,
  CheckCircle,
  Heart,
  Share2
} from 'lucide-react';
import { getMeditationById } from '@/data/meditations';
import { useToast } from '@/hooks/use-toast';
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

const MeditationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', name: '' });

  const meditation = id ? getMeditationById(id) : null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipTime = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    const newVolume = value[0];
    setVolume(newVolume);
    if (audio) audio.volume = newVolume;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const submitReview = () => {
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      toast({
        title: "Please fill all fields",
        description: "Name and comment are required to submit a review.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Review submitted!",
      description: "Thank you for sharing your experience.",
    });

    setNewReview({ rating: 5, comment: '', name: '' });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!meditation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Meditation Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">The meditation you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/meditations">Browse All Meditations</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link to="/meditations">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Meditations
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img 
                src={imageMap[meditation.image] || meditation.image} 
                alt={meditation.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/90 text-white">
                  {meditation.category}
                </Badge>
                <Badge variant="secondary" className={getDifficultyColor(meditation.difficulty)}>
                  {meditation.difficulty}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {meditation.title}
              </h1>

              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {meditation.duration}
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {meditation.instructor}
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {meditation.description}
              </p>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {meditation.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-lg flex-1" asChild>
                  <a href="#audio-player">
                    <Play className="w-5 h-5 mr-2" />
                    Start Meditation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Favorites
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player */}
      <section id="audio-player" className="py-12 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-glow border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Meditation Player</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Audio Element */}
              <audio
                ref={audioRef}
                src={meditation.audioUrl}
                preload="metadata"
              />

              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress 
                  value={duration ? (currentTime / duration) * 100 : 0} 
                  className="h-2 cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const percent = (e.clientX - rect.left) / rect.width;
                    handleSeek([percent * duration]);
                  }}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={() => skipTime(-15)}
                >
                  <SkipBack className="w-5 h-5" />
                </Button>

                <Button 
                  size="lg" 
                  className="w-16 h-16 rounded-full bg-gradient-primary shadow-glow hover:shadow-lg"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </Button>

                <Button 
                  size="icon" 
                  variant="outline"
                  onClick={() => skipTime(15)}
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto">
                <Volume2 className="w-5 h-5 text-muted-foreground" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => handleVolumeChange([parseFloat(e.target.value)])}
                  className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Reviews & Ratings</h2>
            
            {/* Existing Reviews */}
            <div className="space-y-6 mb-12">
              {meditation.reviews.map((review) => (
                <Card key={review.id} className="border-border shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-semibold text-foreground">{review.userName}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">"{review.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add Review Form */}
            <Card className="border-primary/20 shadow-glow">
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="Enter your name"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Rating
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <Button
                          key={rating}
                          variant="ghost"
                          size="sm"
                          onClick={() => setNewReview({ ...newReview, rating })}
                          className="p-1"
                        >
                          <Star 
                            className={`w-6 h-6 ${rating <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
                          />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Review
                  </label>
                  <Textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your thoughts about this meditation..."
                    rows={4}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <Button 
                  onClick={submitReview}
                  className="w-full bg-gradient-primary shadow-glow hover:shadow-lg"
                >
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Meditations */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">More Like This</h2>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/meditations">
                Explore All Meditations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeditationDetail;
