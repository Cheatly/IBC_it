function Info () {//localized info about the app

    this.title = "";
    this.title_plus ="";
    this.description = "";
    this.image ="";
    this.about="";
    this.about_thanks="";
    this.about_law="";
    this.let_us_know="";
}

function AppVar (){//unlocalized variables about the app
    this.repo="";
    this.appname="";
}

function Interface() {


}

function Video(title,url){
    this.title = title;
    this.url = url;
}

function Data(locale){

    this.locale = locale;

    this.info = new Info();
    this.interface = new Interface();

    this.tv = new Array();
    this.music = new Array();
    this.sport = new Array();
    this.other = new Array();

    this.addTv = function(title,url){
        this.tv.push(new Video(title,url));
    }
    this.addMusic = function(title,url){
        this.music.push(new Video(title,url));
    }
    this.addSport = function(title,url){
        this.sport.push(new Video(title,url));
    }
    this.addOther = function(title,url){
        this.other.push(new Video(title,url));
    }

}

var l="it";

var appVar=new AppVar();

var data = new Array();

data[l]= new Data(l);

data[l].info.about="<center>La 'sfida del secchio ghiacciato', diventata virale, è stata promossa dalla ALS Association, l'associazione statunitense che si occupa di Sla, la Sclerosi laterale amiotrofica. Le secchiate d'acqua gelata per la Sla 'funzionano' e stanno facendo impennare le donazioni, sì, negli Stati Uniti. In Italia purtroppo il fenomeno si è trasformato in un divertente gavettone postato sui social senza però avere lo stesso successo in termini di donazioni.<br/><br/>L'idea dietro questa app. è di raccogliere fondi semplicemente scaricandola.<br/><br/><strong class='wow'>Ogni 1000 download donerò 1€ all'Associazione A.I.S.L.A.</strong><br/><small>Come prdataova, appena raggiungerò quota 1000 download posterò una foto con la ricevuta della donazione.</small><br/></br/>Quindi grazie per il tuo download!!! <strong>Stai dando un piccolo aiuto</strong>, ma se vuoi fare di più puoi contattarmi per incrementare la cifra.<br/><a class='button button-big active ext-link' href='mailto:ibc@kogel.it'>Contattami ora!</a><br/><center><img src='css/icons/init.png' class='app_icon_big'></img></center>";

data[l].info.about_thanks="Questa applicazione è stata realizzata da <a class='ext-link' target='_blank' href='http://www.kogel.it'>Mirko Gelsomini</a>";

data[l].info.about_law="Disclaimer: In conformità con l'articolo 17 U.S.C. Sezione 107, il materiale su questa app. è distribuito senza profitto a coloro che hanno espresso un interesse precedente. Il proprietario di questa app., i suoi amministratori, rappresentanti non potrasnno essere ritenuti personalmente responsabili per eventuali danni, effettivi o consequenziali, per qualsiasi video da parte di terzi che possa violare qualunque legge.";

