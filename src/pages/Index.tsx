import { useState, useEffect } from "react";

/* ─── Images ─── */
const IMG = {
  hall:        "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/2d7def33-d8fd-4c29-b25f-1e341ef30bef.jpg",
  levitate:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/50b73ae2-50dd-4712-8a53-35794d1e014b.jpg",
  hologram:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/17affe9a-fa0e-4408-9ea6-eb0a21533792.jpg",
  poet:        "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/ec51e0eb-6b45-4bf1-a8fc-03490839ad16.jpg",
  dinner:      "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/5f0ef1d5-de87-4b17-a85f-2b771c80519f.jpg",
  speech:      "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/3bb0b52e-11b1-4185-a174-e7ec49f4b2e6.jpg",
  cello:       "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/1b71f129-e0c3-4ee5-a63e-4674b3cd664d.jpg",
  tango:       "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/60128de9-3c6b-4cf4-874d-e6504fa8023b.jpg",
  meanings:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/70132ee2-4cc1-4e44-a9ee-811dab6958c1.jpg",
  // Real images from document
  projection:  "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/4055b1f7-3c64-4817-86ea-be92ec4b477b.jpg",
  hologramReal:"https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/2875af80-8308-452a-a55e-f4b4a53cdb65.jpg",
  orchestra:   "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/b5334c36-0345-4fa1-b023-29ca45fe4ddd.jpg",
  poetReal:    "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/f9c645aa-c9e6-44de-a163-7ce9caae26b7.jpg",
  wallArt:     "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/2c171346-080a-49d3-b11b-71f86a48b260.jpg",
};

const SLIDES = ["title","concept","scenography","hosts","program","dinner"] as const;

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
      fontFamily: "'Cormorant', serif",
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

        {/* Counter */}
        <div style={{ position:"absolute", top:"4%", right:"4.5%", zIndex:20,
          fontFamily:"'Montserrat', sans-serif", fontSize:"0.58rem",
          letterSpacing:"0.22em", color:"#a8926f", opacity:0.65 }}>
          {String(idx+1).padStart(2,"0")} / {String(SLIDES.length).padStart(2,"0")}
        </div>

        <div style={{ position:"relative", zIndex:1, width:"100%", height:"100%" }}>
          {slide === "title"       && <SlideTitle />}
          {slide === "concept"     && <SlideConcept />}
          {slide === "scenography" && <SlideScenography />}
          {slide === "hosts"       && <SlideHosts />}
          {slide === "program"     && <SlideProgram />}
          {slide === "dinner"      && <SlideDinner />}
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

/* ─── SLIDE 1: Обложка ─── */
function SlideTitle() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"5% 8%", boxSizing:"border-box", position:"relative" }}>
      {/* фоновые эскизы */}
      <img src={IMG.cello} alt="" style={{ position:"absolute", right:"2%", top:"50%", transform:"translateY(-50%)", width:"42%", opacity:0.12, filter:"sepia(20%)", pointerEvents:"none" }} />
      <img src={IMG.tango} alt="" style={{ position:"absolute", left:"1%", bottom:"3%", width:"14%", opacity:0.07, filter:"sepia(15%)", pointerEvents:"none" }} />

      <div style={{ textAlign:"center", position:"relative" }}>
        <h1 style={{
          fontFamily:"'Cormorant', serif", fontWeight:300,
          fontSize:"clamp(2rem,5vw,4.4rem)", lineHeight:1.12, color:"#3d2b1a",
          letterSpacing:"0.03em", animation:"su 0.9s ease-out both",
        }}>
          Между ты и она
        </h1>
        <Divider delay="0.3s" />
        <h2 style={{
          fontFamily:"'Cormorant', serif", fontStyle:"italic", fontWeight:300,
          fontSize:"clamp(1rem,2.4vw,2rem)", lineHeight:1.2, color:"#7a5c3a",
          letterSpacing:"0.06em", animation:"su 0.9s ease-out 0.35s both",
        }}>
          Лабиринты женских миров
        </h2>
      </div>
    </div>
  );
}

