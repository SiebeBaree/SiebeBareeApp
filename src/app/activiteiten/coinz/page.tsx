import Image from "next/image";
import Img1 from "../../../../public/activities/coinz/1.png";
import Img2 from "../../../../public/activities/coinz/2.png";
import Img3 from "../../../../public/activities/coinz/3.png";

export default function Page() {
    return (
        <div className="container my-12 flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Coinz</h1>
            <b>Omschrijving:</b>
            <p>
                Coinz was een kleine side-project dat ik als idee had in het middelbaar en toen ook heb uitgevoerd. Het
                doel was oorspronkelijk dat ik een echt project ging opzetten zodat ik meer kon leren over programmeren
                in een groter project waar ik meerdere maanden aan bezig kon zijn. Ik heb het hele project volledig
                alleen ontwikkelt.
            </p>
            <br />
            <b>Kern:</b>
            <p>
                Coinz is een Discord-bot die functioneert als een real-life simulator binnen een Discord community.
                Coinz is ontworpen om gebruikers amusement te bieden door middel van interactieve spelletjes en
                economische activiteiten, waarbij alles draait om virtueel geld genaamd Coinz. Gebruikers kunnen deze
                bot gratis toevoegen aan hun eigen Discord-server.
            </p>
            <p>
                De functionaliteit van Coinz is verdeeld over veertig verschillende commando&apos;s, ondergebracht in
                vier hoofdcategorieën. De eerste categorie bevat algemene commando&apos;s waar gebruikers virtueel werk
                kunnen vinden, kleine taken kunnen uitvoeren, geld kunnen stelen of bedelen bij andere gebruikers en
                zelfs producten kunnen kopen en verkopen in een virtuele winkel. Daarnaast is er een virtuele bank, de
                Coinz Bank, waar gebruikers hun geld veilig kunnen bewaren zonder risico op diefstal van andere
                gebruikers.
            </p>
            <p>
                De tweede categorie omvat diverse games, variërend van casinospellen zoals blackjack, roulette en
                slotmachines, tot eenvoudigere spellen zoals steen-papier-schaar en OXO. Voor veel van deze spellen is
                ook een multiplayer optie beschikbaar, waarbij automatisch een sessie wordt opgezet voor de spelers.
            </p>
            <p>
                De derde categorie is gericht op business. Gebruikers kunnen hun eigen bedrijf starten, fabrieken kopen,
                en personeel aannemen. Er is zelfs een optie om als boer aan de slag te gaan, waarbij men land kan kopen
                en gewassen kan verbouwen en oogsten.
            </p>
            <Image src={Img1} alt="Coinz" />
            <p>
                De laatste categorie heeft betrekking op financiën, waar gebruikers kunnen handelen in aandelen en
                cryptocurrency. Hoewel de transacties met virtueel geld plaatsvinden, zijn de aandelen en crypto&apos;s
                gekoppeld aan hun werkelijke, actuele marktwaarden. Dit stelt gebruikers in staat om op een risicovrije
                manier ervaring op te doen met investeren.
            </p>
            <Image src={Img2} alt="Coinz" />
            <p>
                De ontwikkeling van Coinz begon als een project tijdens het zesde middelbaar, toen ik ontdekte dat ik
                een talent had voor programmeren na een eerste kennismaking met Arduino. De initiële versie van Coinz
                werd geschreven in Python, maar na een jaar heb ik besloten om de bot volledig te herschrijven in
                JavaScript. Ik maakte hierna ook gebruik van React om een website te bouwen en leerde hoe
                OAuth-authenticatie werkt door de implementatie van een &quot;Login via Discord&quot;-functie.
            </p>
            <p>
                Na verloop van tijd ben ik echter overgestapt van JavaScript naar TypeScript. Dit besluit was gebaseerd
                dat JavaScript niet type-safe is, wat in TypeScript wel het geval is. De overgang naar TypeScript bood
                een stabielere basis voor mijn project, vooral toen ik de principes van Object-Oriented Programming
                (OOP) toepaste, iets wat we op school leerden. Echter, door ervaring en verdere ontwikkeling ben ik
                uiteindelijk overgestapt van OOP naar functioneel programmeren. Ik kwam tot de conclusie dat, hoewel
                vaak geleerd wordt dat OOP de beste benadering is, het niet altijd de meest effectieve methode is voor
                elke toepassing. Voor Coinz bleek functioneel programmeren een efficiëntere oplossing te bieden.
            </p>
            <p>
                In de meest recente versie van Coinz heb ik een compleet nieuwe website ontwikkeld, waarbij ik gebruik
                heb gemaakt van de nieuwste webtechnologieën, waaronder server-side rendering en partial pre-rendering
                met Next.js. Deze technieken zijn cruciaal voor het verbeteren van de laadtijden en optimaliseren van de
                gebruikerservaring, vergelijkbaar met hoe grote applicaties zoals YouTube en Google deze implementeren.
                De implementatie van deze geavanceerde functies heeft mij dieper inzicht gegeven in de moderne
                webarchitectuur, wat mijn vaardigheden als webontwikkelaar aanzienlijk heeft versterkt.
            </p>
            <Image src={Img3} alt="Coinz" />
            <p>
                Daarnaast introduceerde ik met deze website-update een premium versie van Coinz, waarbij gebruikers zich
                kunnen abonneren om toegang te krijgen tot exclusieve functies. De integratie van een betalingsprovider
                om deze abonnementen te beheren was een complexe uitdaging, gezien de noodzaak om betrouwbare en veilige
                transacties te garanderen. Het succesvol implementeren van dit betaalsysteem heeft niet alleen de
                functionaliteit van Coinz uitgebreid, maar mij ook waardevolle ervaring opgeleverd in het werken met
                Stripe en LemonSqueezy om betalingen mogelijk te maken.
            </p>
            <br />
            <b>Reflectie:</b>
            <p>
                Coinz is uitgegroeid tot een platform met meer dan 600.000 gebruikers en is getransformeerd van een
                monolithische applicatie naar een systeem gebaseerd op microservices. Dit bracht enkele uitdagingen met
                zich mee. Het beheren van een applicatie als Coinz vergt meer dan enkel programmeren; het omvat
                eigenlijk het opzetten van een volledig bedrijf. Dit betekent dat ik me moest verdiepen in zaken zoals
                belastingen en marketing. Het combineren van dit alles met mijn studie en hobby&apos;s was een
                uitdaging, maar door een strikte planning en het dagelijks reserveren van tijd voor prioritaire taken,
                slaagde ik erin mijn doelen te bereiken.
            </p>
            <p>
                Een van de grootste technische uitdagingen was het onderhouden van de groei van Coinz door over te
                schakelen op het gebruik van clusters, een concept dat ik zelfstandig heb moeten leren buiten mijn
                studierichting applicatieontwikkeling om. Dit wordt namelijk geleerd in de opleiding Systeem en
                netwerkbeheer, ik heb een aantal vrienden die deze opleiding volgen dus als ik vragen had kon ik altijd
                even hulp vragen. Na veel proberen kreeg ik Coinz werkende in meerdere clusters. Daarnaast was het
                handhaven van motivatie en discipline een persoonlijke uitdaging, vooral omdat het project als hobby
                begon en er geen externe deadlines waren. Dit heb ik aangepakt door zelf deadlines te stellen, een
                strikt slaapschema aan te houden, wekelijkse planningen te maken en afleidingen zoals games en sociale
                media te minimaliseren.
            </p>
            <p>
                Van deze ervaring heb ik veel geleerd, vooral omdat ik vaak technieken toepaste voordat ze in mijn
                opleiding aan bod kwamen. Ik heb me ook moeten verdiepen in onderwerpen die niet aan bod komen in de
                opleiding, zoals SEO, optimalisatie van prestaties, echt JavaScript gebruiken, en het onderhouden van
                een applicatie op grote schaal. Het werken aan Coinz heeft mij niet alleen veel voldoening gegeven, maar
                ook een diepgaande impact op mijn professionele ontwikkeling en kennis.
            </p>
            <p>
                Ik heb ervoor gekozen deze activiteit te bespreken in mijn portfolio omdat Coinz fundamenteel heeft
                bijgedragen aan mijn begrip van programmeren en vele andere technische vaardigheden. Het project heeft
                mij niet alleen voorbereid op mijn studie aan de PXL, maar gaf mij ook praktische ervaring met Linux,
                clusters, DevOps, projectmanagement, ondernemerschap, marketing en financiën.
            </p>
        </div>
    );
}
