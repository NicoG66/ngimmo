export default function About(){
  return (
    <section style={{padding:60}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,maxWidth:1100,margin:'0 auto'}}>
        <img src='/gerold.jpg' style={{width:'100%',borderRadius:12}} />

        <div>
          <h2 style={{color:'#1f3a2e'}}>Über mich</h2>
          <p>
            Als Diplom-Sachverständiger (DIA) erstelle ich unabhängige Immobilienbewertungen.
          </p>
        </div>
      </div>
    </section>
  );
}
