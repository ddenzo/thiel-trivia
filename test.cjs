const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {QUESTIONS}=require('./questions.js');
test('question bank has unique, sourced, unambiguous answers',()=>{
 assert.equal(QUESTIONS.length,136);
 assert.equal(new Set(QUESTIONS.map(q=>q.prompt)).size,136);
 for(const q of QUESTIONS){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.ok(q.choices.includes(q.answer));assert.equal(new URL(q.source).hostname,'www.thiel.edu');assert.ok(q.fact);}
});
function harness(){const elements=new Map();const el=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',value:'',focus(){},querySelector(){return {focus(){}};},querySelectorAll(){return [];}});return elements.get(id);};const storage=new Map();const ctx=vm.createContext({document:{getElementById:el},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},confirm:()=>true,Math,console});vm.runInContext(fs.readFileSync('questions.js','utf8'),ctx);vm.runInContext(fs.readFileSync('app.js','utf8'),ctx);return {ctx,el,run:code=>vm.runInContext(code,ctx)};}
test('category round, answer locking, perfect score, storage and replay',()=>{
 const h=harness();h.el('category').value='Media';h.el('length').value='all';h.run('start()');
 assert.equal(h.run('round.length'),11);assert.ok(h.run("round.every(q=>q.category==='Media')"));assert.equal(h.run('new Set(round.map(q=>q.id)).size'),11);
 for(let i=0;i<11;i++){h.run('answer(round[index].answer);answer(round[index].answer)');assert.equal(h.run('score'),i+1);h.el('next').onclick();}
 assert.ok(h.el('game').innerHTML.includes('100% correct'));assert.equal(h.run('results.length'),11);assert.equal(h.run('best()'),11);h.el('again').onclick();assert.ok(h.el('game').innerHTML.includes('Pick your round.'));
});
test('mixed quick round, wrong answer, and quit',()=>{const h=harness();h.el('category').value='All categories';h.el('length').value='10';h.run('start()');assert.equal(h.run('round.length'),10);h.run('answer(round[index].choices.find(c=>c!==round[index].answer))');assert.equal(h.run('score'),0);assert.equal(h.run('results[0].correct'),false);assert.ok(h.el('feedback').innerHTML.includes('Read the Thiel source'));h.el('quit').onclick();assert.ok(h.el('game').innerHTML.includes('Pick your round.'));});

test('copy score uses clipboard and falls back when blocked',async()=>{const h=harness();h.el('category').value='Media';h.el('length').value='all';h.run('start()');let copied='';h.ctx.navigator={clipboard:{writeText:async text=>{copied=text;}}};await h.run('copyScore()');assert.ok(copied.includes('0/11'));assert.equal(h.el('share-status').textContent,'Score and game link copied!');h.ctx.navigator={clipboard:{writeText:async()=>{throw Error('Denied');}}};h.el('share-fallback').select=()=>{};await h.run('copyScore()');assert.equal(h.el('share-fallback').hidden,false);assert.ok(h.el('share-fallback').value.includes('https://thiel.s.gy/thiel-trivia'));});
test('share cancellation does not trigger fallback',async()=>{const h=harness();h.ctx.navigator={share:async()=>{const e=Error();e.name='AbortError';throw e;}};await h.run('shareScore()');assert.equal(h.el('share-fallback').value,'');});

test('136-question full round has eight categories and no photo questions',()=>{const h=harness();h.el('category').value='All categories';h.el('length').value='all';h.run('start()');assert.equal(h.run('round.length'),136);assert.equal(h.run('new Set(round.map(q=>q.category)).size'),8);assert.ok(h.run('round.every(q=>!q.image)'));for(let i=0;i<136;i++){h.run('answer(round[index].answer)');h.el('next').onclick();}assert.equal(h.run('score'),136);assert.ok(h.el('game').innerHTML.includes('100% correct'));});

test('requested questions removed and original IDs retained',()=>{const removed=[134,13,42,46,92,93,55,58,143,129,37,96,97,108,147,148,149,150,151,155,60,62,66,77];assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,136);assert.ok(QUESTIONS.every(q=>!removed.includes(q.id)));assert.ok(QUESTIONS.some(q=>q.id===160));assert.ok(QUESTIONS.some(q=>q.id===14));});
