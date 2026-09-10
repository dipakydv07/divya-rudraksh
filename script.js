const products=[
 ["5 मुखी रुद्राक्ष","₹299","rudraksh","https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&fit=crop&w=700&q=85"],
 ["7 मुखी रुद्राक्ष","₹699","rudraksh","https://images.unsplash.com/photo-1614859324967-bdf3e2d4f5c5?auto=format&fit=crop&w=700&q=85"],
 ["रुद्राक्ष माला","₹599","mala","https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=85"],
 ["108 दाना रुद्राक्ष माला","₹899","mala","https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=700&q=85"],
 ["पूजा सामग्री सेट","₹449","pooja","https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=85"],
 ["धूप-बत्ती पूजा पैक","₹199","pooja","https://images.unsplash.com/photo-1602874801006-e26c1f3c4a4a?auto=format&fit=crop&w=700&q=85"],
 ["शंकर जी की मूर्ति","₹50","pooja","images/shankar-ji.jpg"],
 ["राम जी की मूर्ति","₹50","pooja","images/ram-ji.jpg"],
 ["गणेश जी की मूर्ति","₹50","pooja","images/ganesh-ji.jpg"],
 ["अगरबत्ती","₹30","pooja","images/agarbatti.jpg"],
 ["धूप","₹20","pooja","images/dhoop.jpg"],
 ["चंदन","₹35","pooja","images/chandan.jpg"],
 ["मिक्स पूजा सामग्री","₹200","pooja","images/pooja-material.jpg"]
["शिव जी की मूर्ति (नई)","₹50","pooja","images/shiv-ji-2.jpg"],
 ["श्री राम जी की मूर्ति (नई)","₹50","pooja","images/ram-ji-2.jpg"],
 ["गणेश जी की मूर्ति (नई)","₹50","pooja","images/ganesh-ji-2.jpg"],
 ["MangalDeep Flora Mogra अगरबत्ती","₹20","pooja","images/mangaldeep-mogra.jpg"],
 ["MangalDeep Deluxe धूप","₹10","pooja","images/mangaldeep-dhoop.jpg"],
 ["चंदन (नई)","₹60","pooja","images/chandan-2.jpg"],
 ["पूजन सामग्री किट","₹200","pooja","images/pooja-samagri-kit.jpg"],
];
const phone="919534380378";
function render(list=products){
 document.getElementById("grid").innerHTML=list.map(p=>{
  const msg=`Namaste Divya Rudraksh, mujhe "${p[0]}" (${p[1]}) order karna hai. Cash on Delivery chahiye.`;
  return `<article class="card"><img src="${p[3]}" alt="${p[0]}" loading="lazy"><div class="body"><h3>${p[0]}</h3><div class="price">${p[1]}</div><a class="order" target="_blank" href="https://wa.me/${phone}?text=${encodeURIComponent(msg)}">📲 WhatsApp पर Order करें</a></div></article>`;
 }).join("");
}
function filterCat(cat){render(cat==="all"?products:products.filter(p=>p[2]===cat));document.getElementById("products").scrollIntoView({behavior:"smooth"})}
render();
