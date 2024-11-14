"use strict";
var document;
var window;

//How this js is formatted:
//1: Setting up modals and opening modals
//2: cloning items to different modals
//3: closing the modal 

//Items: Main page dropdowns and modals
//1:1 Moo T-shirt
//Get the modal
var modalmootshirt = document.getElementById('modalmootshirt');
//Get the button that opens the modal
var btnmootshirt = document.getElementById('btnmootshirt');
//When user clicks on the button, open the modal
btnmootshirt.onclick = function () {
    modalmootshirt.style.display = "block";
};

//1:2 Halberd
var modalhalberd = document.getElementById('modalhalberd');
var btnhalberd = document.getElementById('btnhalberd');
btnhalberd.onclick = function () {
    modalhalberd.style.display = "block";
};
var halberd = document.getElementById("halberdstats");
var clnhalberd = halberd.cloneNode(true);
//
//1:3 Enchanted Tree
var modaletree = document.getElementById('modaletree');
var btnetree = document.getElementById('btnetree');
btnetree.onclick = function () {
    modaletree.style.display = "block";
};
var etree = document.getElementById("etreestats");
var clnetree = etree.cloneNode(true);
//
//1:4 Moo Moo T-shirt
var modalmoomootshirt = document.getElementById('modalmoomootshirt');
var btnmoomootshirt = document.getElementById('btnmoomootshirt');
btnmoomootshirt.onclick = function () {
    modalmoomootshirt.style.display = "block";
};
var moomootshirt = document.getElementById("moomootshirtstats");
var clnmoomootshirt = moomootshirt.cloneNode(true);
//
//1:5 Sassy's Cloak
var modalsassy = document.getElementById('modalsassy');
var btnsassy = document.getElementById('btnsassy');
btnsassy.onclick = function () {
    modalsassy.style.display = "block";
};
var sassy = document.getElementById("sassystats");
var clnsassy = sassy.cloneNode(true);
//
//1:6 Book of Knowledge
var modalbok = document.getElementById('modalbok');
var btnbok = document.getElementById('btnbok');
btnbok.onclick = function () {
    modalbok.style.display = "block";
};
var bok = document.getElementById("bokstats");
var clnbok = bok.cloneNode(true);
//
//1:7 Ragnarok
var modalrag = document.getElementById('modalrag');
var btnrag = document.getElementById('btnrag');
btnrag.onclick = function () {
    modalrag.style.display = "block";
};
var rag = document.getElementById("ragstats");
var clnrag = rag.cloneNode(true);
//
//1:8 Tectonic
var modaltec = document.getElementById('modaltec');
var btntec = document.getElementById('btntec');
btntec.onclick = function () {
    modaltec.style.display = "block";
};
var tec = document.getElementById("tecstats");
var clntec = tec.cloneNode(true);
//
//1:9 Mask of Valor
var modalmaskv = document.getElementById('modalmaskv');
var btnmaskv = document.getElementById('btnmaskv');
btnmaskv.onclick = function () {
    modalmaskv.style.display = "block";
};
var maskv = document.getElementById("maskvstats");
var clnmaskv = maskv.cloneNode(true);
//
//1:10 Holy Aura
var modalholya = document.getElementById('modalholya');
var btnholya = document.getElementById('btnholya');
btnholya.onclick = function () {
    modalholya.style.display = "block";
};
var holya = document.getElementById("holyastats");
var clnholya = holya.cloneNode(true);
//
//1:11 Demonic Ultimate
var modaldult = document.getElementById('modaldult');
var btndult = document.getElementById('btndult');
btndult.onclick = function () {
    modaldult.style.display = "block";
};
var dult = document.getElementById("dultstats");
var clndult = dult.cloneNode(true);
//
//2:1 Doom Horn
var modaldoomh = document.getElementById('modaldoomh');
var btndoomh = document.getElementById('btndoomh');
btndoomh.onclick = function () {
    modaldoomh.style.display = "block";
};
var doomh = document.getElementById("doomhstats");
var clndoomh = doomh.cloneNode(true);
//
//2:2 Jagged Sword
var modaljags = document.getElementById('modaljags');
var btnjags = document.getElementById('btnjags');
btnjags.onclick = function () {
    modaljags.style.display = "block";
};
var jags = document.getElementById("jagsstats");
var clnjags = jags.cloneNode(true);
//
//2:3 Jagged Blade
var modaljagb = document.getElementById('modaljagb');
var btnjagb = document.getElementById('btnjagb');
btnjagb.onclick = function () {
    modaljagb.style.display = "block";
};
var jagb = document.getElementById("jagbstats");
var clnjagb = jagb.cloneNode(true);
//
//2:4 Demon Edge
var modaldedg = document.getElementById('modaldedg');
var btndedg = document.getElementById('btndedg');
btndedg.onclick = function () {
    modaldedg.style.display = "block";
};
var dedg = document.getElementById("dedgstats");
var clndedg = dedg.cloneNode(true);
//
//2:5 Gem of Shadow
var modalgem = document.getElementById('modalgem');
var btngem = document.getElementById('btngem');
btngem.onclick = function () {
    modalgem.style.display = "block";
};
var gem = document.getElementById("gemstats");
var clngem = gem.cloneNode(true);
//
//2:6 Immunity
var modalimm = document.getElementById('modalimm');
var btnimm = document.getElementById('btnimm');
btnimm.onclick = function () {
    modalimm.style.display = "block";
};
var imm = document.getElementById("immstats");
var clnimm = imm.cloneNode(true);
//
//2:7 Replication
var modalrep = document.getElementById('modalrep');
var btnrep = document.getElementById('btnrep');
btnrep.onclick = function () {
    modalrep.style.display = "block";
};
var rep = document.getElementById("repstats");
var clnrep = rep.cloneNode(true);
//
//2:8 Balnazzar's Hand
var modalbhand = document.getElementById('modalbhand');
var btnbhand = document.getElementById('btnbhand');
btnbhand.onclick = function () {
    modalbhand.style.display = "block";
};
var bhand = document.getElementById("bhandstats");
var clnbhand = bhand.cloneNode(true);
//
//2:9 Eternal Aura
var modaleta = document.getElementById('modaleta');
var btneta = document.getElementById('btneta');
btneta.onclick = function () {
    modaleta.style.display = "block";
};
var eta = document.getElementById("etastats");
var clneta = eta.cloneNode(true);
//
//2:10 Dual Sword
var modalduals = document.getElementById('modalduals');
var btnduals = document.getElementById('btnduals');
btnduals.onclick = function () {
    modalduals.style.display = "block";
};
var duals = document.getElementById("dualsstats");
var clnduals = duals.cloneNode(true);
//
//2:11 Ultimate
var modalult = document.getElementById('modalult');
var btnult = document.getElementById('btnult');
btnult.onclick = function () {
    modalult.style.display = "block";
};
var ult = document.getElementById("ultstats");
var clnult = ult.cloneNode(true);
//
//3:1 Ani Cages
var modalac = document.getElementById('modalac');
var btnac = document.getElementById('btnac');
btnac.onclick = function () {
    modalac.style.display = "block";
};
var ac = document.getElementById("acstats");
var clnac = ac.cloneNode(true);
//
//3:2 Cage Large "lc"
var modallc = document.getElementById('modallc');
var btnlc = document.getElementById('btnlc');
btnlc.onclick = function () {
    modallc.style.display = "block";
};
var lc = document.getElementById("lcstats");
var clnlc = lc.cloneNode(true);
//
//3:3 Cage Medium "cm"
var modalcm = document.getElementById('modalcm');
var btncm = document.getElementById('btncm');
btncm.onclick = function () {
    modalcm.style.display = "block";
};
var cm = document.getElementById("cmstats");
var clncm = cm.cloneNode(true);
//
//3:4 Cage Small "cgs"
var modalcgs = document.getElementById('modalcgs');
var btncgs = document.getElementById('btncgs');
btncgs.onclick = function () {
    modalcgs.style.display = "block";
};
var cgs = document.getElementById("cgsstats");
var clncgs = cgs.cloneNode(true);
//
//3:5 Frog "fro"
var modalfro = document.getElementById('modalfro');
var btnfro = document.getElementById('btnfro');
btnfro.onclick = function () {
    modalfro.style.display = "block";
};
var fro = document.getElementById("frostats");
var clnfro = fro.cloneNode(true);
//
//3:6 Satanic Chicken "stc"
var modalstc = document.getElementById('modalstc');
var btnstc = document.getElementById('btnstc');
btnstc.onclick = function () {
    modalstc.style.display = "block";
};
var stc = document.getElementById("stcstats");
var clnstc = stc.cloneNode(true);
//
//3:7 Animals "an"
var modalan = document.getElementById('modalan');
var btnan = document.getElementById('btnan');
btnan.onclick = function () {
    modalan.style.display = "block";
};

var btnchi = document.getElementById('btchi');
var chi = document.getElementById("chistats");
var clnchi = chi.cloneNode(true);

//
//3:8 Runes "run"
var modalrun = document.getElementById('modalrun');
var btnrun = document.getElementById('btnrun');
btnrun.onclick = function () {
    modalrun.style.display = "block";
};

//
//3:9 Explosive Barrel "eba"
var modaleba = document.getElementById('modaleba');
var btneba = document.getElementById('btneba');
btneba.onclick = function () {
    modaleba.style.display = "block";
};
var eba = document.getElementById("ebastats");
var clneba = eba.cloneNode(true);

//
//3:10 Secret Place "secp"
var modalsecp = document.getElementById('modalsecp');
var btnsecp = document.getElementById('btnsecp');
btnsecp.onclick = function () {
    modalsecp.style.display = "block";
};
var secp = document.getElementById("secpstats");
var clnsecp = secp.cloneNode(true);

//
//3:11 Fountain of Thunderbluff / Rexxar's Shop "fot"
var modalfot = document.getElementById('modalfot');
var btnfot = document.getElementById('btnfot');
btnfot.onclick = function () {
    modalfot.style.display = "block";
};

//
//3:12 Kerchek's Soul / 1M Gold "k1m"
var modalk1m = document.getElementById('modalk1m');
var btnk1m = document.getElementById('btnk1m');
btnk1m.onclick = function () {
    modalk1m.style.display = "block";
};
var k1m = document.getElementById("k1mstats");
var clnk1m = k1m.cloneNode(true);

//
//3:13 Tome of Power (1) "t1"
var modalt1 = document.getElementById('modalt1');
var btnt1 = document.getElementById('btnt1');
btnt1.onclick = function () {
    modalt1.style.display = "block";
};
var t1 = document.getElementById("t1stats");
var clnt1 = t1.cloneNode(true);