/* ─── SLIDE 2: Концепция ─── */
function SlideConcept() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      <div style={{ flex:"0 0 36%", position:"relative", overflow:"hidden" }}>
        <img src={IMG.cello} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"sepia(12%) contrast(0.88) brightness(1.06)", opacity:0.9 }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, transparent 60%, #f5efe6)" }} />
      </div>
      <div style={{ flex:1, padding:"5.5% 5.5% 5.5% 5%", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>01 — Концепция / Смыслы</p>
        <h2 style={{ ...H2, animation:"su 0.8s ease-out 0.1s both" }}>
          Основная идея<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>и философия события</span>
        </h2>
        <p style={{ ...BODY, maxWidth:"96%", marginTop:"0.8em", animation:"su 0.9s ease-out 0.2s both" }}>
          Существует множество жанров, в каждом из них восхваляется женский образ: красота души и тела. Через музыку, кино, поэзию — вдохновимся классикой и внедрим женщин семьи и мужчин, которые скажут им приятные слова. Используя контент и жанры, мы описываем женщин в зале. Женщина — это инструмент (скрипка/гитара/клавиши), женщина это танец — танго/вальс, женщина это песня — лиричная, весёлая, рок. Образы известных поэтов, уральских композиторов появятся на прозрачных экранах/полотнах/голограммах. После известной личности появляется мужчина из зала (член семьи) и произносит речь для своих женщин, дарит подарок (по желанию). Так действие идёт по блокам.
        </p>
      </div>
    </div>
  );
}

/* ─── SLIDE 3: Сценография ─── */
function SlideScenography() {
  return (
    <div style={{ width:"100%", height:"100%", padding:"4.5% 6%", boxSizing:"border-box", display:"flex", flexDirection:"column", justifyContent:"center" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>02 — Сценография</p>
      <h2 style={{ ...H2, marginBottom:"3%", animation:"su 0.8s ease-out 0.1s both" }}>
        Технические решения<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>и оформление</span>
      </h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1.8%", flex:1, maxHeight:"70%", animation:"su 0.9s ease-out 0.2s both" }}>
        <SceneCard img={IMG.projection}  title="Прозрачные экраны"              text="Прозрачные экраны позволяют видеть сцену насквозь, создавая эффект голограммы прямо в зале." />
        <SceneCard img={IMG.poetReal}    title="Образы поэтов и творцов"        text="Образы известных поэтов и уральских композиторов появляются на экранах — живые, объёмные, театральные." />
        <SceneCard img={IMG.wallArt}     title="Проекции на стены"               text="Атмосферный видеоарт заполняет пространство зала, постоянно меняя его настроение и образ." />
      </div>
    </div>
  );
}

function SceneCard({ img, title, text }: { img:string; title:string; text:string }) {
  return (
    <div style={{ border:"1px solid #d4c4a8", overflow:"hidden", display:"flex", flexDirection:"column", background:"rgba(250,248,244,0.7)" }}>
      <div style={{ flex:"0 0 54%", overflow:"hidden" }}>
        <img src={img} alt={title} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"sepia(16%) contrast(0.86) brightness(1.07)", transition:"transform 0.5s ease" }}
          onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.05)")}
          onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
      </div>
      <div style={{ flex:1, padding:"5% 6%" }}>
        <h4 style={{ fontFamily:"'Cormorant', serif", fontWeight:400, fontSize:"clamp(0.72rem,1.2vw,0.92rem)", color:"#3d2b1a", marginBottom:"0.4em", lineHeight:1.2 }}>{title}</h4>
        <p style={{ fontFamily:"'Cormorant', serif", fontSize:"clamp(0.6rem,0.88vw,0.75rem)", lineHeight:1.68, color:"#6b5030" }}>{text}</p>
      </div>
    </div>
  );
}

