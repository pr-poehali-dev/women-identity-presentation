import React from "react";
import { IMG, TAG, H2, BODY, Divider } from "./shared";

/* ─── SLIDE 1: Обложка ─── */
export function SlideTitle() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"5% 8%", boxSizing:"border-box", position:"relative" }}>
      <img src={IMG.cello} alt="" style={{ position:"absolute", right:"2%", top:"50%", transform:"translateY(-50%)", width:"42%", opacity:0.12, filter:"sepia(20%)", pointerEvents:"none" }} />
      <img src={IMG.tango} alt="" style={{ position:"absolute", left:"1%", bottom:"3%", width:"14%", opacity:0.07, filter:"sepia(15%)", pointerEvents:"none" }} />
      <div style={{ textAlign:"center", position:"relative" }}>
        <h1 style={{ fontFamily:"'Raleway', sans-serif", fontWeight:300, fontSize:"clamp(2rem,5vw,4.4rem)", lineHeight:1.12, color:"#3d2b1a", letterSpacing:"0.03em", animation:"su 0.9s ease-out both" }}>
          Между ты и она
        </h1>
        <Divider delay="0.3s" />
        <h2 style={{ fontFamily:"'Raleway', sans-serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(1rem,2.4vw,2rem)", lineHeight:1.2, color:"#7a5c3a", letterSpacing:"0.06em", animation:"su 0.9s ease-out 0.35s both" }}>
          Лабиринты женских миров
        </h2>
      </div>
    </div>
  );
}

/* ─── SLIDE 2: Концепция ─── */
export function SlideConcept() {
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
export function SlideScenography() {
  const items = [
    { title:"Левитирующий стол", text:"Гости попадают в зал, где под потолком летающий арт-объект, который привлекает внимание. В определённый момент он опускается и становится столом для праздничного ужина." },
    { title:"Проекции на стены", text:"Видеоарт заполняет пространство, постоянно его меняя." },
  ];
  return (
    <div style={{ width:"100%", height:"100%", padding:"4% 6%", boxSizing:"border-box", display:"flex", flexDirection:"column" }}>
      <p style={{ ...TAG, animation:"su 0.7s ease-out both" }}>Сценография</p>
      <h2 style={{ ...H2, marginBottom:"3%", animation:"su 0.8s ease-out 0.1s both" }}>Технические решения</h2>
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

/* ─── SLIDE 4: Световые решения и голограммы ─── */
export function SlideHosts() {
  const items = [
    { title:"Решение по свету", text:"" },
    { title:"Голограммы и прозрачные экраны", text:"Образы известных поэтов и композиторов появляются на экранах — живые, объёмные, театральные." },
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
export function SlideProgram() {
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
      <img
        src="https://cdn.poehali.dev/projects/878f2bbd-d3f5-4bee-9b43-4fbbd9fa9103/bucket/c5378f03-f270-4258-9ad1-4ddef5431e32.jpg"
        alt="Сбор гостей"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(1.08) contrast(0.82) saturate(0.7)" }}
      />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(245,239,230,0.82) 0%, rgba(245,239,230,0.65) 50%, rgba(245,239,230,0.35) 100%)" }} />
      <div style={{ position:"absolute", top:"6%", left:"5%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(160,134,100,0.4)", borderLeft:"1px solid rgba(160,134,100,0.4)" }} />
      <div style={{ position:"absolute", top:"6%", right:"5%", width:"2.4rem", height:"2.4rem", borderTop:"1px solid rgba(160,134,100,0.4)", borderRight:"1px solid rgba(160,134,100,0.4)" }} />
      <div style={{ position:"absolute", bottom:"6%", left:"5%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(160,134,100,0.4)", borderLeft:"1px solid rgba(160,134,100,0.4)" }} />
      <div style={{ position:"absolute", bottom:"6%", right:"5%", width:"2.4rem", height:"2.4rem", borderBottom:"1px solid rgba(160,134,100,0.4)", borderRight:"1px solid rgba(160,134,100,0.4)" }} />
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
export function SlideIntro() {
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
              <p style={{ fontFamily:"'Raleway', sans-serif", fontWeight:400, fontSize:"clamp(0.65rem,0.92vw,0.8rem)", lineHeight:1.45, color:"#5c4530", margin:0 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SLIDE 7: Появление ведущего + Номер с лунами ─── */
export function SlideHost() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"stretch" }}>
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
