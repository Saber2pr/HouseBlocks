import cp from 'chipmunk'

export default function cpSpace() {
  let space
  return (function init() {
    space = space || new cp.Space()
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
      }
    }
  }())
}
