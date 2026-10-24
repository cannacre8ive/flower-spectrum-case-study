import {PROFILES} from '../data/profiles.js';
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const n=v=>v.toFixed(2);
function arc(r,a,b){return `M ${n(300+r*Math.cos(a))} ${n(300+r*Math.sin(a))} A ${r} ${r} 0 0 1 ${n(300+r*Math.cos(b))} ${n(300+r*Math.sin(b))}`;}
export function fingerprintSVG(result,{labels=false,ink='#183E33',title='Ten-profile aroma fingerprint',highlight=null}={}){
 const scores=Object.fromEntries((result?.ranked||[]).map(p=>[p.key,p.score]));const max=Math.max(...Object.values(scores),.00001);
 let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title>`;
 [70,120,170,220].forEach(r=>s+=`<circle cx="300" cy="300" r="${r}" fill="none" stroke="${ink}" stroke-width=".8" opacity=".15"/>`);
 PROFILES.forEach((p,i)=>{const a=-Math.PI/2+i*Math.PI/5+.028,b=a+Math.PI/5-.056,ratio=(scores[p.key]||0)/max,r=65+155*ratio;const opacity=highlight&&highlight!==p.key?.15:1;
  s+=`<g opacity="${opacity}" data-profile="${p.key}">`;
  for(let ring=0;ring<10;ring++){const rr=65+(r-65)*ring/9;if(ratio>.0001)s+=`<path d="${arc(rr,a,b)}" stroke="${p.color}" stroke-width="${Math.min(9,Math.max(1,(r-65)/12))}" fill="none" stroke-linecap="round"/>`;}
  if(labels){const mid=(a+b)/2,x=300+264*Math.cos(mid),y=300+264*Math.sin(mid);s+=`<text x="${n(x)}" y="${n(y)}" text-anchor="middle" dominant-baseline="middle" fill="${ink}" font-family="Arial,sans-serif" font-size="13">${p.short}</text>`;}
  s+='</g>';
 });
 s+=`<circle cx="300" cy="300" r="9" fill="${ink}"/><circle cx="300" cy="300" r="25" fill="none" stroke="${ink}" stroke-width="1" opacity=".35"/></svg>`;return s;
}
export function bandSVG(result,width=1000,height=24){let x=0;const total=result.ranked.reduce((sum,p)=>sum+p.score,0);return result.ranked.filter(p=>p.score>0).map(p=>{let w=p.score/total*width;const el=`<rect x="${x}" y="0" width="${w+.2}" height="${height}" fill="${p.color}"/>`;x+=w;return el;}).join('');}
export const dataURI=svg=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
function text(x,y,value,size=24,extra=''){return `<text x="${x}" y="${y}" font-size="${size}" ${extra}>${esc(value)}</text>`;}
function fp(record,x,y,size){return `<g transform="translate(${x} ${y}) scale(${size/600})">${fingerprintSVG(record.classification).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')}</g>`;}
export function specimenSVG(record,partner,format='square'){
 const c=record.classification,lead=c.ranked[0],pair=c.ranked.slice(0,2).map(p=>p.short).join(' + '), isMenu=format==='menu',w=isMenu?850:1080,h=isMenu?1100:format==='story'?1920:format==='profile'?1350:1080;
 const cx=w/2;let content='';
 if(isMenu){
  content+=text(58,76,partner.brand,30)+text(58,160,'A field guide',70,'font-family="Georgia,serif"')+text(58,232,'to this flower.',70,'font-family="Georgia,serif"');
  content+=text(58,294,'Featured batch / educational menu specimen',20);
  content+=fp(record,180,310,490);
  content+=text(58,820,record.name,42,'font-family="Georgia,serif"')+text(58,865,pair,27)+text(58,915,`${record.reportedTotal.toFixed(2)}% total terpenes · ${record.id}`,20);
  content+=text(58,970,'The same fingerprint. A different place to discover it.',19);
  content+=text(58,1020,'Fictional study · aroma interpretation, not predicted effects',16);
 }else{
  const top=format==='story'?190:80, size=format==='story'?850:format==='profile'?790:700,fy=format==='story'?350:format==='profile'?230:190;
  content+=text(64,top,partner.brand,34)+text(w-64,top,'flower spectrum',25,'text-anchor="end"');
  content+=text(64,top+65,partner.sub,21);
  content+=fp(record,(w-size)/2,fy,size);
  const by=format==='story'?1390:format==='profile'?1100:920;
  content+=text(64,by,record.name,62,'font-family="Georgia,serif"')+text(64,by+57,pair,29);
  content+=text(64,h-50,`${record.id} · Fictional portfolio specimen`,19);
  if(format!=='square')content+=text(64,by+114,`${record.reportedTotal.toFixed(2)}% total terpenes in the example report`,23);
  if(format==='story')content+=text(64,by+184,'Aroma model. No effects prediction.',22);
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(partner.name+' '+format+' portfolio example')}" style="font-family:Arial,sans-serif;fill:#183E33"><rect width="${w}" height="${h}" fill="${partner.background}"/>${bandSVG(c,w,18)}${content}</svg>`;
}
export function labelSVG(record){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 330" role="img" aria-label="Illustrative fingerprint label, not a regulatory package" style="font-family:Arial,sans-serif;fill:#183E33"><rect width="780" height="330" rx="5" fill="#fff"/>${bandSVG(record.classification,780,13)}${fp(record,440,15,300)}${text(38,58,'flower spectrum',22)}${text(38,126,record.name,44,'font-family="Georgia,serif"')}${text(38,170,record.classification.ranked.slice(0,2).map(x=>x.short).join(' + '),24)}${text(38,235,record.id,17)}${text(38,276,'Fictional design study · aroma model',16)}</svg>`;}
