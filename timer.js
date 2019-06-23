const MILISECONDS_IN_HOUR = 60 * 60 * 1000

async function* relativisticTimer() {
  let tick = 0

  // my productivity is highest at 18:00, and lowest at 6:00
  async function ticker() {
    return new Promise((resolve, reject) => {
      const hourNow = new Date().getHours()
      const hourShifted = hourNow - 18
      const hourDomained = hourShifted / 24 * 2 * Math.PI
      const productivity = Math.cos(hourDomained) + 1
      const seconds = productivity ? 1 / productivity * 1000 : 99999999999
      const time = seconds > MILISECONDS_IN_HOUR ? MILISECONDS_IN_HOUR : seconds
      console.log(time)
      setTimeout(resolve, time)
    })
  }

  while (true) {
    await ticker()
    yield tick++
  }
}

async function main() {
  const timer = relativisticTimer()

  for await(const tick of timer) {
    console.log(tick)
  }
}

main()