//
//4:1 Hastarium
var modalhast = document.getElementById('modalhast');
var btnhast = document.getElementById('btnhast');
btnhast.onclick = function () {
    modalhast.style.display = "block";
};
var hast = document.getElementById("haststats");
var clnhast = hast.cloneNode(true);
//
//4:2 Javelin
var modaljav = document.getElementById('modaljav');
var btnjav = document.getElementById('btnjav');
btnjav.onclick = function () {
    modaljav.style.display = "block";
};
var jav = document.getElementById("javstats");
var clnjav = jav.cloneNode(true);
//
//4:3 Savior's Claw
var modalsavcl = document.getElementById('modalsavcl');
var btnsavcl = document.getElementById('btnsavcl');
btnsavcl.onclick = function () {
    modalsavcl.style.display = "block";
};
var savcl = document.getElementById("savclstats");
var clnsavcl = savcl.cloneNode(true);
//
//4:4 Evil Soul
var modalesoul = document.getElementById('modalesoul');
var btnesoul = document.getElementById('btnesoul');
btnesoul.onclick = function () {
    modalesoul.style.display = "block";
};
var esoul = document.getElementById("esoulstats");
var clnesoul = esoul.cloneNode(true);
//
//4:5 Warhammer
var modalwarh = document.getElementById('modalwarh');
var btnwarh = document.getElementById('btnwarh');
btnwarh.onclick = function () {
    modalwarh.style.display = "block";
};
var warh = document.getElementById("warhstats");
var clnwarh = warh.cloneNode(true);
//
//4:6 Imperial Axe
var modaliaxe = document.getElementById('modaliaxe');
var btniaxe = document.getElementById('btniaxe');
btniaxe.onclick = function () {
    modaliaxe.style.display = "block";
};
var iaxe = document.getElementById("iaxestats");
var clniaxe = iaxe.cloneNode(true);
//
//4:7 Swordstaff
var modalss = document.getElementById('modalss');
var btnss = document.getElementById('btnss');
btnss.onclick = function () {
    modalss.style.display = "block";
};
var ss = document.getElementById("ssstats");
var clnss = ss.cloneNode(true);
//
//4:8 Coral Blades
var modalcbla = document.getElementById('modalcbla');
var btncbla = document.getElementById('btncbla');
btncbla.onclick = function () {
    modalcbla.style.display = "block";
};
var cbla = document.getElementById("cblastats");
var clncbla = cbla.cloneNode(true);
//
//4:9 Red Boots
var modalrboo = document.getElementById('modalrboo');
var btnrboo = document.getElementById('btnrboo');
btnrboo.onclick = function () {
    modalrboo.style.display = "block";
};
var rboo = document.getElementById("rboostats");
var clnrboo = rboo.cloneNode(true);
//
//4:10 Ruthless Gauntlet
var modalrgau = document.getElementById('modalrgau');
var btnrgau = document.getElementById('btnrgau');
btnrgau.onclick = function () {
    modalrgau.style.display = "block";
};
var rgau = document.getElementById("rgaustats");
var clnrgau = rgau.cloneNode(true);
//
//4:11 Sapphire Ring
var modalsri = document.getElementById('modalsri');
var btnsri = document.getElementById('btnsri');
btnsri.onclick = function () {
    modalsri.style.display = "block";
};
var sri = document.getElementById("sristats");
var clnsri = sri.cloneNode(true);
//
//4:12 Heroism Mask
var modalhma = document.getElementById('modalhma');
var btnhma = document.getElementById('btnhma');
btnhma.onclick = function () {
    modalhma.style.display = "block";
};
var hma = document.getElementById("hmastats");
var clnhma = hma.cloneNode(true);
//
//5:1 Leremias
var modaller = document.getElementById('modaller');
var btnler = document.getElementById('btnler');
btnler.onclick = function () {
    modaller.style.display = "block";
};
var ler = document.getElementById("lerstats");
var clnler = ler.cloneNode(true);
//
//5:2 Hood of Cunning
var modalhoc = document.getElementById('modalhoc');
var btnhoc = document.getElementById('btnhoc');
btnhoc.onclick = function () {
    modalhoc.style.display = "block";
};
var hoc = document.getElementById("hocstats");
var clnhoc = hoc.cloneNode(true);
//
//5:3 Villainous Shield
var modalvs = document.getElementById('modalvs');
var btnvs = document.getElementById('btnvs');
btnvs.onclick = function () {
    modalvs.style.display = "block";
};
var vs = document.getElementById("vsstats");
var clnvs = vs.cloneNode(true);
//
//5:4 Helm of King
var modalhk = document.getElementById('modalhk');
var btnhk = document.getElementById('btnhk');
btnhk.onclick = function () {
    modalhk.style.display = "block";
};
var hk = document.getElementById("hkstats");
var clnhk = hk.cloneNode(true);
//
//5:5 Breast Plate "bp"
var modalbp = document.getElementById('modalbp');
var btnbp = document.getElementById('btnbp');
btnbp.onclick = function () {
    modalbp.style.display = "block";
};
var bp = document.getElementById("bpstats");
var clnbp = bp.cloneNode(true);
//
//5:6 Mithril-shirt "ms"
var modalms = document.getElementById('modalms');
var btnms = document.getElementById('btnms');
btnms.onclick = function () {
    modalms.style.display = "block";
};
var ms = document.getElementById("msstats");
var clnms = ms.cloneNode(true);
//
//5:7 Celestial Ring "cr"
var modalcr = document.getElementById('modalcr');
var btncr = document.getElementById('btncr');
btncr.onclick = function () {
    modalcr.style.display = "block";
};
var cr = document.getElementById("crstats");
var clncr = cr.cloneNode(true);
//
//5:8 Studded Leather "sl"
var modalsl = document.getElementById('modalsl');
var btnsl = document.getElementById('btnsl');
btnsl.onclick = function () {
    modalsl.style.display = "block";
};
var sl = document.getElementById("slstats");
var clnsl = sl.cloneNode(true);
//
//5:9 Elune's Cloak "ec"
var modalec = document.getElementById('modalec');
var btnec = document.getElementById('btnec');
btnec.onclick = function () {
    modalec.style.display = "block";
};
var ec = document.getElementById("ecstats");
var clnec = ec.cloneNode(true);
//
//5:10 Sefer Buckler "sb"
var modalsb = document.getElementById('modalsb');
var btnsb = document.getElementById('btnsb');
btnsb.onclick = function () {
    modalsb.style.display = "block";
};
var sb = document.getElementById("sbstats");
var clnsb = sb.cloneNode(true);
//
//5:11 Helm of Hador "hh"
var modalhh = document.getElementById('modalhh');
var btnhh = document.getElementById('btnhh');
btnhh.onclick = function () {
    modalhh.style.display = "block";
};
var hh = document.getElementById("hhstats");
var clnhh = hh.cloneNode(true);
//
//5:12 Dagger of Escape "doe"
var modaldoe = document.getElementById('modaldoe');
var btndoe = document.getElementById('btndoe');
btndoe.onclick = function () {
    modaldoe.style.display = "block";
};
var doe = document.getElementById("doestats");
var clndoe = doe.cloneNode(true);
//
//6:1 Gauntlets "gau"
var modalgau = document.getElementById('modalgau');
var btngau = document.getElementById('btngau');
btngau.onclick = function () {
    modalgau.style.display = "block";
};
var gau = document.getElementById("gaustats");
var clngau = gau.cloneNode(true);
//
//6:2 Slippers "sli"
var modalsli = document.getElementById('modalsli');
var btnsli = document.getElementById('btnsli');
btnsli.onclick = function () {
    modalsli.style.display = "block";
};
var sli = document.getElementById("slistats");
var clnsli = sli.cloneNode(true);
//
//6:3 Robe"rob"
var modalrob = document.getElementById('modalrob');
var btnrob = document.getElementById('btnrob');
btnrob.onclick = function () {
    modalrob.style.display = "block";
};
var rob = document.getElementById("robstats");
var clnrob = rob.cloneNode(true);
//
//6:4 Good Soul "gsoul"
var modalgsoul = document.getElementById('modalgsoul');
var btngsoul = document.getElementById('btngsoul');
btngsoul.onclick = function () {
    modalgsoul.style.display = "block";
};
var gsoul = document.getElementById("gsoulstats");
var clngsoul = gsoul.cloneNode(true);
//
//6:5 Belt of Ogre "ogr"
var modalogr = document.getElementById('modalogr');
var btnogr = document.getElementById('btnogr');
btnogr.onclick = function () {
    modalogr.style.display = "block";
};
var ogr = document.getElementById("ogrstats");
var clnogr = ogr.cloneNode(true);
//
//6:6 Quel'Thalas "qtl"
var modalqtl = document.getElementById('modalqtl');
var btnqtl = document.getElementById('btnqtl');
btnqtl.onclick = function () {
    modalqtl.style.display = "block";
};
var qtl = document.getElementById("qtlstats");
var clnqtl = qtl.cloneNode(true);
//
//6:7 Robe of the Magi "rotm"
var modalrotm = document.getElementById('modalrotm');
var btnrotm = document.getElementById('btnrotm');
btnrotm.onclick = function () {
    modalrotm.style.display = "block";
};
var rotm = document.getElementById("rotmstats");
var clnrotm = rotm.cloneNode(true);
//
//6:8 Neelanjali Ruby "njr"
var modalnjr = document.getElementById('modalnjr');
var btnnjr = document.getElementById('btnnjr');
btnnjr.onclick = function () {
    modalnjr.style.display = "block";
};
var njr = document.getElementById("njrstats");
var clnnjr = njr.cloneNode(true);
//
//6:9 Masakari "msk"
var modalmsk = document.getElementById('modalmsk');
var btnmsk = document.getElementById('btnmsk');
btnmsk.onclick = function () {
    modalmsk.style.display = "block";
};
var msk = document.getElementById("mskstats");
var clnmsk = msk.cloneNode(true);
//
//6:10 Aeglos "ago"
var modalago = document.getElementById('modalago');
var btnago = document.getElementById('btnago');
btnago.onclick = function () {
    modalago.style.display = "block";
};
var ago = document.getElementById("agostats");
var clnago = ago.cloneNode(true);
//
//6:11 Chakram "chr"
var modalchr = document.getElementById('modalchr');
var btnchr = document.getElementById('btnchr');
btnchr.onclick = function () {
    modalchr.style.display = "block";
};
var chr = document.getElementById("chrstats");
var clnchr = chr.cloneNode(true);
//
//6:12 Angel's Orb "ao"
var modalao = document.getElementById('modalao');
var btnao = document.getElementById('btnao');
btnao.onclick = function () {
    modalao.style.display = "block";
};
var ao = document.getElementById("aostats");
var clnao = ao.cloneNode(true);
//
//7:1 Abyssimal "abi"
var modalabi = document.getElementById('modalabi');
var btnabi = document.getElementById('btnabi');
btnabi.onclick = function () {
    modalabi.style.display = "block";
};
var abi = document.getElementById("abistats");
var clnabi = abi.cloneNode(true);
//
//7:2 Searing Edge "se"
var modalse = document.getElementById('modalse');
var btnse = document.getElementById('btnse');
btnse.onclick = function () {
    modalse.style.display = "block";
};
var se = document.getElementById("sestats");
var clnse = se.cloneNode(true);
//
//7:3 CLimber's Hammer "ch"
var modalch = document.getElementById('modalch');
var btnch = document.getElementById('btnch');
btnch.onclick = function () {
    modalch.style.display = "block";
};
var ch = document.getElementById("chstats");
var clnch = ch.cloneNode(true);
//
//7:4 Chitinous Blade "ctb"
var modalctb = document.getElementById('modalctb');
var btnctb = document.getElementById('btnctb');
btnctb.onclick = function () {
    modalctb.style.display = "block";
};
var ctb = document.getElementById("ctbstats");
var clnctb = ctb.cloneNode(true);
//
//7:5 Assault "ass"
var modalass = document.getElementById('modalass');
var btnass = document.getElementById('btnass');
btnass.onclick = function () {
    modalass.style.display = "block";
};
var ass = document.getElementById("assstats");
var clnass = ass.cloneNode(true);
//
//7:6 Vicious "vic"
var modalvic = document.getElementById('modalvic');
var btnvic = document.getElementById('btnvic');
btnvic.onclick = function () {
    modalvic.style.display = "block";
};
var vic = document.getElementById("vicstats");
var clnvic = vic.cloneNode(true);
//
//7:7 Copper Sword "cs"
var modalcs = document.getElementById('modalcs');
var btncs = document.getElementById('btncs');
btncs.onclick = function () {
    modalcs.style.display = "block";
};
var cs = document.getElementById("csstats");
var clncs = cs.cloneNode(true);
//
//7:8 Archmagi Blade "ab"
var modalab = document.getElementById('modalab');
var btnab = document.getElementById('btnab');
btnab.onclick = function () {
    modalab.style.display = "block";
};
var ab = document.getElementById("abstats");
var clnab = ab.cloneNode(true);
//
//7:9 Orb of Fire "oof"
var modaloof = document.getElementById('modaloof');
var btnoof = document.getElementById('btnoof');
btnoof.onclick = function () {
    modaloof.style.display = "block";
};
var oof = document.getElementById("oofstats");
var clnoof = oof.cloneNode(true);
//
//7:10 Orb of Frost "of"
var modalof = document.getElementById('modalof');
var btnof = document.getElementById('btnof');
btnof.onclick = function () {
    modalof.style.display = "block";
};
var of = document.getElementById("ofstats");
var clnof = of .cloneNode(true);
//
//7:11 Orb of Shadow "oos"
var modaloos = document.getElementById('modaloos');
var btnoos = document.getElementById('btnoos');
btnoos.onclick = function () {
    modaloos.style.display = "block";
};
var oos = document.getElementById("oosstats");
var clnoos = oos.cloneNode(true);
//
//7:12 Orb of Light "ool"
var modalool = document.getElementById('modalool');
var btnool = document.getElementById('btnool');
btnool.onclick = function () {
    modalool.style.display = "block";
};
var ool = document.getElementById("oolstats");
var clnool = ool.cloneNode(true);
//
//8:1 Omniscience "omn"
var modalomn = document.getElementById('modalomn');
var btnomn = document.getElementById('btnomn');
btnomn.onclick = function () {
    modalomn.style.display = "block";
};
var omn = document.getElementById("omnstats");
var clnomn = omn.cloneNode(true);
//
//8:2 Ethereal Buckler "eth"
var modaleth = document.getElementById('modaleth');
var btneth = document.getElementById('btneth');
btneth.onclick = function () {
    modaleth.style.display = "block";
};
var eth = document.getElementById("ethstats");
var clneth = eth.cloneNode(true);
//
//8:3 Periapt Stone "pst"
var modalpst = document.getElementById('modalpst');
var btnpst = document.getElementById('btnpst');
btnpst.onclick = function () {
    modalpst.style.display = "block";
};
var pst = document.getElementById("pststats");
var clnpst = pst.cloneNode(true);
//
//8:4 Wirt's Left Leg "wll"
var modalwll = document.getElementById('modalwll');
var btnwll = document.getElementById('btnwll');
btnwll.onclick = function () {
    modalwll.style.display = "block";
};
var wll = document.getElementById("wllstats");
var clnwll = wll.cloneNode(true);
//
//8:5 Howling Drum "hd"
var modalhd = document.getElementById('modalhd');
var btnhd = document.getElementById('btnhd');
btnhd.onclick = function () {
    modalhd.style.display = "block";
};
var hd = document.getElementById("hdstats");
var clnhd = hd.cloneNode(true);
//
//8:6 Barbarian's Skin "bs"
var modalbs = document.getElementById('modalbs');
var btnbs = document.getElementById('btnbs');
btnbs.onclick = function () {
    modalbs.style.display = "block";
};
var bs = document.getElementById("bsstats");
var clnbs = bs.cloneNode(true);
//
//8:7 Crafter "c"
var modalc = document.getElementById('modalc');
var btnc = document.getElementById('btnc');
btnc.onclick = function () {
    modalc.style.display = "block";
};
var c = document.getElementById("cstats");
var clnc = c.cloneNode(true);
//
//8:8 Villager "v"
var modalv = document.getElementById('modalv');
var btnv = document.getElementById('btnv');
btnv.onclick = function () {
    modalv.style.display = "block";
};
var v = document.getElementById("vstats");
var clnv = v.cloneNode(true);
//
//8:9 Wizard's Jar "wj"
var modalwj = document.getElementById('modalwj');
var btnwj = document.getElementById('btnwj');
btnwj.onclick = function () {
    modalwj.style.display = "block";
};
var wj = document.getElementById("wjstats");
var clnwj = wj.cloneNode(true);
//
//8:10 Sylvan Band "syb"
var modalsyb = document.getElementById('modalsyb');
var btnsyb = document.getElementById('btnsyb');
btnsyb.onclick = function () {
    modalsyb.style.display = "block";
};
var syb = document.getElementById("sybstats");
var clnsyb = syb.cloneNode(true);
//
//8:11 Mystical Helm "mh"
var modalmh = document.getElementById('modalmh');
var btnmh = document.getElementById('btnmh');
btnmh.onclick = function () {
    modalmh.style.display = "block";
};
var mh = document.getElementById("mhstats");
var clnmh = mh.cloneNode(true);
//
//9:1 Medallion "md"
var modalmd = document.getElementById('modalmd');
var btnmd = document.getElementById('btnmd');
btnmd.onclick = function () {
    modalmd.style.display = "block";
};
var md = document.getElementById("mdstats");
var clnmd = md.cloneNode(true);
//
//9:2 Tonbogiri "tbg"
var modaltbg = document.getElementById('modaltbg');
var btntbg = document.getElementById('btntbg');
btntbg.onclick = function () {
    modaltbg.style.display = "block";
};
var tbg = document.getElementById("tbgstats");
var clntbg = tbg.cloneNode(true);
//
//9:3 Kusanagi "ks"
var modalks = document.getElementById('modalks');
var btnks = document.getElementById('btnks');
btnks.onclick = function () {
    modalks.style.display = "block";
};
var ks = document.getElementById("ksstats");
var clnks = ks.cloneNode(true);
//
//9:4 Deadly Kris "dk"
var modaldk = document.getElementById('modaldk');
var btndk = document.getElementById('btndk');
btndk.onclick = function () {
    modaldk.style.display = "block";
};
var dk = document.getElementById("dkstats");
var clndk = dk.cloneNode(true);
//
//9:5 Tomahawk "thk"
var modalthk = document.getElementById('modalthk');
var btnthk = document.getElementById('btnthk');
btnthk.onclick = function () {
    modalthk.style.display = "block";
};
var thk = document.getElementById("thkstats");
var clnthk = thk.cloneNode(true);
//
//9:6 Armguard "agu"
var modalagu = document.getElementById('modalagu');
var btnagu = document.getElementById('btnagu');
btnagu.onclick = function () {
    modalagu.style.display = "block";
};
var agu = document.getElementById("agustats");
var clnagu = agu.cloneNode(true);
//
//9:7 Lexicon "lex"
var modallex = document.getElementById('modallex');
var btnlex = document.getElementById('btnlex');
btnlex.onclick = function () {
    modallex.style.display = "block";
};
var lex = document.getElementById("lexstats");
var clnlex = lex.cloneNode(true);
//
//9:8 Rapier "rap"
var modalrap = document.getElementById('modalrap');
var btnrap = document.getElementById('btnrap');
btnrap.onclick = function () {
    modalrap.style.display = "block";
};
var rap = document.getElementById("rapstats");
var clnrap = rap.cloneNode(true);
//
//9:9 Banded Mail "bm"
var modalbm = document.getElementById('modalbm');
var btnbm = document.getElementById('btnbm');
btnbm.onclick = function () {
    modalbm.style.display = "block";
};
var bm = document.getElementById("bmstats");
var clnbm = bm.cloneNode(true);
//
//9:10 Swasher "sw"
var modalsw = document.getElementById('modalsw');
var btnsw = document.getElementById('btnsw');
btnsw.onclick = function () {
    modalsw.style.display = "block";
};
var sw = document.getElementById("swstats");
var clnsw = sw.cloneNode(true);
//
//9:11 Rejuvenation "rj"
var modalrj = document.getElementById('modalrj');
var btnrj = document.getElementById('btnrj');
btnrj.onclick = function () {
    modalrj.style.display = "block";
};
var rj = document.getElementById("rjstats");
var clnrj = rj.cloneNode(true);
//
//10:1 Stormbringer "sbr"
var modalsbr = document.getElementById('modalsbr');
var btnsbr = document.getElementById('btnsbr');
btnsbr.onclick = function () {
    modalsbr.style.display = "block";
};
var sbr = document.getElementById("sbrstats");
var clnsbr = sbr.cloneNode(true);
//
//10:2 Mystic Spear "msp"
var modalmsp = document.getElementById('modalmsp');
var btnmsp = document.getElementById('btnmsp');
btnmsp.onclick = function () {
    modalmsp.style.display = "block";
};
var msp = document.getElementById("mspstats");
var clnmsp = msp.cloneNode(true);
//
//10:3 Mattock "mtk"
var modalmtk = document.getElementById('modalmtk');
var btnmtk = document.getElementById('btnmtk');
btnmtk.onclick = function () {
    modalmtk.style.display = "block";
};
var mtk = document.getElementById("mtkstats");
var clnmtk = mtk.cloneNode(true);
//
//10:4 Mandolin "mdo"
var modalmdo = document.getElementById('modalmdo');
var btnmdo = document.getElementById('btnmdo');
btnmdo.onclick = function () {
    modalmdo.style.display = "block";
};
var mdo = document.getElementById("mdostats");
var clnmdo = mdo.cloneNode(true);
//
//10:5 Exorus "exr"
var modalexr = document.getElementById('modalexr');
var btnexr = document.getElementById('btnexr');
btnexr.onclick = function () {
    modalexr.style.display = "block";
};
var exr = document.getElementById("exrstats");
var clnexr = exr.cloneNode(true);
//
//10:6 Morayshire "my"
var modalmy = document.getElementById('modalmy');
var btnmy = document.getElementById('btnmy');
btnmy.onclick = function () {
    modalmy.style.display = "block";
};
var my = document.getElementById("mystats");
var clnmy = my.cloneNode(true);
//
//10:7 Frostguard "fg"
var modalfg = document.getElementById('modalfg');
var btnfg = document.getElementById('btnfg');
btnfg.onclick = function () {
    modalfg.style.display = "block";
};
var fg = document.getElementById("fgstats");
var clnfg = fg.cloneNode(true);
//
//10:8 Necromancy "nc"
var modalnc = document.getElementById('modalnc');
var btnnc = document.getElementById('btnnc');
btnnc.onclick = function () {
    modalnc.style.display = "block";
};
var nc = document.getElementById("ncstats");
var clnnc = nc.cloneNode(true);
//
//10:9 Pendant of Flesh "pof"
var modalpof = document.getElementById('modalpof');
var btnpof = document.getElementById('btnpof');
btnpof.onclick = function () {
    modalpof.style.display = "block";
};
var pof = document.getElementById("pofstats");
var clnpof = pof.cloneNode(true);
//
//10:10 Prismatic "prs"
var modalprs = document.getElementById('modalprs');
var btnprs = document.getElementById('btnprs');
btnprs.onclick = function () {
    modalprs.style.display = "block";
};
var prs = document.getElementById("prsstats");
var clnprs = prs.cloneNode(true);
//
//10:11 Magtheridon "mgd"
var modalmgd = document.getElementById('modalmgd');
var btnmgd = document.getElementById('btnmgd');
btnmgd.onclick = function () {
    modalmgd.style.display = "block";
};
var mgd = document.getElementById("mgdstats");
var clnmgd = mgd.cloneNode(true);
//
//10:12 Dragon's Knife "drk"
var modaldrk = document.getElementById('modaldrk');
var btndrk = document.getElementById('btndrk');
btndrk.onclick = function () {
    modaldrk.style.display = "block";
};
var drk = document.getElementById("drkstats");
var clndrk = drk.cloneNode(true);
//
//11:1 Serenity Assault "sa"
var modalsa = document.getElementById('modalsa');
var btnsa = document.getElementById('btnsa');
btnsa.onclick = function () {
    modalsa.style.display = "block";
};
var sa = document.getElementById("sastats");
var clnsa = sa.cloneNode(true);
//
//11:2 Righteous Sword "rs"
var modalrs = document.getElementById('modalrs');
var btnrs = document.getElementById('btnrs');
btnrs.onclick = function () {
    modalrs.style.display = "block";
};
var rs = document.getElementById("rsstats");
var clnrs = rs.cloneNode(true);
//
//11:3 Righteous Plate "rp"
var modalrp = document.getElementById('modalrp');
var btnrp = document.getElementById('btnrp');
btnrp.onclick = function () {
    modalrp.style.display = "block";
};
var rp = document.getElementById("rpstats");
var clnrp = rp.cloneNode(true);
//
//11:4 Unrighteous "ur"
var modalur = document.getElementById('modalur');
var btnur = document.getElementById('btnur');
btnur.onclick = function () {
    modalur.style.display = "block";
};
var ur = document.getElementById("urstats");
var clnur = ur.cloneNode(true);
//
//11:5 Mystic Mace "mm"
var modalmm = document.getElementById('modalmm');
var btnmm = document.getElementById('btnmm');
btnmm.onclick = function () {
    modalmm.style.display = "block";
};
var mm = document.getElementById("mmstats");
var clnmm = mm.cloneNode(true);
//
//11:6 Scimtar "sct"
var modalsct = document.getElementById('modalsct');
var btnsct = document.getElementById('btnsct');
btnsct.onclick = function () {
    modalsct.style.display = "block";
};
var sct = document.getElementById("sctstats");
var clnsct = sct.cloneNode(true);
//
//11:7 Swiss Voulge "sv"
var modalsv = document.getElementById('modalsv');
var btnsv = document.getElementById('btnsv');
btnsv.onclick = function () {
    modalsv.style.display = "block";
};
var sv = document.getElementById("svstats");
var clnsv = sv.cloneNode(true);
//
//11:8 Blood Assault "ba"
var modalba = document.getElementById('modalba');
var btnba = document.getElementById('btnba');
btnba.onclick = function () {
    modalba.style.display = "block";
};
var ba = document.getElementById("bastats");
var clnba = ba.cloneNode(true);
//
//11:9 Oritsuru "osr"
var modalosr = document.getElementById('modalosr');
var btnosr = document.getElementById('btnosr');
btnosr.onclick = function () {
    modalosr.style.display = "block";
};
var osr = document.getElementById("osrstats");
var clnosr = osr.cloneNode(true);
//
//11:10 Soul Reaver "sr"
var modalsr = document.getElementById('modalsr');
var btnsr = document.getElementById('btnsr');
btnsr.onclick = function () {
    modalsr.style.display = "block";
};
var sr = document.getElementById("srstats");
var clnsr = sr.cloneNode(true);
//Soul Reaver 10
var sr10 = document.getElementById("sr10stats");
var clnsr10 = sr10.cloneNode(true);
//
//11:11 Kryptogen "kyg"
var modalkyg = document.getElementById('modalkyg');
var btnkyg = document.getElementById('btnkyg');
btnkyg.onclick = function () {
    modalkyg.style.display = "block";
};
var kyg = document.getElementById("kygstats");
var clnkyg = kyg.cloneNode(true);
//
//12:1 Undead Boots "ub"
var modalub = document.getElementById('modalub');
var btnub = document.getElementById('btnub');
btnub.onclick = function () {
    modalub.style.display = "block";
};
var ub = document.getElementById("ubstats");
var clnub = ub.cloneNode(true);
//
//12:2 Blood Stone "bls"
var modalbls = document.getElementById('modalbls');
var btnbls = document.getElementById('btnbls');
btnbls.onclick = function () {
    modalbls.style.display = "block";
};
var bls = document.getElementById("blsstats");
var clnbls = bls.cloneNode(true);
//
//12:3 Dravel "dvl"
var modaldvl = document.getElementById('modaldvl');
var btndvl = document.getElementById('btndvl');
btndvl.onclick = function () {
    modaldvl.style.display = "block";
};
var dvl = document.getElementById("dvlstats");
var clndvl = dvl.cloneNode(true);
//Recipe
var dvlr = document.getElementById("dvlrstats");
var clndvlr = dvlr.cloneNode(true);
//Dravel 5
var dvl5 = document.getElementById("dvl5stats");
var clndvl5 = dvl5.cloneNode(true);
//
//12:4 Grallen "gr"
var modalgr = document.getElementById('modalgr');
var btngr = document.getElementById('btngr');
btngr.onclick = function () {
    modalgr.style.display = "block";
};
var gr = document.getElementById("grstats");
var clngr = gr.cloneNode(true);
//
//12:5 Kusagiri "ksg"
var modalksg = document.getElementById('modalksg');
var btnksg = document.getElementById('btnksg');
btnksg.onclick = function () {
    modalksg.style.display = "block";
};
var ksg = document.getElementById("ksgstats");
var clnksg = ksg.cloneNode(true);
//
//12:6 Slasher/Smasher "sm"
var modalsm = document.getElementById('modalsm');
var btnsm = document.getElementById('btnsm');
btnsm.onclick = function () {
    modalsm.style.display = "block";
};
var sm = document.getElementById("smstats");
var clnsm = sm.cloneNode(true);
//
//12:7 Oshibo "osh"
var modalosh = document.getElementById('modalosh');
var btnosh = document.getElementById('btnosh');
btnosh.onclick = function () {
    modalosh.style.display = "block";
};
var osh = document.getElementById("oshstats");
var clnosh = osh.cloneNode(true);
//
//12:8 Sennor Kris "sk"
var modalsk = document.getElementById('modalsk');
var btnsk = document.getElementById('btnsk');
btnsk.onclick = function () {
    modalsk.style.display = "block";
};
var sk = document.getElementById("skstats");
var clnsk = sk.cloneNode(true);
//
//12:9 Vajra "vj"
var modalvj = document.getElementById('modalvj');
var btnvj = document.getElementById('btnvj');
btnvj.onclick = function () {
    modalvj.style.display = "block";
};
var vj = document.getElementById("vjstats");
var clnvj = vj.cloneNode(true);
//
//12:10 Zulfiqar "zq"
var modalzq = document.getElementById('modalzq');
var btnzq = document.getElementById('btnzq');
btnzq.onclick = function () {
    modalzq.style.display = "block";
};
var zq = document.getElementById("zqstats");
var clnzq = zq.cloneNode(true);
//
//12:11 Kladenets "kd"
var modalkd = document.getElementById('modalkd');
var btnkd = document.getElementById('btnkd');
btnkd.onclick = function () {
    modalkd.style.display = "block";
};
var kd = document.getElementById("kdstats");
var clnkd = kd.cloneNode(true);
//
//13:1 Sadistic "sad"
var modalsad = document.getElementById('modalsad');
var btnsad = document.getElementById('btnsad');
btnsad.onclick = function () {
    modalsad.style.display = "block";
};
var sad = document.getElementById("sadstats");
var clnsad = sad.cloneNode(true);
//
//13:2 Serpent Plague "sp"
var modalsp = document.getElementById('modalsp');
var btnsp = document.getElementById('btnsp');
btnsp.onclick = function () {
    modalsp.style.display = "block";
};
var sp = document.getElementById("spstats");
var clnsp = sp.cloneNode(true);
//Recipe
var spr = document.getElementById("sprstats");
var clnspr = spr.cloneNode(true);
//
//13:3 Unholy Bible "unb"
var modalunb = document.getElementById('modalunb');
var btnunb = document.getElementById('btnunb');
btnunb.onclick = function () {
    modalunb.style.display = "block";
};
var unb = document.getElementById("unbstats");
var clnunb = unb.cloneNode(true);
//
//13:4 Magic Storms "mgs"
var modalmgs = document.getElementById('modalmgs');
var btnmgs = document.getElementById('btnmgs');
btnmgs.onclick = function () {
    modalmgs.style.display = "block";
};
var mgs = document.getElementById("mgsstats");
var clnmgs = mgs.cloneNode(true);
//
//13:5 Alloyed "ayd"
var modalayd = document.getElementById('modalayd');
var btnayd = document.getElementById('btnayd');
btnayd.onclick = function () {
    modalayd.style.display = "block";
};
var ayd = document.getElementById("aydstats");
var clnayd = ayd.cloneNode(true);
//
//13:6 Mystic Staff "mys"
var modalmys = document.getElementById('modalmys');
var btnmys = document.getElementById('btnmys');
btnmys.onclick = function () {
    modalmys.style.display = "block";
};
var mys = document.getElementById("mysstats");
var clnmys = mys.cloneNode(true);
//
//13:7 Kharas "kh"
var modalkh = document.getElementById('modalkh');
var btnkh = document.getElementById('btnkh');
btnkh.onclick = function () {
    modalkh.style.display = "block";
};
var kh = document.getElementById("khstats");
var clnkh = kh.cloneNode(true);
//
//13:8 Clairaudience "cla"
var modalcla = document.getElementById('modalcla');
var btncla = document.getElementById('btncla');
btncla.onclick = function () {
    modalcla.style.display = "block";
};
var cla = document.getElementById("clastats");
var clncla = cla.cloneNode(true);
//
//13:9 Volhynia "vy"
var modalvy = document.getElementById('modalvy');
var btnvy = document.getElementById('btnvy');
btnvy.onclick = function () {
    modalvy.style.display = "block";
};
var vy = document.getElementById("vystats");
var clnvy = vy.cloneNode(true);
//
//13:10 Porphyril "pyl"
var modalpyl = document.getElementById('modalpyl');
var btnpyl = document.getElementById('btnpyl');
btnpyl.onclick = function () {
    modalpyl.style.display = "block";
};
var pyl = document.getElementById("pylstats");
var clnpyl = pyl.cloneNode(true);
//
//13:11 Gloryaxe "ga"
var modalga = document.getElementById('modalga');
var btnga = document.getElementById('btnga');
btnga.onclick = function () {
    modalga.style.display = "block";
};
var ga = document.getElementById("gastats");
var clnga = ga.cloneNode(true);
//
//14:1 Simplicity Axe "sax"
var modalsax = document.getElementById('modalsax');
var btnsax = document.getElementById('btnsax');
btnsax.onclick = function () {
    modalsax.style.display = "block";
};
var sax = document.getElementById("saxstats");
var clnsax = sax.cloneNode(true);
//
//14:2 Metalic Bow "mb"
var modalmb = document.getElementById('modalmb');
var btnmb = document.getElementById('btnmb');
btnmb.onclick = function () {
    modalmb.style.display = "block";
};
var mb = document.getElementById("mbstats");
var clnmb = mb.cloneNode(true);
//
//14:3 Intelligent "ig"
var modalig = document.getElementById('modalig');
var btnig = document.getElementById('btnig');
btnig.onclick = function () {
    modalig.style.display = "block";
};
var ig = document.getElementById("igstats");
var clnig = ig.cloneNode(true);
//
//14:4 Kraken's Coat "kc"
var modalkc = document.getElementById('modalkc');
var btnkc = document.getElementById('btnkc');
btnkc.onclick = function () {
    modalkc.style.display = "block";
};
var kc = document.getElementById("kcstats");
var clnkc = kc.cloneNode(true);
//
//14:5 Mask of Tho'roth "mt"
var modalmt = document.getElementById('modalmt');
var btnmt = document.getElementById('btnmt');
btnmt.onclick = function () {
    modalmt.style.display = "block";
};
var mt = document.getElementById("mtstats");
var clnmt = mt.cloneNode(true);
//
//14:6 Crossbow "cb"
var modalcb = document.getElementById('modalcb');
var btncb = document.getElementById('btncb');
btncb.onclick = function () {
    modalcb.style.display = "block";
};
var cb = document.getElementById("cbstats");
var clncb = cb.cloneNode(true);
//
//14:7 Gyser "gy"
var modalgy = document.getElementById('modalgy');
var btngy = document.getElementById('btngy');
btngy.onclick = function () {
    modalgy.style.display = "block";
};
var gy = document.getElementById("gystats");
var clngy = gy.cloneNode(true);
//
//14:8 Dwarvish "dw"
var modaldw = document.getElementById('modaldw');
var btndw = document.getElementById('btndw');
btndw.onclick = function () {
    modaldw.style.display = "block";
};
var dw = document.getElementById("dwstats");
var clndw = dw.cloneNode(true);
//
//14:9 Tonic "tc"
var modaltc = document.getElementById('modaltc');
var btntc = document.getElementById('btntc');
btntc.onclick = function () {
    modaltc.style.display = "block";
};
var tc = document.getElementById("tcstats");
var clntc = tc.cloneNode(true);
//
//14:10 Aerogun "ag"
var modalag = document.getElementById('modalag');
var btnag = document.getElementById('btnag');
btnag.onclick = function () {
    modalag.style.display = "block";
};
var ag = document.getElementById("agstats");
var clnag = ag.cloneNode(true);
//
//14:11 Astral Reaver "ar"
var modalar = document.getElementById('modalar');
var btnar = document.getElementById('btnar');
btnar.onclick = function () {
    modalar.style.display = "block";
};
var ar = document.getElementById("arstats");
var clnar = ar.cloneNode(true);
//Astral Reaver 10
var ar10 = document.getElementById("ar10stats");
var clnar10 = ar10.cloneNode(true);
//
//15:1 Mithril Rod "mr"
var modalmr = document.getElementById('modalmr');
var btnmr = document.getElementById('btnmr');
btnmr.onclick = function () {
    modalmr.style.display = "block";
};
var mr = document.getElementById("mrstats");
var clnmr = mr.cloneNode(true);
//
//15:2 Ballista "b"
var modalb = document.getElementById('modalb');
var btnb = document.getElementById('btnb');
btnb.onclick = function () {
    modalb.style.display = "block";
};
var b = document.getElementById("bstats");
var clnb = b.cloneNode(true);
//
//15:3 War Club "wc"
var modalwc = document.getElementById('modalwc');
var btnwc = document.getElementById('btnwc');
btnwc.onclick = function () {
    modalwc.style.display = "block";
};
var wc = document.getElementById("wcstats");
var clnwc = wc.cloneNode(true);
//
//15:4 Soul Sword "sos"
var modalsos = document.getElementById('modalsos');
var btnsos = document.getElementById('btnsos');
btnsos.onclick = function () {
    modalsos.style.display = "block";
};
var sos = document.getElementById("sosstats");
var clnsos = sos.cloneNode(true);
//
//15:5 Warlock Skull "ws"
var modalws = document.getElementById('modalws');
var btnws = document.getElementById('btnws');
btnws.onclick = function () {
    modalws.style.display = "block";
};
var ws = document.getElementById("wsstats");
var clnws = ws.cloneNode(true);
//
//15:6 Sulfuras Ragnaro "srg"
var modalsrg = document.getElementById('modalsrg');
var btnsrg = document.getElementById('btnsrg');
btnsrg.onclick = function () {
    modalsrg.style.display = "block";
};
var srg = document.getElementById("srgstats");
var clnsrg = srg.cloneNode(true);
//
//15:7 Hyper Ropera "hr"
var modalhr = document.getElementById('modalhr');
var btnhr = document.getElementById('btnhr');
btnhr.onclick = function () {
    modalhr.style.display = "block";
};
var hr = document.getElementById("hrstats");
var clnhr = hr.cloneNode(true);
//
//15:8 Thunderfury "tf"
var modaltf = document.getElementById('modaltf');
var btntf = document.getElementById('btntf');
btntf.onclick = function () {
    modaltf.style.display = "block";
};
var tf = document.getElementById("tfstats");
var clntf = tf.cloneNode(true);
//
//15:9 Aveioletz "az"
var modalaz = document.getElementById('modalaz');
var btnaz = document.getElementById('btnaz');
btnaz.onclick = function () {
    modalaz.style.display = "block";
};
var az = document.getElementById("azstats");
var clnaz = az.cloneNode(true);
//
//15:10 Shards of Ice "soi"
var modalsoi = document.getElementById('modalsoi');
var btnsoi = document.getElementById('btnsoi');
btnsoi.onclick = function () {
    modalsoi.style.display = "block";
};
var soi = document.getElementById("soistats");
var clnsoi = soi.cloneNode(true);
//
//15:11 Righteous Assault "ra"
var modalra = document.getElementById('modalra');
var btnra = document.getElementById('btnra');
btnra.onclick = function () {
    modalra.style.display = "block";
};
var ra = document.getElementById("rastats");
var clnra = ra.cloneNode(true);
//
//16:1 Elf's Brew "eb"
var modaleb = document.getElementById('modaleb');
var btneb = document.getElementById('btneb');
btneb.onclick = function () {
    modaleb.style.display = "block";
};
var eb = document.getElementById("ebstats");
var clneb = eb.cloneNode(true);
//
//16:2 Clear Drink "cd"
var modalcd = document.getElementById('modalcd');
var btncd = document.getElementById('btncd');
btncd.onclick = function () {
    modalcd.style.display = "block";
};
var cd = document.getElementById("cdstats");
var clncd = cd.cloneNode(true);
//
//16:3 Vial of Clear Blood "cbl"
var modalcbl = document.getElementById('modalcbl');
var btncbl = document.getElementById('btncbl');
btncbl.onclick = function () {
    modalcbl.style.display = "block";
};
var cbl = document.getElementById("cblstats");
var clncbl = cbl.cloneNode(true);
//
//16:4 Tree Eater "te"
var modalte = document.getElementById('modalte');
var btnte = document.getElementById('btnte');
btnte.onclick = function () {
    modalte.style.display = "block";
};
var te = document.getElementById("testats");
var clnte = te.cloneNode(true);
//
//16:5 Potion of Clarity "pc"
var modalpc = document.getElementById('modalpc');
var btnpc = document.getElementById('btnpc');
btnpc.onclick = function () {
    modalpc.style.display = "block";
};
var pc = document.getElementById("pcstats");
var clnpc = pc.cloneNode(true);
//
//16:6 Awakening Potion "ap"
var modalap = document.getElementById('modalap');
var btnap = document.getElementById('btnap');
btnap.onclick = function () {
    modalap.style.display = "block";
};
var ap = document.getElementById("apstats");
var clnap = ap.cloneNode(true);
//
//16:7 Vial of Night Dew "vnd"
var modalvnd = document.getElementById('modalvnd');
var btnvnd = document.getElementById('btnvnd');
btnvnd.onclick = function () {
    modalvnd.style.display = "block";
};
var vnd = document.getElementById("vndstats");
var clnvnd = vnd.cloneNode(true);
//
//16:8 Purple Drink "pd"
var modalpd = document.getElementById('modalpd');
var btnpd = document.getElementById('btnpd');
btnpd.onclick = function () {
    modalpd.style.display = "block";
};
var pd = document.getElementById("pdstats");
var clnpd = pd.cloneNode(true);
//
//16:9 Sentry Wards "swd"
var modalswd = document.getElementById('modalswd');
var btnswd = document.getElementById('btnswd');
btnswd.onclick = function () {
    modalswd.style.display = "block";
};
var swd = document.getElementById("swdstats");
var clnswd = swd.cloneNode(true);
//
//16:10 Scroll of Town Portal "stp"
var modalstp = document.getElementById('modalstp');
var btnstp = document.getElementById('btnstp');
btnstp.onclick = function () {
    modalstp.style.display = "block";
};
var stp = document.getElementById("stpstats");
var clnstp = stp.cloneNode(true);
//
//17:1 Gothic Bar "gb"
var modalgb = document.getElementById('modalgb');
var btngb = document.getElementById('btngb');
btngb.onclick = function () {
    modalgb.style.display = "block";
};
var gb = document.getElementById("gbstats");
var clngb = gb.cloneNode(true);
//
//17:2 Ultimate Axe "ua"
var modalua = document.getElementById('modalua');
var btnua = document.getElementById('btnua');
btnua.onclick = function () {
    modalua.style.display = "block";
};
var ua = document.getElementById("uastats");
var clnua = ua.cloneNode(true);
//
//17:3 Slayer's Spear "sss"
var modalsss = document.getElementById('modalsss');
var btnsss = document.getElementById('btnsss');
btnsss.onclick = function () {
    modalsss.style.display = "block";
};
var sss = document.getElementById("sssstats");
var clnsss = sss.cloneNode(true);
//
//17:4 Wolf's Lyre "wl"
var modalwl = document.getElementById('modalwl');
var btnwl = document.getElementById('btnwl');
btnwl.onclick = function () {
    modalwl.style.display = "block";
};
var wl = document.getElementById("wlstats");
var clnwl = wl.cloneNode(true);
//
//17:5 Scimtar's Scepter "scs"
var modalscs = document.getElementById('modalscs');
var btnscs = document.getElementById('btnscs');
btnscs.onclick = function () {
    modalscs.style.display = "block";
};
var scs = document.getElementById("scsstats");
var clnscs = scs.cloneNode(true);
//
//17:6 Scintillating Axe "sca"
var modalsca = document.getElementById('modalsca');
var btnsca = document.getElementById('btnsca');
btnsca.onclick = function () {
    modalsca.style.display = "block";
};
var sca = document.getElementById("scastats");
var clnsca = sca.cloneNode(true);
//
//17:7 Agile Gnome "agm"
var modalagm = document.getElementById('modalagm');
var btnagm = document.getElementById('btnagm');
btnagm.onclick = function () {
    modalagm.style.display = "block";
};
var agm = document.getElementById("agmstats");
var clnagm = agm.cloneNode(true);
//
//17:8 Powerstone "pow"
var modalpow = document.getElementById('modalpow');
var btnpow = document.getElementById('btnpow');
btnpow.onclick = function () {
    modalpow.style.display = "block";
};
var pow = document.getElementById("powstats");
var clnpow = pow.cloneNode(true);
//
//17:9 Ying "yi"
var modalyi = document.getElementById('modalyi');
var btnyi = document.getElementById('btnyi');
btnyi.onclick = function () {
    modalyi.style.display = "block";
};
var yi = document.getElementById("yistats");
var clnyi = yi.cloneNode(true);
//
//17:10 Celestial Sapphire "cspp"
var modalcspp = document.getElementById('modalcspp');
var btncspp = document.getElementById('btncspp');
btncspp.onclick = function () {
    modalcspp.style.display = "block";
};
var cspp = document.getElementById("csppstats");
var clncspp = cspp.cloneNode(true);
//
//17:11 Periapt Stone "ps"
var modalps = document.getElementById('modalps');
var btnps = document.getElementById('btnps');
btnps.onclick = function () {
    modalps.style.display = "block";
};
var ps = document.getElementById("psstats");
var clnps = ps.cloneNode(true);
//
//17:12 Yang "ya"
var modalya = document.getElementById('modalya');
var btnya = document.getElementById('btnya');
btnya.onclick = function () {
    modalya.style.display = "block";
};
var ya = document.getElementById("yastats");
var clnya = ya.cloneNode(true);
//
//22:1 Dragonhawk Rider "dr"
var modaldr = document.getElementById('modaldr');
var btndr = document.getElementById('btndr');
btndr.onclick = function () {
    modaldr.style.display = "block";
};
var dr = document.getElementById("drstats");
var clndr = dr.cloneNode(true);
//
//18:1 Magic Vault "mv"
var modalmv = document.getElementById('modalmv');
var btnmv = document.getElementById('btnmv');
btnmv.onclick = function () {
    modalmv.style.display = "block";
};
var mv = document.getElementById("mvstats");
var clnmv = mv.cloneNode(true);
//
//18:2 Energy Bulb "ebb"
var modalebb = document.getElementById('modalebb');
var btnebb = document.getElementById('btnebb');
btnebb.onclick = function () {
    modalebb.style.display = "block";
};
var ebb = document.getElementById("ebbstats");
var clnebb = ebb.cloneNode(true);
//
//18:3 Espada Ropera "er"
var modaler = document.getElementById('modaler');
var btner = document.getElementById('btner');
btner.onclick = function () {
    modaler.style.display = "block";
};
var er = document.getElementById("erstats");
var clner = er.cloneNode(true);
//
//19:1 Quilbeast Token "qt"
var modalqt = document.getElementById('modalqt');
var btnqt = document.getElementById('btnqt');
btnqt.onclick = function () {
    modalqt.style.display = "block";
};
var qt = document.getElementById("qtstats");
var clnqt = qt.cloneNode(true);
//
//19:2 Wolf Token "wt"
var modalwt = document.getElementById('modalwt');
var btnwt = document.getElementById('btnwt');
btnwt.onclick = function () {
    modalwt.style.display = "block";
};
var wt = document.getElementById("wtstats");
var clnwt = wt.cloneNode(true);
//
//19:3 Hawk Token "ht"
var modalht = document.getElementById('modalht');
var btnht = document.getElementById('btnht');
btnht.onclick = function () {
    modalht.style.display = "block";
};
var ht = document.getElementById("htstats");
var clnht = ht.cloneNode(true);
//
//19:4 Bear Token "brt"
var modalbrt = document.getElementById('modalbrt');
var btnbrt = document.getElementById('btnbrt');
btnbrt.onclick = function () {
    modalbrt.style.display = "block";
};
var brt = document.getElementById("brtstats");
var clnbrt = brt.cloneNode(true);
//

