//append.js appends the dropdown content of every item to the "stats" <div> immediately following the <button> this is then cloned as needed using modalscript for other recipies

//1:1 Moo Tshirt "mootshirt"
$("#secretsone").append("<div class='dropdown-content t l'>Moo T-shirt<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1637</span><p class='shop'>Drop item on shop to sell </p><p>+50<span class='plusstats'> All stats</span></p><p class='info'>Moo Moo's T-shirt 100% cotton high quality comfortable fabric.</p></div>");

//1:2 Halberd Axe "halberd"
$("#secretstwo").append("<div class='dropdown-content l t'>Halberd Axe<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>10000</span><p class=shop>Drop item on shop to sell<p>+250 <span class=damage>Damage</span><br>+75% <span class=attackspd>Attack Speed</span><br>+30% chance for 250 bonus damage in every attack<p class=info>Halberd Axe one of the first tools developed by humans</div>");

//1:3 Enchanted Tree "etree
$("#secretsthree").append("<div class='dropdown-content l t'>Enchanted Tree<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1000</span><p><span class=shop>Drop item on shop to sell</span><br><span class=lclick>Left-Click to Use</span><br>Increases the level of the Hero by 1 when used.</div>");

//1:4 Moo Moo T-shirt "moomootshirt"
$("#secretsfour").append("<div class='dropdown-content l t'>Moo Moo T-shirt<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1637</span><p class=shop>Drop item on shop to sell<br><span class=lclick>Left-Click to Use</span><p>+100 <span class=plusstats>All stats</span><br>+Unleash (active)<p class=info>Moo Moo's T-Shirt 100% cotton that prevents any damage for a short period of time.<p class=cooldown1>Cooldown 40 seconds</div>");

//1:5 Sassy's Cloak "sassy"
$("#secretsfive").append("<div class='dropdown-content l t'>Sassy's Cloak<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1900</span><p class=shop>Drop item on shop to sell<br><span class=lclick>Left-Click to Use</span><p>+100% <span class=attackspd>Resistance to spell</span><br>+Stop Weather <span class=attackspd>(active)</span><p class=info>A cloak made of a magic material that works to dispel any magic cast on it.<p class=cooldown1>Cooldown 300 seconds</div>");

//1:6 Book of Knowledge "bok"
$("#secretssix").append("<div class='dropdown-content l t'>Book of Knowledge<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1637</span><br><span class=lclick>Left-Click to Use</span><p>+50 <span class=plusstats>All stats</span><br>+100% Experience Rate<p class=info>Book of knowledge gives your experience multiple times faster ever</div>");

//1:7 Ragnarok "rag"
$("#secretsseven").append("<div class='b dropdown-content l'>Ragnarok<p class=shop>Drop item on shop to sell<p>+1000 <span class=damage>Damage</span><br>+300% <span class=attackspd>Mana regen</span><br>+12% HP regen/second<br>+40% Cleaving attack<br>+75% <span class=attackspd>Attack speed</span><br>+30% chance for 250 bonus damage in every attack<p class=info>Forged by an insane wizard with a bad temper, this blade has the power to unleash a stream of fire against the wielder's enemies.</div>");

//1:8 Tectonic "tec"
$("#secretseight").append("<div class='b dropdown-content l'>Tectonic<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>32475</span><p class=shop>Drop item on shop to sell<p>+300 <span class=damage>Damage</span><br>+300% <span class=attackspd>Attack Speed</span><br>+60% <span class=attackspd>Evasion</span><br>+Bash<br><span class=attackspd>(20% chance to melee)<br>(10% chance to range)</span><p class=info>An axe forged of pure energy of the king of thunderbluff, causing it to have a more powerful effect. Has a 2 seconds cooldown<p class=nostack>Does not stack with other bash passives</div>");

//1:9 Mask of Valor "maskv"
$("#secretsnine").append("<div class='b dropdown-content l'>Mask of Valor<p>+900 <span class=plusstats>All stats</span><p class=info>The mask was granted mysterious powers that can make the bearer of the mask strong as the devil</div>");

//1:10 Holy Aura "holya"
$("#secretsten").append("<div class='b dropdown-content l'>Holy Aura<p>+4 <span class=attackspd>Most Buffs</span><br>+3 <span class=attackspd>Most Buffs </span>(enemy)<p class=info>An Eternal Aura is a tiny piece of Atiesh, Greatstaff of the Guardian, which was last wielded by the Last Guardian, Medivh. Once all forty splinters are found, they may be assembled into the Frame of Atiesh.</div>");

