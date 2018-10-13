import cp from 'chipmunk'

export default function cpSpace() {
  let space
  return (function init() {
    space = space || new cp.Space()
    space.iterations = 10
    return {
      step(dt) {
        space.step(dt)
      },
      setGravity(value) {
        space.gravity = cp.v(0, value)
      },
      addBody(body) {
        body = new cp.Body(body.mass, cp.momentForBox(body.mass, body.width, body.height))
        space.addBody(body)
        return body
      },
      addEdge() {
        let staticBody = space.staticBody
        let width = 360
        let walls = [
          new cp.SegmentShape(staticBody, cp.v(0, -100), cp.v(width, -100), 10)
        ]
        for (var i = 0; i < walls.length; i++) {
          let shape = walls[i]
          //弹性系数
          shape.setElasticity(0)
          //摩擦系数
          shape.setFriction(10)
          space.addStaticShape(shape)

        }

      }
    }
  }())
}