//Placeholders
//1:11 Full house
var dult6 = document.getElementById("dult6stats");
var clndult6 = dult6.cloneNode(true);








//Recipie 
//8:4 Wirt's Left Leg Recipie
var wllr = document.getElementById("wllrstats");
var clnwllr = wllr.cloneNode(true);

//8:5 Howling Drum Recipie
var hdr = document.getElementById("hdrstats");
var clnhdr = hdr.cloneNode(true);

//8:6 Barbarian's Skin Recipie
var bsr = document.getElementById("bsrstats");
var clnbsr = bsr.cloneNode(true);

//8:7 Crafter Recipie
var cre = document.getElementById("crestats");
var clncre = cre.cloneNode(true);
//

//8:9 Wizard's Jar Recipie
var wjr = document.getElementById("wjrstats");
var clnwjr = wjr.cloneNode(true);

//8:11 Mystical Helm Recipie
var mhr = document.getElementById("mhrstats");
var clnmhr = mhr.cloneNode(true);

//***************
//************
//
//Template: Uncomment to use!
//var modal = document.getElementById('modal');
//var btn = document.getElementById('btn');
//btn.onclick = function () {
//    modal.style.display = "block";
//};
//var = document.getElementById("stats");
//var cln = .cloneNode(true);
//
//Placeholder:1 Tome of Power (5) "t5"
var t5 = document.getElementById("t5stats");
var clnt5 = t5.cloneNode(true);

//
//
//Items: Modal Content
//
//1:1 Moo T-shirt "mootshirt"
//Modal: item copy from main page
var mootshirt = document.getElementById('mootshirtstats');
var btnmootshirt = document.getElementById('btnmootshirt');
var clnmootshirt = mootshirt.cloneNode(true);
//Change ID's of original items so that cloned items have a unique ID
clnmootshirt.id = "mootshirtstats_1";
btnmootshirt.id = 'btnmootshirt_1';
//Moo Moo t-shirt (1)
document.getElementById("mootshirtmoomootshirt").appendChild(clnmoomootshirt);
//Moo t-shirt (1)
document.getElementById("mootshirt").appendChild(clnmootshirt);
//Orb of Fire (1)
document.getElementById('mootshirtoof').appendChild(clnoof);
//Orb of Frost (1)
document.getElementById('mootshirtof').appendChild(clnof);
//Orb of Shadow (1)
document.getElementById('mootshirtoos').appendChild(clnoos);
//Orb of Light (1)
document.getElementById('mootshirtool').appendChild(clnool);
//Mithril-shirt (1)
document.getElementById('mootshirtms').appendChild(clnms);


