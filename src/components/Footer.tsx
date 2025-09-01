import { Button } from "@/components/ui/button";
import { Globe, Github, Twitter, Linkedin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 dark:bg-secondary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text">RyzeHosting</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Germany-based premium hosting for gamers and developers.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Game Servers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">VPS Hosting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Root Servers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Domains <span className="text-xs bg-primary/10 text-primary px-1 py-0.5 rounded">Soon</span></a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status Page</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 RyzeHosting GmbH. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  English
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;