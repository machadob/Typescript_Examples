interface MotorVehicle {
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}

class Camry implements MotorVehicle{
    startEngine(): boolean {
        return true;
    }    
    stopEngine(): boolean {
        return true;
    }
    brake(): boolean {
        return true;
    }
    accelerate(speed: number): void {
        console.log("Accelerating! at : " + speed + " miles/hr");
    }
    honk(howLong: number): void {
        console.log("Horn Ok!");
    }
}

let car:MotorVehicle = new Camry();
car.accelerate(100)


interface Flyable {
    fly(howHigh: number);
    land();
  }
  interface Swimmable {
    swim(howFar: number);
  }

  class Car implements MotorVehicle, Flyable, Swimmable {
      startEngine(): boolean {
          return true;
      }      
      stopEngine(): boolean {
          return true;
      }
      brake(): boolean {
        return true;
      }
      accelerate(speed: number): void {
        console.log("Accelerating! at : " + speed + " miles/hr");
      }
      honk(howLong: number): void {
        console.log("Horn Ok!");
      }
      fly(howHigh: number) {
          return 7;
      }
      land() {
        console.log("Landing!");
      }
      swim(howFar: number) {
        console.log("Swimming! : " + howFar + " miles");
      }

    // Implement all the methods from three
    // interfaces here
  }