//1:2 Halberd Axe "halberd"
//Ragnarok (1)
document.getElementById('halberdtop').appendChild(clnrag);
//Halberd Axe (1)
document.getElementById("halberd").appendChild(clnhalberd);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('halberdoof').appendChild(clnoof);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('halberdof').appendChild(clnof);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('halberdoos').appendChild(clnoos);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('halberdool').appendChild(clnool);
//Imperial Axe (1)
document.getElementById('halberdiaxe').appendChild(clniaxe);
//Kerchek's Soul (1)
document.getElementById("halberdk1m").appendChild(clnk1m);



//1:3 Enchanted Tree "etree"
//Book of Knowledge (1)
document.getElementById("etreebok").appendChild(clnbok);
//For loaction 1 (1)
document.getElementById("etree1").appendChild(clnetree);
//For loaction 2
clnetree = etree.cloneNode(true);
document.getElementById("etree2").appendChild(clnetree);
//For loaction 3
clnetree = etree.cloneNode(true);
document.getElementById("etree3").appendChild(clnetree);
//For loaction 4
clnetree = etree.cloneNode(true);
document.getElementById("etree4").appendChild(clnetree);


//1:4 Moo Moo T-shirt "moomootshirt"
//Moo Moo T-shirt
clnmoomootshirt = moomootshirt.cloneNode(true);
document.getElementById("moomootshirt").appendChild(clnmoomootshirt);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('moomootshirtoof').appendChild(clnoof);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('moomootshirtof').appendChild(clnof);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('moomootshirtoos').appendChild(clnoos);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('moomootshirtool').appendChild(clnool);
//Moo T-shirt
clnmootshirt = mootshirt.cloneNode(true);
clnmootshirt.id = "mootshirtstats_2";
btnmootshirt.id = 'btnmootshirt_2';
document.getElementById("moomootshirtmootshirt").appendChild(clnmootshirt);


//1:5 Sassy's Cloak "sassy"
//Sassy's Cloak (1)
document.getElementById("sassy").appendChild(clnsassy);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('sassyoof').appendChild(clnoof);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('sassyof').appendChild(clnof);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('sassyoos').appendChild(clnoos);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('sassyool').appendChild(clnool);
//Elune's Cloak (1)
document.getElementById('sassyec').appendChild(clnec);


//1:6 Book of Knowledge
//Book of Knoweldge
clnbok = bok.cloneNode(true);
document.getElementById("bok").appendChild(clnbok);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('bokoof').appendChild(clnoof);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('bokof').appendChild(clnof);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('bokoos').appendChild(clnoos);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('bokool').appendChild(clnool);
//Enchanted Tree
clnetree = etree.cloneNode(true);
document.getElementById("boketree").appendChild(clnetree);


//1:7 Ragnarok
clnrag = rag.cloneNode(true);
document.getElementById("rag").appendChild(clnrag);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('ragoos').appendChild(clnoos);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('ragool').appendChild(clnool);
//Halberd Axe
clnhalberd = halberd.cloneNode(true);
document.getElementById("raghalberd").appendChild(clnhalberd);
//Simplicity axe (1)
document.getElementById('ragsax').appendChild(clnsax);
//Energy Bulb (1)
document.getElementById('ragebb').appendChild(clnebb);


//1:8 Tectonic
//Riteous Assault (1)
document.getElementById('tecra').appendChild(clnra);
//Tectonic (1)
document.getElementById("tec").appendChild(clntec);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('tecoof').appendChild(clnoof);
//Orb of Frost 
clnof = of .cloneNode(true);
document.getElementById('tecof').appendChild(clnof);
//Orb of Shadow 
clnoos = oos.cloneNode(true);
document.getElementById('tecoos').appendChild(clnoos);
//Orb of Light 
clnool = ool.cloneNode(true);
document.getElementById('tecool').appendChild(clnool);
//Mattock (1)
document.getElementById('tecmtk').appendChild(clnmtk);
//Tonic (1)
document.getElementById('tectc').appendChild(clntc);


//1:9 Mask of Valor (1)
document.getElementById("maskv").appendChild(clnmaskv);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('maskvoof').appendChild(clnoof);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('maskvof').appendChild(clnof);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('maskvoos').appendChild(clnoos);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('maskvool').appendChild(clnool);
//Doom Horn (1)
document.getElementById("maskvdoomh").appendChild(clndoomh);
// Tome of Power 1 (1)
document.getElementById("maskvt1").appendChild(clnt1);
// 1,000,000 Gold
//TODO

//1:10 Holy Aura (1)
document.getElementById("holya").appendChild(clnholya);
//Eternal Aura (1)
document.getElementById("holyaeta").appendChild(clneta);
//Tome of Power 5 (1)
document.getElementById('holyat5').appendChild(clnt5);

//1.11 Deomic Ultimate (1)
document.getElementById("dult").appendChild(clndult);
//Ultimate (1)
document.getElementById("dultult").appendChild(clnult);
//Full House (1)
document.getElementById("dult6").appendChild(clndult6);

//2:1 Doom Horn
//Mask of Valor
clnmaskv = maskv.cloneNode(true);
document.getElementById("doomhtop").appendChild(clnmaskv);
//Doom Horn
clndoomh = doomh.cloneNode(true);
document.getElementById("doomh").appendChild(clndoomh);

//2:2 Jagged Sword
//Dual Sword (1)
document.getElementById("jagstop").append(clnduals);
//Jagged Sword (1)
document.getElementById("jags").appendChild(clnjags);

//2:3 Jagged Blade
//Dual Sword
clnduals = duals.cloneNode(true);
document.getElementById("jagbtop").appendChild(clnduals);
//Jagged Blade (1)
document.getElementById("jagb").appendChild(clnjagb);

//2:4 Demon Edge
//Ultimate
clnult = ult.cloneNode(true);
document.getElementById("dedgtop").appendChild(clnult);
//Demon Edge (1)
document.getElementById("dedg").appendChild(clndedg);

//2:5 Gem of Shadow "gem"
//Gem of Shadow (1)
document.getElementById("gem").appendChild(clngem);
//Kerchek's Soul
clnk1m = k1m.cloneNode(true);
document.getElementById("gemk1m").appendChild(clnk1m);

//2:6 Immunity (1)
document.getElementById("imm").appendChild(clnimm);
//2:7 Replication (1)
document.getElementById("rep").appendChild(clnrep);
//2:8 Balnazzar's Hand (1)
document.getElementById("bhand").appendChild(clnbhand);
//2:9 Eternal Aura
//Holy Aura
clnholya = holya.cloneNode(true);
document.getElementById("etatop").appendChild(clnholya);
//Eternal Aura
clneta = eta.cloneNode(true);
document.getElementById("eta").appendChild(clneta);

//2.10 Dual Sword
//Ultimate
clnult = ult.cloneNode(true);
document.getElementById("dualstop").appendChild(clnult);
//Dual Sword
clnduals = duals.cloneNode(true);
document.getElementById("duals").appendChild(clnduals);
//Jagged Sword
clnjags = jags.cloneNode(true);
document.getElementById("dualsjags").appendChild(clnjags);
//Jagged Blade
clnjagb = jagb.cloneNode(true);
document.getElementById("dualsjagb").appendChild(clnjagb);

//2:11 Ultimate
//Demonic Ultimate
clndult = dult.cloneNode(true);
document.getElementById("ulttop").appendChild(clndult);
//Ultimate
clnult = ult.cloneNode(true);
document.getElementById("ult").appendChild(clnult);
//Dualsword
clnduals = duals.cloneNode(true);
document.getElementById("ultduals").appendChild(clnduals);
//Demon Edge
clndedg = dedg.cloneNode(true);
document.getElementById("ultdedg").appendChild(clndedg);

//3:1 Ani Cages "ac" (1)
document.getElementById("ac").appendChild(clnac);
// Cage Large (1)
document.getElementById("aclc").appendChild(clnlc);
// Cage Medium (1)
document.getElementById("accm").appendChild(clncm);
//Cage Small (1)
document.getElementById("accgs").appendChild(clncgs);
//Secret Place (1)
document.getElementById("acsecp").appendChild(clnsecp);

//3:2 Cage Large "lc"
//Ani Cages
clnac = ac.cloneNode(true);
document.getElementById("lcac").appendChild(clnac);
//Cage Large
clnlc = lc.cloneNode(true);
document.getElementById("lc").appendChild(clnlc);
//Rat (1)
var rat = document.getElementById("ratstats");
var clnrat = rat.cloneNode(true);
document.getElementById("lcrat").appendChild(clnrat);
//Seal (1)
var sea = document.getElementById("seastats");
var clnsea = sea.cloneNode(true);
document.getElementById("lcsea").appendChild(clnsea);
//Sheep (1)
var she = document.getElementById("shestats");
var clnshe = she.cloneNode(true);
document.getElementById("lcshe").appendChild(clnshe);
//Skink (1)
var ski = document.getElementById("skistats");
var clnski = ski.cloneNode(true);
document.getElementById("lcski").appendChild(clnski);
//Stag (1)
var stag = document.getElementById("stagstats");
var clnstag = stag.cloneNode(true);
document.getElementById("lcstag").appendChild(clnstag);
//Recipe

//3:3 Cage Medium "cm"
//Ani Cages
clnac = ac.cloneNode(true);
document.getElementById("cmac").appendChild(clnac);
//Cage Medium
clncm = cm.cloneNode(true);
document.getElementById("cm").appendChild(clncm);
//Hermit Crab (1)
var hcr = document.getElementById("hcrstats");
var clnhcr = hcr.cloneNode(true);
document.getElementById("cmhcr").appendChild(clnhcr);
//Penguin (1)
var pen = document.getElementById("penstats");
var clnpen = pen.cloneNode(true);
document.getElementById("cmpen").appendChild(clnpen);
//Pig (1)
var pig = document.getElementById("pigstats");
var clnpig = pig.cloneNode(true);
document.getElementById("cmpig").appendChild(clnpig);
//Rabbit (1)
var rab = document.getElementById("rabstats");
var clnrab = rab.cloneNode(true);
document.getElementById("cmrab").appendChild(clnrab);
//Raccoon (1)
var rac = document.getElementById("racstats");
var clnrac = rac.cloneNode(true);
document.getElementById("cmrac").appendChild(clnrac);
//Recipe

//3:4 Cage Small "cgs"
//Ani Cages
clnac = ac.cloneNode(true);
document.getElementById("cgsac").appendChild(clnac);
//Cage small
clncgs = cgs.cloneNode(true);
document.getElementById("cgs").appendChild(clncgs);
//Dog (1)
var dog = document.getElementById("dogstats");
var clndog = dog.cloneNode(true);
document.getElementById("cgsdog").appendChild(clndog);
//Chicken (1)
var chi = document.getElementById("chistats");
var clnchi = chi.cloneNode(true);
document.getElementById("cgschi").appendChild(clnchi);
//Crab (1)
var cra = document.getElementById("crastats");
var clncra = cra.cloneNode(true);
document.getElementById("cgscra").appendChild(clncra);
//Fel Boar (1)
var fel = document.getElementById("felstats");
var clnfel = fel.cloneNode(true);
document.getElementById("cgsfel").appendChild(clnfel);
//Frog (1)
document.getElementById("cgsfro").appendChild(clnfro);

//3:5 Frog "fro"
//Cage Small
clncgs = cgs.cloneNode(true);
document.getElementById("frocgs").appendChild(clncgs);
//Frog
clnfro = fro.cloneNode(true);
document.getElementById("fro").appendChild(clnfro);


//3:6 Satanic Chicken "stc"
//Cage Small
clncgs = cgs.cloneNode(true);
document.getElementById("stccgs").appendChild(clncgs);
//Satanic Chicken (1)
document.getElementById("stc").appendChild(clnstc);
//Chicken
clnchi = chi.cloneNode(true);
document.getElementById('stcchi').appendChild(clnchi);
//Energy Bulb
clnebb = ebb.cloneNode(true);
document.getElementById('stcebb').appendChild(clnebb);

//3:7 Animals "an"
//Cage Small
clncgs = cgs.cloneNode(true);
document.getElementById("ancgs").appendChild(clncgs);
//Cage Medium
clncm = cm.cloneNode(true);
document.getElementById("ancm").appendChild(clncm);
//Cage Large
clnlc = lc.cloneNode(true);
document.getElementById("anlc").appendChild(clnlc);
//Satanic Chicken
clnstc = stc.cloneNode(true);
document.getElementById("anstc").appendChild(clnstc);
//NE Barrels 

//3:8 Runes "run"
//Snow trees


//3:9 Explosive Barrel "eba" (1)
document.getElementById("eba").appendChild(clneba);

//3:10 Secret Place "secp"
//Ani cages
clnac = ac.cloneNode(true);
document.getElementById("secpac").appendChild(clnac);
//Frostguard (1)
document.getElementById("secpfg").appendChild(clnfg);

//3:11 Fountain of Thunderbluff / Rexxar's Shop

//3:12 Kerchek's Soul / 1M Gold "k1m"
//Evil Kerchek
//Gem of Shadow
clngem = gem.cloneNode(true);
document.getElementById("k1mgem").appendChild(clngem);
//1M Gold
//Kerchek's Soul
clnk1m = k1m.cloneNode(true);
document.getElementById("k1m").appendChild(clnk1m);
//Halberd
clnhalberd = halberd.cloneNode(true);
document.getElementById("k1mhalberd").appendChild(clnhalberd);
//Tome of Power
clnt1 = t1.cloneNode(true);
document.getElementById("k1mt1").appendChild(clnt1);
//Kill Gul'dan

//3:13 Tomoe of Power (1) "t1"
//Mask of Valor
clnmaskv = maskv.cloneNode(true);
document.getElementById("t1maskv").appendChild(clnmaskv);
//Holy Aura
clnholya = holya.cloneNode(true);
document.getElementById("t1holya").appendChild(clnholya);
//Tome of Power
clnt1 = t1.cloneNode(true);
document.getElementById("t1").appendChild(clnt1);

//4:1 Hastarium "hast"
//Rapier (1)
document.getElementById("hastrap").appendChild(clnrap);
//Stormbringer (1)
document.getElementById("hastsbr").appendChild(clnsbr);
//Mandolin (1)
document.getElementById("hastmdo").appendChild(clnmdo);
//Swiss Voulge (1)
document.getElementById("hastsv").appendChild(clnsv);
//Hastarium (1)
document.getElementById("hast").appendChild(clnhast);

//4:2 Javelin "jav"
//Oritsuru (1)
document.getElementById("javosr").appendChild(clnosr);
//Javelin (1)
document.getElementById('jav').appendChild(clnjav);

//4:3 Savior's Claw "savcl"
//Rapier
clnrap = rap.cloneNode(true);
document.getElementById("savclrap").appendChild(clnrap);
//Banded Mail (1)
document.getElementById("savclbm").appendChild(clnbm);
//Savior's Claw (1)
document.getElementById('savcl').appendChild(clnsavcl);

//4:4 Evil Soul "esoul"
//Gem of Shadow
clngem = gem.cloneNode(true);
document.getElementById("esoulgem").appendChild(clngem);
//Magtheridon (1)
document.getElementById('esoulmgd').appendChild(clnmgd);
//Soul Reaver (1)
document.getElementById('esoulsr').appendChild(clnsr);
//Evil Soul (1)
document.getElementById('esoul').appendChild(clnesoul);

//4:5 Warhammer "warh"
//Mattock
clnmtk = mtk.cloneNode(true);
document.getElementById('warhmtk').appendChild(clnmtk);
//Clairaudience (1)
document.getElementById('warhcla').appendChild(clncla);
//Warhammer (1)
document.getElementById('warh').appendChild(clnwarh);

//4:6 Imperial Axe "iaxe"
//Halberd Axe
clnhalberd = halberd.cloneNode(true);
document.getElementById("iaxehalberd").appendChild(clnhalberd);
//Tomahawk (1)
document.getElementById("iaxethk").appendChild(clnthk);
//Swiss Voulge
clnsv = sv.cloneNode(true);
document.getElementById("iaxesv").appendChild(clnsv);
//Imperial Axe
clniaxe = iaxe.cloneNode(true);
document.getElementById('iaxe').appendChild(clniaxe);

//4:7 Swordstaff "ss"
//Tonbogiri (1)
document.getElementById('sstbg').appendChild(clntbg);
//Kusanagi (1)
document.getElementById('ssks').appendChild(clnks);
//Deadly Kris (1)
document.getElementById('ssdk').appendChild(clndk);
//Tomahawk
clnthk = thk.cloneNode(true);
document.getElementById('ssthk').appendChild(clnthk);
//Rapier
clnrap = rap.cloneNode(true);
document.getElementById('ssrap').appendChild(clnrap);
//Necromancy (1)
document.getElementById('ssnc').appendChild(clnnc);
//Soul Reaver
clnsr = sr.cloneNode(true);
document.getElementById('sssr').appendChild(clnsr);
//Astral Reaver (1)
document.getElementById('ssar').appendChild(clnar);
//Swordstaff (1)
document.getElementById('ss').appendChild(clnss);

//4:8 Coral Blades "cbla"
//Glory Axe (1)
document.getElementById('cblaga').appendChild(clnga);
//Coral Blades (1)
document.getElementById('cbla').appendChild(clncbla);

//4:9 Red Boots "rboo"
//Wirt's Left Leg (1)
document.getElementById('rboowll').appendChild(clnwll);
//Red Boots (1)
document.getElementById('rboo').appendChild(clnrboo);

//4:10 Ruthless Gauntlet "rgau"
//Wirt's Left Leg
clnwll = wll.cloneNode(true);
document.getElementById('rgauwll').appendChild(clnwll);
//Armguard (1)
document.getElementById('rgauagu').appendChild(clnagu);
//Scimtar (1)
document.getElementById('rgausct').appendChild(clnsct);
//Ruthless Gauntlet (1)
document.getElementById('rgau').appendChild(clnrgau);

//4:11 Sapphire Ring "sri"
//Wizard's Jar (1)
document.getElementById('sriwj').appendChild(clnwj);
//Rejuvenation (1)
document.getElementById('srirj').appendChild(clnrj);
//Sapphire Ring (1)
document.getElementById('sri').appendChild(clnsri);

//4:12 Heroism Mask "hma"
//Ethereal Buckler (1)
document.getElementById('hmaeth').appendChild(clneth);
//Porphyril (1)
document.getElementById('hmapyl').appendChild(clnpyl);
//Heroism Mask (1)
document.getElementById('hma').appendChild(clnhma);

//5:1 Leremias "ler"
//Unrighteous (1)
document.getElementById('lerur').appendChild(clnur);
//Leremias (1)
document.getElementById('ler').appendChild(clnler);

//5:2 Hood of Cunning "hoc"
//Sylvan Band (1)
document.getElementById('hocsyb').appendChild(clnsyb);
//Hood of Cunning (1)
document.getElementById('hoc').appendChild(clnhoc);

//5:3 Villainous Shield "vs"
//Swasher (1)
document.getElementById('vssw').appendChild(clnsw);
//Villainous Shield (1)
document.getElementById('vs').appendChild(clnvs);

//5:4 Helm of King "hk"
//Wizard's Jar
clnwj = wj.cloneNode(true);
document.getElementById('hkwj').appendChild(clnwj);
//Sylvan Band
clnsyb = syb.cloneNode(true);
document.getElementById('hksyb').appendChild(clnsyb);
//Helm of King (1)
document.getElementById('hk').appendChild(clnhk);

//5:5 Breast Plate "bp"
//Righteous Plate (1)
document.getElementById('bprp').appendChild(clnrp);
//Alloyed (1)
document.getElementById('bpayd').appendChild(clnayd);
//Breast Plate (1)
document.getElementById('bp').appendChild(clnbp);

//5:6 Mithril-shirt "ms"
//Moo T-shirt
clnmootshirt = mootshirt.cloneNode(true);
document.getElementById('msmootshirt').appendChild(clnmootshirt);
//Banded Mail
clnbm = bm.cloneNode(true);
document.getElementById('msbm').appendChild(clnbm);
//Mithril-shirt
clnms = ms.cloneNode(true);
document.getElementById('ms').appendChild(clnms);

//5:7 Celestial Ring "cr"
//Mystical Helm (1)
document.getElementById('crmh').appendChild(clnmh);
//Banded Mail
clnbm = bm.cloneNode(true);
document.getElementById('crbm').appendChild(clnbm);
//Celestial Ring (1)
document.getElementById('cr').appendChild(clncr);

//5:8 Studded Leather "sl"
//Lexicon
clnlex = lex.cloneNode(true);
document.getElementById('sllex').appendChild(clnlex);
//Magtheridon
clnmgd = mgd.cloneNode(true);
document.getElementById('slmgd').appendChild(clnmgd);
//Studded Leather (1)
document.getElementById('sl').appendChild(clnsl);

//5:9 Elune's Cloak "ec"
//Sassy's Cloak
clnsassy = sassy.cloneNode(true);
document.getElementById('ecsassy').appendChild(clnsassy);
//Mystic Mace (1)
document.getElementById('ecmm').appendChild(clnmm);
//Alloyed
clnayd = ayd.cloneNode(true);
document.getElementById('ecayd').appendChild(clnayd);
//Elune's Cloak
clnec = ec.cloneNode(true);
document.getElementById('ec').appendChild(clnec);

