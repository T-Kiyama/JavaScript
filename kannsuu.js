//P18 succ �Ƃ����ϐ��ɃɎ���Ή��t���Ċ֐����Ƃ��ėp����B
var succ = (x) => {
  return x +1;
}

//P22 �����Z�̒�`
var succ = (n) =>{
  return n +1;
}

var prev = (n) =>{
  return n-1;
}
//math�I�u�W�F�N�g��add�֐��𖄂ߍ��񂾗�ɒʂ����@�\�����֐����܂Ƃ߂���B
var math = {
  add:(n,m) => {
    return n+m;
  }
}

//P35 forEach���\�b�h�ł�sum�֐��i�z��̊e�v�f�̘a��Ԃ��j
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
//while���g����add�֐�
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

//P29 �ׂ���
var exponential = (n,m) => {
  return times(m, multiply, n, 1);
}
//column

//P23
var a = (n) =>{
  if(n === 1){
    return 1;//����1
  }else{
    return a(n-1) + 3;//����3
  }
};
