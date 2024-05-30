// lorem text
const text = [
  `Shiva trident meditating snake crescent moon atop the head. Ganges river flows from the hair, mighty tiger skin wrap divine blue neck. Holy ash smeared all over the body, fierce third eye brings cosmic destruction. Nandi the bull companion vigilant mount. Vibrant Rudraksha beads sacred Om chant. Drumbeats resonate universe creation tandava dance. Luminous figure in the Himalayas, serene yet potent. Divine yogi Kailash dweller. Shiva the destroyer protector. Beloved Parvati consort, son Ganesha elephant-headed, Kartikeya warrior god. Shiva devotees chant Om Namah Shivaya.`,
  `Next level mysticism yogic practices, bhakti fervor meditation deep spirituality. Himalayas serene abode, cosmic dance tandava universe rhythm. Eternal ascetic dreadlocks holy Ganges moon ornament serpent garland. Meditation supreme, celestial beings wisdom shared. Mount Kailash revered abode, eternal meditation divine peace. Sacred Rudraksha potent symbol, divine ash purity essence.`,
  `Mystical mantra Om Namah Shivaya, cosmic resonance universe vibration. Ascetic Shiva embodiment, supreme Yogi in trance. Holy Ganges from matted hair, crescent moon adornment. Powerful trident symbol, annihilation and regeneration cycle. Devotees seek blessings, destroyer and creator balance. Tandava cosmic dance, rhythm of creation and destruction.`,
  `Serene meditation fiery third eye, cosmic wisdom destroyer protector. Nandi vigilant mount, bull companion loyal. Parvati beloved consort, divine family revered. Ganesha remover of obstacles, Kartikeya warrior leader. Shiva temples resonant chants, devotees' hearts filled with reverence.`,
  `This cosmic play profound as it is mystical! Your chants lack intensity. You can't just invoke divinity without fervor. That makes me feel detached! Anyhoo, your rituals will immerse you in Shiva's divine presence as if you were in Mount Kailash itself. I just invoked him! You've awakened the cosmic energy! Devotees! Quit half-hearted worship, you seekers! Parvati, I don't regret this, but I both honor and respect it. Nandi can't comprehend his tasks because he forgot the divine instructions.`,
  `Bhasma holy ash sacred. Rudraksha beads divine. Trident symbol power. Crescent moon adornment. Serpent garland protector. Meditative trance supreme. Divine blue throat, poison holder. Ganges flowing matted hair, sacred river. Tiger skin wrap, ascetic attire. Cosmic dance tandava, universe rhythm.`,
  `Divine ascetic holy Ganges moon ornament serpent garland meditation supreme. Rudraksha beads powerful. Crescent moon atop head. Cosmic dance tandava universe rhythm. Nandi vigilant mount. Parvati consort. Ganesha remover of obstacles. Kartikeya warrior leader. Shiva devotees reverent chants.`,
  `Shiva trident cosmic dance third eye fierce. Nandi loyal companion. Rudraksha beads sacred. Holy ash smeared body. Crescent moon adornment. Ganges flowing matted hair. Parvati consort divine family. Ganesha obstacle remover. Kartikeya warrior leader.`,
  `Yogi meditation mount Kailash. Sacred Rudraksha. Divine ash purity. Trident cosmic power. Crescent moon atop head. Serpent garland protector. Ganges flowing hair. Tiger skin ascetic. Tandava dance rhythm. Beloved Parvati. Devotees chant Om Namah Shivaya.`,
  ];
const form = document.querySelector(".mahadeva-form");
const amount = document.querySelector("#amount");
const mahadevaText = document.querySelector(".mahadeva-text");
console.log(form);
console.log(amount);
console.log(mahadevaText);
form.addEventListener("submit",function(evt){
         evt.preventDefault();
         const val = parseInt(amount.value);
         const random = Math.floor(Math.random()*text.length);
         console.log(val);
         if(isNaN(val) || val<0 ||val>9 ){
            mahadevaText.innerHTML = `<p class="mahadevaText">${text[random]}</p>`;
         }
         else{
            let mahaText = text.slice(0,val);
            mahaText = mahaText.map((item)=> `<p class="mahadevaText" >${item}</p>` ).join(" ");
            mahadevaText.innerHTML=  mahaText;
         }
});