/* ─── SLIDE 5: Ведущие ─── */
function SlideHosts() {
  const hosts = [
    { name:"Артём Ткаченко",        role:"Актёр театра и кино" },
    { name:"Александр Петров",      role:"Актёр театра и кино" },
    { name:"Константин Хабенский", role:"Актёр театра и кино" },
    { name:"Вадим Демчог",          role:"Актёр, ведущий" },
    { name:"Сергей Безруков",       role:"Актёр театра и кино" },
    { name:"Глеб Яковенко",         role:"Екатеринбург" },
    { name:"Сергей Заикин",         role:"Екатеринбург" },
    { name:"Александр Хворов",      role:"Екатеринбург" },
  ];
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      <div style={{ flex:"0 0 30%", position:"relative", overflow:"hidden" }}>
        <img src={IMG.orchestra} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.88) contrast(0.95)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, transparent 50%, #f5efe6)" }} />
      </div>
      <div style={{ flex:1, padding:"5% 6%", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>03 — Ведущие</p>
        <h2 style={{ ...H2, marginBottom:"4%", animation:"su 0.8s ease-out 0.1s both" }}>
          Кандидаты<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>на роль ведущего</span>
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.8em 2.5em", animation:"su 0.9s ease-out 0.2s both" }}>
          {hosts.map((h, i) => (
            <div key={i} style={{ display:"flex", gap:"0.7em", alignItems:"flex-start", borderBottom:"1px solid rgba(200,184,154,0.3)", paddingBottom:"0.6em" }}>
              <div style={{ width:"0.3rem", height:"0.3rem", background:"#c8b89a", borderRadius:"50%", marginTop:"0.45em", flexShrink:0 }} />
              <div>
                <p style={{ fontFamily:"'Cormorant', serif", fontWeight:500, fontSize:"clamp(0.75rem,1.2vw,0.95rem)", color:"#3d2b1a", lineHeight:1.2 }}>{h.name}</p>
                <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.13em", textTransform:"uppercase", color:"#a8926f", marginTop:"0.12em" }}>{h.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 6: Программа ─── */
function SlideProgram() {
  const blocks = [
    { time:"Начало", icon:"🎻", title:"Живая музыка — открытие",   desc:"Скрипка, гитара, клавиши. Первый образ женщины — как инструмент." },
    { time:"Блок 1", icon:"🎭", title:"Поэты и голограммы",        desc:"На прозрачных экранах — образы известных поэтов и уральских композиторов." },
    { time:"Блок 2", icon:"💃", title:"Женщина — это танец",        desc:"Танго и вальс. Выход танцоров, атмосферный видеоарт." },
    { time:"Блок 3", icon:"🎤", title:"Личное слово",               desc:"Мужчина из зала выходит на сцену, произносит речь и дарит подарок." },
    { time:"Блок 4", icon:"🎵", title:"Женщина — это песня",        desc:"Лиричная, весёлая, рок — все образы через живое исполнение." },
    { time:"Финал",  icon:"✦",  title:"Торжественный ужин",         desc:"Левитирующий стол опускается. Праздничный ужин при живой музыке." },
  ];
  return (
    <div style={{ width:"100%", height:"100%", padding:"4.5% 6%", boxSizing:"border-box", display:"flex", flexDirection:"column", justifyContent:"center" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>04 — Программа</p>
      <h2 style={{ ...H2, marginBottom:"3%", animation:"su 0.8s ease-out 0.1s both" }}>
        Ход вечера<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>по блокам</span>
      </h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1.4% 1.8%", flex:1, maxHeight:"68%", animation:"su 0.9s ease-out 0.2s both" }}>
        {blocks.map((b, i) => (
          <div key={i} style={{ border:"1px solid #d4c4a8", padding:"4% 5%", background:"rgba(250,248,244,0.7)", display:"flex", flexDirection:"column", position:"relative" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg, #c8b89a, transparent)" }} />
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"0.55em" }}>
              <span style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.48rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#a8926f", border:"1px solid #c8b89a", padding:"0.2em 0.55em" }}>{b.time}</span>
              <span style={{ fontSize:"0.95em" }}>{b.icon}</span>
            </div>
            <h4 style={{ fontFamily:"'Cormorant', serif", fontWeight:400, fontSize:"clamp(0.7rem,1.1vw,0.88rem)", color:"#3d2b1a", marginBottom:"0.35em", lineHeight:1.22 }}>{b.title}</h4>
            <p style={{ fontFamily:"'Cormorant', serif", fontSize:"clamp(0.6rem,0.85vw,0.74rem)", lineHeight:1.68, color:"#6b5030" }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 7: Финал / Ужин ─── */
function SlideDinner() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      <div style={{ flex:"0 0 45%", position:"relative", overflow:"hidden" }}>
        <img src={IMG.hologramReal} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.9) contrast(0.92)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, transparent 55%, #f5efe6)" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"2%", width:"52%", border:"3px solid #faf8f4", overflow:"hidden", boxShadow:"0 4px 20px rgba(60,30,10,0.15)" }}>
          <img src={IMG.orchestra} alt="" style={{ width:"100%", display:"block", filter:"brightness(0.85) contrast(0.95)" }} />
        </div>
      </div>
      <div style={{ flex:1, padding:"5.5% 6%", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>05 — Финал</p>
        <h2 style={{ ...H2, marginBottom:"0.8em", animation:"su 0.8s ease-out 0.1s both" }}>
          Торжественный<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>праздничный ужин</span>
        </h2>
        <p style={{ ...BODY, animation:"su 0.9s ease-out 0.2s both" }}>
          Кульминация вечера — левитирующий арт-объект плавно опускается и превращается в стол. Живая музыка, атмосфера и тепло.
        </p>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.8em", marginTop:"1.4em", animation:"su 1s ease-out 0.32s both" }}>
          {[
            "Левитирующий стол — арт-объект и мебель в одном",
            "Живая музыка во время ужина",
            "Личные поздравления и подарки",
            "Атмосферные проекции на стенах",
          ].map((item, i) => (
            <div key={i} style={{ display:"flex", gap:"0.8em", alignItems:"center" }}>
              <div style={{ width:"1.2rem", height:"1px", background:"#c8b89a", flexShrink:0 }} />
              <p style={{ fontFamily:"'Cormorant', serif", fontSize:"clamp(0.75rem,1.15vw,0.94rem)", color:"#3d2b1a", lineHeight:1.5 }}>{item}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop:"1.8em", paddingTop:"1em", borderTop:"1px solid #c8b89a", animation:"su 1s ease-out 0.5s both" }}>
          <p style={{ fontFamily:"'Cormorant', serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(0.78rem,1.2vw,0.98rem)", color:"#8b6e4e", lineHeight:1.62 }}>
            «Так действие идёт по блокам — от образа к живому слову,<br/>от живого слова к общему столу.»
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared helpers ─── */
function FrameLines() {
  return (
    <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0 }}>
      <div style={{ position:"absolute", top:"8%", left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent 4%, #c8b89a 30%, #c8b89a 70%, transparent 96%)", opacity:0.2 }} />
      <div style={{ position:"absolute", bottom:"8%", left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent 4%, #c8b89a 30%, #c8b89a 70%, transparent 96%)", opacity:0.2 }} />
      <div style={{ position:"absolute", top:0, bottom:0, left:"4%", width:"1px", background:"linear-gradient(180deg, transparent 7%, #c8b89a 28%, #c8b89a 72%, transparent 93%)", opacity:0.15 }} />
      <div style={{ position:"absolute", top:0, bottom:0, right:"4%", width:"1px", background:"linear-gradient(180deg, transparent 7%, #c8b89a 28%, #c8b89a 72%, transparent 93%)", opacity:0.15 }} />
    </div>
  );
}

function Divider({ delay = "0s" }: { delay?: string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"0.7em", margin:"0.65em 0", animation:`su 0.8s ease-out ${delay} both` }}>
      <div style={{ flex:1, maxWidth:"7rem", height:"1px", background:"linear-gradient(90deg, #c8b89a, transparent)" }} />
      <span style={{ color:"#a8926f", fontSize:"0.7rem" }}>✦</span>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon:string; label:string; value:string }) {
  return (
    <div>
      <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#a8926f", marginBottom:"0.18em" }}>{icon} {label}</p>
      <p style={{ fontFamily:"'Cormorant', serif", fontSize:"clamp(0.72rem,1.2vw,0.95rem)", color:"#3d2b1a", lineHeight:1.3 }}>{value}</p>
    </div>
  );
}

/* ─── Shared styles ─── */
const TAG: React.CSSProperties = {
  fontFamily:"'Montserrat', sans-serif", fontSize:"0.53rem",
  letterSpacing:"0.28em", color:"#a8926f", textTransform:"uppercase", marginBottom:"1.1em",
};
const H2: React.CSSProperties = {
  fontFamily:"'Cormorant', serif", fontWeight:300,
  fontSize:"clamp(1.2rem,2.7vw,2.2rem)", lineHeight:1.1, color:"#3d2b1a",
};
const BODY: React.CSSProperties = {
  fontFamily:"'Cormorant', serif", fontWeight:400,
  fontSize:"clamp(0.72rem,1.1vw,0.92rem)", lineHeight:1.82, color:"#5c4530",
};
const BODY_ITALIC: React.CSSProperties = {
  ...BODY, fontStyle:"italic", fontWeight:300, color:"#8b6e4e",
};