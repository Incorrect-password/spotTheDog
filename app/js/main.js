//FUNCTIONS ARE AT THE BOTTOM FOR REASONS
var dogBreeds =
    [
        {
            "id": 1,
            "name": "ENGLISH POINTER",
            "section": "British and Irish Pointers and Setters",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/ENGLISH-POINTER-1.html",
            "image": "../app/images/breedImgs/englishPointer.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/001g07-en.pdf"
        },
        {
            "id": 2,
            "name": "ENGLISH SETTER",
            "section": "British and Irish Pointers and Setters",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/ENGLISH-SETTER-2.html",
            "image": "../app/images/breedImgs/englishSetter.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/002g07-en.pdf"
        },
        {
            "id": 3,
            "name": "KERRY BLUE TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/KERRY-BLUE-TERRIER-3.html",
            "image": "../app/images/breedImgs/kerryBlueTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/003g03-en.pdf"
        },
        {
            "id": 4,
            "name": "CAIRN TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/CAIRN-TERRIER-4.html",
            "image": "../app/images/breedImgs/cairnTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/004g03-en.pdf"
        },
        {
            "id": 5,
            "name": "ENGLISH COCKER SPANIEL",
            "section": "Flushing Dogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/ENGLISH-COCKER-SPANIEL-5.html",
            "image": "../app/images/breedImgs/englishCockerSpaniel.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/005g08-en.pdf"
        },
        {
            "id": 6,
            "name": "GORDON SETTER",
            "section": "British and Irish Pointers and Setters",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/GORDON-SETTER-6.html",
            "image": "../app/images/breedImgs/gordonSetter.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/006g07-en.pdf"
        },
        {
            "id": 7,
            "name": "AIREDALE TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/AIREDALE-TERRIER-7.html",
            "image": "../app/images/breedImgs/AiredalTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/007g03-en.pdf"
        },
        {
            "id": 8,
            "name": "AUSTRALIAN TERRIER",
            "section": "Small sized Terriers",
            "country": "AUSTRALIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRALIAN-TERRIER-8.html",
            "image": "../app/images/breedImgs/australianTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/008g03-en.pdf"
        },
        {
            "id": 9,
            "name": "BEDLINGTON TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BEDLINGTON-TERRIER-9.html",
            "image": "../app/images/breedImgs/bedlingtonTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/009g03-en.pdf"
        },
        {
            "id": 10,
            "name": "BORDER TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BORDER-TERRIER-10.html",
            "image": "../app/images/breedImgs/borderTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/010g03-en.pdf"
        },
        {
            "id": 11,
            "name": "BULL TERRIER",
            "section": "Bull type Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BULL-TERRIER-11.html",
            "image": "../app/images/breedImgs/bullTerrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/011g03-en.pdf"
        },
        {
            "id": 12,
            "name": "FOX TERRIER (SMOOTH)",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/FOX-TERRIER-SMOOTH-12.html",
            "image": "../app/images/breedImgs/foxTerrierSmooth.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/012g03-en.pdf"
        },
        {
            "id": 13,
            "name": "ENGLISH TOY TERRIER (BLACK &TAN)",
            "section": "Toy Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/ENGLISH-TOY-TERRIER-BLACK-TAN-13.html",
            "image": "../app/images/breedImgs/englishToyTerrierBlackandTan.jpg" +
                "",
            "pdf": "http://www.fci.be/Nomenclature/Standards/013g03-en.pdf"
        },
        {
            "id": 14,
            "name": "SWEDISH VALLHUND",
            "section": "Nordic Watchdogs and Herders",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/SWEDISH-VALLHUND-14.html",
            "image": "../app/images/breedImgs/SWEDISHVALLHUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/014g05-en.pdf"
        },
        {
            "id": 15,
            "name": "BELGIAN SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/BELGIAN-SHEPHERD-DOG-15.html",
            "image": "../app/images/breedImgs/BELGIANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/015g01-en.pdf"
        },
        {
            "id": 16,
            "name": "OLD ENGLISH SHEEPDOG",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/OLD-ENGLISH-SHEEPDOG-16.html",
            "image": "../app/images/breedImgs/OLDENGLISHSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/016g01-en.pdf"
        },
        {
            "id": 17,
            "name": "GRIFFON NIVERNAIS",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GRIFFON-NIVERNAIS-17.html",
            "image": "../app/images/breedImgs/GRIFFONNIVERNAIS.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/017g06-en.pdf"
        },
        {
            "id": 18,
            "name": "BRIQUET GRIFFON VENDEEN",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BRIQUET-GRIFFON-VENDEEN-19.html",
            "image": "../app/images/breedImgs/BRIQUETGRIFFONVENDEEN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/019g06-en.pdf"
        },
        {
            "id": 19,
            "name": "ARIEGEOIS",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/ARIEGEOIS-20.html",
            "image": "../app/images/breedImgs/ARIEGEOIS.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/020g06-en.pdf"
        },
        {
            "id": 20,
            "name": "GASCON SAINTONGEOIS",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GASCON-SAINTONGEOIS-21.html",
            "image": "../app/images/breedImgs/GASCONSAINTONGEOIS.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/021g06-en.pdf"
        },
        {
            "id": 21,
            "name": "GREAT GASCONY BLUE",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GREAT-GASCONY-BLUE-22.html",
            "image": "../app/images/breedImgs/GREATGASCONYBLUE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/022g06-en.pdf"
        },
        {
            "id": 22,
            "name": "POITEVIN",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/POITEVIN-24.html",
            "image": "../app/images/breedImgs/POITEVIN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/024g06-en.pdf"
        },
        {
            "id": 23,
            "name": "BILLY",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BILLY-25.html",
            "image": "../app/images/breedImgs/BILLY.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/025g06-en.pdf"
        },
        {
            "id": 24,
            "name": "ARTOIS HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/ARTOIS-HOUND-28.html",
            "image": "../app/images/breedImgs/ARTOISHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/028g06-en.pdf"
        },
        {
            "id": 25,
            "name": "PORCELAINE",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PORCELAINE-30.html",
            "image": "../app/images/breedImgs/PORCELAINE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/030g06-en.pdf"
        },
        {
            "id": 26,
            "name": "SMALL BLUE GASCONY",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/SMALL-BLUE-GASCONY-31.html",
            "image": "../app/images/breedImgs/SMALLBLUEGASCONY.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/031g06-en.pdf"
        },
        {
            "id": 27,
            "name": "BLUE GASCONY GRIFFON",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BLUE-GASCONY-GRIFFON-32.html",
            "image": "../app/images/breedImgs/BLUEGASCONYGRIFFON.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/032g06-en.pdf"
        },
        {
            "id": 28,
            "name": "GRAND BASSET GRIFFON VENDEEN",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GRAND-BASSET-GRIFFON-VENDEEN-33.html",
            "image": "../app/images/breedImgs/GRANDBASSETGRIFFONVENDEEN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/033g06-en.pdf"
        },
        {
            "id": 29,
            "name": "NORMAN ARTESIEN BASSET",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/NORMAN-ARTESIEN-BASSET-34.html",
            "image": "../app/images/breedImgs/NORMANARTESIENBASSET.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/034g06-en.pdf"
        },
        {
            "id": 30,
            "name": "BLUE GASCONY BASSET",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BLUE-GASCONY-BASSET-35.html",
            "image": "../app/images/breedImgs/BLUEGASCONYBASSET.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/035g06-en.pdf"
        },
        {
            "id": 31,
            "name": "BASSET FAUVE DE BRETAGNE",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BASSET-FAUVE-DE-BRETAGNE-36.html",
            "image": "../app/images/breedImgs/BASSETFAUVEDEBRETAGNE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/036g06-en.pdf"
        },
        {
            "id": 32,
            "name": "PORTUGUESE WATER DOG",
            "section": "Water Dogs",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/PORTUGUESE-WATER-DOG-37.html",
            "image": "../app/images/breedImgs/PORTUGUESEWATERDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/037g08-en.pdf"
        },
        {
            "id": 33,
            "name": "WELSH CORGI (CARDIGAN)",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/WELSH-CORGI-CARDIGAN-38.html",
            "image": "../app/images/breedImgs/WELSHCORGI(CARDIGAN).jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/038g01-en.pdf"
        },
        {
            "id": 34,
            "name": "WELSH CORGI (PEMBROKE)",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/WELSH-CORGI-PEMBROKE-39.html",
            "image": "../app/images/breedImgs/WELSHCORGI(PEMBROKE).jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/039g01-en.pdf"
        },
        {
            "id": 35,
            "name": "IRISH SOFT COATED WHEATEN TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-SOFT-COATED-WHEATEN-TERRIER-40.html",
            "image": "../app/images/breedImgs/IRISHSOFTCOATEDWHEATENTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/040g03-en.pdf"
        },
        {
            "id": 36,
            "name": "YUGOSLAVIAN SHEPHERD DOG - SHARPLANINA",
            "section": "Molossian type",
            "country": "MACEDONIA, SERBIA",
            "url": "http://www.fci.be/en/nomenclature/YUGOSLAVIAN-SHEPHERD-DOG-SHARPLANINA-41.html",
            "image": "../app/images/breedImgs/YUGOSLAVIANSHEPHERDDOGSHARPLANINA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/041g02-en.pdf"
        },
        {
            "id": 37,
            "name": "JÄMTHUND",
            "section": "Nordic Hunting Dogs",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/JAMTHUND-42.html",
            "image": "../app/images/breedImgs/JÄMTHUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/042g05-en.pdf"
        },
        {
            "id": 38,
            "name": "BASENJI",
            "section": "Primitive type",
            "country": "CENTRAL AFRICA",
            "url": "http://www.fci.be/en/nomenclature/BASENJI-43.html",
            "image": "../app/images/breedImgs/BASENJI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/043g05-en.pdf"
        },
        {
            "id": 39,
            "name": "BERGER DE BEAUCE",
            "section": "Sheepdogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BERGER-DE-BEAUCE-44.html",
            "image": "../app/images/breedImgs/BERGERDEBEAUCE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/044g01-en.pdf"
        },
        {
            "id": 40,
            "name": "BERNESE MOUNTAIN DOG",
            "section": "Swiss Mountain- and Cattledogs",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/BERNESE-MOUNTAIN-DOG-45.html",
            "image": "../app/images/breedImgs/BERNESEMOUNTAINDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/045g02-en.pdf"
        },
        {
            "id": 41,
            "name": "APPENZELL CATTLE DOG",
            "section": "Swiss Mountain- and Cattledogs",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/APPENZELL-CATTLE-DOG-46.html",
            "image": "../app/images/breedImgs/APPENZELLCATTLEDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/046g02-en.pdf"
        },
        {
            "id": 42,
            "name": "ENTLEBUCH CATTLE DOG",
            "section": "Swiss Mountain- and Cattledogs",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/ENTLEBUCH-CATTLE-DOG-47.html",
            "image": "../app/images/breedImgs/ENTLEBUCHCATTLEDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/047g02-en.pdf"
        },
        {
            "id": 43,
            "name": "KARELIAN BEAR DOG",
            "section": "Nordic Hunting Dogs",
            "country": "FINLAND",
            "url": "http://www.fci.be/en/nomenclature/KARELIAN-BEAR-DOG-48.html",
            "image": "../app/images/breedImgs/KARELIANBEARDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/048g05-en.pdf"
        },
        {
            "id": 44,
            "name": "FINNISH SPITZ",
            "section": "Nordic Hunting Dogs",
            "country": "FINLAND",
            "url": "http://www.fci.be/en/nomenclature/FINNISH-SPITZ-49.html",
            "image": "../app/images/breedImgs/FINNISHSPITZ.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/049g05-en.pdf"
        },
        {
            "id": 45,
            "name": "NEWFOUNDLAND",
            "section": "Molossian type",
            "country": "CANADA",
            "url": "http://www.fci.be/en/nomenclature/NEWFOUNDLAND-50.html",
            "image": "../app/images/breedImgs/NEWFOUNDLAND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/050g02-en.pdf"
        },
        {
            "id": 46,
            "name": "FINNISH HOUND",
            "section": "Scent hounds",
            "country": "FINLAND",
            "url": "http://www.fci.be/en/nomenclature/FINNISH-HOUND-51.html",
            "image": "../app/images/breedImgs/FINNISHHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/051g06-en.pdf"
        },
        {
            "id": 47,
            "name": "POLISH HOUND",
            "section": "Scent hounds",
            "country": "POLAND",
            "url": "http://www.fci.be/en/nomenclature/POLISH-HOUND-52.html",
            "image": "../app/images/breedImgs/POLISHHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/052g06-en.pdf"
        },
        {
            "id": 48,
            "name": "KOMONDOR",
            "section": "Sheepdogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/KOMONDOR-53.html",
            "image": "../app/images/breedImgs/KOMONDOR.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/053g01-en.pdf"
        },
        {
            "id": 49,
            "name": "KUVASZ",
            "section": "Sheepdogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/KUVASZ-54.html",
            "image": "../app/images/breedImgs/KUVASZ.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/054g01-en.pdf"
        },
        {
            "id": 50,
            "name": "PULI",
            "section": "Sheepdogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/PULI-55.html",
            "image": "../app/images/breedImgs/PULI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/055g01-en.pdf"
        },
        {
            "id": 51,
            "name": "PUMI",
            "section": "Sheepdogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/PUMI-56.html",
            "image": "../app/images/breedImgs/PUMI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/056g01-en.pdf"
        },
        {
            "id": 52,
            "name": "HUNGARIAN SHORT-HAIRED POINTER (VIZSLA)",
            "section": "Continental Pointing Dogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/HUNGARIAN-SHORT-HAIRED-POINTER-VIZSLA-57.html",
            "image": "../app/images/breedImgs/HUNGARIANSHORTHAIREDPOINTER(VIZSLA).jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/057g07-en.pdf"
        },
        {
            "id": 53,
            "name": "GREAT SWISS MOUNTAIN DOG",
            "section": "Swiss Mountain- and Cattledogs",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/GREAT-SWISS-MOUNTAIN-DOG-58.html",
            "image": "../app/images/breedImgs/GREATSWISSMOUNTAINDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/058g02-en.pdf"
        },
        {
            "id": 54,
            "name": "SWISS HOUND",
            "section": "Scent hounds",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/SWISS-HOUND-59.html",
            "image": "../app/images/breedImgs/SWISSHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/059g06-en.pdf"
        },
        {
            "id": 55,
            "name": "SMALL SWISS HOUND",
            "section": "Scent hounds",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/SMALL-SWISS-HOUND-60.html",
            "image": "../app/images/breedImgs/SMALLSWISSHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/060g06-en.pdf"
        },
        {
            "id": 56,
            "name": "ST. BERNARD",
            "section": "Molossian type",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/ST-BERNARD-61.html",
            "image": "../app/images/breedImgs/STBERNARD.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/061g02-en.pdf"
        },
        {
            "id": 57,
            "name": "COARSE-HAIRED STYRIAN HOUND",
            "section": "Scent hounds",
            "country": "AUSTRIA",
            "url": "http://www.fci.be/en/nomenclature/COARSE-HAIRED-STYRIAN-HOUND-62.html",
            "image": "../app/images/breedImgs/COARSEHAIREDSTYRIANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/062g06-en.pdf"
        },
        {
            "id": 58,
            "name": "AUSTRIAN BLACK AND TAN HOUND",
            "section": "Scent hounds",
            "country": "AUSTRIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRIAN-BLACK-AND-TAN-HOUND-63.html",
            "image": "../app/images/breedImgs/AUSTRIANBLACKANDTANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/063g06-en.pdf"
        },
        {
            "id": 59,
            "name": "AUSTRIAN  PINSCHER",
            "section": "Pinscher and Schnauzer type",
            "country": "AUSTRIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRIAN-PINSCHER-64.html",
            "image": "../app/images/breedImgs/AUSTRIANPINSCHER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/064g02-en.pdf"
        },
        {
            "id": 60,
            "name": "MALTESE",
            "section": "Bichons and related breeds",
            "country": "CENTRAL MEDITERRANEAN BASIN",
            "url": "http://www.fci.be/en/nomenclature/MALTESE-65.html",
            "image": "../app/images/breedImgs/MALTESE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/065g09-en.pdf"
        },
        {
            "id": 61,
            "name": "FAWN BRITTANY GRIFFON",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FAWN-BRITTANY-GRIFFON-66.html",
            "image": "../app/images/breedImgs/FAWNBRITTANYGRIFFON.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/066g06-en.pdf"
        },
        {
            "id": 62,
            "name": "PETIT BASSET GRIFFON VENDEEN",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PETIT-BASSET-GRIFFON-VENDEEN-67.html",
            "image": "../app/images/breedImgs/PETITBASSETGRIFFONVENDEEN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/067g06-en.pdf"
        },
        {
            "id": 63,
            "name": "TYROLEAN HOUND",
            "section": "Scent hounds",
            "country": "AUSTRIA",
            "url": "http://www.fci.be/en/nomenclature/TYROLEAN-HOUND-68.html",
            "image": "../app/images/breedImgs/TYROLEANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/068g06-en.pdf"
        },
        {
            "id": 64,
            "name": "LAKELAND TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/LAKELAND-TERRIER-70.html",
            "image": "../app/images/breedImgs/LAKELANDTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/070g03-en.pdf"
        },
        {
            "id": 65,
            "name": "MANCHESTER TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/MANCHESTER-TERRIER-71.html",
            "image": "../app/images/breedImgs/MANCHESTERTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/071g03-en.pdf"
        },
        {
            "id": 66,
            "name": "NORWICH TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/NORWICH-TERRIER-72.html",
            "image": "../app/images/breedImgs/NORWICHTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/072g03-en.pdf"
        },
        {
            "id": 67,
            "name": "SCOTTISH TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/SCOTTISH-TERRIER-73.html",
            "image": "../app/images/breedImgs/SCOTTISHTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/073g03-en.pdf"
        },
        {
            "id": 68,
            "name": "SEALYHAM TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/SEALYHAM-TERRIER-74.html",
            "image": "../app/images/breedImgs/SEALYHAMTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/074g03-en.pdf"
        },
        {
            "id": 69,
            "name": "SKYE TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/SKYE-TERRIER-75.html",
            "image": "../app/images/breedImgs/SKYETERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/075g03-en.pdf"
        },
        {
            "id": 70,
            "name": "STAFFORDSHIRE BULL TERRIER",
            "section": "Bull type Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/STAFFORDSHIRE-BULL-TERRIER-76.html",
            "image": "../app/images/breedImgs/STAFFORDSHIREBULLTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/076g03-en.pdf"
        },
        {
            "id": 71,
            "name": "CONTINENTAL TOY SPANIEL",
            "section": "Continental Toy Spaniel and Russian Toy",
            "country": "BELGIUM, FRANCE",
            "url": "http://www.fci.be/en/nomenclature/CONTINENTAL-TOY-SPANIEL-77.html",
            "image": "../app/images/breedImgs/CONTINENTALTOYSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/077g09-en.pdf"
        },
        {
            "id": 72,
            "name": "WELSH TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/WELSH-TERRIER-78.html",
            "image": "../app/images/breedImgs/WELSHTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/078g03-en.pdf"
        },
        {
            "id": 73,
            "name": "GRIFFON BRUXELLOIS",
            "section": "Small Belgian Dogs",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/GRIFFON-BRUXELLOIS-80.html",
            "image": "../app/images/breedImgs/GRIFFONBRUXELLOIS.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/080g09-en.pdf"
        },
        {
            "id": 74,
            "name": "GRIFFON BELGE",
            "section": "Small Belgian Dogs",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/GRIFFON-BELGE-81.html",
            "image": "../app/images/breedImgs/GRIFFONBELGE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/081g09-en.pdf"
        },
        {
            "id": 75,
            "name": "PETIT BRABANÇON",
            "section": "Small Belgian Dogs",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/PETIT-BRABANCON-82.html",
            "image": "../app/images/breedImgs/PETITBRABANCON.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/082g09-en.pdf"
        },
        {
            "id": 76,
            "name": "SCHIPPERKE",
            "section": "Sheepdogs",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/SCHIPPERKE-83.html",
            "image": "../app/images/breedImgs/SCHIPPERKE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/083g01-en.pdf"
        },
        {
            "id": 77,
            "name": "BLOODHOUND",
            "section": "Scent hounds",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/BLOODHOUND-84.html",
            "image": "../app/images/breedImgs/BLOODHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/084g06-en.pdf"
        },
        {
            "id": 78,
            "name": "WEST HIGHLAND WHITE TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/WEST-HIGHLAND-WHITE-TERRIER-85.html",
            "image": "../app/images/breedImgs/WESTHIGHLANDWHITETERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/085g03-en.pdf"
        },
        {
            "id": 79,
            "name": "YORKSHIRE TERRIER",
            "section": "Toy Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/YORKSHIRE-TERRIER-86.html",
            "image": "../app/images/breedImgs/YORKSHIRETERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/086g03-en.pdf"
        },
        {
            "id": 80,
            "name": "CATALAN SHEEPDOG",
            "section": "Sheepdogs",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/CATALAN-SHEEPDOG-87.html",
            "image": "../app/images/breedImgs/CATALANSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/087g01-en.pdf"
        },
        {
            "id": 81,
            "name": "SHETLAND SHEEPDOG",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/SHETLAND-SHEEPDOG-88.html",
            "image": "../app/images/breedImgs/SHETLANDSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/088g01-en.pdf"
        },
        {
            "id": 82,
            "name": "IBIZAN PODENCO",
            "section": "Primitive type - Hunting Dogs",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/IBIZAN-PODENCO-89.html",
            "image": "../app/images/breedImgs/IBIZANPODENCO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/089g05-en.pdf"
        },
        {
            "id": 83,
            "name": "BURGOS POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/BURGOS-POINTING-DOG-90.html",
            "image": "../app/images/breedImgs/BURGOSPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/090g07-en.pdf"
        },
        {
            "id": 84,
            "name": "SPANISH MASTIFF",
            "section": "Molossian type",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/SPANISH-MASTIFF-91.html",
            "image": "../app/images/breedImgs/SPANISHMASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/091g02-en.pdf"
        },
        {
            "id": 85,
            "name": "PYRENEAN MASTIFF",
            "section": "Molossian type",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/PYRENEAN-MASTIFF-92.html",
            "image": "../app/images/breedImgs/PYRENEANMASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/092g02-en.pdf"
        },
        {
            "id": 86,
            "name": "PORTUGUESE SHEEPDOG",
            "section": "Sheepdogs",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/PORTUGUESE-SHEEPDOG-93.html",
            "image": "../app/images/breedImgs/PORTUGUESESHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/093g01-en.pdf"
        },
        {
            "id": 87,
            "name": "PORTUGUESE WARREN HOUND-PORTUGUESE PODENGO",
            "section": "Primitive type - Hunting Dogs",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/PORTUGUESE-WARREN-HOUND-PORTUGUESE-PODENGO-94.html",
            "image": "../app/images/breedImgs/PORTUGUESEWARRENHOUNDPORTUGUESEPODENGO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/094g05-en.pdf"
        },
        {
            "id": 88,
            "name": "BRITTANY SPANIEL",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BRITTANY-SPANIEL-95.html",
            "image": "../app/images/breedImgs/BRITTANYSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/095g07-en.pdf"
        },
        {
            "id": 89,
            "name": "RAFEIRO OF ALENTEJO",
            "section": "Molossian type",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/RAFEIRO-OF-ALENTEJO-96.html",
            "image": "../app/images/breedImgs/RAFEIROOFALENTEJO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/096g02-en.pdf"
        },
        {
            "id": 90,
            "name": "GERMAN SPITZ",
            "section": "European Spitz",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-SPITZ-97.html",
            "image": "../app/images/breedImgs/GERMANSPITZ.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/097g05-en.pdf"
        },
        {
            "id": 91,
            "name": "GERMAN WIRE- HAIRED POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-WIRE-HAIRED-POINTING-DOG-98.html",
            "image": "../app/images/breedImgs/GERMANWIREHAIREDPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/098g07-en.pdf"
        },
        {
            "id": 92,
            "name": "WEIMARANER",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/WEIMARANER-99.html",
            "image": "../app/images/breedImgs/WEIMARANER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/099g07-en.pdf"
        },
        {
            "id": 93,
            "name": "WESTPHALIAN DACHSBRACKE",
            "section": "Scent hounds",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/WESTPHALIAN-DACHSBRACKE-100.html",
            "image": "../app/images/breedImgs/WESTPHALIANDACHSBRACKE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/100g06-en.pdf"
        },
        {
            "id": 94,
            "name": "FRENCH BULLDOG",
            "section": "Small Molossian type Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-BULLDOG-101.html",
            "image": "../app/images/breedImgs/FRENCHBULLDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/101g09-en.pdf"
        },
        {
            "id": 94,
            "name": "KLEINER MÜNSTERLÄNDER",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/KLEINER-MUNSTERLANDER-102.html",
            "image": "../app/images/breedImgs/KLEINERMÜNSTERLÄNDER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/102g07-en.pdf"
        },
        {
            "id": 95,
            "name": "GERMAN HUNTING TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-HUNTING-TERRIER-103.html",
            "image": "../app/images/breedImgs/GERMANHUNTINGTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/103g03-en.pdf"
        },
        {
            "id": 96,
            "name": "GERMAN SPANIEL",
            "section": "Flushing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-SPANIEL-104.html",
            "image": "../app/images/breedImgs/GERMANSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/104g08-en.pdf"
        },
        {
            "id": 97,
            "name": "FRENCH WATER DOG",
            "section": "Water Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-WATER-DOG-105.html",
            "image": "../app/images/breedImgs/FRENCHWATERDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/105g08-en.pdf"
        },
        {
            "id": 98,
            "name": "BLUE PICARDY SPANIEL",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BLUE-PICARDY-SPANIEL-106.html",
            "image": "../app/images/breedImgs/BLUEPICARDYSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/106g07-en.pdf"
        },
        {
            "id": 99,
            "name": "WIRE-HAIRED POINTING GRIFFON KORTHALS",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/WIRE-HAIRED-POINTING-GRIFFON-KORTHALS-107.html",
            "image": "../app/images/breedImgs/WIREHAIREDPOINTINGGRIFFONKORTHALS.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/107g07-en.pdf"
        },
        {
            "id": 100,
            "name": "PICARDY SPANIEL",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PICARDY-SPANIEL-108.html",
            "image": "../app/images/breedImgs/PICARDYSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/108g07-en.pdf"
        },
        {
            "id": 101,
            "name": "CLUMBER SPANIEL",
            "section": "Flushing Dogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/CLUMBER-SPANIEL-109.html",
            "image": "../app/images/breedImgs/CLUMBERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/109g08-en.pdf"
        },
        {
            "id": 102,
            "name": "CURLY COATED RETRIEVER",
            "section": "Retrievers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/CURLY-COATED-RETRIEVER-110.html",
            "image": "../app/images/breedImgs/CURLYCOATEDRETRIEVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/110g08-en.pdf"
        },
        {
            "id": 103,
            "name": "GOLDEN RETRIEVER",
            "section": "Retrievers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/GOLDEN-RETRIEVER-111.html",
            "image": "../app/images/breedImgs/GOLDENRETRIEVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/111g08-en.pdf"
        },
        {
            "id": 104,
            "name": "BRIARD",
            "section": "Sheepdogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BRIARD-113.html",
            "image": "../app/images/breedImgs/BRIARD.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/113g01-en.pdf"
        },
        {
            "id": 105,
            "name": "PONT-AUDEMER SPANIEL",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PONT-AUDEMER-SPANIEL-114.html",
            "image": "../app/images/breedImgs/PONTAUDEMERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/114g07-en.pdf"
        },
        {
            "id": 106,
            "name": "SAINT GERMAIN POINTER",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/SAINT-GERMAIN-POINTER-115.html",
            "image": "../app/images/breedImgs/SAINTGERMAINPOINTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/115g07-en.pdf"
        },
        {
            "id": 107,
            "name": "DOGUE DE BORDEAUX",
            "section": "Molossian type",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/DOGUE-DE-BORDEAUX-116.html",
            "image": "../app/images/breedImgs/DOGUEDEBORDEAUX.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/116g02-en.pdf"
        },
        {
            "id": 108,
            "name": "DEUTSCH LANGHAAR",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/DEUTSCH-LANGHAAR-117.html",
            "image": "../app/images/breedImgs/DEUTSCHLANGHAAR.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/117g07-en.pdf"
        },
        {
            "id": 109,
            "name": "LARGE MUNSTERLANDER",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/LARGE-MUNSTERLANDER-118.html",
            "image": "../app/images/breedImgs/LARGEMUNSTERLANDER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/118g07-en.pdf"
        },
        {
            "id": 110,
            "name": "GERMAN SHORT- HAIRED POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-SHORT-HAIRED-POINTING-DOG-119.html",
            "image": "../app/images/breedImgs/GERMANSHORTHAIREDPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/119g07-en.pdf"
        },
        {
            "id": 111,
            "name": "IRISH RED SETTER",
            "section": "British and Irish Pointers and Setters",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-RED-SETTER-120.html",
            "image": "../app/images/breedImgs/IRISHREDSETTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/120g07-en.pdf"
        },
        {
            "id": 112,
            "name": "FLAT COATED RETRIEVER",
            "section": "Retrievers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/FLAT-COATED-RETRIEVER-121.html",
            "image": "../app/images/breedImgs/FLATCOATEDRETRIEVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/121g08-en.pdf"
        },
        {
            "id": 113,
            "name": "LABRADOR RETRIEVER",
            "section": "Retrievers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/LABRADOR-RETRIEVER-122.html",
            "image": "../app/images/breedImgs/LABRADORRETRIEVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/122g08-en.pdf"
        },
        {
            "id": 114,
            "name": "FIELD SPANIEL",
            "section": "Flushing Dogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/FIELD-SPANIEL-123.html",
            "image": "../app/images/breedImgs/FIELDSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/123g08-en.pdf"
        },
        {
            "id": 115,
            "name": "IRISH WATER SPANIEL",
            "section": "Water Dogs",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-WATER-SPANIEL-124.html",
            "image": "../app/images/breedImgs/IRISHWATERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/124g08-en.pdf"
        },
        {
            "id": 116,
            "name": "ENGLISH SPRINGER SPANIEL",
            "section": "Flushing Dogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/ENGLISH-SPRINGER-SPANIEL-125.html",
            "image": "../app/images/breedImgs/ENGLISHSPRINGERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/125g08-en.pdf"
        },
        {
            "id": 117,
            "name": "WELSH SPRINGER SPANIEL",
            "section": "Flushing Dogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/WELSH-SPRINGER-SPANIEL-126.html",
            "image": "../app/images/breedImgs/WELSHSPRINGERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/126g08-en.pdf"
        },
        {
            "id": 118,
            "name": "SUSSEX SPANIEL",
            "section": "Flushing Dogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/SUSSEX-SPANIEL-127.html",
            "image": "../app/images/breedImgs/SUSSEXSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/127g08-en.pdf"
        },
        {
            "id": 119,
            "name": "KING CHARLES SPANIEL",
            "section": "English Toy Spaniels",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/KING-CHARLES-SPANIEL-128.html",
            "image": "../app/images/breedImgs/KINGCHARLESSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/128g09-en.pdf"
        },
        {
            "id": 120,
            "name": "SMÅLANDSSTÖVARE",
            "section": "Scent hounds",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/SMALANDSSTOVARE-129.html",
            "image": "../app/images/breedImgs/SMALANDSSTOVARE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/129g06-en.pdf"
        },
        {
            "id": 121,
            "name": "DREVER",
            "section": "Scent hounds",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/DREVER-130.html",
            "image": "../app/images/breedImgs/DREVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/130g06-en.pdf"
        },
        {
            "id": 122,
            "name": "SCHILLERSTÖVARE",
            "section": "Scent hounds",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/SCHILLERSTOVARE-131.html",
            "image": "../app/images/breedImgs/SCHILLERSTOVARE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/131g06-en.pdf"
        },
        {
            "id": 123,
            "name": "HAMILTONSTÖVARE",
            "section": "Scent hounds",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/HAMILTONSTOVARE-132.html",
            "image": "../app/images/breedImgs/HAMILTONSTOVARE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/132g06-en.pdf"
        },
        {
            "id": 124,
            "name": "FRENCH POINTING DOG - GASCOGNE TYPE",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-POINTING-DOG-GASCOGNE-TYPE-133.html",
            "image": "../app/images/breedImgs/FRENCHPOINTINGDOGGASCOGNETYPE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/133g07-en.pdf"
        },
        {
            "id": 125,
            "name": "FRENCH POINTING DOG - PYRENEAN TYPE",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-POINTING-DOG-PYRENEAN-TYPE-134.html",
            "image": "../app/images/breedImgs/FRENCHPOINTINGDOGGASCOGNETYPE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/134g07-en.pdf"
        },
        {
            "id": 126,
            "name": "SWEDISH LAPPHUND",
            "section": "Nordic Watchdogs and Herders",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/SWEDISH-LAPPHUND-135.html",
            "image": "../app/images/breedImgs/SWEDISHLAPPHUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/135g05-en.pdf"
        },
        {
            "id": 127,
            "name": "CAVALIER KING CHARLES SPANIEL",
            "section": "English Toy Spaniels",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/CAVALIER-KING-CHARLES-SPANIEL-136.html",
            "image": "../app/images/breedImgs/CAVALIERKINGCHARLESSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/136g09-en.pdf"
        },
        {
            "id": 128,
            "name": "PYRENEAN MOUNTAIN DOG",
            "section": "Molossian type",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PYRENEAN-MOUNTAIN-DOG-137.html",
            "image": "../app/images/breedImgs/PYRENEANMOUNTAINDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/137g02-en.pdf"
        },
        {
            "id": 129,
            "name": "PYRENEAN SHEEPDOG - SMOOTH FACED",
            "section": "Sheepdogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PYRENEAN-SHEEPDOG-SMOOTH-FACED-138.html",
            "image": "../app/images/breedImgs/PYRENEANSHEEPDOGSMOOTHFACED.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/138g01-en.pdf"
        },
        {
            "id": 130,
            "name": "IRISH TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-TERRIER-139.html",
            "image": "../app/images/breedImgs/IRISHTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/139g03-en.pdf"
        },
        {
            "id": 131,
            "name": "BOSTON TERRIER",
            "section": "Small Molossian type Dogs",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/BOSTON-TERRIER-140.html",
            "image": "../app/images/breedImgs/BOSTONTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/140g09-en.pdf"
        },
        {
            "id": 132,
            "name": "LONG-HAIRED PYRENEAN SHEEPDOG",
            "section": "Sheepdogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/LONG-HAIRED-PYRENEAN-SHEEPDOG-141.html",
            "image": "../app/images/breedImgs/LONGHAIREDPYRENEANSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/141g01-en.pdf"
        },
        {
            "id": 133,
            "name": "SLOVAKIAN CHUVACH",
            "section": "Sheepdogs",
            "country": "SLOVAKIA",
            "url": "http://www.fci.be/en/nomenclature/SLOVAKIAN-CHUVACH-142.html",
            "image": "../app/images/breedImgs/SLOVAKIANCHUVACH.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/142g01-en.pdf"
        },
        {
            "id": 134,
            "name": "DOBERMANN",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/DOBERMANN-143.html",
            "image": "../app/images/breedImgs/DOBERMANN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/143g02-en.pdf"
        },
        {
            "id": 135,
            "name": "BOXER",
            "section": "Molossian type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/BOXER-144.html",
            "image": "../app/images/breedImgs/BOXER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/144g02-en.pdf"
        },
        {
            "id": 136,
            "name": "LEONBERGER",
            "section": "Molossian type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/LEONBERGER-145.html",
            "image": "../app/images/breedImgs/LEONBERGER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/145g02-en.pdf"
        },
        {
            "id": 137,
            "name": "RHODESIAN RIDGEBACK",
            "section": "Related breeds",
            "country": "SOUTH AFRICA",
            "url": "http://www.fci.be/en/nomenclature/RHODESIAN-RIDGEBACK-146.html",
            "image": "../app/images/breedImgs/RHODESIANRIDGEBACK.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/146g06-en.pdf"
        },
        {
            "id": 138,
            "name": "ROTTWEILER",
            "section": "Molossian type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/ROTTWEILER-147.html",
            "image": "../app/images/breedImgs/ROTTWEILER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/147g02-en.pdf"
        },
        {
            "id": 139,
            "name": "DACHSHUND",
            "section": "",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/DACHSHUND-148.html",
            "image": "../app/images/breedImgs/DACHSHUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/148g04-en.pdf"
        },
        {
            "id": 140,
            "name": "BULLDOG",
            "section": "Molossian type",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BULLDOG-149.html",
            "image": "../app/images/breedImgs/BULLDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/149g02-en.pdf"
        },
        {
            "id": 141,
            "name": "SERBIAN HOUND",
            "section": "Scent hounds",
            "country": "SERBIA",
            "url": "http://www.fci.be/en/nomenclature/SERBIAN-HOUND-150.html",
            "image": "../app/images/breedImgs/SERBIANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/150g06-en.pdf"
        },
        {
            "id": 142,
            "name": "ISTRIAN SHORT-HAIRED HOUND",
            "section": "Scent hounds",
            "country": "CROATIA",
            "url": "http://www.fci.be/en/nomenclature/ISTRIAN-SHORT-HAIRED-HOUND-151.html",
            "image": "../app/images/breedImgs/ISTRIANSHORTHAIREDHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/151g06-en.pdf"
        },
        {
            "id": 143,
            "name": "ISTRIAN WIRE-HAIRED HOUND",
            "section": "Scent hounds",
            "country": "CROATIA",
            "url": "http://www.fci.be/en/nomenclature/ISTRIAN-WIRE-HAIRED-HOUND-152.html",
            "image": "../app/images/breedImgs/ISTRIANWIREHAIREDHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/152g06-en.pdf"
        },
        {
            "id": 144,
            "name": "DALMATIAN",
            "section": "Related breeds",
            "country": "CROATIA",
            "url": "http://www.fci.be/en/nomenclature/DALMATIAN-153.html",
            "image": "../app/images/breedImgs/DALMATIAN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/153g06-en.pdf"
        },
        {
            "id": 145,
            "name": "POSAVATZ HOUND",
            "section": "Scent hounds",
            "country": "CROATIA",
            "url": "http://www.fci.be/en/nomenclature/POSAVATZ-HOUND-154.html",
            "image": "../app/images/breedImgs/POSAVATZHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/154g06-en.pdf"
        },
        {
            "id": 146,
            "name": "BOSNIAN BROKEN-HAIRED HOUND - CALLED BARAK",
            "section": "Scent hounds",
            "country": "BOSNIA AND HERZEGOVINA",
            "url": "http://www.fci.be/en/nomenclature/BOSNIAN-BROKEN-HAIRED-HOUND-CALLED-BARAK-155.html",
            "image": "../app/images/breedImgs/BOSNIANBROKENHAIREDHOUNDCALLEDBARAK.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/155g06-en.pdf"
        },
        {
            "id": 147,
            "name": "COLLIE ROUGH",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/COLLIE-ROUGH-156.html",
            "image": "../app/images/breedImgs/COLLIEROUGH.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/156g01-en.pdf"
        },
        {
            "id": 148,
            "name": "BULLMASTIFF",
            "section": "Molossian type",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BULLMASTIFF-157.html",
            "image": "../app/images/breedImgs/BULLMASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/157g02-en.pdf"
        },
        {
            "id": 149,
            "name": "GREYHOUND",
            "section": "Short-haired Sighthounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/GREYHOUND-158.html",
            "image": "../app/images/breedImgs/GREYHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/158g10-en.pdf"
        },
        {
            "id": 150,
            "name": "ENGLISH FOXHOUND",
            "section": "Scent hounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/ENGLISH-FOXHOUND-159.html",
            "image": "../app/images/breedImgs/ENGLISHFOXHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/159g06-en.pdf"
        },
        {
            "id": 151,
            "name": "IRISH WOLFHOUND",
            "section": "Rough-haired Sighthounds",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-WOLFHOUND-160.html",
            "image": "../app/images/breedImgs/IRISHWOLFHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/160g10-en.pdf"
        },
        {
            "id": 152,
            "name": "BEAGLE",
            "section": "Scent hounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BEAGLE-161.html",
            "image": "../app/images/breedImgs/BEAGLE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/161g06-en.pdf"
        },
        {
            "id": 153,
            "name": "WHIPPET",
            "section": "Short-haired Sighthounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/WHIPPET-162.html",
            "image": "../app/images/breedImgs/WHIPPET.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/162g10-en.pdf"
        },
        {
            "id": 154,
            "name": "BASSET HOUND",
            "section": "Scent hounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BASSET-HOUND-163.html",
            "image": "../app/images/breedImgs/BASSETHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/163g06-en.pdf"
        },
        {
            "id": 155,
            "name": "DEERHOUND",
            "section": "Rough-haired Sighthounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/DEERHOUND-164.html",
            "image": "../app/images/breedImgs/DEERHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/164g10-en.pdf"
        },
        {
            "id": 156,
            "name": "ITALIAN SPINONE",
            "section": "Continental Pointing Dogs",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-SPINONE-165.html",
            "image": "../app/images/breedImgs/ITALIANSPINONE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/165g07-en.pdf"
        },
        {
            "id": 157,
            "name": "GERMAN SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-SHEPHERD-DOG-166.html",
            "image": "../app/images/breedImgs/GERMANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/166g01-en.pdf"
        },
        {
            "id": 158,
            "name": "AMERICAN COCKER SPANIEL",
            "section": "Flushing Dogs",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/AMERICAN-COCKER-SPANIEL-167.html",
            "image": "../app/images/breedImgs/AMERICANCOCKERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/167g08-en.pdf"
        },
        {
            "id": 159,
            "name": "DANDIE DINMONT TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/DANDIE-DINMONT-TERRIER-168.html",
            "image": "../app/images/breedImgs/DANDIEDINMONTTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/168g03-en.pdf"
        },
        {
            "id": 160,
            "name": "FOX TERRIER (WIRE)",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/FOX-TERRIER-WIRE-169.html",
            "image": "../app/images/breedImgs/FOXTERRIER(WIRE).jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/169g03-en.pdf"
        },
        {
            "id": 161,
            "name": "CASTRO LABOREIRO DOG",
            "section": "Molossian type",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/CASTRO-LABOREIRO-DOG-170.html",
            "image": "../app/images/breedImgs/CASTROLABOREIRODOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/170g02-en.pdf"
        },
        {
            "id": 162,
            "name": "BOUVIER DES ARDENNES",
            "section": "Cattledogs (except Swiss Cattledogs)",
            "country": "BELGIUM",
            "url": "http://www.fci.be/en/nomenclature/BOUVIER-DES-ARDENNES-171.html",
            "image": "../app/images/breedImgs/BOUVIERDESARDENNES.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/171g01-en.pdf"
        },
        {
            "id": 163,
            "name": "POODLE",
            "section": "Poodle",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/POODLE-172.html",
            "image": "../app/images/breedImgs/POODLE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/172g09-en.pdf"
        },
        {
            "id": 164,
            "name": "ESTRELA MOUNTAIN DOG",
            "section": "Molossian type",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/ESTRELA-MOUNTAIN-DOG-173.html",
            "image": "../app/images/breedImgs/ESTRELAMOUNTAINDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/173g02-en.pdf"
        },
        {
            "id": 165,
            "name": "FRENCH SPANIEL",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-SPANIEL-175.html",
            "image": "../app/images/breedImgs/FRENCHSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/175g07-en.pdf"
        },
        {
            "id": 166,
            "name": "PICARDY SHEEPDOG",
            "section": "Sheepdogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/PICARDY-SHEEPDOG-176.html",
            "image": "../app/images/breedImgs/PICARDYSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/176g01-en.pdf"
        },
        {
            "id": 167,
            "name": "ARIEGE POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/ARIEGE-POINTING-DOG-177.html",
            "image": "../app/images/breedImgs/ARIEGEPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/177g07-en.pdf"
        },
        {
            "id": 168,
            "name": "BOURBONNAIS POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BOURBONNAIS-POINTING-DOG-179.html",
            "image": "../app/images/breedImgs/BOURBONNAISPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/179g07-en.pdf"
        },
        {
            "id": 169,
            "name": "AUVERGNE POINTER",
            "section": "Continental Pointing Dogs",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/AUVERGNE-POINTER-180.html",
            "image": "../app/images/breedImgs/AUVERGNEPOINTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/180g07-en.pdf"
        },
        {
            "id": 170,
            "name": "GIANT SCHNAUZER",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GIANT-SCHNAUZER-181.html",
            "image": "../app/images/breedImgs/GIANTSCHNAUZER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/181g02-en.pdf"
        },
        {
            "id": 171,
            "name": "SCHNAUZER",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/SCHNAUZER-182.html",
            "image": "../app/images/breedImgs/GIANTSCHNAUZER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/182g02-en.pdf"
        },
        {
            "id": 172,
            "name": "MINIATURE SCHNAUZER",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/MINIATURE-SCHNAUZER-183.html",
            "image": "../app/images/breedImgs/GIANTSCHNAUZER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/183g02-en.pdf"
        },
        {
            "id": 173,
            "name": "GERMAN PINSCHER",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-PINSCHER-184.html",
            "image": "../app/images/breedImgs/GERMANPINSCHER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/184g02-en.pdf"
        },
        {
            "id": 174,
            "name": "MINIATURE PINSCHER",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/MINIATURE-PINSCHER-185.html",
            "image": "../app/images/breedImgs/MINIATUREPINSCHER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/185g02-en.pdf"
        },
        {
            "id": 175,
            "name": "AFFENPINSCHER",
            "section": "Pinscher and Schnauzer type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/AFFENPINSCHER-186.html",
            "image": "../app/images/breedImgs/AFFENPINSCHER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/186g02-en.pdf"
        },
        {
            "id": 176,
            "name": "PORTUGUESE POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/PORTUGUESE-POINTING-DOG-187.html",
            "image": "../app/images/breedImgs/PORTUGUESEPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/187g07-en.pdf"
        },
        {
            "id": 177,
            "name": "SLOUGHI",
            "section": "Short-haired Sighthounds",
            "country": "MOROCCO",
            "url": "http://www.fci.be/en/nomenclature/SLOUGHI-188.html",
            "image": "../app/images/breedImgs/SLOUGHI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/188g10-en.pdf"
        },
        {
            "id": 178,
            "name": "FINNISH LAPPONIAN DOG",
            "section": "Nordic Watchdogs and Herders",
            "country": "FINLAND",
            "url": "http://www.fci.be/en/nomenclature/FINNISH-LAPPONIAN-DOG-189.html",
            "image": "../app/images/breedImgs/FINNISHLAPPONIANDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/189g05-en.pdf"
        },
        {
            "id": 179,
            "name": "HOVAWART",
            "section": "Molossian type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/HOVAWART-190.html",
            "image": "../app/images/breedImgs/HOVAWART.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/190g02-en.pdf"
        },
        {
            "id": 180,
            "name": "BOUVIER DES FLANDRES",
            "section": "Cattledogs (except Swiss Cattledogs)",
            "country": "BELGIUM, FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BOUVIER-DES-FLANDRES-191.html",
            "image": "../app/images/breedImgs/OUVIERDESFLANDRES.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/191g01-en.pdf"
        },
        {
            "id": 181,
            "name": "KROMFOHRLÄNDER",
            "section": "Kromfohrländer",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/KROMFOHRLANDER-192.html",
            "image": "../app/images/breedImgs/KROMFOHRLÄNDER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/192g09-en.pdf"
        },
        {
            "id": 182,
            "name": "BORZOI - RUSSIAN HUNTING SIGHTHOUND",
            "section": "Long-haired or fringed Sighthounds",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/BORZOI-RUSSIAN-HUNTING-SIGHTHOUND-193.html",
            "image": "../app/images/breedImgs/BORZOIRUSSIANHUNTINGSIGHTHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/193g10-en.pdf"
        },
        {
            "id": 183,
            "name": "BERGAMASCO SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/BERGAMASCO-SHEPHERD-DOG-194.html",
            "image": "../app/images/breedImgs/BERGAMASCOSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/194g01-en.pdf"
        },
        {
            "id": 184,
            "name": "ITALIAN VOLPINO",
            "section": "European Spitz",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-VOLPINO-195.html",
            "image": "../app/images/breedImgs/ITALIANVOLPINO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/195g05-en.pdf"
        },
        {
            "id": 185,
            "name": "BOLOGNESE",
            "section": "Bichons and related breeds",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/BOLOGNESE-196.html",
            "image": "../app/images/breedImgs/BOLOGNESE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/196g09-en.pdf"
        },
        {
            "id": 186,
            "name": "NEAPOLITAN MASTIFF",
            "section": "Molossian type",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/NEAPOLITAN-MASTIFF-197.html",
            "image": "../app/images/breedImgs/NEAPOLITANMASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/197g02-en.pdf"
        },
        {
            "id": 187,
            "name": "ITALIAN ROUGH-HAIRED SEGUGIO",
            "section": "Scent hounds",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-ROUGH-HAIRED-SEGUGIO-198.html",
            "image": "../app/images/breedImgs/ITALIANROUGHHAIREDSEGUGIO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/198g06-en.pdf"
        },
        {
            "id": 188,
            "name": "CIRNECO DELL'ETNA",
            "section": "Primitive type - Hunting Dogs",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/CIRNECO-DELL-ETNA-199.html",
            "image": "../app/images/breedImgs/CIRNECODELL'ETNA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/199g05-en.pdf"
        },
        {
            "id": 189,
            "name": "ITALIAN SIGHTHOUND",
            "section": "Short-haired Sighthounds",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-SIGHTHOUND-200.html",
            "image": "../app/images/breedImgs/ITALIANSIGHTHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/200g10-en.pdf"
        },
        {
            "id": 190,
            "name": "MAREMMA AND THE ABRUZZES SHEEPDOG",
            "section": "Sheepdogs",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/MAREMMA-AND-THE-ABRUZZES-SHEEPDOG-201.html",
            "image": "../app/images/breedImgs/MAREMMAANDTHEABRUZZESSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/201g01-en.pdf"
        },
        {
            "id": 191,
            "name": "ITALIAN POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-POINTING-DOG-202.html",
            "image": "../app/images/breedImgs/ITALIANPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/202g07-en.pdf"
        },
        {
            "id": 192,
            "name": "NORWEGIAN HOUND",
            "section": "Scent hounds",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/NORWEGIAN-HOUND-203.html",
            "image": "../app/images/breedImgs/NORWEGIANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/203g06-en.pdf"
        },
        {
            "id": 193,
            "name": "SPANISH HOUND",
            "section": "Scent hounds",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/SPANISH-HOUND-204.html",
            "image": "../app/images/breedImgs/SPANISHHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/204g06-en.pdf"
        },
        {
            "id": 194,
            "name": "CHOW CHOW",
            "section": "Asian Spitz and related breeds",
            "country": "CHINA",
            "url": "http://www.fci.be/en/nomenclature/CHOW-CHOW-205.html",
            "image": "../app/images/breedImgs/CHOWCHOW.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/205g05-en.pdf"
        },
        {
            "id": 195,
            "name": "JAPANESE CHIN",
            "section": "Japan Chin and Pekingese",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/JAPANESE-CHIN-206.html",
            "image": "../app/images/breedImgs/JAPANESECHIN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/206g09-en.pdf"
        },
        {
            "id": 196,
            "name": "PEKINGESE",
            "section": "Japan Chin and Pekingese",
            "country": "CHINA",
            "url": "http://www.fci.be/en/nomenclature/PEKINGESE-207.html",
            "image": "../app/images/breedImgs/PEKINGESE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/207g09-en.pdf"
        },
        {
            "id": 197,
            "name": "SHIH TZU",
            "section": "Tibetan breeds",
            "country": "Tibet (China)",
            "url": "http://www.fci.be/en/nomenclature/SHIH-TZU-208.html",
            "image": "../app/images/breedImgs/SHIHTZU.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/208g09-en.pdf"
        },
        {
            "id": 198,
            "name": "TIBETAN TERRIER",
            "section": "Tibetan breeds",
            "country": "Tibet (China)",
            "url": "http://www.fci.be/en/nomenclature/TIBETAN-TERRIER-209.html",
            "image": "../app/images/breedImgs/TIBETANTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/209g09-en.pdf"
        },
        {
            "id": 199,
            "name": "CANADIAN ESKIMO DOG",
            "section": "Nordic Sledge Dogs",
            "country": "CANADA",
            "url": "http://www.fci.be/en/nomenclature/CANADIAN-ESKIMO-DOG-211.html",
            "image": "../app/images/breedImgs/CANADIANESKIMODOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/211g05-en.pdf"
        },
        {
            "id": 200,
            "name": "SAMOYED",
            "section": "Nordic Sledge Dogs",
            "country": "NORTHERN RUSSIA, SIBERIA",
            "url": "http://www.fci.be/en/nomenclature/SAMOYED-212.html",
            "image": "../app/images/breedImgs/SAMOYED.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/212g05-en.pdf"
        },
        {
            "id": 201,
            "name": "HANOVERIAN SCENT HOUND",
            "section": "Leash (scent) Hounds",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/HANOVERIAN-SCENT-HOUND-213.html",
            "image": "../app/images/breedImgs/HANOVERIANSCENTHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/213g06-en.pdf"
        },
        {
            "id": 202,
            "name": "HELLENIC HOUND",
            "section": "Scent hounds",
            "country": "GREECE",
            "url": "http://www.fci.be/en/nomenclature/HELLENIC-HOUND-214.html",
            "image": "../app/images/breedImgs/HELLENICHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/214g06-en.pdf"
        },
        {
            "id": 203,
            "name": "BICHON FRISE",
            "section": "Bichons and related breeds",
            "country": "BELGIUM, FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BICHON-FRISE-215.html",
            "image": "../app/images/breedImgs/BICHONFRISE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/215g09-en.pdf"
        },
        {
            "id": 204,
            "name": "PUDELPOINTER",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/PUDELPOINTER-216.html",
            "image": "../app/images/breedImgs/PUDELPOINTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/216g07-en.pdf"
        },
        {
            "id": 205,
            "name": "BAVARIAN MOUNTAIN SCENT HOUND",
            "section": "Leash (scent) Hounds",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/BAVARIAN-MOUNTAIN-SCENT-HOUND-217.html",
            "image": "../app/images/breedImgs/BAVARIANMOUNTAINSCENTHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/217g06-en.pdf"
        },
        {
            "id": 206,
            "name": "CHIHUAHUA",
            "section": "Chihuahueno",
            "country": "MEXICO",
            "url": "http://www.fci.be/en/nomenclature/CHIHUAHUA-218.html",
            "image": "../app/images/breedImgs/CHIHUAHUA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/218g09-en.pdf"
        },
        {
            "id": 207,
            "name": "FRENCH TRICOLOUR HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-TRICOLOUR-HOUND-219.html",
            "image": "../app/images/breedImgs/FRENCHTRICOLOURHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/219g06-en.pdf"
        },
        {
            "id": 208,
            "name": "FRENCH WHITE & BLACK HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-WHITE-BLACK-HOUND-220.html",
            "image": "../app/images/breedImgs/FRENCHWHITE&BLACKHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/220g06-en.pdf"
        },
        {
            "id": 209,
            "name": "FRISIAN WATER DOG",
            "section": "Water Dogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/FRISIAN-WATER-DOG-221.html",
            "image": "../app/images/breedImgs/FRISIANWATERDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/221g08-en.pdf"
        },
        {
            "id": 210,
            "name": "STABIJHOUN",
            "section": "Continental Pointing Dogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/STABIJHOUN-222.html",
            "image": "../app/images/breedImgs/STABIJHOUN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/222g07-en.pdf"
        },
        {
            "id": 211,
            "name": "DUTCH SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/DUTCH-SHEPHERD-DOG-223.html",
            "image": "../app/images/breedImgs/DUTCHSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/223g01-en.pdf"
        },
        {
            "id": 212,
            "name": "DRENTSCHE PARTRIDGE DOG",
            "section": "Continental Pointing Dogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/DRENTSCHE-PARTRIDGE-DOG-224.html",
            "image": "../app/images/breedImgs/DRENTSCHEPARTRIDGEDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/224g07-en.pdf"
        },
        {
            "id": 213,
            "name": "FILA BRASILEIRO",
            "section": "Molossian type",
            "country": "BRAZIL",
            "url": "http://www.fci.be/en/nomenclature/FILA-BRASILEIRO-225.html",
            "image": "../app/images/breedImgs/FILABRASILEIRO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/225g02-en.pdf"
        },
        {
            "id": 214,
            "name": "LANDSEER (EUROPEAN CONTINENTAL TYPE)",
            "section": "Molossian type",
            "country": "GERMANY, SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/LANDSEER-EUROPEAN-CONTINENTAL-TYPE-226.html",
            "image": "../app/images/breedImgs/LANDSEEREUROPEANCONTINENTALTYPE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/226g02-en.pdf"
        },
        {
            "id": 215,
            "name": "LHASA APSO",
            "section": "Tibetan breeds",
            "country": "Tibet (China)",
            "url": "http://www.fci.be/en/nomenclature/LHASA-APSO-227.html",
            "image": "../app/images/breedImgs/LHASAAPSO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/227g09-en.pdf"
        },
        {
            "id": 216,
            "name": "AFGHAN HOUND",
            "section": "Long-haired or fringed Sighthounds",
            "country": "AFGHANISTAN",
            "url": "http://www.fci.be/en/nomenclature/AFGHAN-HOUND-228.html",
            "image": "../app/images/breedImgs/AFGHANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/228g10-en.pdf"
        },
        {
            "id": 217,
            "name": "SERBIAN TRICOLOUR HOUND",
            "section": "Scent hounds",
            "country": "SERBIA",
            "url": "http://www.fci.be/en/nomenclature/SERBIAN-TRICOLOUR-HOUND-229.html",
            "image": "../app/images/breedImgs/SERBIANTRICOLOURHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/229g06-en.pdf"
        },
        {
            "id": 218,
            "name": "TIBETAN MASTIFF",
            "section": "Molossian type",
            "country": "Tibet (China)",
            "url": "http://www.fci.be/en/nomenclature/TIBETAN-MASTIFF-230.html",
            "image": "../app/images/breedImgs/TIBETANMASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/230g02-en.pdf"
        },
        {
            "id": 219,
            "name": "TIBETAN SPANIEL",
            "section": "Tibetan breeds",
            "country": "Tibet (China)",
            "url": "http://www.fci.be/en/nomenclature/TIBETAN-SPANIEL-231.html",
            "image": "../app/images/breedImgs/TIBETANSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/231g09-en.pdf"
        },
        {
            "id": 220,
            "name": "DEUTSCH STICHELHAAR",
            "section": "Continental Pointing Dogs",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/DEUTSCH-STICHELHAAR-232.html",
            "image": "../app/images/breedImgs/DEUTSCHSTICHELHAAR.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/232g07-en.pdf"
        },
        {
            "id": 221,
            "name": "LITTLE LION DOG",
            "section": "Bichons and related breeds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/LITTLE-LION-DOG-233.html",
            "image": "../app/images/breedImgs/LITTLELIONDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/233g09-en.pdf"
        },
        {
            "id": 222,
            "name": "XOLOITZCUINTLE",
            "section": "Primitive type",
            "country": "MEXICO",
            "url": "http://www.fci.be/en/nomenclature/XOLOITZCUINTLE-234.html",
            "image": "../app/images/breedImgs/XOLOITZCUINTLE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/234g05-en.pdf"
        },
        {
            "id": 223,
            "name": "GREAT DANE",
            "section": "Molossian type",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GREAT-DANE-235.html",
            "image": "../app/images/breedImgs/GREATDANE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/235g02-en.pdf"
        },
        {
            "id": 224,
            "name": "AUSTRALIAN SILKY TERRIER",
            "section": "Toy Terriers",
            "country": "AUSTRALIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRALIAN-SILKY-TERRIER-236.html",
            "image": "../app/images/breedImgs/AUSTRALIANSILKYTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/236g03-en.pdf"
        },
        {
            "id": 225,
            "name": "NORWEGIAN BUHUND",
            "section": "Nordic Watchdogs and Herders",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/NORWEGIAN-BUHUND-237.html",
            "image": "../app/images/breedImgs/NORWEGIANBUHUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/237g05-en.pdf"
        },
        {
            "id": 226,
            "name": "MUDI",
            "section": "Sheepdogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/MUDI-238.html",
            "image": "../app/images/breedImgs/MUDI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/238g01-en.pdf"
        },
        {
            "id": 227,
            "name": "HUNGARIAN WIRE-HAIRED POINTER",
            "section": "Continental Pointing Dogs",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/HUNGARIAN-WIRE-HAIRED-POINTER-239.html",
            "image": "../app/images/breedImgs/HUNGARIANWIREHAIREDPOINTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/239g07-en.pdf"
        },
        {
            "id": 228,
            "name": "HUNGARIAN GREYHOUND",
            "section": "Short-haired Sighthounds",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/HUNGARIAN-GREYHOUND-240.html",
            "image": "../app/images/breedImgs/HUNGARIANGREYHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/240g10-en.pdf"
        },
        {
            "id": 229,
            "name": "HUNGARIAN HOUND - TRANSYLVANIAN SCENT HOUND",
            "section": "Scent hounds",
            "country": "HUNGARY",
            "url": "http://www.fci.be/en/nomenclature/HUNGARIAN-HOUND-TRANSYLVANIAN-SCENT-HOUND-241.html",
            "image": "../app/images/breedImgs/HUNGARIANHOUNDTRANSYLVANIANSCENTHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/241g06-en.pdf"
        },
        {
            "id": 230,
            "name": "NORWEGIAN ELKHOUND GREY",
            "section": "Nordic Hunting Dogs",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/NORWEGIAN-ELKHOUND-GREY-242.html",
            "image": "../app/images/breedImgs/NORWEGIANELKHOUNDGREY.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/242g05-en.pdf"
        },
        {
            "id": 231,
            "name": "ALASKAN MALAMUTE",
            "section": "Nordic Sledge Dogs",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/ALASKAN-MALAMUTE-243.html",
            "image": "../app/images/breedImgs/ALASKANMALAMUTE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/243g05-en.pdf"
        },
        {
            "id": 232,
            "name": "SLOVAKIAN HOUND",
            "section": "Scent hounds",
            "country": "SLOVAKIA",
            "url": "http://www.fci.be/en/nomenclature/SLOVAKIAN-HOUND-244.html",
            "image": "../app/images/breedImgs/SLOVAKIANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/244g06-en.pdf"
        },
        {
            "id": 233,
            "name": "BOHEMIAN WIRE-HAIRED POINTING GRIFFON",
            "section": "Continental Pointing Dogs",
            "country": "CZECH REPUBLIC",
            "url": "http://www.fci.be/en/nomenclature/BOHEMIAN-WIRE-HAIRED-POINTING-GRIFFON-245.html",
            "image": "../app/images/breedImgs/BOHEMIANWIREHAIREDPOINTINGGRIFFON.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/245g07-en.pdf"
        },
        {
            "id": 234,
            "name": "CESKY TERRIER",
            "section": "Small sized Terriers",
            "country": "CZECH REPUBLIC",
            "url": "http://www.fci.be/en/nomenclature/CESKY-TERRIER-246.html",
            "image": "../app/images/breedImgs/CESKYTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/246g03-en.pdf"
        },
        {
            "id": 235,
            "name": "ATLAS MOUNTAIN DOG (AIDI)",
            "section": "Molossian type",
            "country": "MOROCCO",
            "url": "http://www.fci.be/en/nomenclature/ATLAS-MOUNTAIN-DOG-AIDI-247.html",
            "image": "../app/images/breedImgs/ATLASMOUNTAINDOGAIDI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/247g02-en.pdf"
        },
        {
            "id": 236,
            "name": "PHARAOH HOUND",
            "section": "Primitive type",
            "country": "MALTA",
            "url": "http://www.fci.be/en/nomenclature/PHARAOH-HOUND-248.html",
            "image": "../app/images/breedImgs/PHARAOHHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/248g05-en.pdf"
        },
        {
            "id": 237,
            "name": "MAJORCA MASTIFF",
            "section": "Molossian type",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/MAJORCA-MASTIFF-249.html",
            "image": "../app/images/breedImgs/MAJORCAMASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/249g02-en.pdf"
        },
        {
            "id": 238,
            "name": "HAVANESE",
            "section": "Bichons and related breeds",
            "country": "CUBA",
            "url": "http://www.fci.be/en/nomenclature/HAVANESE-250.html",
            "image": "../app/images/breedImgs/HAVANESE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/250g09-en.pdf"
        },
        {
            "id": 239,
            "name": "POLISH LOWLAND SHEEPDOG",
            "section": "Sheepdogs",
            "country": "POLAND",
            "url": "http://www.fci.be/en/nomenclature/POLISH-LOWLAND-SHEEPDOG-251.html",
            "image": "../app/images/breedImgs/OLISHLOWLANDSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/251g01-en.pdf"
        },
        {
            "id": 240,
            "name": "TATRA SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "POLAND",
            "url": "http://www.fci.be/en/nomenclature/TATRA-SHEPHERD-DOG-252.html",
            "image": "../app/images/breedImgs/TATRASHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/252g01-en.pdf"
        },
        {
            "id": 241,
            "name": "PUG",
            "section": "Small Molossian type Dogs",
            "country": "CHINA",
            "url": "http://www.fci.be/en/nomenclature/PUG-253.html",
            "image": "../app/images/breedImgs/PUG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/253g09-en.pdf"
        },
        {
            "id": 242,
            "name": "ALPINE DACHSBRACKE",
            "section": "Leash (scent) Hounds",
            "country": "AUSTRIA",
            "url": "http://www.fci.be/en/nomenclature/ALPINE-DACHSBRACKE-254.html",
            "image": "../app/images/breedImgs/ALPINEDACHSBRACKE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/254g06-en.pdf"
        },
        {
            "id": 243,
            "name": "AKITA",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/AKITA-255.html",
            "image": "../app/images/breedImgs/AKITA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/255g05-en.pdf"
        },
        {
            "id": 244,
            "name": "SHIBA",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/SHIBA-257.html",
            "image": "../app/images/breedImgs/SHIBA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/257g05-en.pdf"
        },
        {
            "id": 245,
            "name": "JAPANESE TERRIER",
            "section": "Small sized Terriers",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/JAPANESE-TERRIER-259.html",
            "image": "../app/images/breedImgs/JAPANESETERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/259g03-en.pdf"
        },
        {
            "id": 246,
            "name": "TOSA",
            "section": "Molossian type",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/TOSA-260.html",
            "image": "../app/images/breedImgs/TOSA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/260g02-en.pdf"
        },
        {
            "id": 247,
            "name": "HOKKAIDO",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/HOKKAIDO-261.html",
            "image": "../app/images/breedImgs/HOKKAIDO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/261g05-en.pdf"
        },
        {
            "id": 248,
            "name": "JAPANESE SPITZ",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/JAPANESE-SPITZ-262.html",
            "image": "../app/images/breedImgs/JAPANESESPITZ.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/262g05-en.pdf"
        },
        {
            "id": 249,
            "name": "CHESAPEAKE BAY RETRIEVER",
            "section": "Retrievers",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/CHESAPEAKE-BAY-RETRIEVER-263.html",
            "image": "../app/images/breedImgs/CHESAPEAKEBAYRETRIEVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/263g08-en.pdf"
        },
        {
            "id": 250,
            "name": "MASTIFF",
            "section": "Molossian type",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/MASTIFF-264.html",
            "image": "../app/images/breedImgs/MASTIFF.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/264g02-en.pdf"
        },
        {
            "id": 251,
            "name": "NORWEGIAN LUNDEHUND",
            "section": "Nordic Hunting Dogs",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/NORWEGIAN-LUNDEHUND-265.html",
            "image": "../app/images/breedImgs/NORWEGIANLUNDEHUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/265g05-en.pdf"
        },
        {
            "id": 252,
            "name": "HYGEN HOUND",
            "section": "Scent hounds",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/HYGEN-HOUND-266.html",
            "image": "../app/images/breedImgs/HYGENHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/266g06-en.pdf"
        },
        {
            "id": 253,
            "name": "HALDEN HOUND",
            "section": "Scent hounds",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/HALDEN-HOUND-267.html",
            "image": "../app/images/breedImgs/HALDENHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/267g06-en.pdf"
        },
        {
            "id": 254,
            "name": "NORWEGIAN ELKHOUND BLACK",
            "section": "Nordic Hunting Dogs",
            "country": "NORWAY",
            "url": "http://www.fci.be/en/nomenclature/NORWEGIAN-ELKHOUND-BLACK-268.html",
            "image": "../app/images/breedImgs/NORWEGIANELKHOUNDBLACK.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/268g05-en.pdf"
        },
        {
            "id": 255,
            "name": "SALUKI",
            "section": "Long-haired or fringed Sighthounds",
            "country": "MIDDLE EAST",
            "url": "http://www.fci.be/en/nomenclature/SALUKI-269.html",
            "image": "../app/images/breedImgs/SALUKI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/269g10-en.pdf"
        },
        {
            "id": 256,
            "name": "SIBERIAN HUSKY",
            "section": "Nordic Sledge Dogs",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/SIBERIAN-HUSKY-270.html",
            "image": "../app/images/breedImgs/SIBERIANHUSKY.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/270g05-en.pdf"
        },
        {
            "id": 257,
            "name": "BEARDED COLLIE",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BEARDED-COLLIE-271.html",
            "image": "../app/images/breedImgs/BEARDEDCOLLIE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/271g01-en.pdf"
        },
        {
            "id": 258,
            "name": "NORFOLK TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/NORFOLK-TERRIER-272.html",
            "image": "../app/images/breedImgs/NORFOLKTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/272g03-en.pdf"
        },
        {
            "id": 259,
            "name": "CANAAN DOG",
            "section": "Primitive type",
            "country": "ISRAEL",
            "url": "http://www.fci.be/en/nomenclature/CANAAN-DOG-273.html",
            "image": "../app/images/breedImgs/CANAANDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/273g05-en.pdf"
        },
        {
            "id": 260,
            "name": "GREENLAND DOG",
            "section": "Nordic Sledge Dogs",
            "country": "GREENLAND",
            "url": "http://www.fci.be/en/nomenclature/GREENLAND-DOG-274.html",
            "image": "../app/images/breedImgs/GREENLANDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/274g05-en.pdf"
        },
        {
            "id": 261,
            "name": "NORRBOTTENSPITZ",
            "section": "Nordic Hunting Dogs",
            "country": "SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/NORRBOTTENSPITZ-276.html",
            "image": "../app/images/breedImgs/NORRBOTTENSPITZ.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/276g05-en.pdf"
        },
        {
            "id": 262,
            "name": "CROATIAN SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "CROATIA",
            "url": "http://www.fci.be/en/nomenclature/CROATIAN-SHEPHERD-DOG-277.html",
            "image": "../app/images/breedImgs/CROATIANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/277g01-en.pdf"
        },
        {
            "id": 263,
            "name": "KARST SHEPHERD DOG",
            "section": "Molossian type",
            "country": "SLOVENIA",
            "url": "http://www.fci.be/en/nomenclature/KARST-SHEPHERD-DOG-278.html",
            "image": "../app/images/breedImgs/KARSTSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/278g02-en.pdf"
        },
        {
            "id": 264,
            "name": "MONTENEGRIN MOUNTAIN HOUND",
            "section": "Scent hounds",
            "country": "MONTENEGRO",
            "url": "http://www.fci.be/en/nomenclature/MONTENEGRIN-MOUNTAIN-HOUND-279.html",
            "image": "../app/images/breedImgs/MONTENEGRINMOUNTAINHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/279g06-en.pdf"
        },
        {
            "id": 265,
            "name": "OLD DANISH POINTING DOG",
            "section": "Continental Pointing Dogs",
            "country": "DENMARK",
            "url": "http://www.fci.be/en/nomenclature/OLD-DANISH-POINTING-DOG-281.html",
            "image": "../app/images/breedImgs/OLDDANISHPOINTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/281g07-en.pdf"
        },
        {
            "id": 266,
            "name": "GRAND GRIFFON VENDEEN",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GRAND-GRIFFON-VENDEEN-282.html",
            "image": "../app/images/breedImgs/GRANDGRIFFONVENDEEN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/282g06-en.pdf"
        },
        {
            "id": 267,
            "name": "COTON DE TULEAR",
            "section": "Bichons and related breeds",
            "country": "MADAGASCAR",
            "url": "http://www.fci.be/en/nomenclature/COTON-DE-TULEAR-283.html",
            "image": "../app/images/breedImgs/COTONDETULEAR.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/283g09-en.pdf"
        },
        {
            "id": 268,
            "name": "LAPPONIAN HERDER",
            "section": "Nordic Watchdogs and Herders",
            "country": "FINLAND",
            "url": "http://www.fci.be/en/nomenclature/LAPPONIAN-HERDER-284.html",
            "image": "../app/images/breedImgs/LAPPONIANHERDER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/284g05-en.pdf"
        },
        {
            "id": 269,
            "name": "SPANISH GREYHOUND",
            "section": "Short-haired Sighthounds",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/SPANISH-GREYHOUND-285.html",
            "image": "../app/images/breedImgs/SPANISHGREYHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/285g10-en.pdf"
        },
        {
            "id": 270,
            "name": "AMERICAN STAFFORDSHIRE TERRIER",
            "section": "Bull type Terriers",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/AMERICAN-STAFFORDSHIRE-TERRIER-286.html",
            "image": "../app/images/breedImgs/AMERICANSTAFFORDSHIRETERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/286g03-en.pdf"
        },
        {
            "id": 271,
            "name": "AUSTRALIAN CATTLE DOG",
            "section": "Cattledogs (except Swiss Cattledogs)",
            "country": "AUSTRALIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRALIAN-CATTLE-DOG-287.html",
            "image": "../app/images/breedImgs/AUSTRALIANCATTLEDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/287g01-en.pdf"
        },
        {
            "id": 272,
            "name": "CHINESE CRESTED DOG",
            "section": "Hairless Dogs",
            "country": "CHINA",
            "url": "http://www.fci.be/en/nomenclature/CHINESE-CRESTED-DOG-288.html",
            "image": "../app/images/breedImgs/CHINESECRESTEDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/288g09-en.pdf"
        },
        {
            "id": 273,
            "name": "ICELANDIC SHEEPDOG",
            "section": "Nordic Watchdogs and Herders",
            "country": "ICELAND",
            "url": "http://www.fci.be/en/nomenclature/ICELANDIC-SHEEPDOG-289.html",
            "image": "../app/images/breedImgs/ICELANDICSHEEPDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/289g05-en.pdf"
        },
        {
            "id": 274,
            "name": "BEAGLE HARRIER",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/BEAGLE-HARRIER-290.html",
            "image": "../app/images/breedImgs/BEAGLEHARRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/290g06-en.pdf"
        },
        {
            "id": 275,
            "name": "EURASIAN",
            "section": "Asian Spitz and related breeds",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/EURASIAN-291.html",
            "image": "../app/images/breedImgs/EURASIAN.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/291g05-en.pdf"
        },
        {
            "id": 276,
            "name": "DOGO ARGENTINO",
            "section": "Molossian type",
            "country": "ARGENTINA",
            "url": "http://www.fci.be/en/nomenclature/DOGO-ARGENTINO-292.html",
            "image": "../app/images/breedImgs/DOGOARGENTINO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/292g02-en.pdf"
        },
        {
            "id": 277,
            "name": "AUSTRALIAN KELPIE",
            "section": "Sheepdogs",
            "country": "AUSTRALIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRALIAN-KELPIE-293.html",
            "image": "../app/images/breedImgs/AUSTRALIANKELPIE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/293g01-en.pdf"
        },
        {
            "id": 278,
            "name": "OTTERHOUND",
            "section": "Scent hounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/OTTERHOUND-294.html",
            "image": "../app/images/breedImgs/OTTERHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/294g06-en.pdf"
        },
        {
            "id": 279,
            "name": "HARRIER",
            "section": "Scent hounds",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/HARRIER-295.html",
            "image": "../app/images/breedImgs/Harrier.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/295g06-en.pdf"
        },
        {
            "id": 280,
            "name": "COLLIE SMOOTH",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/COLLIE-SMOOTH-296.html",
            "image": "../app/images/breedImgs/COLLIESMOOTH.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/296g01-en.pdf"
        },
        {
            "id": 281,
            "name": "BORDER COLLIE",
            "section": "Sheepdogs",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/BORDER-COLLIE-297.html",
            "image": "../app/images/breedImgs/BORDERCOLLIE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/297g01-en.pdf"
        },
        {
            "id": 282,
            "name": "ROMAGNA WATER DOG",
            "section": "Water Dogs",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ROMAGNA-WATER-DOG-298.html",
            "image": "../app/images/breedImgs/ROMAGNAWATERDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/298g08-en.pdf"
        },
        {
            "id": 283,
            "name": "GERMAN HOUND",
            "section": "Scent hounds",
            "country": "GERMANY",
            "url": "http://www.fci.be/en/nomenclature/GERMAN-HOUND-299.html",
            "image": "../app/images/breedImgs/GERMANHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/299g06-en.pdf"
        },
        {
            "id": 284,
            "name": "BLACK AND TAN COONHOUND",
            "section": "Scent hounds",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/BLACK-AND-TAN-COONHOUND-300.html",
            "image": "../app/images/breedImgs/BLACKANDTANCOONHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/300g06-en.pdf"
        },
        {
            "id": 285,
            "name": "AMERICAN WATER SPANIEL",
            "section": "Water Dogs",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/AMERICAN-WATER-SPANIEL-301.html",
            "image": "../app/images/breedImgs/AMERICANWATERSPANIEL.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/301g08-en.pdf"
        },
        {
            "id": 286,
            "name": "IRISH GLEN OF IMAAL TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-GLEN-OF-IMAAL-TERRIER-302.html",
            "image": "../app/images/breedImgs/IRISHGLENOFIMAALTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/302g03-en.pdf"
        },
        {
            "id": 287,
            "name": "AMERICAN FOXHOUND",
            "section": "Scent hounds",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/AMERICAN-FOXHOUND-303.html",
            "image": "../app/images/breedImgs/AMERICANFOXHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/303g06-en.pdf"
        },
        {
            "id": 288,
            "name": "RUSSIAN-EUROPEAN LAIKA",
            "section": "Nordic Hunting Dogs",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/RUSSIAN-EUROPEAN-LAIKA-304.html",
            "image": "../app/images/breedImgs/RUSSIANEUROPEANLAIKA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/304g05-en.pdf"
        },
        {
            "id": 289,
            "name": "EAST SIBERIAN LAIKA",
            "section": "Nordic Hunting Dogs",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/EAST-SIBERIAN-LAIKA-305.html",
            "image": "../app/images/breedImgs/EASTSIBERIANLAIKA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/305g05-en.pdf"
        },
        {
            "id": 290,
            "name": "WEST SIBERIAN LAIKA",
            "section": "Nordic Hunting Dogs",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/WEST-SIBERIAN-LAIKA-306.html",
            "image": "../app/images/breedImgs/WESTSIBERIANLAIKA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/306g05-en.pdf"
        },
        {
            "id": 291,
            "name": "AZAWAKH",
            "section": "Short-haired Sighthounds",
            "country": "MALI",
            "url": "http://www.fci.be/en/nomenclature/AZAWAKH-307.html",
            "image": "../app/images/breedImgs/AZAWAKH.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/307g10-en.pdf"
        },
        {
            "id": 292,
            "name": "DUTCH SMOUSHOND",
            "section": "Pinscher and Schnauzer type",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/DUTCH-SMOUSHOND-308.html",
            "image": "../app/images/breedImgs/DUTCHSMOUSHOND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/308g02-en.pdf"
        },
        {
            "id": 293,
            "name": "SHAR PEI",
            "section": "Molossian type",
            "country": "CHINA",
            "url": "http://www.fci.be/en/nomenclature/SHAR-PEI-309.html",
            "image": "../app/images/breedImgs/SHARPEI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/309g02-en.pdf"
        },
        {
            "id": 294,
            "name": "SAARLOOS WOLFHOND",
            "section": "Sheepdogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/SAARLOOS-WOLFHOND-311.html",
            "image": "../app/images/breedImgs/SAARLOOSWOLFHOND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/311g01-en.pdf"
        },
        {
            "id": 295,
            "name": "NOVA SCOTIA DUCK TOLLING RETRIEVER",
            "section": "Retrievers",
            "country": "CANADA",
            "url": "http://www.fci.be/en/nomenclature/NOVA-SCOTIA-DUCK-TOLLING-RETRIEVER-312.html",
            "image": "../app/images/breedImgs/NOVASCOTIADUCKTOLLINGRETRIEVER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/312g08-en.pdf"
        },
        {
            "id": 296,
            "name": "DUTCH SCHAPENDOES",
            "section": "Sheepdogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/DUTCH-SCHAPENDOES-313.html",
            "image": "../app/images/breedImgs/DUTCHSCHAPENDOES.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/313g01-en.pdf"
        },
        {
            "id": 297,
            "name": "NEDERLANDSE KOOIKERHONDJE",
            "section": "Flushing Dogs",
            "country": "THE NETHERLANDS",
            "url": "http://www.fci.be/en/nomenclature/NEDERLANDSE-KOOIKERHONDJE-314.html",
            "image": "../app/images/breedImgs/NEDERLANDSEKOOIKERHONDJE.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/314g08-en.pdf"
        },
        {
            "id": 298,
            "name": "BROHOLMER",
            "section": "Molossian type",
            "country": "DENMARK",
            "url": "http://www.fci.be/en/nomenclature/BROHOLMER-315.html",
            "image": "../app/images/breedImgs/BROHOLMER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/315g02-en.pdf"
        },
        {
            "id": 299,
            "name": "FRENCH WHITE AND ORANGE HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/FRENCH-WHITE-AND-ORANGE-HOUND-316.html",
            "image": "../app/images/breedImgs/FRENCHWHITEANDORANGEHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/316g06-en.pdf"
        },
        {
            "id": 300,
            "name": "KAI",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/KAI-317.html",
            "image": "../app/images/breedImgs/KAI.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/317g05-en.pdf"
        },
        {
            "id": 301,
            "name": "KISHU",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/KISHU-318.html",
            "image": "../app/images/breedImgs/KISHU.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/318g05-en.pdf"
        },
        {
            "id": 302,
            "name": "SHIKOKU",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/SHIKOKU-319.html",
            "image": "../app/images/breedImgs/SHIKOKU.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/319g05-en.pdf"
        },
        {
            "id": 303,
            "name": "WIREHAIRED SLOVAKIAN POINTER",
            "section": "Continental Pointing Dogs",
            "country": "SLOVAKIA",
            "url": "http://www.fci.be/en/nomenclature/WIREHAIRED-SLOVAKIAN-POINTER-320.html",
            "image": "../app/images/breedImgs/WIREHAIREDSLOVAKIANPOINTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/320g07-en.pdf"
        },
        {
            "id": 304,
            "name": "MAJORCA SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/MAJORCA-SHEPHERD-DOG-321.html",
            "image": "../app/images/breedImgs/MAJORCASHEPHERDDOG.jpg",
            "pdf": ""
        },
        {
            "id": 305,
            "name": "GREAT ANGLO-FRENCH TRICOLOUR HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GREAT-ANGLO-FRENCH-TRICOLOUR-HOUND-322.html",
            "image": "../app/images/breedImgs/GREAT ANGLOFRENCHTRICOLOURHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/322g06-en.pdf"
        },
        {
            "id": 306,
            "name": "GREAT ANGLO-FRENCH WHITE AND BLACK HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GREAT-ANGLO-FRENCH-WHITE-AND-BLACK-HOUND-323.html",
            "image": "../app/images/breedImgs/GREAT ANGLOFRENCHWHITEANDBLACKHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/323g06-en.pdf"
        },
        {
            "id": 307,
            "name": "GREAT ANGLO-FRENCH WHITE & ORANGE HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/GREAT-ANGLO-FRENCH-WHITE-ORANGE-HOUND-324.html",
            "image": "../app/images/breedImgs/FRENCHWHITEANDORANGEHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/324g06-en.pdf"
        },
        {
            "id": 308,
            "name": "MEDIUM-SIZED ANGLO-FRENCH HOUND",
            "section": "Scent hounds",
            "country": "FRANCE",
            "url": "http://www.fci.be/en/nomenclature/MEDIUM-SIZED-ANGLO-FRENCH-HOUND-325.html",
            "image": "../app/images/breedImgs/FRENCHWHITEANDORANGEHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/325g06-en.pdf"
        },
        {
            "id": 309,
            "name": "SOUTH RUSSIAN SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/SOUTH-RUSSIAN-SHEPHERD-DOG-326.html",
            "image": "../app/images/breedImgs/SOUTHRUSSIANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/326g01-en.pdf"
        },
        {
            "id": 310,
            "name": "RUSSIAN BLACK TERRIER",
            "section": "Pinscher and Schnauzer type",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/RUSSIAN-BLACK-TERRIER-327.html",
            "image": "../app/images/breedImgs/RUSSIANBLACKTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/327g02-en.pdf"
        },
        {
            "id": 311,
            "name": "CAUCASIAN SHEPHERD DOG",
            "section": "Molossian type",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/CAUCASIAN-SHEPHERD-DOG-328.html",
            "image": "../app/images/breedImgs/CAUCASIANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/328g02-en.pdf"
        },
        {
            "id": 312,
            "name": "CANARIAN WARREN HOUND",
            "section": "Primitive type - Hunting Dogs",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/CANARIAN-WARREN-HOUND-329.html",
            "image": "../app/images/breedImgs/CANARIANWARRENHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/329g05-en.pdf"
        },
        {
            "id": 313,
            "name": "IRISH RED AND WHITE SETTER",
            "section": "British and Irish Pointers and Setters",
            "country": "IRELAND",
            "url": "http://www.fci.be/en/nomenclature/IRISH-RED-AND-WHITE-SETTER-330.html",
            "image": "../app/images/breedImgs/IRISHREDANDWHITESETTER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/330g07-en.pdf"
        },
        {
            "id": 314,
            "name": "KANGAL SHEPHERD DOG",
            "section": "Molossian type",
            "country": "TURKEY",
            "url": "http://www.fci.be/en/nomenclature/KANGAL-SHEPHERD-DOG-331.html",
            "image": "../app/images/breedImgs/KANGALSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/331g02-en.pdf"
        },
        {
            "id": 315,
            "name": "CZECHOSLOVAKIAN WOLFDOG",
            "section": "Sheepdogs",
            "country": "SLOVAKIA",
            "url": "http://www.fci.be/en/nomenclature/CZECHOSLOVAKIAN-WOLFDOG-332.html",
            "image": "../app/images/breedImgs/CZECHOSLOVAKIANWOLFDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/332g01-en.pdf"
        },
        {
            "id": 316,
            "name": "POLISH GREYHOUND",
            "section": "Short-haired Sighthounds",
            "country": "POLAND",
            "url": "http://www.fci.be/en/nomenclature/POLISH-GREYHOUND-333.html",
            "image": "../app/images/breedImgs/POLISHGREYHOUND.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/333g10-en.pdf"
        },
        {
            "id": 317,
            "name": "KOREA JINDO DOG",
            "section": "Asian Spitz and related breeds",
            "country": "REPUBLIC OF KOREA",
            "url": "http://www.fci.be/en/nomenclature/KOREA-JINDO-DOG-334.html",
            "image": "../app/images/breedImgs/KOREAJINDODOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/334g05-en.pdf"
        },
        {
            "id": 318,
            "name": "CENTRAL ASIA SHEPHERD DOG",
            "section": "Molossian type",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/CENTRAL-ASIA-SHEPHERD-DOG-335.html",
            "image": "../app/images/breedImgs/CENTRALASIASHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/335g02-en.pdf"
        },
        {
            "id": 319,
            "name": "SPANISH WATER DOG",
            "section": "Water Dogs",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/SPANISH-WATER-DOG-336.html",
            "image": "../app/images/breedImgs/SPANISHWATERDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/336g08-en.pdf"
        },
        {
            "id": 320,
            "name": "ITALIAN SHORT-HAIRED SEGUGIO",
            "section": "Scent hounds",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-SHORT-HAIRED-SEGUGIO-337.html",
            "image": "../app/images/breedImgs/ITALIANSHORTHAIREDSEGUGIO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/337g06-en.pdf"
        },
        {
            "id": 321,
            "name": "THAI RIDGEBACK DOG",
            "section": "Primitive type - Hunting Dogs",
            "country": "THAILAND",
            "url": "http://www.fci.be/en/nomenclature/THAI-RIDGEBACK-DOG-338.html",
            "image": "../app/images/breedImgs/THAIRIDGEBACKDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/338g05-en.pdf"
        },
        {
            "id": 322,
            "name": "PARSON RUSSELL TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/PARSON-RUSSELL-TERRIER-339.html",
            "image": "../app/images/breedImgs/PARSONRUSSELLTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/339g03-en.pdf"
        },
        {
            "id": 323,
            "name": "SAINT MIGUEL CATTLE DOG",
            "section": "Molossian type",
            "country": "PORTUGAL",
            "url": "http://www.fci.be/en/nomenclature/SAINT-MIGUEL-CATTLE-DOG-340.html",
            "image": "../app/images/breedImgs/SAINTMIGUELCATTLEDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/340g02-en.pdf"
        },
        {
            "id": 324,
            "name": "BRAZILIAN TERRIER",
            "section": "Large and medium sized Terriers",
            "country": "BRAZIL",
            "url": "http://www.fci.be/en/nomenclature/BRAZILIAN-TERRIER-341.html",
            "image": "../app/images/breedImgs/BRAZILIANTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/341g03-en.pdf"
        },
        {
            "id": 325,
            "name": "AUSTRALIAN SHEPHERD",
            "section": "Sheepdogs",
            "country": "UNITED STATES OF AMERICA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRALIAN-SHEPHERD-342.html",
            "image": "../app/images/breedImgs/AUSTRALIANSHEPHERD.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/342g01-en.pdf"
        },
        {
            "id": 326,
            "name": "ITALIAN CANE CORSO",
            "section": "Molossian type",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/ITALIAN-CANE-CORSO-343.html",
            "image": "../app/images/breedImgs/ITALIANCANECORSO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/343g02-en.pdf"
        },
        {
            "id": 327,
            "name": "AMERICAN AKITA",
            "section": "Asian Spitz and related breeds",
            "country": "JAPAN",
            "url": "http://www.fci.be/en/nomenclature/AMERICAN-AKITA-344.html",
            "image": "../app/images/breedImgs/AMERICANAKITA.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/344g05-en.pdf"
        },
        {
            "id": 328,
            "name": "JACK RUSSELL TERRIER",
            "section": "Small sized Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/JACK-RUSSELL-TERRIER-345.html",
            "image": "../app/images/breedImgs/JACKRUSSELLTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/345g03-en.pdf"
        },
        {
            "id": 329,
            "name": "DOGO CANARIO",
            "section": "Molossian type",
            "country": "SPAIN",
            "url": "http://www.fci.be/en/nomenclature/DOGO-CANARIO-346.html",
            "image": "../app/images/breedImgs/DOGOCANARIO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/346g02-en.pdf"
        },
        {
            "id": 330,
            "name": "WHITE SWISS SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "SWITZERLAND",
            "url": "http://www.fci.be/en/nomenclature/WHITE-SWISS-SHEPHERD-DOG-347.html",
            "image": "../app/images/breedImgs/WHITESWISSSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/347g01-en.pdf"
        },
        {
            "id": 331,
            "name": "TAIWAN DOG",
            "section": "Primitive type - Hunting Dogs",
            "country": "TAIWAN",
            "url": "http://www.fci.be/en/nomenclature/TAIWAN-DOG-348.html",
            "image": "../app/images/breedImgs/TAIWANDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/348g05-en.pdf"
        },
        {
            "id": 332,
            "name": "ROMANIAN MIORITIC SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "ROMANIA",
            "url": "http://www.fci.be/en/nomenclature/ROMANIAN-MIORITIC-SHEPHERD-DOG-349.html",
            "image": "../app/images/breedImgs/ROMANIANMIORITICSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/349g01-en.pdf"
        },
        {
            "id": 333,
            "name": "ROMANIAN CARPATHIAN SHEPHERD DOG",
            "section": "Sheepdogs",
            "country": "ROMANIA",
            "url": "http://www.fci.be/en/nomenclature/ROMANIAN-CARPATHIAN-SHEPHERD-DOG-350.html",
            "image": "../app/images/breedImgs/ROMANIANCARPATHIANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/350g01-en.pdf"
        },
        {
            "id": 334,
            "name": "AUSTRALIAN STUMPY TAIL CATTLE DOG",
            "section": "Cattledogs (except Swiss Cattledogs)",
            "country": "AUSTRALIA",
            "url": "http://www.fci.be/en/nomenclature/AUSTRALIAN-STUMPY-TAIL-CATTLE-DOG-351.html",
            "image": "../app/images/breedImgs/AUSTRALIANSTUMPYTAILCATTLEDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/351g01-en.pdf"
        },
        {
            "id": 335,
            "name": "RUSSIAN TOY",
            "section": "Continental Toy Spaniel and Russian Toy",
            "country": "RUSSIA",
            "url": "http://www.fci.be/en/nomenclature/RUSSIAN-TOY-352.html",
            "image": "../app/images/breedImgs/RUSSIANTOY.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/352g09-en.pdf"
        },
        {
            "id": 336,
            "name": "CIMARRÓN URUGUAYO",
            "section": "Molossian type",
            "country": "URUGUAY",
            "url": "http://www.fci.be/en/nomenclature/CIMARRON-URUGUAYO-353.html",
            "image": "../app/images/breedImgs/CIMARRÓNURUGUAYO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/353g02-en.pdf"
        },
        {
            "id": 337,
            "name": "POLISH HUNTING DOG",
            "section": "Scent hounds",
            "country": "POLAND",
            "url": "http://www.fci.be/en/nomenclature/POLISH-HUNTING-DOG-354.html",
            "image": "../app/images/breedImgs/POLISHHUNTINGDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/354g06-en.pdf"
        },
        {
            "id": 338,
            "name": "BOSNIAN AND HERZEGOVINIAN - CROATIAN SHEPHERD DOG",
            "section": "Molossian type",
            "country": "BOSNIA AND HERZEGOVINA, CROATIA",
            "url": "http://www.fci.be/en/nomenclature/BOSNIAN-AND-HERZEGOVINIAN-CROATIAN-SHEPHERD-DOG-355.html",
            "image": "../app/images/breedImgs/BOSNIANANDHERZEGOVINIANCROATIANSHEPHERDDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/355g02-en.pdf"
        },
        {
            "id": 339,
            "name": "DANISH-SWEDISH FARMDOG",
            "section": "Pinscher and Schnauzer type",
            "country": "DENMARK, SWEDEN",
            "url": "http://www.fci.be/en/nomenclature/DANISH-SWEDISH-FARMDOG-356.html",
            "image": "../app/images/breedImgs/DANISHSWEDISHFARMDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/356g02-en.pdf"
        },
        {
            "id": 340,
            "name": "ROMANIAN BUCOVINA SHEPHERD",
            "section": "Molossian type",
            "country": "ROMANIA",
            "url": "http://www.fci.be/en/nomenclature/ROMANIAN-BUCOVINA-SHEPHERD-357.html",
            "image": "../app/images/breedImgs/ROMANIANBUCOVINASHEPHERD.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/357g02-en.pdf"
        },
        {
            "id": 341,
            "name": "THAI BANGKAEW DOG",
            "section": "Asian Spitz and related breeds",
            "country": "THAILAND",
            "url": "http://www.fci.be/en/nomenclature/THAI-BANGKAEW-DOG-358.html",
            "image": "../app/images/breedImgs/THAIBANGKAEWDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/358g05-en.pdf"
        },
        {
            "id": 342,
            "name": "MINIATURE BULL TERRIER",
            "section": "Bull type Terriers",
            "country": "GREAT BRITAIN",
            "url": "http://www.fci.be/en/nomenclature/MINIATURE-BULL-TERRIER-359.html",
            "image": "../app/images/breedImgs/MINIATUREBULLTERRIER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/359g03-en.pdf"
        },
        {
            "id": 343,
            "name": "LANCASHIRE HEELER",
            "section": "Sheepdogs",
            "country": "ENGLAND",
            "url": "http://www.fci.be/en/nomenclature/LANCASHIRE-HEELER-360.html",
            "image": "../app/images/breedImgs/LANCASHIREHEELER.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/360g01-en.pdf"
        },
        {
            "id": 344,
            "name": "SEGUGIO MAREMMANO",
            "section": "Scent hounds",
            "country": "ITALY",
            "url": "http://www.fci.be/en/nomenclature/SEGUGIO-MAREMMANO-361.html",
            "image": "../app/images/breedImgs/SEGUGIOMAREMMANO.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/361g06-en.pdf"
        },
        {
            "id": 345,
            "name": "PERUVIAN HAIRLESS DOG",
            "section": "Primitive type",
            "country": "PERU",
            "url": "http://www.fci.be/en/nomenclature/PERUVIAN-HAIRLESS-DOG-310.html",
            "image": "../app/images/breedImgs/PERUVIANHAIRLESSDOG.jpg",
            "pdf": "http://www.fci.be/Nomenclature/Standards/310g05-en.pdf"
        }
    ];

