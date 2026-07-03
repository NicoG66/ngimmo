const items=[
'Verkehrswertgutachten',
'Kurzgutachten',
'Marktwertermittlung',
'Kaufberatung',
'Erbschaft & Schenkung',
'Scheidung'
];

export default function Leistungen(){
  return (
    <section style={{padding:60,background:'#f6f7f6'}}>
      <h2 style={{color:'#1f3a2e'}}>Leistungen</h2>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:20}}>
        {items.map(i=>(
          <div key={i} style={{background:'#fff',padding:20,border:'1px solid #ddd'}}>
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}
