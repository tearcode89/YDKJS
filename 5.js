// 다음 코드에서 this를 각각 예측해보세요

var obj = {

    outer: function (){
        console.log(this); // 1 
        var innerFunc = function (){
            console.log(this) // 2 3
        }
        innerFunc();

        var obj2 = {
            innerMethod : innerFunc
        };
        obj2.innerMethod();
    }
}
obj1.outer();