//startup_________________________________________________________________
// if (location.protocol != 'https:')
// {
//     location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
// }

    let allBreeds = localforage.createInstance({
        name: "allBreeds"
    });

    let spottedBreeds = localforage.createInstance({
        name: "spottedDogs"
    });

startup()

function startup() {
    allBreeds.length().then(function (numberOfKeys) {
        if (numberOfKeys == 0) {
            populateAllBreedsDB();
            console.log('allBreeds db updated');
        } else {
            document.querySelector('#messageBox').innerHTML = '';
        }

        viewAllBreedsFromDB();
        viewSpottedDogsButtonActivity();
        addHomeButtonActivity();

    }).catch(function (err) {
        console.log(err);
    });

}

//allBreeds Functions_____________________________________________________________________

/**
 * Takes the data from the data array and inserts it into indexeddb
 */
function populateAllBreedsDB() {
    dogBreeds.forEach(function (breed) {
        let breedName = breed.name;

        allBreeds.setItem(breedName, breed).then(function() {

            document.querySelector('#messageBox').innerHTML ='Click <a href="https://dev.maydenacademy.co.uk/students/2019/aug/James/spotTheDog/app/">Here</a> Or Home To Start';

        })
    })
}

/**
 * displays all breeds but gets data from indexedDB
 */