//5:10 Sefer Buckler "sb"
//Ethereal Buckler
clneth = eth.cloneNode(true);
document.getElementById('sbeth').appendChild(clneth);
//Unrighteous
clnur = ur.cloneNode(true);
document.getElementById('sbur').appendChild(clnur);
//Sefer Buckler (1)
document.getElementById('sb').appendChild(clnsb);

//5:11 Helm of Hador "hh"
//Mystical Helm
clnmh = mh.cloneNode(true);
document.getElementById('hhmh').appendChild(clnmh);
//Armguard
clnagu = agu.cloneNode(true);
document.getElementById('hhagu').appendChild(clnagu);
//Helm of Hador (1)
document.getElementById('hh').appendChild(clnhh);

//5:12 Dagger of Escape "doe"
//Wirt's Left Leg
clnwll = wll.cloneNode(true);
document.getElementById('doewll').appendChild(clnwll);
//Dagger of Escape (1)
document.getElementById('doe').appendChild(clndoe);

//6:1 Gauntlets "gau"
//Barbarian's Skin (1)
document.getElementById('gaubs').appendChild(clnbs);
//Gauntlets (1)
document.getElementById('gau').appendChild(clngau);

//6:2 Slippers "sli"
//Crafter (1)
document.getElementById('slic').appendChild(clnc);
//Slippers (1)
document.getElementById('sli').appendChild(clnsli);

//6:3 Robe
//Howling Drum (1)
document.getElementById('robhd').appendChild(clnhd);
//Robe (1)
document.getElementById('rob').appendChild(clnrob);

//6:4 Good Soul "gsoul"
//Blood Stone (1)
document.getElementById('gsoulbls').appendChild(clnbls);
//Kusagiri (1)
document.getElementById('gsoulksg').appendChild(clnksg);
//Smasher (1)
document.getElementById('gsoulsm').appendChild(clnsm);
//Oshibo (1)
document.getElementById('gsoulosh').appendChild(clnosh);
//Sennor Kris (1)
document.getElementById('gsoulsk').appendChild(clnsk);
//Astral Reaver
clnar = ar.cloneNode(true);
document.getElementById('gsoular').appendChild(clnar);
//Good Soul (1)
document.getElementById('gsoul').appendChild(clngsoul);

//6:5 Belt of Ogre "ogr"
//Barbarian's Skin
clnbs = bs.cloneNode(true);
document.getElementById('ogrbs').appendChild(clnbs);
//Belt of Ogre (1)
document.getElementById('ogr').appendChild(clnogr);

//6:6 Quel'Thalas "qtl"
//Crafter
clnc = c.cloneNode(true);
document.getElementById('qtlc').appendChild(clnc);
//Quel'Thalas (1)
document.getElementById('qtl').appendChild(clnqtl);

//6:7 robe of the Magi "rotm" 
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('rotmhd').appendChild(clnhd);
//Robe of the Magi (1)
document.getElementById('rotm').appendChild(clnrotm);

//6:8 Neelanjali Ruby "njr"
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('njrhd').appendChild(clnhd);
//Barbarian's Skin
clnbs = bs.cloneNode(true);
document.getElementById('njrbs').appendChild(clnbs);
//Crafter
clnc = c.cloneNode(true);
document.getElementById('njrc').appendChild(clnc);
//Neelanjali Ruby (1)
document.getElementById('njr').appendChild(clnnjr);

//6:9 Masakari "msk"
//Kusanagi
clnks = ks.cloneNode(true);
document.getElementById('mskks').appendChild(clnks);
//Swasher
clnsw = sw.cloneNode(true);
document.getElementById('msksw').appendChild(clnsw);
//Frostguard
clnfg = fg.cloneNode(true);
document.getElementById('mskfg').appendChild(clnfg);
//Masakari (1)
document.getElementById('msk').appendChild(clnmsk);

//6:10 Aeglos "ago"
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('agotbg').appendChild(clntbg);
//Stormbringer
clnsbr = sbr.cloneNode(true);
document.getElementById('agosbr').appendChild(clnsbr);
//Mandolin
clnmdo = mdo.cloneNode(true);
document.getElementById('agomdo').appendChild(clnmdo);
//Morayshire (1)
document.getElementById('agomy').appendChild(clnmy);
//Frostguard
clnfg = fg.cloneNode(true);
document.getElementById('agofg').appendChild(clnfg);
//Gloryaxe
clnga = ga.cloneNode(true);
document.getElementById('agoga').appendChild(clnga);
//Aeglos(1)
document.getElementById('ago').appendChild(clnago);

//6:11  Chakram "chr"
//Purification
clnpst = pst.cloneNode(true);
document.getElementById('chrpst').appendChild(clnpst);
//Deadly Kris
clndk = dk.cloneNode(true);
document.getElementById('chrdk').appendChild(clndk);
//Rejuvenation
clnrj = rj.cloneNode(true);
document.getElementById('chrrj').appendChild(clnrj);
//Frostguard
clnfg = fg.cloneNode(true);
document.getElementById('chrfg').appendChild(clnfg);
//Dravel 1 (1)
document.getElementById('chrdvl').appendChild(clndvl);
//Sennor Kris
clnsk = sk.cloneNode(true);
document.getElementById('chrsk').appendChild(clnsk);
//Chakram (1)
document.getElementById('chr').appendChild(clnchr);

//6:12 Angel's Orb "ao"
//Wirt's Left Leg
clnwll = wll.cloneNode(true);
document.getElementById('aowll').appendChild(clnwll);
//Dravel 1
clndvl = dvl.cloneNode(true);
document.getElementById('aodvl').appendChild(clndvl);
//Smasher
clnsm = sm.cloneNode(true);
document.getElementById('aosm').appendChild(clnsm);
//Shards of Ice (1)
document.getElementById('aosoi').appendChild(clnsoi);
//Angel's Orb (1)
document.getElementById('ao').appendChild(clnao);

//7:1 Abyssimal "abi"
//Righteous Sword (1)
document.getElementById('abirs').appendChild(clnrs);
//Scimtar
clnsct = sct.cloneNode(true);
document.getElementById('abisct').appendChild(clnsct);
//Swiss Voulge
clnsw = sw.cloneNode(true);
document.getElementById('abisv').appendChild(clnsv);
//Abyssimal (1)
document.getElementById('abi').appendChild(clnabi);

//7:2 Searing Edge
//Sadistic (1)
document.getElementById('sesad').appendChild(clnsad);
//Searing Edge (1)
document.getElementById('se').appendChild(clnse);

//7:3 Climber's Hammer "ch"
//Serenity Assault (1)
document.getElementById('chsa').appendChild(clnsa);
//Crossbow (1)
document.getElementById('chcb').appendChild(clncb);
//Gyser (1)
document.getElementById('chgy').appendChild(clngy);
//Climber's Hammer (1)
document.getElementById('ch').appendChild(clnch);

//7:4 Chitinous Blade "ctb"
//Dragon's Knife
clndrk = drk.cloneNode(true);
document.getElementById('ctbdrk').appendChild(clndrk);
//Mystic Mace
clnmm = mm.cloneNode(true);
document.getElementById('ctbmm').appendChild(clnmm);
//Chitinous Blade (1)
document.getElementById('ctb').appendChild(clnctb);

//7:5 Assault "ass"
//Exorus (1)
document.getElementById('assexr').appendChild(clnexr);
//Swiss Voulge
clnsv = sv.cloneNode(true);
document.getElementById('asssv').appendChild(clnsv);
//Vajra (1)
document.getElementById('assvj').appendChild(clnvj);
//Zulfiqar (1)
document.getElementById('asszq').appendChild(clnzq);
//Kladenets (1)
document.getElementById('asskd').appendChild(clnkd);
//Assault (1)
document.getElementById('ass').appendChild(clnass);

//7:6 Vicious "vic"
//Exorus
clnexr = exr.cloneNode(true);
document.getElementById('vicexr').appendChild(clnexr);
//Vicious (1)
document.getElementById('vic').appendChild(clnvic);

//7:7 Copper Sword "cs"
//Exorus
clnexr = exr.cloneNode(true);
document.getElementById('csexr').appendChild(clnexr);
//Undead Boots (1)
document.getElementById('csub').appendChild(clnub);
//Vajra
clnvj = vj.cloneNode(true);
document.getElementById('csvj').appendChild(clnvj);
//Zulfiqar
clnzq = zq.cloneNode(true);
document.getElementById('cszq').appendChild(clnzq);
//Kladenets
clnkd = kd.cloneNode(true);
document.getElementById('cskd').appendChild(clnkd);
//Copper Sword (1)
document.getElementById('cs').appendChild(clncs);

//7:8 Archmagi Blade "ab"
//Simplicity Axe
clnsax = sax.cloneNode(true);
document.getElementById('absax').appendChild(clnsax);
//Archmagi Blade (1)
document.getElementById('ab').appendChild(clnab);

//7:9 Orb of Fire "oof"
//Moo T-shirt
clnmootshirt = mootshirt.cloneNode(true);
document.getElementById('oofmootshirt').appendChild(clnmootshirt);
//Halberd Axe
clnhalberd = halberd.cloneNode(true);
document.getElementById('oofhalberd').appendChild(clnhalberd);
//Moo Moo T-shirt
clnmoomootshirt = moomootshirt.cloneNode(true);
document.getElementById('oofmoomootshirt').appendChild(clnmoomootshirt);
//Sassy's Cloak
clnsassy = sassy.cloneNode(true);
document.getElementById('oofsassy').appendChild(clnsassy);
//Book of Knowledge
clnbok = bok.cloneNode(true);
document.getElementById('oofbok').appendChild(clnbok);
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('ooftec').appendChild(clntec);
//Mask of Valor
clnmaskv = maskv.cloneNode(true);
document.getElementById('oofmaskv').appendChild(clnmaskv);
//Kladenets
clnkd = kd.cloneNode(true);
document.getElementById('oofkd').appendChild(clnkd);
//Mithril Rod (1)
document.getElementById('oofmr').appendChild(clnmr);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('oof').appendChild(clnoof);

//7:10 Orb of Frost "of"
//Moo T-shirt
clnmootshirt = mootshirt.cloneNode(true);
document.getElementById('ofmootshirt').appendChild(clnmootshirt);
//Halberd Axe
clnhalberd = halberd.cloneNode(true);
document.getElementById('ofhalberd').appendChild(clnhalberd);
//Moo Moo T-shirt
clnmoomootshirt = moomootshirt.cloneNode(true);
document.getElementById('ofmoomootshirt').appendChild(clnmoomootshirt);
//Sassy's Cloak
clnsassy = sassy.cloneNode(true);
document.getElementById('ofsassy').appendChild(clnsassy);
//Book of Knowledge
clnbok = bok.cloneNode(true);
document.getElementById('ofbok').appendChild(clnbok);
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('oftec').appendChild(clntec);
//Mask of Valor
clnmaskv = maskv.cloneNode(true);
document.getElementById('ofmaskv').appendChild(clnmaskv);
//Vajra
clnvj = vj.cloneNode(true);
document.getElementById('ofvj').appendChild(clnvj);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('of').appendChild(clnof);

//7:11 Orb of Shadow "oos"
//Moo T-shirt
clnmootshirt = mootshirt.cloneNode(true);
document.getElementById('oosmootshirt').appendChild(clnmootshirt);
//Halberd Axe
clnhalberd = halberd.cloneNode(true);
document.getElementById('ooshalberd').appendChild(clnhalberd);
//Moo Moo T-shirt
clnmoomootshirt = moomootshirt.cloneNode(true);
document.getElementById('oosmoomootshirt').appendChild(clnmoomootshirt);
//Sassy's Cloak
clnsassy = sassy.cloneNode(true);
document.getElementById('oossassy').appendChild(clnsassy);
//Book of Knowledge
clnbok = bok.cloneNode(true);
document.getElementById('oosbok').appendChild(clnbok);
//Ragnarok
clnrag = rag.cloneNode(true);
document.getElementById('oosrag').appendChild(clnrag);
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('oostec').appendChild(clntec);
//Mask of Valor
clnmaskv = maskv.cloneNode(true);
document.getElementById('oosmaskv').appendChild(clnmaskv);
//Madolin
clnmdo = mdo.cloneNode(true);
document.getElementById('oosmdo').appendChild(clnmdo);
//Zulfiqar
clnzq = zq.cloneNode(true);
document.getElementById('ooszq').appendChild(clnzq);
//Ballista
clnb = b.cloneNode(true);
document.getElementById('oosb').appendChild(clnb);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('oos').appendChild(clnoos);

//7:12 Orb of Light "ool"
//Moo T-shirt
clnmootshirt = mootshirt.cloneNode(true);
document.getElementById('oolmootshirt').appendChild(clnmootshirt);
//Halberd Axe
clnhalberd = halberd.cloneNode(true);
document.getElementById('oolhalberd').appendChild(clnhalberd);
//Moo Moo T-shirt
clnmoomootshirt = moomootshirt.cloneNode(true);
document.getElementById('oolmoomootshirt').appendChild(clnmoomootshirt);
//Sassy's Cloak
clnsassy = sassy.cloneNode(true);
document.getElementById('oolsassy').appendChild(clnsassy);
//Book of Knowledge
clnbok = bok.cloneNode(true);
document.getElementById('oolbok').appendChild(clnbok);
//Ragnarok
clnrag = rag.cloneNode(true);
document.getElementById('oolrag').appendChild(clnrag);
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('ooltec').appendChild(clntec);
//Mask of Valor
clnmaskv = maskv.cloneNode(true);
document.getElementById('oolmaskv').appendChild(clnmaskv);
//Vajra
clnvj = vj.cloneNode(true);
document.getElementById('oolvj').appendChild(clnvj);
//Zulfiqar
clnzq = zq.cloneNode(true);
document.getElementById('oolzq').appendChild(clnzq);
//Kladenets
clnkd = kd.cloneNode(true);
document.getElementById('oolkd').appendChild(clnkd);
//War Club
clnwc = wc.cloneNode(true);
document.getElementById('oolwc').appendChild(clnwc);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('ool').appendChild(clnool);

//8:1 Omniscience "omn"
//Tomahawk
clnthk = thk.cloneNode(true);
document.getElementById('omnthk').appendChild(clnthk);
//Pendant of Flesh (1)
document.getElementById('omnpof').appendChild(clnpof);
//Kharas (1)
document.getElementById('omnkh').appendChild(clnkh);
//Omniscience (1) 
document.getElementById('omn').appendChild(clnomn);
//Celestial Sapphire (1)
document.getElementById('omncspp').appendChild(clncspp);
//Periapt Stone (1)
document.getElementById('omnps').appendChild(clnps);

//8:2 Ethereal Buckler "eth"
//Magtheridon
clnmgd = mgd.cloneNode(true);
document.getElementById('ethmgd').appendChild(clnmgd);
//Ethereal Buckler
clneth = eth.cloneNode(true);
document.getElementById('eth').appendChild(clneth);
//Herosim Mask
clnhma = hma.cloneNode(true);
document.getElementById('ethhma').appendChild(clnhma);
//Serfer Buckler
clnsb = sb.cloneNode(true);
document.getElementById('ethsb').appendChild(clnsb);

//8:3 Purification "pst"
//Intelligent (1)
document.getElementById('pstig').appendChild(clnig);
//Purification
clnpst = pst.cloneNode(true);
document.getElementById('pst').appendChild(clnpst);
//Chakram
clnchr = chr.cloneNode(true);
document.getElementById('pstchr').appendChild(clnchr);
//Periapt Stone
clnps = ps.cloneNode(true);
document.getElementById('pstps').appendChild(clnps);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('pstmv').appendChild(clnmv);

//8:4 Writ's Left Leg "wll"
//Undead Boots
clnub = ub.cloneNode(true);
document.getElementById('wllub').appendChild(clnub);
//Wirt's Left Leg
clnwll = wll.cloneNode(true);
document.getElementById('wll').appendChild(clnwll);
// Red Boots
clnrboo = rboo.cloneNode(true);
document.getElementById('wllrboo').appendChild(clnrboo);
// Angel's Orb
clnao = ao.cloneNode(true);
document.getElementById('wllao').appendChild(clnao);
// Dagger of Escape
clndoe = doe.cloneNode(true);
document.getElementById('wlldoe').appendChild(clndoe);
// Ruthless Gauntlet
clnrgau = rgau.cloneNode(true);
document.getElementById('wllrgau').appendChild(clnrgau);
// Wirt's Left Leg Recipie (1)
document.getElementById('wllr').appendChild(clnwllr);

//8:5 Howling Drum "hd"
//Medallion (1)
document.getElementById('hdmd').appendChild(clnmd);
//Morayshire
clnmy = my.cloneNode(true);
document.getElementById('hdmy').appendChild(clnmy);
//Grallen (1)
document.getElementById('hdgr').appendChild(clngr);
//Volhynia (1)
document.getElementById('hdvy').appendChild(clnvy);
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('hd').appendChild(clnhd);
//Robe of Magi
clnrotm = rotm.cloneNode(true);
document.getElementById('hdrotm').appendChild(clnrotm);
//Robe
clnrob = rob.cloneNode(true);
document.getElementById('hdrob').appendChild(clnrob);
//Neelanjali Ruby
clnnjr = njr.cloneNode(true);
document.getElementById('hdnjr').appendChild(clnnjr);
//Recipie (1)
document.getElementById('hdr').appendChild(clnhdr);


//8:6 Barbarian's Skin "bs"
//Medallion
clnmd = md.cloneNode(true);
document.getElementById('bsmd').appendChild(clnmd);
//Kusanagi
clnks = ks.cloneNode(true);
document.getElementById('bsks').appendChild(clnks);
//Mattock
clnmtk = mtk.cloneNode(true);
document.getElementById('bsmtk').appendChild(clnmtk);
//Barbarian's Skin
clnbs = bs.cloneNode(true);
document.getElementById('bs').appendChild(clnbs);
// Belt of Ogre
clnogr = ogr.cloneNode(true);
document.getElementById('bsogr').appendChild(clnogr);
//Gauntlets
clngau = gau.cloneNode(true);
document.getElementById('bsgau').appendChild(clngau);
//Neelanjali Ruby
clnnjr = njr.cloneNode(true);
document.getElementById('bsnjr').appendChild(clnnjr);
//Recipie (1)
document.getElementById('bsr').appendChild(clnbsr);

//8:7  Crafter "c"
//Medallion
clnmd = md.cloneNode(true);
document.getElementById('cmd').appendChild(clnmd);
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('ctbg').appendChild(clntbg);
//Morayshire
clnmy = my.cloneNode(true);
document.getElementById('cmy').appendChild(clnmy);
//Gloryaxe
clnga = ga.cloneNode(true);
document.getElementById('cga').appendChild(clnga);
//Crafter
clnc = c.cloneNode(true);
document.getElementById('c').appendChild(clnc);
// Quel'Thalas
clnqtl = qtl.cloneNode(true);
document.getElementById('cqtl').appendChild(clnqtl);
//Slippers
clnsli = sli.cloneNode(true);
document.getElementById('csli').appendChild(clnsli);
//Neelanjali Ruby
clnnjr = njr.cloneNode(true);
document.getElementById('cnjr').appendChild(clnnjr);
//Recipie (1)
document.getElementById('cre').appendChild(clncre);

//8:8 Villager "v"
//Dragonhawk Rider (1)
document.getElementById('vdr').appendChild(clndr);
//Villager (1)
document.getElementById('v').appendChild(clnv);
//Child
//Recipe

//8:9 Wizard's Jar "wj"
//Righteous Plate
clnrp = rp.cloneNode(true);
document.getElementById('wjrp').appendChild(clnrp);
//Wizard's Jar
clnwj = wj.cloneNode(true);
document.getElementById('wj').appendChild(clnwj);
//Sapphire Ring
clnsri = sri.cloneNode(true);
document.getElementById('wjsri').appendChild(clnsri);
//Helm of King
clnhk = hk.cloneNode(true);
document.getElementById('wjhk').appendChild(clnhk);
//Recipie (1)
document.getElementById('wjr').appendChild(clnwjr);

//8:10 Sylvan Band "sb"
//Oritsuru
clnosr = osr.cloneNode(true);
document.getElementById('sybosr').appendChild(clnosr)
//Sylvan Band
clnsyb = syb.cloneNode(true);
document.getElementById('syb').appendChild(clnsyb);
//Helm of King
clnhk = hk.cloneNode(true);
document.getElementById('sybhk').appendChild(clnhk);
//Hood of Cunning
clnhoc = hoc.cloneNode(true);
document.getElementById('sybhoc').appendChild(clnhoc);
//Recipe

