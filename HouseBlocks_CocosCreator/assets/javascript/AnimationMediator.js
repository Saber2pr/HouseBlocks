var AnimationMediator = {
    //背景循环
    backgroundLoop (Sprite, pix) {
        if (Sprite.node.x > -pix) {
            Sprite.node.x-=1
            Sprite.node.y-=1
        } else {
            Sprite.node.setPosition(0, 0)
        }
    }
}

module.exports = AnimationMediator
