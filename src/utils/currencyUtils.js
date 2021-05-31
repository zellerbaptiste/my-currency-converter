/**
 *
 * @param amount
 * @param data
 * @param mode
 * @returns {number}
 */
export function convert({ amount = 0, state = {} }) {
  debugger;
  const rate = Object.values(state.data)[0];
  const result = amount * rate;

  return Math.round(result * 1000) / 1000;
}