//8:11 Mystical Helm "mh"
//Mystic Mace
clnmm = mm.cloneNode(true);
document.getElementById('mhmm').appendChild(clnmm);
//Mystical Helm
clnmh = mh.cloneNode(true);
document.getElementById('mh').appendChild(clnmh);
// Celestial Ring
clncr = cr.cloneNode(true);
document.getElementById('mhcr').appendChild(clncr);
//Helm of Hador
clnhh = hh.cloneNode(true);
document.getElementById('mhhh').appendChild(clnhh);
//Recipie (1)
clnmhr = mhr.cloneNode(true);
document.getElementById('mhr').appendChild(clnmhr);

//9:1 Medallion "md"
//Kharas
clnkh = kh.cloneNode(true);
document.getElementById('mdkh').appendChild(clnkh);
//Intelligent
clnig = ig.cloneNode(true);
document.getElementById('mdig').appendChild(clnig);
//Medallion
clnmd = md.cloneNode(true);
document.getElementById('md').appendChild(clnmd);
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('mdhd').appendChild(clnhd);
//Barbarian's Skin
clnbs = bs.cloneNode(true);
document.getElementById('mdbs').appendChild(clnbs);
//Crafter
clnc = c.cloneNode(true);
document.getElementById('mdc').appendChild(clnc);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('mdmv').appendChild(clnmv);

//9:2 Tonbogiri "tbg"
//Righteous Sword
clnrs = rs.cloneNode(true);
document.getElementById('tbgrs').appendChild(clnrs);
//Kusagiri
clnksg = ksg.cloneNode(true);
document.getElementById('tbgksg').appendChild(clnksg);
//Smasher
clnsm = sm.cloneNode(true);
document.getElementById('tbgsm').appendChild(clnsm);
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('tbg').appendChild(clntbg);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('tbgss').appendChild(clnss);
//Aeglos
clnago = ago.cloneNode(true);
document.getElementById('tbgago').appendChild(clnago);
//Crafter
clnc = c.cloneNode(true);
document.getElementById('tbgc').appendChild(clnc);
//Recipe

//9:3 Kusanagi "ks"
//Kusagiri
clnksg = ksg.cloneNode(true);
document.getElementById('ksksg').appendChild(clnksg);
//Oshibo
clnosh = osh.cloneNode(true);
document.getElementById('ksosh').appendChild(clnosh);
//Kusanagi
clnks = ks.cloneNode(true);
document.getElementById('ks').appendChild(clnks);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('ksss').appendChild(clnss);
//Barbarian's Skin
clnbs = bs.cloneNode(true);
document.getElementById('ksbs').appendChild(clnbs);
//Masakari
clnmsk = msk.cloneNode(true);
document.getElementById('ksmsk').appendChild(clnmsk);
//Recipe

//9:4 Deadly Kirs "dk"
//Sennor Kris
clnsk = sk.cloneNode(true);
document.getElementById('dksk').appendChild(clnsk);
//Tonic
clntc = tc.cloneNode(true);
document.getElementById('dktc').appendChild(clntc);
//Deadly Kris
clndk = dk.cloneNode(true);
document.getElementById('dk').appendChild(clndk);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('dkss1').appendChild(clnss);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('dkss2').appendChild(clnss);
//Chakram
clnchr = chr.cloneNode(true);
document.getElementById('dkchr').appendChild(clnchr);
//Recipe

//9:5 Tomahawk "thk"
//Simplicity Axe
clnsax = sax.cloneNode(true);
document.getElementById('thksax').appendChild(clnsax);
//Tomahawk
clnthk = thk.cloneNode(true);
document.getElementById('thk').appendChild(clnthk);
//Imperial Axe
clniaxe = iaxe.cloneNode(true);
document.getElementById('thkiaxe').appendChild(clniaxe);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('thkss').appendChild(clnss);
//Omniscience
clnomn = omn.cloneNode(true);
document.getElementById('thkomn').appendChild(clnomn);

//9:6 Armguard "agu"
//Necromancy
clnnc = nc.cloneNode(true);
document.getElementById('agunc').appendChild(clnnc);
//Unholy Bible
clnunb = unb.cloneNode(true);
document.getElementById('aguunb').appendChild(clnunb);
//Armguard
clnagu = agu.cloneNode(true);
document.getElementById('agu').appendChild(clnagu);
//Ruthless Gauntlet
clnrgau = rgau.cloneNode(true);
document.getElementById('agurgau').appendChild(clnrgau);
//Helm of Hador
clnhh = hh.cloneNode(true);
document.getElementById('aguhh').appendChild(clnhh);
//Recipe

//9:7 Lexicon "lex"
//Aerogun
clnag = ag.cloneNode(true);
document.getElementById('lexag').appendChild(clnag);
//Lexicon
clnlex = lex.cloneNode(true);
document.getElementById('lex').appendChild(clnlex);
//Ruthless Guantlet
clnrgau = rgau.cloneNode(true);
document.getElementById('lexrgau').appendChild(clnrgau);
//Studded Leather
clnsl = sl.cloneNode(true);
document.getElementById('lexsl').appendChild(clnsl);
//Recipe

//9:8 Raiper "rap"
//Frostguard
clnfg = fg.cloneNode(true);
document.getElementById('rapfg').appendChild(clnfg);
//Scimtar
clnsct = sct.cloneNode(true);
document.getElementById('rapsct').appendChild(clnsct);
//Rapier
clnrap = rap.cloneNode(true);
document.getElementById('rap').appendChild(clnrap);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('rapss').appendChild(clnss);
//Savior's Claw
clnsavcl = savcl.cloneNode(true);
document.getElementById('rapsavcl').appendChild(clnsavcl);
//Hastarium
clnhast = hast.cloneNode(true);
document.getElementById('raphast').appendChild(clnhast);
//Recipe

//9:9 Banded Mail "bm"
//Kraken's Coat
clnkc = kc.cloneNode(true);
document.getElementById('bmkc').appendChild(clnkc);
//Banded Mail
clnbm = bm.cloneNode(true);
document.getElementById('bm').appendChild(clnbm);
//Savior's Claw
clnsavcl = savcl.cloneNode(true);
document.getElementById('bmsavcl').appendChild(clnsavcl);
//Mithil Shirt
clnms = ms.cloneNode(true);
document.getElementById('bmms').appendChild(clnms);
//Celestial Ring
clncr = cr.cloneNode(true);
document.getElementById('bmcr').appendChild(clncr);
//Recipe

//9:10 Swasher "sw"
//Prismatic
clnprs = prs.cloneNode(true);
document.getElementById('swprs').appendChild(clnprs);
//Swasher
clnsw = sw.cloneNode(true);
document.getElementById('sw').appendChild(clnsw);
//Villainous Shield
clnvs = vs.cloneNode(true);
document.getElementById('swvs').appendChild(clnvs);
//Masakari
clnmsk = msk.cloneNode(true);
document.getElementById('swmsk').appendChild(clnmsk);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('swmv').appendChild(clnmv);
//Recipe

//9:11 Rejuvenation "rj"
//Prismatic
clnprs = prs.cloneNode(true);
document.getElementById('rjprs').appendChild(clnprs);
//Rejuvenation
clnrj = rj.cloneNode(true);
document.getElementById('rj').appendChild(clnrj);
//Sapphire Ring
clnsri = sri.cloneNode(true);
document.getElementById('rjsri').appendChild(clnsri);
//Chakram
clnchr = chr.cloneNode(true);
document.getElementById('rjchr').appendChild(clnchr);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('rjmv').appendChild(clnmv);
//Recipe

//10:1 Stormbringer "sbr"
//Magic Storms
clnmgs = mgs.cloneNode(true);
document.getElementById('sbrmgs').appendChild(clnmgs);
//Stormbringer
clnsbr = sbr.cloneNode(true);
document.getElementById('sbr').appendChild(clnsbr);
//Aeglos
clnago = ago.cloneNode(true);
document.getElementById('sbrago').appendChild(clnago);
//Hastarium
clnhast = hast.cloneNode(true);
document.getElementById('sbrhast').appendChild(clnhast);
//Recipe

//10:2 Mystic Spear "msp"
//Tonic
clntc = tc.cloneNode(true);
document.getElementById('msptc').appendChild(clntc);
//Mystic Spear
clnmsp = msp.cloneNode(true);
document.getElementById('msp').appendChild(clnmsp);
//Agile Gnome
clnagm = agm.cloneNode(true);
document.getElementById('mspagm').appendChild(clnagm);
//Powerstone
clnpow = pow.cloneNode(true);
document.getElementById('msppow').appendChild(clnpow);

//10:3 Mattock "mtk"
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('mtktec').appendChild(clntec);
//Mattock
clnmtk = mtk.cloneNode(true);
document.getElementById('mtk').appendChild(clnmtk);
//Warhammer
clnwarh = warh.cloneNode(true);
document.getElementById('mtkwarh').appendChild(clnwarh);
//Barbarian's Skin
clnbs = bs.cloneNode(true);
document.getElementById('mtkbs').appendChild(clnbs);
//Recipe

//10:4 Mandolin "mdo"
//Mithril Rod
clnmr = mr.cloneNode(true);
document.getElementById('mdomr').appendChild(clnmr);
//Mandolin
clnmdo = mdo.cloneNode(true);
document.getElementById('mdo').appendChild(clnmdo);
//Aeglos
clnago = ago.cloneNode(true);
document.getElementById('mdoago').appendChild(clnago);
//Orb of Shadows
clnoos = oos.cloneNode(true);
document.getElementById('mdooos').appendChild(clnoos);
//Hastarium
clnhast = hast.cloneNode(true);
document.getElementById('mdohast').appendChild(clnhast);

//10:5 Exorus "exr"
//Metalic Bow
clnmb = mb.cloneNode(true);
document.getElementById('exrmb').appendChild(clnmb);
//Exorus
clnexr = exr.cloneNode(true);
document.getElementById('exr').appendChild(clnexr);
//Vicious
clnvic = vic.cloneNode(true);
document.getElementById('exrvic').appendChild(clnvic);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('exrass').appendChild(clnass);
//Copper Sword
clncs = cs.cloneNode(true);
document.getElementById('exrcs').appendChild(clncs);
//Recipe

//10:6 Morayshire "my"
//Volhynia
clnvy = vy.cloneNode(true);
document.getElementById('myvy').appendChild(clnvy);
//Morayshire
clnmy = my.cloneNode(true);
document.getElementById('my').appendChild(clnmy);
//Aeglos
clnago = ago.cloneNode(true);
document.getElementById('myago').appendChild(clnago);
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('myhd').appendChild(clnhd);
//Crafter
clnc = c.cloneNode(true);
document.getElementById('myc').appendChild(clnc);
//Recipe

//10:7 Frostguard "fg"
//Shards of Ice
clnsoi = soi.cloneNode(true);
document.getElementById('fgsoi').appendChild(clnsoi);
//Frostguard
clnfg = fg.cloneNode(true);
document.getElementById('fg').appendChild(clnfg);
//Aeglos
clnago = ago.cloneNode(true);
document.getElementById('fgago').appendChild(clnago);
//Masakari
clnmsk = msk.cloneNode(true);
document.getElementById('fgmsk').appendChild(clnmsk);
//Chakram
clnchr = chr.cloneNode(true);
document.getElementById('fgchr').appendChild(clnchr);
//Rapier
clnrap = rap.cloneNode(true);
document.getElementById('fgrap1').appendChild(clnrap);
//or Rapier
clnrap = rap.cloneNode(true);
document.getElementById('fgrap2').appendChild(clnrap);
//Secret Place
clnsecp = secp.cloneNode(true);
document.getElementById('fgsecp').appendChild(clnsecp);

//10:8 Necromancy "nc"
//Warlock Skull
clnws = ws.cloneNode(true);
document.getElementById('ncws').appendChild(clnws);
//Necromancy
clnnc = nc.cloneNode(true);
document.getElementById('nc').appendChild(clnnc);
//Armguard
clnagu = agu.cloneNode(true);
document.getElementById('ncagu').appendChild(clnagu);
//Ultimate Axe
clnua = ua.cloneNode(true);
document.getElementById('ncua').appendChild(clnua);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('ncss').appendChild(clnss);
//Recipe

//10:9 Pendant of Flesh "pof"
//Blood Assault
clnba = ba.cloneNode(true);
document.getElementById('pofba').appendChild(clnba);
//Bloodstone
clnbls = bls.cloneNode(true);
document.getElementById('pofbls').appendChild(clnbls);
//Pendant of Flesh
clnpof = pof.cloneNode(true);
document.getElementById('pof').appendChild(clnpof);
//Omniscience
clnomn = omn.cloneNode(true);
document.getElementById('pofomn').appendChild(clnomn);
//Ying
clnyi = yi.cloneNode(true);
document.getElementById('pofyi').appendChild(clnyi);
//Yang
clnya = ya.cloneNode(true);
document.getElementById('pofya').appendChild(clnya);

//10:10 Prismatic "prs"
//Clairaudience
clncla = cla.cloneNode(true);
document.getElementById('prscla').appendChild(clncla);
//Prismatic
clnprs = prs.cloneNode(true);
document.getElementById('prs').appendChild(clnprs);
//Rejuvenation
clnrj = rj.cloneNode(true);
document.getElementById('prsrj').appendChild(clnrj);
//Swasher
clnsw = sw.cloneNode(true);
document.getElementById('prssw').appendChild(clnsw);
//Recipe

//10:11 Magtheridon "mgd"
//Righteous Plate
clnrp = rp.cloneNode(true);
document.getElementById('mgdrp').appendChild(clnrp);
//Alloyed
clnayd = ayd.cloneNode(true);
document.getElementById('mgdayd').appendChild(clnayd);
//Magtheridon
clnmgd = mgd.cloneNode(true);
document.getElementById('mgd').appendChild(clnmgd);
//Ethereal Buckler
clneth = eth.cloneNode(true);
document.getElementById('mgdeth').appendChild(clneth);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('mgdesoul').appendChild(clnesoul);
//Studded Leather
clnsl = sl.cloneNode(true);
document.getElementById('mgdsl').appendChild(clnsl);

//10:12 Dragon's Knife "drk"
//Hyper Ropera
clnhr = hr.cloneNode(true);
document.getElementById('drkhr').appendChild(clnhr);
//Dragon's Knife
clndrk = drk.cloneNode(true);
document.getElementById('drk').appendChild(clndrk);
//Chitinous Blade
clnctb = ctb.cloneNode(true);
document.getElementById('drkctb').appendChild(clnctb);
//Recipe

//11:1 Serentity Assault "sa"
//Righteous Assault
clnra = ra.cloneNode(true);
document.getElementById('sara').appendChild(clnra);
//Serenity Assault
clnsa = sa.cloneNode(true);
document.getElementById('sa').appendChild(clnsa);
//Climber's Hammer
clnch = ch.cloneNode(true);
document.getElementById('sach').appendChild(clnch);
//Wolf's Lyre
clnwl = wl.cloneNode(true);
document.getElementById('sawl').appendChild(clnwl);
//Powerstone
clnpow = pow.cloneNode(true);
document.getElementById('sapow').appendChild(clnpow);
//Recipe

//11:2 Righteous Sword
//Righteous Assault
clnra = ra.cloneNode(true);
document.getElementById('rsra').appendChild(clnra);
//Righteous Sword
clnrs = rs.cloneNode(true);
document.getElementById('rs').appendChild(clnrs);
//Abyssimal
clnabi = abi.cloneNode(true);
document.getElementById('rsabi').appendChild(clnabi);
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('rstbg').appendChild(clntbg);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('rsass').appendChild(clnass);
//Recipe

//11:3 Righteous Plate
//Righteous Assault
clnra = ra.cloneNode(true);
document.getElementById('rpra').appendChild(clnra);
//Righteous Plate
clnrp = rp.cloneNode(true);
document.getElementById('rp').appendChild(clnrp);
//Wizard's Jar
clnwj = wj.cloneNode(true);
document.getElementById('rpwj').appendChild(clnwj);
//Breat Plate
clnbp = bp.cloneNode(true);
document.getElementById('rpbp').appendChild(clnbp);
//Magtheridon
clnmgd = mgd.cloneNode(true);
document.getElementById('rpmgd').appendChild(clnmgd);
//Recipe

//11:4 Unrighteous "ur"
//Righteous Assault
clnra = ra.cloneNode(true);
document.getElementById('urra').appendChild(clnra);
//Unrighteous
clnur = ur.cloneNode(true);
document.getElementById('ur').appendChild(clnur);
//Leremias
clnler = ler.cloneNode(true);
document.getElementById('urler1').appendChild(clnler);
//Leremias
clnler = ler.cloneNode(true);
document.getElementById('urler2').appendChild(clnler);
//Sefer Buckler
clnsb = sb.cloneNode(true);
document.getElementById('ursb').appendChild(clnsb);
//Wolf's Lyre
clnwl = wl.cloneNode(true);
document.getElementById('urwl').appendChild(clnwl);

//11:5 Mystic Mace "mm"
//Mystic Mace
clnmm = mm.cloneNode(true);
document.getElementById('mm').appendChild(clnmm);
//Elune's Cloak
clnec = ec.cloneNode(true);
document.getElementById('mmec').appendChild(clnec);
//Chitinous Blade
clnctb = ctb.cloneNode(true);
document.getElementById('mmctb').appendChild(clnctb);
//Mystical Helm
clnmh = mh.cloneNode(true);
document.getElementById('mmmh').appendChild(clnmh);
//Recipe

//11:6 Scimtar "sct"
//Crossbow
clncb = cb.cloneNode(true);
document.getElementById('sctcb').appendChild(clncb);
//Scimtar
clnsct = sct.cloneNode(true);
document.getElementById('sct').appendChild(clnsct);
//Abyssimal
clnabi = abi.cloneNode(true);
document.getElementById('sctabi').appendChild(clnabi);
//Rapier
clnrap = rap.cloneNode(true);
document.getElementById('sctrap').appendChild(clnrap);
//Ruthless Gauntlet
clnrgau = rgau.cloneNode(true);
document.getElementById('sctrgau').appendChild(clnrgau);
//Recpie

//11:7  Swiss Voulge "sv"
//Gyser
clngy = gy.cloneNode(true);
document.getElementById('svgy').appendChild(clngy);
//Oshibo
clnosh = osh.cloneNode(true);
document.getElementById('svosh').appendChild(clnosh);
//Swiss Voulge
clnsv = sv.cloneNode(true);
document.getElementById('sv').appendChild(clnsv);
//Imperial Axe
clniaxe = iaxe.cloneNode(true);
document.getElementById('sviaxe').appendChild(clniaxe);
//Hastarium
clnhast = hast.cloneNode(true);
document.getElementById('svhast').appendChild(clnhast);
//Abyssimal
clnabi = abi.cloneNode(true);
document.getElementById('svabi').appendChild(clnabi);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('svass').appendChild(clnass);
//Recipe

//11:8 Blood Assault "ba"
//Aerogun
clnag = ag.cloneNode(true);
document.getElementById('baag').appendChild(clnag);
//Blood Assault
clnba = ba.cloneNode(true);
document.getElementById('ba').appendChild(clnba);
//Ultimate Axe
clnua = ua.cloneNode(true);
document.getElementById('baua').appendChild(clnua);
//Pendant of Flesh
clnpof = pof.cloneNode(true);
document.getElementById('bapof').appendChild(clnpof);
//Recipe

//11:9 Oritsuru "osr"
//Tonic
clntc = tc.cloneNode(true);
document.getElementById('osrtc').appendChild(clntc);
//Oritsuru
clnosr = osr.cloneNode(true);
document.getElementById('osr').appendChild(clnosr);
//Slayer's Spear
clnsss = sss.cloneNode(true);
document.getElementById('osrsss').appendChild(clnsss);
//Javelin
clnjav = jav.cloneNode(true);
document.getElementById('osrjav').appendChild(clnjav);
//Sylvan Band
clnsyb = syb.cloneNode(true);
document.getElementById('osrsyb').appendChild(clnsyb);
//Recipe

//11:10 Soul Reaver "sr"
//Soul Sword
clnsos = sos.cloneNode(true);
document.getElementById('srsos').appendChild(clnsos);
//Soul Reaver 10
//Soul Reaver 9
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul19').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul20').appendChild(clnesoul);
//Soul Reaver 8
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul17').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul18').appendChild(clnesoul);
//soul Reaver 7
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul15').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul16').appendChild(clnesoul);
//Soul Reaver 6
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul13').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul14').appendChild(clnesoul);
//Soul Reaver 5
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul11').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul12').appendChild(clnesoul);
//Soul Reaver 4
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul9').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul10').appendChild(clnesoul);
//Soul Reaver 3
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul7').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul8').appendChild(clnesoul);
//Soul Reaver 2
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul5').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul6').appendChild(clnesoul);
//Soul Reaver 1
clnsr = sr.cloneNode(true);
document.getElementById('sr').appendChild(clnsr);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul3').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul4').appendChild(clnesoul);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('srss').appendChild(clnss);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul1').appendChild(clnesoul);
//Evil Soul
clnesoul = esoul.cloneNode(true);
document.getElementById('sresoul2').appendChild(clnesoul);
//Recipe

