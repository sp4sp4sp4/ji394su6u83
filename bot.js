const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '抽卡') {
    var arr=[];
          var json={};
  var a=Math.round(Math.random()*100);
  var b=Math.round(Math.random()*100);
  var c=Math.round(Math.random()*100);
  var d=Math.round(Math.random()*100);
  var e=Math.round(Math.random()*100);
  var f=Math.round(Math.random()*100);
  var g=Math.round(Math.random()*100);
  var h=Math.round(Math.random()*100);
  var i=Math.round(Math.random()*100);
  var j=Math.round(Math.random()*100);
  var r=0;
  var s=0;
  var go=0
  //a
  if (a>98){
a='<:rb:576472209971740717>'
r=r+50
}else {
  a='<:gold:576472312111431701>'
  go=go+10
}
//b
  if (b>98){
b='<:rb1:576472209971740717> '
r=r+50
}else if (b<77) {
  b='<:silver:576472344978259971>'
  s=s+1
}else {
  b='<:gold:576472312111431701>'
  go=go+10
}
//c
if (c>98){
c='<:rb:576472209971740717>'
r=r+50
}else if (c<77) {
c='<:silver:576472344978259971>'
s=s+1
}else {
c='<:gold:576472312111431701>'
go=go+10
}
//d
if (d>98){
d='<:rb:576472209971740717>'
r=r+50
}else if (d<77) {
d='<:silver:576472344978259971>'
s=s+1
}else {
d='<:gold:576472312111431701>'
go=go+10
}
//e
if (e>98){
e='<:rb:576472209971740717>'
r=r+50
}else if (e<77) {
e='<:silver:576472344978259971>'
s=s+1
}else {
e='<:gold:576472312111431701>'
go=go+10
}
//f
if (f>98){
f='<:rb:576472209971740717>'
r=r+50
}else if (f<77) {
f='<:silver:576472344978259971>'
s=s+1
}else {
f='<:gold:576472312111431701>'
go=go+10
}
//g
if (g>98){
g='<:rb:576472209971740717>'
r=r+50
}else if (g<77) {
g='<:silver:576472344978259971>'
s=s+1
}else {
g='<:gold:576472312111431701>'
go=go+10
}
//h
if (h>98){
h='<:rb:576472209971740717>'
r=r+50
}else if (h<77) {
h='<:silver:576472344978259971>'
s=s+1
}else {
h='<:gold:576472312111431701>'
go=go+10
}
//i
if (i>98){
i='<:rb:576472209971740717>'
r=r+50
}else if (i<77) {
i='<:silver:576472344978259971>'
s=s+1
}else {
i='<:gold:576472312111431701>'
go=go+10
}
//j
if (j>98){
j='<:rb:576472209971740717>'
r=r+50
}else if (j<77) {
j='<:silver:576472344978259971>'
s=s+1
}else {
j='<:gold:576472312111431701>'
go=go+10
}
//
var m=s+go+r;
  arr.push(a);
  arr.push(b);
  arr.push(c);
  arr.push(d);
  arr.push(e);
  arr.push(f);
  arr.push(g);
  arr.push(h);
  arr.push(i);
  arr.push(j);
arr.push('(+')
arr.push(m)
arr.push(')')

    console.log(arr)
if (r>=150){
arr.push('連模擬的都能抽這麼多，遊戲內大概完蛋了')
    }

else if (r==100){
arr.push('在這邊抽到兩張也覺得開心，反正遊戲中還是抽不到')
    }
else if (r==50){
  arr.push('一張而已也在那邊高興，是多久沒看過女生？')
}
else if(m>=50&r<50){
  arr.push('可撥仔真的以為+50就有彩嗎')
}
else if(m==19){
  arr.push('連抽模擬的都能+19，你還是砍遊戲吧')
}
else if (Math.random()*100>80){
  arr.push('你是想要備標註，才一直來抽的邊緣人嗎?')
}
else if (Math.random()*100>60){
  arr.push('可不可以不要浪費時間，反正你又抽不到')
}
else if (Math.random()*100>40){
  arr.push('請問一下，你還要抽幾次')
}
else if (Math.random()*100>20){
  arr.push('死肥宅不要再抽了，多出門走走好嗎')
}
else {
  arr.push('你是想被罵才一直抽的嗎?')
}

var arr=arr.join('');
      msg.reply(arr);


  }
});

bot.login(config.token);
