//append.js appends the dropdown content of every item to the "stats" <div> immediately following the <button> this is then cloned as needed using modalscript for other recipies

//1:1 Moo Tshirt "mootshirt"
document.getElementById('btnmootshirt').insertAdjacentHTML('afterend', "<div class='dropdown-content t l'>Moo T-shirt<br><img src='items/gold.jpg' alt='gold coin image'><span class='gold'>1637</span><p class='shop'>Drop item on shop to sell </p><p>+50<span class='plusstats'> All stats</span></p><p class='info'>Moo Moo's T-shirt 100% cotton high quality comfortable fabric.</p></div>");

//1:2 Halberd Axe "halberd"
document.getElementById('btnhalberd').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Halberd Axe<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>10000</span><p class=shop>Drop item on shop to sell<p>+250 <span class=damage>Damage</span><br>+75% <span class=attackspd>Attack Speed</span><br>+30% chance for 250 bonus damage in every attack<p class=info>Halberd Axe one of the first tools developed by humans</div>");

//1:3 Enchanted Tree "etree
document.getElementById('btnetree').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Enchanted Tree<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1000</span><p><span class=shop>Drop item on shop to sell</span><br><span class=lclick>Left-Click to Use</span><br>Increases the level of the Hero by 1 when used.</div>");

//1:4 Moo Moo T-shirt "moomootshirt"
document.getElementById('btnmoomootshirt').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Moo Moo T-shirt<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1637</span><p class=shop>Drop item on shop to sell<br><span class=lclick>Left-Click to Use</span><p>+100 <span class=plusstats>All stats</span><br>+Unleash (active)<p class=info>Moo Moo's T-Shirt 100% cotton that prevents any damage for a short period of time.<p class=cooldown1>Cooldown 40 seconds</div>");

//1:5 Sassy's Cloak "sassy"
document.getElementById('btnsassy').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Sassy's Cloak<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1900</span><p class=shop>Drop item on shop to sell<br><span class=lclick>Left-Click to Use</span><p>+100% <span class=attackspd>Resistance to spell</span><br>+Stop Weather <span class=attackspd>(active)</span><p class=info>A cloak made of a magic material that works to dispel any magic cast on it.<p class=cooldown1>Cooldown 300 seconds</div>");

//1:6 Book of Knowledge "bok"
document.getElementById('btnbok').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Book of Knowledge<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1637</span><br><span class=lclick>Left-Click to Use</span><p>+50 <span class=plusstats>All stats</span><br>+100% Experience Rate<p class=info>Book of knowledge gives your experience multiple times faster ever</div>");

//1:7 Ragnarok "rag"
document.getElementById('btnrag').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Ragnarok<p class=shop>Drop item on shop to sell<p>+1000 <span class=damage>Damage</span><br>+300% <span class=attackspd>Mana regen</span><br>+12% HP regen/second<br>+40% Cleaving attack<br>+75% <span class=attackspd>Attack speed</span><br>+30% chance for 250 bonus damage in every attack<p class=info>Forged by an insane wizard with a bad temper, this blade has the power to unleash a stream of fire against the wielder's enemies.</div>");

//1:8 Tectonic "tec"
document.getElementById('btntec').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Tectonic<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>32475</span><p class=shop>Drop item on shop to sell<p>+300 <span class=damage>Damage</span><br>+300% <span class=attackspd>Attack Speed</span><br>+60% <span class=attackspd>Evasion</span><br>+Bash<br><span class=attackspd>(20% chance to melee)<br>(10% chance to range)</span><p class=info>An axe forged of pure energy of the king of thunderbluff, causing it to have a more powerful effect. Has a 2 seconds cooldown<p class=nostack>Does not stack with other bash passives</div>");

//1:9 Mask of Valor "maskv"
document.getElementById('btnmaskv').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Mask of Valor<p>+900 <span class=plusstats>All stats</span><p class=info>The mask was granted mysterious powers that can make the bearer of the mask strong as the devil</div>");

//1:10 Holy Aura "holya"
document.getElementById('btnholya').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Holy Aura<p>+4 <span class=attackspd>Most Buffs</span><br>+3 <span class=attackspd>Most Buffs </span>(enemy)<p class=info>An Eternal Aura is a tiny piece of Atiesh, Greatstaff of the Guardian, which was last wielded by the Last Guardian, Medivh. Once all forty splinters are found, they may be assembled into the Frame of Atiesh.</div>");

//1:11 Demonic Ultimate "dult"
document.getElementById('btndult').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Demonic Ultimate<p>+3200 <span class=damage>Damage</span><br>+400% <span class=attackspd>Attack Speed</span><br>+250% <span class=attackspd>Enchanted Damage</span><br>+100 <span class=allstats>All Stats gain per hit</span><br>-100 <span class=allstats>All stats per attack(enemy)</span><p class=info>Upgraded Ultimate the most powerful deadly item.Ouch!</div>");