//11:11 Kryptogen "kyg"
//Kryptogen (1)
document.getElementById('kyg').appendChild(clnkyg);
//Balnazzar

//12:1 Undead Boots "ub"
//Level 5
//Level 4 Espada Ropera
clner = er.cloneNode(true);
document.getElementById('ub4er').appendChild(clner);
//Level 3 Espada Ropera
clner = er.cloneNode(true);
document.getElementById('ub3er').appendChild(clner);
//Level 2 Espada Ropera
clner = er.cloneNode(true);
document.getElementById('ub2er').appendChild(clner);
//Undead Boots
clnub = ub.cloneNode(true);
document.getElementById('ub').appendChild(clnub);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('uber').appendChild(clner);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('ubmv').appendChild(clnmv);
//Wirt's Left Leg
clnwll = wll.cloneNode(true);
document.getElementById('ubwll').appendChild(clnwll);
//Copper Sword
clncs = cs.cloneNode(true);
document.getElementById('ubcs').appendChild(clncs);
//Recipe

//12:2 Blood Stone "bls"
//Blood Stone
clnbls = bls.cloneNode(true);
document.getElementById('bls').appendChild(clnbls);
//Pendant of Flesh
clnpof = pof.cloneNode(true);
document.getElementById('blspof1').appendChild(clnpof);
//Pendant of Flesh
clnpof = pof.cloneNode(true);
document.getElementById('blspof2').appendChild(clnpof);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('blsmv1').appendChild(clnmv);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('blsmv2').appendChild(clnmv);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('blsgsoul1').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('blsgsoul2').appendChild(clngsoul);

//12:3 Dravel "dvl"
//Sadistic
clnsad = sad.cloneNode(true);
document.getElementById('dvlsad').appendChild(clnsad);
//Dravel 5
//Dravel 4 Recipe (1)
document.getElementById('dvl3r').appendChild(clndvlr);
//Dravel 3 Recpie
clndvlr = dvlr.cloneNode(true);
document.getElementById('dvl2r').appendChild(clndvlr);
//Dravel 2 Recpie
clndvlr = dvlr.cloneNode(true);
document.getElementById('dvl1r').appendChild(clndvlr);
//Dravel
clndvl = dvl.cloneNode(true);
document.getElementById('dvl').appendChild(clndvl);
//Recipe
clndvlr = dvlr.cloneNode(true);
document.getElementById('dvlr').appendChild(clndvlr);
//Chakram
clnchr = chr.cloneNode(true);
document.getElementById('dvlchr').appendChild(clnchr);
//Angel's Orb
clnao = ao.cloneNode(true);
document.getElementById('dvlao').appendChild(clnao);
//Recipe

//12:4 Grallen "gr"
//Porphyril
clnpyl = pyl.cloneNode(true);
document.getElementById('grpyl').appendChild(clnpyl);
//Grallen
clngr = gr.cloneNode(true);
document.getElementById('gr').appendChild(clngr);
//Gothic Bar
clngb = gb.cloneNode(true);
document.getElementById('grgb').appendChild(clngb);
//Scimtar's Scepter
clnscs = scs.cloneNode(true);
document.getElementById('grscs').appendChild(clnscs);
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('grhd1').appendChild(clnhd);
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('grhd2').appendChild(clnhd);
//Recipe

//12:5 Kusagiri "ksg"
//Kusagiri
clnksg = ksg.cloneNode(true);
document.getElementById('ksg').appendChild(clnksg);
//Kusanagi
clnks = ks.cloneNode(true);
document.getElementById('ksgks').appendChild(clnks);
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('ksgtbg').appendChild(clntbg);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('ksggsoul1').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('ksggsoul2').appendChild(clngsoul);
//Recipe

//12:6 Slasher/Smasher "sm"
//Aveioletz
clnaz = az.cloneNode(true);
document.getElementById('smaz').appendChild(clnaz);
//Smasher
clnsm = sm.cloneNode(true);
document.getElementById('sm').appendChild(clnsm);
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('smtbg1').appendChild(clntbg);
//Tonbogiri
clntbg = tbg.cloneNode(true);
document.getElementById('smtbg2').appendChild(clntbg);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('smmv').appendChild(clnmv);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('smgsoul').appendChild(clngsoul);
//Recipe

//12:7 Oshibo "osh"
//Aveioletz
clnaz = az.cloneNode(true);
document.getElementById('oshaz').appendChild(clnaz);
//Oshibo
clnosh = osh.cloneNode(true);
document.getElementById('osh').appendChild(clnosh);
//Swiss Vougle
clnsv = sv.cloneNode(true);
document.getElementById('oshsv').appendChild(clnsv);
//Kusanagi
clnks = ks.cloneNode(true);
document.getElementById('oshks').appendChild(clnks);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('oshmv').appendChild(clnmv);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('oshgsoul').appendChild(clngsoul);
//Recipe

//12:8 sennor Kris "sk"
//Aveioletz
clnaz = az.cloneNode(true);
document.getElementById('skaz').appendChild(clnaz);
//Sennor Kris
clnsk = sk.cloneNode(true);
document.getElementById('sk').appendChild(clnsk);
//Deadly Kris
clndk = dk.cloneNode(true);
document.getElementById('skdk1').appendChild(clndk);
//Deadly Kris
clndk = dk.cloneNode(true);
document.getElementById('skdk2').appendChild(clndk);
//Chakram
clnchr = chr.cloneNode(true);
document.getElementById('skchr').appendChild(clnchr);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('skgsoul').appendChild(clngsoul);
//Recipe

//12:9 Vajra "vj"
//Sulfuras Ragnaros
clnsrg = srg.cloneNode(true);
document.getElementById('vjsrg').appendChild(clnsrg);
//Vajra
clnvj = vj.cloneNode(true);
document.getElementById('vj').appendChild(clnvj);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('vjass1').appendChild(clnass);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('vjass2').appendChild(clnass);
//Copper Sword
clncs = cs.cloneNode(true);
document.getElementById('vjcs').appendChild(clncs);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('vjool').appendChild(clnool);
//Orb of Frost
clnof = of .cloneNode(true);
document.getElementById('vjof').appendChild(clnof);
//Recipe

//12:10 Zulfiqar "zq"
//Sulfuras Ragnaros
clnsrg = srg.cloneNode(true);
document.getElementById('zqsrg').appendChild(clnsrg);
//Zulfiqar
clnzq = zq.cloneNode(true);
document.getElementById('zq').appendChild(clnzq);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('zqass1').appendChild(clnass);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('zqass2').appendChild(clnass);
//Copper Sword
clncs = cs.cloneNode(true);
document.getElementById('zqcs').appendChild(clncs);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('zqool').appendChild(clnool);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('zqoos').appendChild(clnoos);
//Recipe

//12:11 Kladenets "kd"
//Sulfuras Ragnaros
clnsrg = srg.cloneNode(true);
document.getElementById('kdsrg').appendChild(clnsrg);
//Kladenets
clnkd = kd.cloneNode(true);
document.getElementById('kd').appendChild(clnkd);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('kdass1').appendChild(clnass);
//Assault
clnass = ass.cloneNode(true);
document.getElementById('kdass2').appendChild(clnass);
//Copper Sword
clncs = cs.cloneNode(true);
document.getElementById('kdcs').appendChild(clncs);
//Orb of Light
clnool = ool.cloneNode(true);
document.getElementById('kdool').appendChild(clnool);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('kdoof').appendChild(clnoof);
//Recipe

//13:1 Sadistic "sad"
//Sadistic
clnsad = sad.cloneNode(true);
document.getElementById('sad').appendChild(clnsad);
//Darvel 5 (1)
document.getElementById('saddvl5').appendChild(clndvl5);
//Searing Edge
clnse = se.cloneNode(true);
document.getElementById('sadse').appendChild(clnse);
//Recipe

//13:2 Serpent Plague "sp"
//Recipe 4 (1)
document.getElementById('spr4').appendChild(clnspr);
//Recipe 3
clnspr = spr.cloneNode(true);
document.getElementById('spr3').appendChild(clnspr);
//Serpent Plague 1
clnsp = sp.cloneNode(true);
document.getElementById('sp').appendChild(clnsp);
//Recipe 2
clnspr = spr.cloneNode(true);
document.getElementById('spr2').appendChild(clnspr);
//Scimtar's Scepter
clnscs = scs.cloneNode(true);
document.getElementById('spscs').appendChild(clnscs);
//Recipe

//13:3 Unholy Bible "unb"
//Mask of Tho'roth
clnmt = mt.cloneNode(true);
document.getElementById('unbmt').appendChild(clnmt);
//Unholy Bible
clnunb = unb.cloneNode(true);
document.getElementById('unb').appendChild(clnunb);
//Armguard
clnagu = agu.cloneNode(true);
document.getElementById('unbagu').appendChild(clnagu);
//Ultimate Axe
clnua = ua.cloneNode(true);
document.getElementById('unbua').appendChild(clnua);
//Recipe

//13:4 Magic Storms "mgs"
//Dwarvish
clndw = dw.cloneNode(true);
document.getElementById('mgsdw').appendChild(clndw);
//Thunderfury
clntf = tf.cloneNode(true);
document.getElementById('mgstf').appendChild(clntf);
//Magic Storms
clnmgs = mgs.cloneNode(true);
document.getElementById('mgs').appendChild(clnmgs);
//Stormbringer
clnsbr = sbr.cloneNode(true);
document.getElementById('mgssbr').appendChild(clnsbr);
//Slayer's Spear
clnsss = sss.cloneNode(true);
document.getElementById('mgssss').appendChild(clnsss);

//13:5 Alloyed "ayd"
//Alloyed
clnayd = ayd.cloneNode(true);
document.getElementById('ayd').appendChild(clnayd);
//Elune's Cloak
clnec = ec.cloneNode(true);
document.getElementById('aydec').appendChild(clnec);
//Breast Plate
clnbp = bp.cloneNode(true);
document.getElementById('aydbp').appendChild(clnbp);
//Magtheridon
clnmgd = mgd.cloneNode(true);
document.getElementById('aydmgd').appendChild(clnmgd);

//13:6 Mystic Staff "mys"
//Mystic Staff
clnmys = mys.cloneNode(true);
document.getElementById('mys').appendChild(clnmys);
//Gothic Bar
clngb = gb.cloneNode(true);
document.getElementById('mysgb').appendChild(clngb);
//Recipe

//13:7 Kharas "kh"
//Kharas
clnkh = kh.cloneNode(true);
document.getElementById('kh').appendChild(clnkh);
//Medalion
clnmd = md.cloneNode(true);
document.getElementById('khmd').appendChild(clnmd);
//Omniscience
clnomn = omn.cloneNode(true);
document.getElementById('khomn').appendChild(clnomn);
//Recipe

//13:8 Clairaudience "cla"
//Clairaudience
clncla = cla.cloneNode(true);
document.getElementById('cla').appendChild(clncla);
//Warhammer
clnwarh = warh.cloneNode(true);
document.getElementById('clawarh').appendChild(clnwarh);
//Prismatic
clnprs = prs.cloneNode(true);
document.getElementById('claprs').appendChild(clnprs);
//Scintillating Axe
clnsca = sca.cloneNode(true);
document.getElementById('clasca').appendChild(clnsca);
//Recipe

//13:9 Volhynia "vy"
//Volhynia
clnvy = vy.cloneNode(true);
document.getElementById('vy').appendChild(clnvy);
//Morayshire
clnmy = my.cloneNode(true);
document.getElementById('vymy').appendChild(clnmy);
//Howling Drum
clnhd = hd.cloneNode(true);
document.getElementById('vyhd').appendChild(clnhd);
//Agile Gnome
clnagm = agm.cloneNode(true);
document.getElementById('vyagm').appendChild(clnagm);
//Recipe

//13:10 Porphyril "pyl"
//Porphyril
clnpyl = pyl.cloneNode(true);
document.getElementById('pyl').appendChild(clnpyl);
//Grallen
clngr = gr.cloneNode(true);
document.getElementById('pylgr1').appendChild(clngr);
//Grallen
clngr = gr.cloneNode(true);
document.getElementById('pylgr2').appendChild(clngr);
//Heroism Mask
clnhma = hma.cloneNode(true);
document.getElementById('pylhma').appendChild(clnhma);
//Recipe

//13:11 Glory Axe "ga"
//Glory Axe
clnga = ga.cloneNode(true);
document.getElementById('ga').appendChild(clnga);
//Coral Blades
clncbla = cbla.cloneNode(true);
document.getElementById('gacbla').appendChild(clncbla);
//Aeglos
clnago = ago.cloneNode(true);
document.getElementById('gaago').appendChild(clnago);
//Crafter
clnc = c.cloneNode(true);
document.getElementById('gac').appendChild(clnc);
//Recipe

//14:1 Simplicity Axe "sax"
//Ragnarock
clnrag = rag.cloneNode(true);
document.getElementById('saxrag').appendChild(clnrag);
//Simplicity Axe
clnsax = sax.cloneNode(true);
document.getElementById('sax').appendChild(clnsax);
//Tomahawk
clnthk = thk.cloneNode(true);
document.getElementById('saxthk1').appendChild(clnthk);
//Tomahawk
clnthk = thk.cloneNode(true);
document.getElementById('saxthk2').appendChild(clnthk);
//Archmagi Blade
clnab = ab.cloneNode(true);
document.getElementById('saxab').appendChild(clnab);
//Recipe

//14:2 Metalic Bow "mb"
//Metalic Bow
clnmb = mb.cloneNode(true);
document.getElementById('mb').appendChild(clnmb);
//Exorus
clnexr = exr.cloneNode(true);
document.getElementById('mbexr').appendChild(clnexr);
//Agile Gnome
clnagm = agm.cloneNode(true);
document.getElementById('mbagm1').appendChild(clnagm);
//Agile Gnome
clnagm = agm.cloneNode(true);
document.getElementById('mbagm2').appendChild(clnagm);

//14:3 Intelligent "ig"
//Intelligent
clnig = ig.cloneNode(true);
document.getElementById('ig').appendChild(clnig);
//Purification
clnpst = pst.cloneNode(true);
document.getElementById('igpst').appendChild(clnpst);
//Medallion
clnmd = md.cloneNode(true);
document.getElementById('igmd1').appendChild(clnmd);
//Medallion
clnmd = md.cloneNode(true);
document.getElementById('igmd2').appendChild(clnmd);
//Recipe

//14:4 Kraken's Coat "kc"
//Kraken's Coat
clnkc = kc.cloneNode(true);
document.getElementById('kc').appendChild(clnkc);
//Banded Mail
clnbm = bm.cloneNode(true);
document.getElementById('kcbm').appendChild(clnbm);
//Ultimate Axe
clnua = ua.cloneNode(true);
document.getElementById('kcua').appendChild(clnua);
//Scintillating Axe
clnsca = sca.cloneNode(true);
document.getElementById('kcsca').appendChild(clnsca);
//Recipe

//14:5 Mask of Tho'roth "mt"
//Mask of Tho'roth
clnmt = mt.cloneNode(true);
document.getElementById('mt').appendChild(clnmt);
//Unholy Bible
clnunb = unb.cloneNode(true);
document.getElementById('mtunb').appendChild(clnunb);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('mtmv').appendChild(clnmv);
//Recipe

//14:6 Crossbow "cb"
//Ballista
clnb = b.cloneNode(true);
document.getElementById('cbb').appendChild(clnb);
//Crossbow
clncb = cb.cloneNode(true);
document.getElementById('cb').appendChild(clncb);
//Scimtar
clnsct = sct.cloneNode(true);
document.getElementById('cbsct').appendChild(clnsct);
//Climber's Hammer
clnch = ch.cloneNode(true);
document.getElementById('cbch').appendChild(clnch);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('cbmv').appendChild(clnmv);

//14:7 Gyser "gy"
//Warclub
clnwc = wc.cloneNode(true);
document.getElementById('gywc').appendChild(clnwc);
//Gyser
clngy = gy.cloneNode(true);
document.getElementById('gy').appendChild(clngy);
//Swiss Voulge
clnsv = sv.cloneNode(true);
document.getElementById('gysv').appendChild(clnsv);
//Climber's Hammer
clnch = ch.cloneNode(true);
document.getElementById('gych').appendChild(clnch);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('gymv').appendChild(clnmv);

//14:8 Dwarvish "dw"
//Dwarvish
clndw = dw.cloneNode(true);
document.getElementById('dw').appendChild(clndw);
//Magic Storms
clnmgs = mgs.cloneNode(true);
document.getElementById('dwmgs').appendChild(clnmgs);
//Agile Gnome
clnagm = agm.cloneNode(true);
document.getElementById('dwagm').appendChild(clnagm);

//14:9 Tonic "tc"
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('tctec').appendChild(clntec);
//Thunderfury
clntf = tf.cloneNode(true);
document.getElementById('tctf').appendChild(clntf);
//Tonic
clntc = tc.cloneNode(true);
document.getElementById('tc').appendChild(clntc);
//Oritsuru
clnosr = osr.cloneNode(true);
document.getElementById('tcosr').appendChild(clnosr);
//Deadly Kris
clndk = dk.cloneNode(true);
document.getElementById('tcdk').appendChild(clndk);
//Mystic Spear
clnmsp = msp.cloneNode(true);
document.getElementById('tcmsp').appendChild(clnmsp);
//Recipe

//14:10 Aerogun "ag"
//Aerogun
clnag = ag.cloneNode(true);
document.getElementById('ag').appendChild(clnag);
//Blood Assault
clnba = ba.cloneNode(true);
document.getElementById('agba').appendChild(clnba);
//Lexicon
clnlex = lex.cloneNode(true);
document.getElementById('aglex').appendChild(clnlex);
//Powerstone
clnpow = pow.cloneNode(true);
document.getElementById('agpow').appendChild(clnpow);
//Recipe

//14:11  Astral Reaver "ar"
//Soul Sword
clnsos = sos.cloneNode(true);
document.getElementById('arsos').appendChild(clnsos);
//Astral Reaver 10

//Astral Reaver 9
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul19').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul20').appendChild(clngsoul);
//Astral Reaver 8
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul17').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul18').appendChild(clngsoul);
//Astral Reaver 7
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul15').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul16').appendChild(clngsoul);
//Astral Reaver 6
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul13').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul14').appendChild(clngsoul);
//Astral Reaver 5
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul11').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul12').appendChild(clngsoul);
//Astral Reaver 4
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul9').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul10').appendChild(clngsoul);
//Astral Reaver 3
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul7').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul8').appendChild(clngsoul);
//Astral Reaver 2
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul5').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul6').appendChild(clngsoul);
//Astral Reaver 1
clnar = ar.cloneNode(true);
document.getElementById('ar').appendChild(clnar);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul3').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul4').appendChild(clngsoul);
//Swordstaff
clnss = ss.cloneNode(true);
document.getElementById('arss').appendChild(clnss);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul1').appendChild(clngsoul);
//Good Soul
clngsoul = gsoul.cloneNode(true);
document.getElementById('argsoul2').appendChild(clngsoul);
//Recipe


//15:1 Mithril Rod "mr"
//Mithril Rod
clnmr = mr.cloneNode(true);
document.getElementById('mr').appendChild(clnmr);
//Mandolin
clnmdo = mdo.cloneNode(true);
document.getElementById('mrmdo1').appendChild(clnmdo);
//Mandolin
clnmdo = mdo.cloneNode(true);
document.getElementById('mrmdo2').appendChild(clnmdo);
//Mandolin
clnmdo = mdo.cloneNode(true);
document.getElementById('mrmdo3').appendChild(clnmdo);
//Orb of Fire
clnoof = oof.cloneNode(true);
document.getElementById('mroof').appendChild(clnoof);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('mrer').appendChild(clner);

//15:2 Ballista "b"
//Ballista 
clnb = b.cloneNode(true);
document.getElementById('b').appendChild(clnb);
//Crossbow
clncb = cb.cloneNode(true);
document.getElementById('bcb').appendChild(clncb);
//Orb of Shadow
clnoos = oos.cloneNode(true);
document.getElementById('boos').appendChild(clnoos);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('ber1').appendChild(clner);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('ber2').appendChild(clner);

//15:3 Warclub "wc"
//Warclub
clnwc = wc.cloneNode(true);
document.getElementById('wc').appendChild(clnwc);
//Gyser
clngy = gy.cloneNode(true);
document.getElementById('wcgy').appendChild(clngy);
//Orb of light
clnool = ool.cloneNode(true);
document.getElementById('wcool').appendChild(clnool);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('wcer1').appendChild(clner);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('wcer2').appendChild(clner);

//15:4 Soul Sword "sos"
//Soul Sword
clnsos = sos.cloneNode(true);
document.getElementById('sos').appendChild(clnsos);
//Soul Reaver 10 (1)
document.getElementById('sossr').appendChild(clnsr10);
//Astral Reaver 10 (1)
document.getElementById('sosar').appendChild(clnar10);