//1:11 Demonic Ultimate "dult"
$("#secretseleven").append("<div class='b dropdown-content l'>Demonic Ultimate<p>+3200 <span class=damage>Damage</span><br>+400% <span class=attackspd>Attack Speed</span><br>+250% <span class=attackspd>Enchanted Damage</span><br>+100 <span class=allstats>All Stats gain per hit</span><br>-100 <span class=allstats>All stats per attack(enemy)</span><p class=info>Upgraded Ultimate the most powerful deadly item.Ouch!</div>");

//2:1 Doom Horn "doomh"
$("#questone").append("<div class='dropdown-content l t'>Doom Horn<p>+300 <span class=plusstats>All stats</span><br>+Max level<p class=info>Cut from the sapphire Body of Enulaia, it opens the soul of the Gate Keeper</div>");

//2:2 Jagged Sword "jags"
$("#questtwo").append("<div class='dropdown-content l t'>Jagged Sword<p>Sword granting the bearer immortal blazing fast. Grants 100% attack speed.</div>");

//2:3 Jagged Blade "jagb"
$("#questthree").append("<div class='dropdown-content l t'>Jagged Blade<p>Axe granting the bearer immortal power. Grants 800 damage.</div>");

//2:4 Demon Edge "dedg"
$("#questfour").append("<div class='dropdown-content l t'>Demon Edge<p>A demonic blade granting the bearer immortal strength. Grants 500% enchanted damage.</div>");

//2:5 Gem of Shadow "gem"
$("#questfive").append("<div class='dropdown-content l t'>Gem of Shadow<p>+ True Sight<br>+50 <span class=plusstats>All stats</span><br>+3 sec <span class=passive>Fading Time</span><p class=info>A crystal from the quest. If the hero dies, the Gem of Shadow is dropped.</div>");

//2:6 Immunity Necklace "imm"
$("#questsix").append("<div class='dropdown-content l t'>Immunity Necklace<p>+ <span class=buffs>Immortality</span><p class=info>Alpha, the Demigod, was said to own a shield that protected him from death itself.</div>");

//2:7 Replication "rep"
$("#questseven").append("<div class='b dropdown-content l'>Replication<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1005</span><p class=shop>Drop item on shop to sell<br><span class=lclick>Left-Click to Use</span><p>+50000 <span class=lifebonus>Life Bonus</span><br>+ Replicate <span class=active>(active)</span><br>Damage deal 1.25%<br>Damage taken 200%<p class=info>A Rare gift of Omega containing 2 charges for 150 seconds must use wisely<p>If the last charge is used item will be removed<p><span class=cooldown>Cooldown</span>: 300 Seconds</div>");

//2:8 Balnazzar's Hand "bhand"
$("#questeight").append("<div class='b dropdown-content l'>Balnazzar's Hand<br><span class=lclick>Left-Click to Use</span><p>+500 <span class=damage>Damage AoE</span><br>+1 Infernal<p class=info>Feel like Balnazzar's always do. Calls down Infernal from the sky. The Infernal lasts 60 seconds.<p><span class=mana>Mana Cost</span>: 850<br><span class=cooldown>Cooldown</span>: 300 Seconds</div>");

//2:9 Eternal Aura "eta"
$("#questnine").append("<div class='b dropdown-content l'>Eternal Aura<p>+4 <span class=buffs>Most Buffs</span><p class=info>An Eternal Aura is a tiny piece of Atiesh, Greatstaff of the Guardian, which was last wielded by the Last Guardian, Medivh. Once all forty splinters are found, they may be assembled into the Frame of Atiesh.</div>");

//2:10 Dual Sword "duals"
$("#questten").append("<div class='b dropdown-content l'>Dual Sword<p>+100% <span class=attackspd>Attack Speed</span><br>+800 <span class=damage>Damage</span><p class=info>Dual Sword granting the bearer immortal blazing fast and immortal power</div>");

//2:11 Ultimate "ult"
$("#questeleven").append("<div class='b dropdown-content l'>Ultimate<p>+1600 <span class=damage>Damage</span><br>+200% <span class=attackspd>Attack Speed</span><br>+250% <span class=attackspd>Enchanted Damage</span><p class=info>Ultimate the most powerful deadly item. Ouch!</div>");

