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

const SLIDES = ["title","concept","scenography","hosts","program","intro","host","block2","block3dance","block3orchestra","projections","holograms"] as const;

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
          {slide === "title"       && <SlideTitle />}
          {slide === "concept"     && <SlideConcept />}
          {slide === "scenography" && <SlideScenography />}
          {slide === "hosts"       && <SlideHosts />}
          {slide === "program"     && <SlideProgram />}
          {slide === "intro"       && <SlideIntro />}
          {slide === "host"        && <SlideHost />}
          {slide === "block2"          && <SlideBlock2 />}
          {slide === "block3dance"     && <SlideBlock3Dance />}
          {slide === "block3orchestra" && <SlideBlock3Orchestra />}
          {slide === "projections"     && <SlideProjections />}
          {slide === "holograms"   && <SlideHolograms />}
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
          fontFamily:"'Raleway', sans-serif", fontWeight:300,
          fontSize:"clamp(2rem,5vw,4.4rem)", lineHeight:1.12, color:"#3d2b1a",
          letterSpacing:"0.03em", animation:"su 0.9s ease-out both",
        }}>
          Между ты и она
        </h1>
        <Divider delay="0.3s" />
        <h2 style={{
          fontFamily:"'Raleway', sans-serif", fontStyle:"italic", fontWeight:300,
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
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Концепция / Смыслы</p>
        <h2 style={{ ...H2, animation:"su 0.8s ease-out 0.1s both" }}>
          Основная идея<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>и философия события</span>
        </h2>
        <p style={{ ...BODY, maxWidth:"96%", marginTop:"0.8em", animation:"su 0.9s ease-out 0.2s both" }}>
          Существует множество жанров, в каждом из них восхваляется женский образ: красота души и тела. Через музыку, кино, поэзию — вдохновимся классикой и внедрим женщин семьи и мужчин, которые скажут им приятные слова. Используя контент и жанры, мы описываем женщин в зале. Женщина — это инструмент (скрипка/гитара/клавиши), женщина это танец — танго/вальс, женщина это песня — лиричная, весёлая, рок. Образы известных поэтов и композиторов появятся на прозрачных экранах/полотнах/голограммах. После номера-перфоманса появляется мужчина из зала (член семьи) и произносит речь для своих женщин, дарит подарок (по желанию). Так действие идёт по блокам.
        </p>
      </div>
    </div>
  );
}

/* ─── SLIDE 3: Сценография ─── */
function SlideScenography() {
  const items = [
    {
      title: "Левитирующий стол",
      text: "Гости попадают в зал, где под потолком летающий арт-объект, который привлекает внимание. В определённый момент он опускается и становится столом для праздничного ужина.",
    },
    {
      title: "Проекции на стены",
      text: "Видеоарт заполняет пространство, постоянно его меняя.",
    },
  ];
  return (
    <div style={{ width:"100%", height:"100%", padding:"4% 6%", boxSizing:"border-box", display:"flex", flexDirection:"column" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Сценография</p>
      <h2 style={{ ...H2, marginBottom:"3%", animation:"su 0.8s ease-out 0.1s both" }}>
        Технические решения
      </h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2%", flex:1, animation:"su 0.9s ease-out 0.2s both" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display:"flex", flexDirection:"column", border:"1px solid #d4c4a8", background:"rgba(250,248,244,0.7)", overflow:"hidden" }}>
            <div style={{ height:"40%", minHeight:0, overflow:"hidden", position:"relative", flexShrink:0 }}>
              <img
                src={i === 0
                  ? "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/08c5e24b-be52-44df-a01b-b26589292c1f.jpg"
                  : "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/24942d21-5714-4de9-98ad-f3cfe7c3114d.jpg"
                }
                alt={item.title}
                style={{ width:"100%", height:"100%", objectFit:"cover", filter:"sepia(10%) contrast(0.9) brightness(1.02)", transition:"transform 0.5s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <div style={{ padding:"4% 6%", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              <h4 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.72rem,1.05vw,0.9rem)", color:"#3d2b1a", marginBottom:"0.2em", lineHeight:1.2 }}>{item.title}</h4>
              <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.65rem,0.92vw,0.8rem)", lineHeight:1.45, color:"#5c4530", margin:0 }}>{item.text}</p>
            </div>
          </div>
        ))}
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
        <h4 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.72rem,1.2vw,0.92rem)", color:"#3d2b1a", marginBottom:"0.4em", lineHeight:1.2 }}>{title}</h4>
        <p style={{ fontFamily:"'Raleway', sans-serif", fontSize:"clamp(0.6rem,0.88vw,0.75rem)", lineHeight:1.68, color:"#6b5030" }}>{text}</p>
      </div>
    </div>
  );
}

