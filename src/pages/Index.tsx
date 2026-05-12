import { useState, useEffect } from "react";

const VIOLIN_IMAGE = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/0976c540-7a65-4e02-a439-61885279e916.jpg";
const TANGO_IMAGE = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/8ba7ac5c-218c-41ff-aab0-b14ecafcf080.jpg";
const STAGE_IMAGE = "https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/files/772a8771-ae97-47cc-a93b-8eaadc611397.jpg";

const SLIDES_COUNT = 3;

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
      setAnimating(false);
    }, 380);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(Math.min(current + 1, SLIDES_COUNT - 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, animating]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(155deg, #faf8f4 0%, #f5efe6 45%, #ede6d8 100%)",
      fontFamily: "'Cormorant', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Grain overlay */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Decorative frame lines */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 5%, #c8b89a 35%, #c8b89a 65%, transparent 95%)", opacity: 0.22 }} />
        <div style={{ position: "absolute", bottom: "10%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 5%, #c8b89a 35%, #c8b89a 65%, transparent 95%)", opacity: 0.22 }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "5%", width: "1px", background: "linear-gradient(180deg, transparent 8%, #c8b89a 30%, #c8b89a 70%, transparent 92%)", opacity: 0.18 }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, right: "5%", width: "1px", background: "linear-gradient(180deg, transparent 8%, #c8b89a 30%, #c8b89a 70%, transparent 92%)", opacity: 0.18 }} />
      </div>

      {/* Slide */}
      <div style={{
        position: "relative", zIndex: 1, minHeight: "100vh",
        transition: "opacity 0.38s ease, transform 0.38s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
      }}>
        {current === 0 && <SlideTitle />}
        {current === 1 && <SlideConcept />}
        {current === 2 && <SlideVisual />}
      </div>

      {/* Slide counter */}
      <div style={{
        position: "fixed", top: "2rem", right: "6.5%",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.6rem", letterSpacing: "0.22em",
        color: "#a8926f", opacity: 0.65, zIndex: 10,
      }}>
        {String(current + 1).padStart(2, "0")} / {String(SLIDES_COUNT).padStart(2, "0")}
      </div>

      {/* Prev / Next arrows */}
      {[
        { side: "left", dir: -1, symbol: "‹", disabled: current === 0 },
        { side: "right", dir: 1, symbol: "›", disabled: current === SLIDES_COUNT - 1 },
      ].map(({ side, dir, symbol, disabled }) => (
        <button key={side} onClick={() => goTo(current + dir)} style={{
          position: "fixed", [side]: "1.8rem", top: "50%", transform: "translateY(-50%)",
          background: "rgba(200,184,154,0.14)", border: "1px solid rgba(200,184,154,0.5)",
          borderRadius: "50%", width: "2.4rem", height: "2.4rem",
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? 0.15 : 0.65,
          color: "#6b5540", fontSize: "1.25rem", zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "opacity 0.3s, background 0.3s",
          fontFamily: "serif",
        }}
          onMouseEnter={e => { if (!disabled) e.currentTarget.style.opacity = "1"; }}
          onMouseLeave={e => { if (!disabled) e.currentTarget.style.opacity = "0.65"; }}
        >{symbol}</button>
      ))}

      {/* Dot nav */}
      <nav style={{
        position: "fixed", bottom: "2.2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: "0.65rem", zIndex: 10, alignItems: "center",
      }}>
        {Array.from({ length: SLIDES_COUNT }).map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: current === i ? "2.2rem" : "0.45rem",
            height: "0.45rem", borderRadius: "100px",
            background: current === i ? "#8b6e4e" : "#c8b89a",
            border: "none", cursor: "pointer",
            transition: "all 0.4s ease", padding: 0,
          }} />
        ))}
      </nav>
    </div>
  );
}

