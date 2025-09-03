import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar, Clock, User, Plus, Edit3, Trash2, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  read_time: string;
  tags: string[];
  published: boolean;
  profiles?: {
    display_name: string;
  };
}

const Blog = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading } = useAuth();
  const { toast } = useToast();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          profiles!blog_posts_author_id_fkey (
            display_name
          )
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        toast({
          title: "Błąd",
          description: "Nie udało się pobrać artykułów",
          variant: "destructive"
        });
        return;
      }

      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPost = () => {
    if (!isAdmin) {
      toast({
        title: "Brak uprawnień",
        description: "Tylko administratorzy mogą dodawać artykuły",
        variant: "destructive"
      });
      return;
    }

    const newPost: Partial<BlogPost> = {
      title: "Nowy artykuł",
      excerpt: "Krótki opis artykułu...",
      content: "Treść artykułu...",
      read_time: "5 min",
      tags: ["nowy"],
      published: true
    };
    
    setEditingPost(newPost as BlogPost);
    setIsEditing(true);
  };

  const handleEditPost = (post: BlogPost) => {
    if (!isAdmin) {
      toast({
        title: "Brak uprawnień",
        description: "Tylko administratorzy mogą edytować artykuły",
        variant: "destructive"
      });
      return;
    }
    setEditingPost(post);
    setIsEditing(true);
  };

  const handleSavePost = async () => {
    if (!editingPost || !user) return;

    try {
      if (editingPost.id) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: editingPost.title,
            excerpt: editingPost.excerpt,
            content: editingPost.content,
            read_time: editingPost.read_time,
            tags: editingPost.tags,
            published: editingPost.published
          })
          .eq('id', editingPost.id);

        if (error) throw error;

        toast({
          title: "Sukces",
          description: "Artykuł został zaktualizowany"
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title: editingPost.title,
            excerpt: editingPost.excerpt,
            content: editingPost.content,
            author_id: user.id,
            read_time: editingPost.read_time,
            tags: editingPost.tags,
            published: editingPost.published
          });

        if (error) throw error;

        toast({
          title: "Sukces",
          description: "Nowy artykuł został dodany"
        });
      }

      await fetchBlogPosts();
      setIsEditing(false);
      setEditingPost(null);
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się zapisać artykułu",
        variant: "destructive"
      });
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!isAdmin) {
      toast({
        title: "Brak uprawnień",
        description: "Tylko administratorzy mogą usuwać artykuły",
        variant: "destructive"
      });
      return;
    }

    if (!confirm("Czy na pewno chcesz usunąć ten artykuł?")) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Sukces",
        description: "Artykuł został usunięty"
      });

      await fetchBlogPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się usunąć artykułu",
        variant: "destructive"
      });
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
                          value={editingPost.read_time}
                          onChange={(e) => setEditingPost({...editingPost, read_time: e.target.value})}
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
                      {selectedPost.profiles?.display_name || 'Autor nieznany'}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(selectedPost.created_at).toLocaleDateString('pl-PL')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {selectedPost.read_time}
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
            {isAdmin && (
              <div className="flex justify-end mb-8">
                <Button onClick={handleAddPost} className="bg-sage text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Dodaj artykuł
                </Button>
              </div>
            )}

            {!isAdmin && !isLoading && (
              <div className="text-center mb-8">
                <Button onClick={() => navigate('/auth')} variant="outline">
                  <LogIn className="w-4 h-4 mr-2" />
                  Zaloguj się jako admin
                </Button>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => {
                const gradient = "from-sage-light/20 to-sage/10"; // Default gradient for all posts
                return (
                <Card 
                  key={post.id}
                  className={`group shadow-card border-0 bg-gradient-to-br ${gradient} hover:shadow-hero transition-all duration-500 hover:scale-105 overflow-hidden relative cursor-pointer`}
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
                      {isAdmin && (
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
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.created_at).toLocaleDateString('pl-PL')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.read_time}
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

                    <div className="text-sm text-muted-foregrounds">
                      Kliknij, aby przeczytać więcej...
                    </div>
                  </CardContent>
                </Card>
                );
              })}
            </div>

            {blogPosts.length === 0 && !loading && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  Brak artykułów do wyświetlenia
                </p>
                {isAdmin && (
                  <Button onClick={handleAddPost} className="mt-4 bg-sage text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Dodaj pierwszy artykuł
                  </Button>
                )}
              </div>
            )}

            {loading && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  Ładowanie artykułów...
                </p>
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