//3:1 Ani Cages "ac"
$("#mapitemsone").append("<div class='dropdown-content l t'>Ani Cages<p>+15% <span class=lifereturn2>Life Return</span><br>+15% <span class=manareturn2>Mana Return</span><br>+100 <span class=plusstats>All stats</span><p class=info>This item is a cage of all animals.</div>");

//3:2 Cage Large "lc"
$("#mapitemstwo").append("<div class='dropdown-content l t'>Cage Large<p>+5% <span class=lifereturn2>Life Return</span><br>+5% <span class=manareturn2>Mana Return</span><br>+50 <span class=agi>Agility</span><p class=info>This item is a cage of Rat, Seal, Sheep, Skink, and Stag.</div>");

//3:3 Cage Medium "cm"
$("#mapitemsthree").append("<div class='dropdown-content l t'>Cage Medium<p>+5% <span class=manareturn2>Mana Return</span><br><span class=plusstats>+50 </span><span class=int>Intelligence</span><p class=info>This item is a cage of Hermit Crab, Penguin, Pig, Rabbit, and Raccoon.</div>");

//3:4 Cage Small "cgs"
$("#mapitemsfour").append("<div class='dropdown-content l t'>Cage Small<p>+5% <span class=lifereturn2>Life Return</span><br>+50 <span class=str>Strength</span><p class=info>This item is a cage of dog, chicken, crab, fel boar, and frog.<p class=note>Does stack with other life return</div>");

//3:5 Frog "fro"
$("#mapitemsfive").append("<div class='dropdown-content l t'>(Frog)<p><span class=shop>Drop item on shop to sell</span><br>A secret fog? grants +1 to all stats.</div>");

//3:6 Satanic Chicken "stc"
$("#mapitemssix").append("<div class='dropdown-content l t'>Satanic Chicken<p>+3%<br><span class=plusstats>Regenerates a portion of an enemy's current hit point</span><p class=info>POKPOKPOK!</div>");

//3:7 Animals "an"
$("#mapitemsseven").append("<div class='b dropdown-content l'><span class=gold>Animals:</span><br>Chicken<br>Crab<br>Dog<br>Fel Boar<br>Hermit Crab<br>Penguin<br>Pig<br>Rabbit<br>Raccoon<br>Rat<br>Seal<br>Sheep<br>Skink<br>Stag</div>");

//3:8 Runes "run"
$("#mapitemseight").append("<div class='b dropdown-content l'><span class=gold>Runes:</span><br>Double Damage<br>Haste<br>Illusion<br>Level Up<br>Regeneration</div>");

//3:9 Explosive Barrel "eba"
$("#mapitemsnine").append("<div class='b dropdown-content l'>Barrel of Explosives<p>All players + <img alt=gold src=items/gold.jpg> <span class=gold>500</span></div>");

//3:10 Secret Place "secp"
//Not appended due to small size

//3:11 Fountain of the Thunderbluff / Rexxar's Shop "fot"
$("#mapitemseleven").append("<div class='b dropdown-content l'>Fountain of Thunderbluff / Rexxar's Shop<p>All players + <img alt=gold src=items/gold.jpg> <span class=gold>1000</span></div>");

//3:12 Krechek's soul "k1m"
$("#mapitemstwelve").append("<div class='dropdown-content l b'>Kerchek's Soul<p class=note>Cannot carry other soul if you carry this</div>");

//3:13
//3:14
//3:15
//3:16
//3:17
//3:18

//4:1 Hastarium "hast"
$("#tinkersone").append("<div class='dropdown-content l t'>Hastarium<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>600</span><p class=shop>Drop item on shop to sell<p>A spear-styled weapon used by Greek skirmishers, an alternative to the conventional javelin or spear, grants +10 damage and 15% attack speed</div>");

//4:2 Javelin "jav"
$("#tinkerstwo").append("<div class='dropdown-content l t'>Javelin<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>300</span><p>The word javelot probably originated from the Celtic language, Increased 9 damage also grants the friendly nearby ranged units increased attack 9% damage</div>");

//4:3 Savior's Claw "savcl"
$("#tinkersthree").append("<div class='dropdown-content l t'>Savior's Claw<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>140</span><p class=shop>Drop item on shop to sell<p>Increases the attack damage of the Hero by 6 when worn.</div>");