//2:1 Doom Horn "doomh"
document.getElementById('btndoomh').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Doom Horn<p>+300 <span class=plusstats>All stats</span><br>+Max level<p class=info>Cut from the sapphire Body of Enulaia, it opens the soul of the Gate Keeper</div>");

//2:2 Jagged Sword "jags"
document.getElementById('btnjags').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Jagged Sword<p>Sword granting the bearer immortal blazing fast. Grants 100% attack speed.</div>");

//2:3 Jagged Blade "jagb"
document.getElementById('btnjagb').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Jagged Blade<p>Axe granting the bearer immortal power. Grants 800 damage.</div>");

//2:4 Demon Edge "dedg"
document.getElementById('btndedg').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Demon Edge<p>A demonic blade granting the bearer immortal strength. Grants 500% enchanted damage.</div>");

//2:5 Gem of Shadow "gem"
document.getElementById('btngem').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Gem of Shadow<p>+ True Sight<br>+50 <span class=plusstats>All stats</span><br>+3 sec <span class=passive>Fading Time</span><p class=info>A crystal from the quest. If the hero dies, the Gem of Shadow is dropped.</div>");

//2:6 Immunity Necklace "imm"
document.getElementById('btnimm').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Immunity Necklace<p>+ <span class=buffs>Immortality</span><p class=info>Alpha, the Demigod, was said to own a shield that protected him from death itself.</div>");

//2:7 Replication "rep"
document.getElementById('btnrep').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Replication<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1005</span><p class=shop>Drop item on shop to sell<br><span class=lclick>Left-Click to Use</span><p>+50000 <span class=lifebonus>Life Bonus</span><br>+ Replicate <span class=active>(active)</span><br>Damage deal 1.25%<br>Damage taken 200%<p class=info>A Rare gift of Omega containing 2 charges for 150 seconds must use wisely<p>If the last charge is used item will be removed<p><span class=cooldown>Cooldown</span>: 300 Seconds</div>");

//2:8 Balnazzar's Hand "bhand"
document.getElementById('btnbhand').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Balnazzar's Hand<br><span class=lclick>Left-Click to Use</span><p>+500 <span class=damage>Damage AoE</span><br>+1 Infernal<p class=info>Feel like Balnazzar's always do. Calls down Infernal from the sky. The Infernal lasts 60 seconds.<p><span class=mana>Mana Cost</span>: 850<br><span class=cooldown>Cooldown</span>: 300 Seconds</div>");

//2:9 Eternal Aura "eta"
document.getElementById('btneta').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Eternal Aura<p>+4 <span class=buffs>Most Buffs</span><p class=info>An Eternal Aura is a tiny piece of Atiesh, Greatstaff of the Guardian, which was last wielded by the Last Guardian, Medivh. Once all forty splinters are found, they may be assembled into the Frame of Atiesh.</div>");

//2:10 Dual Sword "duals"
document.getElementById('btnduals').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Dual Sword<p>+100% <span class=attackspd>Attack Speed</span><br>+800 <span class=damage>Damage</span><p class=info>Dual Sword granting the bearer immortal blazing fast and immortal power</div>");

//2:11 Ultimate "ult"
document.getElementById('btnult').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Ultimate<p>+1600 <span class=damage>Damage</span><br>+200% <span class=attackspd>Attack Speed</span><br>+250% <span class=attackspd>Enchanted Damage</span><p class=info>Ultimate the most powerful deadly item. Ouch!</div>");

//3:1 Ani Cages "ac"
document.getElementById('btnac').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Ani Cages<p>+15% <span class=lifereturn2>Life Return</span><br>+15% <span class=manareturn2>Mana Return</span><br>+100 <span class=plusstats>All stats</span><p class=info>This item is a cage of all animals.</div>");

//3:2 Cage Large "lc"
document.getElementById('btnlc').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Cage Large<p>+5% <span class=lifereturn2>Life Return</span><br>+5% <span class=manareturn2>Mana Return</span><br>+50 <span class=agi>Agility</span><p class=info>This item is a cage of Rat, Seal, Sheep, Skink, and Stag.</div>");

//3:3 Cage Medium "cm"
document.getElementById('btncm').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Cage Medium<p>+5% <span class=manareturn2>Mana Return</span><br><span class=plusstats>+50 </span><span class=int>Intelligence</span><p class=info>This item is a cage of Hermit Crab, Penguin, Pig, Rabbit, and Raccoon.</div>");

