const buttons = document.querySelectorAll('.btn-group button');
const display = document.getElementById('content');

const contents = {
  shayari: `
  <p><em>Tumhari adaao mein ek ajeeb si narmiyaan hai,
Jaise hawa bhi tumse seekh kar hi chalti ho.
Tumhari muskurahat ek pal ke liye nahi,
Pura din khubsurat bana dene ka hunar rakhti hai.

Aur aankhon ki toh baat hi mat karo…
Jaise unme khwaab bhi sharmake pighal jaate hain.
Tum samajhti ho khud ko bas ek aam sa chehra,
Par tumhari saari baatein tumhe baakiyon se khaas bana deti hain.

Sachi baat?
Tum jaise log mil jaayein na zindagi mein,
Toh phir kisi aur cheez mein dil nahi lagta</em></p>
  `,
  story: `
  <p><center> Anu or meri shuruat</center>
    🌸 Pehli baar jab maine Anushka ko dekha tha na,
woh Jeewan sir ki maths ki class thi.
Sach bolu toh main maths se zyada
uski taraf dhyaan deta tha…

Mere doston ne kaha,
“Jeewan sir ke yaha tuition best hai”,
Mujhe toh lagta hai unhone mujh par ehsaan kiya,
varna Anushka ko dekhne ka mauka kaise milta?

Woh aati thi bag leke,
chup chaap, seedhi si ladki…
Par aankhon me ek alag si shaitani chupi hoti thi
jo sirf main dekh pata tha…

Aur main?
Main toh wohi backbencher shaitan ladka tha,
jo attendance se zyada nazar uss ek ladki par rakhta tha.

Kabhi-kabhi karan se zid karke
uske piche wali seat pe baithne ki koshish karta,
sirf itna sa…
ki usko thodi der zyada dekh paun.

Par us waqt himmat naam ki cheez
shayad mere syllabus me nahi thi.
Har baar socha,
“aaj bol dunga”
lekin dil ne hamesha bola,
“kal sahi…”

Aur fir pata hi nahi chala
9th se Masters tak aa gaye hum
Aur himmat ab aayi…
par mauka kam hota gaya.

Bola bhi kai baar,
par woh hamesha muskurake
apna decision clear kar deti hai.
Aur main samajhta bhi hoon…
kyunki na kehne ka bhi
utna hi haq hota hai jitna haan ka.

Phir bhi,
jab kabhi uski ek jhalak milti hai,
ek chhoti si smile milti hai,
zara sa gussa bhi mil jaaye na…
toh lagta hai,
jeevan sir ki class ka pehla din
aaj bhi kahin mere aas paas ghoom raha hai.

Yeh kahani abhi rukti nahi hai…
baaki sab waqt ko tai karne do.
Bas itna jaan lo —
Anu tum hamesha meri story ka
most beautiful chapter banke rahogi ✨ 💖
  </p>
  `,
  quote: `
  <p>
    “Uske saath ho ya na ho,
     par uske baare me sochna
     mere din ka sabse khoobsurat hissa hota hai "<br/><br />
  </p>
  `,
  joke: `
  <p>
 😆 Jokes Pack

1️⃣ Teacher: Why are you late?
Student: Sir traffic bahut tha.
Teacher: School toh paas me hi hai!
Student: Isi liye toh traffic tha, sab yahi aate hain!

2️⃣ Girlfriend: Tum mere liye kya kar sakte ho?
Boy: Mobile charge kar dunga.
GF: Bas?
Boy: Arre 100% battery hogi toh tum khush nahi hogi kya?

3️⃣ Friend: Bhai raat ko neend nahi aati kya kare?
Me: Student bano, khud hi aa jaayegi.
(Assignments ke vajah se) 🤣

4️⃣ Doctor: Aapko rest ki zarurat hai.
Patient: Par kaise?
Doctor: Phone ghar rakho.
Patient: Koi aur ilaaj? 🥲

5️⃣ Teacher: Padhai me future dekha?
Student: Haan sir, exam hall ke bahar security guard bana hua.

6️⃣ GF: Tum mujhe husy kyu nahi dete?
BF: Tum gussa band karo, khushi free me aa jayegi! 😌

7️⃣ Maa: Ye phone tumhare baap ke paise se liya?
Me: Nahi maa, aapke pati ke paise se! 😎
  </p>
  `
};

let current = 'shayari';
display.innerHTML = contents.shayari;

function setActiveButton(selectedBtn) {
  buttons.forEach(btn => {
    if (btn === selectedBtn) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      btn.setAttribute('tabindex', '0');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('tabindex', '-1');
    }
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.id.split('-')[1];
    if (category === current) return;
    current = category;
    setActiveButton(btn);
    display.style.opacity = 0;
    setTimeout(() => {
      display.innerHTML = contents[category];
      display.style.opacity = 1;
      display.focus();
    }, 300);
  });
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});