//4:4 Evil Soul "esoul"
$("#tinkersfour").append("<div class='dropdown-content l t'>Evil Soul<p><span class=lclick>Gives:</span><br>No Power<br>Gold if you sell<br>Upgrade some items<br><span class=lclick>Requires:</span><br>Drops from souls on Normal/Classic<br>Drops from fallen units on Skirmish<p class=soul>Used semtry ward to reveal the souls on Normal/Classic modes only has a 20% chance to random drop from fallen souls, on Skirmish mode has a 15% chance to random drops from fallen units<p class=note>Note: The souls in Normal/Classic modes are depends on how many fallen enemy heroes</div>");

//4:5 Warhammer "warh"
$("#tinkersfive").append("<div class='dropdown-content l t'>Warhammer<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>825</span><p class=shop>Drop item on shop to sell<p>A hammer of muradin. It's hammer time! Adds +24 Damage.</div>");

//4:6 Imperial Axe "iaxe"
$("#tinkerssix").append("<div class='dropdown-content l t'>Imperial Axe<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>837</span><p><span class=shop>Drop item on shop to sell</span><br>This ancient relic of the orcs is said to hold the power to call the spirits of all orcs. It imbues its owner with 1 hit point per second regeneration bonus and 15 attack damage.</div>");

//4:7 Swordstaff "ss"
$("#tinkersseven").append("<div class='b dropdown-content l'>Swordstaff<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>550</span><p class=shop>Drop item on shop to sell<p>A Swordstaff is a Danish polearm, used in the medieval ages. adding +18 to attack damage.</div>");

//4:8 Coral Blades "cbla"
$("#tinkerseight").append("<div class='b dropdown-content l'>Coral Blades<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>930</span><p class=shop>Drop item on shop to sell<p>A Coral Blade of Naga's. Adds 21 damage.</div>");

//4:9 Red Boots "rboo"
$("#tinkersnine").append("<div class='b dropdown-content l'>Red Boots<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>250</span><p class=shop>Drop item on shop to sell<p>Red boots, increasing movement rate by 50.<p class=note>Movement Speed does not stack with Boots of Speed, Wirt's or Boots of Wind.</div>");

//4:10 Ruthless Gauntlet "rgau"
$("#tinkersten").append("<div class='b dropdown-content l'>Ruthless Gauntlet<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>305</span><p class=shop>Drop item on shop to sell<p>Increases the attack speed of the Hero by 15% when worn.</div>");

//4:11 Sapphire Ring "sri"
$("#tinkerseleven").append("<div class='b dropdown-content l'>Sapphire Ring<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>187</span><p class=shop>Drop item on shop to sell<p>Increases the Hero's hit point regeneration by 2 hit points per second.</div>");

//4:12 Heroism Mask "hma"
$("#tinkerstwelve").append("<div class='b dropdown-content l'>Heroism Mask<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>187</span><p class=shop>Drop item on shop to sell<p>Increases the Hero's rate of mana regeneration by 50% when worn</div>");

//5:1 Leremias "ler"
$("#magnione").append("<div class='dropdown-content l t'>Leremias<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>925</span><p class=shop>Drop item on shop to sell<p>A rare torture device that instills fear into the enemy, causing him to break his stance, thus lowering his defence, gives the wielder +5 armor and decreases the armor of enemies near him by 5</div>");

//5:2 Hood of Cunning "hoc"
$("#magnitwo").append("<div class='dropdown-content l t'>Hood of Cunning<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>325</span><p>Gives the Hero a 5% chance to avoid an attack</div>");

//5:3 Villainous Shield "vs"
$("#magnithree").append("<div class='dropdown-content l t'>Villainous Shield<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>225</span><p class=shop>Drop item on shop to sell<p>Increases the Hero's armor by 5 and hit points by 100 when worn.</div>");

//5:4 Helm of King "hk"
$("#magnifour").append("<div class='dropdown-content l t'>Helm of King<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>475</span><p class=shop>Drop item on shop to sell<p>The helmet of a legendary warrior who fell in battle. Adds +5 armor and regenerates 3 hit points per second.</div>");

//5:5 Breast Plate "bp"
$("#magnifive").append("<div class='dropdown-content l t'>Breast Plate<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>800</span><p class=shop>Drop item on shop to sell<p>A heavy armor commonly used by Knights. Provides a good amount of defense, but the weight makes the wearer difficult to breath. Keep it away from children or anyone with asthma. Adds 10 armor.</div>");

