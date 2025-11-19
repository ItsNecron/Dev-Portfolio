import React from 'react'
import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t border-white/10",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20 hover:border-brand-red/30",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-white/10">
          <AvatarImage src={author.avatar} alt={author.name} className="object-cover" />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-display font-bold leading-none uppercase tracking-wide text-white">
            {author.name}
          </h3>
          <p className="text-sm text-brand-red font-bold uppercase tracking-widest mt-1">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-muted-foreground font-sans">
        {text}
      </p>
    </Card>
  )
}