function viewAllBreedsFromDB() {
    document.querySelector('#resultList').innerHTML = '';
    document.querySelector('#listCounter').innerHTML = '';

    let breedArray = [];

    allBreeds.iterate(function(value) {

        breedArray.push(value);

    }).then(function() {
        document.querySelector('#resultList').innerHTML = '';

        let source = document.querySelector('#allBreedsTemplate').innerHTML;

        let template = Handlebars.compile(source);

        let html = template({data: breedArray});

        document.querySelector('#resultList').innerHTML += html;

        addSpottedButtonActivity();

        breedArray.forEach(function(breed) {
            showsSpotted(breed.name);
        })
    }).catch(function(err) {
        console.log(err);
    });
}

/**
 * shows which breeds have already been selected
 */
function showsSpotted(breed) {
    spottedBreeds.getItem(breed).then(function(value) {
        if (value != null) {
            document.querySelector('#a' + value.id).style.border = '2px solid #32CD32';
        }
    })
}

/**
 * When the seen't it button is pressed the dog is added to spotted list
 */
function addSpottedButtonActivity() {
    document.querySelector('#messageBox').innerHTML ='';

    let seenItButtonActive = document.querySelectorAll('.seenIt');
    seenItButtonActive.forEach(function (button) {

        button.addEventListener('click', function() {

            allBreeds.getItem(button.id).then(function(record) {
                spotBreed(button.id, record);

                document.querySelector('#messageBox').innerHTML = "Dog Spotted! Well Done! <br>";
            })
        })
    })
}

