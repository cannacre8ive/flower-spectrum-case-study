import {parsePanel,reviewPanel} from './coa-import.js';
import {classify} from './classifier.js';
export const MODEL_VERSION='FS-38 / source a6b34f3';
export function exampleText(example){return `Product: ${example.name}\nBatch: ${example.id}\nAnalyte\tResult (%)\n${example.rows.map(r=>r.join('\t')).join('\n')}\nTotal Terpenes\t${example.total.toFixed(2)}`;}
export function inspected(example){return parsePanel(exampleText(example));}
export function createRecord(panel,example,confirmed=false){
 const audit=reviewPanel(panel.rows,panel.total);
 if(!confirmed)throw Error('Review the source rows and confirm them before creating a record.');
 if(audit.issues.length)throw Error(audit.issues.join(' '));
 if(panel.rows.some(r=>r.flag && !/Below detection/.test(r.flag)))throw Error('Resolve flagged source rows before continuing.');
 const classification=classify(audit.values);
 if(!classification)throw Error('This panel has no supported positive values.');
 return {id:example.id,name:example.name,kind:'Fictional educational portfolio specimen',modelVersion:MODEL_VERSION,sourceFile:example.file,sourceRows:structuredClone(panel.rows),reportedTotal:Number(panel.total),coverage:audit.coverage,values:audit.values,classification};
}
export const exampleRecord=example=>createRecord(inspected(example),example,true);
export function recordSignature(record){return JSON.stringify([record.id,record.modelVersion,record.sourceRows.map(r=>[r.raw,r.value,r.key]),record.reportedTotal]);}
export function adaptRecord(record,partner,format){return {recordId:record.id,sourceSignature:recordSignature(record),format,partner:partner.id,brand:partner.brand,classification:record.classification,sourceFile:record.sourceFile};}