/* ─── SLIDE 4: Сценография (продолжение) ─── */
function SlideHosts() {
  const items = [
    {
      title: "Решение по свету",
      text: "",
    },
    {
      title: "Голограммы и прозрачные экраны",
      text: "Образы известных поэтов и композиторов появляются на экранах — живые, объёмные, театральные.",
    },
  ];
  return (
    <div style={{ width:"100%", height:"100%", padding:"4% 6%", boxSizing:"border-box", display:"flex", flexDirection:"column" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Сценография</p>
      <h2 style={{ ...H2, marginBottom:"3%", animation:"su 0.8s ease-out 0.1s both" }}>
        Световые решения<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>и голограммы</span>
      </h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2%", flex:1, animation:"su 0.9s ease-out 0.2s both" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display:"flex", flexDirection:"column", border:"1px solid #d4c4a8", background:"rgba(250,248,244,0.7)", overflow:"hidden" }}>
            <div style={{ flex:"0 0 40%", background:"linear-gradient(135deg, #ede4d8 0%, #e8ddd0 100%)" }} />
            <div style={{ flex:1, padding:"5% 6%", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              <h4 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.72rem,1.05vw,0.9rem)", color:"#3d2b1a", marginBottom:"0.2em", lineHeight:1.2 }}>{item.title}</h4>
              {item.text && <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.65rem,0.92vw,0.8rem)", lineHeight:1.45, color:"#5c4530", margin:0 }}>{item.text}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 5: Сбор гостей ─── */
function SlideProgram() {
  const points = [
    "Зал превращается в мастерскую творцов — живую студию, где рождается искусство прямо на глазах у гостей.",
    "На стенах проекции эскизов, набросков и картин — пространство само становится холстом.",
    "Лица женщин семьи вписаны в полотна великих мастеров: их портреты смотрят со стен мастерской.",
    "Художники с мольбертами работают в реальном времени — каждый штрих здесь и сейчас, при гостях.",
    "В мольберт встроен экран: герой рождается в рисунке — и в нужный момент оживает как голограмма.",
    "Оркестр растворён в зале среди гостей — скрипка, гитара, рояль звучат как воздух на протяжении всего вечера.",
  ];
  return (
    <div style={{ width:"100%", height:"100%", position:"relative", overflow:"hidden" }}>
      {/* Фото на весь фон — светлое */}
      <img
        src="https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/c5378f03-f270-4258-9ad1-4ddef5431e32.jpg"
        alt="Сбор гостей"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(1.08) contrast(0.82) saturate(0.7)" }}
      />
      {/* Светлый тонирующий оверлей */}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(245,239,230,0.82) 0%, rgba(245,239,230,0.65) 50%, rgba(245,239,230,0.35) 100%)" }} />

      {/* Угловые линии */}
      <div style={{ position:"absolute", top:"6%", left:"5%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(160,134,100,0.4)", borderLeft:"1px solid rgba(160,134,100,0.4)" }} />
      <div style={{ position:"absolute", top:"6%", right:"5%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(160,134,100,0.4)", borderRight:"1px solid rgba(160,134,100,0.4)" }} />
      <div style={{ position:"absolute", bottom:"6%", left:"5%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(160,134,100,0.4)", borderLeft:"1px solid rgba(160,134,100,0.4)" }} />
      <div style={{ position:"absolute", bottom:"6%", right:"5%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(160,134,100,0.4)", borderRight:"1px solid rgba(160,134,100,0.4)" }} />

      {/* Контент */}
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"5% 7%" }}>
        <div style={{ maxWidth:"52%" }}>
          <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.46rem", letterSpacing:"0.26em", textTransform:"uppercase", color:"#a8926f", marginBottom:"0.7em", animation:"su 0.7s ease-out both" }}>Ход вечера</p>
          <h2 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:300, fontSize:"clamp(1.4rem,2.8vw,2.4rem)", lineHeight:1.12, color:"#3d2b1a", letterSpacing:"0.03em", marginBottom:"0.5em", animation:"su 0.85s ease-out 0.1s both" }}>
            Сбор гостей
          </h2>
          <div style={{ width:"2.5rem", height:"1px", background:"#c8b89a", marginBottom:"1em", animation:"su 0.85s ease-out 0.2s both" }} />
          <div style={{ display:"flex", flexDirection:"column", gap:"0.35em", animation:"su 0.9s ease-out 0.3s both" }}>
            {points.map((p, i) => (
              <div key={i} style={{ display:"flex", gap:"0.7em", alignItems:"flex-start" }}>
                <div style={{ width:"1.2rem", height:"1px", background:"#c8b89a", flexShrink:0, marginTop:"0.6em" }} />
                <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.65rem,0.92vw,0.8rem)", lineHeight:1.45, color:"#5c4530", margin:0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 6: Интро ─── */
function SlideIntro() {
  const FLOWERS = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/eb1e44f8-d0e0-4d0e-aae9-b546036398ac.jpg";
  const points = [
    "Вечер открывается «Вечностью» — в исполнении оркестра или Мачете — и пока музыка разливается по залу, художники пишут портреты женщин, присутствующих здесь: сколько женщин — столько мастеров.",
    "В финале номера появляется Игорь Алексеевич — лично или голосом в записи — и произносит речь на фоне сменяющихся фотографий женщин семьи, исполненных как живописные полотна.",
    "После его поздравления по залу проходят цветочники с плетёными корзинами — словно только что с летнего поля — и передают ему букеты. Цветочники появляются и в моменты поздравлений последующих мужчин.",
  ];
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      <div style={{ flex:"0 0 34%", position:"relative", overflow:"hidden", flexShrink:0 }}>
        <img src={FLOWERS} alt="Эскизы цветов" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"sepia(22%) contrast(0.85) brightness(1.08)", opacity:0.88 }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, transparent 55%, #f5efe6)" }} />
      </div>
      <div style={{ flex:1, padding:"4.5% 5.5%", display:"flex", flexDirection:"column", justifyContent:"center", overflow:"hidden" }}>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Ход вечера</p>
        <h2 style={{ ...H2, marginBottom:"3%", animation:"su 0.8s ease-out 0.1s both" }}>
          Интро<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>открытие вечера</span>
        </h2>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.45em", animation:"su 0.9s ease-out 0.2s both" }}>
          {points.map((p, i) => (
            <div key={i} style={{ display:"flex", gap:"0.75em", alignItems:"flex-start" }}>
              <div style={{ width:"1.4rem", height:"1px", background:"#c8b89a", flexShrink:0, marginTop:"0.65em" }} />
              <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:500, fontSize:"clamp(0.82rem,1.15vw,1.05rem)", lineHeight:1.45, color:"#3a2810", margin:0 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 7: Появление ведущего + Номер с лунами ─── */
function SlideHost() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      {/* место под картинку */}
      <div style={{ flex:"0 0 36%", background:"linear-gradient(135deg, #ddd5c6 0%, #e8e0d4 100%)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", flexShrink:0 }}>
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"0.4em", opacity:0.22 }}>
          <div style={{ width:"2.5rem", height:"2px", background:"#a8926f" }} />
          <div style={{ width:"1.5rem", height:"2px", background:"#a8926f" }} />
        </div>
      </div>
      <div style={{ flex:1, padding:"4% 5.5%", display:"flex", flexDirection:"column", justifyContent:"center", overflow:"hidden" }}>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Блок 1</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.45em", animation:"su 0.9s ease-out 0.15s both" }}>
          <div>
            <h3 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.72rem,1.05vw,0.9rem)", color:"#3d2b1a", marginBottom:"0.2em", letterSpacing:"0.02em" }}>Появление ведущего</h3>
            <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.65rem,0.92vw,0.8rem)", lineHeight:1.45, color:"#5c4530", margin:0 }}>
              После трека и слов Игоря Алексеевича появляется ведущий. Он не выходит на сцену — он проходит сквозь зал, среди людей, среди столов и взглядов. Останавливается у каждой женщины, как будто видит её впервые — и говорит о ней словами поэтов: строчками, которые были написаны века назад, но звучат как сейчас, как здесь, как о ней.
            </p>
          </div>
          <div style={{ borderTop:"1px solid rgba(200,184,154,0.4)", paddingTop:"0.6em" }}>
            <h3 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:600, fontSize:"clamp(0.72rem,1.05vw,0.9rem)", color:"#3d2b1a", marginBottom:"0.2em", letterSpacing:"0.02em" }}>Номер с лунами · Оркестр</h3>
            <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.65rem,0.92vw,0.8rem)", lineHeight:1.45, color:"#5c4530", margin:0 }}>
              Луна — вечный спутник земли. Так и женщина — она всегда рядом, освещает путь, не требуя слов. На экране разворачивается большая луна, а в зале танцовщики работают со светящимися сферами разных размеров: в этой семье каждая — от самой младшей до старшей — светит по-своему. Действие нарастает, и в определённый момент на сцену выходит старший сын Александр — и продолжает перформанс своими словами. Возможен выход всех троих сыновей: три голоса, три луны, один свет.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 8: Блок 2 — На стыке времён ─── */
