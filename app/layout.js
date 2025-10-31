import './(site)/_styles/globals.css';

export const metadata = {
  title: 'The Creativity Engine — by Gaby Castellanos',
  description: 'Estructura, claridad y criterio aplicados a tu marca.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="wrap">
          <header>
            <div className="brand">
              <div style={{width:28,height:28,borderRadius:8,background:'#111',border:'1px solid #1f1f1f',display:'grid',placeItems:'center',fontWeight:800}}>GE</div>
              <h1>The Creativity Engine — by Gaby Castellanos</h1>
            </div>
            <span className="pill">Beta privada</span>
          </header>
          {children}
          <footer>
            <div>© The Creativity Engine — Gaby Castellanos</div>
            <div className="mono">v0.4 • Enlaces protegidos con /go/</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
