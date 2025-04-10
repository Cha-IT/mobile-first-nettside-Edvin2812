**Oppgave: Utvikling av en Mobile-Først Nettside med JavaScript og JSON**

**Scenario:**
Du har fått jobben med å utvikle en nettside for en lokal kafé som ønsker å tilby sine kunder en digital meny og muligheten til å bestille mat direkte fra mobilen. Nettsiden skal være optimalisert for mobile enheter, men også fungere godt på nettbrett og desktop.

**Krav til nettsiden:**

1. **Design og Layout:**
   - **Mobile-Først:** Design nettsiden med fokus på mobile enheter først, og bruk deretter mediespørringer for å tilpasse layouten til større skjermer.
   - **Responsiv Design:** Nettsiden skal automatisk tilpasse seg ulike skjermstørrelser og oppløsninger.

2. **Innhold:**
   - **Hjemmeside:** En velkomstmelding med en kort introduksjon til kafeen.
   - **Meny:** En interaktiv meny som hentes fra en ekstern JSON-fil og viser tilgjengelige retter og priser.
   - **Bestillingsskjema:** Et enkelt skjema hvor kunder kan legge til varer i en bestillingsliste.
   - **Kontaktinformasjon:** Adresse, telefonnummer og et innebygd Google Maps-kart som viser kafeens beliggenhet.

3. **Interaktivitet med JavaScript:**
   - **Dynamisk Meny:** Bruk JavaScript til å hente og vise menyen fra en ekstern JSON-fil.
   - **Bestillingsfunksjon:** Implementer en funksjon som lar brukeren legge til eller fjerne varer fra bestillingslisten.
   - **Validering av Skjema:** Sørg for at alle nødvendige felter i bestillingsskjemaet er fylt ut før sending.

4. **Ytelse og Tilgjengelighet:**
   - **Optimalisering:** Sørg for at nettsiden laster raskt, spesielt på mobile enheter.
   - **Tilgjengelighet:** Bruk semantisk HTML og sørg for at nettsiden er navigerbar med tastatur og skjermlesere.

5. **Ekstra Utfordring (Valgfritt):**
   - **Lagring av Bestillinger:** Bruk LocalStorage til å lagre brukerens bestilling, slik at den ikke går tapt ved oppdatering av siden.

**Begynnerkode:**

For å komme i gang, kan dere bruke følgende HTML- og CSS-mal:

*HTML (index.html):*
```html
<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Min Mobile-Først Nettside</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Hjem</a></li>
        <li><a href="#menu">Meny</a></li>
        <li><a href="#order">Bestill</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="home">
      <h1>Velkommen til vår kafé</h1>
      <p>Oppdag vår deilige meny og bestill direkte fra mobilen.</p>
    </section>
    <section id="menu">
      <h2>Meny</h2>
      <ul id="menu-list">
        <!-- Menyelementer vil bli lagt til her dynamisk -->
      </ul>
    </section>
    <section id="order">
      <h2>Din Bestilling</h2>
      <ul id="order-list">
        <!-- Bestillingsliste vil bli lagt til her -->
      </ul>
      <button id="submit-order">Send Bestilling</button>
    </section>
    <section id="contact">
      <h2>Kontakt Oss</h2>
      <p>Adresse: Eksempelgate 123, 7010 Trondheim</p>
      <p>Telefon: 123 45 678</p>
      <div id="map">
        <!-- Google Maps-kart vil bli integrert her -->
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 Min Kafé</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

*CSS (styles.css):*
```css
/* Grunnleggende stiler for mobile enheter */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 20px;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

/* Stiler for større skjermer */
@media (min-width: 768px) {
  nav ul {
    display: flex;
    justify-content: center;
  }

  nav ul li {
    margin-right: 20px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  section {
    width: 30%;
  }
}
```
