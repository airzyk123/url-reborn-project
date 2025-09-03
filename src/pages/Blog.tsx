import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Plus, Edit3, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  gradient: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Jak budować zdrowe relacje w rodzinie",
      excerpt: "Odkryj kluczowe zasady tworzenia harmonijnych relacji rodzinnych opartych na wzajemnym szacunku i zrozumieniu.",
      content: "Zdrowe relacje rodzinne to fundament szczęśliwego życia. W tym artykule przedstawię praktyczne sposoby budowania więzi opartych na komunikacji bez przemocy...",
      author: "dr Olga Filaszkiewicz",
      date: "2024-03-15",
      readTime: "5 min",
      tags: ["rodzina", "komunikacja", "relacje"],
      gradient: "from-sage-light/20 to-sage/10"
    },
    {
      id: 2,
      title: "Metoda Family-lab w praktyce",
      excerpt: "Praktyczne zastosowanie filozofii Jespera Juula w codziennym wychowywaniu dzieci.",
      content: "Family-lab to podejście, które stawia na autentyczność i wzajemny szacunek w relacjach rodzinnych. Jesper Juul pokazał nam, jak ważne jest...",
      author: "dr Olga Filaszkiewicz",
      date: "2024-03-10",
      readTime: "7 min",
      tags: ["family-lab", "wychowanie", "jesper juul"],
      gradient: "from-beige/30 to-sage-light/20"
    },
    {
      id: 3,
      title: "Komunikacja bez przemocy - podstawy NVC",
      excerpt: "Poznaj fundamentalne zasady porozumienia bez przemocy i ich wpływ na jakość relacji.",
      content: "Komunikacja bez przemocy (NVC) to metoda opracowana przez Marshalla Rosenberga, która pomaga w budowaniu autentycznych połączeń...",
      author: "dr Olga Filaszkiewicz",
      date: "2024-03-05",
      readTime: "6 min",
      tags: ["NVC", "komunikacja", "empatia"],
      gradient: "from-accent/20 to-beige/20"
    }
  ]);

  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: blogPosts.length + 1,
      title: "Nowy artykuł",
      excerpt: "Krótki opis artykułu...",
      content: "Treść artykułu...",
      author: "dr Olga Filaszkiewicz",
      date: new Date().toISOString().split('T')[0],
      readTime: "5 min",
      tags: ["nowy"],
      gradient: "from-sage/20 to-accent/15"
    };
    setBlogPosts([newPost, ...blogPosts]);
    setEditingPost(newPost);
    setIsEditing(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  const handleSavePost = () => {
    if (editingPost) {
      setBlogPosts(blogPosts.map(post => 
        post.id === editingPost.id ? editingPost : post
      ));
      setIsEditing(false);
      setEditingPost(null);
    }
  };

  const handleDeletePost = (id: number) => {
    if (confirm("Czy na pewno chcesz usunąć ten artykuł?")) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    }
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setIsEditing(false);
    setEditingPost(null);
  };

  if (isEditing && editingPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <Button 
                  variant="ghost" 
                  onClick={handleBackToList}
                  className="mr-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót do listy
                </Button>
                <h1 className="text-2xl font-serif font-bold text-earth">
                  Edytuj artykuł
                </h1>
              </div>

              <Card className="shadow-card border-0 bg-white/90">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-earth mb-2">
                        Tytuł
                      </label>
                      <input
                        type="text"
                        value={editingPost.title}
                        onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-earth mb-2">
                        Krótki opis
                      </label>
                      <textarea
                        value={editingPost.excerpt}
                        onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                        rows={3}
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-earth mb-2">
                        Treść
                      </label>
                      <textarea
                        value={editingPost.content}
                        onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                        rows={12}
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-earth mb-2">
                          Czas czytania
                        </label>
                        <input
                          type="text"
                          value={editingPost.readTime}
                          onChange={(e) => setEditingPost({...editingPost, readTime: e.target.value})}
                          className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-earth mb-2">
                          Tagi (oddzielone przecinkami)
                        </label>
                        <input
                          type="text"
                          value={editingPost.tags.join(", ")}
                          onChange={(e) => setEditingPost({
                            ...editingPost, 
                            tags: e.target.value.split(",").map(tag => tag.trim())
                          })}
                          className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={handleSavePost} className="bg-sage text-white">
                        Zapisz artykuł
                      </Button>
                      <Button variant="outline" onClick={handleBackToList}>
                        Anuluj
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={handleBackToList}
                className="mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Powrót do bloga
              </Button>

              <article>
                <header className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-4">
                    {selectedPost.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(selectedPost.date).toLocaleDateString('pl-PL')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {selectedPost.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-sage/10 text-sage border-sage/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                  
                  <div className="text-foreground leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-earth mb-6">
                Blog
              </h1>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dzielę się wiedzą i doświadczeniem w obszarze psychoterapii, 
                komunikacji i budowania zdrowych relacji
              </p>
            </div>

            {/* Add Post Button */}
            <div className="flex justify-end mb-8">
              <Button onClick={handleAddPost} className="bg-sage text-white">
                <Plus className="w-4 h-4 mr-2" />
                Dodaj artykuł
              </Button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id}
                  className={`group shadow-card border-0 bg-gradient-to-br ${post.gradient} hover:shadow-hero transition-all duration-500 hover:scale-105 overflow-hidden relative cursor-pointer`}
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-earth mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      <div className="flex gap-2 ml-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditPost(post);
                          }}
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeletePost(post.id);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('pl-PL')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-foreground/90 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-sage/10 text-sage border-sage/20 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      Kliknij, aby przeczytać więcej...
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {blogPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  Brak artykułów do wyświetlenia
                </p>
                <Button onClick={handleAddPost} className="mt-4 bg-sage text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Dodaj pierwszy artykuł
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;