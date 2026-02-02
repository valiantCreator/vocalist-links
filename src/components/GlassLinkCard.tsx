import React from 'react';
import { ExternalLink } from 'lucide-react';

interface GlassLinkCardProps {
  title: string;
  subtitle?: string;
  href: string;
  icon?: React.ReactNode;
}

export const GlassLinkCard: React.FC<GlassLinkCardProps> = ({ title, subtitle, href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {icon && <div className="text-white/70 group-hover:text-white">{icon}</div>}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white">{title}</h3>
            {subtitle && <p className="text-sm text-white/50">{subtitle}</p>}
          </div>
        </div>
        <ExternalLink className="h-5 w-5 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </a>
  );
};
