import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { BookOpen, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <BookOpen className="h-3 w-3" />
          {post.readTime} Min.
        </span>
        <span className="text-xs text-muted-foreground ml-auto">
          {new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}
        </span>
      </div>
      <h2 className="font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        {post.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
        Weiterlesen
        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
