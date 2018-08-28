var globalData = {
    HouseVector:null,
    numFive:null,
    score:null,
    
    randColor: function () {
        var c1 = 55 + 200 * cc.random0To1()
        var c2 = 55 + 200 * cc.random0To1()
        var c3 = 55 + 200 * cc.random0To1()
        var c4 = 55 + 200 * cc.random0To1()
        return cc.color(c1, c2, c3, c4)
    }
}

//导出为引用模块
module.exports = globalData