import { useState, useEffect } from "react";
import { FrameLines } from "@/slides/shared";
import { SlideTitle, SlideConcept, SlideScenography, SlideHosts, SlideProgram, SlideIntro, SlideHost } from "@/slides/SlidesEarly";
import { SlideBlock2, SlideBlock3Dance, SlideBlock3Orchestra, SlideProjections, SlideHolograms } from "@/slides/SlidesBlocks";
import { SlideArtists1, SlideArtists2, SlideHosts1, SlideHosts2 } from "@/slides/SlidesArtistsHosts";

const SLIDES = [
  "title","concept","scenography","hosts","program","intro","host",
  "block2","block3dance","block3orchestra","projections","holograms",
  "artists1","artists2","hosts1","hosts2",
] as const;

const KF = `
  @keyframes su { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
`;

export default function Index() {
  const [idx, setIdx]         = useState(0);
  const [visible, setVisible] = useState(true);
  const [busy, setBusy]       = useState(false);

  const goTo = (i: number) => {
    if (busy || i === idx || i < 0 || i >= SLIDES.length) return;
    setBusy(true);
    setVisible(false);
    setTimeout(() => { setIdx(i); setVisible(true); setBusy(false); }, 360);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(idx + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goTo(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, busy]);

  const slide = SLIDES[idx];

  return (
    <div style={{
      background: "#f0ebe3",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Raleway', sans-serif",
      padding: "1.8vh 1.8vw",
      boxSizing: "border-box",
    }}>
      <style>{KF}</style>

      {/* 16:9 slide */}
      <div style={{
        width: "min(calc(100vw - 3.6vw), calc((100vh - 8vh) * 16 / 9))",
        aspectRatio: "16 / 9",
        position: "relative",
        background: "linear-gradient(150deg, #faf8f4 0%, #f5efe6 55%, #ede6d8 100%)",
        boxShadow: "0 10px 70px rgba(50,25,8,0.16), 0 2px 12px rgba(50,25,8,0.08)",
        overflow: "hidden",
        transition: "opacity 0.36s ease, transform 0.36s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}>
        {/* Grain */}
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
          backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E")` }} />
        <FrameLines />

        <div style={{ position:"relative", zIndex:1, width:"100%", height:"100%" }}>
          {slide === "title"           && <SlideTitle />}
          {slide === "concept"         && <SlideConcept />}
          {slide === "scenography"     && <SlideScenography />}
          {slide === "hosts"           && <SlideHosts />}
          {slide === "program"         && <SlideProgram />}
          {slide === "intro"           && <SlideIntro />}
          {slide === "host"            && <SlideHost />}
          {slide === "block2"          && <SlideBlock2 />}
          {slide === "block3dance"     && <SlideBlock3Dance />}
          {slide === "block3orchestra" && <SlideBlock3Orchestra />}
          {slide === "projections"     && <SlideProjections />}
          {slide === "holograms"       && <SlideHolograms />}
          {slide === "artists1"        && <SlideArtists1 />}
          {slide === "artists2"        && <SlideArtists2 />}
          {slide === "hosts1"          && <SlideHosts1 />}
          {slide === "hosts2"          && <SlideHosts2 />}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display:"flex", gap:"0.55rem", marginTop:"1.5vh", alignItems:"center" }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: idx===i ? "1.9rem" : "0.38rem", height:"0.38rem",
            borderRadius:"100px", border:"none", cursor:"pointer", padding:0,
            background: idx===i ? "#8b6e4e" : "#c8b89a",
            transition:"all 0.35s ease",
          }} />
        ))}
      </div>

      {/* Arrows */}
      {([
        { side:"left",  dir:-1, sym:"‹", dis: idx===0 },
        { side:"right", dir: 1, sym:"›", dis: idx===SLIDES.length-1 },
      ] as const).map(({ side, dir, sym, dis }) => (
        <button key={side} onClick={() => goTo(idx+dir)} style={{
          position:"fixed", [side]:"1rem", top:"50%", transform:"translateY(-50%)",
          background:"rgba(200,184,154,0.14)", border:"1px solid rgba(200,184,154,0.4)",
          borderRadius:"50%", width:"2.1rem", height:"2.1rem",
          cursor: dis ? "default" : "pointer", opacity: dis ? 0.1 : 0.55,
          color:"#6b5540", fontSize:"1.3rem", zIndex:10,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontFamily:"serif", transition:"opacity 0.25s",
        }}>{sym}</button>
      ))}
    </div>
  );
}
