/* =============================
script.js
============================= */
const fleet=[
{type:'Taisor',title:'Toyota Taisor',count:3,pricePerDay:55},
{type:'Brezza',title:'Suzuki Brezza',count:3,pricePerDay:50},
{type:'Hyryder',title:'Toyota Hyryder',count:1,pricePerDay:75}
];
const bookings=[];


function availableCount(type,start,end){
const total=fleet.find(x=>x.type===type).count;
if(!start||!end) return total;
const s=new Date(start), e=new Date(end);
let taken=0;
bookings.forEach(b=>{
if(b.type!==type) return;
const bs=new Date(b.start), be=new Date(b.end);
if(!(e<bs || s>be)) taken++;
});
return Math.max(0,total-taken);
}


function renderFleet(filter='all',start=null,end=null){
const box=document.getElementById('fleetList');
box.innerHTML='';
fleet.forEach(car=>{
if(filter!=='all' && car.type!==filter) return;
const avail=availableCount(car.type,start,end);
const div=document.createElement('div');
div.className='car';
div.innerHTML=`
<div class="media">${car.title}</div>
<div style="display:flex;justify-content:space-between;align-items:center">
<div>
<div style="font-weight:700">${car.title}</div>
</div>
<div class="price">$${car.pricePerDay}/day</div>
renderFleet();