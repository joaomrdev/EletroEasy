import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoCard({ src, webm, poster, index }: { src: string; webm: string; poster: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-video bg-surface-deep">
        {failed ? (
          <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
            <p className="text-sm text-muted-foreground">Não foi possível carregar este vídeo.</p>
            <Button variant="outline" onClick={() => { setFailed(false); setAttempt(attempt + 1); }}><RotateCcw aria-hidden /> Tentar novamente</Button>
          </div>
        ) : playing ? (
          <video key={attempt} poster={poster} controls autoPlay muted playsInline preload="metadata" onError={() => setFailed(true)} aria-label={`Trabalho realizado – vídeo ${index + 1}`} className="h-full w-full object-contain">
            <source src={webm} type="video/webm" />
            <source src={src} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        ) : (
          <Button type="button" variant="ghost" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full rounded-none p-0 hover:bg-transparent focus-visible:ring-inset" aria-label={`Reproduzir vídeo ${index + 1}`}>
            <img src={poster} alt={`Trabalho realizado pela Eletro Easy – vídeo ${index + 1}`} loading="lazy" className="h-full w-full object-contain" />
            <span className="absolute inset-0 bg-surface-deep/40 transition group-hover:bg-surface-deep/20" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
              <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden />
            </span>
          </Button>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-medium text-muted-foreground">Vídeo {index + 1}</p>
    </div>
  );
}