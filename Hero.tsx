export default function Hero(){
  return (
    <section style={{minHeight:'100vh',display:'flex',alignItems:'center',padding:40}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,maxWidth:1100,margin:'0 auto'}}>

        <div>
          <h1 style={{color:'#1f3a2e',fontSize:48}}>
            Verlässliche Gutachten für sichere Entscheidungen.
          </h1>

          <p style={{marginTop:20,fontSize:18}}>
            Unabhängige Immobilienbewertung durch Diplom-Sachverständigen (DIA) Nico Gerold.
          </p>

          <div style={{marginTop:30,display:'flex',gap:10}}>
            <button style={{background:'#1f3a2e',color:'#fff',padding:12,border:0}}>
              Gutachten anfragen
            </button>
            <button style={{border:'1px solid #1f3a2e',padding:12}}>
              Kontakt
            </button>
          </div>
        </div>

        <img src="/gerold.jpg" style={{width:'100%',borderRadius:12}} />

      </div>
    </section>
  );
}
