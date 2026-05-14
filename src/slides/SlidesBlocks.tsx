import React from "react";
import { TAG, H2, CREAM_BG } from "./shared";

/* ─── SLIDE 8: Блок 2 — На стыке времён ─── */
export function SlideBlock2() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      <div style={{ flex:"0 0 34%", background:"linear-gradient(135deg, #ddd5c6 0%, #e8e0d4 100%)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", flexShrink:0 }}>
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"0.4em", opacity:0.22 }}>
          <div style={{ width:"2.5rem", height:"2px", background:"#a8926f" }} />
          <div style={{ width:"1.5rem", height:"2px", background:"#a8926f" }} />
        </div>
      </div>
      <div style={{ flex:1, padding:"4% 5.5%", display:"flex", flexDirection:"column", justifyContent:"center", overflow:"hidden" }}>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Блок 2</p>
        <h2 style={{ ...H2, marginBottom:"4%", animation:"su 0.8s ease-out 0.1s both" }}>
          Номер на стыке времён
        </h2>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.45em", animation:"su 0.9s ease-out 0.2s both" }}>
          <div>
            <h3 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.65rem,0.95vw,0.82rem)", color:"#3d2b1a", marginBottom:"0.2em", letterSpacing:"0.01em" }}>Хаос как творчество</h3>
            <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.6rem,0.85vw,0.75rem)", lineHeight:1.4, color:"#5c4530", margin:0 }}>
              Всё начинается с шума — стук по бокалу, шорох бумаги, звук обуви по паркету. Один инструмент подхватывает другой, голоса вступают сами, танец рождается стихийно. Нет порядка — есть вдохновение. Каждый живёт своей историей, но все вместе сливаются в единый творческий порыв. Стилистика — на стыке классики и современного рэпа.
            </p>
          </div>
          <div style={{ borderTop:"1px solid rgba(200,184,154,0.35)", paddingTop:"0.6em" }}>
            <h3 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:700, fontSize:"clamp(0.65rem,0.95vw,0.82rem)", color:"#3d2b1a", marginBottom:"0.2em", letterSpacing:"0.01em" }}>Появление голограммы поэта</h3>
            <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.6rem,0.85vw,0.75rem)", lineHeight:1.4, color:"#5c4530", margin:0 }}>
              Световая отбивка — и на прозрачном экране возникает силуэт. Поэт обращается к залу: цитирует себя, говорит о женщине языком своего времени. А в финале подводит мысль к сегодняшнему дню — туда, где о женщинах говорят уже иначе: в песнях, в рэпе, в ритме улицы. После этих слов — поздравление от Тимофея.
            </p>
          </div>
          <div style={{ borderTop:"1px solid rgba(200,184,154,0.35)", paddingTop:"0.6em" }}>
            <h3 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:700, fontSize:"clamp(0.65rem,0.95vw,0.82rem)", color:"#3d2b1a", marginBottom:"0.2em", letterSpacing:"0.01em" }}>Номер — Гимнастка с люстрой</h3>
            <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.6rem,0.85vw,0.75rem)", lineHeight:1.4, color:"#5c4530", margin:0 }}>
              Воздушный номер — гимнастка работает с люстрой, соединяя красоту и высоту. После номера — поздравление от Давида.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 9: Блок 3 — Женщина-танец ─── */
export function SlideBlock3Dance() {
  const DANCE = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/80476c95-2ccb-4461-9f82-b9894670507b.jpg";
  return (
    <div style={{ width:"100%", height:"100%", position:"relative", overflow:"hidden" }}>
      <img src={DANCE} alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(1.1) contrast(0.9) sepia(8%)" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(10,4,2,0.65) 0%, rgba(10,4,2,0.18) 50%, transparent 100%)" }} />
      <div style={{ position:"absolute", top:"6%", left:"8%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", top:"6%", right:"8%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", left:"8%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", right:"8%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"12%", left:0, right:0, padding:"0 10%", display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
        <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.26em", textTransform:"uppercase", color:"rgba(200,184,154,0.65)", marginBottom:"0.8em", animation:"su 0.7s ease-out both" }}>Блок 3</p>
        <h2 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:700, fontSize:"clamp(1.8rem,4vw,3.6rem)", lineHeight:1.1, color:"#faf8f4", letterSpacing:"0.03em", marginBottom:"0.55em", animation:"su 0.85s ease-out 0.1s both" }}>
          Женщина — танец
        </h2>
        <div style={{ width:"3rem", height:"1px", background:"rgba(200,184,154,0.5)", marginBottom:"0.8em", animation:"su 0.85s ease-out 0.2s both" }} />
        <p style={{ fontFamily:"'Raleway', sans-serif", fontStyle:"italic", fontWeight:500, fontSize:"clamp(0.95rem,1.6vw,1.4rem)", lineHeight:1.5, color:"rgba(250,248,244,0.88)", maxWidth:"60%", animation:"su 0.9s ease-out 0.3s both" }}>
          Ведущий ведёт рассказ — и пока он говорит, в зале оживают танцоры. Каждый стиль — это другая женщина: страстное танго, воздушный вальс, стремительный джаз.<br/>Ведущий произносит подводку к поздравлению от мужей.
        </p>
      </div>
    </div>
  );
}