/*-------------------------------------------------------------------------------------------------------*/
/***********************************/
data[l].addTv(
"Maria De Filippi",
"agU0-gPuWoU"
);
/***********************************/
/***********************************/
data[l].addTv(
"Belen Rodriguez",
"RNjhPOCKzFk"
);
/***********************************/
/***********************************/
data[l].addTv(
"Cristina Chiabotto",
"RBd0SXJTKqc"
);
/***********************************/
/***********************************/
data[l].addTv(
"Gianmarco Pozzecco",
"wp1cw6Xe97M"
);
/***********************************/
/***********************************/
data[l].addTv(
"Checco Zalone",
"1NKjIeBnlKg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Michelle Hunziker",
"4NpjlTqvClg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ben Affleck",
"eVW6QVkIcqM"
);
/***********************************/
/***********************************/
data[l].addTv(
"Kledi Kadiu",
"iuBX9en_OXA"
);
/***********************************/
/***********************************/
data[l].addTv(
"Simon Baker",
"ddS3TwIR4X4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Dave Batista",
"WWzGJP_y48o"
);
/***********************************/
/***********************************/
data[l].addTv(
"Bradley Cooper",
"tR4tNZ79awQ"
);
/***********************************/
/***********************************/
data[l].addTv(
"Russell Crowe",
"_oR3VqofP3A"
);
/***********************************/
/***********************************/
data[l].addTv(
"Tom Cruise",
"Pk-pOYlWTv8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Leonardo Di Caprio",
"kEdly4PCnTg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Vin Diesel",
"FCaj2eYTfyo"
);
/***********************************/
/***********************************/
data[l].addTv(
"Robert Downey, Jr.",
"2DH-DK8gGks"
);
/***********************************/
/***********************************/
data[l].addTv(
"Zac Efron",
"FvCCetmISco"
);
/***********************************/
/***********************************/
data[l].addTv(
"Chris Evans",
"0ARpDA0W9Lw"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jamie Foxx",
"UekCR0SiClo"
);
/***********************************/
/***********************************/
data[l].addTv(
"Tom Hanks",
"UvUDdNnVIr0"
);
/***********************************/
/***********************************/
data[l].addTv(
"Dwayne Johnson",
"L-ZmYOVx-V8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ashton Kutcher",
"I_YChPGQels"
);
/***********************************/
/***********************************/
data[l].addTv(
"Sean Maguire",
"BT1TtQUoZOY"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ewan McGregor",
"leh_O_iWkn4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Mickey Rourke",
"5pg7-Cxi8lQ"
);
/***********************************/
/***********************************/
data[l].addTv(
"Adam Sandler",
"6BnxBEXglAk"
);
/***********************************/
/***********************************/
data[l].addTv(
"Will Smith",
"Lqzu16vJt_o"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ben Stiller",
"5QXakczp7rw"
);
/***********************************/
/***********************************/
data[l].addTv(
"John Travolta",
"ekCtNK5bgP0"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jessica Alba",
"j-cEwgNPAlg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jennifer Aniston",
"TqQTyZz0WVs"
);
/***********************************/
/***********************************/
data[l].addTv(
"Emily Blunt",
"WgD4BY6UWuY"
);
/***********************************/
/***********************************/
data[l].addTv(
"Sophia Bush",
"NPDsGkK9cYg"
);
/***********************************/
/***********************************/
data[l].addTv(
"Hilary Duff",
"LHOjTUGcOMs"
);
/***********************************/
/***********************************/
data[l].addTv(
"Anne Hathaway",
"38LOY01d4w4"
);
/***********************************/
/***********************************/
data[l].addTv(
"Jennifer Love Hewitt",
"xd78SoWgx1I"
);
/***********************************/
/***********************************/
data[l].addTv(
"Vanessa Hudgens",
"TPTAFrG1ELk"
);
/***********************************/
/***********************************/
data[l].addTv(
"Kate Hudson",
"lMROcz6AIsw"
);
/***********************************/
/***********************************/
data[l].addTv(
"Nicole Kidman",
"yiUZuDdhtrs"
);
/***********************************/
/***********************************/
data[l].addTv(
"Gwyneth Paltrow",
"8fk2KpkjDpM"
);
/***********************************/
/***********************************/
data[l].addTv(
"Sarah Jessica Parker",
"63ohXMRjsjk"
);
/***********************************/
/***********************************/
data[l].addTv(
"Emma Stone",
"1xWx5y1H6C4"
);
/***********************************/
/***********************************/
data[l].addTv(
"J. J. Abrams",
"kdIBsbxEZ1M"
);
/***********************************/
/***********************************/
data[l].addTv(
"Ron Howard",
"37Znz20g2Pc"
);
/***********************************/
/***********************************/
data[l].addTv(
"Francis Lawrence",
"svlh81aNCbE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Steven Spielberg",
"QFF6EWVSACE"
);
/***********************************/
/***********************************/
data[l].addTv(
"Bob Iger",
"FAx03hNqic8"
);
/***********************************/
/***********************************/
data[l].addTv(
"Arturo Brachetti",
"rhkpqqTkp_I"
);
/***********************************/


