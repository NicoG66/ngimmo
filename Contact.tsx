export default function Contact(){
  return (
    <section style={{padding:60}}>
      <h2 style={{color:'#1f3a2e'}}>Kontakt</h2>

      <form style={{display:'grid',gap:10,maxWidth:500}}>
        <input placeholder='Name' />
        <input placeholder='E-Mail' />
        <textarea placeholder='Nachricht' rows={5} />
        <button style={{background:'#1f3a2e',color:'#fff',padding:12,border:0}}>
          Senden
        </button>
      </form>
    </section>
  );
}