function SlideBlock2() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
      {/* место под картинку */}
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
function SlideBlock3Dance() {
  const DANCE = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/80476c95-2ccb-4461-9f82-b9894670507b.jpg";
  return (
    <div style={{ width:"100%", height:"100%", position:"relative", overflow:"hidden" }}>
      <img src={DANCE} alt="" style={{
        position:"absolute", inset:0, width:"100%", height:"100%",
        objectFit:"cover", filter:"brightness(1.1) contrast(0.9) sepia(8%)",
      }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(10,4,2,0.65) 0%, rgba(10,4,2,0.18) 50%, transparent 100%)" }} />

      <div style={{ position:"absolute", top:"6%", left:"8%", width:"2.4rem", height:"2.4rem",
        borderTop:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", top:"6%", right:"8%", width:"2.4rem", height:"2.4rem",
        borderTop:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", left:"8%", width:"2.4rem", height:"2.4rem",
        borderBottom:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", right:"8%", width:"2.4rem", height:"2.4rem",
        borderBottom:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />

      <div style={{
        position:"absolute", bottom:"12%", left:0, right:0,
        padding:"0 10%", display:"flex", flexDirection:"column", alignItems:"flex-start",
      }}>
        <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.26em",
          textTransform:"uppercase", color:"rgba(200,184,154,0.65)", marginBottom:"0.8em",
          animation:"su 0.7s ease-out both" }}>Блок 3</p>
        <h2 style={{
          fontFamily:"'Raleway', sans-serif", fontWeight:700,
          fontSize:"clamp(1.8rem,4vw,3.6rem)", lineHeight:1.1, color:"#faf8f4",
          letterSpacing:"0.03em", marginBottom:"0.55em",
          animation:"su 0.85s ease-out 0.1s both",
        }}>
          Женщина — танец
        </h2>
        <div style={{ width:"3rem", height:"1px", background:"rgba(200,184,154,0.5)", marginBottom:"0.8em",
          animation:"su 0.85s ease-out 0.2s both" }} />
        <p style={{
          fontFamily:"'Raleway', sans-serif", fontStyle:"italic", fontWeight:500,
          fontSize:"clamp(0.95rem,1.6vw,1.4rem)", lineHeight:1.5, color:"rgba(250,248,244,0.88)",
          maxWidth:"60%", animation:"su 0.9s ease-out 0.3s both",
        }}>
          Ведущий ведёт рассказ — и пока он говорит, в зале оживают танцоры. Каждый стиль — это другая женщина: страстное танго, воздушный вальс, стремительный джаз.<br/>Ведущий произносит подводку к поздравлению от мужей.
        </p>
      </div>
    </div>
  );
}

