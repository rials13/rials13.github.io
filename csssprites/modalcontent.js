var col = "<div class='flexCol'></div>";

//1:1 Moo T-shirt "mootshirt"
$("#msecretsone").append("<div class='top'>" + col + "</div><div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='mootshirtoof'></div><div class='flexCol' id='mootshirtof'></div><div class='flexCol' id='mootshirtoos'></div><div class='flexCol' id='mootshirtool'></div><div class='flexCol' id='mootshirtms'></div></div><div class='text'></div>");
//Items can make from:
//Moo Moo T-shirt
$("#secretsfour").clone(true).appendTo($("#msecretsone .top .flexCol"));
//Item:
$("#secretsone").clone(true).appendTo($("#msecretsone .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#mootshirtoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#mootshirtof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#mootshirtoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#mootshirtool"));
//Mithril-shirt
$("#magnisix").clone(true).appendTo($("#mootshirtms"));
//Text
$("#msecretsone .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/mithril-shirt.jpg' alt='mithril shirt'> to shop</p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>8600</span> (<span class='gold'>300</span> returned)</p>");


//1:2 Halberd "halberd"
$("#msecretstwo").append("<div class='top'>" + col + "</div><div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='halberdoof'></div><div class='flexCol' id='halberdof'></div><div class='flexCol' id='halberdoos'></div><div class='flexCol' id='halberdool'></div><div class='flexCol' id='halberdiaxe'></div><div>--or--</div><div class='flexCol' id='halberdk1m'></div></div></div><div class='text'></div>");
//Items can make from:
//Ragnarok
$("#secretsseven").clone(true).appendTo($("#msecretstwo .top .flexCol"));
//Item:
$("#secretstwo").clone(true).appendTo($("#msecretstwo .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#halberdoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#halberdof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#halberdoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#halberdool"));
//Imperial Axe
$("#tinkerssix").clone(true).appendTo($("#halberdiaxe"));
//Kerchek's Soul
$("#mapitemstwelve").clone(true).appendTo($("#halberdk1m"));
//Text
$("#msecretstwo .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/imperialaxe.jpg' alt='imperial axe'> to shop<span class='note'> or </span>bring soul to <img class='tpix'src='items/secretshop.jpg' alt='secret shop'></p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>9675</span> (<span class='gold'>837</span> returned)<span class='info'> or </span><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>0</span></p>");


//1:3 Enchanted Tree "etree"
$("#msecretsthree").append("<div class='top'>" + col + "</div><div class ='bottom'><div class='flexColMap'><div class='flexCol' id='etree1'></div><img class='map' src='maps/enchantedtree1.jpg' alt='map1'><img class='map' src='maps/enchantedtree1.map.jpg' alt='map1'></div><div class='flexCol' id='etree2'></div><div class='flexCol' id='etree3'></div><div class='flexCol' id='etree4'></div></div></div><div class='text'></div>");
//Items can make from:
//Book of Knowledge
$("#secretssix").clone(true).appendTo($("#msecretsthree .top .flexCol"));
//Items needed to make:
//Enchanted Tree 1
$("#secretsthree").clone(true).appendTo($("#etree1"));
//Enchanted Tree 2
$("#secretsthree").clone(true).appendTo($("#etree2"));
//Enchanted Tree 3
$("#secretsthree").clone(true).appendTo($("#etree3"));
//Enchanted Tree 4
$("#secretsthree").clone(true).appendTo($("#etree4"));
//Text
$("#msecretsthree .text").append("<p>Use <img class='tpix' src='items/treeeater1.jpg' alt='tree eater'> on the trees in the circles </p><p class='cost'>Returns <img src='items/gold.jpg' alt='gold coin'><span class='gold'>1000 </span> each if sold.</p>");


