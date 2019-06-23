async function* relativisticTimer() {
  let tick = 0

  async function ticker() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
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
