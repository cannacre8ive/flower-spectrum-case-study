// Canonical IDs, labels, order and colors preserved; legacy effects copy excluded.
export const PROFILES = [
 {key:'gas_fuel',label:'Gas / Fuel',short:'Gas',color:'#C9A84C'},
 {key:'earthy_dank',label:'Earthy / Dank',short:'Earth',color:'#6B8E5A'},
 {key:'citrus_bright',label:'Citrus / Bright',short:'Citrus',color:'#D4A843'},
 {key:'fruity_sweet',label:'Fruity / Sweet',short:'Fruit',color:'#B75F4A'},
 {key:'floral_soft',label:'Floral / Soft',short:'Floral',color:'#B98BBE'},
 {key:'dessert_creamy',label:'Dessert / Creamy',short:'Dessert',color:'#D6B58A'},
 {key:'spicy_warm',label:'Spicy / Warm',short:'Spice',color:'#9E6B4A'},
 {key:'piney_fresh',label:'Piney / Fresh',short:'Pine',color:'#4F7A5B'},
 {key:'herbal_woody',label:'Herbal / Woody',short:'Herb',color:'#7FA688'},
 {key:'tropical_tangy',label:'Tropical / Tangy',short:'Tropic',color:'#D28B49'}
];
export const PROFILE_MAP=Object.fromEntries(PROFILES.map(p=>[p.key,p]));
export const PROFILE_ORDER=PROFILES.map(p=>p.key);