/**
 * adds the spotted breed to the spottedBreeds DB
 * @param name name of the breed, the key
 * @param value the object describing the breed, the value
 */
function spotBreed(name, value) {
    spottedBreeds.setItem(name, value).then(function (value) {
        document.querySelector('#a' + value.id).style.border = '3px solid #00FF00';

    }).catch(function(err) {
        console.log(err);
    });
}

/**
 * sets up taking you back to homepage when home icon clicked
 */
function addHomeButtonActivity() {
    document.querySelector('#homePortal').addEventListener('click', function () {
        viewAllBreedsFromDB();
    })
}

//spottedBreeds Functions_____________________________________________________________

/**
 * sets up taking you to spotted dogs when icon is clicked
 */
function viewSpottedDogsButtonActivity() {
    document.querySelector('#spottedDogsPortal').addEventListener('click', function() {
        viewSpottedBreeds();
        spottedCount();

    })
}

/**
 * shows all spotted dogs
 */
function viewSpottedBreeds() {
    document.querySelector('#resultList').innerHTML = '';
    document.querySelector('#messageBox').innerHTML = '';


    let breedArray = [];
    spottedBreeds.iterate(function(value) {

        breedArray.push(value);

    }).then(function() {
        let source = document.querySelector('#spottedBreedsTemplate').innerHTML;

        let template = Handlebars.compile(source);

        let html = template({data: breedArray});

        document.querySelector('#resultList').innerHTML += html;

        notSeenItButtonActive();

    }).catch(function(err) {
        console.log(err);
    });
}

