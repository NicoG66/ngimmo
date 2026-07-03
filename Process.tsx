const steps=['Erstberatung','Besichtigung','Analyse','Gutachten'];

export default function Process(){
  return (
    <section style={{padding:60,background:'#f6f7f6'}}>
      <h2 style={{color:'#1f3a2e'}}>Ablauf</h2>
      <div style={{display:'grid',gap:10,marginTop:20}}>
        {steps.map(s=>(
          <div key={s} style={{background:'#fff',padding:15}}>{s}</div>
        ))}
      </div>
    </section>
  );
}