/**************************************************************************************************/
/***********************************/
data[l].addMusic(
"Francesco Facchinetti",
"ESP1a4tDBf4"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Luciana Litizzetto",
"dBuTCSmOCkw"
);
/***********************************/
/***********************************/
data[l].addMusic(
"50 Cent",
"2k_QK9FvzEk"
);
/***********************************/
/***********************************/
data[l].addMusic(
"AOA",
"r-vicmzZc2o"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Apl.de.ap",
"mP9HPyDdHoc"
);
/***********************************/
/***********************************/
data[l].addMusic(
"David Archuleta",
"_OYklc4rsLs"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Iggy Azalea",
"aUclkP9NvFg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Lily Allen",
"FO_b7eqZ48Y"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Jack Barakat",
"0mEruVC7Sk8"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Gary Barlow",
"350BvIgHh5E"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Victoria Beckham",
"wGjdEp7sVVE"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Justin Bieber",
"XctmZgtPJR4"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Blue",
"GvhyumLGYDs"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Andrea Bocelli",
"VcOWB-6QYXQ"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Jon Bon Jovi",
"6NP0Z8PaSqE"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Chris Brown",
"juf35ufEVcY"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Armin van Buuren",
"XKm8aPqOEh4"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Adriano Celentano",
"wPwg8eBPxcU"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Kelly Clarkson",
"w1P_hDM2lao"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Miley Cyrus",
"7yWWj_KMGco"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Rian Dawson",
"oyvlXGQHRMQ"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Plácido Domingo",
"sOZepBHZZMc"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Dr. Dre",
"fM8iK3QJfhg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Drake",
"L1MDvOQ44io"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Eminem",
"EQEtaQJbypg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Foo Fighters",
"r5NjvFuPChU"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Liam Gallagher",
"op9sAL6cA8w"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Martin Garrix",
"tkBXbxMxq4E"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Selena Gomez",
"SWTkMeW16i4"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Ellie Goulding",
"5sEybbtbdDk"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Fred Hammond",
"kdGF3HAFuNo"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Calvin Harris",
"0SFvEAXzhrU"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Jennifer Hudson",
"lkx6ls8RFeg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Olivia Newton-John",
"vuu63QP3oys"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Wiz Khalifa",
"_4KxXnce5Y4"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Lady Gaga",
"RIUE3xGSOtg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Adam Lambert",
"yKYHonYbbbM"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Jennifer Lopez",
"4DXfCfoEHvg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Demi Lovato",
"1RIpuUvww4o"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Macklemore",
"GS7WZznByy8"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Ricky Martin",
"WjayzwlQYKg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Kylie Minogue",
"fheAOBLmKVY"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Gianni Morandi",
"TuNmZ7o0Wxc"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Nickelback",
"65PC7p3b37o"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Laura Pausini",
"9b_esWOPh6c"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Liam Payne",
"Q2EhmXOJm38"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Katy Perry",
"hulVfpNGFCA"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Rihanna",
"pFAwwbSSOsE"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Shakira",
"CKmqb5edcIM"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Britney Spears",
"kvKbNwi9CX0"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Gwen Stefani",
"KGIIH6Xd6GM"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Taylor Swift",
"Yc3lMV7zGn4"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Justin Timberlake",
"-4smHMO1Crg"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Tiësto",
"cMiAtmcSIug"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Usher",
"d4rNf4yeMyA"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Robbie Williams",
"Tuk2JRybaPI"
);
/***********************************/
/***********************************/
data[l].addMusic(
"Zedd",
"i5_93ozL_zc"
);
/***********************************/

