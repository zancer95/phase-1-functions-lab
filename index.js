function distanceFromHqInBlocks(block){
    if (block >= 42){
        return block - 42
    }
    else {
        return 42 - block
    }
}
//function distanceFromHqInFeet(block){
    //const blocks = distanceFromHqInBlocks(block)
    //const feet = blocks * 264
    //return feet

    //return distanceFromHqInBlocks(block) * 264}

function distanceFromHqInFeet(block){
    const blocks = distanceFromHqInBlocks(block);
    const feet = blocks * 264
    return feet
    //if (feet >= 42){
        //return ((feet - 42)*block);
    //}
    //else {
        //return ((42 - feet)*block);
    //}
}

function distanceTravelledInFeet(start, destination){
    const block = 264
    if (destination > start){
        return ((destination - start)*block);
    }
    else {
    return ((start - destination)*block);
    }
}

function calculatesFarePrice(start, destination){
    const price = 0.02
    if ((distanceTravelledInFeet(start, destination)) < 400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return ((distanceTravelledInFeet(start, destination) - 400) * price)
    }
    else if ((distanceTravelledInFeet(start, destination)) > 2000 && (distanceTravelledInFeet(start, destination)) < 2500){
        return 25
    }
    else
        return "cannot travel that far"
   }