//3:4 Cage Small "cgs"
document.getElementById('btncgs').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Cage Small<p>+5% <span class=lifereturn2>Life Return</span><br>+50 <span class=str>Strength</span><p class=info>This item is a cage of dog, chicken, crab, fel boar, and frog.<p class=note>Does stack with other life return</div>");

//3:5 Frog "fro"
document.getElementById('btnfro').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>(Frog)<p><span class=shop>Drop item on shop to sell</span><br>A secret fog? grants +1 to all stats.</div>");

//3:6 Satanic Chicken "stc"
document.getElementById('btnstc').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Satanic Chicken<p>+3%<br><span class=plusstats>Regenerates a portion of an enemy's current hit point</span><p class=info>POKPOKPOK!</div>");

//3:7 Animals "an"
document.getElementById('btnan').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'><span class=gold>Animals:</span><br>Chicken<br>Crab<br>Dog<br>Fel Boar<br>Hermit Crab<br>Penguin<br>Pig<br>Rabbit<br>Raccoon<br>Rat<br>Seal<br>Sheep<br>Skink<br>Stag</div>");

//3:8 Runes "run"
document.getElementById('btnrun').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'><span class=gold>Runes:</span><br>Double Damage<br>Haste<br>Illusion<br>Level Up<br>Regeneration</div>");

//3:9 Explosive Barrel "eba"
document.getElementById('btneba').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Barrel of Explosives<p>All players + <img alt=gold src=items/gold.jpg> <span class=gold>500</span></div>");

//3:10 Secret Place "secp"
//Not appended due to small size

//3:11 Fountain of the Thunderbluff / Rexxar's Shop "fot"
document.getElementById('btnfot').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Fountain of Thunderbluff / Rexxar's Shop<p>All players + <img alt=gold src=items/gold.jpg> <span class=gold>1000</span></div>");

//3:12 Krechek's soul "k1m"
document.getElementById('btnk1m').insertAdjacentHTML('afterend', "<div class='dropdown-content l b'>Kerchek's Soul<p class=note>Cannot carry other soul if you carry this</div>");

//4:1 Hastarium "hast"
document.getElementById('btnhast').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Hastarium<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>600</span><p class=shop>Drop item on shop to sell<p>A spear-styled weapon used by Greek skirmishers, an alternative to the conventional javelin or spear, grants +10 damage and 15% attack speed</div>");

//4:2 Javelin "jav"
document.getElementById('btnjav').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Javelin<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>300</span><p>The word javelot probably originated from the Celtic language, Increased 9 damage also grants the friendly nearby ranged units increased attack 9% damage</div>");

//4:3 Savior's Claw "savcl"
document.getElementById('btnsavcl').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Savior's Claw<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>140</span><p class=shop>Drop item on shop to sell<p>Increases the attack damage of the Hero by 6 when worn.</div>");

//4:4 Evil Soul "esoul"
document.getElementById('btnesoul').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Evil Soul<p><span class=lclick>Gives:</span><br>No Power<br>Gold if you sell<br>Upgrade some items<br><span class=lclick>Requires:</span><br>Drops from souls on Normal/Classic<br>Drops from fallen units on Skirmish<p class=soul>Used semtry ward to reveal the souls on Normal/Classic modes only has a 20% chance to random drop from fallen souls, on Skirmish mode has a 15% chance to random drops from fallen units<p class=note>Note: The souls in Normal/Classic modes are depends on how many fallen enemy heroes</div>");

//4:5 Warhammer "warh"
document.getElementById('btnwarh').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Warhammer<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>825</span><p class=shop>Drop item on shop to sell<p>A hammer of muradin. It's hammer time! Adds +24 Damage.</div>");

//4:6 Imperial Axe "iaxe"
document.getElementById('btniaxe').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Imperial Axe<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>837</span><p><span class=shop>Drop item on shop to sell</span><br>This ancient relic of the orcs is said to hold the power to call the spirits of all orcs. It imbues its owner with 1 hit point per second regeneration bonus and 15 attack damage.</div>");

//4:7 Swordstaff "ss"
document.getElementById('btnss').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Swordstaff<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>550</span><p class=shop>Drop item on shop to sell<p>A Swordstaff is a Danish polearm, used in the medieval ages. adding +18 to attack damage.</div>");

//4:8 Coral Blades "cbla"
document.getElementById('btncbla').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Coral Blades<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>930</span><p class=shop>Drop item on shop to sell<p>A Coral Blade of Naga's. Adds 21 damage.</div>");

//4:9 Red Boots "rboo"
document.getElementById('btnrboo').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Red Boots<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>250</span><p class=shop>Drop item on shop to sell<p>Red boots, increasing movement rate by 50.<p class=note>Movement Speed does not stack with Boots of Speed, Wirt's or Boots of Wind.</div>");