//5:6 Mithril T-shirt "ms"
$("#magnisix").append("<div class='dropdown-content l t'>Mithril-shirt<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>300</span><p><span class=shop>Drop item on shop to sell</span><br>A shirt of mail forged from mithril given by Thorin Oakenshield to Bilbo Baggins. Adds 5 armor.</div>");

//5:7 Celestial Ring "cr"
$("#magniseven").append("<div class='b dropdown-content l'>Celestial Ring<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>87</span><p class=shop>Drop item on shop to sell<p>Increases the armor of the Hero by 2 when worn.</div>");

//5:8 Studded Leather "sl"
$("#magnieight").append("<div class='b dropdown-content l'>Studded Leather<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>325</span><p class=shop>Drop item on shop to sell<p>Leather that Increases armor by 5 and attack rate by 10% when worn.</div>");

//5:9 Elune's Cloak "ec"
$("#magninine").append("<div class='b dropdown-content l'>Elune's Cloak<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>300</span><p><span class=shop>Drop item on shop to sell</span><br>A cloak made of a magic material by the elune, granting the wearer 15% resistance to spell attacks.</div>");

//5:10 Sefer Buckler "sb"
$("#magniten").append("<div class='b dropdown-content l'>Sefer Buckler<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>150</span><p class=shop>Drop item on shop to sell<p>This newest product of BlockAll Technology is a user-friendly, small, light yet strong enough to block most attacks. Gives 40% chance to block 30 damage.<p class=note>Cannot carry more than one</div>");

//5:11 Helm of Hador "hh"
$("#magnieleven").append("<div class='b dropdown-content l'>Helm of Hador<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>500</span><p class=shop>Drop item on shop to sell<p>A magical helm bore by the rulers of Dor-lomin. Also called the Dragon-helm due to its design definitely. Grants 10% life steal<p class=note>Orb effects do not stack</div>");

//5:12 Dagger of Escape "doe"
$("#magnitwelve").append("<div class='b dropdown-content l'>Dagger of Escape<br><img alt='mana icon'src=items/mana.jpg> <span class=gold>75 </span><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1000</span><p><span class=shop>Drop item on shop to sell</span><br><span class=lclick>Left-Click to Use</span><br>Teleports the Hero a short distance.<p><span class=cooldown>Cooldown: </span>30 Seconds.</div>");

//6:1 Gauntlets "gau"
$("#mageone").append("<div class='dropdown-content t l'>Gauntlets<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>75</span><p class='shop'>Drop item on shop to sell</p><p>Increases the Strength of the Hero by 3 when worn.</p></div>");

//6:2 Slippers "sli"
$("#magetwo").append("<div class='dropdown-content t l'>Slippers<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>75</span><p class='shop'>Drop item on shop to sell</p><p>Increases the Agility of the Hero by 3 when worn.</p></div>");

//6:3 Robe "rob"
$("#magethree").append("<div class='dropdown-content t l'>Robe<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>75</span><p class='shop'>Drop item on shop to sell</p><p>Increases the Intelligence of the Hero by 3 when worn.</p></div>");

//6:4 Good Soul "gsoul"
$("#magefour").append("<div class='dropdown-content t l'>Good Soul<p><span class='lclick'>Gives:</span><br> No Power<br> Gold if you sell<br> Upgrade some items<br><span class='lclick'>Requires:</span><br> Drops from souls on Normal/Classic<br> Drops from fallen units on Skirmish</p><p class='soul'>Used semtry ward to reveal the souls on Normal/Classic modes only has a 20% chance to random drop from fallen souls, on Skirmish mode has a 15% chance to random drops from fallen units</p><p class='note'>Note: The souls in Normal/Classic modes are depends on how many fallen enemy heroes</p></div>");

//6:5 Belt of Ogre "ogr"
$("#magefive").append("<div class='dropdown-content t l'>Belt of Ogre<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>225</span><p class='shop'>Drop item on shop to sell</p><p>A belt given only to champions. Adds 6 strength.</p></div>");

//6:6 Quel'Thalas "qtl"
$("#magesix").append("<div class='dropdown-content t l'>Quel'Thalas<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>225</span><p class='shop'>Drop item on shop to sell</p><p>A sturdy boot that guarantees a noisy journey. Adds 6 agility.</p></div>");

//6:7 Robe of the Magi "rotm"
$("#mageseven").append("<div class='dropdown-content b l'>Robe of the Magi<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>225</span><p class='shop'>Drop item on shop to sell</p><p>The latest fad, mostly worn by people of nobility. Adds 6 intelligence.</p></div>");

