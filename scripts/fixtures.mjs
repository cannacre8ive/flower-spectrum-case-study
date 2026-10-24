import {jsPDF} from 'jspdf';
import {createHash} from 'node:crypto';
import {mkdirSync,writeFileSync} from 'node:fs';
import {EXAMPLES} from '../src/data/examples.js';
mkdirSync('public/examples',{recursive:true});
for(const example of EXAMPLES){const doc=new jsPDF({unit:'pt',format:'letter'});doc.setFileId(createHash('sha256').update(example.id).digest('hex').slice(0,32));doc.setCreationDate("D:20261024050000+00'00'");doc.setFontSize(10);doc.text('FLOWER SPECTRUM / FICTIONAL EDUCATIONAL FIXTURE',48,48);doc.setFontSize(28);doc.text('Terpene report specimen',48,100);doc.setFontSize(11);doc.text('Not a laboratory certificate. All values are synthetic.',48,133);doc.text(`Product: ${example.name}`,48,185);doc.text(`Batch: ${example.id}`,48,207);doc.text('Analyte',48,255);doc.text('Result (%)',360,255);let y=288;for(const [label,value] of example.rows){doc.text(label,48,y);doc.text(value.toFixed(2),360,y);y+=28;}doc.line(48,y,515,y);doc.text('Total Terpenes',48,y+30);doc.text(example.total.toFixed(2),360,y+30);doc.text('Method: synthetic case-study demonstration',48,y+85);doc.text('This specimen exists to demonstrate PDF extraction and source review.',48,730);writeFileSync('public/examples/'+example.file,Buffer.from(doc.output('arraybuffer')));}
await import('./pages.mjs');
