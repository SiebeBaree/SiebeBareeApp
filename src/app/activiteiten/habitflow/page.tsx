import Image from "next/image";
import Img1 from "../../../../public/activities/habitflow/1.png";
import Img2 from "../../../../public/activities/habitflow/2.png";

export default function Page() {
    return (
        <div className="container my-12 flex flex-col gap-2">
            <h1 className="text-5xl font-bold">HabitFlow</h1>
            <b>Omschrijving:</b>
            <p>
                Het doel van HabitFlow is om mijn discipline te trainen en te zorgen dat ik projecten afmaak. Ik had
                mezelf 10 dagen gegeven om een nieuwe kleine tool te ontwikkelen, inclusief brainstormen, design fase,
                ontwikkelingsfase en marketing. Het 2de doel van deze activiteit was om wat meer te leren over sociale
                media marketing.
            </p>
            <br />
            <b>Kern:</b>
            <p>
                HabitFlow, mijn recent opgerichte micro SaaS-bedrijf, is het resultaat van een intensieve
                ontwikkelingsperiode van slechts tien dagen. Geïnspireerd door het boek &quot;Atomic Habits&quot; van
                James Clear, een van mijn favoriete boeken die een aanzienlijke invloed op mijn persoonlijke en
                professionele leven heeft gehad, besloot ik een digitale habit tracker te creëren. De tracker is een
                gedigitaliseerde versie van de papieren habit tracker in dat boek. Deze tracker is bedoeld om gebruikers
                te helpen goede gewoonten aan te nemen en slechte af te leren, wat direct aansluit bij de principes uit
                het boek.
            </p>
            <p>
                De kernfunctionaliteit van HabitFlow bestaat uit het kunnen vastleggen van gewoonten die gebruikers
                willen ontwikkelen of juist willen afbouwen. Elke dag kunnen gebruikers de app openen en een vinkje
                zetten bij de gewoonten die ze die dag hebben volgehouden. Dit eenvoudige maar krachtige systeem biedt
                gebruikers niet alleen een duidelijk overzicht van hun vooruitgang over de maand, maar helpt ook bij het
                versterken van discipline; het zien van een ononderbroken reeks succesvolle dagen motiveert immers om
                niet op te geven.
            </p>
            <p>
                De ontwikkeling van HabitFlow begon met een fase van brainstormen. Ik wist dat ik iets nodig had dat
                mijn leven zou verbeteren en waar nog geen tool voor beschikbaar was op de desktop-markt. Op mobile
                bestaan er duizenden habit tracking apps maar ik kon er weinig vinden als website op PC. Habit tracking
                apps bleken schaars te zijn, wat mij een duidelijke richting gaf. Ik identificeerde snel de kernfunctie
                voor de Minimal Viable Product (MVP) versie: een habit tracker waar gebruikers hun dagelijkse gewoontes
                kunnen invoeren en bijhouden, een simpele tabel waar je dagelijks je gewoontes van af vinken.
            </p>
            <p>
                De volgende stap was het ontwerpen van de UI. Met behulp van Figma ontwierp ik in twee dagen tijd een
                schets van hoe de app eruit moest zien. Het ontwerp moest intuïtief en gebruiksvriendelijk zijn, zodat
                gebruikers gemakkelijk hun gewoonten konden toevoegen en hun voortgang konden monitoren. Ik heb mezelf 2
                vragen gesteld: “Hoe kan ik een gebruiker die mijn website bezoekt een bepaald gevoel geven dat dit de
                oplossing is tot hun probleem?” en “Hoe kan ik de gebruiker persoonlijk aanspreken?”, voor deze 2 vragen
                te beantwoorden in mijn ontwerpen heb ik vele UX videos bekeken op YouTube en bekeken wat de
                concurrentie doet op de mobile markt.
            </p>
            <p>
                De ontwikkelingsfase nam zeven dagen in beslag. Dit was de eerste keer dat ik een betalingssysteem in
                een app integreerde, wat een aanzienlijke uitdaging vormde. Ik bestudeerde uitgebreid de relevante
                documentatie en artikelen over belastingwetgeving om te zorgen dat alles juridisch correct was
                afgehandeld. Dit leerproces was niet alleen technisch uitdagend, maar ook essentieel voor het zakelijke
                aspect van de app.
            </p>
            <p>
                De laatste dag heb ik gebruikt om mijn app op zoveel mogelijk platformen te lanceren. Gedurende de 9
                vorige dagen heb ik geprobeerd om volgers te krijgen op Twitter/X om zo reclame te kunnen maken vandaag.
                Dit is moeizaam verlopen maar ik heb toch op 5+ platformen mijn product aangekondigd en de eerste 6 uur
                al meer dan 200 bezoekers gekregen.
            </p>

            <Image src={Img1} alt="HabitFlow" />
            <Image src={Img2} alt="HabitFlow" />

            <br />
            <b>Reflectie:</b>
            <p>
                Dankzij het project HabitFlow heb ik waardevolle lessen geleerd over het snel opzetten van een bedrijf,
                een ervaring die cruciaal bleek voor mijn persoonlijke en professionele ontwikkeling. In het verleden
                probeerde ik vaak bedrijven te starten, maar faalde doordat ik de neiging had alles te groot en perfect
                te willen zien, wat leidde tot uitstelgedrag. Met HabitFlow stelde ik mezelf een strakke deadline van
                slechts 10 dagen om van het brainstormen tot de marketing alles rond te krijgen. Dit dwong me om
                gefocust en doelgericht te werken.
            </p>

            <p>
                In dit proces heb ik bewust afgeweken van enkele standaardpraktijken zoals uitgebreide planning of
                marktonderzoek. Hoewel dit tegen de gebruikelijke aanpak ingaat, was het voor mij een strategie om mijn
                gewoonte van projecten opgeven tijdens ontwikkeling te doorbreken. Achteraf gezien bleek dit een
                effectieve methode. Tijdens de ontwikkelingsfase werd ik echter vaak afgeleid door features die niet
                essentieel waren voor de kernfunctionaliteit van de app. Het was een uitdaging om me te beperken tot het
                creëren van een basisapplicatie binnen de zeven dagen die ik ervoor uitgetrokken had, zonder me te laten
                verleiden tot het toevoegen van &apos;nice-to-have&apos;-functies.
            </p>
            <p>
                Deze ervaring heeft mij veel geleerd over het belang van focus en discipline in projectmanagement. Ik
                ontdekte dat mijn vermogen om snel te leren en beslissingen te nemen onder tijdsdruk tot mijn sterke
                punten behoren, maar ook dat mijn neiging om afgeleid te worden door minder belangrijke details een
                aandachtspunt blijft.
            </p>
            <p>
                De keuze om HabitFlow in mijn portfolio op te nemen, weerspiegelt mijn groei in het zelfstandig van
                start tot finish kunnen brengen van een product. Dit project is niet alleen een bewijs van mijn
                technische vaardigheden, maar toont ook mijn capaciteit voor snel leren en aanpassen, wat essentieel is
                voor mijn toekomstige carrière. HabitFlow was het eerste project dat ik publiek maakte na jaren van
                programmeren en het onderweg opgeven van projecten; het markeren van een keerpunt in mijn aanpak van
                softwareontwikkeling en ondernemerschap.
            </p>
        </div>
    );
}
