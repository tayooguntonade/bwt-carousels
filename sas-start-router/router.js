(function(){
if(document.getElementById('sas-router'))return;
var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;600;700&display=swap';document.head.appendChild(l);
var s=document.createElement('style');s.textContent="\n#sas-router{--bg:#0B2A20;--bg2:#123B2D;--card:#164735;--line:#235A45;--gold:#D4A657;--cream:#F5EFE3;--mute:#A9C2B6;--ink:#0B2A20}\n:where(#sas-router *){box-sizing:border-box;margin:0;padding:0}\nhtml,body{background:#0B2A20!important}\n#sas-router{position:fixed;inset:0;overflow-y:auto;z-index:2147483000;color:var(--cream);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\n#sas-router{background:radial-gradient(1200px 600px at 80% -10%,#1d5240 0%,transparent 60%),var(--bg)}\n.wrap{max-width:720px;margin:0 auto;padding:28px 16px 60px}\n.brand{font-family:'DM Serif Display',serif;font-size:20px;letter-spacing:.01em}\n.brand b{color:var(--gold);font-weight:400}\n.eyebrow{margin-top:36px;color:var(--gold);font-weight:700;font-size:13px;letter-spacing:.14em;text-transform:uppercase}\nh1{font-family:'DM Serif Display',serif;font-weight:400;font-size:clamp(32px,7vw,50px);line-height:1.08;margin:10px 0 12px}\nh1 em{font-style:normal;color:var(--gold)}\n.lead{color:var(--mute);font-size:17px;line-height:1.5;max-width:560px}\n.steps{display:flex;gap:8px;margin:28px 0 14px}\n.steps i{height:4px;flex:1;border-radius:4px;background:var(--line)}\n.steps i.on{background:var(--gold)}\n.q{font-weight:700;font-size:20px;margin-bottom:14px}\n.grid{display:grid;gap:12px}\n@media(min-width:600px){.grid{grid-template-columns:1fr 1fr}}\nbutton.opt{all:unset;cursor:pointer;display:block;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:20px 20px 18px;transition:transform .15s,border-color .15s,background .15s}\nbutton.opt:hover,button.opt:focus-visible{border-color:var(--gold);transform:translateY(-2px);background:#1a5240}\n.opt .tag{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}\n.opt .t{display:block;font-family:'DM Serif Display',serif;font-size:24px;line-height:1.15;margin:8px 0 6px}\n.opt .d{display:block;color:var(--mute);font-size:15px;line-height:1.45}\n.opt .go{display:inline-block;margin-top:14px;font-weight:700;color:var(--cream)}\n.opt.primary{background:var(--gold);border-color:var(--gold)}\n.opt.primary .tag,.opt.primary .t,.opt.primary .d,.opt.primary .go{color:var(--ink)}\n.opt.primary:hover{background:#e0b468}\n.back{all:unset;cursor:pointer;color:var(--mute);font-size:14px;margin-top:16px;display:inline-block}\n.back:hover{color:var(--cream)}\n.hide{display:none}\n.proof{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:34px;padding-top:20px;border-top:1px solid var(--line);color:var(--mute);font-size:14px}\n.proof b{color:var(--cream)}\n.foot{margin-top:28px;color:#7f9b8f;font-size:12px;line-height:1.5}\n.foot a{color:#7f9b8f}\n";document.head.appendChild(s);
var d=document.createElement('div');d.id='sas-router';d.innerHTML="<div class=\"wrap\">\n  <div class=\"brand\">Serviced Accommodation <b>Success</b></div>\n\n  <div class=\"eyebrow\">From the BrickzwithTipz video</div>\n  <h1>Two minutes. <em>Your next step.</em></h1>\n  <p class=\"lead\">Tell me where you are and I'll send you to the right place. Two quick taps.</p>\n\n  <div class=\"steps\"><i id=\"s1\" class=\"on\"></i><i id=\"s2\"></i></div>\n\n  <section id=\"step1\">\n    <p class=\"q\">Do you own property in the UK?</p>\n    <div class=\"grid\">\n      <button class=\"opt\" data-who=\"landlord\">\n        <span class=\"tag\">Landlord</span>\n        <span class=\"t\">Yes, I own property</span>\n        <span class=\"d\">Tenanted, empty or more than one. You want it to earn more under the new rules.</span>\n        <span class=\"go\">Choose &rarr;</span>\n      </button>\n      <button class=\"opt\" data-who=\"r2r\">\n        <span class=\"tag\">Starting out</span>\n        <span class=\"t\">Not yet. I want to start with rent to rent</span>\n        <span class=\"d\">Run serviced accommodation without buying a property or saving a deposit.</span>\n        <span class=\"go\">Choose &rarr;</span>\n      </button>\n    </div>\n  </section>\n\n  <section id=\"step2\" class=\"hide\">\n    <p class=\"q\" id=\"q2\">How do you want to start?</p>\n    <div class=\"grid\">\n      <button class=\"opt primary\" data-how=\"call\">\n        <span class=\"tag\">Fastest</span>\n        <span class=\"t\">Talk to the team now</span>\n        <span class=\"d\" id=\"callDesc\">A free 45-minute call with the team. We look at your situation and tell you honestly if it fits.</span>\n        <span class=\"go\">Book my call &rarr;</span>\n      </button>\n      <button class=\"opt\" data-how=\"webinar\">\n        <span class=\"tag\">Free</span>\n        <span class=\"t\">Watch the free session first</span>\n        <span class=\"d\" id=\"webDesc\">Live with Tayo. How it works, the real numbers and the mistakes to avoid.</span>\n        <span class=\"go\">Save my seat &rarr;</span>\n      </button>\n    </div>\n    <button class=\"back\" id=\"back\">&larr; Back</button>\n  </section>\n\n  <div class=\"proof\">\n    <span><b>11+ years</b> UK landlord</span>\n    <span><b>Qualified</b> UK mortgage broker</span>\n    <span><b>500+</b> people trained</span>\n  </div>\n\n  <p class=\"foot\">General information, not financial, tax, legal or mortgage advice. Results depend on the property and the area. &copy; Serviced Accommodation Success.</p>\n</div>";document.body.appendChild(d);
document.title='Start Here | Serviced Accommodation Success';
function el(id){return document.getElementById(id)}

(function(){
  var CALL = 'https://calendly.com/d/ds9s-5rw-zb4/sas-disc-call-rr-ss';
  var ROUTES = {
    'landlord-call':    CALL,
    'landlord-webinar': 'https://landlords.servicedaccommodationsuccess.com/',
    'r2r-call':         CALL,
    'r2r-webinar':      'https://lp.servicedaccommodationsuccess.com/sas-masterclass'
  };
  var COPY = {
    landlord: {q:'You own property. How do you want to start?',
      call:'A free 45-minute call with the team about your property. Mortgage, tenant, numbers. We tell you honestly if it fits.',
      web:'The Landlords Playbook. Live with Tayo. How to switch a buy-to-let to serviced accommodation.'},
    r2r: {q:'Starting with rent to rent. How do you want to start?',
      call:'A free 45-minute call with the team. Your budget, your area, your first property. We tell you honestly if it fits.',
      web:'The free masterclass. Live with Tayo. How to launch without owning a property.'}
  };
  var qp = new URLSearchParams(location.search);
  var who = null;
  
  function track(ev, data){
    try{ (window.dataLayer = window.dataLayer || []).push(Object.assign({event: ev}, data||{})); }catch(e){}
    try{ if(window.fbq){ fbq('trackCustom', ev, data||{}); } }catch(e){}
  }
  function show(n){
    el('step1').classList.toggle('hide', n!==1);
    el('step2').classList.toggle('hide', n!==2);
    el('s2').classList.toggle('on', n===2);
    el('sas-router').scrollTo({top:0,behavior:'smooth'});
  }
  document.querySelectorAll('[data-who]').forEach(function(b){
    b.addEventListener('click', function(){
      who = b.getAttribute('data-who');
      el('q2').textContent = COPY[who].q;
      el('callDesc').textContent = COPY[who].call;
      el('webDesc').textContent = COPY[who].web;
      track('router_who', {who: who});
      show(2);
    });
  });
  el('back').addEventListener('click', function(){ show(1); });
  document.querySelectorAll('[data-how]').forEach(function(b){
    b.addEventListener('click', function(){
      var route = who + '-' + b.getAttribute('data-how');
      var u = new URL(ROUTES[route]);
      u.searchParams.set('utm_source', qp.get('utm_source') || 'youtube');
      u.searchParams.set('utm_medium', qp.get('utm_medium') || 'video');
      u.searchParams.set('utm_campaign', qp.get('utm_campaign') || 'btl-to-sa');
      u.searchParams.set('utm_content', route);
      if(qp.get('fbclid')) u.searchParams.set('fbclid', qp.get('fbclid'));
      track('router_route', {route: route});
      setTimeout(function(){ location.href = u.toString(); }, 150);
    });
  });
})();

})();