//1:4 Moo Moo T-Shirt "moomootshirt"
$("#msecretsfour").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='moomootshirtoof'></div><div class='flexCol' id='moomootshirtof'></div><div class='flexCol' id='moomootshirtoos'></div><div class='flexCol' id='moomootshirtool'></div><div class='flexCol' id='moomootshirtmootshirt'></div></div><div class='text'></div>");
//Item:
$("#secretsfour").clone(true).appendTo($("#msecretsfour .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#moomootshirtoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#moomootshirtof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#moomootshirtoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#moomootshirtool"));
//Imperial Axe
$("#secretsone").clone(true).appendTo($("#moomootshirtmootshirt"));
//Text
$("#msecretsfour .text").append("<p>Have all items in inventory and sell <img class='tpix'src='items/mootshirt.jpg' alt='moo t-shirt'> to shop on<span class='wave'>WAVE 15</span></p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>16300</span> (<span class='gold'>1637</span> returned)</p>");


//1:5 Sassy's Cloak "sassy"
$("#msecretsfive").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='sassyoof'></div><div class='flexCol' id='sassyof'></div><div class='flexCol' id='sassyoos'></div><div class='flexCol' id='sassyool'></div><div class='flexCol' id='sassyec'></div></div><div class='text'></div>");
//Item:
$("#secretsfive").clone(true).appendTo($("#msecretsfive .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#sassyoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#sassyof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#sassyoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#sassyool"));
//Elunes Cloak
$("#magninine").clone(true).appendTo($("#sassyec"));
//Text
$("#msecretsfive .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/elunescloak.jpg' alt='elunes cloak'> to shop on <span class='wave'>WAVE 9</span></p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>8600</span> (<span class='gold'>300</span> returned)</p>");


//1:6 Book of Knowledge "bok"
$("#msecretssix").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='bokoof'></div><div class='flexCol' id='bokof'></div><div class='flexCol' id='bokoos'></div><div class='flexCol' id='bokool'></div><div class='flexCol' id='boketree'></div></div><div class='text'></div>");
//Item:
$("#secretssix").clone(true).appendTo($("#msecretssix .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#bokoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#bokof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#bokoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#bokool"));
//Enchanted Tree
$("#secretsthree").clone(true).appendTo($("#boketree"));
//Text
$("#msecretssix .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/enchantedtree.jpg' alt='enchanted tree'> to shop on <span class='wave'>WAVE 9</span></p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>8000</span> (<span class='gold'>1000</span> returned)</p>");


//1:7 Ragnarok "rag"
$("#msecretsseven").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='ragoos'></div><div class='flexCol' id='ragool'></div><div class='flexCol' id='raghalberd'></div><div class='flexCol' id='ragsax'></div><div class='flexCol' id='ragebb'></div></div><div class='text'></div>");
//Item:
$("#secretsseven").clone(true).appendTo($("#msecretsseven .mid .flexCol"));
//Items needed to make:
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#ragoos"));
//Orb of Ligt
$("#overlordtwelve").clone(true).appendTo($("#ragool"));
//Halberd
$("#secretstwo").clone(true).appendTo($("#raghalberd"));
//Simplicity Axe
$("#overlordtwelve").clone(true).appendTo($("#ragsax"));
//Energy Bulb
$("#secretsthree").clone(true).appendTo($("#ragebb"));
//Text
$("#msecretsseven .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/energybulb.jpg' alt='energy bulb'> to shop</p><p>Note: This items has huge build resources, it may cause you to die when picking up/dropping</p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>38788</span> (<span class='gold'>2250</span> returned)<span class='info'> or </span> <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>29950</span> (<span class='gold'>2250</span> returned)</p>");


//1:8 Tectonic "tec"
$("#msecretseight").append("<div class='top'>" + col + "</div><div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='tecoof'></div><div class='flexCol' id='tecof'></div><div class='flexCol' id='tecoos'></div><div class='flexCol' id='tecool'></div><div class='flexCol' id='tecmtk'></div><div class='flexCol' id='tectc'></div></div><div class='text'></div>");
//Items can make from:
//Righteous Assault
$("#secretsfour").clone(true).appendTo($("#msecretsone .top .flexCol"));
//Item:
$("#secretseight").clone(true).appendTo($("#msecretseight .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#tecoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#tecof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#tecoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#tecool"));
//Mattoc
$("#magnisix").clone(true).appendTo($("#mootshirtms"));
//Tonic
$("#magnisix").clone(true).appendTo($("#mootshirtms"));
//Text
$("#msecretseight .text").append("<p>Disassemble all items in Circle of Power <img class='tpix' src='items/circleofpower.jpg' alt='circle of power icon'></p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>40620</span></p>");