/********************************************************************/
/***********************************/
data[l].addSport(
"Alessandro (Alex) del Piero",
"_FH6BaFfmtA"
);
/***********************************/
/***********************************/
data[l].addSport(
"Kurt Angle",
"cWkkMZBTBOI"
);
/***********************************/
/***********************************/
data[l].addSport(
"Dave Batista",
"WWzGJP_y48o"
);
/***********************************/
/***********************************/
data[l].addSport(
"Triple H",
"cHXaXBAh3m4"
);
/***********************************/
/***********************************/
data[l].addSport(
"Emmanuel Adebayor",
"sdR4xfYzbnE"
);
/***********************************/
/***********************************/
data[l].addSport(
"Troy Aikman",
"dS3UBC2cqaM"
);
/***********************************/
/***********************************/
data[l].addSport(
"Sergio Agüero",
"xf35haMMYzM"
);
/***********************************/
/***********************************/
data[l].addSport(
"NBA Compilation",
"fNmHgFIu-9o"
);
/***********************************/
/***********************************/
data[l].addSport(
"Giocatori NBA",
"NSbXOm-dmxs"
);
/***********************************/
/***********************************/
data[l].addSport(
"Gareth Bale",
"aD71GPCrXa0"
);
/***********************************/
/***********************************/
data[l].addSport(
"I migliori giocatori di calcio",
"BWM3QjQL8NE"
);
/***********************************/
/***********************************/
data[l].addSport(
"Real Madrid",
"TttBhKI-hGE"
);
/***********************************/
/***********************************/
data[l].addSport(
"Mario Balotelli",
"2TuDuSWaWfg"
);
/***********************************/
/***********************************/
data[l].addSport(
"Usain Bolt",
"FWSMgDoM2qw"
);
/***********************************/
/***********************************/
data[l].addSport(
"David Beckham",
"kRHOk5r7BQE"
);
/***********************************/
/***********************************/
data[l].addSport(
"Karim Benzema",
"flIx7138Xis"
);
/***********************************/
/***********************************/
data[l].addSport(
"Lewis Hamilton",
"1_FFsqixXpI"
);
/***********************************/
/***********************************/
data[l].addSport(
"Fernando Alonso",
"cfBhXt5KVJY"
);
/***********************************/
/***********************************/
data[l].addSport(
"Eden Hazard",
"QkT6cZJp5Zo"
);
/***********************************/
/***********************************/
data[l].addSport(
"Chicharito Hernández",
"MI1dW7_nv10"
);
/***********************************/
/***********************************/
data[l].addSport(
"Football Players",
"cfdHbeznEFc"
);
/***********************************/
/***********************************/
data[l].addSport(
"Ana Ivanovic",
"AZD5QN40-cw"
);
/***********************************/
/***********************************/
data[l].addSport(
"Adam Jones",
"D9vJLm_-25Y"
);
/***********************************/
/***********************************/
data[l].addSport(
"Kaká",
"omUqriRKC2A"
);
/***********************************/
/***********************************/
data[l].addSport(
"Jorge Lorenzo",
"aeGQf1DDAz8"
);
/***********************************/
/***********************************/
data[l].addSport(
"David Luiz",
"-Y6XuZIw0Rc"
);
/***********************************/
/***********************************/
data[l].addSport(
"Diego Maradona",
"riluwdZe7rU"
);
/***********************************/
/***********************************/
data[l].addSport(
"Felipe Massa",
"ci6-B3Q5mEk"
);
/***********************************/
/***********************************/
data[l].addSport(
"Lionel Messi",
"qEGK7kenkDI"
);
/***********************************/
/***********************************/
data[l].addSport(
"José Mourinho",
"bFLz76BoRb0"
);
/***********************************/
/***********************************/
data[l].addSport(
"Alexandre Pato",
"8NbiI5fMj9s"
);
/***********************************/
/***********************************/
data[l].addSport(
"Gerard Piqué",
"Tg_f-dGZhck"
);
/***********************************/
/***********************************/
data[l].addSport(
"Cesare Prandelli",
"AVeOLst4s3U"
);
/***********************************/
/***********************************/
data[l].addSport(
"Cristiano Ronaldo",
"QGjaG6O8yCY"
);
/***********************************/
/***********************************/
data[l].addSport(
"Valentino Rossi",
"uHFO28LH450"
);
/***********************************/
/***********************************/
data[l].addSport(
"Thiago Silva",
"I84xK-ARQQQ"
);
/***********************************/
/***********************************************************************************************/
/***********************************/
data[l].addOther(
"Matteo Renzi",
"O618QtaSnnw"
);
/***********************************/
/***********************************/
data[l].addOther(
"Beatrice Lorenzin",
"RNjhPOCKzFk"
);
/***********************************/
/***********************************/
data[l].addOther(
"Andrea Agnelli",
"DgQIwogQnko"
);
/***********************************/
/***********************************/
data[l].addOther(
"Adriano Galliani",
"HqeBPYYXXzc"
);
/***********************************/
/***********************************/
data[l].addOther(
"Video Divertenti",
"zoqyuNB9Mdg"
);
/***********************************/
/***********************************/
data[l].addOther(
"theShow",
"2LlYsZPMOfY"
);
/***********************************/
/***********************************/
data[l].addOther(
"Punti di Vista",
"0Mca10VYQJY"
);
/***********************************/
/***********************************/
data[l].addOther(
"Steve Ballmer",
"cKnPRosLKpg"
);
/***********************************/
/***********************************/
data[l].addOther(
"Satya Nadella",
"3YDxB6hXWYc"
);
/***********************************/
/***********************************/
data[l].addOther(
"Jeff Bezos",
"DFVezzjAhFY"
);
/***********************************/
/***********************************/
data[l].addOther(
"Larry Page & Sergey Brin",
"-BloJ6DFxkE"
);
/***********************************/
/***********************************/
data[l].addOther(
"Tim Cook",
"M_T1K7pFsI0"
);
/***********************************/
/***********************************/
data[l].addOther(
"Bill Gates",
"XS6ysDFTbLU"
);
/***********************************/
/***********************************/
data[l].addOther(
"Bob Parsons",
"EScchCJxbAM"
);
/***********************************/
/***********************************/
data[l].addOther(
"Mark Zuckerberg",
"XS6ysDFTbLU"
);
/***********************************/
/***********************************/
data[l].addOther(
"Samsung Galaxy S5",
"6w4Gqt-ljb4"
);
/***********************************/
/***********************************/
data[l].addOther(
"Stephen King",
"XO7lFV2e-xA"
);
/***********************************/
