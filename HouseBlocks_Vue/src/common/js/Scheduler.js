let _handle
export default function scheduleUpdate(update, dt) {
  if (dt === undefined) {
    return null
  } else {
    _handle = setInterval(() => {
      update(dt)
    }, dt)
    return {
      unscheduleUpdate() {
        clearInterval(_handle)
      }
    }
  }
}
