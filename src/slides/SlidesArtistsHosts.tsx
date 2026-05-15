import React from "react";
import { ARTISTS_TITLE, CREAM_BG, PhotoCard } from "./shared";

/* ─── SLIDE 13: Артисты — часть 1 ─── */
export function SlideArtists1() {
  return (
    <div style={{ width:"100%", height:"100%", background:CREAM_BG, display:"flex", flexDirection:"column", padding:"4.5% 6% 4%", boxSizing:"border-box" }}>
      <h2 style={{ ...ARTISTS_TITLE, animation:"su 0.7s ease-out both" }}>Артисты</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"4%", flex:1, minHeight:0, animation:"su 0.85s ease-out 0.1s both", alignItems:"center", justifyItems:"center" }}>
        {["Akmal'", "Леонид Агутин и Анжелика Варум"].map(name => (
          <div key={name} style={{ width:"100%", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.6em" }}>
            <div style={{ width:"100%", aspectRatio:"3/4", background:"linear-gradient(145deg, #e8e0d4, #d6ccc0)", border:"1px solid #c8b89a", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5em", opacity:0.28 }}>
                <div style={{ width:"2rem", height:"1px", background:"#a8926f" }} />
                <div style={{ width:"1rem", height:"1px", background:"#a8926f" }} />
                <div style={{ width:"1.5rem", height:"1px", background:"#a8926f" }} />
              </div>
            </div>
            <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.7rem,1.1vw,0.92rem)", color:"#3d2b1a", margin:0, textAlign:"center", letterSpacing:"0.02em" }}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 14: Артисты — часть 2 ─── */
export function SlideArtists2() {
  return (
    <div style={{ width:"100%", height:"100%", background:CREAM_BG, display:"flex", flexDirection:"column", padding:"4.5% 6% 4%", boxSizing:"border-box" }}>
      <h2 style={{ ...ARTISTS_TITLE, animation:"su 0.7s ease-out both" }}>Артисты</h2>
      <div style={{ display:"flex", gap:"8%", flex:1, minHeight:0, animation:"su 0.85s ease-out 0.1s both", alignItems:"center", justifyContent:"center" }}>
        <div style={{ width:"24%" }}><PhotoCard name="Алексей Чумаков" /></div>
        <div style={{ width:"24%" }}><PhotoCard name="Sevak" /></div>
        <div style={{ width:"24%" }}><PhotoCard name="Леонид Телешев" /></div>
      </div>
    </div>
  );
}

/* ─── SLIDE 15: Ведущие — часть 1 ─── */
export function SlideHosts1() {
  const names = ["Артем Ткаченко", "Александр Петров", "Константин Хабенский", "Вадим Демчог"];
  return (
    <div style={{ width:"100%", height:"100%", background:CREAM_BG, display:"flex", flexDirection:"column", padding:"4.5% 6% 4%", boxSizing:"border-box" }}>
      <h2 style={{ ...ARTISTS_TITLE, animation:"su 0.7s ease-out both" }}>Ведущие</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"3%", flex:1, minHeight:0, animation:"su 0.85s ease-out 0.1s both", alignItems:"center", justifyItems:"center" }}>
        {names.map(name => (
          <div key={name} style={{ width:"100%" }}><PhotoCard name={name} /></div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 16: Ведущие — часть 2 ─── */
export function SlideHosts2() {
  const names = ["Сергей Безруков", "Глеб Яковенко (Екатеринбург)", "Сергей Заикин (Екатеринбург)", "Александр Хворов (Екатеринбург)"];
  return (
    <div style={{ width:"100%", height:"100%", background:CREAM_BG, display:"flex", flexDirection:"column", padding:"4.5% 6% 4%", boxSizing:"border-box" }}>
      <h2 style={{ ...ARTISTS_TITLE, animation:"su 0.7s ease-out both" }}>Ведущие</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"3%", flex:1, minHeight:0, animation:"su 0.85s ease-out 0.1s both", alignItems:"center", justifyItems:"center" }}>
        {names.map(name => (
          <div key={name} style={{ width:"100%" }}><PhotoCard name={name} /></div>
        ))}
      </div>
    </div>
  );
}