/* ─── SLIDE 1: Title ─── */
function SlideTitle() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "4rem 8%", position: "relative",
    }}>
      <img src={VIOLIN_IMAGE} alt="" style={{
        position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)",
        width: "36%", maxWidth: "460px", opacity: 0.16,
        filter: "sepia(25%) contrast(0.9)", pointerEvents: "none",
      }} />
      <img src={TANGO_IMAGE} alt="" style={{
        position: "absolute", left: "2%", bottom: "6%",
        width: "16%", maxWidth: "200px", opacity: 0.09,
        filter: "sepia(20%)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "700px", position: "relative" }}>
        <p style={tagStyle}>Концепция события</p>

        <h1 style={{
          fontFamily: "'Cormorant', serif", fontWeight: 300,
          fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)", lineHeight: 1.04,
          color: "#3d2b1a", marginBottom: "1rem", letterSpacing: "0.02em",
          animation: "su 0.9s ease-out 0.1s both",
        }}>
          Между ты и она
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.9rem", animation: "su 0.8s ease-out 0.25s both" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #c8b89a, transparent)" }} />
          <span style={{ color: "#a8926f", fontSize: "0.85rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #c8b89a)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant', serif", fontWeight: 300, fontStyle: "italic",
          fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", lineHeight: 1.1,
          color: "#7a5c3a", marginBottom: "3rem", letterSpacing: "0.04em",
          animation: "su 0.9s ease-out 0.3s both",
        }}>
          Лабиринты женских миров
        </h2>

        <p style={{ ...bodyText, maxWidth: "570px", animation: "su 1s ease-out 0.45s both" }}>
          Существует множество жанров, в каждом из них восхваляется женский образ: красота души и тела. Через музыку, кино, поэзию — вдохновимся классикой и внедрим женщин семьи и мужчин, которые скажут им приятные слова.
        </p>

        <p style={{ ...bodyTextItalic, maxWidth: "570px", marginTop: "1.2rem", animation: "su 1s ease-out 0.6s both" }}>
          Используя контент и жанры, мы описываем женщин в зале. Так действие идёт по блокам — от образа к живому слову.
        </p>

        <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", animation: "su 1s ease-out 0.75s both" }}>
          {["🎻 Скрипка", "🎸 Гитара", "🎹 Клавиши"].map((item) => (
            <p key={item} style={tagStyle}>{item}</p>
          ))}
        </div>
      </div>
      <Keyframes />
    </div>
  );
}

/* ─── SLIDE 2: Concept ─── */
function SlideConcept() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "4rem 8%", gap: "5%", position: "relative",
    }}>
      <div style={{ flex: "0 0 36%", animation: "su 0.9s ease-out both" }}>
        <div style={{ border: "1px solid #c8b89a", padding: "1.4rem", position: "relative" }}>
          <Corner pos="top-left" />
          <Corner pos="bottom-right" />
          <img src={VIOLIN_IMAGE} alt="Женщина со скрипкой" style={{
            width: "100%", display: "block",
            filter: "sepia(12%) contrast(0.88) brightness(1.05)",
          }} />
        </div>
        <p style={{ ...tagStyle, textAlign: "center", marginTop: "1rem" }}>Женщина — это инструмент</p>
      </div>

      <div style={{ flex: 1, animation: "su 0.9s ease-out 0.2s both" }}>
        <p style={tagStyle}>01 — Концепция</p>
        <h2 style={{ ...sectionTitle, marginBottom: "2.2rem" }}>
          Основная идея<br />
          <span style={{ fontStyle: "italic", color: "#7a5c3a" }}>и философия</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
          {[
            { icon: "🎻", label: "Скрипка / Гитара / Клавиши", text: "Женщина — это инструмент. Каждый тембр, каждая струна — отражение её характера и души." },
            { icon: "💃", label: "Танго / Вальс", text: "Женщина — это танец. Движение, пластика, страсть — язык тела говорит громче слов." },
            { icon: "🎵", label: "Лирика / Рок / Радость", text: "Женщина — это песня. От нежной колыбельной до пронзительного рока — вся гамма." },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
              <div style={{
                width: "2.4rem", height: "2.4rem", flexShrink: 0,
                border: "1px solid #c8b89a",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem",
              }}>{item.icon}</div>
              <div>
                <p style={{ ...tagStyle, marginBottom: "0.3rem" }}>{item.label}</p>
                <p style={bodyText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Keyframes />
    </div>
  );
}

/* ─── SLIDE 3: Visual ─── */
function SlideVisual() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      padding: "4rem 8% 6rem", justifyContent: "center", position: "relative",
    }}>
      <p style={{ ...tagStyle, animation: "su 0.8s ease-out both" }}>02 — Визуал</p>
      <h2 style={{ ...sectionTitle, marginBottom: "2.8rem", animation: "su 0.9s ease-out 0.1s both" }}>
        Оформление сцены<br />
        <span style={{ fontStyle: "italic", color: "#7a5c3a" }}>и технологии</span>
      </h2>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1.4rem", animation: "su 1s ease-out 0.2s both",
      }}>
        <VisualCard
          image={STAGE_IMAGE}
          label="Сцена"
          title="Прозрачные экраны и голограммы"
          text="Образы поэтов и уральских композиторов появляются на прозрачных полотнах. После — живой человек из зала."
        />
        <VisualCard
          image={TANGO_IMAGE}
          label="Живая музыка"
          title="Скрипка, гитара, клавиши"
          text="Живой ансамбль сопровождает каждый блок. Жанр определяет образ женщины в этот момент."
        />
        <div style={{
          border: "1px solid #d4c4a8", padding: "2rem",
          background: "rgba(245,239,230,0.5)",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div>
            <p style={{ ...tagStyle, marginBottom: "1.2rem" }}>Блоки действия</p>
            <h3 style={{
              fontFamily: "'Cormorant', serif", fontWeight: 400,
              fontSize: "1.35rem", color: "#3d2b1a",
              marginBottom: "1rem", lineHeight: 1.2,
            }}>Личный момент для каждой женщины</h3>
            <p style={bodyText}>
              Мужчина из зала выходит на сцену и произносит речь для своих женщин. Дарит подарок — по желанию.
            </p>
          </div>
          <div style={{ borderTop: "1px solid #c8b89a", paddingTop: "1.2rem", marginTop: "1.5rem" }}>
            <p style={tagStyle}>Живые слова · Живые эмоции</p>
          </div>
        </div>
      </div>
      <Keyframes />
    </div>
  );
}

