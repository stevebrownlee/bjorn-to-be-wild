const cheapestTrails = trails => {
    const lowCost = []

    for (const trail of trails) {
        if (trail.price.length < 3) {
            lowCost.push(trail)
        }
    }

    return lowCost
}

console.log('\n-------- Low Cost Trails ---------\n')

const cheapTrails = cheapestTrails(trails)


for (const trail of cheapTrails) {
    console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} miles long. The highlighted plant for the trip is ${trail.plantHighlight}`)
}