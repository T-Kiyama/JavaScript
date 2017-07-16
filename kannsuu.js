//P18 succ という変数にλ式を対応付けて関数名として用いる。
var succ = (x) => {
  return x +1;
}

//P22 足し算の定義
var succ = (n) =>{
  return n +1;
}

var prev = (n) =>{
  return n-1;
}
//mathオブジェクトにadd関数を埋め込んだ例に通った機能を持つ関数をまとめたり。
var math = {
  add:(n,m) => {
    return n+m;
  }
}

//P35 forEachメソッドでのsum関数（配列の各要素の和を返す）
var sum = (array) => {
  var result = 0;
  array.forEach((item) => {
    result = result +  item;
  });
  return result;
};
// var add = (x,y)=>{
//   if(y<1){
//     return x;
//   }else{
//     return add(succ(x),prev(y));
//   }
// }
//whileを使ったadd関数
var addwhile = (x,y) => {
  while(y>0){
    x = x+1;
    y = y-1;
  }
  return x;
}

//P26
var times = (count,fun,arg,memo) => {
  if(count > 1){
    return times(count-1,fun,arg,fun(memo,arg));
  }else{
    return fun(memo,arg);
  }
};
var multiply = (n,m) => {
  return times(m,add,n,0);
}

//P29 べき乗
var exponential = (n,m) => {
  return times(m, multiply, n, 1);
}
//column

//P23
var a = (n) =>{
  if(n === 1){
    return 1;//初項1
  }else{
    return a(n-1) + 3;//公差3
  }
};
