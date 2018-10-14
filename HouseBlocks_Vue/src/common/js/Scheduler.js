/*
 * @Author: AK-12 
 * @Date: 2018-10-11 20:01:07 
 * @Last Modified by:   AK-12 
 * @Last Modified time: 2018-10-11 20:01:07 
 */
/**
 *#### update a function per dt
 *
 * @export scheduleUpdate
 * @param {*} update
 * @param {*} dt
 * @returns unscheduleUpdate
 */
export default function scheduleUpdate(update, dt) {
  let _handle

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
