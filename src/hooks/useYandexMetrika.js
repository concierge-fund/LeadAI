export const useYandexMetrika = () => {
  const reachGoal = (goalName) => {
    if (typeof window.ym !== 'undefined') {
      window.ym(100226804, 'reachGoal', goalName);
    }
  };

  return { reachGoal };
}; 