/**
 * causes not seen it button to delete breed from spotted list when clicked
 */
function notSeenItButtonActive() {

    let notSeenItButtonActive = document.querySelectorAll('.notSeenIt');
    notSeenItButtonActive.forEach(function (button) {

        button.addEventListener('click', function() {

            deleteBreedFromSpotted(button.id);

            viewSpottedBreeds();
        })
    })
}

/**
 * deletes breed from spottedBreeds db
 * @param breedName name of the breed
 */
function deleteBreedFromSpotted(breedName) {
    spottedBreeds.removeItem(breedName).then(function() {
        document.querySelector('#messageBox').innerHTML = "Wrong Dog Eh?";
        spottedCount()

    }).catch(function(err) {
        console.log(err);
    });
}

function spottedCount() {
    spottedBreeds.length().then(function(length) {
        if (length == 1) {
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dog. You are a n00b!</p>";
        } else if (length < 10){
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dogs. You are a n00b!</p>";
        } else if (length < 25) {
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dogs. You've been outside!</p>";
        } else if (length < 50) {
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dogs. You've seen a lot of doggies!</p>";
        } else if (length < 200) {
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dogs. You're a master spotter!</p>";
        } else if (length <345) {
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dogs. You need to get a life!</p>";
        } else {
            document.querySelector('#listCounter').innerHTML = "<p>  You have seen " + length + " dogs. You have seen all the doggos!!!11!</p>";
        }
    })
}