//4:10 Ruthless Gauntlet "rgau"
document.getElementById('btnrgau').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Ruthless Gauntlet<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>305</span><p class=shop>Drop item on shop to sell<p>Increases the attack speed of the Hero by 15% when worn.</div>");

//4:11 Sapphire Ring "sri"
document.getElementById('btnsri').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Sapphire Ring<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>187</span><p class=shop>Drop item on shop to sell<p>Increases the Hero's hit point regeneration by 2 hit points per second.</div>");

//4:12 Heroism Mask "hma"
document.getElementById('btnhma').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Heroism Mask<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>187</span><p class=shop>Drop item on shop to sell<p>Increases the Hero's rate of mana regeneration by 50% when worn</div>");

//5:1 Leremias "ler"
document.getElementById('btnler').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Leremias<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>925</span><p class=shop>Drop item on shop to sell<p>A rare torture device that instills fear into the enemy, causing him to break his stance, thus lowering his defence, gives the wielder +5 armor and decreases the armor of enemies near him by 5</div>");

//5:2 Hood of Cunning "hoc"
document.getElementById('btnhoc').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Hood of Cunning<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>325</span><p>Gives the Hero a 5% chance to avoid an attack</div>");

//5:3 Villainous Shield "vs"
document.getElementById('btnvs').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Villainous Shield<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>225</span><p class=shop>Drop item on shop to sell<p>Increases the Hero's armor by 5 and hit points by 100 when worn.</div>");

//5:4 Helm of King "hk"
document.getElementById('btnhk').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Helm of King<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>475</span><p class=shop>Drop item on shop to sell<p>The helmet of a legendary warrior who fell in battle. Adds +5 armor and regenerates 3 hit points per second.</div>");

//5:5 Breast Plate "bp"
document.getElementById('btnbp').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Breast Plate<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>800</span><p class=shop>Drop item on shop to sell<p>A heavy armor commonly used by Knights. Provides a good amount of defense, but the weight makes the wearer difficult to breath. Keep it away from children or anyone with asthma. Adds 10 armor.</div>");

//5:6 Mithril T-shirt "ms"
document.getElementById('btnms').insertAdjacentHTML('afterend', "<div class='dropdown-content l t'>Mithril-shirt<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>300</span><p><span class=shop>Drop item on shop to sell</span><br>A shirt of mail forged from mithril given by Thorin Oakenshield to Bilbo Baggins. Adds 5 armor.</div>");

//5:7 Celestial Ring "cr"
document.getElementById('btncr').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Celestial Ring<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>87</span><p class=shop>Drop item on shop to sell<p>Increases the armor of the Hero by 2 when worn.</div>");

//5:8 Studded Leather "sl"
document.getElementById('btnsl').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Studded Leather<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>325</span><p class=shop>Drop item on shop to sell<p>Leather that Increases armor by 5 and attack rate by 10% when worn.</div>");

//5:9 Elune's Cloak "ec"
document.getElementById('btnec').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Elune's Cloak<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>300</span><p><span class=shop>Drop item on shop to sell</span><br>A cloak made of a magic material by the elune, granting the wearer 15% resistance to spell attacks.</div>");

//5:10 Sefer Buckler "sb"
document.getElementById('btnsb').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Sefer Buckler<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>150</span><p class=shop>Drop item on shop to sell<p>This newest product of BlockAll Technology is a user-friendly, small, light yet strong enough to block most attacks. Gives 40% chance to block 30 damage.<p class=note>Cannot carry more than one</div>");

//5:11 Helm of Hador "hh"
document.getElementById('btnhh').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Helm of Hador<br><img alt='gold coin image'src=items/gold.jpg> <span class=gold>500</span><p class=shop>Drop item on shop to sell<p>A magical helm bore by the rulers of Dor-lomin. Also called the Dragon-helm due to its design definitely. Grants 10% life steal<p class=note>Orb effects do not stack</div>");

//5:12 Dagger of Escape "doe"
document.getElementById('btndoe').insertAdjacentHTML('afterend', "<div class='b dropdown-content l'>Dagger of Escape<br><img alt='mana icon'src=items/mana.jpg> <span class=gold>75 </span><img alt='gold coin image'src=items/gold.jpg> <span class=gold>1000</span><p><span class=shop>Drop item on shop to sell</span><br><span class=lclick>Left-Click to Use</span><br>Teleports the Hero a short distance.<p><span class=cooldown>Cooldown: </span>30 Seconds.</div>");

//6:
//6:
//6:
//6:
//6:
//6:
//6:
//6:
//6:
//6:
//6: