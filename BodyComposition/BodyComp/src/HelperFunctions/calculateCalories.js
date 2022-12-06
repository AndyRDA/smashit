export default function calculateCalories(
  { mass, height, age, sex, bodyFatPercentage },
  setBaseCalories
) {
  function mifflinCalorieFormula() {
    let sexFactor = sex === "male" ? 5 : -151;
    let basalMetabolicRate = 10 * mass + 6.25 * height - 5 * age + sexFactor;
    return basalMetabolicRate;
  }

  function katchCalorieFormula() {
    let basalMetabolicRate =
      370 + 21.6 * (mass * (1 - bodyFatPercentage / 100));
    return basalMetabolicRate;
  }

  function harrisCalorieFormula() {
    let basalMetabolicRate =
      sex === "male"
        ? 13.397 * mass + 4.799 * height - 5.677 * age + 88.362
        : 9.247 * mass + 3.098 * height - 4.33 * age + 447.593;
    return basalMetabolicRate;
  }

  let maintenanceCalories =
    bodyFatPercentage > 0 ? katchCalorieFormula() : mifflinCalorieFormula();
  setBaseCalories(maintenanceCalories);
  return maintenanceCalories;
}