//6:8 Neelanjali Ruby "njr"
$("#mageeight").append("<div class='dropdown-content b l'>Neelanjali Ruby<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>92</span><p class='shop'>Drop item on shop to sell</p><p>Increases the Strength, Agility and Intelligence of the Hero by 2 when worn.</p></div>");

//6:9 Masakari "msk"
$("#magenine").append("<div class='dropdown-content b l'>Masakari<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>500</span><p class='shop'>Drop item on shop to sell</p><p>An Ancient Japanese weapon used by the Yamabushi, the warrior monks. Grants +10 Strength.</p></div>");

//6:10 Aeglos "ago"
$("#mageten").append("<div class='dropdown-content b l'>Aeglos<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>500</span><p class='shop'>Drop item on shop to sell</p><p>The spear that belonged to Gil-galad, king of the Noldorin Elves. Grants the +10 agility.</p></div>");

//6:11 Chakram "chr"
$("#mageeleven").append("<div class='dropdown-content b l'>Chakram<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>500</span><p class='shop'>Drop item on shop to sell</p><p>AA strong condemnations of such practices found there. Grants +10 intelligence.</p></div>");

//6:12 Angel's Orb "ao"
$("#magetwelve").append("<div class='dropdown-content b l'>Angel's Orb<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1025</span><p class='shop'>Drop item on shop to sell</p><p>An orb of Arch-angel grants +10 to all stats.</p></div>");

//7:1 Abyssimal "abi"
$("#overlordone").append("<div class='dropdown-content t l'>Abyssimal<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1300</span><p class='shop'>Drop item on shop to sell</p><p>A one-handed sword of European origin, capable of dealing great amounts of damage. Adds +36 damage.</p></div>");

//7:2 Searing Edge "se"
$("#overlordtwo").append("<div class='dropdown-content t l'>Searing Edge<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1500</span><p class='shop'>Drop item on shop to sell</p><p>Deadly sword used by most respected swordsman. Adds 45 bonus damage.</p></div>");

//7:3 Climber's Hammer "ch"
$("#overlordthree").append("<div class='dropdown-content t l'>Climber's Hammer<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>2450</span><p class='shop'>Drop item on shop to sell</p><p>Deadly Hammer that adds 100 attack damage. AH JUICES!</p></div>");

//7:4 Chitinous Blade "ctb"
$("#overlordfour").append("<div class='dropdown-content t l'>Chitinous Blade<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1900</span><p class='shop'>Drop item on shop to sell</p><p>An ancient Naga artifact, granting the wielder +60 damage.</p></div>");

//7:5 Assault "ass"
$("#overlordfive").append("<div class='dropdown-content t l'>Assault<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1875</span><p class='shop'>Drop item on shop to sell</p><p>An ancient sword that glows brightly. Gives 40 damage and a 10% chance to deal 120 bonus damage per hit.</p></div>");

//7:6 Vicious "vic"
$("#overlordsix").append("<div class='dropdown-content t l'>Vicious<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>650</span><p class='shop'>Drop item on shop to sell</p><p>Vicious was a powerful longsword, grants the hero 26 bonus damage.</p></div>");

//7:7 Copper Sword "cs"
$("#overlordseven").append("<div class='dropdown-content b l'>Copper Sword<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1500</span><p class='shop'>Drop item on shop to sell</p><p>A pretty special sword that adds 35 bonus damage and an additional 200 hp and mp</p></div>");

//7:8 Archmagi Blade "ab"
$("#overlordeight").append("<div class='dropdown-content b l'>Archmagi Blade<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>2000</span><p class='shop'>Drop item on shop to sell</p><p>A deadly blade that adds 30 bonus damage and 10% cleaving(melee).</p></div>");

//7:9 Orb of Fire "oof"
$("#overlordnine").append("<div class='dropdown-content b l'>Orb of Fire<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1000</span><p>This has Orb no power.</p></div>");

//7:10 Orb of Frost "of"
$("#overlordten").append("<div class='dropdown-content b l'>Orb of Frost<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1000</span><p>This has Orb no power.</p></div>");

//7:11 Orb of Shadow "oos"
$("#overlordeleven").append("<div class='dropdown-content b l'>Orb of Shadow<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1000</span><p>Orb of Shadow</p></div>");

//7:12 Orb of Light "ool"
$("#overlordtwelve").append("<div class='dropdown-content b l'>Orb of Light<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1000</span><p>This has Orb no power.</p></div>");