//1:9 Mask of Valor "maskv"
$("#msecretsnine").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='maskvoof'></div><div class='flexCol' id='maskvof'></div><div class='flexCol' id='maskvoos'></div><div class='flexCol' id='maskvool'></div><div class='flexCol' id='maskvdoomh'></div><div class='flexCol' id='maskvt1'></div><div class='flexCol' id='maskv1m'></div></div><div class='text'></div>");
//Item:
$("#secretsnine").clone(true).appendTo($("#msecretsnine .mid .flexCol"));
//Items needed to make:
//Orb of Fire
$("#overlordnine").clone(true).appendTo($("#maskvoof"));
//Orb of Frost
$("#overlordten").clone(true).appendTo($("#maskvof"));
//Orb of Shadow
$("#overlordeleven").clone(true).appendTo($("#maskvoos"));
//Orb of Light
$("#overlordtwelve").clone(true).appendTo($("#maskvool"));
//Doom Horn
$("#questone").clone(true).appendTo($("#maskvdoomh"));
//Tomb of Power (1)
$("#overlordtwelve").clone(true).appendTo($("#maskvt1"));
//1,000,000 Gold
$("#maskv1m").append("<div class='dropdown'><button class='dropbtn'><img class='buttonimg' src='items/gold1.jpg' alt='gold coin icon'></button><div class='dropdown-content b l'><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1,000,000</span></div></div>");
//Text
$("#msecretsnine .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/1tome.jpg' alt='tome of power'> to shop</p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1008000</span> (<span class='gold'>45000</span> returned)</p>");


//1:10 Holy Aura "holya"
$("#msecretsten").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='holyaeta'></div><div class='flexCol' id='holyat5'></div></div><div class='text'></div>");
//Item:
$("#secretsten").clone(true).appendTo($("#msecretsten .mid .flexCol"));
//Items needed to make:
//Eternal Aura
$("#questnine").clone(true).appendTo($("#holyaeta"));
//Tome of Power (5)
$("#TODO").clone(true).appendTo($("#holyat5"));
//Text
$("#msecretsten .text").append("<p>Have all items in inventory and sell <img class='tpix' src='items/5tomes.jpg' alt='tome of power'> to shop</p><p class='cost'>Total Cost <img src='items/gold.jpg' alt='gold coin image'><span class='gold'>0</span> (<span class='gold'>225000</span> returned)</p>");


//1:11 Demonic Ultimate "dult"
$("#msecretseleven").append("<div class='mid'>" + col + "</div><div class ='bottom'><div class='flexCol' id='dultult'></div><div class='flexCol' id='dult6'></div></div><div class='text'></div>");
//Item:
$("#secretseleven").clone(true).appendTo($("#msecretseleven .mid .flexCol"));
//Items needed to make:
//Ultimate
$("#questeleven").clone(true).appendTo($("#dultult"));
//Full House
$("#TODO").clone(true).appendTo($("#dult6"));
//Text
$("#msecretseleven .text").append("<p>Have 6 players in game</p>");


//2:! Doom Horn "doomh"
$("#mquestone").append("<div class='top'>" + col + "</div><div class='mid'>" + col + "</div><div class ='bottom'>" + col + "</div></div><div class='text'></div>");
//Items can make from:
//Mask of Valor
$("#secretsnine").clone(true).appendTo($("#mquestone .top .flexCol"));
//Item:
$("#questone").clone(true).appendTo($("#mquestone .mid .flexCol"));
//Items needed to make:
//Goblin Blaster
$("#overlordnine").clone(true).appendTo($("#mquestone .bottom .flexCol"));
$("#mquestone .bottom .flexCol").append("<div class='dropdown item'> <img class='buttonimg' src='heroes/goblinblaster.jpg' alt='goblin blaster'><div class='dropdown-content b l'>Goblin Blaster</div></div>");
//Text
$("#mquestone .text").append("<p>Kill Goblin Blaster</p>");
