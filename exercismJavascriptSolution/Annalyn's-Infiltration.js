export function canExecuteFastAttack(knightIsAwake) {
    if(!knightIsAwake){
      return true
    } else {
      return false
    }
  }
  export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if( knightIsAwake || archerIsAwake || prisonerIsAwake){
      return true
    } else {
      return false
    }
  }
  export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(!archerIsAwake && prisonerIsAwake){
      return true
    }else{
      return false
    }
  }
  export function canFreePrisoner( 
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
   ) {
    if((!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake) || (petDogIsPresent && !archerIsAwake)){
      return true
    }
      return false
  }