/* ─── SLIDE 10: Блок 3 — Женщина-оркестр ─── */
function SlideBlock3Orchestra() {
  const instruments = [
    { name:"Скрипка",  text:"Тонкая, трепетная, чувствующая всё — она первой отзывается на боль и радость." },
    { name:"Духовые",  text:"Страстные и порывистые — они говорят громко, когда слов уже недостаточно." },
    { name:"Ударные",  text:"Сердце ритма. В ней — сила, которая держит всё вместе, даже когда никто не замечает." },
    { name:"Рояль",    text:"Завершает всё. В её звуке — память, глубина и то, что остаётся после." },
  ];
  return (
    <div style={{ width:"100%", height:"100%", position:"relative", overflow:"hidden", background:"linear-gradient(150deg, #faf8f4 0%, #f5efe6 55%, #ede6d8 100%)" }}>

      <div style={{ position:"absolute", top:"6%", left:"8%", width:"2.4rem", height:"2.4rem",
        borderTop:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", top:"6%", right:"8%", width:"2.4rem", height:"2.4rem",
        borderTop:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", left:"8%", width:"2.4rem", height:"2.4rem",
        borderBottom:"1px solid rgba(200,184,154,0.45)", borderLeft:"1px solid rgba(200,184,154,0.45)" }} />
      <div style={{ position:"absolute", bottom:"6%", right:"8%", width:"2.4rem", height:"2.4rem",
        borderBottom:"1px solid rgba(200,184,154,0.45)", borderRight:"1px solid rgba(200,184,154,0.45)" }} />

      <div style={{
        position:"absolute", bottom:"16%", left:0, right:0,
        padding:"0 10%", display:"flex", flexDirection:"column",
      }}>
        <h2 style={{
          fontFamily:"'Raleway', sans-serif", fontWeight:700,
          fontSize:"clamp(1.8rem,4vw,3.6rem)", lineHeight:1.1, color:"#3d2b1a",
          letterSpacing:"0.03em", marginBottom:"0.55em",
          animation:"su 0.85s ease-out 0.1s both",
        }}>
          Женщина — оркестр
        </h2>
        <div style={{ width:"3rem", height:"1px", background:"#c8b89a", marginBottom:"0.9em",
          animation:"su 0.85s ease-out 0.2s both" }} />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.5em 2em", animation:"su 0.9s ease-out 0.3s both" }}>
          {instruments.map((inst, i) => (
            <div key={i} style={{ display:"flex", gap:"0.6em", alignItems:"flex-start" }}>
              <span style={{
                fontFamily:"'Montserrat', sans-serif", fontSize:"0.5rem", letterSpacing:"0.14em",
                textTransform:"uppercase", color:"#a8926f",
                border:"1px solid #c8b89a", padding:"0.15em 0.5em",
                flexShrink:0, marginTop:"0.25em",
              }}>{inst.name}</span>
              <p style={{
                fontFamily:"'Raleway', sans-serif", fontWeight:500, fontSize:"clamp(0.88rem,1.3vw,1.15rem)",
                lineHeight:1.35, color:"#3a2810", margin:0,
              }}>{inst.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Подпись внизу по центру */}
      <div style={{
        position:"absolute", bottom:"10%", left:0, right:0,
        display:"flex", justifyContent:"center", alignItems:"center",
        animation:"su 0.9s ease-out 0.4s both",
      }}>
        <p style={{
          fontFamily:"'Raleway', sans-serif", fontStyle:"normal", fontWeight:400,
          fontSize:"clamp(0.95rem,1.4vw,1.2rem)", color:"#3d2b1a",
          letterSpacing:"0.03em", margin:0, textAlign:"center",
        }}>
          После финальной композиции оркестра — поздравление от друзей
        </p>
      </div>
    </div>
  );
}

/* ─── SLIDE 10: Технические решения — Проекции ─── */
function SlideProjections() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", padding:"5% 6% 4%", boxSizing:"border-box", gap:"3%" }}>
      {/* Заголовок */}
      <div>
        <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Технические решения</p>
        <h2 style={{ ...H2, animation:"su 0.8s ease-out 0.1s both" }}>
          Проекции<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>на стены</span>
        </h2>
      </div>
      {/* Две картинки */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2%", flex:1, minHeight:0, animation:"su 0.9s ease-out 0.2s both" }}>
        <div style={{ overflow:"hidden", border:"1px solid #d4c4a8" }}>
          <img
            src="https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/2ef07e3b-3a1b-4dbe-afd6-48c0a3b7c408.png"
            alt="Проекции на стены зала"
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.5s ease" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div style={{ overflow:"hidden", border:"1px solid #d4c4a8" }}>
          <img
            src="https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/123446e5-f831-42d5-8691-2ca90d2b7751.jpeg"
            alt="Проекция на колоннах"
            style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.5s ease" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 11: Голограммы и прозрачные экраны ─── */
function SlideHolograms() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"flex-start", justifyContent:"flex-start", flexDirection:"column", padding:"5% 6%", boxSizing:"border-box" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Технические решения</p>
      <h2 style={{ ...H2, animation:"su 0.8s ease-out 0.1s both" }}>
        Голограммы<br/><span style={{ fontStyle:"italic", color:"#7a5c3a" }}>и прозрачные экраны</span>
      </h2>
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
      <p style={{ fontFamily:"'Raleway', sans-serif", fontSize:"clamp(0.72rem,1.2vw,0.95rem)", color:"#3d2b1a", lineHeight:1.3 }}>{value}</p>
    </div>
  );
}

/* ─── Shared styles ─── */
const TAG: React.CSSProperties = {
  fontFamily:"'Montserrat', sans-serif", fontSize:"0.68rem",
  letterSpacing:"0.28em", color:"#a8926f", textTransform:"uppercase", marginBottom:"1.1em",
};
const H2: React.CSSProperties = {
  fontFamily:"'Raleway', sans-serif", fontWeight:400,
  fontSize:"clamp(1.6rem,3.4vw,3rem)", lineHeight:1.15, color:"#3d2b1a",
};
const BODY: React.CSSProperties = {
  fontFamily:"'Raleway', sans-serif", fontWeight:400,
  fontSize:"clamp(0.72rem,1.05vw,0.9rem)", lineHeight:1.45, color:"#5c4530",
};
const BODY_ITALIC: React.CSSProperties = {
  ...BODY, fontStyle:"italic", fontWeight:300, color:"#8b6e4e",
};