/* --- Day 1: The Tyranny of the Rocket Equation ---

Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

    For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
    For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
    For a mass of 1969, the fuel required is 654.
    For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?

Your puzzle answer was 3346639.
--- Part Two ---

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

    A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
    At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

Your puzzle answer was 5017110. */

const input = [
  88062,
  147838,
  73346,
  80732,
  89182,
  86798,
  145656,
  53825,
  79515,
  78250,
  143033,
  53680,
  89366,
  123255,
  74974,
  65373,
  107733,
  118266,
  50726,
  87810,
  104355,
  85331,
  109624,
  54282,
  107472,
  119291,
  128702,
  81132,
  94609,
  105929,
  63918,
  113360,
  66932,
  145080,
  132130,
  63858,
  104334,
  140635,
  67642,
  111552,
  93446,
  59263,
  133164,
  119788,
  97327,
  77379,
  144054,
  110747,
  89394,
  123533,
  86026,
  124422,
  108855,
  125000,
  99270,
  55789,
  146945,
  103156,
  141044,
  94238,
  136833,
  54370,
  69178,
  142349,
  72239,
  149992,
  50901,
  112759,
  105467,
  90841,
  55693,
  52532,
  92343,
  134889,
  143351,
  123359,
  134972,
  59986,
  85415,
  136521,
  81581,
  131078,
  131201,
  56194,
  142135,
  69982,
  140667,
  110013,
  67772,
  108135,
  92591,
  87200,
  78189,
  73407,
  145395,
  131869,
  143480,
  82068,
  82423,
  110819
]

const test = [
  12,
  14,
  1969,
  100756
]

const calculateFuel = (mass) => Math.floor(mass / 3) - 2

const calculateAllFuel = (mass) => {
  const moduleFuel = calculateFuel(mass)
  return moduleFuel <= 0 ? 0 : moduleFuel + calculateAllFuel(moduleFuel)
}

const reducer = (a, c) => a + calculateAllFuel(c)

const totalFuel = input.reduce(reducer, 0)

console.log(totalFuel)
