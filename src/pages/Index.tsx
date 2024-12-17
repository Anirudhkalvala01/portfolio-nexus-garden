import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-6 gradient-text">
          John Doe
        </h1>
        <p className="text-xl text-center text-muted-foreground max-w-2xl mb-8 bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          Full-stack developer passionate about creating beautiful and functional web applications.
          Specialized in React, Node.js, and modern web technologies.
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" asChild className="social-button bg-white/80">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="social-button bg-white/80">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="social-button bg-white/80">
            <a href="mailto:john@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;