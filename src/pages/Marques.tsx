import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const marques = [
  "A DECAYEUX (ROUEN)",
  "A FOURNIER (MARSEILLE)",
  "ABLOY",
  "ACHILLE COUILLET",
  "ACIAL",
  "ACIER BLOC",
  "ADOLPHS",
  "AGA",
  "AGOSTINI",
  "ALLARD",
  "ALLEZ FRERES",
  "ALPHONSE PETIT",
  "ANSELIN",
  "ARFE",
  "ART ET TECHNIQUE",
  "AUGUSTE MILLOT",
  "AUNO",
  "BAILLY",
  "BARRATON",
  "BARLOT ET LANCTIN",
  "BARLOT LANCTIN",
  "BAUCHE",
  "BAUER",
  "BEAURAIN E",
  "BECHT",
  "BIOT-LINGLIN",
  "BODET",
  "BODE PANZER",
  "BONNET",
  "BORDEAUX",
  "BORDIER SNS",
  "BORDOGNA",
  "BÖSSINGER",
  "BOSTON",
  "BOUCHET",
  "BOUCHÉ F",
  "BOURELLY",
  "BOURELLY & RAYNAUD",
  "BOURET",
  "BRICARD",
  "BRISE E",
  "BRIVES PERE",
  "BROWN SAFES",
  "BUBEN & ZORWEG",
  "BURG WACHTER",
  "BURTON",
  "BUYS-VAN CUSTEM",
  "CAILLEUX",
  "CARADONNA",
  "CARMINE",
  "CAWI",
  "CERUTTI",
  "CHARLIER et BORN",
  "CHARVAT",
  "CHATRON ET TOUTEAU",
  "CHEOPS",
  "CHEVET",
  "CHUBB",
  "CHURCHILL",
  "CIMAC",
  "CISA",
  "COBLANZE JEUNE",
  "COCHIN",
  "COFFRE-FORT S.A",
  "COLOMBES AD",
  "CONFORTI",
  "CORBIN",
  "CORNI",
  "COUILLET ACHILLE",
  "COURTADE",
  "COURTADE ET MEUNIER",
  "CROWN",
  "DAGOT",
  "DAMBREVIL",
  "DEBAINS-THOMAS",
  "DEBAURAIN",
  "DECAYEUX",
  "DECAYEUX FEUQUIERE EN VIMEU",
  "DECAYEUX A (ROUEN)",
  "DECAYEUX F (LE HAVRE)",
  "DECHEPY ROUSSEL",
  "DEHEDIN",
  "DELAGARDE",
  "DELARUE",
  "DELARUE ET GRANGOIR",
  "DELORGE GÉRARD",
  "DELORT H",
  "DENY",
  "DESBAINS G",
  "DEVILLERS FRANCOIS",
  "DEXTREIT",
  "DEXTREIT DIAMANT",
  "DIERRE",
  "DIPLOMAT SAFES",
  "DOLMAN",
  "DOMUS",
  "DONAT",
  "DORVAL",
  "DOTTLING",
  "DRAGON LE",
  "DUBOIS OUDIN",
  "DUBOIS-OUDIN",
  "DUCERF",
  "DUCOBU",
  "DUMONT",
  "DURU",
  "DUTO",
  "DUTROU",
  "E.BAURAIN",
  "E.F.F. LASNET",
  "EMPIRE SAFES",
  "ENGEL G",
  "ENIGMA",
  "E.VANLIERDE",
  "EXELSIOR",
  "FAC",
  "FAS",
  "F.BOUCHÉ",
  "F.DECAYEUX (LE HAVRE)",
  "FELIX ALLARD",
  "FERNER",
  "FERRIMAX",
  "FERROBLOC",
  "FICHET",
  "FICHET JEAN",
  "FICHET-BAUCHE",
  "FICHET NEVEU",
  "FORESTIER",
  "FORMAT TRESORBAU",
  "FOSSIER",
  "FOSSIER-CARMINE",
  "FORT KNOX",
  "FOURNIER A",
  "FRAIGNEUX LOUIS",
  "FROIDEFOND (LIBOURNE)",
  "FTH THIRARD",
  "GALERIES DE LA FERRONNERIE (Toulouse)",
  "GALERIES LILLOISES",
  "GALLET",
  "GAUTHIER",
  "G DESBAINS",
  "G ENGEL (GENEVE)",
  "GEOFFRAY & BUISSON",
  "GÉRARD DELORGE",
  "GILLOT",
  "GIROUD",
  "GODFRIN",
  "GODREJ",
  "GOEPFERT",
  "GONTHIER-DREYFUS FILS ET CIE",
  "GRANGOIR",
  "GRANGOIR ET DELARUE",
  "GRIFFON",
  "GRIMMELER",
  "GRUIN",
  "GRUSON",
  "GUILLAUDIN",
  "GUNNEBO",
  "HADAK",
  "HADAL",
  "H.DELORT",
  "H.LEQUEUE",
  "H.LOCQUET",
  "HAFFNER",
  "HAFFNER Ainé",
  "HAFFNER PETER",
  "HARTMANN TRESORE",
  "HAUDRÉCHY",
  "HAUDRÉCHY-GAUTIER",
  "HENRI MONARD",
  "HODY",
  "HONEYWELL",
  "HOORICKX G",
  "HUGUET",
  "INKAS",
  "INSAFE",
  "JACQUET",
  "JEAN FICHET",
  "JEVEL",
  "J PLISSON",
  "JUIN",
  "JUPITER",
  "JUWEL",
  "KASO",
  "KARDEX",
  "KOCH",
  "KONSMETAL",
  "KRATZ",
  "KROMER",
  "L'HERMITE",
  "LACALMOTHIE",
  "LAGAN",
  "LAGARD",
  "LANCTIN",
  "LANCTIN & MATHIOT",
  "LASNET",
  "LAUREAU",
  "LA SECURITE",
  "LEBLANC",
  "LEBTIG",
  "LE BAYARD",
  "LE CUIRASSÉ",
  "LE DRAGON",
  "LEFORT",
  "LE GAULOIS",
  "LEGRAND",
  "LEICHER",
  "LELOUTRE ET BECASSE",
  "LE PAUL",
  "LE ROBUST",
  "LE SPHINX",
  "LE SUPER",
  "LE TREFLE",
  "LE VAINQUEUR",
  "LE VICTORIEUX",
  "LELONG",
  "LELOUTRE",
  "LEMAITRE",
  "LEQUEUE",
  "LEQUEUE H",
  "LEQUEUE MAILLOCHON",
  "LERICHE",
  "LEROUX G",
  "LIPS",
  "LIPS-VAGO",
  "LOCQUET H",
  "LOOREN",
  "LOUIS ALBERT",
  "L.SAUVE DE PERREYMOND (Marseille)",
  "LIBERTY SAFE",
  "MAGAUD-CHARF",
  "MACO NK GROUP",
  "MAILET",
  "MALLY",
  "MALVY",
  "MANACH",
  "MANUFACTURE FRANCAISE DE COFFRES FORTS",
  "MANUFRANCE",
  "MARTENS",
  "MASTER LOCK",
  "MATHEVON",
  "MATHIEU",
  "MATHIOT",
  "MATHYS DECLERCK",
  "MAUSER",
  "MEDECO",
  "MELSMETAL",
  "MERCURE",
  "MILNERS",
  "MILLOT",
  "MOHS",
  "MONARD",
  "MOSLER",
  "MOTHEAU LAUREAU",
  "MOTTURA",
  "MOUCHET",
  "MULLER",
  "MUL-T-LOCK",
  "MUTUAL SAFES",
  "NORMAND",
  "NORESEFI",
  "NOVOTEK",
  "NUGUE",
  "OCTAVE DUCOBU",
  "OLLE",
  "OMÉGA",
  "OURSEYRE",
  "PARMA ANTONIO ET FIGLI",
  "PASCALON et BELLEJAMBE",
  "PAUBLAN",
  "PAUBLAN ET RAOULT",
  "PAUL LE",
  "PAUL PINT",
  "PERREYMOND",
  "PETER HAFFNER",
  "PETIT",
  "PETIT GAUTIER",
  "PETITJEAN",
  "PHOENIX SAFE",
  "PIEREBI",
  "PLANEX",
  "PLISSON J",
  "PN",
  "POINCLOUX",
  "POIREL KUNTZ",
  "POULINGUE (ROUEN)",
  "PRIMA-DONAT",
  "PRINTZ DUMONT",
  "PRINTZ SAISON",
  "RAOULT",
  "RATNER",
  "RAYNAL (E)",
  "REGIEN",
  "REMDEX",
  "RESISCOF",
  "RIBAUVILLE",
  "RICARD",
  "RICOUARD",
  "RITTER",
  "ROBBERECHTS",
  "ROBUR",
  "ROBUST (LE)",
  "ROCHER",
  "ROGER FERNER – JEVEL",
  "RONDO",
  "ROSENGRENS",
  "SAILLOUR",
  "SALBERTER",
  "SARGENT & GREENLEAF",
  "SAUVE DE PERREYMOND (Marseille)",
  "SCHRÖDER",
  "SCHINDLER",
  "SCMR",
  "SENTRY",
  "SERCAS",
  "S.F.C CARADONNA",
  "SICLI",
  "SILEX",
  "SISTEC",
  "SLS",
  "SNMM (SYNDICAT NATIONAL DU MOBILIER METALLIQUE)",
  "SOLFA",
  "SOLON",
  "SPEIDEL",
  "STARK",
  "SUPER-FORT",
  "STACKE",
  "STOCKINGER",
  "STUV",
  "SYNDICAT NATIONAL DU MOBILIER METALLIQUE (SNMM)",
  "TANN",
  "TANNS R",
  "TECHNOMAX",
  "TECHNOSAFE",
  "THIRARD",
  "TRINITE SCHOLZ",
  "UNIC",
  "UNTERSTELLER",
  "VAISSIER",
  "VALLET-FRETE",
  "VANCUTSEM",
  "VAN DEN BROECK",
  "VAN DER BROOK",
  "VAN DEUREN",
  "VANLIERDE E",
  "VEISSEIRE",
  "VERBEEK-ROBBERERECHTS",
  "VERSTAEN",
  "VILLEREL",
  "VOLSON",
  "VICTORIEUX (LE)",
  "VIRO",
  "VULCAIN",
  "WALDIS",
  "WAMBERSY SECU",
  "WERTHEIM",
  "WIBRATTE",
  "YALE",
  "YORK",
];

const Marques = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMarques = useMemo(() => {
    if (!searchQuery.trim()) return marques;
    const query = searchQuery.toLowerCase();
    return marques.filter((marque) =>
      marque.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Expertise Multi-Marques
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nos <span className="text-secondary">Marques</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Nous intervenons sur plus de {marques.length} marques de coffres-forts. 
              Recherchez votre marque ci-dessous.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher une marque..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-border focus:border-primary"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {filteredMarques.length} marque{filteredMarques.length > 1 ? "s" : ""} trouvée{filteredMarques.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Brands list */}
          <div className="max-w-4xl mx-auto">
            <ScrollArea className="h-[500px] rounded-xl border border-border bg-card p-6">
              {filteredMarques.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredMarques.map((marque, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-foreground font-medium">{marque}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground text-center">
                    Aucune marque trouvée pour "{searchQuery}"
                  </p>
                </div>
              )}
            </ScrollArea>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Votre marque n'est pas dans la liste ? Contactez-nous !
            </p>
            <a
              href="tel:0153019393"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              01 53 01 93 93
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Marques;