const h1 = document.querySelector("#myH1");
console.log("querySelector ile id vasitesile  yazilmis : ");
console.log(h1);

const h2s = document.querySelectorAll(".myH2");
console.log("querySelectorAll ile id vasitesile  yazilmis : ");
console.log(h2s);
console.log(h2s.innerHTML);
console.log("underfained verir, cata bilmirem icindeki texte");
console.log(
  "querySelectorAll ile gelen netice nodelist oldugu ucun birbasa secmnek olmur"
);
console.log(h2s[0].innerHTML);
// amma bele cata bildim

const p = document.getElementById("myP");
console.log(p);
console.log("icindekine cata bilirem");
console.log(p.innerHTML);

const img = document.getElementsByClassName("img");
console.log(img);

// its for pull request
