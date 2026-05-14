import React from "react";

/* ─── Images ─── */
export const IMG = {
  hall:        "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/2d7def33-d8fd-4c29-b25f-1e341ef30bef.jpg",
  levitate:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/50b73ae2-50dd-4712-8a53-35794d1e014b.jpg",
  hologram:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/17affe9a-fa0e-4408-9ea6-eb0a21533792.jpg",
  poet:        "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/ec51e0eb-6b45-4bf1-a8fc-03490839ad16.jpg",
  dinner:      "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/5f0ef1d5-de87-4b17-a85f-2b771c80519f.jpg",
  speech:      "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/3bb0b52e-11b1-4185-a174-e7ec49f4b2e6.jpg",
  cello:       "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/1b71f129-e0c3-4ee5-a63e-4674b3cd664d.jpg",
  tango:       "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/60128de9-3c6b-4cf4-874d-e6504fa8023b.jpg",
  meanings:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/70132ee2-4cc1-4e44-a9ee-811dab6958c1.jpg",
  projection:  "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/4055b1f7-3c64-4817-86ea-be92ec4b477b.jpg",
  hologramReal:"https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/2875af80-8308-452a-a55e-f4b4a53cdb65.jpg",
  orchestra:   "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/b5334c36-0345-4fa1-b023-29ca45fe4ddd.jpg",
  poetReal:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/f9c645aa-c9e6-44de-a163-7ce9caae26b7.jpg",
  wallArt:     "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/2c171346-080a-49d3-b11b-71f86a48b260.jpg",
};

/* ─── Shared styles ─── */
export const TAG: React.CSSProperties = {
  fontFamily:"'Montserrat', sans-serif", fontSize:"0.68rem",
  letterSpacing:"0.28em", color:"#a8926f", textTransform:"uppercase", marginBottom:"1.1em",
};
export const H2: React.CSSProperties = {
  fontFamily:"'Raleway', sans-serif", fontWeight:400,
  fontSize:"clamp(1.6rem,3.4vw,3rem)", lineHeight:1.15, color:"#3d2b1a",
};
export const BODY: React.CSSProperties = {
  fontFamily:"'Raleway', sans-serif", fontWeight:400,
  fontSize:"clamp(0.72rem,1.05vw,0.9rem)", lineHeight:1.45, color:"#5c4530",
};
export const BODY_ITALIC: React.CSSProperties = {
  ...BODY, fontStyle:"italic", fontWeight:300, color:"#8b6e4e",
};
export const ARTISTS_TITLE: React.CSSProperties = {
  fontFamily:"'Raleway', sans-serif", fontWeight:700,
  fontSize:"clamp(1.4rem,2.8vw,2.4rem)", color:"#3d2b1a",
  letterSpacing:"0.04em", marginBottom:"4%",
};
export const CREAM_BG = "linear-gradient(150deg, #faf8f4 0%, #f5efe6 55%, #ede6d8 100%)";

/* ─── Shared components ─── */
export function FrameLines() {
  return (
    <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0 }}>
      <div style={{ position:"absolute", top:"8%", left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent 4%, #c8b89a 30%, #c8b89a 70%, transparent 96%)", opacity:0.2 }} />
      <div style={{ position:"absolute", bottom:"8%", left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent 4%, #c8b89a 30%, #c8b89a 70%, transparent 96%)", opacity:0.2 }} />
      <div style={{ position:"absolute", top:0, bottom:0, left:"4%", width:"1px", background:"linear-gradient(180deg, transparent 7%, #c8b89a 28%, #c8b89a 72%, transparent 93%)", opacity:0.15 }} />
      <div style={{ position:"absolute", top:0, bottom:0, right:"4%", width:"1px", background:"linear-gradient(180deg, transparent 7%, #c8b89a 28%, #c8b89a 72%, transparent 93%)", opacity:0.15 }} />
    </div>
  );
}

export function Divider({ delay = "0s" }: { delay?: string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"0.7em", margin:"0.65em 0", animation:`su 0.8s ease-out ${delay} both` }}>
      <div style={{ flex:1, maxWidth:"7rem", height:"1px", background:"linear-gradient(90deg, #c8b89a, transparent)" }} />
      <span style={{ color:"#a8926f", fontSize:"0.7rem" }}>✦</span>
    </div>
  );
}

export function InfoRow({ icon, label, value }: { icon:string; label:string; value:string }) {
  return (
    <div>
      <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#a8926f", marginBottom:"0.18em" }}>{icon} {label}</p>
      <p style={{ fontFamily:"'Raleway', sans-serif", fontSize:"clamp(0.72rem,1.2vw,0.95rem)", color:"#3d2b1a", lineHeight:1.3 }}>{value}</p>
    </div>
  );
}

export function PhotoCard({ name }: { name: string }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.6em" }}>
      <div style={{
        width:"100%", aspectRatio:"3/4",
        background:"linear-gradient(145deg, #e8e0d4, #d6ccc0)",
        border:"1px solid #c8b89a",
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5em", opacity:0.28 }}>
          <div style={{ width:"2rem", height:"1px", background:"#a8926f" }} />
          <div style={{ width:"1rem", height:"1px", background:"#a8926f" }} />
          <div style={{ width:"1.5rem", height:"1px", background:"#a8926f" }} />
        </div>
      </div>
      <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.7rem,1.1vw,0.92rem)", color:"#3d2b1a", margin:0, textAlign:"center", letterSpacing:"0.02em" }}>{name}</p>
    </div>
  );
}
