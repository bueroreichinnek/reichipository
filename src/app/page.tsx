'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Skeleton } from "../components/ui/Skeleton";
import * as Dialog from "@radix-ui/react-dialog";
import { Mail, Phone } from "lucide-react";

const memberships = [
  { 
    name: "Rosa-Luxemburg-Stiftung Niedersachsen", 
    image: "/images/mitgliedschaften/rls.png", 
    website: "https://www.rosalux.de/stiftung/landesstiftungen/niedersachsen" 
  },
  { 
    name: "Gewerkschaft ver.di", 
    image: "/images/mitgliedschaften/verdi.png", 
    website: "https://www.verdi.de" 
  },
  { 
    name: "VVN-BdA e.V.", 
    image: "/images/mitgliedschaften/vvnbda.png", 
    website: "https://vvn-bda.de" 
  },
  { 
    name: "ProVeg e.V.", 
    image: "/images/mitgliedschaften/proveg.png", 
    website: "https://proveg.com/de" 
  },
  { 
    name: "ADFC e.V.", 
    image: "/images/mitgliedschaften/adfc.png", 
    website: "https://www.adfc.de" 
  },
];

export default function HomePage() {
  // Simulate loading state for demonstration
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Datawrapper scripts
  React.useEffect(() => {
    if (!loading) {
      // Create and append Datawrapper script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = `
        !function() {
          "use strict";
          window.addEventListener("message", function(e) {
            if (void 0 !== e.data["datawrapper-height"]) {
              var t = document.querySelectorAll("iframe");
              for (var a in e.data["datawrapper-height"])
                for (var r = 0; r < t.length; r++) {
                  if (t[r].contentWindow === e.source)
                    t[r].style.height = e.data["datawrapper-height"][a] + "px";
                }
            }
          });
        }();
      `;
      document.body.appendChild(script);
    }
  }, [loading]);

  return (
    <div className="flex flex-col w-full">
      {/* Gläserne Abgeordnete Section */}
      <section id="GlaserneAbgeordnete" className="w-full py-16 px-4 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Radial Gradients */}
        <div className="pointer-events-none absolute z-0 w-full h-full top-0 left-0">
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1200px',
            height: '1200px',
            background: 'radial-gradient(circle, var(--tuerkis, #00B19C) 0%, transparent 70%)',
            opacity: 0.18,
            pointerEvents: 'none',
            zIndex: 0,
          }} />
        </div>
        <h2 className="text-3xl font-[var(--font-work-sans)] font-black mb-10 text-primary text-center">Gläserne Abgeordnete</h2>
        <div className="w-full max-w-[90%] mx-auto px-4">
          {/* Graph embeds - full width */}
          <div className="w-full">
            <div className="flex flex-wrap mb-8">
              <div className="w-full md:w-1/2 p-2">
                {/* Graph 1 embeds */}
                {loading ? (
                  <Skeleton className="h-[273px] w-full mb-4" />
                ) : (
                  <div className="mb-4 backdrop-blur-lg bg-white/80 border border-white/30 rounded-lg p-4 shadow-lg">
                    <iframe 
                      title="Einkünfte" 
                      aria-label="Balken" 
                      id="datawrapper-chart-MpcGr" 
                      src="https://datawrapper.dwcdn.net/MpcGr/1/" 
                      scrolling="no" 
                      frameBorder="0" 
                      style={{ width: "100%", border: "none" }} 
                      height="273">
                    </iframe>
                  </div>
                )}
                
                {loading ? (
                  <Skeleton className="h-[366px] w-full" />
                ) : (
                  <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-lg p-4 shadow-lg">
                    <iframe 
                      title="Ausgaben" 
                      aria-label="Balken" 
                      id="datawrapper-chart-cFafw" 
                      src="https://datawrapper.dwcdn.net/cFafw/1/" 
                      scrolling="no" 
                      frameBorder="0" 
                      style={{ width: "100%", border: "none" }} 
                      height="366">
                    </iframe>
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-1/2 p-2">
                {/* Graph 2 embeds */}
                {loading ? (
                  <Skeleton className="h-[155px] w-full mb-4" />
                ) : (
                  <div className="mb-4 backdrop-blur-lg bg-white/80 border border-white/30 rounded-lg p-4 shadow-lg">
                    <iframe 
                      title="Sonstige Einkünfte" 
                      aria-label="Balken" 
                      id="datawrapper-chart-V8txQ" 
                      src="https://datawrapper.dwcdn.net/V8txQ/1/" 
                      scrolling="no" 
                      frameBorder="0" 
                      style={{ width: "100%", border: "none" }} 
                      height="155">
                    </iframe>
                  </div>
                )}
                
                {loading ? (
                  <Skeleton className="h-[364px] w-full mb-4" />
                ) : (
                  <div className="mb-4 backdrop-blur-lg bg-white/80 border border-white/30 rounded-lg p-4 shadow-lg">
                    <iframe 
                      title="Ausgaben aus Kostenpauschale" 
                      aria-label="Balken (gruppiert)" 
                      id="datawrapper-chart-yiVZc" 
                      src="https://datawrapper.dwcdn.net/yiVZc/1/" 
                      scrolling="no" 
                      frameBorder="0" 
                      style={{ width: "100%", border: "none" }} 
                      height="364">
                    </iframe>
                  </div>
                )}
                
                {/* Graph 3 embed - moved below graph 2 in right column */}
                {loading ? (
                  <Skeleton className="h-[400px] w-full" />
                ) : (
                  <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-lg p-4 shadow-lg transition-shadow hover:shadow-[0_0_15px_rgba(111,0,60,0.7)]">
                    <iframe 
                      title="Gesamtübersicht" 
                      aria-label="Säulen (gruppiert)" 
                      id="datawrapper-chart-aZxF5" 
                      src="https://datawrapper.dwcdn.net/aZxF5/1/" 
                      scrolling="no" 
                      frameBorder="0" 
                      style={{ width: "100%", border: "none" }} 
                      height="400">
                    </iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Accordion Section */}
        <div className="w-full max-w-[90%] mx-auto px-4 mt-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Das Kleingedruckte: Haben
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p className="mb-4">Abgeordnete des Bundestages bekommen viel Geld. Deshalb ist mir wichtig, darüber Rechenschaft abzulegen, was mit diesem Geld passiert, denn nicht alles davon landet auch bei mir – aus gutem Grund. Eine genaue Aufschlüsselung über die Diäten und anderen Pauschalen findet sich ferner auf den Seiten des deutschen Bundestages.</p>
                
                <p className="mb-2"><strong>Abgeordnetenentschädigung: brutto, voll zu versteuern</strong></p>
                <p className="mb-4">Die Höhe der Diäten von Bundestagsabgeordneten richtet sich nach dem Einkommen von Bürgermeistern kleinerer bis mittlerer Städte sowie dem Einkommen eines Richters bei einem obersten Gerichtshof des Bundes. Diese Entschädigung erhöht sich jährlich zum 1. Juli auf der Basis des vom Statistischen Bundesamt ermittelten durchschnittlichen Anstiegs der Nominallöhne. Sonderzahlungen wie Urlaubsgeld, Weihnachtsgeld oder ein dreizehntes Monatsgehalt gibt es nicht.</p>
                
                <p className="mb-2"><strong>Kostenpauschale: steuerfrei</strong></p>
                <p className="mb-4">Von dieser pauschalen Aufwandsentschädigung bezahle ich u.a. Einrichtung und Unterhalt meiner Bürgerbüros in Osnabrück, Hameln und Aurich (z.B. Miete, Nebenkosten, Inventar), Kosten der doppelten Haushaltsführung (z.B. für meine Zweitwohnung in Berlin), Fahrtkosten, Portokosten und Ausgaben für die Öffentlichkeitsarbeit und für Veranstaltungen im Wahlkreis. Sie wird auf ein separates Konto überwiesen – das kann im Übrigen jede*r Abgeordnete selbst entscheiden – und bei mir, im Gegensatz zu anderen, nur für Mandatsbezogenes ausgegeben. Geld, das nicht sofort ausgeben wird, verbleibt auf diesem Konto und ist in den Statistiken oben als &quot;Ausgabenrücklage für Sonderbedarfe&quot; angegeben. Im Gegenzug dafür gibt es für Abgeordnete keine Werbungskosten. Ich kann also keine weiteren berufsbedingten Kosten von der Steuer absetzen. Die Kostenpauschale erhöht nicht mein Einkommen.</p>
                
                <p className="mb-2"><strong>Beihilfe des Bundestages</strong></p>
                <p className="mb-2">Zur Kranken- und Pflegeversicherung bezuschusst der Bundestag 50% der Gesamtbeiträge.</p>
                <p className="mb-2"><strong>Nebeneinkünfte & Bestechungsgelder: Versteuerung nach Gusto</strong></p>
                <p>Ich beziehe derzeit keine Nebeneinkünfte und lasse mich nicht bestechen.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Das Kleingedruckte: Soll
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p className="mb-2"><strong>Diäten</strong></p>
                <p className="mb-4">Auch ich zahle von meiner Diät Einkommenssteuer, Solidaritätszuschlag, Pflegeversicherung. Krankenversichert bin ich freiwillig gesetzlich zum Höchstbeitrag, denn wir wollen die private Krankenversicherung abschaffen, und deshalb wäre es unsinnig, mich privat versichern zu lassen. Abgeordnete der Fraktion DIE LINKE. sind hier ein Sonderfall.</p>
                
                <p className="mb-2"><strong>Kostenpauschale</strong></p>
                <p className="mb-4">Die Kostenpauschale wird (richtigerweise) spürbar gekürzt, wenn wir Abgeordneten entschuldigt oder unentschuldigt an einem Sitzungstag im Plenum fehlen. Verpasse ich Sitzungstage, werden mir 20 Euro (bei genehmigten Dienstreisen oder entschuldigtem Fehlen mit ärztlichem Attest), 100 Euro (bei entschuldigtem Fehlen) oder 200 Euro (bei unentschuldigtem Fehlen) pro Tag abgezogen.</p>
                
                <p className="mb-2"><strong>Sonderfälle Mandatsträgerbeiträge und Fraktionsverein</strong></p>
                <p>Wer für DIE LINKE. für ein Parlament kandidiert, muss, im Gegensatz zu vielen anderen Parteien, keine Kosten selbst tragen, damit Repräsentation nicht vom Geldbeutel abhängt. Dafür verpflichten sich die Abgeordneten, einen Teil ihrer Diät an die Partei zu spenden. Der Fraktionsverein der Linksfraktion ist auch ein Sonderfall. Weil sich bislang jede Regierung entschlossen hat, gegen die Stimmen der LINKEN die Diäten regelmäßig zu erhöhen, wir aber finden, das Abgeordnete bereits genug verdienen, spenden wir einen Teil unserer Diäten an einen Verein, der soziale Projekte in unseren Wahlkreisen auf formlosen Antrag finanziell unterstützt.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Dienstreisen
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Im Stadtgebiet von Berlin steht allen Abgeordneten ein Fahrdienst zur Verfügung – dieser kann jederzeit gerufen werden und besteht aus der Flotte der Bundeswehr. Weiterhin steht mir im Bundesgebiet eine BahnCard 100 der Deutschen Bahn (1. Klasse) zur Verfügung, die ich permanent nutze. Inlandsflugkosten würde ich ersetzt bekommen, soweit sie in Ausübung meines Mandats anfallen. Aber durch die BahnCard hat sich das bis heute noch nicht ergeben. Für Auslandsreisen, die im Zusammenhang mit der Ausübung meines Mandats bestehen, werden mir nach Bewilligung die Bahn- oder Flugkosten sowie Reisekosten vor Ort erstattet. Außerdem verfüge ich für die Dauer meines Mandats über einen Diplomatenpass. Im Rahmen eines Programms der Robert-Bosch-Stiftung nehme ich an Reisen ins Ausland teil. Die dort entstanden Kosten für Anreise, Unterkunft und Essen werden von der Stiftung getragen. Entsprechende Übersichten darüber finden sich auf meiner Seite beim Deutschen Bundestag.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Mitarbeiter*innenpauschale
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p>Zur Unterstützung der parlamentarischen Arbeit steht jedem Abgeordneten eine Mitarbeiterpauschale von derzeit 23.205 Euro im Monat zu. Diese Summe wird mir nicht ausgezahlt, die Abrechnung der Mitarbeitergehälter erfolgt durch die Bundestagsverwaltung. Zur Zeit beschäftige ich vier Mitarbeiter*innen in meinem Berliner Büro und vier Mitarbeiter*innen in meinen Wahlkreisbüros. Geld, das nicht für Gehälter aufgebraucht wird, geht zurück an den Fiskus. Mitarbeiter*innen dürfen mich in ihrer Arbeitszeit nicht bei Parteiarbeit oder im Wahlkampf unterstützen.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Büroausstattung
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <p className="mb-4">Als Abgeordnete habe ich einen Anspruch auf ein eingerichtetes Büro am Sitz des Bundestages in einer Größe von derzeit 54 Quadratmeter für mich und meine Mitarbeiterinnen einschließlich Kommunikationsgeräten und Möblierung. Wir haben außerdem einen Anspruch auf die Nutzung der Kommunikationssysteme (Telefon, Internet, E-Mail, Software).</p>
                
                <p className="mb-2"><strong>Konto für Sachleistungen</strong></p>
                <p>Für meine Büroausstattung stehen mir im Jahr pauschal 12.000 Euro zur Verfügung. Diese Summe wird nicht in bar ausgezahlt. Abrechnen kann ich hier zum Beispiel Büromaterial, Geräte wie Laptops mit Zubehör, mandatsbezogene Fachbücher, die IT-Ausstattung des Wahlkreisbüros, Mobiltelefone sowie Mobilfunk- und Festnetzverträge. Auch die Telefonkosten, die im Wahlkreis entstehen, können aus diesen Mitteln bestritten werden. Jede/r Abgeordnete kann selbst über die Anschaffungen entscheiden.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Mitgliedschaften Section */}
      <section id="Mitgliedschaften" className="w-full py-16 px-0 flex flex-col justify-center">
        <h2 className="text-3xl font-[var(--font-work-sans)] font-black mb-10 text-primary text-center">Mitgliedschaften</h2>
        <div className="flex justify-center w-full max-w-[90%] mx-auto px-4">
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-4xl"
          >
            <CarouselContent>
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                      <Card className="overflow-hidden h-full transition-all duration-300">
                        <CardContent className="flex aspect-square items-center justify-center p-4">
                          <Skeleton className="w-full h-full" />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))
                : memberships.map((membership, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                      <Link href={membership.website} target="_blank" rel="noopener noreferrer">
                        <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
                          <CardContent className="flex aspect-square items-center justify-center p-4">
                            <div className="relative w-full h-full flex items-center justify-center">
                              <Image
                                src={membership.image}
                                alt={membership.name}
                                width={200}
                                height={200}
                                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                              />
                              <p className="absolute bottom-0 left-0 right-0 text-center bg-white/80 p-2 text-sm font-medium">
                                {membership.name}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Bueros Section */}
      <section id="Bueros" className="relative w-screen py-16 flex flex-col justify-center ml-[-56px] overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left background image */}
          <div className="md:w-1/2 relative h-[500px] md:h-auto">
            <div className="absolute inset-0">
              <Image
                src="/images/bueros/bg.jpg"
                alt="Büros Hintergrundbild"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Section title moved to bottom left */}
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-4xl font-[var(--font-work-sans)] font-black text-white">Büros</h2>
            </div>
          </div>
          {/* Right cards grid */}
          <div className="md:w-1/2 p-6 bg-[var(--dunkelrot)]">
            {/* Decorative radial gradients */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full" 
                   style={{ background: 'radial-gradient(circle, var(--die-linke-rot) 0%, transparent 70%)', opacity: 0.15 }}>
              </div>
              <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full" 
                   style={{ background: 'radial-gradient(circle, var(--die-linke-rot) 0%, transparent 70%)', opacity: 0.1 }}>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Office Cards - now clickable and open modal */}
              {[
                {
                  key: "hameln",
                  name: "Büro Hameln",
                  image: "/images/bueros/hameln.png",
                  modal: {
                    heading: "Büro Hameln",
                    details: (
                      <div className="text-base font-[var(--font-inter)]">
                        <div>Heidi Reichinnek, MdB<br/>Domeierstr. 6<br/>31785 Hameln</div>
                        <div className="mt-2 font-bold">Kontakt:</div>
                        <div className="text-sm font-normal">
                          Felix Mönkemeyer<br/>
                          <a href="mailto:heidi.reichinnek.ma06@bundestag.de" className="underline inline-flex items-center gap-1"><Mail size={14} /> heidi.reichinnek.ma06@bundestag.de</a>
                        </div>
                      </div>
                    )
                  }
                },
                {
                  key: "aurich",
                  name: "Büro Aurich",
                  image: "/images/bueros/aurich.png",
                  modal: {
                    heading: "Büro Aurich",
                    details: (
                      <div className="text-base font-[var(--font-inter)]">
                        <div>Heidi Reichinnek, MdB<br/>Zum Fernsehturm 17<br/>26605 Aurich</div>
                        <div className="mt-2 font-bold">Kontakt:</div>
                        <div className="text-sm font-normal">
                          Laura Schlutter<br/>
                          <a href="mailto:heidi.reichinnek.ma05@bundestag.de" className="underline inline-flex items-center gap-1"><Mail size={14} /> heidi.reichinnek.ma05@bundestag.de</a>
                        </div>
                      </div>
                    )
                  }
                },
                {
                  key: "osnabrueck",
                  name: "Wahlkreisbüro Osnabrück",
                  image: "/images/bueros/osnabrueck.png",
                  modal: {
                    heading: "Wahlkreisbüro Osnabrück",
                    details: (
                      <div className="text-base font-[var(--font-inter)]">
                        <div>Heidi Reichinnek, MdB<br/>Parkstraße 24a,<br/>49080 Osnabrück</div>
                        <div className="mt-2 font-bold">Kontakt:</div>
                        <div className="text-sm font-normal">
                          Anke Kuhn<br/>
                          <span className="inline-flex items-center gap-1"><Phone size={14} />0541 800 94710</span>
                        </div>
                      </div>
                    )
                  }
                },
                {
                  key: "bundestag",
                  name: "Büro im Bundestag",
                  image: "/images/bueros/bundestag.png",
                  modal: {
                    heading: "Büro im Bundestag",
                    details: (
                      <div className="text-base font-[var(--font-inter)]">
                        <div>Heidi Reichinnek, MdB<br/>Platz der Republik 1<br/>11011 Berlin</div>
                        <div className="mt-2 font-bold">Kontakt:</div>
                        <div className="flex flex-col gap-1 text-sm font-normal">
                          <span>Jeanette Tittel<br/><a href="mailto:heidi.reichinnek@bundestag.de" className="underline inline-flex items-center gap-1"><Mail size={14} />heidi.reichinnek@bundestag.de</a></span>
                          <span><Phone size={14} />030 227 78 200</span>
                        </div>
                      </div>
                    )
                  }
                }
              ].map(office => (
                <Dialog.Root key={office.key}>
                  <Dialog.Trigger asChild>
                    <button className="bg-white border rounded-lg shadow-sm flex flex-col items-start overflow-hidden cursor-pointer transition hover:shadow-lg focus:outline-none">
                      <Image
                        src={office.image}
                        alt={office.name}
                        width={320}
                        height={180}
                        className="w-full h-32 object-cover"
                        priority
                      />
                      <div className="p-6 w-full">
                        <h3 className="font-[var(--font-work-sans)] font-black text-lg mb-2">{office.name}</h3>
                      </div>
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl flex w-full max-w-2xl min-h-[320px] max-h-[90vh] overflow-hidden">
                      {/* Left: Image */}
                      <div className="flex-shrink-0 w-1/2 h-full relative min-h-[320px]">
                        <Image src={office.image} alt={office.name} fill className="object-cover w-full h-full" />
                      </div>
                      {/* Right: Content */}
                      <div className="flex-1 flex flex-col p-8 justify-center">
                        <Dialog.Title className="font-[var(--font-work-sans)] font-light text-2xl mb-4">{office.modal.heading}</Dialog.Title>
                        {office.modal.details}
                        <Dialog.Close asChild>
                          <button className="absolute top-4 right-4 text-black/60 hover:text-black text-2xl font-bold focus:outline-none">×</button>
                        </Dialog.Close>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="Kontakt" className="w-full py-16 px-0 flex flex-col justify-center">
        <h2 className="text-3xl font-[var(--font-work-sans)] font-black mb-10 text-primary text-center">Kontakt</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-[90%] mx-auto px-4">
          {/* Heidi an dich */}
          <div className="flex-1 border rounded-lg p-6 flex flex-col items-start shadow-sm">
            <h3 className="font-[var(--font-work-sans)] font-black text-xl mb-4">Heidi an dich</h3>
            <form className="w-full flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="font-[var(--font-inter)] text-sm mb-1">Newsletter abonnieren</label>
              <div className="flex w-full gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded font-bold text-sm hover:bg-red-700 transition">Anmelden</button>
              </div>
            </form>
          </div>
          {/* Du an Heidi */}
          <div className="flex-1 border rounded-lg p-6 flex flex-col items-start shadow-sm">
            <h3 className="font-[var(--font-work-sans)] font-black text-xl mb-4">Du an Heidi</h3>
            <button className="bg-primary text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition">Jetzt Kontakt aufnehmen</button>
          </div>
        </div>
      </section>
    </div>
  );
}