//15:5 Warlock Skull "ws"
//Warlock Skull
clnws = ws.cloneNode(true);
document.getElementById('ws').appendChild(clnws);
//Necromancy
clnnc = nc.cloneNode(true);
document.getElementById('wsnc').appendChild(clnnc);
//Scintillating Axe
clnsca = sca.cloneNode(true);
document.getElementById('wssca1').appendChild(clnsca);
//Scintillating Axe
clnsca = sca.cloneNode(true);
document.getElementById('wssca2').appendChild(clnsca);
//Recipe

//15:6 Sulfuras Ragnaros "srg"
//Sulfuras Ragnaros
clnsrg = srg.cloneNode(true);
document.getElementById('srg').appendChild(clnsrg);
//Zulfiqar
clnzq = zq.cloneNode(true);
document.getElementById('srgzq').appendChild(clnzq);
//Vajra
clnvj = vj.cloneNode(true);
document.getElementById('srgvj').appendChild(clnvj);
//Kladenets
clnkd = kd.cloneNode(true);
document.getElementById('srgkd').appendChild(clnkd);
//Recipe

//15:7 Hyper Ropera "hr"
//Hyper Ropera
clnhr = hr.cloneNode(true);
document.getElementById('hr').appendChild(clnhr);
//Dragon's Knife
clndrk = drk.cloneNode(true);
document.getElementById('hrdrk').appendChild(clndrk);
//Magic Vault
clnmv = mv.cloneNode(true);
document.getElementById('hrmv').appendChild(clnmv);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('hrer1').appendChild(clner);
//Espada Ropera
clner = er.cloneNode(true);
document.getElementById('hrer2').appendChild(clner);

//15:8 Thunderfury "tf"
//Thuderfury
clntf = tf.cloneNode(true);
document.getElementById('tf').appendChild(clntf);
//Tonic
clntc = tc.cloneNode(true);
document.getElementById('tftc').appendChild(clntc);
//Magic Storms
clnmgs = mgs.cloneNode(true);
document.getElementById('tfmgs').appendChild(clnmgs);
//Recipe

//15:9 Aveioletz "az"
//Aveioletz
clnaz = az.cloneNode(true);
document.getElementById('az').appendChild(clnaz);
//Sennor Kris
clnsk = sk.cloneNode(true);
document.getElementById('azsk').appendChild(clnsk);
//Smasher
clnsm = sm.cloneNode(true);
document.getElementById('azsm').appendChild(clnsm);
//Oshibo
clnosh = osh.cloneNode(true);
document.getElementById('azosh').appendChild(clnosh);
//Recipe

//15:10 Shards of Ice "soi"
//Shards of Ice
clnsoi = soi.cloneNode(true);
document.getElementById('soi').appendChild(clnsoi);
//Frostguard
clnfg = fg.cloneNode(true);
document.getElementById('soifg').appendChild(clnfg);
//Angel's Orb
clnao = ao.cloneNode(true);
document.getElementById('soiao1').appendChild(clnao);
//Angel's Orb
clnao = ao.cloneNode(true);
document.getElementById('soiao2').appendChild(clnao);
//Angel's Orb
clnao = ao.cloneNode(true);
document.getElementById('soiao3').appendChild(clnao);
//Recipe

//15:11 Righteous Assault "ra"
//Righteous Assault
clnra = ra.cloneNode(true);
document.getElementById('ra').appendChild(clnra);
//Serentiy Assault
clnsa = sa.cloneNode(true);
document.getElementById('rasa').appendChild(clnsa);
//Righteous Sword
clnrs = rs.cloneNode(true);
document.getElementById('rars').appendChild(clnrs);
//Righteous Plate
clnrp = rp.cloneNode(true);
document.getElementById('rarp').appendChild(clnrp);
//Unrighteous
clnur = ur.cloneNode(true);
document.getElementById('raur').appendChild(clnur);
//Tectonic
clntec = tec.cloneNode(true);
document.getElementById('ratec').appendChild(clntec);

//16:1 Elf's Brew (1)
document.getElementById('eb').appendChild(clneb);
//16:2 Clear Drink (1)
document.getElementById('cd').appendChild(clncd);
//16:3Vial of Clear Blood (1)
document.getElementById('cbl').appendChild(clncbl);
//16:4 Tree Eater (1)
document.getElementById('te').appendChild(clnte);
//16:5 Potion of Clarity (1)
document.getElementById('pc').appendChild(clnpc);
//16:6 Awakening Potion (1)
document.getElementById('ap').appendChild(clnap);
//16:7 Vial of Night Dew (1)
document.getElementById('vnd').appendChild(clnvnd);
//16:8 Purple Drink (1)
document.getElementById('pd').appendChild(clnpd);
//16:9 Sentry Wards (1)
document.getElementById('swd').appendChild(clnswd);
//16:10 Scroll of Town Portal (1)
document.getElementById('stp').appendChild(clnstp);

//22:1 Dragonhawk Rider "dr"
//Dragonhawk Rider
clndr = dr.cloneNode(true);
document.getElementById('dr').appendChild(clndr);
//Villager


//Placeholder:1 Tome of Power 5

//Close Modal Functions
window.onclick = function (event) {
    if (event.target === modalmootshirt) {
        modalmootshirt.style.display = "none";
    }
    if (event.target === modalhalberd) {
        modalhalberd.style.display = "none";
    }
    if (event.target === modaletree) {
        modaletree.style.display = "none";
    }
    if (event.target === modalmoomootshirt) {
        modalmoomootshirt.style.display = "none";
    }
    if (event.target === modalsassy) {
        modalsassy.style.display = "none";
    }
    if (event.target === modalbok) {
        modalbok.style.display = "none";
    }
    if (event.target === modalrag) {
        modalrag.style.display = "none";
    }
    if (event.target === modaltec) {
        modaltec.style.display = "none";
    }
    if (event.target === modalmaskv) {
        modalmaskv.style.display = "none";
    }
    if (event.target === modalholya) {
        modalholya.style.display = "none";
    }
    if (event.target === modaldult) {
        modaldult.style.display = "none";
    }
    //2:1 
    if (event.target === modaldoomh) {
        modaldoomh.style.display = "none";
    }
    if (event.target === modaljags) {
        modaljags.style.display = "none";
    }
    if (event.target === modaljagb) {
        modaljagb.style.display = "none";
    }
    if (event.target === modaldedg) {
        modaldedg.style.display = "none";
    }
    if (event.target === modalgem) {
        modalgem.style.display = "none";
    }
    if (event.target === modalimm) {
        modalimm.style.display = "none";
    }
    if (event.target === modalrep) {
        modalrep.style.display = "none";
    }
    if (event.target === modalbhand) {
        modalbhand.style.display = "none";
    }
    if (event.target === modaleta) {
        modaleta.style.display = "none";
    }
    if (event.target === modalduals) {
        modalduals.style.display = "none";
    }
    if (event.target === modalult) {
        modalult.style.display = "none";
    }
    //3:1
    if (event.target === modalac) {
        modalac.style.display = "none";
    }
    if (event.target === modallc) {
        modallc.style.display = "none";
    }
    if (event.target === modalcm) {
        modalcm.style.display = "none";
    }
    if (event.target === modalcgs) {
        modalcgs.style.display = "none";
    }
    if (event.target === modalfro) {
        modalfro.style.display = "none";
    }
    if (event.target === modalstc) {
        modalstc.style.display = "none";
    }
    if (event.target === modalan) {
        modalan.style.display = "none";
    }
    if (event.target === modalrun) {
        modalrun.style.display = "none";
    }
    if (event.target === modaleba) {
        modaleba.style.display = "none";
    }
    if (event.target === modalsecp) {
        modalsecp.style.display = "none";
    }
    if (event.target === modalfot) {
        modalfot.style.display = "none";
    }
    if (event.target === modalk1m) {
        modalk1m.style.display = "none";
    }
    if (event.target === modalt1) {
        modalt1.style.display = "none";
    }
    //4:1
    if (event.target === modalhast) {
        modalhast.style.display = "none";
    }
    if (event.target === modaljav) {
        modaljav.style.display = "none";
    }
    if (event.target === modalsavcl) {
        modalsavcl.style.display = "none";
    }
    if (event.target === modalesoul) {
        modalesoul.style.display = "none";
    }
    if (event.target === modalwarh) {
        modalwarh.style.display = "none";
    }
    if (event.target === modaliaxe) {
        modaliaxe.style.display = "none";
    }
    if (event.target === modalss) {
        modalss.style.display = "none";
    }
    if (event.target === modalcbla) {
        modalcbla.style.display = "none";
    }
    if (event.target === modalrboo) {
        modalrboo.style.display = "none";
    }
    if (event.target === modalrgau) {
        modalrgau.style.display = "none";
    }
    if (event.target === modalsri) {
        modalsri.style.display = "none";
    }
    if (event.target === modalhma) {
        modalhma.style.display = "none";
    }
    //5:1
    if (event.target === modaller) {
        modaller.style.display = "none";
    }
    if (event.target === modalhoc) {
        modalhoc.style.display = "none";
    }
    if (event.target === modalvs) {
        modalvs.style.display = "none";
    }
    if (event.target === modalhk) {
        modalhk.style.display = "none";
    }
    if (event.target === modalbp) {
        modalbp.style.display = "none";
    }
    if (event.target === modalms) {
        modalms.style.display = "none";
    }
    if (event.target === modalcr) {
        modalcr.style.display = "none";
    }
    if (event.target === modalsl) {
        modalsl.style.display = "none";
    }
    if (event.target === modalec) {
        modalec.style.display = "none";
    }
    if (event.target === modalsb) {
        modalsb.style.display = "none";
    }
    if (event.target === modalhh) {
        modalhh.style.display = "none";
    }
    if (event.target === modaldoe) {
        modaldoe.style.display = "none";
    }
    //6:1
    if (event.target === modalgau) {
        modalgau.style.display = "none";
    }
    if (event.target === modalsli) {
        modalsli.style.display = "none";
    }
    if (event.target === modalrob) {
        modalrob.style.display = "none";
    }
    if (event.target === modalgsoul) {
        modalgsoul.style.display = "none";
    }
    if (event.target === modalogr) {
        modalogr.style.display = "none";
    }
    if (event.target === modalqtl) {
        modalqtl.style.display = "none";
    }
    if (event.target === modalrotm) {
        modalrotm.style.display = "none";
    }
    if (event.target === modalnjr) {
        modalnjr.style.display = "none";
    }
    if (event.target === modalmsk) {
        modalmsk.style.display = "none";
    }
    if (event.target === modalago) {
        modalago.style.display = "none";
    }
    if (event.target === modalchr) {
        modalchr.style.display = "none";
    }
    if (event.target === modalao) {
        modalao.style.display = "none";
    }
    //7:1
    if (event.target === modalabi) {
        modalabi.style.display = "none";
    }
    if (event.target === modalse) {
        modalse.style.display = "none";
    }
    if (event.target === modalch) {
        modalch.style.display = "none";
    }
    if (event.target === modalctb) {
        modalctb.style.display = "none";
    }
    if (event.target === modalass) {
        modalass.style.display = "none";
    }
    if (event.target === modalvic) {
        modalvic.style.display = "none";
    }
    if (event.target === modalcs) {
        modalcs.style.display = "none";
    }
    if (event.target === modalab) {
        modalab.style.display = "none";
    }
    if (event.target === modaloof) {
        modaloof.style.display = "none";
    }
    if (event.target === modalof) {
        modalof.style.display = "none";
    }
    if (event.target === modaloos) {
        modaloos.style.display = "none";
    }
    if (event.target === modalool) {
        modalool.style.display = "none";
    }
    //8:1
    if (event.target === modalomn) {
        modalomn.style.display = "none";
    }
    if (event.target === modaleth) {
        modaleth.style.display = "none";
    }
    if (event.target === modalpst) {
        modalpst.style.display = "none";
    }
    if (event.target === modalwll) {
        modalwll.style.display = "none";
    }
    if (event.target === modalhd) {
        modalhd.style.display = "none";
    }
    if (event.target === modalbs) {
        modalbs.style.display = "none";
    }
    if (event.target === modalc) {
        modalc.style.display = "none";
    }
    if (event.target === modalv) {
        modalv.style.display = "none";
    }
    if (event.target === modalwj) {
        modalwj.style.display = "none";
    }
    if (event.target === modalsyb) {
        modalsyb.style.display = "none";
    }
    if (event.target === modalmh) {
        modalmh.style.display = "none";
    }
    //9:1
    if (event.target === modalmd) {
        modalmd.style.display = "none";
    }
    if (event.target === modaltbg) {
        modaltbg.style.display = "none";
    }
    if (event.target === modalks) {
        modalks.style.display = "none";
    }
    if (event.target === modaldk) {
        modaldk.style.display = "none";
    }
    if (event.target === modalthk) {
        modalthk.style.display = "none";
    }
    if (event.target === modalagu) {
        modalagu.style.display = "none";
    }
    if (event.target === modallex) {
        modallex.style.display = "none";
    }
    if (event.target === modalrap) {
        modalrap.style.display = "none";
    }
    if (event.target === modalbm) {
        modalbm.style.display = "none";
    }
    if (event.target === modalsw) {
        modalsw.style.display = "none";
    }
    if (event.target === modalrj) {
        modalrj.style.display = "none";
    }
    //10:1
    if (event.target === modalsbr) {
        modalsbr.style.display = "none";
    }
    if (event.target === modalmsp) {
        modalmsp.style.display = "none";
    }
    if (event.target === modalmtk) {
        modalmtk.style.display = "none";
    }
    if (event.target === modalmdo) {
        modalmdo.style.display = "none";
    }
    if (event.target === modalexr) {
        modalexr.style.display = "none";
    }
    if (event.target === modalmy) {
        modalmy.style.display = "none";
    }
    if (event.target === modalfg) {
        modalfg.style.display = "none";
    }
    if (event.target === modalnc) {
        modalnc.style.display = "none";
    }
    if (event.target === modalpof) {
        modalpof.style.display = "none";
    }
    if (event.target === modalprs) {
        modalprs.style.display = "none";
    }
    if (event.target === modalmgd) {
        modalmgd.style.display = "none";
    }
    if (event.target === modaldrk) {
        modaldrk.style.display = "none";
    }
    //11:1
    if (event.target === modalsa) {
        modalsa.style.display = "none";
    }
    if (event.target === modalrs) {
        modalrs.style.display = "none";
    }
    if (event.target === modalrp) {
        modalrp.style.display = "none";
    }
    if (event.target === modalur) {
        modalur.style.display = "none";
    }
    if (event.target === modalmm) {
        modalmm.style.display = "none";
    }
    if (event.target === modalsct) {
        modalsct.style.display = "none";
    }
    if (event.target === modalsv) {
        modalsv.style.display = "none";
    }
    if (event.target === modalba) {
        modalba.style.display = "none";
    }
    if (event.target === modalosr) {
        modalosr.style.display = "none";
    }
    if (event.target === modalsr) {
        modalsr.style.display = "none";
    }
    if (event.target === modalkyg) {
        modalkyg.style.display = "none";
    }
    //12:1
    if (event.target === modalub) {
        modalub.style.display = "none";
    }
    if (event.target === modalbls) {
        modalbls.style.display = "none";
    }
    if (event.target === modaldvl) {
        modaldvl.style.display = "none";
    }
    if (event.target === modalgr) {
        modalgr.style.display = "none";
    }
    if (event.target === modalksg) {
        modalksg.style.display = "none";
    }
    if (event.target === modalsm) {
        modalsm.style.display = "none";
    }
    if (event.target === modalosh) {
        modalosh.style.display = "none";
    }
    if (event.target === modalsk) {
        modalsk.style.display = "none";
    }
    if (event.target === modalvj) {
        modalvj.style.display = "none";
    }
    if (event.target === modalzq) {
        modalzq.style.display = "none";
    }
    if (event.target === modalkd) {
        modalkd.style.display = "none";
    }
    //13:1
    if (event.target === modalsad) {
        modalsad.style.display = "none";
    }
    if (event.target === modalsp) {
        modalsp.style.display = "none";
    }
    if (event.target === modalunb) {
        modalunb.style.display = "none";
    }
    if (event.target === modalmgs) {
        modalmgs.style.display = "none";
    }
    if (event.target === modalayd) {
        modalayd.style.display = "none";
    }
    if (event.target === modalmys) {
        modalmys.style.display = "none";
    }
    if (event.target === modalkh) {
        modalkh.style.display = "none";
    }
    if (event.target === modalcla) {
        modalcla.style.display = "none";
    }
    if (event.target === modalvy) {
        modalvy.style.display = "none";
    }
    if (event.target === modalpyl) {
        modalpyl.style.display = "none";
    }
    if (event.target === modalga) {
        modalga.style.display = "none";
    }
    //14:1
    if (event.target === modalsax) {
        modalsax.style.display = "none";
    }
    if (event.target === modalmb) {
        modalmb.style.display = "none";
    }
    if (event.target === modalig) {
        modalig.style.display = "none";
    }
    if (event.target === modalkc) {
        modalkc.style.display = "none";
    }
    if (event.target === modalmt) {
        modalmt.style.display = "none";
    }
    if (event.target === modalcb) {
        modalcb.style.display = "none";
    }
    if (event.target === modalgy) {
        modalgy.style.display = "none";
    }
    if (event.target === modaldw) {
        modaldw.style.display = "none";
    }
    if (event.target === modaltc) {
        modaltc.style.display = "none";
    }
    if (event.target === modalag) {
        modalag.style.display = "none";
    }
    if (event.target === modalar) {
        modalar.style.display = "none";
    }
    //15:1
    if (event.target === modalmr) {
        modalmr.style.display = "none";
    }
    if (event.target === modalb) {
        modalb.style.display = "none";
    }
    if (event.target === modalwc) {
        modalwc.style.display = "none";
    }
    if (event.target === modalsos) {
        modalsos.style.display = "none";
    }
    if (event.target === modalws) {
        modalws.style.display = "none";
    }
    if (event.target === modalsrg) {
        modalsrg.style.display = "none";
    }
    if (event.target === modalhr) {
        modalhr.style.display = "none";
    }
    if (event.target === modaltf) {
        modaltf.style.display = "none";
    }
    if (event.target === modalaz) {
        modalaz.style.display = "none";
    }
    if (event.target === modalsoi) {
        modalsoi.style.display = "none";
    }
    if (event.target === modalra) {
        modalra.style.display = "none";
    }
    //16:1
    if (event.target === modaleb) {
        modaleb.style.display = "none";
    }
    if (event.target === modalcd) {
        modalcd.style.display = "none";
    }
    if (event.target === modalcbl) {
        modalcbl.style.display = "none";
    }
    if (event.target === modalte) {
        modalte.style.display = "none";
    }
    if (event.target === modalpc) {
        modalpc.style.display = "none";
    }
    if (event.target === modalap) {
        modalap.style.display = "none";
    }
    if (event.target === modalvnd) {
        modalvnd.style.display = "none";
    }
    if (event.target === modalpd) {
        modalpd.style.display = "none";
    }
    if (event.target === modalswd) {
        modalswd.style.display = "none";
    }
    if (event.target === modalstp) {
        modalstp.style.display = "none";
    }
    //17:1
    if (event.target === modalgb) {
        modalgb.style.display = "none";
    }
    if (event.target === modalua) {
        modalua.style.display = "none";
    }
    if (event.target === modalsss) {
        modalsss.style.display = "none";
    }
    if (event.target === modalwl) {
        modalwl.style.display = "none";
    }
    if (event.target === modalscs) {
        modalscs.style.display = "none";
    }
    if (event.target === modalsca) {
        modalsca.style.display = "none";
    }
    if (event.target === modalagm) {
        modalagm.style.display = "none";
    }
    if (event.target === modalpow) {
        modalpow.style.display = "none";
    }
    if (event.target === modalyi) {
        modalyi.style.display = "none";
    }
    if (event.target === modalcspp) {
        modalcspp.style.display = "none";
    }
    if (event.target === modalps) {
        modalps.style.display = "none";
    }
    if (event.target === modalya) {
        modalya.style.display = "none";
    }
    //17.1:1
    if (event.target === modaldr) {
        modaldr.style.display = "none";
    }
    //18:1
    if (event.target === modalmv) {
        modalmv.style.display = "none";
    }
    if (event.target === modalebb) {
        modalebb.style.display = "none";
    }
    if (event.target === modaler) {
        modaler.style.display = "none";
    }
    //19:1
    if (event.target === modalqt) {
        modalqt.style.display = "none";
    }
    if (event.target === modalwt) {
        modalwt.style.display = "none";
    }
    if (event.target === modalht) {
        modalht.style.display = "none";
    }
    if (event.target === modalbrt) {
        modalbrt.style.display = "none";
    }
};