//Old/Diagnostic Functions_____________________________________________________________________
/**
 * removes the spotted dog from the all breeds DB
 * @param name name of the breed, the key
 */
function removeSpottedBreedFromAll(name) {
    allBreeds.removeItem(name).then(function() {
        // Run this code once the key has been removed.
        console.log('Key is cleared!');
    }).catch(function(err) {
        // This code runs if there were any errors
        console.log(err);
    });
}

/**
 * shows a particular breed from a specified db
 * @param db the db where the breed is
 * @param breedName the name of the breed
 */
function viewBreed(db, breedName) {
    db.getItem(breedName).then(function(breedObject) {
        let source = document.querySelector('#resultsTemplate').innerHTML;

        let template = Handlebars.compile(source);

        let html = template(breedObject);

        document.querySelector('#resultList').innerHTML += html;
        addSpottedButtonActivity();
    })
}


/**
 * displays all dog breeds in alphabetical order and makes them selectable as being seen
 * @param dogBreeds  the above array of data rather than the indexedDB version
 */
function viewAllBreeds(dogBreeds) {
    let source = document.querySelector('#allBreedsTemplate').innerHTML;

    let template = Handlebars.compile(source);

    let html = template({data: dogBreeds});

    document.querySelector('#resultList').innerHTML += html;

    addSpottedButtonActivity();
}