/* ─── Helpers ─── */
function VisualCard({ image, label, title, text }: { image: string; label: string; title: string; text: string }) {
  return (
    <div style={{ border: "1px solid #d4c4a8", overflow: "hidden", background: "rgba(250,248,244,0.6)" }}>
      <div style={{ position: "relative", overflow: "hidden", height: "185px" }}>
        <img src={image} alt={title} style={{
          width: "100%", height: "100%", objectFit: "cover",
          filter: "sepia(18%) contrast(0.86) brightness(1.08)",
          transition: "transform 0.55s ease",
        }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <div style={{ padding: "1.4rem" }}>
        <p style={{ ...tagStyle, marginBottom: "0.55rem" }}>{label}</p>
        <h3 style={{
          fontFamily: "'Cormorant', serif", fontWeight: 400,
          fontSize: "1.25rem", color: "#3d2b1a", marginBottom: "0.7rem", lineHeight: 1.2,
        }}>{title}</h3>
        <p style={{ ...bodyText, fontSize: "0.93rem" }}>{text}</p>
      </div>
    </div>
  );
}

function Corner({ pos }: { pos: "top-left" | "bottom-right" }) {
  const isTop = pos === "top-left";
  return (
    <div style={{
      position: "absolute",
      top: isTop ? "-1px" : "auto", bottom: isTop ? "auto" : "-1px",
      left: isTop ? "-1px" : "auto", right: isTop ? "auto" : "-1px",
      width: "2.2rem", height: "2.2rem",
      borderTop: isTop ? "2px solid #8b6e4e" : "none",
      borderLeft: isTop ? "2px solid #8b6e4e" : "none",
      borderBottom: isTop ? "none" : "2px solid #8b6e4e",
      borderRight: isTop ? "none" : "2px solid #8b6e4e",
    }} />
  );
}

function Keyframes() {
  return (
    <style>{`
      @keyframes su {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  );
}

/* ─── Shared styles ─── */
const tagStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "0.6rem",
  letterSpacing: "0.28em",
  color: "#a8926f",
  textTransform: "uppercase",
  marginBottom: "1.8rem",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Cormorant', serif",
  fontWeight: 300,
  fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
  lineHeight: 1.1,
  color: "#3d2b1a",
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Cormorant', serif",
  fontWeight: 400,
  fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
  lineHeight: 1.82,
  color: "#5c4530",
};

const bodyTextItalic: React.CSSProperties = {
  ...bodyText,
  fontStyle: "italic",
  fontWeight: 300,
  color: "#8b6e4e",
};