/* ─── SLIDE 10: Блок 3 — Женщина-оркестр ─── */
export function SlideBlock3Orchestra() {
  const instruments = [
    { name:"Скрипка",  text:"Тонкая, трепетная, чувствующая всё — она первой отзывается на боль и радость." },
    { name:"Духовые",  text:"Страстные и порывистые — они говорят громко, когда слов уже недостаточно." },
    { name:"Ударные",  text:"Сердце ритма. В ней — сила, которая держит всё вместе, даже когда никто не замечает." },
    { name:"Рояль",    text:"Завершает всё. В её звуке — память, глубина и то, что остаётся после." },
  ];
  const SKETCH = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/e93f52e4-d876-424f-b637-f8baddbbde17.jpg";
  return (
    <div style={{ width:"100%", height:"100%", position:"relative", overflow:"hidden" }}>
      <img src={SKETCH} alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(1.05) contrast(0.85) sepia(10%)" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(240,235,227,0.92) 0%, rgba(240,235,227,0.5) 55%, transparent 100%)" }} />
      <div style={{ position:"absolute", top:"6%", left:"8%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", top:"6%", right:"8%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", left:"8%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", right:"8%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"16%", left:0, right:0, padding:"0 10%", display:"flex", flexDirection:"column" }}>
        <h2 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:700, fontSize:"clamp(1.8rem,4vw,3.6rem)", lineHeight:1.1, color:"#3d2b1a", letterSpacing:"0.03em", marginBottom:"0.55em", animation:"su 0.85s ease-out 0.1s both" }}>
          Женщина — оркестр
        </h2>
        <div style={{ width:"3rem", height:"1px", background:"#c8b89a", marginBottom:"0.9em", animation:"su 0.85s ease-out 0.2s both" }} />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.5em 2em", animation:"su 0.9s ease-out 0.3s both" }}>
          {instruments.map((inst, i) => (
            <div key={i} style={{ display:"flex", gap:"0.6em", alignItems:"flex-start" }}>
              <span style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"#a8926f", border:"1px solid #c8b89a", padding:"0.15em 0.5em", flexShrink:0, marginTop:"0.25em" }}>{inst.name}</span>
              <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:500, fontSize:"clamp(0.88rem,1.3vw,1.15rem)", lineHeight:1.35, color:"#3a2810", margin:0 }}>{inst.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position:"absolute", bottom:"10%", left:0, right:0, display:"flex", justifyContent:"center", alignItems:"center", animation:"su 0.9s ease-out 0.4s both" }}>
        <p style={{ fontFamily:"'Raleway', sans-serif", fontStyle:"normal", fontWeight:400, fontSize:"clamp(0.95rem,1.4vw,1.2rem)", color:"#3d2b1a", letterSpacing:"0.03em", margin:0, textAlign:"center" }}>
          После финальной композиции оркестра — поздравление от друзей
        </p>
      </div>
    </div>
  );
}

/* ─── SLIDE 11: Технические решения — Проекции ─── */
export function SlideProjections() {
  return (
    <div style={{ width:"100%", height:"100%", background:CREAM_BG, display:"flex", flexDirection:"column", padding:"5% 6% 4%", boxSizing:"border-box" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Технические решения</p>
      <h2 style={{ ...H2, animation:"su 0.8s ease-out 0.1s both" }}>
        Проекции<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>на стены</span>
      </h2>
    </div>
  );
}

/* ─── SLIDE 12: Голограммы и прозрачные экраны ─── */
export function SlideHolograms() {
  return (
    <div style={{ width:"100%", height:"100%", background:CREAM_BG, display:"flex", alignItems:"flex-start", justifyContent:"flex-start", flexDirection:"column", padding:"5% 6%", boxSizing:"border-box" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Технические решения</p>
      <h2 style={{ ...H2, animation:"su 0.8s ease-out 0.1s both" }}>
        Голограммы<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>и прозрачные экраны</span>
      </h2>
    </div>
  );
}
